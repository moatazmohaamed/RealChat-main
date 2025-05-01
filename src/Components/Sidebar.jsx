import { Link, NavLink } from "react-router-dom"
import ChatDot from "../img/chat-dots.svg"
import User from "../img/people.svg"
import Phone from "../img/telephone.svg"
import Setting from "../img/gear.svg"
import Profile from "../img/Ellipse 1.png"
import Logo from "../img/Group 69.png"
function Sidebar() {
  return (
    <>
      <div className="side-bar bg-primary col-1 d-flex flex-column align-items-center justify-content-between py-4">
        <div className="my-3">
          <img src={Logo} width="64px" height="64px" alt="" srcset="" />
        </div>
        <nav className="d-flex flex-column gap-5">
          <div className="d-flex flex-column align-items-center justify-content-between gap-5 pb-4 my-3">
            <NavLink to="/">
              <img src={ChatDot} width="24px" height="24px" alt="" srcset="" />
            </NavLink>
            <NavLink to="/groups">
              <img src={User} width="24px" height="24px" alt="" srcset="" />
            </NavLink>
            <NavLink to="/calls">
              <img src={Phone} width="24px" height="24px" alt="" srcset="" />
            </NavLink>
            <NavLink to="/settings">
              <img src={Setting} width="24px" height="24px" alt="" srcset="" />
            </NavLink>
          </div>
        </nav>
        <div className="d-flex flex-column align-items-center justify-content-between gap-5">
          <Link to="/profile">
            <img src={Profile} width="48px" height="48px" alt="" srcset="" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar
