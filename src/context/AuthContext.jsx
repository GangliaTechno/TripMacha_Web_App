import React, { useState, useContext, createContext } from 'react'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const [authUser, setAuthUser] = useState(null);
    const x = window.sessionStorage.getItem('isLoggedIn') === 'true' ? true : false;
    const [isLoggedIn, setIsLoggedIn] = useState(x);

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}