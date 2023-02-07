import * as React from "react";
import styles from "./experience.module.css";
export const ShowExperience = (props) => {
    const { companiesData, deleteExperience } = props;
    console.log("Companies Data", companiesData);
    // return (
    //     <div className="form-body experience" key={index}>
    //         <div className="show-experience__subfield">
    //             <h6>
    //                 CompanyName: <span>{companyName}</span>
    //             </h6>
    //         </div>
    //         <div className="show-experience__subfield">
    //             <h6>
    //                 Worked as: <span>{position}</span>
    //             </h6>
    //         </div>
    //         <div className="show-experience__subfield">
    //             <h6>
    //                 Job Description: <span>{jobDescription}</span>
    //             </h6>
    //         </div>
    //         {current ? (
    //             <div className="show-experience__subfield">
    //                 <h6>
    //                     <span>{from}</span> - <span>Present</span>
    //                 </h6>
    //             </div>
    //         ) : (
    //             <div className="show-experience__subfield">
    //                 <h6>
    //                     <span>{from}</span> - <span>{to}</span>
    //                 </h6>
    //             </div>
    //         )}
    //         <div className="btn-footer">
    //             <button onClick={() => deleteExperience(index)}>
    //                 Delete experience
    //             </button>
    //         </div>
    //     </div>
    // );
    return (
        <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Duration</th>
                    <th>Job Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {companiesData &&
                    companiesData.map((company) => {
                        const {
                            companyName,
                            position,
                            jobDescription,
                            current,
                            from,
                            to,
                            id,
                        } = company;
                        return (
                            <tr key={id}>
                                <td className={`${styles["table-cell"]}`}>
                                    {companyName}
                                </td>
                                <td className={`${styles["table-cell"]}`}>
                                    {position}
                                </td>
                                <td className={`${styles["table-cell-lg"]}`}>
                                    {current
                                        ? `${from} - Current`
                                        : `${from} - ${to}`}
                                </td>
                                <td
                                    className={`${styles["table-cell"]} ${styles["overflow-scroll"]}`}
                                >
                                    <div className={`${styles["table-row"]}`}>
                                        {jobDescription}
                                    </div>
                                </td>
                                <td
                                    className={`${styles["table-cell"]} `}
                                    onClick={() => deleteExperience(id)}
                                >
                                    <button
                                        className={` btn  ${styles["table-actions"]}`}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};
