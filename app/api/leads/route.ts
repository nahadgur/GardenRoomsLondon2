import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  message?: string;
  notes?: string;
  source?: string;
};

export async function POST(req: Request) {
  try {
    const APPS_SCRIPT_EXEC_URL = process.env.APPS_SCRIPT_EXEC_URL;

    if (!APPS_SCRIPT_EXEC_URL) {
      return NextResponse.json(
        { ok: false, error: "Missing APPS_SCRIPT_EXEC_URL environment variable." },
        { status: 500 }
      );
    }

    const body = (await req.json()) as LeadPayload;

    // Normalize fields a bit (optional, but helps consistency)
    const payloadToSend = {
      name: (body.name || body.fullName || "").toString().trim(),
      email: (body.email || "").toString().trim(),
      phone: (body.phone || body.mobile || "").toString().trim(),
      message: (body.message || body.notes || "").toString().trim(),
      source: (body.source || "Website").toString().trim(),
    };

    const appsScriptRes = await fetch(APPS_SCRIPT_EXEC_URL, {
      method: "POST",
      // Apps Script Web Apps commonly work best with text/plain JSON.
      // If your parsePayload_ expects application/json, switch this to application/json.
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payloadToSend),
      // no-store helps avoid any caching weirdness
      cache: "no-store",
    });

    let appsScriptJson: any = null;
    const rawText = await appsScriptRes.text();

    // Try to parse JSON if possible, but keep raw text too (useful when Apps Script returns HTML)
    try {
      appsScriptJson = JSON.parse(rawText);
    } catch {
      appsScriptJson = null;
    }

    // Treat "ok:false" as failure even if HTTP is 200
    const okFromScript = appsScriptJson?.ok === true;

    if (!appsScriptRes.ok || !okFromScript) {
      return NextResponse.json(
        {
          ok: false,
          error: "Apps Script call failed.",
          appsScriptStatus: appsScriptRes.status,
          appsScriptOk: appsScriptRes.ok,
          appsScriptParsed: appsScriptJson,
          appsScriptRaw: rawText?.slice(0, 2000), // avoid giant dumps
          hint:
            "Check that your Apps Script is deployed as a Web App (/s/.../exec), access is set correctly, and doPost parses the posted body.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Lead submitted successfully.",
        appsScript: appsScriptJson,
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        ok: false,
        error: String(err?.message || err),
      },
      { status: 500 }
    );
  }
}

// Optional: If you want GET to return a friendly message instead of 405
export async function GET() {
  return NextResponse.json(
    { ok: true, message: "Lead endpoint is up. Use POST to submit leads." },
    { status: 200 }
  );
}
