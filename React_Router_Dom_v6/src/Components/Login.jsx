import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import { useNavigate } from 'react-router-dom';

function Login() {
    const nagivate=useNavigate();
    const {islogin , setinlogin}=useAuth();
    function login(){
        setinlogin(true);
        nagivate("/");
    }
  return (
    <div>
        <h1>Login page</h1>
        <button onClick={login}>Log In</button>
    </div>
  )
}

export default Login