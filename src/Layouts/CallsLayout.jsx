
import { Outlet } from 'react-router-dom';
import Calls from './../Components/Calls';
function CallsLayout() {
  return (
    <>
      <Calls />
      <Outlet />
    </>
  )
}

export default CallsLayout
