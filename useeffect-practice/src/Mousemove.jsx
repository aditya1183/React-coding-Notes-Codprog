import React, { useEffect, useState } from 'react'

function Mousemove() {
    const [mousemove , setmousemove]=useState({x:0 , y:0})


    const handlemousemove=(e)=>{
        console.log({x:e.clientX  , y : e.clientY} )
        setmousemove({x:e.clientX  , y : e.clientY} )
       

    }
    useEffect(()=>{
        document.addEventListener("mousemove" , handlemousemove);

        return ()=>{
            document.removeEventListener("mousemove" , handlemousemove);
        }
    } , [] )
        
  return (
    <div>
      <h2>X : {mousemove.x}</h2>
        
        
        </div>
  )
}

export default Mousemove