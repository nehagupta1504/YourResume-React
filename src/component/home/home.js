import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import homeImage from "../../assets/cv_builder.png";
export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles["home-page"]}>
                <div className={styles["home-details"]}>
                    <div className={styles["home-details_heading"]}>
                        <h1
                            className={`margin ${styles["home-details_main-heading"]}`}
                        >
                            Build your resume
                        </h1>
                        <span
                            className={`margin ${styles["home-details_sub-heading"]}`}
                        >
                            One step near to your goal
                        </span>
                    </div>
                    <div className={styles["home-details_call-to-action"]}>
                        <button
                            className={`btn btn-dark margin  ${styles["home-details_action"]}`}
                            onClick={() => navigate("/resume")}
                        >
                            Click here
                        </button>
                    </div>
                </div>
                <div className={styles["home-image-parent"]}>
                    <div className={styles["home-image"]}></div>
                </div>
            </div>
        </>
    );
};
