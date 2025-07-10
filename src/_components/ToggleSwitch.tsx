"use client";

import { useState } from "react";

interface ToggleSwitchProps {
  initialState?: boolean;
  onToggle?: (isOn: boolean) => void;
  className?: string;
}

export default function ToggleSwitch({
  initialState = false,
  onToggle,
  className = "",
}: ToggleSwitchProps) {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`bg-main-purple relative inline-flex h-5 w-10 items-center rounded-full transition-colors duration-200 ease-in-out ${isOn ? "bg-primary-blue" : "bg-primary-blue"} ${className} `}
      role="switch"
      aria-checked={isOn}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${isOn ? "translate-x-5" : "translate-x-0.5"} `}
      />
    </button>
  );
}
