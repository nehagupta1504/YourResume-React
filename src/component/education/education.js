import { AddEducation } from './add-education';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/appContext';
import styles from './education.module.css';
import { BasicTemplate } from '../resume-templates/basic/basic';
import SideMenu from '../side-menu/side-menu';
import Footer from '../footer/footer';
export const Education = () => {
    const initialState = {
        degree: '',
        subject: '',
        institueName: '',
        percentage: '',
        current: true,
        from: '',
        to: '',
    };

    const [currentEducation, setCurrentEducation] = useState(initialState);
    const [education, setEducation] = useState([]);
    const { profile, setProfile } = useContext(AppContext);
    useEffect(() => {
        console.log(currentEducation);
    }, [currentEducation]);

    const handleStateChange = (e) => {
        e.target.name === 'current'
            ? setCurrentEducation({
                  ...currentEducation,
                  [e.target.name]: e.target.checked,
              })
            : setCurrentEducation({
                  ...currentEducation,
                  [e.target.name]: e.target.value,
              });
    };
    const saveEducation = (e) => {
        const newEducation = {
            ...currentEducation,
            id: new Date().getTime().toString() + currentEducation.companyName,
        };
        setEducation([...education, newEducation]);
        console.log(currentEducation, newEducation);
        setProfile({
            ...profile,
            education: [...education, newEducation],
        });
        setCurrentEducation(initialState);
    };
    return (
        <>
            <div className='global-container'>
                <SideMenu />
                <div className='body-container'>
                    <div className={`form ${styles['experience-form']}`}>
                        <div className={`${styles['experience-info']}`}>
                            <h1>Add your Education</h1>
                            <AddEducation
                                currentEducation={currentEducation}
                                handleStateChange={handleStateChange}
                                saveEducation={saveEducation}
                            />
                        </div>
                    </div>
                    <div className='preview'>
                        <BasicTemplate></BasicTemplate>
                    </div>
                </div>
            </div>
            <Footer hrefLeft='/personal-info' hrefRight='/experience' />
        </>
    );
};
