import * as React from "react";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";

import TodoList from "./components/TodoList";
import { TodosContext } from "./context";

const App = () => {
  const [todos, setTodos] = React.useState([
    {
      title: "Todo 1",
    },
    {
      title: "Todo 2",
    },
    {
      title: "Todo 3",
    },
    {
      title: "Todo 4",
    },
  ]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Todo List App</Typography>
        </Toolbar>
      </AppBar>

      <Container
        sx={{ pt: "64px", display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TodosContext.Provider value={{ todos, setTodos, name: "Berk" }}>
          <TodoList />
        </TodosContext.Provider>
      </Container>
    </>
  );
};

export default App;
