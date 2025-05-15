import { Outlet, useLocation } from 'react-router-dom';
import Profile from './../Components/Profile';
import { useState, useEffect } from 'react';

function ProfileLayout() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset profileOpen when route changes
  useEffect(() => {
    setProfileOpen(false);
  }, [location.pathname]);

  if (isMobile) {
    return profileOpen ? <Outlet /> : <Profile onContactClick={() => setProfileOpen(true)} />;
  }

  return (
    <div className="flex h-full w-full">
      <div className="w-full max-w-xs ">
        <Profile onContactClick={() => setProfileOpen(true)} />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfileLayout
