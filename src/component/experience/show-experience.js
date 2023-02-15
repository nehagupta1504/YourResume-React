import { useMemo } from 'react';
import styles from './experience.module.css';
export const ShowExperience = (props) => {
    const { companiesData, deleteExperience } = props;
    console.log('Companies Data', companiesData);
    // return useMemo(
    //     () =>
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
                                <td className={`${styles['table-cell']}`}>
                                    {companyName}
                                </td>
                                <td className={`${styles['table-cell']}`}>
                                    {position}
                                </td>
                                <td className={`${styles['table-cell-lg']}`}>
                                    {current
                                        ? `${from} - Current`
                                        : `${from} - ${to}`}
                                </td>
                                <td
                                    className={`${styles['table-cell']} ${styles['overflow-scroll']}`}
                                >
                                    <div className={`${styles['table-row']}`}>
                                        {jobDescription}
                                    </div>
                                </td>
                                <td
                                    className={`${styles['table-cell']} `}
                                    onClick={() => deleteExperience(id)}
                                >
                                    <button
                                        className={` btn  ${styles['table-actions']}`}
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
    //     [props],
    // );
};
