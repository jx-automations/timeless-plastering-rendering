"use client";

import { formatGBP } from "@/lib/pricingConfig";

interface Props {
  low: number;
  high: number;
  onContinue: () => void;
}

export function EstimatorResult({ low, high, onContinue }: Props) {
  return (
    <div>
      <p className="eyebrow text-bronze-light mb-3">Your Ballpark Estimate</p>
      <p className="font-display text-4xl md:text-5xl text-text-light leading-none">
        {formatGBP(low)} – {formatGBP(high)}
      </p>
      <p className="mt-5 max-w-md text-sm text-text-muted-light leading-relaxed">
        This is an initial estimate, not a fixed quotation. Final pricing depends on
        site condition, access, preparation requirements, materials and the exact
        finish selected.
      </p>
      <button
        type="button"
        onClick={onContinue}
        className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase bg-bronze text-charcoal hover:bg-bronze-light transition-colors duration-base"
      >
        Get My Project Quotation
      </button>
    </div>
  );
}
