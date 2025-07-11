import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={` ${className} text-15px bg-main-purple rounded-3xl p-3 leading-normal font-bold text-white`}
    >
      {children}
    </button>
  );
}
