"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <FaMoon size={20} aria-hidden="true" />
      ) : (
        <FaSun size={20}  aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;
