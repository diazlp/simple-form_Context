import React, { useState } from "react";

const Context = React.createContext();

export const ColorStore = (props) => {
  const [color, setColor] = useState("red");

  const onLanguageChange = (color) => {
    setColor(color);
  };

  return (
    <Context.Provider value={{ color, onLanguageChange }}>
      {props.children}
    </Context.Provider>
  );
};

// you can import it as ColorContext at will
export default Context;
