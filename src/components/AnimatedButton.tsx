"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type AnimatedButtonProps = {
  children: ReactNode;
  href?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "black" | "white";
};

export default function AnimatedButton({
  children,
  href,
  disabled = false,
  className = "",
  onClick,
  type = "button",
  variant = "black",
}: AnimatedButtonProps) {
  const overlayClass = variant === "black" ? "bg-black" : "bg-white";
  const textHoverClass =
    variant === "black" ? "group-hover:text-white" : "group-hover:text-black";

  const content = (
    <>
      <span
        className={`absolute inset-0 -translate-x-full ${overlayClass} transition-transform duration-300 ease-out group-hover:translate-x-0`}
      />
      <span
        className={`relative z-10 inline-flex items-center gap-3 transition-colors duration-200 ${textHoverClass}`}
      >
        {children}
      </span>
    </>
  );

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={`group relative overflow-hidden ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={disabled ? "button" : type}
      disabled={disabled}
      onClick={onClick}
      className={`group relative overflow-hidden disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {content}
    </button>
  );
}
