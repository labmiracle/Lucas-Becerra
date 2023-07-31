import { useState } from "react";

export default function CountButtons(props) {
  const [count, setCount] = useState(0);
//Inc Count
  let Inc = () => {
    setCount(count + 1);
  };

//Dec Count
  let Dec = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={Inc}>increment</button>
      <button onClick={Dec}>decrement</button>
    </>
  );
}
