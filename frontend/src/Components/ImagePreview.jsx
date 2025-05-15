import React from 'react'

const ImagePreview = ({ src, time }) => (
    <div className="px-4">
        <img src={src} alt="Shared" className="rounded-xl w-32 h-32 object-cover" />
        <p className="text-xs text-gray-500 mt-1">🔥 1</p>
        <p className="text-[10px] mt-1 text-gray-400">{time}</p>
    </div>
);

export default ImagePreview
