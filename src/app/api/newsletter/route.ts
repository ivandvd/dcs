import { NextResponse } from "next/server";

type Payload = {
  email?: string;
  locale?: string;
  website?: string; // honeypot
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

  const email = String(body.email ?? "")
    .trim()
    .toLowerCase();
  if (!email || email.length > 254 || !EMAIL.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 422 });
  }

  // TODO: add the subscriber to the client's mailing provider (e.g. Mailchimp, MailerLite,
  // Brevo or Resend Audiences) using an API key from the environment, ideally with
  // double opt-in. Until then the address is only logged on the server.
  console.log("[newsletter]", { email, locale: body.locale === "pl" ? "pl" : "en", at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
