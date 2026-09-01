"use client";

import { useState } from "react";
import { useRevealOnScroll } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "What areas do you cover?",
    a: "We're based in the North East and take on residential and property work across the region. Get in touch with your postcode and we can confirm.",
  },
  {
    q: "What is the difference between plastering and rendering?",
    a: "Plastering is generally an internal finish applied to walls and ceilings. Rendering is the external equivalent, applied to a property's outer walls and built to withstand the weather.",
  },
  {
    q: "What is Venetian plaster?",
    a: "A decorative, hand-applied plaster finish built up in fine layers and burnished for a distinctive textured, light-reflective surface — typically used on feature walls and interiors.",
  },
  {
    q: "Can you help me choose the right finish?",
    a: "Yes. Tell us about the property and what you're looking for through the quote form, and we'll talk through the options suited to the job.",
  },
  {
    q: "How do I get a quote?",
    a: "Use the project estimator above for a ballpark figure, then submit your details through the form. We'll follow up from there.",
  },
  {
    q: "How long does a project take?",
    a: "Timescales depend on the size of the job, the surface condition and the finish selected. We'll give you a clearer idea once we understand the project.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="faq" className="bg-offwhite py-16 md:py-24 lg:py-28">
      <div ref={ref} className="container-edit max-w-3xl">
        <SectionHeading data-reveal eyebrow="FAQ" title="Common questions." className="max-w-2xl mb-8" />

        <div data-reveal className="divide-y divide-text-dark/12 border-t border-b border-text-dark/12">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-lg md:text-xl text-text-dark">{item.q}</span>
                    <span
                      className={`shrink-0 text-bronze transition-transform duration-base ${
                        open ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 0V16M0 8H16" stroke="currentColor" strokeWidth="1.3" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-base ease-out ${
                    open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-base text-text-dark/70 leading-relaxed max-w-xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
