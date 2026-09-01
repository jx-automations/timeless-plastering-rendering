"use client";

interface Option {
  value: string;
  label: string;
}

interface Props {
  question: string;
  options: Option[];
  selected?: string;
  onSelect: (value: string) => void;
}

export function EstimatorStep({ question, options, selected, onSelect }: Props) {
  return (
    <div>
      <h3 className="font-display text-2xl md:text-3xl text-text-light leading-tight mb-6">
        {question}
      </h3>
      <div
        role="radiogroup"
        aria-label={question}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {options.map((option) => {
          const isSelected = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(option.value)}
              className={`text-left px-5 py-4 border transition-colors duration-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-bronze ${
                isSelected
                  ? "border-bronze bg-bronze/15 text-text-light"
                  : "border-white/20 text-text-light/85 hover:border-white/50"
              }`}
            >
              <span className="text-sm md:text-base font-medium">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
