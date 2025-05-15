import { Outlet, useLocation } from 'react-router-dom';
import Settings from './../Components/Settings';
import { useState, useEffect } from 'react';

function SettingsLayout() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset settingsOpen when route changes
  useEffect(() => {
    setSettingsOpen(false);
  }, [location.pathname]);

  if (isMobile) {
    return settingsOpen ? <Outlet /> : <Settings onContactClick={() => setSettingsOpen(true)} />;
  }

  return (
    <div className="flex h-full w-full">
      <div className="w-full max-w-xs border-r">
        <Settings onContactClick={() => setSettingsOpen(true)} />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default SettingsLayout
