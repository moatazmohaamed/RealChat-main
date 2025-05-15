import { Link, NavLink } from "react-router-dom"
import ChatDot from "../img/chat-dots.svg"
import User from "../img/people.svg"
import Phone from "../img/telephone.svg"
import Setting from "../img/gear.svg"
import Profile from "../img/Ellipse 1.png"
import Logo from "../img/Group 69.png"
import { IoIosLogOut } from "react-icons/io";

const logOut = () => {
  localStorage.removeItem('token')
}

function Sidebar() {


  return (
    <>
      <div
        className="
          relative top-[-20px] left-0 w-full h-20 
          md:left-0 md:top-0 md:h-full md:w-25
          flex flex-col justify-around items-center
          bg-secondary z-50
        "
      >
        <div className="mt-4 hidden md:block">
          <img src={Logo} width="48px" height="48px" alt="" />
        </div>
        <div className="flex sm:flex-row md:flex-col md:items-center md:justify-center gap-6 mt-8 flex-1">
          <NavLink to="/" className={({ isActive }) =>
            `flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${isActive ? 'bg-blue-400 ' : ''}`
          }>
            <img src={ChatDot} width="24px" height="24px" alt="" />
          </NavLink>
          <NavLink to="/groups" className={({ isActive }) =>
            `flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${isActive ? 'bg-blue-400' : ''}`
          }>
            <img src={User} width="24px" height="24px" alt="" />
          </NavLink>
          <NavLink to="/calls" className={({ isActive }) =>
            `flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${isActive ? 'bg-blue-400' : ''}`
          }>
            <img src={Phone} width="24px" height="24px" alt="" />
          </NavLink>
          <div className="w-8 border-t border-gray-300 my-4 md:block hidden" />
          <NavLink to="/settings" className={({ isActive }) =>
            `flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${isActive ? 'bg-blue-400' : ''}`
          }>
            <img src={Setting} width="24px" height="24px" alt="" />
          </NavLink>
          <Link to="/profile" className="block md:hidden pt-2">
            <img src={Profile} width="32px" height="32px" alt="" className="rounded-full" />
          </Link>

        </div>
        <div className="my-3 hidden md:flex md:flex-col md:items-center md:my-8 ">
          <Link to="/profile">
            <img src={Profile} width="40px" height="40px" alt="" className="rounded-full " />
          </Link>
          <button onClick={() => logOut()} className="rounded-2xl bg-blue-400 py-1 px-2 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 flex items-center" type="button">
            Log out <IoIosLogOut />
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
