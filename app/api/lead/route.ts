import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const leadSchema = z.object({
  email: z.string().email(),
  name: z.string().max(120).optional(),
  company: z.string().max(160).optional(),
  message: z.string().max(2000).optional(),
  // where the lead came from: waitlist | demo | contact | developer
  source: z.string().max(40).optional(),
});

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

  // Forward to a collector if one is configured (Zapier/Make/Resend proxy/etc).
  // Absent that, accept the lead so the UI can confirm honestly in beta.
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
      });
    } catch (err) {
      console.error('Lead webhook failed', err);
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 502 },
      );
    }
  } else {
    console.info('New lead', lead);
  }

  return NextResponse.json({ ok: true });
}
