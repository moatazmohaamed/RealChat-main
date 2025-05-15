import React from 'react'
import Pink from "../img/Ellipse 1131.png"
import { Link } from 'react-router-dom'
import { IoCallOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";



const ChatHeader = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2  bg-white shadow-sm">
            <div className="flex items-center gap-3">
                <img
                    src={Pink}
                    alt="User avatar"
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <p className="font-semibold">Pink Panda</p>
                    <p className="text-sm text-green-500">Online</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button aria-label="Voice Call">

                    <IoCallOutline className='h-7 w-7' />

                </button>
                <button aria-label="Search">

                    <IoIosSearch className='h-7 w-7' />

                </button>
            </div>
        </div>
    )
}

export default ChatHeader
