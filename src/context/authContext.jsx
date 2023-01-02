import React, { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export const authContext = createContext()

export function useAuthContext() {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({ children }) {
    const register = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    return <authContext.Provider value={{ register, login }}>{children}</authContext.Provider>
}