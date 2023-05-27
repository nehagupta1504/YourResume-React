import { useState, useContext, useEffect } from 'react';
import { BasicTemplate } from '../resume-templates/basic/basic';
import styles from './about.module.css';
import { AppContext } from '../../context/appContext';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../side-menu/side-menu';
import Footer from '../footer/footer';
export const About = (props) => {
    const [about, setAbout] = useState('');
    const navigate = useNavigate();
    const { profile, setProfile } = useContext(AppContext);
    useEffect(() => {
        if (profile.about) {
            setAbout(profile.about);
        }
    }, [profile]);
    const handleStateChange = (e) => {
        setAbout(e.target.value);
        setProfile({ ...profile, about: e.target.value });
    };
    return (
        <>
            <div className='global-container'>
                <SideMenu />
                <div className='body-container'>
                    <div className={`form ${styles['about-form']}`}>
                        <div className={`${styles['experience-info']}`}>
                            <h1>Add Something about yourself</h1>

                            <div className='text-field text-area '>
                                <textarea
                                    type='text'
                                    id='about'
                                    className='text-area__input input-field'
                                    name='about'
                                    value={about}
                                    onChange={(e) => handleStateChange(e)}
                                    rows={3}
                                    cols={30}
                                    required
                                />
                            </div>

                            <div className='btn-right'>
                                <button
                                    className='btn btn-dark'
                                    onClick={() => navigate('/languages')}
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
            <Footer hrefLeft='/languages' hideRight='true' />
        </>
    );
};
