import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/appContext';
import { useState, useContext } from 'react';
import { BasicTemplate } from '../resume-templates/basic/basic';
import { Languages } from './language';
import { Hobbies } from './hobbies';
import SideMenu from '../side-menu/side-menu';
import Footer from '../footer/footer';
export const LanguagesAndHobbies = () => {
    const [hobbies, setHobbies] = useState([]);
    const navigate = useNavigate();
    return (
        <>
            <div className='global-container'>
                <SideMenu />
                <div className='body-container'>
                    <div className={`form `}>
                        <div className={``}>
                            <Languages />
                            <Hobbies value={(hobbies, setHobbies)} />

                            <div className='btn-right'>
                                <button
                                    className='btn btn-dark'
                                    onClick={() => navigate('/experience')}
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
            <Footer hrefLeft='/skills' hrefRight='/about' />
        </>
    );
};
