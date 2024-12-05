import React from 'react'
import {v4 as uuid} from 'uuid';

import { useState } from 'react'

function StateExamppleAray() {
    const [name , setname]=useState(["aditya" , "harshit" , "prachi", "garima"]);
    const Addfruit=()=>{
        setname([...name , "nitish"]);
    }
  return (
    <>
    <ul>
        {name.map((names)=>{
            return <li key={uuid()}>{names}</li>
        })}
    </ul>

    <button onClick={Addfruit}>Add Name</button>


    </>

    
  )
}

export default StateExamppleAray