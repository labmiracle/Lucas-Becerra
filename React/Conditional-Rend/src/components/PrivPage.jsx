import { useState } from "react";

export default function PrivPage() {
 
  const [userCondition, setUsercondition] = useState(false);
  
  function handleClickclose() {
    setUsercondition(false);
  }
  
  function handleClickstart() {
    setUsercondition(true);
  }

  if (userCondition) {
    return (
      <>
        <p>Esta página solo puedo verla por que estoy logueado.</p>
        <button className="button" onClick={handleClickclose}>
          Log out
        </button>
      </>
    );
  } else {
    return (
      <>
        <p> "Inicia sesión para ver contenido privado"</p>
        <button className="button" onClick={handleClickstart}>
          Log in
        </button>
      </>
    );
  }
}