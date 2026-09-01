"use client";

import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
  onOpen?: () => void;
  className?: string;
  sizes?: string;
}

export function PortfolioItem({
  src,
  alt,
  category,
  width,
  height,
  onOpen,
  className = "",
  sizes = "(min-width: 768px) 25vw, 50vw",
}: Props) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${category} — Timeless Plastering & Rendering services`}
      className={`relative block w-full text-left group overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-bronze ${className}`}
    >
      {/* Each photo keeps its real intrinsic aspect ratio (masonry columns, not a forced
          crop grid) so no part of the project is cut out of frame. */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className="w-full h-auto block transition-transform duration-slow ease-out group-hover:scale-[1.03]"
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
    </button>
  );
}
