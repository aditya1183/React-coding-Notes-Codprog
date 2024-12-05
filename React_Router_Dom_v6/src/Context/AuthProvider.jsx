import React from 'react'
import { useState , useContext , createContext } from 'react'
const AuthContext=createContext();

function AuthProvider({children}) {
    const [islogin , setinlogin]=useState(false);
  return (
  <AuthContext.Provider value={{
    islogin , setinlogin
  }}>
    {children}
  </AuthContext.Provider>
  )
}
 export function useAuth(){
    return useContext(AuthContext);
}

export default AuthProvider