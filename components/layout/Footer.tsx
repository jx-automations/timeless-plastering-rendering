import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-text-light">
      <div className="container-edit py-8 grid grid-cols-1 md:grid-cols-[1.3fr,1fr,1fr] gap-8">
        <div>
          <Image
            src="/images/logo-transparent.png"
            alt="Timeless Plastering & Rendering — all aspects of rendering & plastering"
            width={600}
            height={200}
            className="h-11 w-auto mb-4"
          />
          <p className="text-sm text-text-muted-light max-w-xs leading-relaxed">
            Specialist plastering, rendering and Venetian finishes across the North East.
          </p>
        </div>

        <div>
          <p className="eyebrow text-bronze mb-4">Navigate</p>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline text-sm text-text-light/85">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-bronze mb-4">Get in touch</p>
          <p className="text-sm text-text-muted-light leading-relaxed mb-4">
            Tell us about your project using the quote form and we&apos;ll come back to you.
          </p>
          <a href="#estimator" className="link-underline text-sm font-semibold text-text-light">
            Request a Quote →
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-edit py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-text-muted-light">
          <p>© {year} Timeless Plastering &amp; Rendering. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="link-underline">
              Privacy Policy
            </a>
            <a href="#" className="link-underline">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
