import { useState } from 'react'


function Counter() {

    const [counter , setcounter]=useState(0);

    
    const handleincrease=()=>{
        setcounter(counter+1)
        console.log("increase");
    }
    const handledecrease=()=>{
        setcounter(counter-1)
        console.log("decrease");
    }

    const reset=()=>{
        setcounter(0)
        console.log("reset");
    }
    return (
    
    
    <div>

    <h1>{counter}</h1>
  
 
    <button onClick={handleincrease}>Increase</button>
    <button onClick={handledecrease}>Decrease</button>
    <button onClick={reset}>Reset</button>
    
    </div>
    )

  
}

export default Counter