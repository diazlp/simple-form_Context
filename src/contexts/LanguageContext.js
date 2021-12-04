import React, { useState } from "react";

const Context = React.createContext();

export const LanguageStore = (props) => {
  const [language, setLanguage] = useState("english");

  const onLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <Context.Provider value={{ language, onLanguageChange }}>
      {props.children}
    </Context.Provider>
  );
};

// you can import it as LanguageContext as will
export default Context;
