import styles from "./experience.module.css";

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
            <div className="col-2">
                <div className="text-field experience__subfield">
                    <label htmlFor="companyName">Enter your company:</label>
                    <input
                        type="text"
                        id="companyName"
                        className="input-field"
                        name="companyName"
                        value={companyName}
                        onChange={(e) => handleStateChange(e)}
                        required
                    />
                </div>
                <div className="text-field  experience__subfield">
                    <label htmlFor="position">Enter your position:</label>
                    <input
                        type="text"
                        id="position"
                        className="input-field "
                        name="position"
                        value={position}
                        onChange={(e) => handleStateChange(e)}
                        required
                    />
                </div>
            </div>
            <div className="text-field text-area experience__subfield text-area">
                <label htmlFor="jobDescription">
                    Add some job description:
                </label>
                <textarea
                    type="text"
                    id="jobDescription"
                    className="text-area__input input-field"
                    name="jobDescription"
                    value={jobDescription}
                    onChange={(e) => handleStateChange(e)}
                    rows={3}
                    cols={30}
                    required
                />
            </div>
            <div className="text-field experience__subfield checkbox">
                <label htmlFor="companyName">
                    Is this your current company
                </label>
                <input
                    type="checkbox"
                    id="current"
                    name="current"
                    className="checkbox_input"
                    value={current}
                    checked={current}
                    onChange={(e) => handleStateChange(e)}
                    required
                />
            </div>
            <div className="col-2">
                <div className="text-field experience__subfield">
                    <label htmlFor="from">Start date:</label>
                    <input
                        type="date"
                        id="from"
                        name="from"
                        value={from}
                        className={`input-field  ${styles["date-input"]}`}
                        onChange={(e) => handleStateChange(e)}
                        required
                    />
                </div>
                {!current && (
                    <div className="text-field experience__subfield">
                        <label htmlFor="to">Worked till:</label>
                        <input
                            type="date"
                            id="to"
                            className={`input-field  ${styles["date-input"]}`}
                            name="to"
                            value={to}
                            onChange={(e) => handleStateChange(e)}
                            required
                        />
                    </div>
                )}
            </div>
            <div className={`btn-right ${styles["btn-footer"]}`}>
                <button
                    className={`btn btn-dark`}
                    onClick={(e) => saveExperience(e)}
                    disabled={showDisabled}
                >
                    Save
                </button>
            </div>
        </div>
    );
};
