"use client";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useTheme } from "@/context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <MdDarkMode size={20} aria-hidden="true" />
      ) : (
        <MdLightMode size={20}  aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;
