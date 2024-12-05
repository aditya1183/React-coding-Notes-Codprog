import React from 'react'
import { useEffect , useState } from 'react'
const Prachi="https://jsonplaceholder.typicode.com/comments";

function Aditya() {
    const [commentdata , setdata]=useState([])
    useEffect(()=>{
        fetch(Prachi)
        .then((responce)=>{
            return responce.json();
        })
        .then((data)=>{
            setdata(data)

        })
    } , [])

  return (
  <div style={{
   
    width:"60%",
    margin:"auto",
   

  }}>
   {
    commentdata.map(data=>{
        return <li key={data.id} style={{border:"2px solid black" , margin:"1rem", padding:"3rem" , listStyle:"none"}}>{data.email}</li>
        
    })
   }
   </div>
  )
}

export default Aditya