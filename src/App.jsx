import * as React from "react";

const App = () => {
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState([
    {
      title: "Bu Test Todosudur",
    },
    {
      title: "Bu 2. Test Todosudur",
    },
  ]);

  const save = () => {
    const newTodo = {
      title: input,
    };

    // const newTodos = [...todos];
    // newTodos.push(newTodo);
    // setTodos(newTodos);
    setTodos([...todos, newTodo]);

    // setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const removeItem = (index) => {
    console.log(index);

    // const newTodos = todos.filter((item, i) => i !== index);

    // setTodos(newTodos);

    setTodos((prev) => prev.filter((item, i) => i !== index));
  };

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Basligi Gir"
          style={{ flex: 1 }}
        />
        <button
          disabled={input.length === 0}
          onClick={save}
          style={{ padding: 10 }}
        >
          Kaydet
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {todos.map((todo, index) => {
          return (
            <div
              key={index}
              style={{
                border: "1px solid rgb(80,80,80)",
                padding: 20,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {todo.title}
              <button
                style={{ backgroundColor: "red", color: "white", padding: 5 }}
                onClick={() => removeItem(index)}
              >
                Sil
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
