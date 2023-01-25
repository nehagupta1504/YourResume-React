import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import homeImage from "../../assets/cv_builder.png";
export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="section-page">
                <div className="section-details">
                    <div className="section-details_heading">
                        <h1 className={`margin section-details_main-heading`}>
                            Build your resume
                        </h1>
                        <span className={`margin section-details_sub-heading`}>
                            One step near to your goal
                        </span>
                    </div>
                    <div className="section-details_call-to-action">
                        <button
                            className={`btn btn-dark margin  section-details_action`}
                            onClick={() => navigate("/resume")}
                        >
                            Click here
                        </button>
                    </div>
                </div>
                <div className="section-image-parent">
                    <div className="section-image"></div>
                </div>
            </div>
        </>
    );
};
