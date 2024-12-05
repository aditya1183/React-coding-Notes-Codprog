import React from 'react'
import useFetch from './useFetch'
import { useState } from 'react';

function Aditya() {
    const[Showdata  , setshowdata]=useState();
  

 
  const {data , ispending , iserror}=useFetch("https://jsonplaceholder.typicode.com/posts");
  const showdata=()=>{
    console.log({data})
     return setshowdata({data});
     

  }
  if(ispending){
    return <h1>Loading .......... </h1>
  }
  if(iserror){
    return <h2>Aditya Vashistha .........</h2>
  }
  return (
    <>
    {
        data && data.map(aditya=> 
        <div key={aditya.id} style={{
         border:"2px solid black",
         display:"flex",
         flexDirection:"column",
         textAlign:"center",
         background:"black",
         color:"white",
         fontFamily:"arial",
         borderRadius:"3rem",
         width:"90%",
         
         margin:"2rem"

        }}> 
        <h2>{aditya.id}</h2>
        <h1>{aditya.title}</h1>
        <p>{aditya.body}</p>
        <button style={{
         width:"10%",
         margin:"3rem",
         padding:"1rem 2rem",
         display:"flex",
         justifyContent:"end"


        }}>Aditya</button>

        </div>)
    }
    </>
  )
}

export default Aditya