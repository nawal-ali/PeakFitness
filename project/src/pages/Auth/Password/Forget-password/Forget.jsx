import React, { useState } from "react";
import   "./Auth-F.css"; // يفترض أن يتم تعديل اسم الملف إلى Auth-FP.css إذا لزم الأمر
import logo from "../../../../../images/Logo-4.svg";
import lockIcon from "../../../../../images/Lock.svg";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [messageVisible, setMessageVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() !== "") {
            setMessageVisible(true);
        } else {
            setMessageVisible(false);
        }
    };

    return (
        <div className="container-FP">
            <img src={logo} alt="Logo" className="logo-FP" />
            <div className="svg-container-FP">
                <img src={lockIcon} alt="Reset Password Icon" />
            </div>
            
            <form onSubmit={handleSubmit} className="forgot-password-box-FP">
                <h2>Forgot Password</h2>
                <p>Please enter your </p>
                <p className="Parag-2-FP">email or mobile number</p>

                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="email or mobile number" 
                    required 
                />

                <input 
                    type="submit" 
                    id="resetPassword" 
                    name="resetPassword" 
                    value="Reset Password" 
                    className="button-bt3-FP" 
                />

                {messageVisible && <p className="message-FP">Check your email for the reset link.</p>}
                {!messageVisible && email.trim() === "" && (
                    <p className="error-message-FP">Please enter a valid email.</p>
                )}
            </form>
        </div>
    );
};

export default ForgetPassword;