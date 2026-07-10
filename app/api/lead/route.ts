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
  // Honeypot: real users never fill this hidden field. Bots do.
  website: z.string().max(0).optional().or(z.literal('')),
});

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
  return (fwd?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown');
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

  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (!webhook) {
    // No collector configured: accept so the form still works, but log a loud
    // NON-PII warning so the misconfiguration is visible (the lead is not
    // forwarded anywhere). Set LEAD_WEBHOOK_URL to actually capture leads.
    console.error(
      'LEAD_WEBHOOK_URL is not set: lead accepted but NOT forwarded',
      { source: lead.source },
    );
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`collector responded ${res.status}`);
  } catch (err) {
    console.error('Lead webhook failed', err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
