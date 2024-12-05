import React from 'react'
import TodoList from './TodoList'
import TodoItem from './TodoItem'


function App() {
  const [todos, setTodos] = useState([]);
  function addtodo(newtodo){
    setTodos((previous)=>{
      return [...previous , newtodo]
    })

  }
  return (
    <div>
      <TodoItem/>
      <TodoList/>
      
    </div>
  )
}

export default App