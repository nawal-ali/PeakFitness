import { useState } from "react";
import { useNavigate,NavLink } from "react-router-dom";


import "./Auth-F.css";

const ForgetPassword = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setIsSubmitted(true);

    //     if (email.trim() === "") {
    //         setModalMessage("Please enter an email.");
    //         setShowModal(true);
    //     } else if (!validateEmail(email)) {
    //         setModalMessage("Please enter a valid email format.");
    //         setShowModal(true);
    //     } else {
    //         setModalMessage("Check your email for the reset link.");
    //         setShowModal(true);
    //         setEmail("");
    //         setIsSubmitted(false);
    //     }
    // };

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!validateEmail(email)) {
        setModalMessage("Please enter a valid email format.");
        setShowModal(true);
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Something went wrong.");
        }

        // If the backend gives us the reset link, extract the token
        const resetLink = data.resetLink;

        if (resetLink) {
            const encoded = encodeURIComponent(resetLink);
            navigate(`/reset-password?link=${encoded}`);
        } else {
            setModalMessage(data.message || "Check your email for the reset link.");
            setShowModal(true);
        }

        setEmail("");
        setIsSubmitted(false);

    } catch (error) {
        setModalMessage(error.message || "Server error. Please try again.");
        setShowModal(true);
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
                <NavLink to="/">
                <img src="./imgs/Logo-4.svg" alt="Logo" className="logo-Auth-FP" />
                </NavLink>
                <div className="header-container-Auth-FP">
                    <div className="svg-container-Auth-FP">
                        <img src="./imgs/Lock.svg" alt="Reset Password Icon" />
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
                            className="input-Auth-FP text-dark"
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