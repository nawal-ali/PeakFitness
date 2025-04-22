import React, { useState } from "react";
import "./Auth-N.css";

const NewPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (!password || !confirmPassword) {
            setModalMessage("Please enter your new password and confirm it.");
            setShowModal(true);
            return;
        }

        if (password !== confirmPassword) {
            setModalMessage("Passwords do not match.");
            setShowModal(true);
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
            setModalMessage(data.message || "Password reset successfully!");
            setShowModal(true);
            setPassword("");
            setConfirmPassword("");
            setIsSubmitted(false);
        } catch (error) {
            setModalMessage("Error: " + error.message);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setModalMessage("");
    };

    return (
        <div className="Main-container-Auth-NFP">
            <img src="/public/imgs/Logo-4.svg" alt="Logo" className="logo-NP" />
            <div className="container-NP">
                <form onSubmit={handleSubmit} className="new-password-box-NP" noValidate>
                    <div className="svg-container-NP">
                        <img src="/public/imgs/Key.svg" alt="Key Icon" className="Logo-Key" />
                    </div>
                    <h2 className="header-Auth-FPN">Create New Password</h2>
                    <div className="Under-header-Auth-FPN">
                        <p>
                            Please enter your <span className="Span-Auth-FPN">new password</span>
                        </p>
                    </div>
                    <div className="input-container-Auth-FPN">
                        {/* Password Field */}
                        <div className="input-box-NP">
                            <label htmlFor="password" className="input-label-NP">
                                Password
                            </label>
                            <div className="input-wrapper-NP">
                                <input
                                    className="input-Auth-FPN"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                />
                                <i
                                    className={`bx ${showPassword ? "bx-show" : "bx-low-vision"} password-icon-NP`}
                                    onClick={togglePasswordVisibility}
                                ></i>
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="input-box-NP">
                            <label htmlFor="confirm-password" className="input-label-NP">
                                Confirm Password
                            </label>
                            <div className="input-wrapper-NP">
                                <input
                                    className="input-Auth-FPN"
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirm-password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your password"
                                />
                                <i
                                    className={`bx ${showConfirmPassword ? "bx-show" : "bx-low-vision"} password-icon-NP`}
                                    onClick={toggleConfirmPasswordVisibility}
                                ></i>
                            </div>
                        </div>

                        <input type="submit" className="submit-Auth-FPN" value="Reset Password" />
                    </div>
                </form>

                {/* Modal Popup */}
                {showModal && (
                    <div className="modal-overlay-Auth-FPN">
                        <div className="modal-content-Auth-FPN">
                            <p>{modalMessage}</p>
                            <button className="modal-close-btn-Auth-FPN" onClick={closeModal}>
                                OK
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewPassword;