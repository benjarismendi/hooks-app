import React from "react";

export const TodoItem = ({todo, onDelete, onToggle}) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between"
      onDoubleClick={() => onToggle(todo.id)}
    >
      <span 
        className={`align-self-center user-select-none ${todo.done ? 'done' : ''}`}
      >
        {todo.description}
      </span>
      <button 
        className="btn btn-danger"
        onClick={() => onDelete(todo.id)}>X</button>
    </li>
  );
};
