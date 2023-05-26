import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './personal-info.module.css';
import { AppContext } from '../../context/appContext';
import { BasicTemplate } from '../resume-templates/basic/basic';
import SideMenu from '../side-menu/side-menu';
import Footer from '../footer/footer';
export const PersonalInfo = (props) => {
    const initialState = {
        name: '',
        email: '',
        contact: '',
        linkedIn: '',
        github: '',
    };
    const navigate = useNavigate();
    const [user, setUser] = useState(initialState);
    const { profile, setProfile } = useContext(AppContext);
    useEffect(() => {
        const { personalInformation } = profile;
        for (const key in personalInformation) {
            if (key) {
                setUser({ ...user, key: personalInformation[key] });
            }
        }
    }, [profile]);

    const handleStateChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setProfile({
            ...profile,
            personalInformation: { ...user, [e.target.name]: e.target.value },
        });
    };
    const setitemToLocalStorage = () => {
        const filterUser = Object.entries(user).reduce(
            (a, [k, v]) => (v ? ((a[k] = v), a) : a),
            {},
        );
        console.log(filterUser);
        localStorage.setItem('personalInformation', JSON.stringify(filterUser));
        navigate('/');
    };
    return (
        <>
            <div className='global-container'>
                <SideMenu />
                <div className='body-container'>
                    <div className='form'>
                        <h1 className='heading'>
                            Add your personal information
                        </h1>
                        <div className={`${styles['personal-info']}`}>
                            <div className='personal-info__subfield text-field'>
                                <label htmlFor='name'>Full Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    className='input-field'
                                    name='name'
                                    value={user.name}
                                    placeholder='Neha Gupta'
                                    onChange={(e) => handleStateChange(e)}
                                    required
                                />
                            </div>
                            <div className='personal-info__subfield text-field'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    className='input-field'
                                    name='email'
                                    value={user.email}
                                    placeholder='neha.gupta@abc.com'
                                    onChange={(e) => handleStateChange(e)}
                                    required
                                />
                            </div>
                            <div className='personal-info__subfield text-field'>
                                <label htmlFor='contact'>Phone Number</label>
                                <input
                                    type='text'
                                    id='contact'
                                    className='input-field'
                                    name='contact'
                                    value={user.contact}
                                    placeholder='(+91)7087341234'
                                    onChange={(e) => handleStateChange(e)}
                                    required
                                />
                            </div>
                            <div className='personal-info__subfield text-field'>
                                <label htmlFor='linkedIn'>
                                    LinkedIn Profile:
                                </label>
                                <input
                                    type='text'
                                    id='linkedIn'
                                    className='input-field'
                                    name='linkedIn'
                                    value={user.linkedIn}
                                    placeholder='https://www.linkedin.com/in/nehagupta1504/'
                                    onChange={(e) => handleStateChange(e)}
                                />
                            </div>
                            <div className='personal-info__subfield text-field'>
                                <label htmlFor='name'>Github Profile</label>
                                <input
                                    type='text'
                                    id='github'
                                    className='input-field'
                                    name='github'
                                    value={user.github}
                                    placeholder='https://github.com/nehagupta1504'
                                    onChange={(e) => handleStateChange(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='preview-resume'>
                        <BasicTemplate></BasicTemplate>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
