import styles from './footer.module.css';
import { useNavigate } from 'react-router-dom';
const Footer = (props) => {
    const { hrefLeft, hrefRight, disableLeft, disableRight } = props;
    const navigate = useNavigate();
    return (
        <div className={styles['footer']}>
            <button
                className='btn btn-dark'
                disabled={disableLeft}
                onClick={() => navigate(`${hrefLeft}`)}
            >
                Prev
                <span className='icon icon-left-arrow '></span>
            </button>
            <button
                className='btn btn-dark'
                disabled={disableRight}
                onClick={() => navigate(`${hrefRight}`)}
            >
                Next
                <span className='icon icon-right-arrow '></span>
            </button>
        </div>
    );
};

export default Footer;
