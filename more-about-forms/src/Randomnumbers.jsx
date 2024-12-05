
import React, { useState } from 'react'

function Randomnumbers() {


    const aditya=()=>{
        const arr=[];
        for(let i=0 ; i<20 ; i++){
            arr.push(Math.floor(Math.random()*100));

        }
        return arr;


    }
    const [number , setnumber]=useState(aditya);

  return (
   <>
   <ul>

    {number.map((num)=>{
        return <li>{num}</li>
    })}
    </ul>

    <button onClick={()=>{
        setnumber((prachi)=> [...prachi , Math.random()*10000]);
    }}> Add random Number </button>
    
    </>
  )
}

export default Randomnumbers