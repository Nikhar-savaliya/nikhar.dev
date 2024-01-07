import React from "react";

type BadgeVariants = {
  default: "bg-zinc-950 text-zinc-200";
  success: "bg-emerald-200 text-emerald-950";
  danger: "bg-red-600 text-white";
  secondary: "bg-zinc-300 text-zinc-900";
};

interface BadgeProps {
  variant: keyof BadgeVariants;
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  const badgeVariantClasses = {
    default: "bg-zinc-900 text-zinc-200",
    success: "bg-emerald-200 text-emerald-950",
    danger: "bg-red-600 text-white",
    secondary: "bg-zinc-300 text-zinc-900",
  };

  const variantClasses =
    badgeVariantClasses[variant] || badgeVariantClasses.default;

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${variantClasses}`}
    >
      {children}
    </span>
  );
};

Badge.displayName = "Badge";

export default Badge;
