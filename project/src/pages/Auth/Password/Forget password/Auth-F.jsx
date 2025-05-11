import React, { useState } from "react";
import "./Auth-F.css";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (email.trim() === "") {
            setModalMessage("Please enter an email.");
            setShowModal(true);
        } else if (!validateEmail(email)) {
            setModalMessage("Please enter a valid email format.");
            setShowModal(true);
        } else {
            setModalMessage("Check your email for the reset link.");
            setShowModal(true);
            setEmail("");
            setIsSubmitted(false);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setModalMessage("");
    };

    return (
        <div className="Main-container-Auth-FP">
            {/* First Section: Logo, Header, and Description */}
            <div className="top-section-Auth-FP">
                <img src="/public/imgs/Logo-4.svg" alt="Logo" className="logo-Auth-FP" />
                <div className="header-container-Auth-FP">
                    <div className="svg-container-Auth-FP">
                        <img src="/public/imgs/Lock.svg" alt="Reset Password Icon" />
                    </div>
                    <h2 className="header-Auth-FP">Forgot Password</h2>
                    <div className="Under-header-Auth-FP">
                        <p>please enter your email</p>
                    </div>
                </div>
            </div>

            {/* Second Section: Input and Submit Button */}
            <div className="bottom-section-Auth-FP">
                <form onSubmit={handleSubmit} className="forgot-password-box-Auth-FP">
                    <div className="input-container-Auth-FP">
                        <input
                            className="input-Auth-FP"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="*******@gmail.com"
                        />
                        <input
                            className="submit-Auth-FP"
                            type="submit"
                            id="resetPassword"
                            name="resetPassword"
                            value="Reset Password"
                        />
                    </div>
                </form>
            </div>

            {/* Modal Popup */}
            {showModal && (
                <div className="modal-overlay-Auth-FP">
                    <div className="modal-content-Auth-FP">
                        <p>{modalMessage}</p>
                        <button className="modal-close-btn-Auth-FP" onClick={closeModal}>
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForgetPassword;