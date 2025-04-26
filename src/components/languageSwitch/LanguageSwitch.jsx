import React, { useContext } from "react";
import "./languageSwitch.css";
import { LanguageContext } from "../../providers/LanguageProvider";

const LanguageSwitch = () => {
  const { lang, setLang } = useContext(LanguageContext);

  function switchLang() {
    setLang(lang === "en" ? "ua" : "en");
  }

  // useEffect(() => {
  //   if (lang === "EN") {
  //     document.querySelector("body").setAttribute("data-lang", "EN");
  //   } else {
  //     document.querySelector("body").setAttribute("data-lang", "UA");
  //   }
  // }, [lang]);

  return (
    <div className="lang-switch-container">
      <input
        className="lang-switch-input"
        type="checkbox"
        id="lang-switch"
        onChange={switchLang}
        defaultChecked={lang === "en" ? true : false}
      />
      <label className="lang-switch-label" htmlFor="lang-switch">
        <span className="dark-mode-label-text">UA</span>
        <span className="dark-mode-label-text">EN</span>
      </label>
    </div>
  );
};

export default LanguageSwitch;
