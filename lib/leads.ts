import { z } from 'zod';
import { Resend } from 'resend';

export const leadSchema = z.object({
  email: z.string().email(),
  name: z.string().max(120).optional(),
  company: z.string().max(160).optional(),
  message: z.string().max(2000).optional(),
  // where the lead came from: waitlist | demo | contact | developer
  source: z.string().max(40).optional(),
  // Honeypot: hidden from real users; bots that fill it are rejected in the route.
  website: z.string().optional(),
});

export type Lead = z.infer<typeof leadSchema>;

const FROM = 'Renuir <info@renuir.com>';
const TEAM_INBOX = 'info@renuir.com';

/**
 * Persist the lead to the Airtable "Waitlist" table.
 * Returns false when Airtable isn't configured; throws on API failure.
 */
export async function saveToAirtable(lead: Lead): Promise<boolean> {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) return false;

  const res = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Waitlist`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Email: lead.email,
        },
      }),
      signal: AbortSignal.timeout(5000),
    },
  );

  if (!res.ok) {
    const detail = await res.text();
    console.error('Airtable error:', detail);
    throw new Error('airtable_failed');
  }
  return true;
}

/**
 * Send the team notification + user confirmation emails via Resend.
 * Returns false when Resend isn't configured.
 */
export async function sendEmails(lead: Lead): Promise<boolean> {
  const { RESEND_API_KEY } = process.env;
  if (!RESEND_API_KEY) return false;

  const resend = new Resend(RESEND_API_KEY);
  const source = lead.source ?? 'waitlist';

  await resend.emails.send({
    from: FROM,
    to: [TEAM_INBOX],
    subject: 'New Waitlist Signup',
    html: `
      <p>🎉 New waitlist signup</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Source:</strong> ${source}</p>
    `,
  });

  await resend.emails.send({
    from: FROM,
    to: lead.email,
    subject: 'Thank you for joining the Renuir waitlist.🎉',
    html: `
      <p>You are now on the list. Renuir helps lost items return to their owners quickly and securely.</p>
      <p>You will receive an email notification when we launch in the next few months.</p>
      <p>— Renuir Team</p>
    `,
  });

  return true;
}
