import { NextResponse } from 'next/server';
import { leadSchema, saveToAirtable, sendEmails } from '@/lib/leads';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 422 },
    );
  }

  const lead = parsed.data;

  try {
    const persisted = await saveToAirtable(lead);
    const emailed = await sendEmails(lead);

    // No integrations configured (e.g. preview deploy) — accept the lead so the
    // UI can confirm honestly in beta rather than showing a false error.
    if (!persisted && !emailed) {
      console.info('New lead (no collector configured)', lead);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Lead capture failed', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 502 },
    );
  }
}
