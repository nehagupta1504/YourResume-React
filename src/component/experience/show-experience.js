export const ShowExperience = (props) => {
    const { currentCompany, deleteExperience } = props;
    const { companyName, position, jobDescription, current, from, to, index } =
        currentCompany;
    return (
        <div className="form-body experience" key={index}>
            <div className="show-experience__subfield">
                <h6>
                    CompanyName: <span>{companyName}</span>
                </h6>
            </div>
            <div className="show-experience__subfield">
                <h6>
                    Worked as: <span>{position}</span>
                </h6>
            </div>
            <div className="show-experience__subfield">
                <h6>
                    Job Description: <span>{jobDescription}</span>
                </h6>
            </div>
            {current ? (
                <div className="show-experience__subfield">
                    <h6>
                        <span>{from}</span> - <span>Present</span>
                    </h6>
                </div>
            ) : (
                <div className="show-experience__subfield">
                    <h6>
                        <span>{from}</span> - <span>{to}</span>
                    </h6>
                </div>
            )}
            <div className="btn-footer">
                <button onClick={() => deleteExperience(index)}>
                    Delete experience
                </button>
            </div>
        </div>
    );
};
