import styles from './education.module.css';

export const AddEducation = (props) => {
    const { handleStateChange, currentEducation, saveEducation } = props;
    const { id, degree, subject, institueName, percentage, current, from, to } =
        currentEducation;
    const showDisabled =
        degree && subject && institueName && (current ? from : from && to)
            ? false
            : true;
    return (
        <div key={id}>
            <div className='col-2'>
                <div className='text-field experience__subfield'>
                    <label htmlFor='degree'>Enter your Degree:</label>
                    <input
                        type='text'
                        id='degree'
                        className='input-field'
                        name='degree'
                        value={degree}
                        onChange={(e) => handleStateChange(e)}
                        required
                    />
                </div>
                <div className='text-field  experience__subfield'>
                    <label htmlFor='institueName'>Institue Name:</label>
                    <input
                        type='text'
                        id='institueName'
                        className='input-field '
                        name='institueName'
                        value={institueName}
                        onChange={(e) => handleStateChange(e)}
                        required
                    />
                </div>
            </div>
            <div className='text-field text-area experience__subfield text-area'>
                <label htmlFor='percentage'>Percentage:</label>
                <input
                    type='text'
                    id='percentage'
                    className='input-field '
                    name='percentage'
                    value={percentage}
                    onChange={(e) => handleStateChange(e)}
                    required
                />
            </div>
            <div className='text-field text-area experience__subfield text-area'>
                <label htmlFor='subject'>Stream:</label>
                <input
                    type='text'
                    id='subject'
                    className='input-field '
                    name='subject'
                    value={subject}
                    onChange={(e) => handleStateChange(e)}
                    required
                />
            </div>
            <div className='text-field experience__subfield checkbox'>
                <label htmlFor='companyName'>Is this your current degree</label>
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
            <div className='col-2'>
                <div className='text-field experience__subfield'>
                    <label htmlFor='from'>Start date:</label>
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
                        <label htmlFor='to'>Worked till:</label>
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
            </div>
            <div className={`btn-right ${styles['btn-footer']}`}>
                <button
                    className={`btn btn-dark`}
                    onClick={(e) => saveEducation(e)}
                    disabled={showDisabled}
                >
                    Save
                </button>
            </div>
        </div>
    );
};
