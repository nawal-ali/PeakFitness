import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import "./Login.css";

const AuthForm = () => {
    const containerRef = useRef(null);
    const signUpButtonRef = useRef(null);
    const signInButtonRef = useRef(null);

    const [isMobileSignUp, setIsMobileSignUp] = useState(false); // State to toggle forms on mobile
    const [isFadingOut, setIsFadingOut] = useState(false); // State to handle fade-out animation
    const [signUpData, setSignUpData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [signUpErrors, setSignUpErrors] = useState({});

    const [signInData, setSignInData] = useState({
        email: '',
        password: ''
    });
    const [signInErrors, setSignInErrors] = useState({});

    const [showPassword, setShowPassword] = useState(false);
    const [showSignUpPasswordHint, setShowSignUpPasswordHint] = useState(false);

    const [signUpPasswordRequirements, setSignUpPasswordRequirements] = useState({
        length: false,
        number: false,
        lowercase: false,
        uppercase: false,
        special: false
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const checkPasswordRequirements = (password, setRequirements) => {
        const requirements = {
            length: password.length >= 8,
            number: /\d/.test(password),
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };
        setRequirements(requirements);
        return requirements;
    };

    const validateSignUp = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

        if (!signUpData.username || signUpData.username.length < 3) {
            errors.username = "Username must be at least 3 characters";
        }
        if (!emailRegex.test(signUpData.email)) {
            errors.email = "Invalid email format";
        }
        if (!passwordRegex.test(signUpData.password)) {
            errors.password = "Password does not meet requirements";
        }

        setSignUpErrors(errors);
        return Object.keys(errors).length === 0;
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
        return Object.keys(errors).length === 0;
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (validateSignUp()) {
            const sanitizedData = signUpData;
            console.log("Sign Up Data:", sanitizedData);
        }
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        if (validateSignIn()) {
            const sanitizedData = signInData;
            console.log("Sign In Data:", sanitizedData);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        const signUpButton = signUpButtonRef.current;
        const signInButton = signInButtonRef.current;

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active-Auth-Main");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active-Auth-Main");
        });

        return () => {
            signUpButton.removeEventListener('click', () => {
                container.classList.add("right-panel-active-Auth-Main");
            });
            signInButton.removeEventListener('click', () => {
                container.classList.remove("right-panel-active-Auth-Main");
            });
        };
    }, []);

    const toggleFormMobile = () => {
        // Trigger fade-out animation
        setIsFadingOut(true);
        // Wait for the fade-out animation to complete (0.5s) before switching forms
        setTimeout(() => {
            setIsMobileSignUp(!isMobileSignUp);
            setIsFadingOut(false);
        }, 500); // Match the duration of the fade-out animation
    };

    return (
        <div className="container-Auth-Main" id="container" ref={containerRef}>
            {/* Mobile View: Show only one form with fade transition */}
            <div className="mobile-form-wrapper">
                {isMobileSignUp ? (
                    <div className={`form-container-Auth-Main sign-up-container-Auth-Main ${isFadingOut ? 'fade-out' : 'fade'}`}>
                        <form onSubmit={handleSignUpSubmit} className='SignUp-Form-Auth-Main'>
                            <h1 className="Header-1-Auth-Main">Sign Up</h1>

                            <label htmlFor="Username">Username</label>
                            <InputText
                                id="Username"
                                value={signUpData.username}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSignUpData({ ...signUpData, username: value });
                                    if (signUpErrors.username) {
                                        setSignUpErrors((prev) => ({ ...prev, username: '' }));
                                    }
                                }}
                                className={`custom-input-Auth-Main ${signUpErrors.username ? 'input-error-Auth-Main' : ''}`}
                                placeholder='Full name'
                                maxLength={50}
                            />
                            {signUpErrors.username && (
                                <div className="error-message-Auth-Main">
                                    <i className="bx bxs-error-circle" style={{ fontSize: '16px', color: '#ff4d4f' }}></i>
                                    <span>{signUpErrors.username}</span>
                                </div>
                            )}

                            <label htmlFor="email-signup">Email</label>
                            <InputText
                                id="email-signup"
                                value={signUpData.email}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSignUpData({ ...signUpData, email: value });
                                    if (signUpErrors.email) {
                                        setSignUpErrors((prev) => ({ ...prev, email: '' }));
                                    }
                                }}
                                className={`custom-input-Auth-Main ${signUpErrors.email ? 'input-error-Auth-Main' : ''}`}
                                placeholder='*******@gmail.com'
                                maxLength={100}
                            />
                            {signUpErrors.email && (
                                <div className="error-message-Auth-Main">
                                    <i className="bx bxs-error-circle" style={{ fontSize: '16px', color: '#ff4d4f' }}></i>
                                    <span>{signUpErrors.email}</span>
                                </div>
                            )}

                            <label htmlFor="password-signup">Password</label>
                            <div className="password-container-Auth-Main">
                                <InputText
                                    id="password-signup"
                                    type={showPassword ? "text" : "password"}
                                    value={signUpData.password}
                                    onChange={(e) => {
                                        const password = e.target.value;
                                        setSignUpData({ ...signUpData, password });
                                        const requirements = checkPasswordRequirements(password, setSignUpPasswordRequirements);
                                        const allRequirementsMet = Object.values(requirements).every(req => req);
                                        setShowSignUpPasswordHint(password.length > 0 && !allRequirementsMet);
                                        if (signUpErrors.password) {
                                            setSignUpErrors((prev) => ({ ...prev, password: '' }));
                                        }
                                    }}
                                    onBlur={() => setShowSignUpPasswordHint(false)}
                                    className={`custom-input-Auth-Main ${signUpErrors.password ? 'input-error-Auth-Main' : ''}`}
                                    placeholder='●●●●●●'
                                    maxLength={50}
                                />
                                <i
                                    className={`bx ${showPassword ? 'bx-show' : 'bx-low-vision'} password-icon-Auth-Main`}
                                    onClick={togglePasswordVisibility}
                                />
                                {showSignUpPasswordHint && (
                                    <div className="password-hint-popup-Auth-Main">
                                        <h4>Password should be:</h4>
                                        <ul>
                                            <li className={signUpPasswordRequirements.length ? 'met-Auth-Main' : ''}>
                                                <i
                                                    className={`bx ${signUpPasswordRequirements.length ? 'bx-check' : 'bx-x'}`}
                                                    style={{ fontSize: '16px', color: signUpPasswordRequirements.length ? '#00cc00' : '#ff4d4f' }}
                                                />
                                                At least 8 characters long
                                            </li>
                                            <li className={signUpPasswordRequirements.number ? 'met-Auth-Main' : ''}>
                                                <i
                                                    className={`bx ${signUpPasswordRequirements.number ? 'bx-check' : 'bx-x'}`}
                                                    style={{ fontSize: '16px', color: signUpPasswordRequirements.number ? '#00cc00' : '#ff4d4f' }}
                                                />
                                                At least 1 number
                                            </li>
                                            <li className={signUpPasswordRequirements.lowercase ? 'met-Auth-Main' : ''}>
                                                <i
                                                    className={`bx ${signUpPasswordRequirements.lowercase ? 'bx-check' : 'bx-x'}`}
                                                    style={{ fontSize: '16px', color: signUpPasswordRequirements.lowercase ? '#00cc00' : '#ff4d4f' }}
                                                />
                                                At least 1 lowercase letter
                                            </li>
                                            <li className={signUpPasswordRequirements.uppercase ? 'met-Auth-Main' : ''}>
                                                <i
                                                    className={`bx ${signUpPasswordRequirements.uppercase ? 'bx-check' : 'bx-x'}`}
                                                    style={{ fontSize: '16px', color: signUpPasswordRequirements.uppercase ? '#00cc00' : '#ff4d4f' }}
                                                />
                                                At least 1 uppercase letter
                                            </li>
                                            <li className={signUpPasswordRequirements.special ? 'met-Auth-Main' : ''}>
                                                <i
                                                    className={`bx ${signUpPasswordRequirements.special ? 'bx-check' : 'bx-x'}`}
                                                    style={{ fontSize: '16px', color: signUpPasswordRequirements.special ? '#00cc00' : '#ff4d4f' }}
                                                />
                                                At least 1 special symbol
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {signUpErrors.password && (
                                <div className="error-message-Auth-Main">
                                    <i className="bx bxs-error-circle" style={{ fontSize: '16px', color: '#ff4d4f' }}></i>
                                    <span>{signUpErrors.password}</span>
                                </div>
                            )}
                            <button className='SignUp-button-Auth-Main' type="submit">Sign Up</button>
                            <div className="form-switch-link">
                                <span>Already have an account? </span>
                                <button type="button" onClick={toggleFormMobile} className="switch-button-Auth-Main">Login</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className={`form-container-Auth-Main sign-in-container-Auth-Main ${isFadingOut ? 'fade-out' : 'fade'}`}>
                        <form onSubmit={handleSignInSubmit} className='SignIn-Form-Auth-Main'>
                            <h1 className="Header1-Auth-Main">Login</h1>

                            <label htmlFor="email-login">Email</label>
                            <InputText
                                id="email-login"
                                value={signInData.email}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSignInData({ ...signInData, email: value });
                                    if (signInErrors.email) {
                                        setSignInErrors((prev) => ({ ...prev, email: '' }));
                                    }
                                }}
                                className={`custom-input-Auth-Main ${signInErrors.email ? 'input-error-Auth-Main' : ''}`}
                                placeholder='*******@gmail.com'
                                maxLength={100}
                            />
                            {signInErrors.email && (
                                <div className="error-message-Auth-Main">
                                    <i className="bx bxs-error-circle" style={{ fontSize: '16px', color: '#ff4d4f' }}></i>
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
                                            setSignInErrors((prev) => ({ ...prev, password: '' }));
                                        }
                                    }}
                                    className={`custom-input-Auth-Main ${signInErrors.password ? 'input-error-Auth-Main' : ''}`}
                                    placeholder='●●●●●●'
                                    maxLength={50}
                                />
                                <i
                                    className={`bx ${showPassword ? 'bx-show' : 'bx-low-vision'} password-icon-Auth-Main`}
                                    onClick={togglePasswordVisibility}
                                />
                            </div>
                            {signInErrors.password && (
                                <div className="error-message-Auth-Main">
                                    <i className="bx bxs-error-circle" style={{ fontSize: '16px', color: '#ff4d4f' }}></i>
                                    <span>{signInErrors.password}</span>
                                </div>
                            )}

                            <Link to="/Forget-password" className='Forget-Auth-anchor'>Forget password?</Link>
                            <button className='SignIn-button-Auth-Main' type="submit">Sign In</button>
                            <div className="form-switch-link">
                                <span>New here? </span>
                                <button type="button" onClick={toggleFormMobile} className="switch-button-Auth-Main">Sign Up</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>

            {/* Desktop/Tablet View: Retain sliding panels */}
            <div className="form-container-Auth-Main sign-up-container-Auth-Main">
                <div className="signup-circles-Auth-Main"></div>
                <form onSubmit={handleSignUpSubmit} className='SignUp-Form-Auth-Main'>
                    <h1 className="Header-1-Auth-Main">Sign Up</h1>

                    <label htmlFor="Username">Username</label>
                    <InputText
                        id="Username"
                        value={signUpData.username}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSignUpData({ ...signUpData, username: value });
                            if (signUpErrors.username) {
                                setSignUpErrors((prev) => ({ ...prev, username: '' }));
                            }
                        }}
                        className={`custom-input-Auth-Main ${signUpErrors.username ? 'input-error-Auth-Main' : ''}`}
                        placeholder='Full name'
                        maxLength={50}
                    />
                    {signUpErrors.username && (
                        <div className="error-message-Auth-Main">
                            <i className="bx bxs-error-circle" style={{ fontSize: '16px', color: '#ff4d4f' }}></i>
                            <span>{signUpErrors.username}</span>
                        </div>
                    )}

                    <label htmlFor="email-signup">Email</label>
                    <InputText
                        id="email-signup"
                        value={signUpData.email}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSignUpData({ ...signUpData, email: value });
                            if (signUpErrors.email) {
                                setSignUpErrors((prev) => ({ ...prev, email: '' }));
                            }
                        }}
                        className={`custom-input-Auth-Main ${signUpErrors.email ? 'input-error-Auth-Main' : ''}`}
                        placeholder='*******@gmail.com'
                        maxLength={100}
                    />
                    {signUpErrors.email && (
                        <div className="error-message-Auth-Main">
                            <i className="bx bxs-error-circle" style={{ fontSize: '16px', color: '#ff4d4f' }}></i>
                            <span>{signUpErrors.email}</span>
                        </div>
                    )}

                    <label htmlFor="password-signup">Password</label>
                    <div className="password-container-Auth-Main">
                        <InputText
                            id="password-signup"
                            type={showPassword ? "text" : "password"}
                            value={signUpData.password}
                            onChange={(e) => {
                                const password = e.target.value;
                                setSignUpData({ ...signUpData, password });
                                const requirements = checkPasswordRequirements(password, setSignUpPasswordRequirements);
                                const allRequirementsMet = Object.values(requirements).every(req => req);
                                setShowSignUpPasswordHint(password.length > 0 && !allRequirementsMet);
                                if (signUpErrors.password) {
                                    setSignUpErrors((prev) => ({ ...prev, password: '' }));
                                }
                            }}
                            onBlur={() => setShowSignUpPasswordHint(false)}
                            className={`custom-input-Auth-Main ${signUpErrors.password ? 'input-error-Auth-Main' : ''}`}
                            placeholder='●●●●●●'
                            maxLength={50}
                        />
                        <i
                            className={`bx ${showPassword ? 'bx-show' : 'bx-low-vision'} password-icon-Auth-Main`}
                            onClick={togglePasswordVisibility}
                        />
                        {showSignUpPasswordHint && (
                            <div className="password-hint-popup-Auth-Main">
                                <h4>Password should be:</h4>
                                <ul>
                                    <li className={signUpPasswordRequirements.length ? 'met-Auth-Main' : ''}>
                                        <i
                                            className={`bx ${signUpPasswordRequirements.length ? 'bx-check' : 'bx-x'}`}
                                            style={{ fontSize: '16px', color: signUpPasswordRequirements.length ? '#00cc00' : '#ff4d4f' }}
                                        />
                                        At least 8 characters long
                                    </li>
                                    <li className={signUpPasswordRequirements.number ? 'met-Auth-Main' : ''}>
                                        <i
                                            className={`bx ${signUpPasswordRequirements.number ? 'bx-check' : 'bx-x'}`}
                                            style={{ fontSize: '16px', color: signUpPasswordRequirements.number ? '#00cc00' : '#ff4d4f' }}
                                        />
                                        At least 1 number
                                    </li>
                                    <li className={signUpPasswordRequirements.lowercase ? 'met-Auth-Main' : ''}>
                                        <i
                                            className={`bx ${signUpPasswordRequirements.lowercase ? 'bx-check' : 'bx-x'}`}
                                            style={{ fontSize: '16px', color: signUpPasswordRequirements.lowercase ? '#00cc00' : '#ff4d4f' }}
                                        />
                                        At least 1 lowercase letter
                                    </li>
                                    <li className={signUpPasswordRequirements.uppercase ? 'met-Auth-Main' : ''}>
                                        <i
                                            className={`bx ${signUpPasswordRequirements.uppercase ? 'bx-check' : 'bx-x'}`}
                                            style={{ fontSize: '16px', color: signUpPasswordRequirements.uppercase ? '#00cc00' : '#ff4d4f' }}
                                        />
                                        At least 1 uppercase letter
                                    </li>
                                    <li className={signUpPasswordRequirements.special ? 'met-Auth-Main' : ''}>
                                        <i
                                            className={`bx ${signUpPasswordRequirements.special ? 'bx-check' : 'bx-x'}`}
                                            style={{ fontSize: '16px', color: signUpPasswordRequirements.special ? '#00cc00' : '#ff4d4f' }}
                                        />
                                        At least 1 special symbol
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {signUpErrors.password && (
                        <div className="error-message-Auth-Main">
                            <i className="bx bxs-error-circle" style={{ fontSize: '16px', color: '#ff4d4f' }}></i>
                            <span>{signUpErrors.password}</span>
                        </div>
                    )}
                    <button className='SignUp-button-Auth-Main' type="submit">Sign Up</button>
                </form>
            </div>

            <div className="form-container-Auth-Main sign-in-container-Auth-Main">
                <div className="login-circles-Auth-Main"></div>
                <form onSubmit={handleSignInSubmit} className='SignIn-Form-Auth-Main'>
                    <h1 className="Header1-Auth-Main">Login</h1>

                    <label htmlFor="email-login">Email</label>
                    <InputText
                        id="email-login"
                        value={signInData.email}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSignInData({ ...signInData, email: value });
                            if (signInErrors.email) {
                                setSignInErrors((prev) => ({ ...prev, email: '' }));
                            }
                        }}
                        className={`custom-input-Auth-Main ${signInErrors.email ? 'input-error-Auth-Main' : ''}`}
                        placeholder='*******@gmail.com'
                        maxLength={100}
                    />
                    {signInErrors.email && (
                        <div className="error-message-Auth-Main">
                            <i className="bx bxs-error-circle" style={{ fontSize: '16px', color: '#ff4d4f' }}></i>
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
                                    setSignInErrors((prev) => ({ ...prev, password: '' }));
                                }
                            }}
                            className={`custom-input-Auth-Main ${signInErrors.password ? 'input-error-Auth-Main' : ''}`}
                            placeholder='●●●●●●'
                            maxLength={50}
                        />
                        <i
                            className={`bx ${showPassword ? 'bx-show' : 'bx-low-vision'} password-icon-Auth-Main`}
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    {signInErrors.password && (
                        <div className="error-message-Auth-Main">
                            <i className="bx bxs-error-circle" style={{ fontSize: '16px', color: '#ff4d4f' }}></i>
                            <span>{signInErrors.password}</span>
                        </div>
                    )}

                    <Link to="/Forget-password" className='Forget-Auth-anchor'>Forget password?</Link>
                    <button className='SignIn-button-Auth-Main' type="submit">Sign In</button>
                </form>
            </div>

            <div className="overlay-container-Auth-Main">
                <div className="overlay-Auth-Main">
                    <div className="overlay-panel-Auth-Main overlay-left-Auth-Main">
                        <h1>Create Account</h1>
                        <p>To keep connected with us, please login with your personal info </p>
                        <p>Already have an account?</p>
                        <button className="ghost-Auth-Main" id="signIn" ref={signInButtonRef}>Login</button>
                    </div>
                    <div className="overlay-panel-Auth-Main overlay-right-Auth-Main">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <p>New Here ?</p>
                        <button className="ghost-Auth-Main" id="signUp" ref={signUpButtonRef}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;