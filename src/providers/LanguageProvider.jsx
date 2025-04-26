import React, { createContext, useEffect } from "react";
import { translations } from "../i18n/translations";
import useLocalStorage from "../hooks/useLocalStorage";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("lang", "en");

  useEffect(() => {
    if (lang === "en") {
      document.querySelector("body").setAttribute("data-lang", "en");
    } else {
      document.querySelector("body").setAttribute("data-lang", "ua");
    }
  }, [lang]);

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ t, lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
