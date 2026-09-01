const items = [
  {
    title: "Specialist Finishes",
    detail: "Plastering · Rendering · Venetian",
  },
  {
    title: "Quality-Led",
    detail: "Preparation · Application · Finish",
  },
  {
    title: "North East",
    detail: "Residential & property work",
  },
  {
    title: "Request a Quote",
    detail: "Clear next steps",
    href: "#estimator",
  },
];

export function TrustStrip() {
  return (
    <section className="bg-charcoal-2 border-t border-white/10">
      <div className="container-edit grid grid-cols-2 md:grid-cols-4 gap-y-6">
        {items.map((item, i) => {
          const content = (
            <div className={`py-6 md:py-7 ${i > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""} ${i % 2 === 1 ? "pl-4" : ""}`}>
              <p className="text-sm font-semibold tracking-wide uppercase text-text-light">
                {item.title}
              </p>
              <p className="mt-1.5 text-xs text-text-muted-light">{item.detail}</p>
            </div>
          );
          return item.href ? (
            <a key={item.title} href={item.href} className="group">
              <div className="transition-transform duration-base group-hover:translate-x-0.5">{content}</div>
            </a>
          ) : (
            <div key={item.title}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}
