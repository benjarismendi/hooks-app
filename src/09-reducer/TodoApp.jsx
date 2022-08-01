import React from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";

export const TodoApp = () => {

  const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodo();

  return (
    <>
      <h3>TodoApp. Todos: {todosCount}. Pending: {pendingTodosCount}</h3>
      <hr />

      <section className="row">
        <div className="col-7">
          <TodoList 
            todos={todos} 
            onDelete={handleDeleteTodo} 
            onToggle={handleToggleTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </section>
    </>
  );
};
