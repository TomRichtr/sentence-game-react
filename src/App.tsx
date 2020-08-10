import React from "react";
import AppRouter from "./routers/AppRouter";
import { FlagIcon } from "react-flag-kit";
import i18n from "./i18n";

function App() {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="buttons-languages-container">
      <button
        className="buttons-languages english"
        onClick={() => {
          changeLanguage("en");
        }}
      >
        <FlagIcon code="GB" size={48} />
      </button>
      <button
        className="buttons-languages czech"
        onClick={() => {
          changeLanguage("cs");
        }}
      >
        <FlagIcon code="CZ" size={48} />
      </button>
      <AppRouter />
    </div>
  );
}

export default App;
