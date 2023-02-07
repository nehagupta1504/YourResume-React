import { useState, useEffect } from "react";
import { AddExperience } from "./experience-body";
import { ShowExperience } from "./show-experience";
import { downloadResume } from "../../services/resume";
import styles from "./experience.module.css";
export const Experience = (props) => {
    const initialState = {
        companyName: "",
        position: "",
        jobDescription: "",
        current: true,
        from: "",
        to: "",
    };

    const [currentCompany, setCurrentCompany] = useState(initialState);
    const [companiesData, setCompaniesData] = useState([]);

    const handleStateChange = (e) => {
        e.target.name === "current"
            ? setCurrentCompany({
                  ...currentCompany,
                  [e.target.name]: e.target.checked,
              })
            : setCurrentCompany({
                  ...currentCompany,
                  [e.target.name]: e.target.value,
              });
    };
    const saveExperience = (e) => {
        const newCompany = {
            ...currentCompany,
            id: new Date().getTime().toString() + currentCompany.companyName,
        };
        setCompaniesData([...companiesData, newCompany]);
        setCurrentCompany(initialState);
    };
    const deleteExperience = (id) => {
        console.log(id);
        if (!companiesData) {
            alert("No company to delete");
        } else {
            const companyData = companiesData
                .filter((company) => company.id !== id)
                .map((el) => el);
            console.log(companiesData);
            setCompaniesData([...companyData]);
        }
    };
    const setitemToLocalStorage = () => {
        localStorage.setItem("experience", JSON.stringify(companiesData));
        downloadResume(["personalInformation", "experience"]);
    };
    return (
        <>
            <div className="body-container">
                <div className="form-container">
                    <div className={`form ${styles["experience-form"]}`}>
                        <div className={`${styles["experience-info"]}`}>
                            <h1>Add your Experience</h1>
                            <AddExperience
                                currentCompany={currentCompany}
                                handleStateChange={handleStateChange}
                                saveExperience={saveExperience}
                            />

                            <div className="btn-right">
                                <button
                                    className="btn btn-dark"
                                    onClick={setitemToLocalStorage}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="preview">
                        <h1>Experience </h1>

                        {companiesData.length > 0 && (
                            <div>
                                <ShowExperience
                                    companiesData={companiesData}
                                    handleStateChange={handleStateChange}
                                    deleteExperience={deleteExperience}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
