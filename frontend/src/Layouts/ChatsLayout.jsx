import { Outlet } from 'react-router-dom';
import Chats from './../Components/Chats';
import { useState, useEffect } from 'react';
import ChatHeader from '../Components/ChatHeader';

function ChatsLayout() {
  const [chatOpen, setChatOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setChatOpen(true);
  };

  if (isMobile) {
    return chatOpen ? (
      <div className="h-full w-full">
        <ChatHeader receiverName={selectedChat?.name} />
        <Outlet />
      </div>
    ) : (
      <Chats onContactClick={handleChatSelect} />
    );
  }

  return (
    <div className="flex h-full w-full">
      <div className="w-full md:max-w-[50%] lg:max-w-[30%]">
        <Chats onContactClick={handleChatSelect} />
      </div>
      <div className="flex-1">
        <ChatHeader receiverName={selectedChat?.name} />
        <Outlet />
      </div>
    </div>
  );
}

export default ChatsLayout
