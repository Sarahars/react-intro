import { useState } from "react";

function FuncCmp(props) {
  const [count, setCount] = useState(props.count);
  return (
    <div>
      <h4>I am {props.title}</h4>
      <p>In order to create class Component you have to use classes</p>
      <div>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          update counter
        </button>
      </div>
    </div>
  );
}

export default FuncCmp;
