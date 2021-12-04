import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const LanguageSelector = () => {
  const languageContext = useContext(LanguageContext);
  const colorContext = useContext(ColorContext);

  const onLanguageChange = (language, color) => {
    languageContext.onLanguageChange(language);
    colorContext.onLanguageChange(color);
  };

  return (
    <div className="">
      Select a language:
      <i
        className="flag us"
        onClick={() => onLanguageChange("english", "red")}
      />
      <i
        className="flag id"
        onClick={() => onLanguageChange("indonesia", "primary")}
      />
    </div>
  );
};

export default LanguageSelector;
