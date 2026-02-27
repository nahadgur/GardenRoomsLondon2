import { NextResponse } from "next/server";

const APPS_SCRIPT_EXEC_URL =
  process.env.APPS_SCRIPT_EXEC_URL ||
  "https://script.google.com/macros/library/d/16jTMgsYwZ74_VDUuUW2ZMZklTepH3OahYMgaircBFlrIMkGF8QlW0XvP/4";

type LeadPayload = {
  name?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  message?: string;
  notes?: string;
  source?: string;
  service?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadPayload;

    const payloadToSend = {
      name: (body.name || body.fullName || "").toString().trim(),
      email: (body.email || "").toString().trim(),
      phone: (body.phone || body.mobile || "").toString().trim(),
      message: (body.message || body.notes || "").toString().trim(),
      source: (body.source || "Website").toString().trim(),
      service: (body.service || "").toString().trim(),
    };

    const appsScriptRes = await fetch(APPS_SCRIPT_EXEC_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payloadToSend),
      cache: "no-store",
    });

    const rawText = await appsScriptRes.text();
    let appsScriptJson: any = null;
    try { appsScriptJson = JSON.parse(rawText); } catch {}

    if (appsScriptJson?.ok === true) {
      return NextResponse.json({ ok: true, message: "Lead submitted successfully." }, { status: 200 });
    }

    // Return the actual Apps Script error to the form so you can see it
    return NextResponse.json(
      {
        ok: false,
        error: appsScriptJson?.error || rawText?.slice(0, 500) || "Apps Script call failed.",
      },
      { status: 502 }
    );

  } catch (err: any) {
    return NextResponse.json({ ok: false, error: String(err?.message || err) }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, message: "Lead endpoint is up. Use POST to submit leads." });
}
