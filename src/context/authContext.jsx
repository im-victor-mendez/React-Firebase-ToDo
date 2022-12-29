import React, { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export const authContext = createContext()

export function useAuthContext() {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({ children }) {
    const register = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    return <authContext.Provider value={{ register }}>{children}</authContext.Provider>
}