import { Outlet } from 'react-router-dom';
import Groups from './../Components/Groups';
import { useState, useEffect } from 'react';
import ChatHeader from '../Components/ChatHeader';

function GroupsLayout() {
  const [groupOpen, setGroupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return groupOpen ? <Outlet /> : <Groups onContactClick={() => setGroupOpen(true)} />;
  }

  return (
    <div className="flex h-full w-full">
      <div className="w-full md:max-w-[50%] lg:max-w-[30%] ">
        <Groups onContactClick={() => setGroupOpen(true)} />
      </div>
      <div className="flex-1">
        <ChatHeader />
        <Outlet />
      </div>
    </div>
  );
}

export default GroupsLayout
