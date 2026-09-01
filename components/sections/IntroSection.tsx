"use client";

import Image from "next/image";
import { useRevealOnScroll } from "@/lib/animations";

export function IntroSection() {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="about" className="bg-offwhite py-16 md:py-24 lg:py-28">
      <div ref={ref} className="container-edit grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-8 lg:gap-9 items-center">
        <div data-reveal>
          <p className="eyebrow text-bronze mb-3">What We Do</p>
          <h2 className="font-display font-medium text-3xl md:text-4xl leading-[1.05] text-text-dark max-w-lg">
            More than a coat of finish.
          </h2>
          <div className="mt-6 space-y-4 max-w-md text-base text-text-dark/75 leading-relaxed">
            <p>
              A great finish starts long before the final coat. The condition of the
              surface, the materials chosen and the way each layer is applied all
              affect how a wall or render performs — and how it looks for years after.
            </p>
            <p>
              Timeless focuses on getting those stages right: proper preparation,
              considered materials, and clean, consistent application through to the
              final finish.
            </p>
          </div>
        </div>

        <div data-reveal className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/images/project-basecoat.jpg"
            alt="Base-coat rendering applied to a house extension, ready for final finishing"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
