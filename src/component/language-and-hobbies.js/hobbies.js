import styles from './index.module.css';
import { useState, useContext } from 'react';
import { AppContext } from '../../context/appContext';
export const Hobbies = (props) => {
    const [hobby, setHobby] = useState('');
    const { profile, setProfile } = useContext(AppContext);
    const onChangeHandler = (e) => {
        setHobby(e.target.value);
    };
    const onSaveHandler = () => {
        setProfile({ ...profile, hobbies: [...profile.hobbies, hobby] });
        setHobby('');
    };
    return (
        <div className={`${styles['experience-info']}`}>
            <h1>Add your Hobbies</h1>
            <input
                className='input-field'
                name='hobbies'
                value={hobby}
                onChange={(e) => onChangeHandler(e)}
            />
            <div className={`btn-right ${styles['btn-footer']}`}>
                <button
                    className={`btn btn-dark`}
                    onClick={onSaveHandler}
                    disabled={!hobby}
                >
                    Save
                </button>
            </div>
        </div>
    );
};
