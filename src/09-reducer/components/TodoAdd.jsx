import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

  const { formState, handleInputChange, onResetForm } = useForm({ description: "" });

  const { description } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;
    
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tarea..."
        className="form-control"
        value={description}
        name="description"
        onChange={handleInputChange}
      />
      <button className="btn btn-outline-primary mt-2" type="submit">
        Agregar
      </button>
    </form>
  );
};
