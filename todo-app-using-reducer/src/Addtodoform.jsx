import React from 'react'
import { useState } from 'react'

function Addtodoform({dispatch}) {

    const [title , settitle]=useState("")
    function handlesubmit(e){
        e.preventDefault();
        const newtodo={
           title:title,
           complted:true,
           id:crypto.randomUUID()
        }
        dispatch({type:"ADD-TODO" , payload:{newtodo :newtodo}} );
        settitle("");
        


    }
  return (
   <form onSubmit={handlesubmit}  style={{
    marginTop:"1rem",
    textAlign:"center",
    width:"80%",
    
   }}>
   <input type='text' name="title" id="title" value={title} onChange={(e)=>{settitle(e.target.value)}} style={{height:"30px" ,width:"60%" , }} placeholder='Enter the Todo : ' />
   <button  style={{
    width:"100px",
    padding:"0.5rem 1rem",
    outline:"none",
    border:"none",


   }} type='submit'>Add Todo</button>
    
   </form>
  )
}

export default Addtodoform