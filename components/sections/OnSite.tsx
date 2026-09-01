"use client";

import { useRevealOnScroll } from "@/lib/animations";
import { OnSiteClip } from "./OnSiteClip";

const clipCount = 15;
const clips = Array.from({ length: clipCount }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/video/clip-${n}.mp4`,
    poster: `/images/posters/clip-${n}.jpg`,
    label: `On-site clip ${i + 1}`,
  };
});

export function OnSite() {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="bg-charcoal-2 py-16 md:py-24 lg:py-28">
      <div ref={ref} className="container-edit">
        <div data-reveal className="mb-6 max-w-2xl">
          <p className="eyebrow text-bronze-light mb-3">On Site</p>
          <h2 className="font-display font-medium text-3xl md:text-4xl leading-[1.05] text-text-light">
            Day-to-day, from the job.
          </h2>
          <p className="mt-4 text-text-muted-light leading-relaxed">
            Unedited clips straight from site — application, prep and the odd bit of
            banter. Tap a clip to play with sound.
          </p>
        </div>

        <div
          data-reveal
          className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-proximity pb-3 -mx-1 px-1"
        >
          {clips.map((clip) => (
            <OnSiteClip key={clip.src} {...clip} className="snap-start" />
          ))}
        </div>
      </div>
    </section>
  );
}
