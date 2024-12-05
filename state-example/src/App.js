import {useState} from "react"
import './App.css';
import Aditya from "./Aditya";
import { prettyDOM } from "@testing-library/react";


function App() {
  const [users , setuser]  =useState([
    {id:1 , firstname:"Aditya" , lastname:"vashistha" , age:18},
    {id:2 , firstname:"garima" , lastname:"vashistha" , age:18},
    {id:3 , firstname:"Nitish" , lastname:"vashistha" , age:18},
    {id:4 , firstname:"Prachi" , lastname:"vashistha" , age:18},
    {id:5 , firstname:"Vikuu" , lastname:"vashistha" , age:18},
    {id:6 , firstname:"Mohit" , lastname:"vashistha" , age:18},


  ])
  // function increaseage(id){
  //   setuser(prevstate =>{
  //     return prevstate.map(user => {
  //       if(user.id==id){
  //         return {...user , age:user.age+1}
  //       }
  //       else{
  //          return user;
  //       }
  //     })
  //   })
  // }
function increaseage(id){
  setuser(prestate =>{
    return prestate.map(user =>{
      if(user.id==id){
        return {...user , age:user.age+1};
      }
      else{
        return user;
      }
    })
  })
}

  function deleteuser(id){
    setuser(prestate =>{
      return prestate.filter(user=>{
        return user.id!=id;
      })
    })
  }




  function adityaprachi(id){
    setuser(nitish =>{
      return nitish.filter(user =>{
        return user.id!=id
      })
    })
  }
  return (
    <div className="App">
      <h1>Aditya Vashistha</h1>
    <Aditya aditya={users} increaseage={increaseage} deleteuser={adityaprachi}/>
    </div>
  );
}

export default App;
