import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Sidebar"

function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="h-full md:flex vh-100">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Dashboard
