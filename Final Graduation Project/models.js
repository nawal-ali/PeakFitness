const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Regular expression for email validation
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: { type: String, required: true },
  //isVerified: { type: Boolean, default: false },
  // verificationToken: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },

  weight: { type: Number, default: null },
  height: { type: Number, default: null },
  gender: { type: String, enum: ["male", "female"], default: null },
  age: { type: Number, default: null }
});


const CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // References User model
    required: true
  },
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


// Fitness Data Model (new)
const FitnessDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  weight: { type: Number, required: true }, // kg
  height: { type: Number, required: true }, // cm
  age: { type: Number },
  gender: {
    type: String,
    enum: ["male", "female"]
  },
  bmi: { type: Number },
  calories: { type: Number },
  idealWeight: { type: Number },
  bodyFat: { type: Number }
}, { timestamps: true });


const User = mongoose.model('User', UserSchema);
const Comment = mongoose.model('Comment', CommentSchema);
const FitnessData = mongoose.model('FitnessData', FitnessDataSchema);

module.exports = {
  User,
  Comment,
  FitnessData
};
