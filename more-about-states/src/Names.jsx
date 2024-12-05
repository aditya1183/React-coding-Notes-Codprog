import React, { useState } from 'react'
import Printnames from './Printnames'


function Names() {
    const [brothers , setname]=useState([
        {name:"Aditya" , id:1},
        {name:"Prachi" , id:2},
        {name:"harshit" , id:3},
        {name:"garima" , id:4},
        {name:"mohit" , id:5},
        {name:"nitish" , id:6},
        {name:"abhishek" , id:7},
        {name:"Mohit" , id:8},
        {name:"Kirti" , id:9},
        {name:"Aditya" , id:10},

        
    ])

    const [addinput , setaddinput]=useState();
 

    const handleaddname=()=>{
        console.log("Name add ho gaya hai ")
        const newbrothername={
            id: brothers.length+1,
            name:"Aditya",

        }
        setname(prev =>[...prev , newbrothername])
    }
  return (
  <>
  <h1>Names</h1>
  <ol >
  {
    brothers.map((brothername)=>{
        // <Printnames name={brothername.name}/>
        return <Printnames name={brothername.name} key={brothername.id}/>
    })
  }
  </ol>
  <input type='text' id="input" name="input" value={addinput} 
  onChange={(e)=>e.target.value}/>
 
  <button onClick={handleaddname}>Add New Name</button>

  </>
  )
}

export default Names