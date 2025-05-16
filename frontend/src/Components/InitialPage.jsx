import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import CallService from "../img/Call Service.svg"
// import ChatHeader from "./ChatHeader"; // Removed duplicate header
import MessageBubble from './MessageBubble'
import ImagePreview from './ImagePreview'
import FileAttachment from './FileAttachment'
import ChatInput from './ChatInput'
import { useBaseUrl } from "../context/BaseUrlContext";
import { useSocket } from "../context/SocketContext";
import axios from "axios";
import ChatHeader from "./ChatHeader";

const ChatApp = () => {
  const baseUrl = useBaseUrl();
  const socket = useSocket();
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const receiverId = localStorage.getItem("receiverId") || "";
  const myUserId = localStorage.getItem("myUserId");




  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${baseUrl}/api/private-messages/${receiverId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMessages(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch messages");
      }
    };

    fetchMessages();
  }, [baseUrl, receiverId]);

  useEffect(() => {
    if (!socket) return;

    // Generate roomId for private chat
    const roomId = [myUserId, receiverId].sort().join('_');

    // Join the room
    socket.emit('join_room', roomId);

    // Listen for messages
    socket.on('receive_message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    return () => {
      socket.off('receive_message');
      socket.emit('leave_chat', { receiverId });
    };
  }, [socket, receiverId, myUserId]);



  const handleSendMessage = async (messageText) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${baseUrl}/api/private-messages`,
        {
          receiverId,
          message: messageText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const roomId = [myUserId, receiverId].sort().join('_');

      socket.emit('private_message', {
        room: roomId,
        senderId: myUserId,
        receiverId,
        message: messageText,
        time: new Date().toISOString()
      });

      setMessages((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Message sending error:", err);
      setError(
        err.response?.data?.message ||
        err.message ||
        "Failed to send message. Please check your connection and try again."
      );
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex-1 overflow-y-auto bg-[#f7f9fc] px-4 py-6 space-y-6">


        <p className="text-center text-xs text-gray-400">Today</p>
        {error && <div className="text-red-500 text-center">{error}</div>}
        {messages.map((msg, idx) => (
          <MessageBubble
            key={msg._id || idx}
            text={msg.text || msg.message}
            time={msg.time}
            sent={msg.senderId === myUserId}
          />
        ))}
      </div>
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatApp
