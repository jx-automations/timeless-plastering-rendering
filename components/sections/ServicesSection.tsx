"use client";

import Image from "next/image";
import { useState } from "react";
import { useRevealOnScroll } from "@/lib/animations";

const services = [
  {
    number: "01",
    title: "Plastering",
    description:
      "Internal skim and plastering finished smooth and level, ready for decoration.",
    image: "/images/posters/clip-13.jpg",
    alt: "Sponge floating a freshly skimmed plaster wall in a hallway",
  },
  {
    number: "02",
    title: "Rendering",
    description:
      "Monocouche and silicone render systems applied and finished for lasting exterior performance.",
    image: "/images/project-render-detail.jpg",
    alt: "Close-up of render beadwork and a wavy float-finish texture",
  },
  {
    number: "03",
    title: "Venetian Plaster",
    description:
      "A decorative, hand-applied finish with depth and character for feature walls and interiors.",
    image: "/images/posters/clip-14.jpg",
    alt: "Interior wall preparation ahead of a decorative plaster finish",
  },
  {
    number: "04",
    title: "Specialist Finishes",
    description:
      "Beading, mesh reinforcement and detailing carried out to a consistent, considered standard.",
    image: "/images/posters/clip-11.jpg",
    alt: "Mesh reinforcement being applied at a render corner detail",
  },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="services" className="bg-charcoal text-text-light py-16 md:py-24 lg:py-28">
      <div ref={ref} className="container-edit">
        <div data-reveal className="mb-8 max-w-2xl">
          <p className="eyebrow text-bronze-light mb-3">Our Specialisms</p>
          <h2 className="font-display font-medium text-3xl md:text-4xl leading-[1.05]">
            Four disciplines, one standard.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-8 lg:gap-9 items-start">
          <ul data-reveal className="divide-y divide-white/10 border-t border-white/10">
            {services.map((service, i) => (
              <li key={service.number}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`w-full text-left py-6 flex items-start gap-5 group transition-colors duration-base ${
                    active === i ? "text-text-light" : "text-text-light/55"
                  }`}
                >
                  <span className="font-display text-xl mt-0.5 text-bronze-light">{service.number}</span>
                  <span>
                    <span className="block font-display text-2xl md:text-3xl leading-tight">
                      {service.title}
                    </span>
                    <span
                      className={`block mt-2 text-sm max-w-md transition-opacity duration-base opacity-90 lg:opacity-0 ${
                        active === i ? "lg:opacity-90" : ""
                      }`}
                    >
                      {service.description}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div data-reveal className="relative aspect-[4/5] w-full overflow-hidden hidden lg:block">
            {services.map((service, i) => (
              <Image
                key={service.number}
                src={service.image}
                alt={service.alt}
                fill
                sizes="45vw"
                className={`object-cover transition-opacity duration-slow ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
