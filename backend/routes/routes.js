const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");
// const User = require('../models'); 
const { User } = require('../models');

const authenticateToken = require('../middleware/authMiddleware');
const { blacklistToken } = require("../middleware/tokenBlacklist");


require('dotenv').config();

const router = express.Router();

// **Sign-Up**
router.post('/signup', async (req, res) => {
  const { username, email, password, weight,
    height,
    gender,
    age, } = req.body;

  try {
    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    // Create user WITHOUT verification token
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      weight,
      height,
      gender,
      age
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });

  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// **Sign-In**
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("Login Route - JWT_SECRET:", process.env.JWT_SECRET, "Token:", token);

    res.cookie('token', token, { httpOnly: true })
      .json({ action: 'success', token, userId: user._id });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// **Sign-Out**
router.post("/logout", authenticateToken, (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(400).json({ message: "No token provided" });

  blacklistToken(token);  // Add token to the blacklist
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});


// **Forgot Password Route**
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const resetToken = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    user.resetPasswordToken = resetToken;
    await user.save();

    res.status(200).json({
      message: 'Debug mode: Use this link to reset password',
      resetLink: `http://localhost:5000/api/auth/reset-password/${resetToken}`
    });


  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// **Verify Reset Token & Change Password**
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      email: decoded.email,
      resetPasswordToken: token // Ensure token matches
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Update password and clear token
    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = null;
    await user.save();

    res.json({ message: "Password reset successful" });
  } catch (error) {
    res.status(400).json({ message: "Invalid or expired token" });
  }
});



module.exports = router;
