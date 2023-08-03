import React, { useContext } from "react";
import { LanguageContext } from "../App";

const Button = () => {
  const { toggleLanguage } = useContext(LanguageContext);

  return <button onClick={toggleLanguage}>Cambiar Idioma</button>;
};

export default Button;