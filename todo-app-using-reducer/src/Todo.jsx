import React from 'react'

function Todo({id , title , completed , dispatch , task}) {



    const handledelete=()=>{
        dispatch({type:"DELETE_TODO" , payload:{id:id}})
    }


    const handletoggle=()=>{
        dispatch({type:"TOGGLE_COMPLETED" , payload:{id:id}})

    }
  return (
    <div style={{
        fontFamily:"sans-serif",
        padding:"1rem",
    margin:"1rem",
    backgroundColor:"#cecece",
    borderRadius:"1rem",

    }}>
        <h4>ID : {id}</h4>
        <h4 style={{
            textDecoration:task ? "line-through" : "solid",
        }}>Title : {title}</h4>
        <h4>completed: {completed ? "true" : "false"}</h4>
        
       
        <button style={{
            border:"none",
            padding:"0.5rem 1.5rem",
            borderRadius:"1rem",
            cursor:"pointer"
        }} onClick={handledelete}>Delete</button>
        <button style={{
            border:"none",
            padding:"0.5rem 1.5rem",
            borderRadius:"1rem",
            cursor:"pointer",
            margin:"0.5rem"
        }} onClick={handletoggle}>Toggle Completed</button>
    </div>
  )
}

export default Todo