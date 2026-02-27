import { NextResponse } from "next/server";

const APPS_SCRIPT_EXEC_URL =
  process.env.APPS_SCRIPT_EXEC_URL ||
  "https://script.google.com/macros/s/AKfycby0H_SEuwr9h-lExDoYHhCLD_vZrCEbQ-xFKdC4Ie1-h7r5vxnHx-1V32tG_GAtgvap2w/exec";

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

    let appsScriptJson: any = null;
    const rawText = await appsScriptRes.text();

    try {
      appsScriptJson = JSON.parse(rawText);
    } catch {
      appsScriptJson = null;
    }

    const okFromScript = appsScriptJson?.ok === true;

    if (!appsScriptRes.ok || !okFromScript) {
      return NextResponse.json(
        {
          ok: false,
          error: "Apps Script call failed.",
          appsScriptStatus: appsScriptRes.status,
          appsScriptParsed: appsScriptJson,
          appsScriptRaw: rawText?.slice(0, 2000),
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: "Lead submitted successfully." }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: String(err?.message || err) }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, message: "Lead endpoint is up. Use POST to submit leads." }, { status: 200 });
}
