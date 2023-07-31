import "./App.css";
import DecButton from "./components/ButtonDec";
import { useState } from "react";
import IncButton from "./components/ButtonInc";
import CountText from "./components/CountText";

function App() {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>State-React</h1>
      <CountText count={count}></CountText>
      <IncButton count={count} handler={increment}></IncButton>
      <DecButton count={count} handler={decrement}></DecButton>
    </>
  );
}

export default App;