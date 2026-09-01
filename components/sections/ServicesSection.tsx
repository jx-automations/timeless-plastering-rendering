"use client";

import Image from "next/image";
import { useState } from "react";
import { useRevealOnScroll } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useServiceModal } from "./ServiceModalProvider";

const services = [
  {
    id: "plastering" as const,
    number: "01",
    title: "Plastering",
    description:
      "Internal skim and plastering finished smooth and level, ready for decoration.",
    image: "/images/posters/clip-15.jpg",
    ratio: 800 / 1422,
    alt: "Sponge floating a freshly skimmed plaster wall in a hallway",
  },
  {
    id: "rendering" as const,
    number: "02",
    title: "Rendering",
    description:
      "Monocouche and silicone render systems applied and finished for lasting exterior performance.",
    image: "/images/project-render-detail.jpg",
    ratio: 1320 / 1760,
    alt: "Close-up of render beadwork and a wavy float-finish texture",
  },
  {
    id: "venetian" as const,
    number: "03",
    title: "Venetian Plaster",
    description:
      "A decorative, hand-applied finish with depth and character for feature walls and interiors.",
    image: "/images/posters/clip-14.jpg",
    ratio: 800 / 1066,
    alt: "A finished Timeless render project — the same hand-finished attention carries into Venetian work",
  },
  {
    id: "specialist" as const,
    number: "04",
    title: "Specialist Finishes",
    description:
      "Beading, mesh reinforcement and detailing carried out to a consistent, considered standard.",
    image: "/images/posters/clip-11.jpg",
    ratio: 800 / 1422,
    alt: "Mesh reinforcement being applied at a render corner detail",
  },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const ref = useRevealOnScroll<HTMLDivElement>();
  const { openService } = useServiceModal();

  return (
    <section id="services" className="bg-charcoal text-text-light py-16 md:py-24 lg:py-28">
      <div ref={ref} className="container-edit">
        <SectionHeading
          data-reveal
          tone="light"
          eyebrow="Our Specialisms"
          title="Four disciplines, one standard."
          className="max-w-2xl mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-8 lg:gap-9 items-start">
          <ul data-reveal className="divide-y divide-white/10 border-t border-white/10">
            {services.map((service, i) => (
              <li key={service.number}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => openService(service.id)}
                  aria-label={`View ${service.title} — Timeless Plastering & Rendering services`}
                  className={`w-full text-left py-6 flex items-start gap-5 group transition-colors duration-base ${
                    active === i ? "text-text-light" : "text-text-light/55"
                  }`}
                >
                  <span className="font-display text-xl mt-0.5 text-bronze-light">{service.number}</span>
                  <span className="flex-1">
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
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className={`mt-1.5 shrink-0 text-bronze-light transition-transform duration-base ${
                      active === i ? "translate-x-1" : ""
                    }`}
                  >
                    <path
                      d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <div
            data-reveal
            className="relative w-full max-h-[640px] overflow-hidden hidden lg:block transition-[aspect-ratio] duration-slow ease-out"
            style={{ aspectRatio: services[active].ratio }}
          >
            {/* Each service photo keeps its own true aspect ratio — the container resizes to
                match whichever image is active, so nothing is ever cropped to fit a mismatched
                frame (object-cover here only ever fills a frame that already matches it). */}
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
