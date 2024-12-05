import React, { useState } from 'react'
import {v4 as uuid } from "uuid"

function TodoForm({addtodo}) {
    const [title , settitle]=useState("");

    function handlesubmit(e){
        e.preventDefault();
        if(title.trim().length==0){
            alert("Please Fill Input ")
            return ;

        }
      const newtodo={
        title :title,
        completed :false,
        id:uuid()


      }

      addtodo(newtodo)
      settitle("");
        

    }

    function handlechange(e){
        settitle(e.target.value)
        

    }
  return (
    <form onSubmit={handlesubmit} className='todoform'>
        <input type="text" value={title} onChange={handlechange}  className='todoform_input'/>
        <button  className = "todoform_button" type="submit">Add</button>
    </form>
  )
}

export default TodoForm