import { useNavigate } from 'react-router-dom';
import SideMenu from '../side-menu/side-menu';
import Footer from '../footer/footer';
const Skills = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='global-container'>
                <SideMenu />
                <div className='body-container'>
                    <div className='form'>
                        <h1 className='heading'>Add Your Skills</h1>
                    </div>
                </div>
            </div>
            <Footer hrefLeft='/experience' hrefRight='/languages' />
        </>
    );
};

export default Skills;
