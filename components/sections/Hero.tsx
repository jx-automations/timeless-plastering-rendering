"use client";

import Image from "next/image";
import { useEntrance } from "@/lib/animations";

export function Hero() {
  const copyRef = useEntrance<HTMLDivElement>(0.15);

  return (
    <section id="top" className="relative min-h-[92vh] md:min-h-screen flex items-end overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <Image
          src="/images/project-finished-render.jpg"
          alt="Freshly rendered and painted single-storey extension with a clean smooth finish and brick soldier-course detail"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/10 to-transparent" />
      </div>

      <div ref={copyRef} className="relative container-edit pb-14 md:pb-20 pt-[140px] w-full">
        <p className="eyebrow text-bronze-light mb-5">Specialist Plastering &amp; Rendering</p>
        <h1 className="font-display font-medium text-text-light text-4xl sm:text-5xl md:text-5xl leading-[1.02] max-w-3xl">
          Finishes that
          <br />
          change a space.
        </h1>
        <p className="mt-6 max-w-lg text-base md:text-lg text-text-light/80 leading-relaxed">
          From modern rendering systems to Venetian plaster, Timeless delivers carefully
          prepared, professionally finished surfaces across the North East.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#estimator"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase bg-bronze text-charcoal hover:bg-bronze-light transition-colors duration-base"
          >
            Request a Quote
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase border border-text-light/40 text-text-light hover:border-text-light transition-colors duration-base"
          >
            View Our Work
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-widest uppercase text-text-light/60">
          <span>North East</span>
          <span aria-hidden="true">·</span>
          <span>Plastering</span>
          <span aria-hidden="true">·</span>
          <span>Rendering</span>
          <span aria-hidden="true">·</span>
          <span>Venetian Finishes</span>
        </div>
      </div>
    </section>
  );
}
