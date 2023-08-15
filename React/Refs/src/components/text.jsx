import { useState } from "react";

export default function Form() {

  const [InputName, setValorInputName] = useState("");
  const [InputLastname, setValorInputLastname] = useState("");

  const handleInputChangeName = (event) => {
    setValorInputName(event.target.value);
  };

  const handleInputChangeLastname = (event) => {
    setValorInputLastname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input value name:", InputName);
    console.log("Input value last name:", InputLastname);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        Name:{" "}
        <input
          type="text"
          value={InputName}
          onChange={handleInputChangeName}
        />{" "}
      </label>
      <br />
      <label>
        {" "}

        Last Name:{" "}
        <input
          type="text"
          value={InputLastname}
          onChange={handleInputChangeLastname}
        />{" "}
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
}