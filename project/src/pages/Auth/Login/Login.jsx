import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import   "./Auth.css";  
import "boxicons";

const AuthForm = () => {
    const containerRef = useRef(null);
    const signUpButtonRef = useRef(null);
    const signInButtonRef = useRef(null);

    //  بيانات منفصلة لـ Sign Up
    const [signUpData, setSignUpData] = useState({
        username: '',
        email: '',
        password: '',
        weight: '',
        height: ''
    });

    // بيانات منفصلة لـ Login
    const [signInData, setSignInData] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
            {/*  Sign Up Form */}
            <div className="form-container sign-up-container">
            <div className="signup-circles"></div>

                <form action="#">
                    <h1 className="Login">Sign Up</h1>
                    <label htmlFor="username">Name</label>
                    <InputText 
                        id="username" 
                        value={signUpData.username} 
                        onChange={(e) => setSignUpData({ ...signUpData, username: e.target.value })} 
                        className="custom-input" 
                        placeholder='Full name' 
                    />

                    <label htmlFor="email">Email</label>
                    <InputText 
                        id="email" 
                        value={signUpData.email} 
                        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })} 
                        className="custom-input" 
                        placeholder='*******@gmail.com'
                    />

                    <label htmlFor="password">Password</label>
                    <div className="password-container">
                        <InputText 
                            id="password" 
                            type={showPassword ? "text" : "password"} 
                            value={signUpData.password} 
                            onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })} 
                            className="custom-input" 
                            placeholder='●●●●●●' 
                            style={{ letterSpacing: "3px" }}
                        />
                        <box-icon 
                            type='solid' 
                            name={showPassword ? 'show' : 'low-vision'} 
                            className="password-icon" 
                            onClick={togglePasswordVisibility}>
                        </box-icon>
                    </div>

                    <div className="flex-inputs">
                        <div>
                            <label htmlFor="weight">Weight</label>
                            <InputText 
                                id="weight" 
                                value={signUpData.weight} 
                                onChange={(e) => setSignUpData({ ...signUpData, weight: e.target.value })} 
                                className="custom-input" 
                                placeholder='65kg'
                            />
                        </div>
                        <div>
                            <label htmlFor="height">Height</label>
                            <InputText 
                                id="height" 
                                value={signUpData.height} 
                                onChange={(e) => setSignUpData({ ...signUpData, height: e.target.value })} 
                                className="custom-input" 
                                placeholder='180cm'
                            />
                        </div>
                    </div>

                    <button className='butt-1'>Sign Up</button>
                </form>
            </div>

            {/*  Sign In Form */}
            <div className="form-container sign-in-container">
            <div className="login-circles"></div>
                <form action="#">
                    <h1 className="Logoo">Login</h1>

                    <label htmlFor="email">Email</label>
                    <InputText 
                        id="email" 
                        value={signInData.email} 
                        onChange={(e) => setSignInData({ ...signInData, email: e.target.value })} 
                        className="custom-input" 
                        placeholder='*******@gmail.com'
                    />

                    <label htmlFor="password">Password</label>
                    <div className="password-container">
                        <InputText 
                            id="password" 
                            type={showPassword ? "text" : "password"} 
                            value={signInData.password} 
                            onChange={(e) => setSignInData({ ...signInData, password: e.target.value })} 
                            className="custom-input" 
                            placeholder='●●●●●●' 
                            style={{ letterSpacing: "3px" }}
                        />
                        <box-icon 
                            type='solid' 
                            name={showPassword ? 'show' : 'low-vision'} 
                            className="password-icon" 
                            onClick={togglePasswordVisibility}>
                        </box-icon>
                    </div>

                <Link to="/Forget-password">Forget your password?</Link>
                    <button className='butt-2'>Sign In</button>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <div className="logo-image"></div>
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <p>Already have an account?</p>
                        <button className="ghost" id="signIn" ref={signInButtonRef}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <div className="logo-image"></div>
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
