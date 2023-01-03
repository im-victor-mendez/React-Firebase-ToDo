import React, { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export const authContext = createContext()

export function useAuthContext() {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    function unsubscribeObserver(currentUser) {
        setUser(currentUser)
        localStorage.setItem('user', currentUser)
        setLoading(false)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, unsubscribeObserver)
    
        return () => unsubscribe()
    }, [])
    

    const register = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    return <authContext.Provider value={{ loading, user, register, login }}>{children}</authContext.Provider>
}