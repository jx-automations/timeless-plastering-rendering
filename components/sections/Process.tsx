"use client";

import { useRevealOnScroll } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    description:
      "We learn about the property, the surfaces involved, your goals and the finish you're looking for.",
  },
  {
    number: "02",
    title: "Assess & Plan",
    description:
      "We consider the project requirements, preparation and the most suitable system or finish.",
  },
  {
    number: "03",
    title: "Prepare & Apply",
    description: "Careful preparation followed by professional application and finishing.",
  },
  {
    number: "04",
    title: "Final Finish",
    description:
      "We complete the work with attention to consistency, detail and presentation.",
  },
];

export function Process() {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="process" className="bg-offwhite py-16 md:py-24 lg:py-28">
      <div ref={ref} className="container-edit">
        <div data-reveal className="mb-8 max-w-2xl">
          <p className="eyebrow text-bronze mb-3">The Process</p>
          <h2 className="font-display font-medium text-3xl md:text-4xl leading-[1.05] text-text-dark">
            A considered approach from first conversation to final finish.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              data-reveal
              className={`pt-5 border-t border-text-dark/15 ${
                i > 0 ? "md:border-l md:border-t-0 md:pt-0 md:pl-6" : ""
              }`}
            >
              <span className="font-display text-xl text-bronze">{step.number}</span>
              <h3 className="mt-3 font-display text-xl md:text-2xl leading-tight text-text-dark">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-text-dark/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
