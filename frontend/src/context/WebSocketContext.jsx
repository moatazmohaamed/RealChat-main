import { createContext, useContext, useEffect, useState } from 'react';

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        // Connect to WebSocket server
        const ws = new WebSocket('ws://localhost:3001'); // Update with your WebSocket server URL

        ws.onopen = () => {
            console.log('Connected to WebSocket');
            setConnected(true);
        };

        ws.onclose = () => {
            console.log('Disconnected from WebSocket');
            setConnected(false);
        };

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        setSocket(ws);

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = (message) => {
        if (socket && connected) {
            socket.send(JSON.stringify(message));
        }
    };

    return (
        <WebSocketContext.Provider value={{ socket, messages, sendMessage, connected }}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => {
    const context = useContext(WebSocketContext);
    if (!context) {
        throw new Error('useWebSocket must be used within a WebSocketProvider');
    }
    return context;
}; 