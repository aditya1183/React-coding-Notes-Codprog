
import './App.css'
import {useState} from "react"
import Usestatearrayexample from './Components/Usestatearrayexample'
import Stateexampleobject from './Components/Stateexampleobject'

function App() {
  const [firstname , setname]= useState("Aditya")
  function chnagename(){
    if(firstname=="Aditya"){
      setname("Prachi")
  }
    else{
      setname("Aditya");
    }
  }
  return (
    <div className="App">
      <h1>{firstname}</h1>
      <button onClick={chnagename}>Click Me</button>
      <Usestatearrayexample/>
      <Stateexampleobject/>
    </div>
  );
}

export default App;
