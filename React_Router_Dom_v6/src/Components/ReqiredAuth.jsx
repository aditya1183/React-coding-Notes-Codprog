import React from 'react'
import { Navigate } from 'react-router-dom';
import Login from './Login';
import { useAuth } from '../Context/AuthProvider';

function ReqiredAuth({children}) {
   const {islogin , setinlogin}= useAuth();
   
    if(islogin){
        return children
    }
  return <Navigate to="/login"/>
}

export default ReqiredAuth