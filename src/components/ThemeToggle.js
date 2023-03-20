import { useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleTheme = ({ target: { checked } }) => {
    document.documentElement.setAttribute(
      "data-theme",
      checked ? "luxury" : "retro"
    );
    setDarkMode(!checked);
  };
  return (
    <div className="flex my-2 mx-2">
      <label className="cursor-pointer label">
        <input type="checkbox" onChange={handleTheme} className="toggle mx-2" />
        <span className="label-text"></span>
        {darkMode ? (
          <span className="material-symbols-outlined">light_mode</span>
        ) : (
          <span className="material-symbols-outlined">dark_mode</span>
        )}
      </label>
    </div>
  );
};

export default ThemeToggle;
