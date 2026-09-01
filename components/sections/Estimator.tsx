"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  areaRangeOptions,
  calculateEstimate,
  conditionOptions,
  finishLevelOptions,
  propertyTypeOptions,
  workTypeOptions,
  type EstimatorAnswers,
} from "@/lib/pricingConfig";
import { prefersReducedMotion } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EstimatorStep } from "./EstimatorStep";
import { EstimatorResult } from "./EstimatorResult";
import { LeadForm } from "./LeadForm";

type AnswerKey = keyof EstimatorAnswers;

const steps: { key: AnswerKey; question: string; options: { value: string; label: string }[] }[] = [
  { key: "workType", question: "What type of work do you need?", options: workTypeOptions },
  { key: "propertyType", question: "What type of property is it?", options: propertyTypeOptions },
  { key: "areaRange", question: "Approximate area", options: areaRangeOptions },
  { key: "condition", question: "What is the current surface / condition?", options: conditionOptions },
  { key: "finishLevel", question: "What level of finish are you looking for?", options: finishLevelOptions },
];

const totalSteps = steps.length;

export function Estimator() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<EstimatorAnswers>>({});
  const [phase, setPhase] = useState<"steps" | "result" | "form">("steps");
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    gsap.fromTo(el, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  }, [stepIndex, phase]);

  function handleSelect(key: AnswerKey, value: string) {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    window.setTimeout(() => {
      if (stepIndex < totalSteps - 1) {
        setStepIndex(stepIndex + 1);
      } else {
        setPhase("result");
      }
    }, 220);
  }

  function handleBack() {
    if (phase === "result") {
      setPhase("steps");
      return;
    }
    if (phase === "form") {
      setPhase("result");
      return;
    }
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  }

  const currentStep = steps[stepIndex];
  const estimate =
    phase !== "steps" && isComplete(answers) ? calculateEstimate(answers as EstimatorAnswers) : null;

  const showBack = phase === "form" || phase === "result" || stepIndex > 0;

  return (
    <section id="estimator" className="bg-charcoal text-text-light py-16 md:py-24 lg:py-28">
      <div className="container-edit">
        <SectionHeading
          tone="light"
          eyebrow="Project Estimator"
          title="What's your project likely to cost?"
          subtitle="Answer five quick questions for an instant ballpark estimate — no commitment, no waiting on a callback."
          className="max-w-2xl mb-8"
        />

        <div className="max-w-xl bg-charcoal-2 border border-white/10 p-6 md:p-9">
          {phase === "steps" && (
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-2" aria-hidden="true">
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors duration-base ${
                      i <= stepIndex ? "bg-bronze" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs tracking-widest text-text-muted-light">
                {String(stepIndex + 1).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}
              </span>
            </div>
          )}

          {showBack && (
            <button
              type="button"
              onClick={handleBack}
              className="mb-6 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-text-muted-light hover:text-text-light transition-colors duration-base"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M13 7H1M1 7L6.5 1.5M1 7L6.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
            </button>
          )}

          <div ref={panelRef} key={`${phase}-${stepIndex}`}>
            {phase === "steps" && (
              <EstimatorStep
                question={currentStep.question}
                options={currentStep.options}
                selected={answers[currentStep.key]}
                onSelect={(value) => handleSelect(currentStep.key, value)}
              />
            )}

            {phase === "result" && estimate && (
              <EstimatorResult
                low={estimate.low}
                high={estimate.high}
                onContinue={() => setPhase("form")}
              />
            )}

            {phase === "form" && estimate && (
              <LeadForm
                calculatorSummary={{ answers: answers as EstimatorAnswers, estimate }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function isComplete(answers: Partial<EstimatorAnswers>): answers is EstimatorAnswers {
  return Boolean(
    answers.workType && answers.propertyType && answers.areaRange && answers.condition && answers.finishLevel
  );
}
