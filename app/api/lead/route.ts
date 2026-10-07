import { NextResponse } from 'next/server';
import { leadSchema, saveToAirtable, sendEmails } from '@/lib/leads';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// In-memory per-IP rate limit. Note: serverless is per-instance, so this is a
// pragmatic beta stopgap; move to a shared store (Upstash/Vercel KV) before a
// high-traffic public launch.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function clientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  return fwd?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown';
}

export async function POST(req: Request) {
  if (rateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again shortly.' },
      { status: 429 },
    );
  }

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

  const { website, ...lead } = parsed.data;

  // Honeypot tripped: silently accept so bots do not learn they were caught.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  try {
    const persisted = await saveToAirtable(lead);
    const emailed = await sendEmails(lead);

    // Only confirm receipt when a collector actually accepted the enquiry.
    // Airtable stores email only; detailed contact requests need team delivery.
    if ((!persisted && !emailed) || ((lead.name || lead.company || lead.message) && !emailed)) {
      console.error('Enquiry delivery is not configured');
      return NextResponse.json({error: 'Please contact info@renuir.com.'}, {status: 503});
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Lead capture failed', err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 502 },
    );
  }
}
