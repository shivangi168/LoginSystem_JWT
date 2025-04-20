import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const Login = () => {
  return (
    <Card className="p-4 shadow-sm">
      <h2 className="mb-4">Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Card>
  );
};

export default Login;
