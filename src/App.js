import { PersonalInfo } from './component/personal-info/personal-info';
import { Experience } from './component/experience/experience';
import { Education } from './component/education/education';
import { Routes, Route } from 'react-router-dom';
import { Home } from './component/home/home';
import Header from './component/header/header';
import { About } from './component/about/about';
import { LanguagesAndHobbies } from './component/language-and-hobbies.js';
import SelectTemplate from './component/template/select-template';
import SideMenu from './component/side-menu/side-menu';
import Layout from './component/layout/global';
function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route
                        exact
                        path='/template'
                        element={<SelectTemplate />}
                    />
                    <Route
                        exact
                        path='/personal-info'
                        element={<PersonalInfo />}
                    />
                    <Route exact path='/about' element={<About />} />
                    <Route
                        exact
                        path='/languages'
                        element={<LanguagesAndHobbies />}
                    />

                    <Route exact path='/experience' element={<Experience />} />
                    <Route exact path='/education' element={<Education />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
