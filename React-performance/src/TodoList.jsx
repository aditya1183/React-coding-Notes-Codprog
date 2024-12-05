import { useState } from "react";

function TodoList() {
   
  
    const handleEdit = (id, newContent) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, content: newContent } : todo)));
    };
  
    const handleSave = (id, newContent) => {
      handleEdit(id, newContent);
    };
  
    const handleDelete = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    

    }
  
    return (
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            handleEdit={handleEdit}
            handleSave={handleSave}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    );
  
  
  export default TodoList;