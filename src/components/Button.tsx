import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "large";
  className?: string;
}

export default function Button({
  children,
  onClick,
  size = "small",
  className = "",
}: ButtonProps) {
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base",
  };

  const baseClasses =
    "font-semibold rounded transition-colors duration-200 ease-in-out";
  const colorClasses =
    "bg-primary hover:bg-primaryDark text-white outline-none";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${colorClasses} ${className}`}
    >
      {children}
    </button>
  );
}
