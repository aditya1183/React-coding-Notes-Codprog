import React, { useEffect, useState } from 'react'

function BasicsForm() {
    const [firstName , setfirstName]=useState(()=>{
        return JSON.parse(localStorage.getItem("FirstName")) || ""
    })
    useEffect(()=>{
        localStorage.setItem("FirstName" , JSON.stringify(firstName))
    } , [firstName])
  return (
    <form>
        <label htmlFor='firstName'>First Name :  </label>
        <input type='text' name='firstName ' id='firstName' 
        value={firstName} onChange={(e)=>{
            setfirstName(e.target.value)
        }}
        
        
        / >
            <h3>First Name :  {firstName}</h3>
    </form>
  )
}

export default BasicsForm