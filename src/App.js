import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthToggle from "./components/Auth/AuthToggle";

import Profile from "./components/Profile/Profile";
import { AuthProvider } from "./components/Auth/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthToggle />} />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
