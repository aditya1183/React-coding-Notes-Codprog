import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createContext } from 'react'
export const Mycontext=createContext();


ReactDOM.createRoot(document.getElementById('root')).render(
  const [data , setdata]=useState({username:"Aditya Vashistha" , gmail1:"adityasharma44159@gmail.com" , chitkarGmail:"aditya1183.be22@chitkara.edu.in"})
 
 
    
   
    <Mycontext.Provider value={data:data , setdata:setdata}>
      <App/>
    </Mycontext.Provider>
 
)

export function usedata(){
  return useContext(Mycontext);
}
