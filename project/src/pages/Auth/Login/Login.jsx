import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [signInErrors, setSignInErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateSignIn = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(signInData.email)) {
      errors.email = "Invalid email format";
    }
    if (!signInData.password) {
      errors.password = "Password is required";
    }

    setSignInErrors(errors);

    if (Object.keys(errors).length > 0) {
      toast.warning("Please fix the highlighted errors");
    }

    return Object.keys(errors).length === 0;
  };

  const BASE_URL = "http://localhost:5000/api/auth";
  const navigate = useNavigate();

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    if (validateSignIn()) {
      try {
        const response = await axios.post(`${BASE_URL}/login`, signInData);
        if (response.data.token) {
          localStorage.setItem("islogged", "true");
          localStorage.setItem("token", response.data.token);
          //|| "user"
          localStorage.setItem("role", response.data.role );
          localStorage.setItem("userId", response.data.userId );
//           localStorage.setItem("user", JSON.stringify({
//   token: response.data.token,
//   role: response.data.role
// }));


          localStorage.setItem("showLoginSuccess", "true");
          console.log("showLoginSuccess set to true"); // Debug to confirm
          navigate("/"); // Navigate immediately
        } else {
          toast.error("Login failed. Please try again.");
        }
      } catch (error) {
        toast.error("Server error. Please try again later.");
        console.error("Login error:", error.response ? error.response.data : error.message);
      }
    }
  };

  return (
    <div className="container-Auth-Main" id="container">
      <div className="left-panel-Auth-Main">
        <div className="welcome-text-Auth-Main">
          <h1>Welcome Back!</h1>
          <p className="child-1">
            Enter your personal details <br />
            and start journey with us
          </p>
          <p className="child-2">New here ?</p>
          <Link to="/signup">
            <button className="SignUp-button-Auth-Main">Sign Up</button>
          </Link>
        </div>
      </div>
      <div className="form-container-Auth-Main sign-in-container-Auth-Main">
        <form onSubmit={handleSignInSubmit} className="SignIn-Form-Auth-Main">
          <h1 className="Header1-Auth-Main">Login</h1>
          <label htmlFor="email-login">Email</label>
          <InputText
            id="email-login"
            value={signInData.email}
            onChange={(e) => {
              const value = e.target.value;
              setSignInData({ ...signInData, email: value });
              if (signInErrors.email) {
                setSignInErrors((prev) => ({ ...prev, email: "" }));
              }
            }}
            className={`custom-input-Auth-Main ${
              signInErrors.email ? "input-error-Auth-Main" : ""
            }`}
            placeholder="*******@gmail.com"
            maxLength={100}
          />
          {signInErrors.email && (
            <div className="error-message-Auth-Main">
              <i
                className="bx bxs-error-circle"
                style={{ fontSize: "16px", color: "#ff4d4f" }}
              ></i>
              <span>{signInErrors.email}</span>
            </div>
          )}
          <label htmlFor="password-login">Password</label>
          <div className="password-container-Auth-Main">
            <InputText
              id="password-login"
              type={showPassword ? "text" : "password"}
              value={signInData.password}
              onChange={(e) => {
                const password = e.target.value;
                setSignInData({ ...signInData, password });
                if (signInErrors.password) {
                  setSignInErrors((prev) => ({ ...prev, password: "" }));
                }
              }}
              className={`custom-input-Auth-Main ${
                signInErrors.password ? "input-error-Auth-Main" : ""
              }`}
              placeholder="●●●●●●"
              maxLength={50}
            />
            <i
              className={`bx ${
                showPassword ? "bx-show" : "bx-low-vision"
              } password-icon-Auth-Main`}
              onClick={togglePasswordVisibility}
            />
          </div>
          {signInErrors.password && (
            <div className="error-message-Auth-Main">
              <i
                className="bx bxs-error-circle"
                style={{ fontSize: "16px", color: "#ff4d4f" }}
              ></i>
              <span>{signInErrors.password}</span>
            </div>
          )}
          <Link to="/Forget-password" className="Forget-Auth-anchor">
            Forget password ?
          </Link>
          <button className="SignIn-button-Auth-Main" type="submit">
            Sign In
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;