import { Link, NavLink } from "react-router-dom"
import CircleDash from "../img/ph--circle-dashed.svg"
import ArchiveBox from "../img/material-symbols--archive-outline.svg"
import Pink from "../img/Ellipse 1131.png"
import DogHat from "../img/Ellipse 1133.png"

function Chats({ onContactClick }) {
  const handleChatClick = (receiverId, name) => {
    localStorage.setItem("receiverId", receiverId);
    localStorage.setItem("receiverName", name);
    onContactClick({ id: receiverId, name });
  };

  const users = [
    { id: "1", name: "Sarah Johnson", avatar: Pink, lastMessage: "Hey, how are you?", time: "10:30" },
    { id: "2", name: "Mike Wilson", avatar: DogHat, lastMessage: "See you tomorrow!", time: "09:45" },
    { id: "3", name: "Emma Davis", avatar: Pink, lastMessage: "Thanks for the help!", time: "Yesterday" },
    { id: "4", name: "Alex Brown", avatar: DogHat, lastMessage: "Meeting at 3 PM", time: "Yesterday" },
    { id: "5", name: "Lisa Chen", avatar: Pink, lastMessage: "Did you see the news?", time: "Monday" },
    { id: "6", name: "Tom Anderson", avatar: DogHat, lastMessage: "Project update?", time: "Monday" }
  ];

  return (
    <>
      <div className="h-full w-full  bg-secondary px-4 pt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Chats</h1>
          <Link>
            <img src={CircleDash} width="32px" height="32px" alt="" srcset="" />
          </Link>
        </div>
        <div className="searchChats d-flex justify-content-center align-items-center pt-2 pb-2">
          <input type="text" className="form-control bg-info bg-light  rounded-4 py-2 px-5 fs-4 mx-1" placeholder="Search" />
        </div>
        <div className="overflow-section d-flex flex-column py-2 px-2">
          <Link className="d-flex justify-content-start align-items-center gap-3 pt-1 pb-3 border-bottom text-decoration-none">
            <img src={ArchiveBox} width="32px" height="32px" alt="" srcset="" />
            <h5 className="text-primary mb-0 fw-semibold">Archived</h5>
          </Link>
          <div className="py-3">
            <h5>Pinned</h5>
            <div className="d-flex flex-column gap-2 mt-3">
              <div className="text-decoration-none" onClick={() => handleChatClick("68268645ebcbd548cb940176", "Pink Panda")}>
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
              </div>
              <div className="text-decoration-none" onClick={() => handleChatClick("68268645ebcbd548cb940177", "Dog Hat")}>
                <div className='d-flex flex-row align-items-center justify-content-between bg-light rounded-4 py-3 px-3'>
                  <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between align-items-center gap-3'>
                      <div>
                        <img src={DogHat} alt="" srcset="" />
                      </div>
                      <div className="">
                        <h6 className="text-muted">Dog Hat</h6>
                        <p className="text-muted mb-0"> It's so quite outside 🧐</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <h6 className='text-muted fw-semibolder'>09:36</h6>
                    <p className='lh-1 text-light p-1 '></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3">
            <h5>All Chats</h5>
            <div className="d-flex flex-column gap-2 mt-3">
              {users.map((user) => (
                <div key={user.id} className="text-decoration-none" onClick={() => handleChatClick(user.id, user.name)}>
                  <div className='d-flex flex-row align-items-center justify-content-between bg-light rounded-4 py-3 px-3'>
                    <div className='d-flex flex-column'>
                      <div className='d-flex justify-content-between align-items-center gap-3'>
                        <div>
                          <img src={user.avatar} alt={user.name} srcset="" />
                        </div>
                        <div className="">
                          <h6 className="text-muted">{user.name}</h6>
                          <p className="text-muted mb-0">{user.lastMessage}</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className='text-muted fw-semibolder'>{user.time}</h6>
                      <p className='lh-1 text-light p-1'></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chats
