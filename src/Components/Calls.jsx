import { Link, NavLink } from "react-router-dom"
import Pink from "../img/Ellipse 1131.png"
import DogHat from "../img/Ellipse 1133.png"
function Calls() {
  return (
    <>
      <div className="col-3 bg-secondary px-4 pt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Call Log</h1>
        </div>
        <div className="searchChats d-flex justify-content-center align-items-center pt-2 pb-2">
          <input type="text" className="form-control bg-info bg-light border-0 rounded-4 py-2 px-5 fs-4 mx-1" placeholder="Search" />
        </div>
        <div className="overflow-section d-flex flex-column py-2 px-2">
          <Link className="d-flex justify-content-between align-items-center gap-3 pt-1 pb-3 border-bottom text-decoration-none">
            <h5 className="text-primary mb-0 fw-semibold">Start new converstaion</h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#5B96F7" d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5" stroke-width="1" stroke="#5B96F7" /></svg>
          </Link>
          <div className="py-3">
            <div className="d-flex flex-column gap-2 mt-3">
              <NavLink className="text-decoration-none">
                <div className='d-flex flex-row align-items-center justify-content-between bg-light rounded-4 py-3 px-3'>
                  <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between align-items-center gap-3'>
                      <div>
                        <img src={Pink} alt="" srcset="" />
                      </div>
                      <div className="">
                        <h6 className="text-muted">Animal Kingdom</h6>
                        <p className="text-muted mb-0"><svg xmlns="http://www.w3.org/2000/svg" className="d-inline" width="20" height="20" viewBox="0 0 24 24"><path fill="#D45E6C" stroke="#D45E6C" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6m0 0H9m9 0v9"/></svg> Yesterday, 21:29</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#76D45E" d="m17.707 13.707l2.648 2.648a.91.91 0 0 1 0 1.29a5.47 5.47 0 0 1-7.151.508l-1.575-1.182a23 23 0 0 1-4.6-4.6l-1.182-1.575a5.47 5.47 0 0 1 .508-7.151a.91.91 0 0 1 1.29 0l2.648 2.648a1 1 0 0 1 0 1.414L9.272 8.728a.53.53 0 0 0-.1.616a12.26 12.26 0 0 0 5.484 5.484a.53.53 0 0 0 .616-.1l1.02-1.02a1 1 0 0 1 1.415 0Z" stroke-width="1" /></svg>
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
                        <p className="text-muted mb-0"><svg xmlns="http://www.w3.org/2000/svg" className="d-inline" width="20" height="20" viewBox="0 0 24 24"><path fill="#76D45E" stroke="#76D45E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6m0 0H9m9 0v9"/></svg> Yesterday, 16:53</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#76D45E" d="m17.707 13.707l2.648 2.648a.91.91 0 0 1 0 1.29a5.47 5.47 0 0 1-7.151.508l-1.575-1.182a23 23 0 0 1-4.6-4.6l-1.182-1.575a5.47 5.47 0 0 1 .508-7.151a.91.91 0 0 1 1.29 0l2.648 2.648a1 1 0 0 1 0 1.414L9.272 8.728a.53.53 0 0 0-.1.616a12.26 12.26 0 0 0 5.484 5.484a.53.53 0 0 0 .616-.1l1.02-1.02a1 1 0 0 1 1.415 0Z" stroke-width="1" /></svg>
                  </div>
                </div>
              </NavLink>
              <NavLink className="text-decoration-none">
                <div className='d-flex flex-row align-items-center justify-content-between bg-light rounded-4 py-3 px-3'>
                  <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between align-items-center gap-3'>
                      <div>
                        <img src={Pink} alt="" srcset="" />
                      </div>
                      <div className="">
                        <h6 className="text-muted">Animal Kingdom</h6>
                        <p className="text-muted mb-0"><svg xmlns="http://www.w3.org/2000/svg" className="d-inline" width="20" height="20" viewBox="0 0 24 24"><path fill="#D45E6C" stroke="#D45E6C" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6m0 0H9m9 0v9"/></svg> Yesterday, 21:29</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#76D45E" d="m17.707 13.707l2.648 2.648a.91.91 0 0 1 0 1.29a5.47 5.47 0 0 1-7.151.508l-1.575-1.182a23 23 0 0 1-4.6-4.6l-1.182-1.575a5.47 5.47 0 0 1 .508-7.151a.91.91 0 0 1 1.29 0l2.648 2.648a1 1 0 0 1 0 1.414L9.272 8.728a.53.53 0 0 0-.1.616a12.26 12.26 0 0 0 5.484 5.484a.53.53 0 0 0 .616-.1l1.02-1.02a1 1 0 0 1 1.415 0Z" stroke-width="1" /></svg>
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
                        <p className="text-muted mb-0"><svg xmlns="http://www.w3.org/2000/svg" className="d-inline" width="20" height="20" viewBox="0 0 24 24"><path fill="#76D45E" stroke="#76D45E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6m0 0H9m9 0v9"/></svg> Yesterday, 16:53</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#76D45E" d="m17.707 13.707l2.648 2.648a.91.91 0 0 1 0 1.29a5.47 5.47 0 0 1-7.151.508l-1.575-1.182a23 23 0 0 1-4.6-4.6l-1.182-1.575a5.47 5.47 0 0 1 .508-7.151a.91.91 0 0 1 1.29 0l2.648 2.648a1 1 0 0 1 0 1.414L9.272 8.728a.53.53 0 0 0-.1.616a12.26 12.26 0 0 0 5.484 5.484a.53.53 0 0 0 .616-.1l1.02-1.02a1 1 0 0 1 1.415 0Z" stroke-width="1" /></svg>
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

export default Calls
