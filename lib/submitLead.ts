// src/lib/submitLead.ts
// Sends your lead form data to your Google Apps Script Web App,
// which then writes it into your Google Sheet.
//
// Apps Script Web App (your macro /exec):
// https://script.google.com/macros/s/AKfycby0H_SEuwr9h-lExDoYHhCLD_vZrCEbQ-xFKdC4Iel-h7r5vxnHx-1V32tG_GAtgvap2w/exec
//
// Target Google Sheet (for reference/humans; not directly used by the website):
// https://docs.google.com/spreadsheets/d/1ALrkBKdsFmyhzjwJJ-tq9jez5lWapOzb_oXAHxEYFCs/edit

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  message?: string;

  // Optional extras (safe to include; your Apps Script can ignore unknown fields)
  source?: string;       // e.g. "Website"
  page?: string;         // window.location.href
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  user_agent?: string;
};

const APPS_SCRIPT_EXEC_URL =
  "https://script.google.com/macros/s/AKfycby0H_SEuwr9h-lExDoYHhCLD_vZrCEbQ-xFKdC4Iel-h7r5vxnHx-1V32tG_GAtgvap2w/exec";

// This uses Content-Type: text/plain to avoid CORS preflight in many cases.
export async function submitLead(payload: LeadPayload) {
  const res = await fetch(APPS_SCRIPT_EXEC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      ...payload,
      source: payload.source ?? "Website",
      page: payload.page ?? (typeof window !== "undefined" ? window.location.href : ""),
      user_agent: payload.user_agent ?? (typeof navigator !== "undefined" ? navigator.userAgent : ""),
    }),
  });

  // Apps Script often returns JSON text. If it returns HTML, this will throw—so we guard it.
  const text = await res.text();
  let data: any = null;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }

  // If your Apps Script returns { ok: true }, this will work.
  // If it returns something else, you can adjust the condition.
  if (data && data.ok === false) {
    throw new Error(data.error || "Lead submit failed");
  }

  // If you’re currently getting 403, your Web App isn’t deployed to “Anyone”.
  if (res.status === 403) {
    throw new Error(
      "Apps Script returned 403. Fix: Deploy the Web App with access set to 'Anyone', then use the latest /exec URL."
    );
  }

  return data;
}
