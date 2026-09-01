"use client";

import Image from "next/image";
import { useRevealOnScroll } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function VenetianFeature() {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="bg-warm-neutral py-16 md:py-24 lg:py-28">
      <div ref={ref} className="container-edit grid grid-cols-1 lg:grid-cols-[1fr,1.1fr] gap-8 lg:gap-10 items-center">
        <div data-reveal className="relative aspect-[3/4] w-full overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/posters/clip-06.jpg"
            alt="Close-up of a freshly rendered wall and window reveal"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div data-reveal className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Venetian Finishes"
            title="A surface with depth, texture and character."
            className="max-w-lg"
          />
          <div className="mt-6 space-y-4 max-w-md text-base text-text-dark/75 leading-relaxed">
            <p>
              Venetian plaster is built up in fine, hand-worked layers and burnished
              to catch the light differently across the surface — giving a wall a
              sense of depth that a flat, painted finish can&apos;t reproduce.
            </p>
            <p>
              It suits feature walls, hallways and rooms where the wall itself is
              meant to be noticed — a decorative, architectural finish rather than
              just a backdrop.
            </p>
          </div>
          <a
            href="#estimator"
            className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase bg-charcoal text-text-light hover:bg-charcoal-2 transition-colors duration-base"
          >
            Ask About Venetian Plaster
          </a>
        </div>
      </div>
    </section>
  );
}
