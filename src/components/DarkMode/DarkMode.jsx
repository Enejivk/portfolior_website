import React, { useEffect, useState } from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount, check localStorage for theme
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || theme === null) {
      // Default to dark if not set
      document.querySelector("body").setAttribute("data-theme", "dark");
      setIsDark(true);
      if (theme === null) localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
      setIsDark(false);
    }
  }, []);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    setIsDark(true);
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    setIsDark(false);
  };
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={isDark}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} alt="" className="sun" />
        <img src={Moon} alt="" className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
