import { useNavigate } from "react-router-dom";
export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Create your resume</h1>
            <button onClick={() => navigate("/resume")}>Click here</button>
        </>
    );
};
