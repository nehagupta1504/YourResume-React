import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <>
            <h1>Add your personal information</h1>
            <div className="personal-info">
                <div className="personal-info__subfield">
                    <label htmlFor="name">Enter your name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={(e) => handleStateChange(e)}
                        required
                    />
                </div>
                <div className="personal-info__subfield">
                    <label htmlFor="email">Enter your email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={(e) => handleStateChange(e)}
                        required
                    />
                </div>
                <div className="personal-info__subfield">
                    <label htmlFor="contact">Enter your contact no. :</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={user.contact}
                        onChange={(e) => handleStateChange(e)}
                        required
                    />
                </div>
                <div className="personal-info__subfield">
                    <label htmlFor="linkedIn">
                        Enter your linkedIn username:
                    </label>
                    <input
                        type="text"
                        id="linkedIn"
                        name="linkedIn"
                        value={user.linkedIn}
                        onChange={(e) => handleStateChange(e)}
                    />
                </div>
                <div className="personal-info__subfield">
                    <label htmlFor="name">Enter your github:</label>
                    <input
                        type="text"
                        id="github"
                        name="github"
                        value={user.github}
                        onChange={(e) => handleStateChange(e)}
                    />
                </div>
                <button
                    onClick={setitemToLocalStorage}
                    disabled={!user.name || !user.email || !user.contact}
                >
                    Next
                    <span></span>
                </button>
            </div>
        </>
    );
};
