import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
