import React from "react";
import UserCreate from "./UserCreate";
import { ColorStore } from "../contexts/ColorContext";
import { LanguageStore } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const App = () => {
  return (
    <div className="ui container">
      <ColorStore>
        <LanguageStore>
          <LanguageSelector />
          <UserCreate />
        </LanguageStore>
      </ColorStore>
    </div>
  );
};

export default App;
