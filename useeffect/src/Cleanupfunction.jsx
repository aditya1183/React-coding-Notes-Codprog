import React from 'react'
import { useEffect , useState } from 'react'
function Cleanupfunction() {


    const [counter , setcounter]=useState(0)


    function handlereset(){
        setcounter(0);
    }
    function handleaditya(){
        setcounter(counter-1);

    }
  return (
    <>
    <h1>{counter}</h1>
    <div className='button'>
    <button onClick={()=>{
        setcounter(counter+1)
    }}>Increase</button>
    <button onClick={handlereset}>Reset</button>
    <button onClick={handleaditya}>Decrease</button>
    </div>
    </>
  )
}

export default Cleanupfunction