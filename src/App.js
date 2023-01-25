import { PersonalInfo } from "./component/personal-info/personal-info";
import { Experience } from "./component/experience/experience";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/home/home";
import Header from "./component/header/header";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/resume" element={<PersonalInfo />} />
                <Route exact path="/experience" element={<Experience />} />
            </Routes>
        </>
    );
}

export default App;
