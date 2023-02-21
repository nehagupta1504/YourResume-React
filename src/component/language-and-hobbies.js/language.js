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
            <div className={`col-2`}>
                <div className='text-field'>
                    <input
                        name='language'
                        className={`input-field `}
                        value={state?.language}
                        onChange={handleChange}
                    />
                </div>
                <div className='text-field '>
                    <select
                        name='percentage'
                        id='percentage'
                        className={`input-field `}
                        value={state?.percentage}
                        onChange={(e) => handleChange(e)}
                    >
                        <option disabled={true} value=''>
                            Proficiency
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
            </div>
            <div className={`btn-right ${styles['btn-footer']}`}>
                <button
                    className={`btn btn-dark`}
                    onClick={handleSave}
                    disabled={showDisabled}
                >
                    Save
                </button>
            </div>
        </div>
    );
};
