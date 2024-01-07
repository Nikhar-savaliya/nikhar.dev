import React from "react";

type ButtonVariants = {
  default: "bg-zinc-900 text-zinc-200 shadow hover:bg-zinc-900/90";
  destructive: "bg-red-600 text-white shadow-sm hover:bg-red-600/90";
  success: "bg-emerald-600 text-white shadow-sm hover:bg-emerald-600/90";
  outline: "border border-input bg-background shadow-xs hover:bg-zinc-200/70";
  secondary: "bg-zinc-200 text-zinc-900 shadow-xs hover:bg-zinc-200/80";
  ghost: "text-zinc-900 hover:bg-zinc-200";
  link: "text-blue-800 underline-offset-4 hover:underline";
};

interface ButtonProps {
  variant: keyof ButtonVariants;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  const buttonVariantClasses = {
    default: "bg-zinc-900 text-zinc-200 shadow hover:bg-zinc-900/90",
    destructive: "bg-red-600 text-white shadow-sm hover:bg-red-600/90",
    success: "bg-emerald-600 text-white shadow-sm hover:bg-emerald-600/90",
    outline: "border border-input bg-background shadow-xs hover:bg-zinc-200/70",
    secondary: "bg-zinc-200 text-zinc-900 shadow-xs hover:bg-zinc-200/80",
    ghost: "text-zinc-900 hover:bg-zinc-200",
    link: "text-blue-800 underline-offset-4 hover:underline",
  };

  const variantClasses =
    buttonVariantClasses[variant] || buttonVariantClasses.default;

  return (
    <button
      className={`selection:bg-transparent inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${variantClasses}`}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
