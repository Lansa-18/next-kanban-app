import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={` ${className} text-15px bg-main-purple hover:bg-main-purple-hover rounded-3xl px-4 py-3 leading-normal font-bold text-white transition-all duration-300`}
    >
      {children}
    </button>
  );
}
