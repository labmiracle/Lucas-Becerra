import { useEffect } from "react";

export default function Actualizando(props) {
  useEffect(() => {
    console.log("Actualizando!");
  }, [props]);

  return null;
}