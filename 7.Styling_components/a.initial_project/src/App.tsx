import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  const ChangeColor = (val:string) => {
    if (val === 'red'){
      setColor('red')
    }
    if (val === 'green'){
      setColor('green')
    }
    if (val === 'blue'){
      setColor('blue')
    }
    if (val === 'yellow'){
      setColor('yellow')
    }
  }

  return (
    <>
      <div style={{ marginBottom: "8px" }}>
        <button id="red-button" onClick={() => ChangeColor('red')}>RED</button>
        <button id="green-button" onClick={() => ChangeColor('green')}>GREEN</button>
        <button id="blue-button" onClick={() => ChangeColor('blue')}>BLUE</button>
        <button id="yellow-button" onClick={() => ChangeColor('yellow')}>YELLOW</button>
      </div>
      <p id="text" style={{color: color}}>This is a colorful text!</p>
    </>
  );
}

export default App;
