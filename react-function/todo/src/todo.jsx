import { useState } from "react";

function Todo() {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([])

  return (
    <div>
      <input onChange={() => {}} type="text" />
      <button onClick={() => {
          
      }}>add</button>
    </div>
  );
}

export default Todo;
