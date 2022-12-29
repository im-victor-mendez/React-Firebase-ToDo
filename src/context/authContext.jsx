import React, { createContext, useContext } from 'react'

export const authContext = createContext()

export function useAuthContext() {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({ children }) {
    return <authContext.Provider value={{  }}>{children}</authContext.Provider>
}