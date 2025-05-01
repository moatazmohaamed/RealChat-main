
import { Outlet } from 'react-router-dom';
import Chats from './../Components/Chats';
function ChatsLayout() {
  return (
    <>
      <Chats />
      <Outlet />
    </>
  )
}

export default ChatsLayout
