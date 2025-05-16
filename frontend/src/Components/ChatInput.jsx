import React, { useState } from 'react'
import { FaPaperclip } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

const ChatInput = ({ onSend }) => {
    const [input, setInput] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            onSend(input);
            setInput("");
        }
    };

    return (
        <form
            className="relative bottom-15 md:bottom-[15%] px-2 py-2 sm:px-4 sm:py-3 flex items-center bg-white w-full"
            onSubmit={handleSend}
        >
            <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none px-2"
                aria-label="Attach file"
            >
                <FaPaperclip className="h-5 w-5" />
            </button>
            <input
                type="text"
                placeholder="Write a message ..."
                className="w-full bg-gray-100 rounded-full px-3 py-2 text-sm outline-none"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button type="submit">
                <IoMdSend className="ml-1 sm:ml-2 text-gray-500 hover:text-gray-700 h-8 w-8" />
            </button>
        </form>
    );
};

export default ChatInput;