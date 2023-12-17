import React from "react";
import useFetch from "../../Hooks/useFetch";
import { ErrorMesssge } from "../Error/Error";
import { LoadingMesssge } from "../Loading/Loading";
import Todo from "./Todo";
import "./todos.css";

const Todos = () => {
  const { allData, isError, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>6. Fetch Todos</h1>
      {isError && <ErrorMesssge messageName={isError.message} />}
      {isLoading && <LoadingMesssge messageName="Todos" />}
      <div className="todos">
        {allData.slice(0, 12).map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
