import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-bronze text-charcoal hover:bg-bronze-light border border-bronze",
  secondary:
    "bg-transparent text-current border border-current/40 hover:border-current",
  ghost: "bg-transparent text-current underline-offset-4 hover:underline",
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-base ease-out group";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: BaseProps & { href: string }) {
  return (
    <Link href={href} className={`${base} ${variantClasses[variant]} ${className}`}>
      <span>{children}</span>
      <ArrowIcon />
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variantClasses[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      <ArrowIcon />
    </button>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-base ease-out group-hover:translate-x-1"
    >
      <path
        d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
