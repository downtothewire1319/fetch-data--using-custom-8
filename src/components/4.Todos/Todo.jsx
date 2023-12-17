import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <h3>{todo.id}</h3>
      <h2>Title: {todo.title}</h2>
      <p>Complete: {todo.complete}</p>
    </div>
  );
};

export default Todo;
