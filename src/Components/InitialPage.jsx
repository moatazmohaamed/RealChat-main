import { Link } from "react-router-dom"
import CallService from "../img/Call Service.svg"
function InitialPage() {
  return (
    <>
      <div className="col bg-white d-flex justify-content-center align-items-center">
        <div>
          <img src={CallService} width="287px" height="287px" alt="" srcset="" />
        </div>
      </div>
    </>
  )
}

export default InitialPage
