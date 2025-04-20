import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container mt-5 text-center">
      <h2>Welcome to your profile, {user?.username || user?.name}</h2>
      <p>Email: {user?.email || "N/A"}</p>

      <button onClick={logout} className="btn btn-danger mt-4">
        Logout
      </button>
    </div>
  );
};

export default Profile;
