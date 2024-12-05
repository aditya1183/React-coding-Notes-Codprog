import React from 'react'
import { useState } from 'react'

function StateExampleobject() {
    const [person , setperson]=useState({
        id:1,
        firstname:"Aditya",
        lastname:"Vashistha",
        gmail:"aditya1183.be22@chitkara.edu.in",
    })


    const increaseage=()=>{
       setperson({
        ...person , id:person.id+1
           })
    }

  return (
    <div>
        <p>id : {person.id}</p>
        <p>firstname : {person.firstname}</p>
        <p>lastname : {person.lastname}</p>
        
        <p>gmail  : {person.gmail}</p>
        <button onClick={increaseage}>Increase Age</button>
        
    </div>
  )
}

export default StateExampleobject