import { useState, useEffect } from "react";

type Todo = {
  id: number,
  description: string,
  done: boolean
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchData = async () => {
    try {
      const results = await fetch("http://localhost:3000/todos");
      const data = await results.json();
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to only run once when the component mounts

  return (
    <>
      <h1>Todos:</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
