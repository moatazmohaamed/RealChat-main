import { createContext, useContext, useState, useEffect } from 'react';
import { useWebSocket } from './WebSocketContext';

const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [activeChat, setActiveChat] = useState(null);
    const [chatHistory, setChatHistory] = useState({});
    const { messages, sendMessage } = useWebSocket();

    useEffect(() => {
        // Load user from localStorage on initial load
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            setCurrentUser(JSON.parse(savedUser));
        }
    }, []);

    useEffect(() => {
        // Update chat history when new messages arrive
        messages.forEach((message) => {
            const chatId = message.chatId;
            setChatHistory((prev) => ({
                ...prev,
                [chatId]: [...(prev[chatId] || []), message],
            }));
        });
    }, [messages]);

    const login = (userData) => {
        setCurrentUser(userData);
        localStorage.setItem('currentUser', JSON.stringify(userData));
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };

    const sendChatMessage = (content, receiverId) => {
        if (!currentUser || !receiverId) return;

        const message = {
            senderId: currentUser.id,
            receiverId,
            content,
            timestamp: new Date().toISOString(),
            chatId: [currentUser.id, receiverId].sort().join('_'),
        };

        sendMessage(message);
    };

    return (
        <ChatContext.Provider
            value={{
                currentUser,
                activeChat,
                chatHistory,
                login,
                logout,
                setActiveChat,
                sendChatMessage,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
}; 