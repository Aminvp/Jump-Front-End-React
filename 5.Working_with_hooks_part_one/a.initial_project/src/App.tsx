import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState<any>("");
  const [userInfo, setUserInfo] = useState<any>({
    name: " ",
    age: 0,
  });

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value)
  }

  function onSubmit() {
    if (userInput.length) {
      const [name , age] = userInput.split(" ");
      setUserInfo({name, age})
      setUserInput("")
    }
  }

  return (
    <>
      <input id="user-input" value={userInput} onChange={onInputChange} />
      <button
        id="submit-button"
        onClick={onSubmit}
        disabled={!userInput.length}
      >
        Submit
      </button>
      <p>
        My name is {userInfo.name} and I'm {userInfo.age} years old.
      </p>
    </>
  );
}

export default App;
