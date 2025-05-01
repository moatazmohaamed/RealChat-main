import { Link } from "react-router-dom"
import Avatar from "../img/Avatar.png"
function Profile() {
  return (
    <>
      <div className="col-3 bg-secondary px-4 pt-4">
        <div className="d-flex justify-content-start align-items-center gap-4">
          <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" className="d-inline" width="40" height="40" viewBox="0 0 12 24"><path fill="#4B4B4B" fill-rule="evenodd" d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z" /></svg></Link>
          <h1>Profile</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center py-5">
          <img src={Avatar} width="121px" height="121px" className="round-cirle" alt="" srcset="" />
        </div>
        <form>
          <div className="mb-3">
            <label for="nameInput" className="form-label">Name</label>
            <input type="text" className="form-control" id="nameInput" placeholder="" />
              <div className="form-text">This name is visible to your contacts</div>
          </div>

          <div className="mb-5">
            <label for="aboutInput" className="form-label">About</label>
            <textarea className="form-control" id="aboutInput" rows="3" placeholder=""></textarea>
          </div>

          <div className="d-flex justify-content-end align-items-center">
            <button type="submit" className="btn btn-primary bg-transparent text-primary px-5">Save</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Profile
