/**
 * ============================================================================
 * INTERNAL PLACEHOLDER PRICING — NOT VERIFIED CLIENT RATES
 * ============================================================================
 * Every number in this file is an estimate placeholder invented to make the
 * calculator functional, NOT a confirmed Timeless Plastering & Rendering
 * rate. The business owner must review and replace these figures with real
 * pricing before the calculator goes live. Nothing here should be presented
 * to a customer as a verified price — the UI always frames the output as a
 * ballpark estimate, never a quotation.
 *
 * All calculator math lives in this one file so it can be edited without
 * touching any component code.
 * ============================================================================
 */

export type WorkType = "plastering" | "rendering" | "venetian" | "unsure";
export type PropertyType = "house" | "flat" | "extension" | "commercial" | "other";
export type AreaRange = "under20" | "20to50" | "50to100" | "100to200" | "over200";
export type Condition = "good" | "minor" | "significant" | "unsure";
export type FinishLevel = "standard" | "premium" | "specialist";

export const workTypeOptions: { value: WorkType; label: string }[] = [
  { value: "plastering", label: "Plastering" },
  { value: "rendering", label: "Rendering" },
  { value: "venetian", label: "Venetian Plaster" },
  { value: "unsure", label: "Not sure" },
];

export const propertyTypeOptions: { value: PropertyType; label: string }[] = [
  { value: "house", label: "House" },
  { value: "flat", label: "Flat / Apartment" },
  { value: "extension", label: "Extension" },
  { value: "commercial", label: "Commercial" },
  { value: "other", label: "Other" },
];

export const areaRangeOptions: { value: AreaRange; label: string }[] = [
  { value: "under20", label: "Under 20 m²" },
  { value: "20to50", label: "20–50 m²" },
  { value: "50to100", label: "50–100 m²" },
  { value: "100to200", label: "100–200 m²" },
  { value: "over200", label: "200+ m²" },
];

export const conditionOptions: { value: Condition; label: string }[] = [
  { value: "good", label: "Good condition / ready for finishing" },
  { value: "minor", label: "Minor preparation needed" },
  { value: "significant", label: "Significant preparation needed" },
  { value: "unsure", label: "Not sure" },
];

export const finishLevelOptions: { value: FinishLevel; label: string }[] = [
  { value: "standard", label: "Standard" },
  { value: "premium", label: "Premium" },
  { value: "specialist", label: "Specialist / Venetian" },
];

/** Base £ per m² by work type (unsure defaults to a blended plastering/rendering rate). */
const baseRatePerSqm: Record<WorkType, number> = {
  plastering: 28,
  rendering: 42,
  venetian: 85,
  unsure: 40,
};

/** Representative area (m²) used for each banded range, for a single ballpark figure per band. */
const areaRangeSqm: Record<AreaRange, { low: number; high: number }> = {
  under20: { low: 10, high: 20 },
  "20to50": { low: 20, high: 50 },
  "50to100": { low: 50, high: 100 },
  "100to200": { low: 100, high: 200 },
  over200: { low: 200, high: 260 },
};

/** Multiplier applied for property type (access/complexity proxy). */
const propertyMultipliers: Record<PropertyType, number> = {
  house: 1,
  flat: 1.05,
  extension: 1.1,
  commercial: 0.95,
  other: 1,
};

/** Multiplier applied for existing surface condition (prep work proxy). */
const conditionMultipliers: Record<Condition, number> = {
  good: 1,
  minor: 1.15,
  significant: 1.35,
  unsure: 1.15,
};

/** Multiplier applied for the requested finish level. */
const finishMultipliers: Record<FinishLevel, number> = {
  standard: 1,
  premium: 1.2,
  specialist: 1.45,
};

export interface EstimatorAnswers {
  workType: WorkType;
  propertyType: PropertyType;
  areaRange: AreaRange;
  condition: Condition;
  finishLevel: FinishLevel;
}

export interface EstimateResult {
  low: number;
  high: number;
}

function roundToNearest(value: number, nearest: number) {
  return Math.round(value / nearest) * nearest;
}

export function calculateEstimate(answers: EstimatorAnswers): EstimateResult {
  const rate = baseRatePerSqm[answers.workType];
  const area = areaRangeSqm[answers.areaRange];
  const multiplier =
    propertyMultipliers[answers.propertyType] *
    conditionMultipliers[answers.condition] *
    finishMultipliers[answers.finishLevel];

  const low = rate * area.low * multiplier;
  const high = rate * area.high * multiplier;

  return {
    low: roundToNearest(low, 50),
    high: roundToNearest(high, 50),
  };
}

export function formatGBP(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}
