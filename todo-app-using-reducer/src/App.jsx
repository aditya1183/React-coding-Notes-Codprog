import { useReducer } from 'react'
import './App.css'
import Addtodoform from './Addtodoform';
import Todos from './Todos';


function reducer (todos , action){
  if(action.type==="DELETE_TODO"){
    // const newstate=[];
    // for(let todo of todos){
    //   if(todo.id !=action.payload.id){
    //     newstate.push(todo)
    //   }
    // }
    // return newstate;
    return todos.filter((todo)=> todo.id!==action.payload.id);
  }


  if(action.type==="ADD-TODO"){
    return [...todos , action.payload.newtodo]

  }

  if(action.type==="TOGGLE_COMPLETED"){
      return todos.map((todo)=>{
        if(todo.id===action.payload.id){
          return {...todo, Completed:!todo.Completed}
        }
        else{
          return todo;
        }
      });

  }

  alert("something went wrong ")
  return todos;


}


const intialtodos=[
  {id:"1" , title:"teach Students" , Completed:true},
  {id:"2" , title:"teach Students" , Completed:true},
  {id:"3" , title:"Prachi Vashistha" , Completed:false},
  {id:"4" , title:"teach Students" , Completed:true},
  {id:"5" , title:"teach Students" , Completed:true},
  {id:"6" , title:"teach Students" , Completed:false},
  {id:"7" , title:"teach Students" , Completed:true},
]
function App() {

  const [todos , dispatch] =useReducer(reducer ,intialtodos )
  

  return (
    <>
    <Addtodoform dispatch={dispatch}/>
    <Todos todos={todos}   dispatch={dispatch}/>
     
    </>
  )
}

export default App
