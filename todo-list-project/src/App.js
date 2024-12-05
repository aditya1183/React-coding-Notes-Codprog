import { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
function App() {
  const [todos , settodos]=useState([
    {id:1 , title:"Learn DSA"  , completed:false },
    {  id:2 , title:"Learn React", completed:true  },
    {  id:3 , title:"Learn C++", completed:false  },


  ])
const  addtodo=(newtodo)=>{
    settodos(prestate =>[...prestate , newtodo])
  }


  const togglecpmpleted=(id)=>{
   const newtodo=[];
   for(let todo of todos){
    if(todo.id==id){
      newtodo.push({...todo , completed : !todo.completed})

    }
    else{
      newtodo.push({todo})
    }
   }
   settodos(newtodo)

  }


const removetodo=(id)=>{
  settodos((prestate)=>{
    return prestate.filter((todo)=>{
      return todo.id!==id;
    })
  })
}
  
  return (

    
    <div className="conatiner">
      <h1 className="main-title">Todo List</h1>
      <TodoForm addtodo={addtodo}/>
      <Todos todos={todos} toggle={togglecpmpleted}  removetodo={removetodo} />
      


  
    </div>
  );
}

export default App;
