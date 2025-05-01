
import { Outlet } from 'react-router-dom';
import Settings from './../Components/Settings';
function SettingsLayout() {
  return (
    <>
      <Settings />
      <Outlet />
    </>
  )
}

export default SettingsLayout
