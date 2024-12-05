import React from 'react'
import { useRef , useState } from 'react'

function ExmapleuseaRef() {
    const firstname=useRef()
function handleclick(){
    // const name=firstname.current;
   if(firstname.current.textContent=='Aditya'){
    firstname.current.textContent="Prachi";
    firstname.current.style.color="white";
    firstname.current.style.backgroundColor="black"
    
   }
   else{
  firstname.current.textContent="Aditya";
  firstname.current.style.color="white";
    firstname.current.style.backgroundColor="black"
  


   }
}
    

  return (
    <div  className='aditya'>
        <h1 ref ={firstname}>Aditya</h1>
        <button onClick={handleclick}>Change Name</button>
    
    </div>
    )
}

export default ExmapleuseaRef