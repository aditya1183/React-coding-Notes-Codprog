import React, { useState } from 'react';

function TodoItem({ id, content, handleEdit, handleSave, handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleInputChange = (event) => {
    setEditedContent(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleSave(id, editedContent);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input type="text" value={editedContent} onChange={handleInputChange} />
      ) : (
        <span>{content}</span>
      )}
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleSaveClick} disabled={!isEditing}>
        Save
      </button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;