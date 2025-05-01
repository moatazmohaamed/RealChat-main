import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({ children }) => {

    if (localStorage.getItem("token") === null) {
        return <Navigate to="/signin" />
    }
    return children
}

export default ProtectRoute
