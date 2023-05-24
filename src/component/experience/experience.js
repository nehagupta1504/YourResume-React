import { useState, useEffect, useContext } from 'react';
import { AddExperience } from './experience-body';
import { downloadResume } from '../../services/resume';
import { AppContext } from '../../context/appContext';
import styles from './experience.module.css';
import { BasicTemplate } from '../resume-templates/basic/basic';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../side-menu/side-menu';
export const Experience = (props) => {
    const initialState = {
        companyName: '',
        position: '',
        jobDescription: '',
        current: true,
        from: '',
        to: '',
    };

    const [currentCompany, setCurrentCompany] = useState(initialState);
    const [companiesData, setCompaniesData] = useState([]);
    const navigate = useNavigate();
    const { profile, setProfile } = useContext(AppContext);
    const handleStateChange = (e) => {
        e.target.name === 'current'
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
        setProfile({
            ...profile,
            experience: [...companiesData, newCompany],
        });
        setCurrentCompany(initialState);
    };
    const deleteExperience = (id) => {
        console.log(id);
        if (!companiesData) {
            alert('No company to delete');
        } else {
            const companyData = companiesData
                .filter((company) => company.id !== id)
                .map((el) => el);
            console.log(companiesData);
            setCompaniesData([...companyData]);
        }
    };
    // const setitemToLocalStorage = () => {
    //     localStorage.setItem('experience', JSON.stringify(companiesData));
    //     downloadResume(['personalInformation', 'experience']);
    // };

    return (
        <>
            <div className='global-container'>
                <SideMenu />
                <div className='body-container'>
                    <div className='form-container'>
                        <div className={`form ${styles['experience-form']}`}>
                            <div className={`${styles['experience-info']}`}>
                                <h1>Add your Experience</h1>
                                <AddExperience
                                    currentCompany={currentCompany}
                                    handleStateChange={handleStateChange}
                                    saveExperience={saveExperience}
                                />

                                <div className='btn-right'>
                                    <button
                                        className='btn btn-dark'
                                        onClick={() => navigate('/education')}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='preview'>
                            <BasicTemplate></BasicTemplate>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
