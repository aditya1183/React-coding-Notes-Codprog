import React from 'react'
import { Link } from 'react-router-dom'

function Post({id , title}) {
  return (
    <div style={{
        border:"2px solid black",
        margin:"1rem",
        padding:"1rem",
        textAlign:"center"
    }}>
       <Link to={id.toString()}>
       <h2>{id}</h2>
       
       </Link>
        <h3>{title}</h3>
       
    </div>
  )
}

export default Post