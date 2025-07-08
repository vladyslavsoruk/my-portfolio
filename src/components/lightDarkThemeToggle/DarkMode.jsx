// import "./darkMode.css";
// import "src/components/lightDarkThemeToggle/darkMode.css";
import { useContext } from "react";
import Sun from "./Sun.svg?react";
import Moon from "./Moon.svg?react";
import { ThemeContext } from "../../providers/ThemeProvider";

const DarkMode = () => {
  // const setDarkMode = () => {
  //   document.querySelector("body").setAttribute("data-theme", "dark");
  // };
  // const setLightMode = () => {
  //   document.querySelector("body").setAttribute("data-theme", "light");
  // };
  // const toggleTheme = (e) => {
  //   if (e.target.checked) setDarkMode();
  //   else setLightMode();
  // };

  const [theme, setTheme] = useContext(ThemeContext);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="dark-mode">
      <input
        className="dark-mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={theme === "dark" ? true : false}
      />
      <label className="dark-mode-label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
