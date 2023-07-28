import React, { useState, useContext, createContext } from 'react'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    // Fetch Userdata from session Storage if already available otherwise save null
    const [authUser, setAuthUser] = useState(JSON.parse(window.sessionStorage.getItem('authUser')));
    const x = window.sessionStorage.getItem('isLoggedIn') === 'true' ? true : false;
    const [isLoggedIn, setIsLoggedIn] = useState(x);


    const [userPlaceName, setUserPlaceName] = useState('')
    const [userWithinRadius, setUserWithinRadius] = useState('')
    const [userFromTime, setUserFromTime,] = useState('')
    const [userToTime, setUserToTime] = useState('');

    const [response1, setResponse1] = useState(null);
    const [response2, setResponse2] = useState(null);
    const [response3, setResponse3] = useState(null);


    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,

        userPlaceName,
        userWithinRadius,
        userFromTime,
        userToTime,
        setUserPlaceName,
        setUserWithinRadius,
        setUserFromTime,
        setUserToTime,

        response1,
        response2,
        response3,
        setResponse1,
        setResponse2,
        setResponse3,
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}