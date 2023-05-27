import { useNavigate } from 'react-router-dom';
import SideMenu from '../side-menu/side-menu';
import Footer from '../footer/footer';
const SelectTemplate = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='global-container'>
                <SideMenu />
                <div className='body-container'>
                    <h1>Select Your Template</h1>
                    <div className='section-details_call-to-action bottom-btn'>
                        <button
                            className={`btn btn-dark margin  section-details_action`}
                            onClick={() => navigate('/personal-info')}
                        >
                            Click here
                        </button>
                    </div>
                </div>
            </div>
            <Footer hideLeft='true' hrefRight='/personal-info' />
        </>
    );
};

export default SelectTemplate;
