import { useState } from "react";
import Menu from "./components/Menu";
import { ListContext } from "./contexts/ListContext";

const data = [
  {
    phoneNumber: "09194404422",
    email: "a@a.com",
  },
  {
    phoneNumber: "09133404411",
    email: "b@b.com",
  },
  {
    phoneNumber: "09126231133",
    email: "c@c.com",
  },
];

function App() {
  const [listType, setListType] = useState<"phoneNumber" | "email">("phoneNumber");

  function onClickButton() {
    if (listType === "phoneNumber") {
      setListType("email");
    } else {
      setListType("phoneNumber");
    }
  }

  function getList() {
    return data.map((singleData) => singleData[listType]);
  }

  return (
    <>
      <button id="change-button" onClick={onClickButton}>
        {listType === "phoneNumber" ? "Show Emails" : "Show Phone Numbers"}
      </button>

      <ListContext.Provider value={getList()}>
        <Menu />
      </ListContext.Provider>
    </>
  );
}

export default App;
