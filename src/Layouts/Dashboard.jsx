import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Sidebar"

function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row vh-100">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Dashboard
