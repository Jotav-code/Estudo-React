import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  function handeleClick() {
    console.log('login realizado');
    navigate('/sobre');
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handeleClick}>Login</button>
    </div>
  );
};

export default Login;
