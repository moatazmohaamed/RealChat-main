import React from 'react'
import { FaPaperclip } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";


const ChatInput = () => (
    <div className="relative bottom-15 md:bottom-0 px-2 py-2 sm:px-4 sm:py-3 flex items-center bg-white w-full">
        <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none px-2"
            aria-label="Attach file"
        >
            <FaPaperclip className="h-5 w-5" />
        </button>
        <input
            type="text"
            placeholder="Write a message ..."
            className="w-full bg-gray-100 rounded-full px-3 py-2 text-sm outline-none"
        />
        <IoMdSend className="ml-1 sm:ml-2 text-gray-500 hover:text-gray-700 h-8 w-8" />
    </div>
);

export default ChatInput
