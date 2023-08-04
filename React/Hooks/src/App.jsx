import "./App.css";
import { useState } from "react";
import AforB from "./components/ab-exercise";
import Desmontado from "./components/Desmontado";
import Actualizando from "./components/Actualizando";

function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <h2> A for B</h2>
      <AforB></AforB>
      <h2>Se muestra en consola "Desmontado"</h2>
      <Desmontado></Desmontado>
      <h2>Se muestra en consola "Actualizando"</h2>
      <div>
        <button onClick={handleClick}>Click me</button>
        <Actualizando clicks={clicks}></Actualizando>
      </div>
    </>
  );
}

export default App;