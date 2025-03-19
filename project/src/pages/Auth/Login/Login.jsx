import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import "./Auth.css";  
import "boxicons"; // تأكد من أن هذا الاستيراد يعمل

const AuthForm = () => {
    const containerRef = useRef(null);
    const signUpButtonRef = useRef(null);
    const signInButtonRef = useRef(null);

    const [signUpData, setSignUpData] = useState({
        username: '',
        email: '',
        password: '',
        weight: '',
        height: ''
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
        setRequirements({
            length: password.length >= 8,
            number: /\d/.test(password),
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        });
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
        if (isNaN(signUpData.weight) || signUpData.weight <= 0) {
            errors.weight = "Weight must be a positive number";
        }
        if (isNaN(signUpData.height) || signUpData.height <= 0) {
            errors.height = "Height must be a positive number";
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
        // لسة مفيش Database، فمش هنشيك قوة الـ Password هنا
        // التحقق من الـ Password هيصير لما نوصل للـ Backend

        setSignInErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (validateSignUp()) {
            const sanitizedData = signUpData; // بدل الـ sanitizeData
            console.log("Sign Up Data:", sanitizedData);
        }
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        if (validateSignIn()) {
            const sanitizedData = signInData; // بدل الـ sanitizeData
            console.log("Sign In Data:", sanitizedData);
            // هنا هيتم التحقق من الـ Database لما نضيف الـ Backend
            // دلوقتي بس بنظهر الـ Data في الـ Console
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        const signUpButton = signUpButtonRef.current;
        const signInButton = signInButtonRef.current;

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });

        return () => {
            signUpButton.removeEventListener('click', () => {
                container.classList.add("right-panel-active");
            });
            signInButton.removeEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        };
    }, []);

    return (
        <div className="container" id="container" ref={containerRef}>
            <div className="form-container sign-up-container">
                <div className="signup-circles"></div>
                <form onSubmit={handleSignUpSubmit}>
                    <h1 className="Login">Sign Up</h1>

                    <label htmlFor="username">Name</label>
                    <InputText 
                        id="username" 
                        value={signUpData.username} 
                        onChange={(e) => setSignUpData({ ...signUpData, username: e.target.value })} 
                        className={`custom-input ${signUpErrors.username ? 'input-error' : ''}`} 
                        placeholder='Full name' 
                        maxLength={50}
                    />
                    {signUpErrors.username && (
                        <div className="error-message">
                            <box-icon type='solid' name='error-circle' size='sm' color='#ff4d4f'></box-icon>
                            <span>{signUpErrors.username}</span>
                        </div>
                    )}

                    <label htmlFor="email">Email</label>
                    <InputText 
                        id="email" 
                        value={signUpData.email} 
                        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })} 
                        className={`custom-input ${signUpErrors.email ? 'input-error' : ''}`} 
                        placeholder='*******@gmail.com'
                        maxLength={100}
                    />
                    {signUpErrors.email && (
                        <div className="error-message">
                            <box-icon type='solid' name='error-circle' size='sm' color='#ff4d4f'></box-icon>
                            <span>{signUpErrors.email}</span>
                        </div>
                    )}

                    <label htmlFor="password">Password</label>
                    <div className="password-container">
                        <InputText 
                            id="password" 
                            type={showPassword ? "text" : "password"} 
                            value={signUpData.password} 
                            onChange={(e) => {
                                const password = e.target.value;
                                setSignUpData({ ...signUpData, password });
                                setShowSignUpPasswordHint(password.length > 0);
                                checkPasswordRequirements(password, setSignUpPasswordRequirements);
                            }}
                            className={`custom-input ${signUpErrors.password ? 'input-error' : ''}`} 
                            placeholder='●●●●●●' 
                            style={{ letterSpacing: "3px" }}
                            maxLength={50}
                        />
                        <box-icon 
                            type='solid' 
                            name={showPassword ? 'show' : 'low-vision'} 
                            className="password-icon" 
                            onClick={togglePasswordVisibility}
                        />
                        {showSignUpPasswordHint && (
                            <div className="password-hint-popup">
                                <h4>Password should be:</h4>
                                <ul>
                                    <li className={signUpPasswordRequirements.length ? 'met' : ''}>
                                        <box-icon 
                                            type='solid' 
                                            name={signUpPasswordRequirements.length ? 'check' : 'x'} 
                                            size='sm' 
                                            color={signUpPasswordRequirements.length ? '#00cc00' : '#ff4d4f'}
                                        />
                                        At least 8 characters long
                                    </li>
                                    <li className={signUpPasswordRequirements.number ? 'met' : ''}>
                                        <box-icon 
                                            type='solid' 
                                            name={signUpPasswordRequirements.number ? 'check' : 'x'} 
                                            size='sm' 
                                            color={signUpPasswordRequirements.number ? '#00cc00' : '#ff4d4f'}
                                        />
                                        At least 1 number
                                    </li>
                                    <li className={signUpPasswordRequirements.lowercase ? 'met' : ''}>
                                        <box-icon 
                                            type='solid' 
                                            name={signUpPasswordRequirements.lowercase ? 'check' : 'x'} 
                                            size='sm' 
                                            color={signUpPasswordRequirements.lowercase ? '#00cc00' : '#ff4d4f'}
                                        />
                                        At least 1 lowercase letter
                                    </li>
                                    <li className={signUpPasswordRequirements.uppercase ? 'met' : ''}>
                                        <box-icon 
                                            type='solid' 
                                            name={signUpPasswordRequirements.uppercase ? 'check' : 'x'} 
                                            size='sm' 
                                            color={signUpPasswordRequirements.uppercase ? '#00cc00' : '#ff4d4f'}
                                        />
                                        At least 1 uppercase letter
                                    </li>
                                    <li className={signUpPasswordRequirements.special ? 'met' : ''}>
                                        <box-icon 
                                            type='solid' 
                                            name={signUpPasswordRequirements.special ? 'check' : 'x'} 
                                            size='sm' 
                                            color={signUpPasswordRequirements.special ? '#00cc00' : '#ff4d4f'}
                                        />
                                        At least 1 special symbol
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {signUpErrors.password && (
                        <div className="error-message">
                            <box-icon type='solid' name='error-circle' size='sm' color='#ff4d4f'></box-icon>
                            <span>{signUpErrors.password}</span>
                        </div>
                    )}

                    <div className="flex-inputs">
                        <div>
                            <label htmlFor="weight">Weight</label>
                            <InputText 
                                id="weight" 
                                value={signUpData.weight} 
                                onChange={(e) => setSignUpData({ ...signUpData, weight: e.target.value })} 
                                className={`custom-input ${signUpErrors.weight ? 'input-error' : ''}`} 
                                placeholder='65kg'
                                maxLength={5}
                            />
                            {signUpErrors.weight && (
                                <div className="error-message">
                                    <box-icon type='solid' name='error-circle' size='sm' color='#ff4d4f'></box-icon>
                                    <span>{signUpErrors.weight}</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="height">Height</label>
                            <InputText 
                                id="height" 
                                value={signUpData.height} 
                                onChange={(e) => setSignUpData({ ...signUpData, height: e.target.value })} 
                                className={`custom-input ${signUpErrors.height ? 'input-error' : ''}`} 
                                placeholder='180cm'
                                maxLength={5}
                            />
                            {signUpErrors.height && (
                                <div className="error-message">
                                    <box-icon type='solid' name='error-circle' size='sm' color='#ff4d4f'></box-icon>
                                    <span>{signUpErrors.height}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <button className='butt-1' type="submit">Sign Up</button>
                </form>
            </div>

            <div className="form-container sign-in-container">
                <div className="login-circles"></div>
                <form onSubmit={handleSignInSubmit}>
                    <h1 className="Logoo">Login</h1>

                    <label htmlFor="email">Email</label>
                    <InputText 
                        id="email" 
                        value={signInData.email} 
                        onChange={(e) => setSignInData({ ...signInData, email: e.target.value })} 
                        className={`custom-input ${signInErrors.email ? 'input-error' : ''}`} 
                        placeholder='*******@gmail.com'
                        maxLength={100}
                    />
                    {signInErrors.email && (
                        <div className="error-message">
                            <box-icon type='solid' name='error-circle' size='sm' color='#ff4d4f'></box-icon>
                            <span>{signInErrors.email}</span>
                        </div>
                    )}

                    <label htmlFor="password">Password</label>
                    <div className="password-container">
                        <InputText 
                            id="password" 
                            type={showPassword ? "text" : "password"} 
                            value={signInData.password} 
                            onChange={(e) => {
                                const password = e.target.value;
                                setSignInData({ ...signInData, password });
                            }}
                            className={`custom-input ${signInErrors.password ? 'input-error' : ''}`} 
                            placeholder='●●●●●●' 
                            style={{ letterSpacing: "3px" }}
                            maxLength={50}
                        />
                        <box-icon 
                            type='solid' 
                            name={showPassword ? 'show' : 'low-vision'} 
                            className="password-icon" 
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    {signInErrors.password && (
                        <div className="error-message">
                            <box-icon type='solid' name='error-circle' size='sm' color='#ff4d4f'></box-icon>
                            <span>{signInErrors.password}</span>
                        </div>
                    )}

                    <Link to="/Forget-password">Forget your password?</Link>
                    <button className='butt-2' type="submit">Sign In</button>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <p>Already have an account?</p>
                        <button className="ghost" id="signIn" ref={signInButtonRef}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 style={{ fontSize: "60px" }}>Create Account</h1>
                        <p>To keep connected with us, please login with your personal info</p>
                        <p>New Here ?</p>
                        <button className="ghost" id="signUp" ref={signUpButtonRef}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;