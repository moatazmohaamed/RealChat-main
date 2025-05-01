
import { Outlet } from 'react-router-dom';
import Groups from './../Components/Groups';
function GroupsLayout() {
  return (
    <>
      <Groups />
      <Outlet />
    </>
  )
}

export default GroupsLayout
