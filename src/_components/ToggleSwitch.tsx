"use client";

import { useTheme } from "./ThemeProvider";

export default function ToggleSwitch({
  className = "",
}: {
  className?: string;
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`bg-main-purple focus:ring-main-purple relative inline-flex h-5 w-10 items-center rounded-full transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-none ${className}`}
      role="switch"
      aria-checked={theme === "dark"}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${theme === "dark" ? "translate-x-5" : "translate-x-0.5"}`}
      />
    </button>
  );
}
