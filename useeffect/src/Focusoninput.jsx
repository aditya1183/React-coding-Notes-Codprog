import React from 'react'
import userEvent from '@testing-library/user-event'
import { useEffect , useRef } from 'react'

function Focusoninput() {


    const aditya=useRef();
    useEffect(()=>{
        aditya.current.focus();

    } , [])

  return (
    <form>

        <input placeholder='enter the name : ' ref={aditya} />
        <input placeholder='enter the name : ' ref={aditya} />
        <input placeholder='enter the name : ' ref={aditya} />
    </form>
    )
}

export default Focusoninput