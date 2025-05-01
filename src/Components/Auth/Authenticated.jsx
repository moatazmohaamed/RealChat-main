import React from 'react'
import { Navigate } from 'react-router-dom'

const Authenticated = ({ children }) => {

    if (localStorage.getItem("token") !== null) {
        return <Navigate to="/" />
    }
    return children
}

export default Authenticated
