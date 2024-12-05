import React, { useState } from 'react'
import Aditya from './Aditya';

function Stateexamplearray(aditya) {
    const {firstname , lastname , user , obje}=aditya; // props destructing 
    const [value , setvalue]=useState(0);
    function handleincrease(){
        setvalue(value+1)
    }

    function handledecrease(){
        setvalue(value-1);

    }
    function reset(){
        setvalue(0);
    }
  return (
    <>
    <h1>{firstname} {lastname} {user[0]} {obje.fathername} {obje.mothername}</h1>
    <h1>{value}</h1>
    <button onClick={handleincrease}>Increase</button>
    
    <button onClick={reset}>Reset</button>
    <button onClick={handledecrease}>Decrease</button> 

    <h1>aditya file </h1>
    <Aditya fname={obje.fathername}/>
    </>
  )
}

export default Stateexamplearray