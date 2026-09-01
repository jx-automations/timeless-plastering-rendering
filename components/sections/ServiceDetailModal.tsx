"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { services, type ServiceId } from "@/lib/services";
import { useScrollLock } from "@/lib/useScrollLock";

interface Props {
  serviceId: ServiceId | null;
  onClose: () => void;
}

export function ServiceDetailModal({ serviceId, onClose }: Props) {
  const open = serviceId !== null;
  const service = serviceId ? services[serviceId] : null;
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useScrollLock(open);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Minimal focus trap: keep Tab cycling within the panel while open.
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[70] overscroll-contain transition-opacity duration-base ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ touchAction: open ? "none" : undefined }}
      role="dialog"
      aria-modal="true"
      aria-label={service ? `${service.title} — service details` : "Service details"}
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        aria-label="Close"
        className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(17,17,15,0.8)" }}
      />

      <div className="relative h-full overflow-y-auto py-8 md:py-12">
        <div
          ref={panelRef}
          className="container-edit max-w-3xl mx-auto bg-offwhite text-text-dark"
          style={{ backgroundColor: "#F4F1EA" }}
        >
          {service && (
            <div className="relative p-6 md:p-10">
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center w-11 h-11 text-text-dark hover:text-bronze transition-colors duration-base"
                aria-label="Close service details"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>

              <span className="font-display text-xl text-bronze">{service.number}</span>
              <h2 className="mt-2 font-display font-medium text-3xl md:text-4xl leading-[1.05] max-w-md">
                {service.title}
              </h2>
              <p className="mt-4 max-w-lg text-base md:text-lg text-text-dark/75 leading-relaxed">
                {service.summary}
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-[1.1fr,1fr] gap-8">
                <div>
                  <p className="eyebrow text-bronze mb-3">What&apos;s Involved</p>
                  <ul className="space-y-3">
                    {service.involves.map((line) => (
                      <li key={line} className="flex gap-3 text-sm md:text-base text-text-dark/80 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-bronze shrink-0" aria-hidden="true" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="eyebrow text-bronze mt-7 mb-3">What Timeless Focuses On</p>
                  <p className="text-sm md:text-base text-text-dark/80 leading-relaxed">{service.focus}</p>

                  <a
                    href="#estimator"
                    onClick={onClose}
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase bg-bronze text-charcoal hover:bg-bronze-light transition-colors duration-base"
                  >
                    Request a Quote
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {service.images.map((img) => (
                    <div
                      key={img.src}
                      className={`relative aspect-[4/3] overflow-hidden ${
                        service.images.length === 1 ? "col-span-2" : ""
                      }`}
                    >
                      <Image src={img.src} alt={img.alt} fill sizes="30vw" className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
