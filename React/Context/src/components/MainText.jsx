import React, { useContext } from "react";
import { LanguageContext } from "../App";

const MainText = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <p>{language === "es" ? "Español" : "English"}</p>
      <p>
        {language === "es"
          ? "Hola"
          : "Hellow"}
      </p>
    </div>
  );
};

export default MainText;