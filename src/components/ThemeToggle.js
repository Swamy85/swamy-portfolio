import React from "react";

function ThemeToggle() {

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <button onClick={toggleTheme} className="theme-btn">
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;