"use client";

import { useRevealOnScroll } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OnSiteClip } from "./OnSiteClip";

// A handful of these reels were shot landscape (4:3) rather than the usual vertical
// phone orientation (9:16) — those clip numbers get their real ratio so the rail never
// crops them to fit a uniform vertical frame.
const landscapeClips = new Set([1, 3, 6, 9, 14]);

const clipCount = 15;
const clips = Array.from({ length: clipCount }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/video/clip-${n}.mp4`,
    poster: `/images/posters/clip-${n}.jpg`,
    label: `On-site clip ${i + 1}`,
    ratio: landscapeClips.has(i + 1) ? 720 / 960 : 720 / 1280,
  };
});

export function OnSite() {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="bg-charcoal-2 py-16 md:py-24 lg:py-28">
      <div ref={ref} className="container-edit">
        <SectionHeading
          data-reveal
          tone="light"
          eyebrow="On Site"
          title="Day-to-day, from the job."
          subtitle="Unedited clips straight from site — application, prep and the odd bit of banter. Tap a clip to play with sound."
          className="max-w-2xl mb-6"
        />

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
