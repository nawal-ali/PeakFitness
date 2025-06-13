import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
  });
  const [signUpErrors, setSignUpErrors] = useState({});
  const [showSignUpPasswordHint, setShowSignUpPasswordHint] = useState(false);
  const [signUpPasswordRequirements, setSignUpPasswordRequirements] = useState({
    length: false,
    number: false,
    lowercase: false,
    uppercase: false,
    special: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkPasswordRequirements = (password, setRequirements) => {
    const requirements = {
      length: password.length >= 8,
      number: /\d/.test(password),
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setRequirements(requirements);
    return requirements;
  };

  const validateSignUp = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    if (!signUpData.username || signUpData.username.length < 3) {
      errors.username = true;
    }
    if (!emailRegex.test(signUpData.email)) {
      errors.email = true;
    }
    if (!passwordRegex.test(signUpData.password)) {
      errors.password = true;
    }

    setSignUpErrors(errors);
    if (Object.keys(errors).length > 0) {
      toast.error("Please fix the errors in the form");
    }
    return Object.keys(errors).length === 0;
  };

  const BASE_URL = "http://localhost:5000/api/auth";
  const navigate = useNavigate();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (validateSignUp()) {
      try {
        const response = await axios.post(`${BASE_URL}/signup`, signUpData);
        const message = response.data.message;
        if (message === "User registered successfully!") {
          toast.success("Sign up successful! Redirecting to login...");
          setTimeout(() => navigate("/Login"), 2000); // Redirect after 2 seconds
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message || "An error occurred during signup"
        );
      }
    }
  };

  return (
    <div className="container-signup">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className="left-panel-signup">
        <div className="signup-form">
          <h1 className="header-1 mt-4">Sign Up</h1>
          <form onSubmit={handleSignUpSubmit} className="row">
            <div className="col-12">
              <label htmlFor="Username">Username</label>
              <div className="input-with-icon">
                {signUpErrors.username && (
                  <i
                    className="bx bxs-error-circle"
                    style={{ fontSize: "16px", color: "#ff4d4f", marginRight: "8px" }}
                  ></i>
                )}
                <InputText
                  id="Username"
                  value={signUpData.username}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSignUpData({ ...signUpData, username: value });
                    if (signUpErrors.username) {
                      setSignUpErrors((prev) => ({ ...prev, username: "" }));
                    }
                  }}
                  className={`custom-input ${signUpErrors.username ? "input-error" : ""}`}
                  placeholder="Full name"
                  maxLength={50}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="age">Age</label>
              <div className="input-with-icon">
                {signUpErrors.age && (
                  <i
                    className="bx bxs-error-circle"
                    style={{ fontSize: "16px", color: "#ff4d4f", marginRight: "8px" }}
                  ></i>
                )}
                <InputText
                  id="age"
                  value={signUpData.age}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSignUpData({ ...signUpData, age: value });
                    if (signUpErrors.age) {
                      setSignUpErrors((prev) => ({ ...prev, age: "" }));
                    }
                  }}
                  className={`custom-input ${signUpErrors.age ? "input-error" : ""}`}
                  placeholder="Age"
                  maxLength={2}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="gender">Gender</label>
              <div className="input-with-icon">
                {signUpErrors.gender && (
                  <i
                    className="bx bxs-error-circle"
                    style={{ fontSize: "16px", color: "#ff4d4f", marginRight: "8px" }}
                  ></i>
                )}
                <InputText
                  id="gender"
                  value={signUpData.gender}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSignUpData({ ...signUpData, gender: value });
                    if (signUpErrors.gender) {
                      setSignUpErrors((prev) => ({ ...prev, gender: "" }));
                    }
                  }}
                  className={`custom-input ${signUpErrors.gender ? "input-error" : ""}`}
                  placeholder="gender"
                  maxLength={6}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="weight">Weight</label>
              <div className="input-with-icon">
                {signUpErrors.weight && (
                  <i
                    className="bx bxs-error-circle"
                    style={{ fontSize: "16px", color: "#ff4d4f", marginRight: "8px" }}
                  ></i>
                )}
                <InputText
                  id="weight"
                  value={signUpData.weight}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSignUpData({ ...signUpData, weight: value });
                    if (signUpErrors.weight) {
                      setSignUpErrors((prev) => ({ ...prev, weight: "" }));
                    }
                  }}
                  className={`custom-input ${signUpErrors.weight ? "input-error" : ""}`}
                  placeholder="ex. 40 kg"
                  maxLength={3}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="height">Height</label>
              <div className="input-with-icon">
                {signUpErrors.height && (
                  <i
                    className="bx bxs-error-circle"
                    style={{ fontSize: "16px", color: "#ff4d4f", marginRight: "8px" }}
                  ></i>
                )}
                <InputText
                  id="height"
                  value={signUpData.height}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSignUpData({ ...signUpData, height: value });
                    if (signUpErrors.height) {
                      setSignUpErrors((prev) => ({ ...prev, height: "" }));
                    }
                  }}
                  className={`custom-input ${signUpErrors.height ? "input-error" : ""}`}
                  placeholder="ex. 160 cm"
                  maxLength={3}
                />
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="email-signup">Email</label>
              <div className="input-with-icon">
                {signUpErrors.email && (
                  <i
                    className="bx bxs-error-circle"
                    style={{ fontSize: "16px", color: "#ff4d4f", marginRight: "8px" }}
                  ></i>
                )}
                <InputText
                  id="email-signup"
                  value={signUpData.email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSignUpData({ ...signUpData, email: value });
                    if (signUpErrors.email) {
                      setSignUpErrors((prev) => ({ ...prev, email: "" }));
                    }
                  }}
                  className={`custom-input ${signUpErrors.email ? "input-error" : ""}`}
                  placeholder="*******@gmail.com"
                  maxLength={100}
                />
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="password-signup">Password</label>
              <div className="password-container">
                {signUpErrors.password && (
                  <i
                    className="bx bxs-error-circle"
                    style={{ fontSize: "16px", color: "#ff4d4f", marginRight: "8px" }}
                  ></i>
                )}
                <InputText
                  id="password-signup"
                  type={showPassword ? "text" : "password"}
                  value={signUpData.password}
                  onChange={(e) => {
                    const password = e.target.value;
                    setSignUpData({ ...signUpData, password });
                    const requirements = checkPasswordRequirements(
                      password,
                      setSignUpPasswordRequirements
                    );
                    const allRequirementsMet = Object.values(
                      requirements
                    ).every((req) => req);
                    setShowSignUpPasswordHint(
                      password.length > 0 && !allRequirementsMet
                    );
                    if (signUpErrors.password) {
                      setSignUpErrors((prev) => ({ ...prev, password: "" }));
                    }
                  }}
                  onBlur={() => setShowSignUpPasswordHint(false)}
                  className={`custom-input ${signUpErrors.password ? "input-error" : ""}`}
                  placeholder="●●●●●●"
                  maxLength={50}
                />
                <i
                  className={`bx ${
                    showPassword ? "bx-show" : "bx-low-vision"
                  } password-icon`}
                  onClick={togglePasswordVisibility}
                />
                {showSignUpPasswordHint && (
                  <div className="password-hint-popup">
                    <h4>Password should be:</h4>
                    <ul>
                      <li
                        className={
                          signUpPasswordRequirements.length ? "met" : ""
                        }
                      >
                        <i
                          className={`bx ${
                            signUpPasswordRequirements.length
                              ? "bx-check"
                              : "bx-x"
                          }`}
                          style={{
                            fontSize: "16px",
                            color: signUpPasswordRequirements.length
                              ? "#00cc00"
                              : "#ff4d4f",
                          }}
                        />
                        At least 8 characters long
                      </li>
                      <li
                        className={
                          signUpPasswordRequirements.number ? "met" : ""
                        }
                      >
                        <i
                          className={`bx ${
                            signUpPasswordRequirements.number
                              ? "bx-check"
                              : "bx-x"
                          }`}
                          style={{
                            fontSize: "16px",
                            color: signUpPasswordRequirements.number
                              ? "#00cc00"
                              : "#ff4d4f",
                          }}
                        />
                        At least 1 number
                      </li>
                      <li
                        className={
                          signUpPasswordRequirements.lowercase ? "met" : ""
                        }
                      >
                        <i
                          className={`bx ${
                            signUpPasswordRequirements.lowercase
                              ? "bx-check"
                              : "bx-x"
                          }`}
                          style={{
                            fontSize: "16px",
                            color: signUpPasswordRequirements.lowercase
                              ? "#00cc00"
                              : "#ff4d4f",
                          }}
                        />
                        At least 1 lowercase letter
                      </li>
                      <li
                        className={
                          signUpPasswordRequirements.uppercase ? "met" : ""
                        }
                      >
                        <i
                          className={`bx ${
                            signUpPasswordRequirements.uppercase
                              ? "bx-check"
                              : "bx-x"
                          }`}
                          style={{
                            fontSize: "16px",
                            color: signUpPasswordRequirements.uppercase
                              ? "#00cc00"
                              : "#ff4d4f",
                          }}
                        />
                        At least 1 uppercase letter
                      </li>
                      <li
                        className={
                          signUpPasswordRequirements.special ? "met" : ""
                        }
                      >
                        <i
                          className={`bx ${
                            signUpPasswordRequirements.special
                              ? "bx-check"
                              : "bx-x"
                          }`}
                          style={{
                            fontSize: "16px",
                            color: signUpPasswordRequirements.special
                              ? "#00cc00"
                              : "#ff4d4f",
                          }}
                        />
                        At least 1 special symbol
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 mt-4">
              <button className="SignUp-button-Auth-Main-1" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="right-panel-signup">
        <div className="welcome-text-signup">
          <h1>Create Account</h1>
          <p className="child-1">
            To Keep Connected with us <br />
            Please login with your <br />
            personal info
          </p>
          <p className="child-2">Already have an account ?</p>
          <Link to="/login">
            <button className="Login-button-Auth-Main">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;