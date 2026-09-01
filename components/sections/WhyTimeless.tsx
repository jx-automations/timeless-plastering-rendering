"use client";

import { useRevealOnScroll } from "@/lib/animations";

const reasons = [
  {
    title: "Specialist Knowledge",
    description: "Experience across plastering, rendering and specialist finish systems.",
  },
  {
    title: "Attention to Detail",
    description: "The final appearance depends on what happens beneath and between the coats.",
  },
  {
    title: "Quality-Led Approach",
    description: "A focus on preparation, application and finish, in that order.",
  },
  {
    title: "Clear Communication",
    description: "Professional communication from enquiry through to completion.",
  },
];

export function WhyTimeless() {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="bg-charcoal text-text-light py-16 md:py-24 lg:py-28">
      <div ref={ref} className="container-edit grid grid-cols-1 lg:grid-cols-[0.9fr,1.1fr] gap-8 lg:gap-10">
        <div data-reveal>
          <p className="eyebrow text-bronze-light mb-3">Why Timeless</p>
          <h2 className="font-display font-medium text-3xl md:text-4xl leading-[1.05]">
            Built on the details that don&apos;t show up in a photo.
          </h2>
        </div>

        <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
          {reasons.map((reason) => (
            <div key={reason.title} className="border-t border-white/15 pt-4">
              <h3 className="font-display text-xl">{reason.title}</h3>
              <p className="mt-2 text-sm text-text-muted-light leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
