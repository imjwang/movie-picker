import { useState, useCallback, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storageDarkMode = localStorage.getItem("darkMode");
    if (storageDarkMode) {
      document.documentElement.setAttribute(
        "data-theme",
        storageDarkMode === "true" ? "luxury" : "retro"
      );
      setDarkMode(storageDarkMode === "true");
    }
    if (storageDarkMode === null) {
      const systemDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.setAttribute(
        "data-theme",
        systemDarkMode ? "luxury" : "retro"
      );
      setDarkMode(systemDarkMode);
    }
  }, []);

  const handleTheme = ({ target: { checked } }) => {
    document.documentElement.setAttribute(
      "data-theme",
      checked ? "luxury" : "retro"
    );
    setDarkMode(checked);
    localStorage.setItem("darkMode", checked);
  };

  return (
    <div className="flex my-2 mx-2">
      <label className="cursor-pointer label">
        <input
          type="checkbox"
          onChange={handleTheme}
          className="toggle mx-2"
          checked={darkMode}
        />
        <span className="label-text"></span>
        {darkMode ? (
          <span className="material-symbols-outlined">dark_mode</span>
        ) : (
          <span className="material-symbols-outlined">light_mode</span>
        )}
      </label>
    </div>
  );
};

export default ThemeToggle;
