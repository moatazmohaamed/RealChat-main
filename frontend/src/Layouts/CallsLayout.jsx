import { Outlet } from 'react-router-dom';
import Calls from './../Components/Calls';
import { useState, useEffect } from 'react';
import ChatHeader from '../Components/ChatHeader';

function CallsLayout() {
  const [callOpen, setCallOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return callOpen ? <Outlet /> : <Calls onContactClick={() => setCallOpen(true)} />;
  }

  return (
    <div className="flex h-full w-full">
      <div className="w-full md:max-w-[50%] lg:max-w-[30%]  ">
        <Calls onContactClick={() => setCallOpen(true)} />
      </div>
      <div className="flex-1">
        <ChatHeader />
        <Outlet />
      </div>
    </div>
  );
}

export default CallsLayout
