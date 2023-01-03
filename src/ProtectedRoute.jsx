import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from './context/authContext'
import Loading from './layouts/Loading/Loading'

function ProtectedRoute({ children }) {
    const { user, loading } = useAuthContext()

    if (loading) return <Loading />

    if (!user) return <Navigate to='/login' />

    return <>{children}</>
}

export default ProtectedRoute