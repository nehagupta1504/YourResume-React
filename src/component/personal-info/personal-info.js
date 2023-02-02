import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./personal-info.module.css";
export const PersonalInfo = (props) => {
    const initialState = {
        name: "",
        email: "",
        contact: "",
        linkedIn: "",
        github: "",
    };
    const navigate = useNavigate();
    const [user, setUser] = useState(initialState);
    const handleStateChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const setitemToLocalStorage = () => {
        const filterUser = Object.entries(user).reduce(
            (a, [k, v]) => (v ? ((a[k] = v), a) : a),
            {}
        );
        console.log(filterUser);
        localStorage.setItem("personalInformation", JSON.stringify(filterUser));
        navigate("/experience");
    };
    return (
        <div className="body-container">
            <div className="form-container">
                <div className="form">
                    <h1>Add your personal information</h1>
                    <div className={`${styles["personal-info"]}`}>
                        <div className="personal-info__subfield text-field">
                            <label htmlFor="name">Enter your name:</label>
                            <input
                                type="text"
                                id="name"
                                className="input-field"
                                name="name"
                                value={user.name}
                                onChange={(e) => handleStateChange(e)}
                                required
                            />
                        </div>
                        <div className="personal-info__subfield text-field">
                            <label htmlFor="email">Enter your email:</label>
                            <input
                                type="email"
                                id="email"
                                className="input-field"
                                name="email"
                                value={user.email}
                                onChange={(e) => handleStateChange(e)}
                                required
                            />
                        </div>
                        <div className="personal-info__subfield text-field">
                            <label htmlFor="contact">
                                Enter your contact no. :
                            </label>
                            <input
                                type="text"
                                id="contact"
                                className="input-field"
                                name="contact"
                                value={user.contact}
                                onChange={(e) => handleStateChange(e)}
                                required
                            />
                        </div>
                        <div className="col-2">
                            <div className="personal-info__subfield text-field">
                                <label htmlFor="linkedIn">
                                    Enter your linkedIn username:
                                </label>
                                <input
                                    type="text"
                                    id="linkedIn"
                                    className="input-field"
                                    name="linkedIn"
                                    value={user.linkedIn}
                                    onChange={(e) => handleStateChange(e)}
                                />
                            </div>
                            <div className="personal-info__subfield text-field">
                                <label htmlFor="name">Enter your github:</label>
                                <input
                                    type="text"
                                    id="github"
                                    className="input-field"
                                    name="github"
                                    value={user.github}
                                    onChange={(e) => handleStateChange(e)}
                                />
                            </div>
                        </div>
                        <div className="btn-right">
                            <button
                                className="btn btn-dark"
                                onClick={setitemToLocalStorage}
                                disabled={
                                    !user.name || !user.email || !user.contact
                                }
                            >
                                Next
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="preview">
                    <h1>Personal Information</h1>
                    <div className="preview-screen">
                        {user.name && (
                            <div className="preview-field">
                                <h3>
                                    Name:{" "}
                                    <span className="preview-field-value">
                                        {user.name}
                                    </span>
                                </h3>
                            </div>
                        )}
                        {user.email && (
                            <div className="preview-field">
                                <h3>
                                    Email:{" "}
                                    <span className="preview-field-value">
                                        {user.email}
                                    </span>
                                </h3>
                            </div>
                        )}
                        {user.contact && (
                            <div className="preview-field">
                                <h3>
                                    Mob. No:{" "}
                                    <span className="preview-field-value">
                                        {user.contact}
                                    </span>
                                </h3>
                            </div>
                        )}

                        {user.linkedIn && (
                            <div className="preview-field">
                                <h3>
                                    LinkedIn:{" "}
                                    <span className="preview-field-value">
                                        {user.linkedIn}
                                    </span>
                                </h3>
                            </div>
                        )}
                        {user.github && (
                            <div className="preview-field">
                                <h3>
                                    Github:{" "}
                                    <span className="preview-field-value">
                                        {user.github}
                                    </span>
                                </h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
