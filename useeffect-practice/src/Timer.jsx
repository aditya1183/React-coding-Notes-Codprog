import React from 'react'
import { useEffect , useState } from 'react'

function Timer() {
    const [time , settime]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            settime((time)=> time+1);

        } , 100)

    } )

  return (
<>
<div>Timer</div>
<h1>{time}</h1>

</>  )
}

export default Timer