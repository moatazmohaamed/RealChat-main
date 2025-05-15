import React from 'react'

const FileAttachment = ({ name, time }) => (
    <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg shadow w-fit mt-2 ml-4">
        <div className="text-xl">🖼️</div>
        <span className="text-sm font-medium">{name}</span>
        <button aria-label="Download">⬇️</button>
        <p className="text-[10px] text-gray-400 ml-2">{time}</p>
    </div>
);

export default FileAttachment
