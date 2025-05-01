import { Link, NavLink } from "react-router-dom"
import CircleDash from "../img/ph--circle-dashed.svg"
import ArchiveBox from "../img/material-symbols--archive-outline.svg"
import Pink from "../img/Ellipse 1131.png"
import DogHat from "../img/Ellipse 1133.png"
function Chats() {
  return (
    <>
      <div className="col-3 bg-secondary px-4 pt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Chats</h1>
          <Link>
            <img src={CircleDash} width="32px" height="32px" alt="" srcset="" />
          </Link>
        </div>
        <div className="searchChats d-flex justify-content-center align-items-center pt-2 pb-2">
          <input type="text" className="form-control bg-info bg-light border-0 rounded-4 py-2 px-5 fs-4 mx-1" placeholder="Search" />
        </div>
        <div className="overflow-section d-flex flex-column py-2 px-2">
          <Link className="d-flex justify-content-start align-items-center gap-3 pt-1 pb-3 border-bottom text-decoration-none">
            <img src={ArchiveBox} width="32px" height="32px" alt="" srcset="" />
            <h5 className="text-primary mb-0 fw-semibold">Archived</h5>
          </Link>
          <div className="py-3">
            <h5>Pinned</h5>
            <div className="d-flex flex-column gap-2 mt-3">
              <NavLink className="text-decoration-none">
                <div className='d-flex flex-row align-items-center justify-content-between bg-light rounded-4 py-3 px-3'>
                  <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between align-items-center gap-3'>
                      <div>
                        <img src={Pink} alt="" srcset="" />
                      </div>
                      <div className="">
                        <h6 className="text-muted">Pink Panda</h6>
                        <p className="text-muted mb-0"> You: thnx!</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <h6 className='text-muted fw-semibolder'>09:36</h6>
                    <p className='lh-1 text-light p-1 '></p>
                  </div>
                </div>
              </NavLink>
              <NavLink className="text-decoration-none">
                <div className='d-flex flex-row align-items-center justify-content-between bg-light rounded-4 py-3 px-3'>
                  <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between align-items-center gap-3'>
                      <div>
                        <img src={DogHat} alt="" srcset="" />
                      </div>
                      <div className="">
                        <h6 className="text-muted">Dog Hat</h6>
                        <p className="text-muted mb-0"> It’s so quite outside 🧐</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <h6 className='text-muted fw-semibolder'>09:36</h6>
                    <p className='lh-1 text-light p-1 '></p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="py-3">
            <h5>All Chats</h5>
            <div className="d-flex flex-column gap-2 mt-3">
              <NavLink className="text-decoration-none">
                <div className='d-flex flex-row align-items-center justify-content-between bg-light rounded-4 py-3 px-3'>
                  <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between align-items-center gap-3'>
                      <div>
                        <img src={Pink} alt="" srcset="" />
                      </div>
                      <div className="">
                        <h6 className="text-muted">Pink Panda</h6>
                        <p className="text-muted mb-0"> You: thnx!</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <h6 className='text-muted fw-semibolder'>09:36</h6>
                    <p className='lh-1 text-light p-1 '></p>
                  </div>
                </div>
              </NavLink>
              <NavLink className="text-decoration-none">
                <div className='d-flex flex-row align-items-center justify-content-between bg-light rounded-4 py-3 px-3'>
                  <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between align-items-center gap-3'>
                      <div>
                        <img src={DogHat} alt="" srcset="" />
                      </div>
                      <div className="">
                        <h6 className="text-muted">Dog Hat</h6>
                        <p className="text-muted mb-0"> It’s so quite outside 🧐</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <h6 className='text-muted fw-semibolder'>09:36</h6>
                    <p className='lh-1 text-light p-1 '></p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chats
