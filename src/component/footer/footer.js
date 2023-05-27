import styles from './footer.module.css';
import { useNavigate } from 'react-router-dom';
const Footer = (props) => {
    const { hrefLeft, hrefRight, disableLeft, disableRight } = props;
    const navigate = useNavigate();
    return (
        <div className={styles['footer']}>
            {!props.hideLeft && (
                <button
                    className='btn btn-dark'
                    disabled={disableLeft}
                    onClick={() => navigate(`${hrefLeft}`)}
                >
                    <span className='icon-absolute icon-absolute-left'>
                        Prev
                    </span>
                </button>
            )}
            {!props.hideRight && (
                <button
                    className='btn btn-dark'
                    disabled={disableRight}
                    onClick={() => navigate(`${hrefRight}`)}
                >
                    <span className='icon-absolute icon-absolute-right'>
                        Next
                    </span>
                </button>
            )}
        </div>
    );
};

export default Footer;
