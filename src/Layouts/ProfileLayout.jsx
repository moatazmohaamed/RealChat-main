
import { Outlet } from 'react-router-dom';
import Profile from './../Components/Profile';
function ProfileLayout() {
  return (
    <>
      <Profile />
      <Outlet />
    </>
  )
}

export default ProfileLayout
