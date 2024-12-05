import React from 'react'
import Todo from './Todo'

function Todos({todos , toggle , removetodo}) {
  return (
    <div>
        {
           todos.map((todo)=>{
            return <Todo {...todo} key={todo.id} toggle={toggle} removetodo={removetodo}/>
           })
        }
    </div>
  )
}

export default Todos