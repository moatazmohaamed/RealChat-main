import { Outlet } from 'react-router-dom';
import Chats from './../Components/Chats';
import { useState, useEffect } from 'react';

function ChatsLayout() {
  const [chatOpen, setChatOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return chatOpen ? <Outlet /> : <Chats onContactClick={() => setChatOpen(true)} />;
  }

  return (
    <div className="flex h-full w-full">
      <div className="w-full md:max-w-[50%] lg:max-w-[30%] ">
        <Chats onContactClick={() => setChatOpen(true)} />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default ChatsLayout
