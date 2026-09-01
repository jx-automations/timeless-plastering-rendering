"use client";

import { useEffect } from "react";

/**
 * Locks body scroll while `active` is true by pinning the body to its current
 * scroll position (rather than plain `overflow:hidden`, which still lets iOS
 * Safari's rubber-band overscroll reveal content behind a `fixed` panel) and
 * restores the scroll position on close/unmount.
 */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (active) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.dataset.scrollY = String(scrollY);
    } else {
      const scrollY = Number(document.body.dataset.scrollY || "0");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      delete document.body.dataset.scrollY;
      window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
    };
  }, [active]);
}
