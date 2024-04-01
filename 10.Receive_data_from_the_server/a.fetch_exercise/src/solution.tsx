import {
    useEffect,
    useState,
  } from "react";
  
  type Todo = {
    id: string;
    description: string;
  };
  
  function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    useEffect(() => {
      fetch("http://localhost:3000/todos")
        .then((response) => response.json())
        .then((data) => setTodos(data));
    }, []);
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
  