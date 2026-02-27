import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-slate-400 hover:shadow-sm hover:-translate-y-0.5 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
