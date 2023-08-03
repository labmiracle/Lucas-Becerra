import React, { createContext, useState } from "react";
import "./App.css";
import MainText from "./components/MainText";
import Button from "./components/Button";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <MainText />
      <Button />
    </LanguageProvider>
  );
};

export default App;
export { LanguageContext };