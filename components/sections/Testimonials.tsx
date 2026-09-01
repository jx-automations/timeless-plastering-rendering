"use client";

import { useRevealOnScroll } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reviews = [
  {
    name: "Angela",
    text: "Excellent service from start to finish. Polite, professional & communicative throughout the job. The plastered walls were as smooth as glass, showcasing the high quality of workmanship. The job was completed efficiently with great care taken to leave everything clean & tidy. No mess was left anywhere in the house & everything was cleaned up afterwards. The quote was fair & represented excellent value for money. I would highly recommend their services & happily use them again.",
  },
  {
    name: "Beth Starke",
    text: "Timeless Plastering & Rendering were from start to finish flawless. I couldn't fault the service we received. The quality of the work was top notch. They were professional throughout and we had no complaints whatsoever. They paid attention to detail, made sure everything was spotless after their work was finished.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-bronze" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0L10.09 5.26L16 5.82L11.5 9.62L12.94 15.4L8 12.3L3.06 15.4L4.5 9.62L0 5.82L5.91 5.26L8 0Z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="bg-offwhite py-16 md:py-24 lg:py-28">
      <div ref={ref} className="container-edit">
        <SectionHeading
          data-reveal
          eyebrow="What Clients Say"
          title="Genuine feedback from finished projects."
          className="max-w-2xl mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review) => (
            <figure
              key={review.name}
              data-reveal
              className="bg-warm-neutral p-6 md:p-8 border-t-2 border-bronze"
            >
              <Stars />
              <blockquote className="mt-4 text-lg md:text-xl font-display leading-snug text-text-dark">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold tracking-wide uppercase text-text-dark/70">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
