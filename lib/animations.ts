"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
export function ensureGsapRegistered() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Reveals children of a container on scroll with a gentle fade/rise + stagger.
 * No-ops (just sets final opacity) when the user prefers reduced motion.
 */
export function useRevealOnScroll<T extends HTMLElement>(
  selector = "[data-reveal]",
  options?: { stagger?: number; y?: number; start?: string }
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(selector);
    if (targets.length === 0) return;

    if (prefersReducedMotion()) {
      targets.forEach((t) => {
        t.style.opacity = "1";
        t.style.transform = "none";
      });
      return;
    }

    ensureGsapRegistered();

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: options?.y ?? 28 });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: options?.stagger ?? 0.12,
        scrollTrigger: {
          trigger: root,
          start: options?.start ?? "top 80%",
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector]);

  return ref;
}

/** Simple fade+rise entrance for a single element, e.g. hero copy block. */
export function useEntrance<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    ensureGsapRegistered();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, delay, ease: "power2.out" }
      );
    });
    return () => ctx.revert();
     
  }, [delay]);

  return ref;
}
