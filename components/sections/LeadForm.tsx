"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { EstimatorAnswers } from "@/lib/pricingConfig";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  postcode: z.string().min(2, "Enter your postcode"),
  projectType: z.string().optional(),
  message: z.string().min(10, "Tell us a little about the project (10+ characters)"),
  preferredContact: z.enum(["email", "phone"]).default("email"),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  calculatorSummary?: {
    answers: EstimatorAnswers;
    estimate: { low: number; high: number };
  } | null;
  compact?: boolean;
}

const fieldClass =
  "w-full bg-transparent border border-current/25 focus:border-bronze px-4 py-3 text-sm placeholder:text-current/40 transition-colors duration-base outline-none";

export function LeadForm({ calculatorSummary, compact = false }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { preferredContact: "email" },
  });

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, calculator: calculatorSummary ?? null }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-8 text-center" role="status">
        <p className="font-display text-2xl text-text-light mb-2">Thank you.</p>
        <p className="text-sm text-text-muted-light max-w-sm mx-auto">
          Your enquiry has been received. We&apos;ll come back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-text-light" noValidate>
      {calculatorSummary && (
        <div className="mb-6 p-4 border border-white/15 text-sm text-text-muted-light">
          <p className="text-xs tracking-widest uppercase text-bronze-light mb-1">
            Based on your estimate
          </p>
          <p>
            Estimated range: {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(calculatorSummary.estimate.low)} –{" "}
            {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(calculatorSummary.estimate.high)}
          </p>
        </div>
      )}

      <div className={`grid grid-cols-1 ${compact ? "" : "sm:grid-cols-2"} gap-4`}>
        <div>
          <label htmlFor="name" className="block text-xs tracking-wide uppercase text-text-muted-light mb-1.5">
            Name
          </label>
          <input id="name" className={fieldClass} {...register("name")} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs tracking-wide uppercase text-text-muted-light mb-1.5">
            Email
          </label>
          <input id="email" type="email" className={fieldClass} {...register("email")} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs tracking-wide uppercase text-text-muted-light mb-1.5">
            Phone
          </label>
          <input id="phone" type="tel" className={fieldClass} {...register("phone")} aria-describedby={errors.phone ? "phone-error" : undefined} />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-400">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="postcode" className="block text-xs tracking-wide uppercase text-text-muted-light mb-1.5">
            Postcode
          </label>
          <input id="postcode" className={fieldClass} {...register("postcode")} aria-describedby={errors.postcode ? "postcode-error" : undefined} />
          {errors.postcode && (
            <p id="postcode-error" className="mt-1 text-xs text-red-400">
              {errors.postcode.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-xs tracking-wide uppercase text-text-muted-light mb-1.5">
            Project details
          </label>
          <textarea id="message" rows={4} className={fieldClass} {...register("message")} aria-describedby={errors.message ? "message-error" : undefined} />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="block text-xs tracking-wide uppercase text-text-muted-light mb-2">
            Preferred contact method
          </legend>
          <div className="flex gap-6 text-sm">
            <label className="inline-flex items-center gap-2">
              <input type="radio" value="email" {...register("preferredContact")} defaultChecked />
              Email
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" value="phone" {...register("preferredContact")} />
              Phone
            </label>
          </div>
        </fieldset>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-red-400">
          Something went wrong sending your enquiry. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase bg-bronze text-charcoal hover:bg-bronze-light disabled:opacity-60 transition-colors duration-base"
      >
        {status === "submitting" ? "Sending…" : "Request My Quote"}
      </button>
    </form>
  );
}
