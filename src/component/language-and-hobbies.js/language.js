import styles from './index.module.css';
import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/appContext';
export const Languages = (props) => {
    const intialState = {
        language: '',
        percentage: '',
    };
    const [state, setState] = useState(intialState);
    const [showDisabled, setShowDisabled] = useState(true);
    const { profile, setProfile } = useContext(AppContext);
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: [e.target.value] });
    };
    const handleSave = () => {
        setProfile({
            ...profile,
            languages: [
                ...profile.languages,
                {
                    ...state,
                    percentage: (state.percentage * 100) / 5,
                    id: new Date().getTime().toString(),
                },
            ],
        });
        setState(intialState);
    };
    useEffect(() => {
        setShowDisabled(!state?.language || !state?.percentage);
    }, [state]);
    return (
        <div className={``}>
            <h1>Language and Proficiency</h1>
            <div className='text-field'>
                <label htmlFor='language'>Language</label>
                <input
                    name='language'
                    className={`input-field `}
                    placeholder='English'
                    value={state?.language}
                    onChange={handleChange}
                />
            </div>
            <div className='text-field '>
                <label htmlFor='jobDescription'>Proficiency</label>
                <select
                    name='percentage'
                    id='percentage'
                    className={`input-field `}
                    value={state?.percentage}
                    onChange={(e) => handleChange(e)}
                >
                    <option disabled={true} value=''>
                        Select proficiency
                    </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div className={`btn-right ${styles['btn-footer']}`}>
                <button
                    className={`btn btn-dark`}
                    onClick={handleSave}
                    disabled={showDisabled}
                >
                    +
                </button>
            </div>
        </div>
    );
};
