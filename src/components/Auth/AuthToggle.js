import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import { Button } from 'react-bootstrap';

const AuthToggle = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      {isLogin ? <Login /> : <Signup />}
      <Button
        variant="link"
        className="mt-3"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
      </Button>
    </div>
  );
};

export default AuthToggle;
