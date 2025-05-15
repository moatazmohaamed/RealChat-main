import React from 'react'

const MessageBubble = ({ text, time, sent }) => {
    return (
        <div className={`flex ${sent ? 'justify-end' : 'justify-start'} px-4`}>
            <div
                className={`max-w-xs px-4 py-2 rounded-xl shadow text-sm ${sent ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
                    }`}
            >
                <p>{text}</p>
                <p className="text-[10px] mt-1 text-gray-400 text-right">{time}</p>
            </div>
        </div>
    )
}

export default MessageBubble
