"use client";

import { useRevealOnScroll } from "@/lib/animations";

export function FinalCTA() {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="contact" className="bg-charcoal text-text-light py-20 md:py-28">
      <div ref={ref} data-reveal className="container-edit text-center max-w-2xl mx-auto">
        <p className="eyebrow text-bronze-light mb-4">Let&apos;s Talk About Your Project</p>
        <h2 className="font-display font-medium text-3xl md:text-5xl leading-[1.05]">
          Ready to talk about your project?
        </h2>
        <p className="mt-6 text-text-muted-light leading-relaxed max-w-lg mx-auto">
          Whether you&apos;re looking for a clean modern render, a refined plaster
          finish or something more distinctive, start with a conversation.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#estimator"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase bg-bronze text-charcoal hover:bg-bronze-light transition-colors duration-base"
          >
            Request a Quote
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase border border-white/30 hover:border-white/60 transition-colors duration-base"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
