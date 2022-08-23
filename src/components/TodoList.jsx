import * as React from "react";
import TodoCard from "./TodoCard";
import { TodosContext } from "../context";
const TodoList = () => {
  const { todos } = React.useContext(TodosContext);
  return (
    <>
      {todos.map((_, todoIndex) => {
        return <TodoCard todoIndex={todoIndex} key={todoIndex} />;
      })}
    </>
  );
};

export default TodoList;
