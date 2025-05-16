import { Link, NavLink } from "react-router-dom"
import Pink from "../img/Ellipse 1131.png"
import DogHat from "../img/Ellipse 1133.png"
import axios from "axios";
import { useBaseUrl } from "../context/BaseUrlContext";
import { useState } from "react";


function Groups({ onGroupSelect }) {
  const baseUrl = useBaseUrl();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [groups, setGroups] = useState([
    { name: "Animal Kingdom", avatar: Pink, lastMsg: "You: thnx!", time: "09:36" },
    { name: "Dog Hat", avatar: DogHat, lastMsg: "It's so quite outside 🧐", time: "09:36" },
  ]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    groupAvatar: "",
    participants: [],
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreateGroup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${baseUrl}/api/groups/create`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setSuccess("Group created successfully!");
      setGroups([
        { name: form.name, avatar: form.groupAvatar, lastMsg: "", time: "Now" },
        ...groups,
      ]);
      setShowModal(false);
      setForm({ name: "", description: "", groupAvatar: "", participants: [] });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create group");
    }
    setLoading(false);
  };



  return (
    <>
      <div className="bg-secondary px-4 pt-4 h-full">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Groups</h1>
        </div>
        <div className="searchChats d-flex justify-content-center align-items-center pt-2 pb-2">
          <input type="text" className="form-control bg-info bg-light border-0 rounded-4 py-2 px-5 fs-4 mx-1" placeholder="Search" />
        </div>
        <div className="overflow-section d-flex flex-column py-2 px-2">
          <button className="d-flex justify-content-between align-items-center gap-3 pt-1  text-decoration-none btn btn-outline-primary rounded-4 px-4 py-2 mb-3 fw-semibold" onClick={() => setShowModal(true)}>
            <span>Create New Group</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#709CE6" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2" /></svg>
          </button>
          {/* Modal for group creation */}
          {showModal && (
            <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.4)" }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content rounded-4 shadow-lg">
                  <div className="modal-header border-0">
                    <h5 className="modal-title">Create Group</h5>
                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                  </div>
                  <form onSubmit={handleCreateGroup} className="modal-body d-flex flex-column gap-3">
                    <input name="name" value={form.name} onChange={handleInput} className="form-control rounded-3" placeholder="Group Name" required />
                    <input name="groupAvatar" value={form.groupAvatar} onChange={handleInput} className="form-control rounded-3" placeholder="Avatar URL (optional)" />
                    <textarea name="description" value={form.description} onChange={handleInput} className="form-control rounded-3" placeholder="Description" rows={2} />
                    {error && <div className="alert alert-danger p-2">{error}</div>}
                    {success && <div className="alert alert-success p-2">{success}</div>}
                    <button type="submit" className="btn btn-primary rounded-3 fw-bold" disabled={loading}>{loading ? "Creating..." : "Create Group"}</button>
                  </form>
                </div>
              </div>
            </div>
          )}
          {/* List groups dynamically */}
          <div className="py-3">
            <h5>All Groups</h5>
            <div className="d-flex flex-column gap-2 mt-3">
              {groups.map((group, idx) => (
                <div
                  className="text-decoration-none"
                  key={group.name + idx}
                  onClick={() => onGroupSelect(group)}
                  style={{ cursor: "pointer" }}
                >
                  <div className='d-flex flex-row align-items-center justify-content-between bg-light rounded-4 py-3 px-3 shadow-sm group-hover'>
                    <div className='d-flex flex-column'>
                      <div className='d-flex justify-content-between align-items-center gap-3'>
                        <div>
                          <img src={group.avatar} alt="" style={{ width: 48, height: 48, borderRadius: 16, objectFit: "cover", border: "2px solid #709CE6" }} />
                        </div>
                        <div className="">
                          <h6 className="text-muted mb-1 fw-bold">{group.name}</h6>
                          <p className="text-muted mb-0"> {group.lastMsg}</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <h6 className='text-muted fw-semibolder'>{group.time}</h6>
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

export default Groups
