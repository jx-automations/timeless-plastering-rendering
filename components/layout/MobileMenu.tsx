"use client";

import { useEffect, useRef } from "react";
import { useScrollLock } from "@/lib/useScrollLock";

interface Props {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: Props) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useScrollLock(open);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] bg-charcoal overscroll-contain transition-opacity duration-base ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      // Explicit inline fallback: guarantees a fully opaque panel even in the unlikely
      // event the `bg-charcoal` utility class fails to apply (e.g. a CSS purge edge case).
      style={{ backgroundColor: "#11110F", touchAction: open ? "none" : undefined }}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
    >
      <div className="container-edit flex items-center justify-between h-20">
        <span className="eyebrow text-bronze">Menu</span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="inline-flex items-center justify-center w-11 h-11 text-text-light"
          aria-label="Close menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </div>

      <nav className="container-edit flex flex-col gap-1 mt-6" aria-label="Mobile primary">
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="py-4 border-b border-white/10 font-display text-3xl text-text-light"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="container-edit mt-8">
        <a
          href="#estimator"
          onClick={onClose}
          className="inline-flex w-full items-center justify-center px-6 py-4 text-xs font-semibold tracking-widest uppercase bg-bronze text-charcoal"
        >
          Request a Quote
        </a>
      </div>
    </div>
  );
}
