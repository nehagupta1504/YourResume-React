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
        <div className="form-body experience" key={index}>
            <div className="experience__subfield">
                <label htmlFor="companyName">Enter your company:</label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={companyName}
                    onChange={(e) => handleStateChange(e)}
                    required
                />
            </div>
            <div className="experience__subfield">
                <label htmlFor="position">Enter your position:</label>
                <input
                    type="text"
                    id="position"
                    name="position"
                    value={position}
                    onChange={(e) => handleStateChange(e)}
                    required
                />
            </div>
            <div className="experience__subfield text-area">
                <label htmlFor="jobDescription">
                    Add some job description:
                </label>
                <textarea
                    type="text"
                    id="jobDescription"
                    name="jobDescription"
                    value={jobDescription}
                    onChange={(e) => handleStateChange(e)}
                    rows={3}
                    cols={30}
                    required
                />
            </div>
            <div className="experience__subfield">
                <label htmlFor="companyName">
                    Is this your current company
                </label>
                <input
                    type="checkbox"
                    id="current"
                    name="current"
                    value={current}
                    checked={current}
                    onChange={(e) => handleStateChange(e)}
                    required
                />
            </div>
            <div className="experience__subfield">
                <label htmlFor="from">Start date:</label>
                <input
                    type="date"
                    id="from"
                    name="from"
                    value={from}
                    onChange={(e) => handleStateChange(e)}
                    required
                />
            </div>
            {!current && (
                <div className="experience__subfield">
                    <label htmlFor="to">Worked till:</label>
                    <input
                        type="date"
                        id="to"
                        name="to"
                        value={to}
                        onChange={(e) => handleStateChange(e)}
                        required
                    />
                </div>
            )}
            <div className="btn-footer">
                <button
                    onClick={(e) => saveExperience(e)}
                    disabled={showDisabled}
                >
                    Save experience
                </button>
            </div>
        </div>
    );
};
