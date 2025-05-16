import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useBaseUrl } from './BaseUrlContext';

const SocketContext = createContext();

export const useSocket = () => {
    return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const baseUrl = useBaseUrl();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) return;

        const newSocket = io(baseUrl, {
            auth: {
                token
            }
        });

        newSocket.on('connect', () => {
            console.log('Connected to socket server');
        });

        newSocket.on('connect_error', (error) => {
            console.error('Socket connection error:', error);
        });

        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, [baseUrl]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}; 