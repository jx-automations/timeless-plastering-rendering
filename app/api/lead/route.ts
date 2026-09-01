import { NextResponse } from "next/server";
import { z } from "zod";

// TODO(client): this endpoint currently only validates and logs submissions.
// Before go-live, wire it up to a real destination — e.g. an email service
// (Resend, Postmark) or a CRM webhook — using the business's actual contact
// details, which were not available at build time.

const payloadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  postcode: z.string().min(2),
  message: z.string().min(10),
  preferredContact: z.enum(["email", "phone"]).default("email"),
  calculator: z
    .object({
      answers: z.record(z.string()),
      estimate: z.object({ low: z.number(), high: z.number() }),
    })
    .nullable()
    .optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = payloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  // Structured log so the submission is visible in server logs until a real
  // delivery destination (email/CRM) is configured.
   
  console.log("[lead-submission]", JSON.stringify(parsed.data, null, 2));

  return NextResponse.json({ ok: true });
}
