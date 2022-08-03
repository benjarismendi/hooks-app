import React, { useEffect, useReducer } from "react";
import { todoReducer } from "../09-reducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  return {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => todo.done === false).length,
  };
};
