import React, { useState } from 'react'

function Formexample() {
    const [firstname , setfirstname]=useState();
    const [lastname , setlastname] =useState();
    const [fullname, setfullname]=useState();

  return (
   <form>
    <h1>form</h1>

    <div>
    <label htmlFor='firstname'>firstname : </label>
    <input  type='text'  id='firstname' name='firstname'    value={firstname}
    onChange={(e)=>{setfirstname(e.target.value)}}
    
    
    
    
    />
    </div>



    <div>
    <label htmlFor='lastname'>lastname : </label>
    <input  type='text'  id='lastname' name='lastname'  value={firstname} 
    onChange={(e)=>{setlastname(e.target.value)}}
    />
    </div>



    <h3>user information </h3>
    <p>Firstname : {firstname}</p>
    <p>lastname : {lastname}</p>
    <p>Fullname : {lastname + firstname}</p>

   </form>
  )
}

export default Formexample