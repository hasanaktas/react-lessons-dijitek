import { Button } from "@mui/material";
import * as React from "react";
import { TodosContext } from "../context";
const TodoAction = ({ todoIndex }) => {
  const { setTodos } = React.useContext(TodosContext);

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo, index) => index !== todoIndex));
  };

  return (
    <Button variant="contained" color="error" onClick={deleteTodo}>
      Sil
    </Button>
  );
};

export default TodoAction;
