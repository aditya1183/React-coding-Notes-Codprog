import { useState } from 'react'
import Handlemultipleinputs from './Handlemultipleinputs';
import ExmapleuseaRef from './ExmapleuseaRef';
import radiobutton2 from './radiobutton2';



function App() {
  // const [gender , setgender]=useState("Female");

  const[gender , setgender]=useState("");



  return (
   <>
 
   {/* <br></br>
   <label htmlFor='male'>Male</label>
   <input type='radio' name='aditya' checked={gender=="Male"} 
   onChange={()=>{
    setgender("Male")

   }}/>
   <br></br>
   <label htmlFor='female'>female</label>
   <input type='radio'  checked={gender=="Female"}
   onChange={()=>{
    setgender("Female")
   }}
   /> */}
   {/* <Handlemultipleinputs/> */}
   {/* <ExmapleuseaRef/> */}
   <radiobutton2/>
   <label htmlFor="Male"> Male</label>
   <input type="radio"  
    checked={gender=='Male'}
    onChange={()=>{setgender("Male")}}
    
    
    />
    <br/>
    <label htmlFor="Female"> Female</label>
   <input type="radio"  
    checked={gender=='Female'}
    onChange={()=>{setgender("Female")}}
    
    
    />
    <br/>
    <label htmlFor="Other"> Other</label>
   <input type="radio"  
    checked={gender=='Other'}
    onChange={()=>{setgender("Other")}}
    
    
    />
    <Handlemultipleinputs/>

   
   </>
      
  )
}
export default App
