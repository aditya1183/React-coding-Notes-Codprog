import React from 'react'

// import { Mycontext } from './main'
// import { useContext } from 'react'
import { usedata } from './main';

function Showprofile() {
    const userdata= usedata();
  return (
    <div style={{
        border:"2px solid white"
    }}>
    <h1>User data  : </h1>
    <h3> Name : {userdata.username}</h3>
    <h3>Personal gmail : {userdata.gmail1}</h3>
    <h3>University Gmail : {userdata.chitkarGmail}</h3>

    </div>
  )
}

export default Showprofile
