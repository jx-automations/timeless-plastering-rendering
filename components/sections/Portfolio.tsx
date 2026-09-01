"use client";

import { useRevealOnScroll } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useServiceModal } from "./ServiceModalProvider";
import { PortfolioItem } from "./PortfolioItem";
import type { ServiceId } from "@/lib/services";

const items: {
  src: string;
  alt: string;
  category: string;
  serviceId: ServiceId;
  width: number;
  height: number;
}[] = [
  {
    src: "/images/project-finished-render.jpg",
    alt: "Finished rear extension with smooth painted render and brick soldier-course detail",
    category: "Rendering",
    serviceId: "rendering",
    width: 3024,
    height: 4032,
  },
  {
    src: "/images/project-basecoat.jpg",
    alt: "Base-coat rendering applied to a house extension, mid-project",
    category: "Rendering",
    serviceId: "rendering",
    width: 1320,
    height: 1760,
  },
  {
    src: "/images/project-render-detail.jpg",
    alt: "Close-up of render beadwork and float-finish texture",
    category: "Rendering",
    serviceId: "rendering",
    width: 1320,
    height: 1760,
  },
  {
    src: "/images/posters/clip-09.jpg",
    alt: "Extension with roller-shutter garage and rendered walls",
    category: "Rendering",
    serviceId: "rendering",
    width: 800,
    height: 1066,
  },
  {
    src: "/images/posters/clip-14.jpg",
    alt: "Completed extension exterior with rendered finish",
    category: "Rendering",
    serviceId: "rendering",
    width: 800,
    height: 1066,
  },
  {
    src: "/images/posters/clip-15.jpg",
    alt: "Plastering and floating a hallway wall to a smooth finish",
    category: "Plastering",
    serviceId: "plastering",
    width: 800,
    height: 1422,
  },
];

export function Portfolio() {
  const ref = useRevealOnScroll<HTMLDivElement>();
  const { openService } = useServiceModal();

  return (
    <section id="work" className="bg-offwhite py-16 md:py-24 lg:py-28">
      <div ref={ref} className="container-edit">
        <SectionHeading
          data-reveal
          eyebrow="Selected Work"
          title="A closer look at the finishes."
          className="max-w-2xl mb-8"
        />

        {/* True masonry: each photo's own aspect ratio drives its column height, so the
            full frame of every project photo stays visible — no forced-ratio cropping. */}
        <div data-reveal className="columns-2 md:columns-4 gap-3 md:gap-4">
          {items.map((item) => (
            <PortfolioItem
              key={item.src}
              {...item}
              onOpen={() => openService(item.serviceId)}
              className="mb-3 md:mb-4 break-inside-avoid"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
