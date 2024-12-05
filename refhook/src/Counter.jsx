import React, { useState } from 'react'

function Counter() {
    const [counter , setCount]=useState(0);


    const [Name , setname]=useState("Aditya")
    const handleincrease =()=>{
        setCount(counter+1);

    }


    const handledecrease =()=>{
        setCount(counter-1);

    }
    const handlereset =()=>{
        setCount(0);

    }

    const handlechange=()=>{
        if(Name=='Aditya'){
            setname("Prachi");
        }
        else{
            setname("Aditya")
        }
    }




  return (
    <>
    <div>Counter</div>
    <h1>{counter}</h1>
    
<div style={{
    padding:"1rem 2rem",
    margin:"5px",
}}>
<button onClick={handleincrease}>Increase</button>
    <button onClick={handlereset}>Reset</button>
    <button onClick={handledecrease}>Decrease</button>

</div>


<h1>{Name}</h1>
<button onClick={handlechange}>Change Name</button>


    </>
  )
}

export default Counter