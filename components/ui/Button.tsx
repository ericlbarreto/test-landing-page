"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "white";
  size?: "md" | "lg";
  /** Shows arrow icon after text */
  withArrow?: boolean;
}

/** Reusable button with Tractian brand styles */
export function Button({
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    white:
      "bg-white text-primary hover:bg-slate-50 shadow-sm",
  };

  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && (
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
    </button>
  );
}
