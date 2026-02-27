import { NextRequest, NextResponse } from 'next/server';

// Google Apps Script Web App (your /exec endpoint)
// Runs server-side so your forms work from any page without browser CORS headaches.
// If you redeploy Apps Script, update this URL.
const APPS_SCRIPT_EXEC_URL =
  'https://script.google.com/macros/s/AKfycby0H_SEuwr9h-lExDoYHhCLD_vZrCEbQ-xFKdC4Iel-h7r5vxnHx-1V32tG_GAtgvap2w/exec';

/**
 * POST /api/leads/
 *
 * Receives lead form submissions.
 *
 * In production, replace the console.log with your preferred backend:
 * - Firestore: import { getFirestore, collection, addDoc } from 'firebase/firestore';
 * - Webhook: fetch('https://hooks.zapier.com/your-webhook', { ... })
 * - Email: Use Resend, SendGrid, or similar
 * - Google Sheets: Use the Sheets API
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const required = ['name', 'phone', 'email', 'service', 'postcode'];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Log the lead (replace with your actual backend)
    const lead = {
      ...body,
      receivedAt: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    console.log('📋 New Lead:', JSON.stringify(lead, null, 2));

    // Forward to Google Apps Script → Google Sheet
    const appsScriptRes = await fetch(APPS_SCRIPT_EXEC_URL, {
      method: 'POST',
      headers: {
        // Apps Script can be picky; sending as text/plain is very robust.
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify({
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        postcode: lead.postcode,
        service: lead.service,
        description: lead.description || '',
        sourcePage: lead.sourcePage || '',
        submittedAt: lead.submittedAt || '',
        receivedAt: lead.receivedAt,
        ip: lead.ip,
        userAgent: lead.userAgent,
      }),
      cache: 'no-store',
    });

    const appsScriptText = await appsScriptRes.text();
    let appsScriptJson: any = null;
    try {
      appsScriptJson = JSON.parse(appsScriptText);
    } catch {
      appsScriptJson = { raw: appsScriptText };
    }

    if (!appsScriptRes.ok) {
      return NextResponse.json(
        {
          error: 'Failed to forward lead to Google Sheet (Apps Script error).',
          appsScriptStatus: appsScriptRes.status,
          appsScriptResponse: appsScriptJson,
          hint:
            'Most common fix: redeploy your Apps Script Web App with Execute as "Me" and Who has access: "Anyone". Then paste the newest /exec URL into app/api/leads/route.ts.',
        },
        { status: 502 }
      );
    }

    // --- WEBHOOK EXAMPLE (uncomment and configure) ---
    // await fetch(process.env.WEBHOOK_URL!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(lead),
    // });

    // --- FIRESTORE EXAMPLE (uncomment and configure) ---
    // import { initializeApp } from 'firebase/app';
    // import { getFirestore, collection, addDoc } from 'firebase/firestore';
    // const db = getFirestore(app);
    // await addDoc(collection(db, 'leads'), lead);

    return NextResponse.json({
      success: true,
      message: 'Lead received and forwarded to Google Sheet',
      appsScript: appsScriptJson,
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
