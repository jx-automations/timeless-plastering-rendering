"use client";

import { useRevealOnScroll } from "@/lib/animations";
import { PortfolioItem } from "./PortfolioItem";

const items = [
  {
    src: "/images/project-finished-render.jpg",
    alt: "Finished rear extension with smooth painted render and brick soldier-course detail",
    category: "Rendering",
    className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
  },
  {
    src: "/images/project-basecoat.jpg",
    alt: "Base-coat rendering applied to a house extension, mid-project",
    category: "Rendering",
    className: "aspect-[4/3]",
  },
  {
    src: "/images/project-render-detail.jpg",
    alt: "Close-up of render beadwork and float-finish texture",
    category: "Rendering",
    className: "aspect-[4/3]",
  },
  {
    src: "/images/posters/clip-09.jpg",
    alt: "Extension with roller-shutter garage and rendered walls",
    category: "Rendering",
    className: "aspect-[4/3]",
  },
  {
    src: "/images/posters/clip-14.jpg",
    alt: "Completed extension exterior with rendered finish",
    category: "Rendering",
    className: "aspect-[4/3]",
  },
  {
    src: "/images/posters/clip-13.jpg",
    alt: "Plastering and floating a hallway wall to a smooth finish",
    category: "Plastering",
    className: "aspect-[4/3]",
  },
];

export function Portfolio() {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="work" className="bg-offwhite py-16 md:py-24 lg:py-28">
      <div ref={ref} className="container-edit">
        <div data-reveal className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="eyebrow text-bronze mb-3">Selected Work</p>
            <h2 className="font-display font-medium text-3xl md:text-4xl leading-[1.05] text-text-dark">
              A closer look at the finishes.
            </h2>
          </div>
        </div>

        <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[220px]">
          {items.map((item) => (
            <PortfolioItem key={item.src} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
