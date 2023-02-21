import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './personal-info.module.css';
import { AppContext } from '../../context/appContext';
import { BasicTemplate } from '../resume-templates/basic/basic';
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
        <div className='body-container'>
            <div className='form-container'>
                <div className='form'>
                    <h1 className='heading'>Add your personal information</h1>
                    <div className={`${styles['personal-info']}`}>
                        <div className='personal-info__subfield text-field'>
                            <label htmlFor='name'>Enter your name:</label>
                            <input
                                type='text'
                                id='name'
                                className='input-field'
                                name='name'
                                value={user.name}
                                onChange={(e) => handleStateChange(e)}
                                required
                            />
                        </div>
                        <div className='personal-info__subfield text-field'>
                            <label htmlFor='email'>Enter your email:</label>
                            <input
                                type='email'
                                id='email'
                                className='input-field'
                                name='email'
                                value={user.email}
                                onChange={(e) => handleStateChange(e)}
                                required
                            />
                        </div>
                        <div className='personal-info__subfield text-field'>
                            <label htmlFor='contact'>
                                Enter your contact no. :
                            </label>
                            <input
                                type='text'
                                id='contact'
                                className='input-field'
                                name='contact'
                                value={user.contact}
                                onChange={(e) => handleStateChange(e)}
                                required
                            />
                        </div>
                        <div className='col-2'>
                            <div className='personal-info__subfield text-field'>
                                <label htmlFor='linkedIn'>
                                    Enter your linkedIn username:
                                </label>
                                <input
                                    type='text'
                                    id='linkedIn'
                                    className='input-field'
                                    name='linkedIn'
                                    value={user.linkedIn}
                                    onChange={(e) => handleStateChange(e)}
                                />
                            </div>
                            <div className='personal-info__subfield text-field'>
                                <label htmlFor='name'>Enter your github:</label>
                                <input
                                    type='text'
                                    id='github'
                                    className='input-field'
                                    name='github'
                                    value={user.github}
                                    onChange={(e) => handleStateChange(e)}
                                />
                            </div>
                        </div>
                        <div className='btn-right'>
                            <button
                                className='btn btn-dark'
                                onClick={() => navigate('/about')}
                                disabled={
                                    !user.name || !user.email || !user.contact
                                }
                            >
                                Next
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='preview-resume'>
                    <BasicTemplate></BasicTemplate>
                </div>
            </div>
        </div>
    );
};
