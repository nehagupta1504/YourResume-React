import { useState, useEffect } from "react";
import { AddExperience } from "./experience-body";
import { ShowExperience } from "./show-experience";
import { downloadResume } from "../../services/resume";
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
            index: new Date().getTime().toString() + currentCompany.companyName,
        };
        setCompaniesData([...companiesData, newCompany]);
        setCurrentCompany(initialState);
    };
    const deleteExperience = (id) => {
        if (!companiesData) {
            alert("No company to delete");
        } else {
            const companyData = companiesData
                .filter((company) => company.index !== id)
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
            <AddExperience
                currentCompany={currentCompany}
                handleStateChange={handleStateChange}
                saveExperience={saveExperience}
            />
            {companiesData &&
                companiesData.map((company, index) => {
                    return (
                        <div key={company.index}>
                            <h3>Experience-{index + 1}</h3>
                            <ShowExperience
                                currentCompany={company}
                                handleStateChange={handleStateChange}
                                deleteExperience={deleteExperience}
                            />
                        </div>
                    );
                })}
            <div className="form-footer">
                <button onClick={setitemToLocalStorage}>Next</button>
            </div>
        </>
    );
};
