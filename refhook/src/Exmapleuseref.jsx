import React from 'react'
import { useRef } from 'react'

function Exmapleuseref() {
    const h1ref=useRef();
    const handleclick=()=>{
        const h1eelemnt=h1ref.current;
       h1eelemnt.style.color='black'
       h1eelemnt.style.backgroundColor='white';
       if(h1eelemnt.textContent=='Aditya'){
        h1eelemnt.textContent='Prachi';
       }
       else{
        h1eelemnt.textContent='Aditya';

       }

    }
  return (
    <>
   <h1 ref={h1ref}>Aditya</h1>
    <button onClick={handleclick}>Change Name</button>
   
    
    </>
  )
}

export default Exmapleuseref