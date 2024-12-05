import React from 'react'
import Userdetail from './Userdetail'
import { useContext } from 'react'
import { AuthContext } from './main'

function Userprofile() {
    const prachi=useContext(AuthContext)
  return (
    <>
    <h1>User Profile  : </h1>
    <Userdetail/>


    <div style={{
        border:"2px solid black",
        padding:"2rem",
        backgroundColor:"#efefefef",
        margin:"1rem"
    }}>
        <h2>Username : {prachi.username}</h2>
        <h4>Gmail {prachi.gmail}</h4>
    </div>


    </>
  )
}

export default Userprofile