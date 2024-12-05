import React, { useState } from 'react'

function Userform() {
    const [firstname , setfirstname]=useState();
    const [lastname , setlastname]=useState();
  return (
<form>
    <h1>form</h1>
    <div>
        <label htmlFor='firstname'>Firstname</label>
        <input type="text"
        name='firstname'
        id='firstname'
        value={firstname}
        onChange={(e)=>{
            setfirstname(e.target.value)
        }}
        />
    </div>
    <br/>
    <div>
        <label htmlFor='lastname'>lastname</label>
        <input type="text"
        name='lastname'
        id='lastname'
        value={lastname}
        onChange={(e)=>{
            setlastname(e.target.value)
        }}
        />
    </div>
    <h2>User info </h2>
    <div>
        <p>Firstname  : {firstname}</p>
        <br/>
        <p>Lastname  : {lastname}</p>
        <br/>
        <h2>FillName : {firstname} {lastname}</h2>
    </div>
</form>  

)
}

export default Userform