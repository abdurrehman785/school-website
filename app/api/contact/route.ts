import { NextResponse } from "next/server";

import { appendContactRow, isGoogleSheetsConfigured } from "@/lib/google-sheets";

export const runtime = "nodejs";

const LIMITS = {
  name: 200,
  phone: 80,
  email: 320,
  student: 200,
  message: 8000,
} as const;

function cleanStr(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

export async function POST(request: Request) {
  if (!isGoogleSheetsConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Server is not configured to save enquiries. Contact the site administrator." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid body." }, { status: 400 });
  }

  const o = body as Record<string, unknown>;
  const name = cleanStr(o.name, LIMITS.name);
  const phone = cleanStr(o.phone, LIMITS.phone);
  const email = cleanStr(o.email, LIMITS.email);
  const student = cleanStr(o.student, LIMITS.student);
  const message = cleanStr(o.message, LIMITS.message);

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Name, email, and message are required." }, { status: 400 });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    await appendContactRow({ name, phone, email, student, message });
  } catch (err) {
    console.error("[contact] Google Sheets append failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not save your enquiry. Please email the campus directly or try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
