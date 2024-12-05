import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createContext } from 'react'
export const AuthContext=createContext();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext.Provider value={{
      username:"adityavashistha632",
      gmail:"aditya1183.be22@chitkara.edu.in",
    }}>
    <App />
    </AuthContext.Provider>
  </React.StrictMode>,
)
