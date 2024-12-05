import React from 'react'
import { MouseEvent } from 'react'
import { useEffect , useState } from 'react'



// jo bhi evne listener add hoga sara ka sara useeefct mai add hoga  k

function Mousemoveevent(){
    const [mouseposition , setmouseposition ]=useState({X:0 , Y:0});


const prachi=(aditya)=>{
        console.log({X:aditya.clientX , Y:aditya.clientY});
            setmouseposition({X:aditya.clientX , Y:aditya.clientY})
        
    }
    useEffect(()=>{
        document.addEventListener("mousemove" , prachi);
        return ()=>{
            document.removeEventListener("mousemove" , prachi)
        }

    } , [])
  return (
    <>
    <div>Mousemoveevent</div>
    <h3> X : {mouseposition.X}      Y:{mouseposition.Y}</h3>
    </>
  )
}

export default Mousemoveevent