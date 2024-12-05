import React from 'react'
import { AuthContext } from './main'

import { useContext } from 'react'

function Userdetail() {

 const aditya = useContext(AuthContext)
  return (
    <div style={{
        border:"2px solid black",
        padding:"2rem",
        backgroundColor:"#efefefef",
        margin:"1rem",
        

    }}>Userdetail
        <h1>{aditya.username}</h1>
        <h5>{aditya.gmail}</h5>
    </div>
  )
}

export default Userdetail