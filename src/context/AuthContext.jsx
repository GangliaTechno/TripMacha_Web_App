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
        setUserToTime
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}