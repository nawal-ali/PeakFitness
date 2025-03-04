import React, { useState } from "react";
import "./Auth-N.css"; // يفترض أن يتم تعديل اسم الملف إلى Auth-NP.css إذا لزم الأمر
import "boxicons";

const NewPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!password || !confirmPassword) {
            setMessage("Please enter your new password and confirm it.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch("https://yourapi.com/api/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password }),
            });

            if (!response.ok) {
                throw new Error("Failed to reset password");
            }

            const data = await response.json();
            setMessage(data.message || "Password reset successfully!");
        } catch (error) {
            setMessage("Error: " + error.message);
        }
    };

    return (
        <div className="container-NP">
            <img src="/images/Logo-4.svg" alt="Logo" className="logo-NP" />
            <div className="svg-container-NP">
                <img src="../../../../../images/Key.svg" alt="Reset Password Icon" />
            </div>
            <form onSubmit={handleSubmit} className="new-password-box-NP">
                <h2>Create New Password</h2>
                <p>Please enter your <span>new password</span></p>

                {/* Password Field */}
                <div className="input-box-NP">
                    <label htmlFor="password" className="input-label-NP">Password</label>
                    <div className="input-container-NP">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                        <box-icon 
                            type="solid" 
                            name={showPassword ? "show" : "low-vision"} 
                            className="password-icon-NP"
                            onClick={togglePasswordVisibility}
                        ></box-icon>
                    </div>
                </div>

                {/* Confirm Password Field */}
                <div className="input-box-NP">
                    <label htmlFor="confirm-password" className="input-label-NP">Confirm Password</label>
                    <div className="input-container-NP">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            required
                        />
                        <box-icon 
                            type="solid" 
                            name={showConfirmPassword ? "show" : "low-vision"} 
                            className="password-icon-NP"
                            onClick={toggleConfirmPasswordVisibility}
                        ></box-icon>
                    </div>
                </div>

                <input type="submit" className="button-bt3-NP" value="Reset Password" />

                {message && <p className="message-NP">{message}</p>}
            </form>
        </div>
    );
};

export default NewPassword;