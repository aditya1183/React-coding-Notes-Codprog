import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username , setusernmae]=useState("");
  function handlechange(aditya){
    console.log(aditya.target.value);
    setusernmae(aditya.target.value)

  }

  function handlesubmit(e){
    e.preventDefault();
    console.log("your from is submit")
  }
  return (
    <div className="App">
      <h1>Aditay Vashistha</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="aditya"> UserNmae : </label>
        <input type='text' id="aditya"  value={username} onChange={handlechange}/>
        <button type="submit">Submit</button>
      </form>
      <h1>username is : {username}</h1>
    </div>
  );
}

export default App;
