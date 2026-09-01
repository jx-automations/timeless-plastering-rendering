import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

/**
 * The shared eyebrow + H2 (+ optional subtitle) heading pattern used at the top of
 * every content section. Centralising it keeps the site's editorial typography
 * consistent — every section heading shares the same scale, weight and spacing.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  className,
  ...rest
}: Props) {
  const isCenter = align === "center";
  const eyebrowColor = tone === "dark" ? "text-bronze" : "text-bronze-light";
  const titleColor = tone === "dark" ? "text-text-dark" : "text-text-light";
  const subColor = tone === "dark" ? "text-text-muted" : "text-text-muted-light";
  // A custom className (e.g. a narrower max-w-lg for a two-column layout) replaces the
  // default width constraint rather than stacking with it, to avoid two conflicting
  // max-width utilities landing on the same element.
  const widthClass = className ?? "max-w-2xl";

  return (
    <div
      className={`${isCenter ? "text-center mx-auto" : ""} ${widthClass}`}
      {...rest}
    >
      <p className={`eyebrow ${eyebrowColor} mb-3`}>{eyebrow}</p>
      <h2
        className={`font-display font-medium text-3xl md:text-4xl leading-[1.05] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${subColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
