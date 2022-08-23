import { Typography } from "@mui/material";

const TodoTitle = ({ todo }) => {
  return <Typography sx={{ flexGrow: 1 }}>{todo.title}</Typography>;
};

export default TodoTitle;
