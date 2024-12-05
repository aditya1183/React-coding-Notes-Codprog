import React, { useState } from 'react'

import {v4 as uuid } from "uuid" 

function Usestatearrayexample() {
    const [names , setname]=useState(["Aditya" , "Prachi"]);


    function addname(){
        return setname([...names , "aditya prachi"]);

    }
  return (
    <>
    <br></br>
    {names.map((name)=>{
        return <h1 key={uuid()}>{name}</h1>
    })}
    <button onClick={addname}>Add Name</button>
    </>
  )
}

export default Usestatearrayexample