import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from './context/authContext'

function ProtectedRoute({ children }) {
    /* To implement loading state/navigation */
    const { user } = useAuthContext()

    if (!user) return <Navigate to='/login' />

    return <>{children}</>
}

export default ProtectedRoute