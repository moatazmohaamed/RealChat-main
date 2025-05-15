import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen'>
                <h1 className='text-4xl font-bold text-gray-800'>404</h1>
                <p className='text-lg text-gray-600'>Page Not Found</p>
                <NavLink to='/' className='mt-4 text-blue-500 hover:underline'>Go to Home</NavLink>
            </div>
        </>
    )
}

export default NotFound
