import React, { useContext, useState } from "react";
import { Form, Card } from "react-bootstrap";
import { AuthContext } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    const success = signup(name, email, password);
    if (success) navigate("/profile");
  };

  return (
    <Card className="p-4 shadow-sm">
      <h2 className="mb-4">Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="signupName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <button className="btn btn-primary w-100 mb-3" type="submit">
          Sign Up
        </button>
      </Form>
    </Card>
  );
};

export default Signup;
