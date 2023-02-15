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
    const [profile, setProfile] = useState(initialState);
    const value = useMemo(() => ({ profile, setProfile }), [profile]);
    useEffect(() => {
        console.log('provider profile: ', profile);
    }, [profile]);
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
