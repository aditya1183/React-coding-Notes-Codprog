import logo from './logo.svg';

import User from './Components/User';
import { useState } from 'react';
import Counter from './Components/Counter';
import StateExamppleAray from './Components/StateExamppleAray';
import StateExampleobject from './Components/StateExampleobject';




// const users=[
//   {id:1 , firstname:"Aditya" , lastname:"vashistha"},
//   {id:2 , firstname:"harshit" , lastname:"vashistha"},
//   {id:3 , firstname:"garima" , lastname:"vashistha"},
  
// ]

function App() {
  const returnvalue=useState("Aditya");
  const firstname=returnvalue[0];
  const secondname=returnvalue[1];







  function handlenamechange(e){
    secondname("Prachi chahal")
    e.target.textContent="hoo gaya change name now we are happy"


  }
  
  return (
    <div className="App">
      {/* <h1>{firstname}</h1>
      <button onClick={handlenamechange}>Change Name</button> */}
      <Counter/>
      <StateExamppleAray/>
      <StateExampleobject/>
  
      
      
          </div>
  );
}

export default App;
