import { NextRequest, NextResponse } from 'next/server';

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

    return NextResponse.json({ success: true, message: 'Lead received' });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
