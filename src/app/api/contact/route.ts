import { NextResponse } from "next/server";

type Payload = {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  /** "contact-form" | "configurator" */
  source?: string;
  /** configurator selections, already summarised as text */
  summary?: string;
  website?: string; // honeypot
  /** "en" or "pl": the language the visitor used, so the office can reply in it */
  locale?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // bot filled the honeypot

  const name = (body.fullName ?? `${body.firstName ?? ""} ${body.lastName ?? ""}`).trim();
  const isConfigurator = body.source === "configurator";

  const missing: string[] = [];
  if (!name) missing.push("name");
  if (!String(body.email ?? "").trim()) missing.push("email");
  if (!String(body.phone ?? "").trim()) missing.push("phone");
  if (!isConfigurator) {
    if (!String(body.service ?? "").trim()) missing.push("service");
    if (!String(body.message ?? "").trim()) missing.push("message");
  }
  if (missing.length) {
    return NextResponse.json({ ok: false, error: "Please fill in all required fields.", missing }, { status: 422 });
  }
  if (!EMAIL.test(body.email ?? "")) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 422 });
  }

  // TODO: deliver the enquiry. Options: Resend / Postmark API to biuro@dcs-drone.com,
  // or the client's CRM webhook. Until then the enquiry is logged on the server.
  console.log(`[${isConfigurator ? "configurator" : "contact"}]`, {
    name,
    email: body.email,
    phone: body.phone,
    company: body.company,
    service: body.service ?? (isConfigurator ? "System configuration" : undefined),
    summary: body.summary,
    message: body.message,
    locale: body.locale === "pl" ? "pl" : "en",
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
