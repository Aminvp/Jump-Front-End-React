import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <div style={{ marginBottom: "8px" }}>
        <button id="red-button" onClick={() => setColor("red")}>
          RED
        </button>
        <button id="green-button" onClick={() => setColor("green")}>
          GREEN
        </button>
        <button id="blue-button" onClick={() => setColor("blue")}>
          BLUE
        </button>
        <button id="yellow-button" onClick={() => setColor("yellow")}>
          YELLOW
        </button>
      </div>
      <p id="text" style={{ color: color }}>
        This is a colorful text!
      </p>
    </>
  );
}

export default App;
