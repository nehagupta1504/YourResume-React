import { createContext, useState, useEffect, useMemo } from 'react';

const initialState = {
    personalInformation: null,
    hobbies: [],
    languages: [],
    social: null,
    about: null,
    experience: [],
    education: [],
};

export const AppContext = createContext({
    profile: null,
    setContext: () => null,
});
export const AppProvider = ({ children }) => {
    const [profile, setProfile] = useState(() => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        return profile ? profile : initialState;
    });
    const value = useMemo(() => ({ profile, setProfile }), [profile]);
    useEffect(() => {
        localStorage.setItem('profile', JSON.stringify(profile));
    }, [profile]);
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
