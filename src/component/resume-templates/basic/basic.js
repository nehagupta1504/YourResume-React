import { useContext } from 'react';
import { AppContext } from '../../../context/appContext';
import styles from './basic.module.css';
import silhoutte from '../../../assets/user_silhoutte.png';
export const BasicTemplate = (props) => {
    const { profile } = useContext(AppContext);
    console.log('profile', profile);
    const {
        personalInformation,
        hobbies,
        languages,
        social,
        about,
        experience,
        education,
    } = profile;
    return (
        <div className={styles['resume-preview']}>
            <div
                className={`${styles['page-container']} ${styles['hidden-on-narrow']}`}
            >
                <div className={`${styles['pdf-page']} ${styles['size-a4']}`}>
                    <div className={`${styles['template-container']}`}>
                        <div className={`${styles['template-left']}`}>
                            <div className={`${styles['left-content']}`}>
                                <div className={`${styles['left-image']}`}>
                                    <img
                                        src={silhoutte}
                                        alt='user Image'
                                        className={`${styles['user-image']}`}
                                    />
                                </div>

                                {about && (
                                    <div
                                        className={`${styles['section']} ${styles['section-about']}`}
                                    >
                                        <h3
                                            className={`${styles['section-heading']}`}
                                        >
                                            About Me
                                        </h3>
                                        <p
                                            className={`${styles['about-text']}`}
                                        >
                                            {about}
                                        </p>
                                    </div>
                                )}
                                {social && (
                                    <>
                                        <div
                                            className={`${styles['section']} ${styles['section-social']}`}
                                        >
                                            <h3
                                                className={`${styles['section-heading']} ${styles['social-heading']}`}
                                            >
                                                Social Links
                                            </h3>
                                            <div
                                                className={`${styles['sub-section']} ${styles['section-social-links']}`}
                                            >
                                                {social.linkedIn && (
                                                    <div
                                                        className={`${styles['social-link']}`}
                                                    >
                                                        <a
                                                            href='https://www.linkedin.com/in/{{social.linkedIn}}'
                                                            target='_blank'
                                                            rel='noreferrer'
                                                            className={`${styles['social-link-anchor']}`}
                                                        >
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='20'
                                                                height='20'
                                                                fill='rgb(15, 56, 89)'
                                                                className={`${styles['bi']} ${styles['bi-linkedin']}`}
                                                                viewBox='0 0 16 16'
                                                            >
                                                                <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
                                                            </svg>
                                                            <span
                                                                className={`${styles['social-text']}`}
                                                            >
                                                                {
                                                                    social.linkedIn
                                                                }
                                                            </span>
                                                        </a>
                                                    </div>
                                                )}
                                                {social.github && (
                                                    <div
                                                        className={`${styles['social-link']}`}
                                                    >
                                                        <a
                                                            href='https://github.com/{{social.github}}'
                                                            target='_blank'
                                                            rel='noreferrer'
                                                            className={`${styles['social-link-anchor']}`}
                                                        >
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='16'
                                                                height='16'
                                                                fill='rgb(15, 56, 89)'
                                                                className={`${styles['bi']} ${styles['bi-github']}`}
                                                                viewBox='0 0 16 16'
                                                            >
                                                                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                                                            </svg>
                                                            <span
                                                                className={`${styles['social-text']}`}
                                                            >
                                                                {social?.github}
                                                            </span>
                                                        </a>
                                                    </div>
                                                )}
                                                {social.facebook && (
                                                    <div
                                                        className={`${styles['social-link']}`}
                                                    >
                                                        <a
                                                            href={`https://facebook.com/${social?.facebook}`}
                                                            target='_blank'
                                                            rel='noreferrer'
                                                            className={`${styles['social-link-anchor']}`}
                                                        >
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='16'
                                                                height='16'
                                                                fill='rgb(15, 56, 89)'
                                                                className={`${styles['bi']} ${styles['bi-facebook']}`}
                                                                viewBox='0 0 16 16'
                                                            >
                                                                <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                                                            </svg>
                                                            <span
                                                                className={`${styles['social-text']}`}
                                                            >
                                                                {
                                                                    social?.facebook
                                                                }
                                                            </span>
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                                {languages.length > 0 && (
                                    <>
                                        <div className={`${styles['section']}`}>
                                            <h3
                                                className={`${styles['section-heading']} ${styles['language-heading']}`}
                                            >
                                                Languages
                                            </h3>
                                            <div
                                                className={`${styles['sub-section']} ${styles['section-languages']}`}
                                            >
                                                {languages.map(
                                                    (language, index) => (
                                                        <div
                                                            className={`${styles['language']}`}
                                                            key={language?.id}
                                                        >
                                                            <span>
                                                                {
                                                                    language.language
                                                                }
                                                            </span>
                                                            <progress
                                                                id='file'
                                                                value={
                                                                    language.percentage
                                                                }
                                                                max='100'
                                                                className={`${styles['language-progress-bar']}`}
                                                            />
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                                {hobbies.length > 0 && (
                                    <>
                                        <div className={`${styles['section']}`}>
                                            <h3
                                                className={`${styles['section-heading']} ${styles['hobbies-heading']}`}
                                            >
                                                Hobbies
                                            </h3>
                                            <div
                                                className={`${styles['sub-section']}`}
                                            >
                                                <div
                                                    className={`${styles['hobby-divider']}`}
                                                >
                                                    {hobbies.map(
                                                        (hobby, index) => (
                                                            <div
                                                                className={`${styles['hobby']}`}
                                                                key={hobby.id}
                                                            >
                                                                <svg
                                                                    xmlns='http://www.w3.org/2000/svg'
                                                                    width='16'
                                                                    height='16'
                                                                    fill='rgb(15, 56, 89)'
                                                                    className={`${styles['bi']} ${styles['bi-star-fill']} ${styles['bi-small']}`}
                                                                    viewBox='0 0 16 16'
                                                                >
                                                                    <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                                                                </svg>
                                                                <span
                                                                    className={`${styles['social-text']}`}
                                                                >
                                                                    {hobby}
                                                                </span>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={`${styles['template-right']}`}>
                            <div className={`${styles['section-right']}`}>
                                <div
                                    className={`${styles['section-personal-details']}`}
                                >
                                    <div className={`${styles['name']}`}>
                                        <h2>{personalInformation?.name}</h2>
                                    </div>
                                    <div
                                        className={`${styles['contact-info']}`}
                                    >
                                        {personalInformation?.contact && (
                                            <div
                                                className={`${styles['sub-contact-info']} ${styles['mobile-no']}`}
                                            >
                                                <a href='tel:{{contact}}'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='16'
                                                        height='16'
                                                        fill='rgb(239, 233, 233)'
                                                        className={`${styles['bi']} ${styles['bi-telephone-fill']} ${styles['bi-right']}`}
                                                        viewBox='0 0 16 16'
                                                    >
                                                        <path
                                                            fillRule='evenodd'
                                                            d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
                                                        />
                                                    </svg>
                                                    <span
                                                        className={`${styles['sub-contact-info-text']}`}
                                                    >
                                                        {
                                                            personalInformation?.contact
                                                        }
                                                    </span>
                                                </a>
                                            </div>
                                        )}
                                        {personalInformation?.email && (
                                            <div
                                                className={`${styles['sub-contact-info']} ${styles['mail']}`}
                                            >
                                                <a
                                                    href={`mailto:${personalInformation?.email}`}
                                                >
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='16'
                                                        height='16'
                                                        fill='rgb(239, 233, 233)'
                                                        className={`${styles['bi']} ${styles['bi-envelope-at-fill']} ${styles['bi-right']}`}
                                                        viewBox='0 0 16 16'
                                                    >
                                                        <path d='M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z' />
                                                        <path d='M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z' />
                                                    </svg>
                                                    <span
                                                        className={`${styles['sub-contact-info-text']}`}
                                                    >
                                                        {
                                                            personalInformation?.email
                                                        }
                                                    </span>
                                                </a>
                                            </div>
                                        )}
                                        {personalInformation?.address && (
                                            <div
                                                className={`${styles['sub-contact-info']} ${styles['address']}`}
                                            >
                                                <a
                                                    href={
                                                        personalInformation
                                                            ?.address?.location
                                                    }
                                                    target='_blank'
                                                    rel='noreferrer'
                                                >
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='16'
                                                        height='16'
                                                        fill='rgb(239, 233, 233)'
                                                        className={`${styles['bi']} ${styles['bi-geo-alt-fill']} ${styles['bi-right']}`}
                                                        viewBox='0 0 16 16'
                                                    >
                                                        <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
                                                    </svg>
                                                    <span
                                                        className={`${styles['sub-contact-info-text']}`}
                                                    >
                                                        {
                                                            personalInformation
                                                                .address?.value
                                                        }
                                                    </span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {experience.length > 0 && (
                                    <>
                                        <div
                                            className={`${styles['bottom-right-line']}`}
                                        ></div>

                                        <div
                                            className={`${styles['section-experience']}`}
                                        >
                                            <div
                                                className={`${styles['section-right-heading']}`}
                                            >
                                                <h3>Experience</h3>
                                            </div>
                                            <ul
                                                className={`${styles['timeline']}`}
                                            >
                                                {experience.map(
                                                    (exp, index) => (
                                                        <li
                                                            className={`${styles['timeline-event']}`}
                                                            event-heading={
                                                                exp?.companyName
                                                            }
                                                            key={exp.id}
                                                        >
                                                            {exp?.current ? (
                                                                <div
                                                                    className={`${styles['event-time']}`}
                                                                    event-time={`${exp?.from} - Present`}
                                                                ></div>
                                                            ) : (
                                                                <div
                                                                    className={`${styles['event-time']}`}
                                                                    event-time={`${exp?.from} - ${exp.to}`}
                                                                ></div>
                                                            )}
                                                            <h4
                                                                className={`${styles['timeline-heading']}`}
                                                            >
                                                                {exp.position}
                                                            </h4>
                                                            <p
                                                                className={`${styles['timeline-text']}`}
                                                            >
                                                                {
                                                                    exp.jobDescription
                                                                }{' '}
                                                            </p>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </>
                                )}
                                {education.length > 0 && (
                                    <>
                                        <div
                                            className={`${styles['bottom-right-line']}`}
                                        ></div>
                                        <div
                                            className={`${styles['section-experience']}`}
                                        >
                                            <div
                                                className={`${styles['section-right-heading']}`}
                                            >
                                                <h3>Education</h3>
                                            </div>
                                            <ul
                                                className={`${styles['timeline']}`}
                                            >
                                                {education.map((edu, index) => (
                                                    <li
                                                        className={`${styles['timeline-event']} ${styles['education']}`}
                                                        event-heading={
                                                            edu?.degree
                                                        }
                                                        key={edu.id}
                                                    >
                                                        <div
                                                            className={`${styles['event-time']}`}
                                                            event-time={
                                                                edu.subject
                                                            }
                                                        ></div>
                                                        {edu.current ? (
                                                            <div
                                                                className={`${styles['event-time2']}`}
                                                                event-time2={`${edu.from} - Present`}
                                                            ></div>
                                                        ) : (
                                                            <div
                                                                className={`${styles['event-time2']}`}
                                                                event-time2={`${edu.from} - ${edu.to}`}
                                                            ></div>
                                                        )}
                                                        <h6
                                                            className={`${styles['timeline-heading']}`}
                                                        >
                                                            {edu.institueName}
                                                        </h6>
                                                        <span>
                                                            Percentile -{' '}
                                                            {edu.percentage}%
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
