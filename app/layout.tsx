import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://www.timelessplasteringandrendering.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Timeless Plastering & Rendering | Plastering, Rendering & Venetian Finishes",
  description:
    "Specialist plastering, rendering and Venetian plaster finishes across the North East. Careful preparation, professional application and clean, consistent results.",
  openGraph: {
    title: "Timeless Plastering & Rendering",
    description:
      "Specialist plastering, rendering and Venetian plaster finishes across the North East.",
    url: siteUrl,
    siteName: "Timeless Plastering & Rendering",
    images: [{ url: "/images/project-finished-render.jpg", width: 1200, height: 1600 }],
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Timeless Plastering & Rendering",
  description:
    "Specialist plastering, rendering and Venetian plaster finishes across the North East.",
  areaServed: "North East England",
  image: `${siteUrl}/images/project-finished-render.jpg`,
  priceRange: "££",
  knowsAbout: ["Plastering", "Rendering", "Monocouche render", "Silicone render", "Venetian plaster"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
           
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
