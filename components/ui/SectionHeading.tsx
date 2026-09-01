interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "left", tone = "dark" }: Props) {
  const isCenter = align === "center";
  const eyebrowColor = tone === "dark" ? "text-bronze" : "text-bronze-light";
  const titleColor = tone === "dark" ? "text-text-dark" : "text-text-light";
  const subColor = tone === "dark" ? "text-text-muted" : "text-text-muted-light";

  return (
    <div className={isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
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
