import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 shadow-sm hover:shadow-md",
  secondary:
    "bg-white border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-slate-400",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      type="button"
      className={`${base} ${variantStyles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
