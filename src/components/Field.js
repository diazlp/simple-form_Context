import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const Field = () => {
  const context = useContext(LanguageContext);
  const text = context.language === "english" ? "Name" : "Nama";

  return (
    <div className="ui field">
      <label>{`${text}:`}</label>
      <input />
    </div>
  );
};

export default Field;
