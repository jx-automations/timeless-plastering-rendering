import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "2.5rem" },
    },
    extend: {
      colors: {
        charcoal: "#11110F",
        "charcoal-2": "#1C1C19",
        stone: "#C9C0B2",
        "warm-neutral": "#E8E1D5",
        offwhite: "#F4F1EA",
        bronze: "#A98F68",
        "bronze-light": "#C4AD87",
        "text-dark": "#11110F",
        "text-light": "#F4F1EA",
        "text-muted": "#8A8578",
        "text-muted-light": "rgba(244,241,234,0.62)",
        "border-line": "rgba(17,17,15,0.1)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.25rem", { lineHeight: "1.5" }],
        xl: ["1.5rem", { lineHeight: "1.3" }],
        "2xl": ["2rem", { lineHeight: "1.2" }],
        "3xl": ["3rem", { lineHeight: "1.1" }],
        "4xl": ["4rem", { lineHeight: "1.05" }],
        "5xl": ["5.5rem", { lineHeight: "1" }],
      },
      maxWidth: {
        content: "1400px",
        prose: "68ch",
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "4px",
        md: "8px",
        full: "9999px",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "400ms",
      },
      boxShadow: {
        subtle: "0 8px 30px rgba(17,17,15,0.08)",
        card: "0 20px 60px rgba(17,17,15,0.12)",
      },
      letterSpacing: {
        widest: ".22em",
      },
    },
  },
  plugins: [],
};

export default config;
