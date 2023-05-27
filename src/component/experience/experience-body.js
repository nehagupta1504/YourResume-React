import styles from './experience.module.css';

export const AddExperience = (props) => {
    const { handleStateChange, currentCompany, saveExperience } = props;
    const { companyName, position, jobDescription, current, from, to, index } =
        currentCompany;
    const showDisabled =
        companyName &&
        position &&
        jobDescription &&
        (current ? from : from && to)
            ? false
            : true;
    return (
        <div key={index}>
            <div className='text-field experience__subfield'>
                <label htmlFor='companyName'>Company Name</label>
                <input
                    type='text'
                    id='companyName'
                    className='input-field'
                    name='companyName'
                    value={companyName}
                    placeholder='Monotype Solutions'
                    onChange={(e) => handleStateChange(e)}
                    required
                />
            </div>
            <div className='text-field  experience__subfield'>
                <label htmlFor='position'>Position</label>
                <input
                    type='text'
                    id='position'
                    className='input-field '
                    name='position'
                    value={position}
                    placeholder='SDE II'
                    onChange={(e) => handleStateChange(e)}
                    required
                />
            </div>
            <div className='text-field text-area experience__subfield text-area'>
                <label htmlFor='jobDescription'>Job Description</label>
                <textarea
                    type='text'
                    id='jobDescription'
                    className='text-area__input input-field'
                    name='jobDescription'
                    value={jobDescription}
                    placeholder='I am working as a MERN Stack developer with 2+ years experience'
                    onChange={(e) => handleStateChange(e)}
                    rows={3}
                    cols={3}
                    required
                />
            </div>
            <div className='text-field experience__subfield checkbox'>
                <label htmlFor='companyName'>
                    Is this your current company
                </label>
                <input
                    type='checkbox'
                    id='current'
                    name='current'
                    className='checkbox_input'
                    value={current}
                    checked={current}
                    onChange={(e) => handleStateChange(e)}
                    required
                />
            </div>
            <div className='text-field experience__subfield'>
                <label htmlFor='from'>Start Date</label>
                <input
                    type='date'
                    id='from'
                    name='from'
                    value={from}
                    className={`input-field  ${styles['date-input']}`}
                    onChange={(e) => handleStateChange(e)}
                    required
                />
            </div>
            {!current && (
                <div className='text-field experience__subfield'>
                    <label htmlFor='to'>Worked Till</label>
                    <input
                        type='date'
                        id='to'
                        className={`input-field  ${styles['date-input']}`}
                        name='to'
                        value={to}
                        onChange={(e) => handleStateChange(e)}
                        required
                    />
                </div>
            )}
            <div className={`btn-right ${styles['btn-footer']}`}>
                <button
                    className={`btn btn-dark`}
                    onClick={(e) => saveExperience(e)}
                    disabled={showDisabled}
                >
                    +
                </button>
            </div>
        </div>
    );
};
