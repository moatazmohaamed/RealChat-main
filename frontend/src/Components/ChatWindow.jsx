import { useState, useEffect, useRef } from 'react';
import { useChat } from '../context/ChatContext';
import Pink from "../img/Ellipse 1131.png";
import DogHat from "../img/Ellipse 1133.png";

function ChatWindow() {
    const { currentUser, activeChat, chatHistory, sendChatMessage } = useChat();
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef(null);

    // Mock users for demonstration - replace with actual user data from your backend
    const users = {
        "68268645ebcbd548cb940176": { name: "Pink Panda", avatar: Pink },
        "68268645ebcbd548cb940177": { name: "Dog Hat", avatar: DogHat }
    };

    const activeUser = users[activeChat];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() && activeChat) {
            sendChatMessage(message, activeChat);
            setMessage('');
        }
    };

    if (!activeChat) {
        return (
            <div className="h-full w-full d-flex justify-content-center align-items-center">
                <h3 className="text-muted">Select a chat to start messaging</h3>
            </div>
        );
    }

    const chatId = [currentUser?.id, activeChat].sort().join('_');
    const messages = chatHistory[chatId] || [];

    return (
        <div className="h-full w-full d-flex flex-column">
            {/* Chat Header */}
            <div className="d-flex align-items-center gap-3 p-3 border-bottom">
                <img src={activeUser.avatar} alt={activeUser.name} />
                <h5 className="mb-0">{activeUser.name}</h5>
            </div>

            {/* Messages Area */}
            <div className="flex-grow-1 overflow-auto p-3">
                {messages.map((msg, index) => {
                    const isCurrentUser = msg.senderId === currentUser?.id;
                    return (
                        <div
                            key={index}
                            className={`d-flex ${isCurrentUser ? 'justify-content-end' : 'justify-content-start'} mb-3`}
                        >
                            <div
                                className={`message p-3 rounded-3 ${isCurrentUser ? 'bg-primary text-white' : 'bg-light'
                                    }`}
                                style={{ maxWidth: '70%' }}
                            >
                                <p className="mb-0">{msg.content}</p>
                                <small className={`${isCurrentUser ? 'text-white-50' : 'text-muted'}`}>
                                    {new Date(msg.timestamp).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </small>
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-3 border-top">
                <div className="d-flex gap-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ChatWindow; 