import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

function Login() {
  const { login, user } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/profile"); 
    }
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if ( !username || !password) {
      alert("Please fill in all fields.");
      return;
    }
    const success = login(username, password);
    if (success) navigate("/profile");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg d-flex flex-row"
        style={{ borderRadius: "20px", maxWidth: "1000px", width: "100%" }}
      >
        <div className="p-5 w-100" style={{ flex: 1 }}>
          <h2 className="mb-3 text-center">Welcome</h2>
          <p className="text-center text-muted mb-4">
            Blandit libero volutpat sed cras ornare arcu dui. Accumsan in nisl nisi scelerisque eu.
          </p>

          <div className="d-flex flex-column align-items-center">
            <input
              type="text"
              className="form-control mb-3 w-75"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3 w-75"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-primary w-75 mb-3"
              onClick={handleLogin}
              style={{ fontWeight: "500" }}
            >
              Login
            </button>

            <p className="text-center mt-3 mb-2">Or sign up with</p>

            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-outline-secondary rounded-circle p-2">
                <FaGoogle size={20} />
              </button>
              <button className="btn btn-outline-secondary rounded-circle p-2">
                <FaFacebook size={20} />
              </button>
              <button className="btn btn-outline-secondary rounded-circle p-2">
                <FaApple size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Quote */}
        <div
          className="d-none d-md-flex align-items-center justify-content-center bg-primary text-white"
          style={{ flex: 1, borderRadius: "0 20px 20px 0", padding: "40px" }}
        >
          <div className="text-center px-3">
            <h1 className="mb-3">Make a Dream.</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna."
            </p>
            <p className="mt-3">- Waleed Lozano, Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
