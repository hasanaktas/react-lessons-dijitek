import { Box, Typography, Button } from "@mui/material";
import { useContext } from "react";
import TodoAction from "./TodoAction";
import TodoTitle from "./TodoTitle";
import { TodosContext } from "../context";

const TodoCard = ({ todoIndex }) => {
  const { todos, name } = useContext(TodosContext);

  const todo = todos[todoIndex];
  return (
    <Box
      sx={{
        boxShadow: 5,
        borderRadius: 2,
        p: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      {name}
      <TodoTitle todo={todo} />
      <TodoAction todoIndex={todoIndex} />
    </Box>
  );
};

export default TodoCard;
