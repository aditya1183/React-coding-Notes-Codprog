import React from 'react'

   
    function Todo({id , completed , title , toggle , removetodo}) {
  return (
<div className='todo'>
   
  <div className='todo-title'>
  <input type="checkbox" checked={completed} onChange={()=>{toggle(id)}}/>
   <p>{title}</p>

  </div>

  <div className='cross-btn' onClick={()=>{removetodo(id)}}>X


  </div>
   
 
  
</div>
    )
}

export default Todo