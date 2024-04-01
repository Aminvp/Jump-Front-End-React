import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";

export default function MenuList() {
  const listData = useContext(ListContext); 

  return (
          <>
            <ul>
              {listData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
    );
}
