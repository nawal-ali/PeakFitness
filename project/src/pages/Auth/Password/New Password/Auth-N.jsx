import { useState } from "react";
// import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useNavigate,NavLink,Link } from "react-router-dom"

import "./Auth-N.css";

const NewPassword = () => {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const resetLink = searchParams.get("link");


    const [newPassword, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [redirectToLogin, setRedirectToLogin] = useState(false);


    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsSubmitted(true);

    //     if (!password || !confirmPassword) {
    //         setModalMessage("Please enter your new password and confirm it.");
    //         setShowModal(true);
    //         return;
    //     }

    //     if (password !== confirmPassword) {
    //         setModalMessage("Passwords do not match.");
    //         setShowModal(true);
    //         return;
    //     }

    //     try {
    //         const response = await fetch("https://yourapi.com/api/reset-password", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ password }),
    //         });

    //         if (!response.ok) {
    //             throw new Error("Failed to reset password");
    //         }

    //         const data = await response.json();
    //         setModalMessage(data.message || "Password reset successfully!");
    //         setShowModal(true);
    //         setPassword("");
    //         setConfirmPassword("");
    //         setIsSubmitted(false);
    //     } catch (error) {
    //         setModalMessage("Error: " + error.message);
    //         setShowModal(true);
    //     }
    // };

//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);

//     if (!password || !confirmPassword) {
//         setModalMessage("Please enter your new password and confirm it.");
//         setShowModal(true);
//         return;
//     }

//     if (password !== confirmPassword) {
//         setModalMessage("Passwords do not match.");
//         setShowModal(true);
//         return;
//     }

//     try {
//         const response = await fetch(`http://localhost:5000/api/auth/reset-password/${token}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ password }),
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message || "Failed to reset password.");
//         }

//         const data = await response.json();
//         setModalMessage(data.message || "Password reset successfully!");
//         setShowModal(true);
//         setPassword("");
//         setConfirmPassword("");
//         setIsSubmitted(false);
//     } catch (error) {
//         setModalMessage("Error: " + error.message);
//         setShowModal(true);
//     }
// };


const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!newPassword || !confirmPassword) {
        setModalMessage("Please enter your new password and confirm it.");
        setShowModal(true);
        return;
    }

    if (newPassword !== confirmPassword) {
        setModalMessage("Passwords do not match.");
        setShowModal(true);
        return;
    }

    try {
        const response = await fetch(resetLink, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ newPassword }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to reset password.");
        }

        const data = await response.json();
        setModalMessage(data.message || "Password reset successfully!");
        setShowModal(true);
        setPassword("");
        setConfirmPassword("");
        setIsSubmitted(false);
        // navigate('/Login');
        setRedirectToLogin(true); // So we wait until modal is closed
    } catch (error) {
        setModalMessage("Error: " + error.message);
        setShowModal(true);
    }
};


    const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
    
    if (redirectToLogin) {
        navigate("/Login");
    }
};


    return (
        <div className="Main-container-Auth-NFP">
            {/* Top Section: Logo, Key Icon, Header, Description, and Password Input */}
            <div className="top-section-Auth-NFP">
                <NavLink to="/">
                <img src="/logoAndText.svg" alt="Logo" className="logo-NP" />
                </NavLink>
                <div className="header-container-Auth-NFP">
                    <div className="svg-container-NP">
                        <img src="/public/imgs/Key.svg" alt="Key Icon" className="Logo-Key" />
                    </div>
                    <h2 className="header-Auth-FPN">Create New Password</h2>
                    <div className="Under-header-Auth-FPN">
                        <p>
                            Please enter your <span className="Span-Auth-FPN">new password</span>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="new-password-box-NP" noValidate>
                        <div className="input-container-Auth-FPN">
                            {/* Password Field */}
                            <div className="input-box-NP input-box-NP-child1">
                                <label htmlFor="password" className="input-label-NP">
                                    Password
                                </label>
                                <div className="input-wrapper-NP">
                                    <input
                                        className="input-Auth-FPN"
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={newPassword}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                    />
                                    <i
                                        className={`bx ${showPassword ? "bx-show" : "bx-low-vision"} password-icon-NP`}
                                        onClick={togglePasswordVisibility}
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Bottom Section: Confirm Password Input and Submit Button */}
            <div className="bottom-section-Auth-NFP">
                <form onSubmit={handleSubmit} className="new-password-box-NP" noValidate>
                    <div className="input-container-Auth-FPN">
                        {/* Confirm Password Field */}
                        <div className="input-box-NP input-box-NP-child2">
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
                            <input type="submit" className="submit-Auth-FPN" value="Reset Password" />
                        </div>
                    </div>
                </form>
            </div>

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
    );
};

export default NewPassword;