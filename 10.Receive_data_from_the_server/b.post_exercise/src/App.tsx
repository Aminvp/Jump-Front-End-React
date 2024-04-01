import { useEffect, useState } from "react";

type Todo = {
  id: string;
  description: string;
};

const newTodo = async (newDescription: Todo["description"]) => {
  if (newDescription.length < 1) return;
  return fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify({
      description: newDescription,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch("http://localhost:3000/todos");
  return await response.json();
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newDescription, setNewDescription] = useState<string>("");
  useEffect(() => {
    fetchTodos().then((todos) => setTodos(todos));
  }, []);
  return (
    <>
      <h1>Todos:</h1>
      <div>
        <label htmlFor="new-todo">New Todo:</label>
        <input
          type="text"
          value={newDescription}
          onChange={(e) => {
            setNewDescription((e.target as HTMLInputElement).value);
          }}
        />
        <button
          type="submit"
          onClick={async () => {
            await newTodo(newDescription);
            fetchTodos().then((todos) => setTodos(todos));
            setNewDescription("");
          }}
        >
          Submit
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
