import { useState } from "react";

export default function EmptyString(props) {
  const [letter, setLetter] = useState(" ");

  let IncLetter = () => {
    setLetter(letter + "a");
  };
  let DecLetter = () => {
    setLetter(letter.slice(0, -1));
  };

  return (
    <>
      <div>{letter}</div>
      <button onClick={IncLetter}>add letter</button>
      <button onClick={DecLetter}>draw letter</button>
    </>
  );
}