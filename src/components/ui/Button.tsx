// components/ui/Button.tsx
"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick = () => alert(`Button clicked: ${children?.toString()}`),
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "px-6 py-3 rounded-md font-medium transition-all hover:cursor-pointer duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#7FC242] hover:bg-[#5A7D2C] text-white",
    secondary: "bg-[#2E2E2E] hover:bg-[#1A1A1A] text-white",
    outline: "border border-[#7FC242] text-[#7FC242] hover:bg-[#F8F8F8]",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
