import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };

  return (
    <div className="container mt-5">
      <h2>Welcome, {user?.username || user?.name}</h2>
      <p>Email: {user?.email || "N/A"}</p>
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
