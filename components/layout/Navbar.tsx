"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-base ${
        scrolled
          ? "bg-charcoal/90 backdrop-blur-md border-b border-white/10"
          : "border-b border-transparent"
      }`}
    >
      {/* Permanent soft scrim behind the logo/nav row — keeps the transparent-PNG logo and
          nav links legible over any hero photo, independent of the scrolled bg-charcoal/90 state. */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-full bg-gradient-to-b from-charcoal/55 via-charcoal/20 to-transparent transition-opacity duration-base pointer-events-none ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="relative container-edit flex items-center justify-between h-20">
        <Link href="#top" className="flex items-center shrink-0" aria-label="Timeless Plastering & Rendering — home">
          <Image
            src="/images/logo-transparent.png"
            alt="Timeless Plastering & Rendering — all aspects of rendering & plastering"
            width={600}
            height={200}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium tracking-wide text-text-light/85 hover:text-text-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#estimator"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-bronze text-charcoal hover:bg-bronze-light transition-colors duration-base"
          >
            Request a Quote
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-text-light"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
              <path d="M0 1H22M0 8H22M0 15H22" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </header>
  );
}
