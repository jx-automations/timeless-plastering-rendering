"use client";

import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  category: string;
  className?: string;
  sizes?: string;
}

export function PortfolioItem({ src, alt, category, className = "", sizes = "50vw" }: Props) {
  return (
    <div className={`relative group overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-slow ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-base" />
      <div className="absolute left-0 right-0 bottom-0 p-4 flex items-center justify-between translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-base">
        <span className="text-xs tracking-widest uppercase text-text-light">{category}</span>
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-text-light">
          <path
            d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
