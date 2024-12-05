import React from 'react'
import Showprofile from './Showprofile'
import { usedata } from './main'

function Userprofile() {
    const {username , gmail1 , chitkargmail}=usedata()
  return (
    <div>
    <div style={{
        border:"2px solid white",
      marginBottom:"3rem",
        padding:"2rem"
    }}>
    <h2>User Profile </h2>
    <h2>{username}</h2>
    <h2>Personal gmail : {gmail1}</h2>
    
    </div>
    <Showprofile/>

    </div>
  )
}

export default Userprofile