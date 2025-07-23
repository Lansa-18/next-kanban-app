import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={` ${className} text-15px bg-main-purple hover:bg-main-purple-hover rounded-3xl py-3 px-4 leading-normal font-bold text-white`}
    >
      {children}
    </button>
  );
}
