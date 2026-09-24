import type { APIRoute } from 'astro';
import { CONTACT_TO, RESEND_API_KEY } from 'astro:env/server';

export const prerender = false;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();

export const POST: APIRoute = async ({ request }) => {
  const wantsJson = request.headers.get('accept')?.includes('application/json');
  const reply = (status: number, message: string) => {
    if (wantsJson) return Response.json({ ok: status < 300, message }, { status });
    if (status < 300) return Response.redirect(new URL('/sent/', request.url), 303);
    return new Response(message, { status, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  };

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reply(400, 'Could not read the form.');
  }
  const field = (name: string) => String(form.get(name) ?? '');
  const from = oneLine(field('from'));
  const subject = oneLine(field('subject'));
  const message = field('message').trim();
  const elapsed = Number(field('ms'));

  if (field('website')) return reply(200, 'sent');
  if (elapsed && elapsed < 3000) return reply(400, 'That was quick. Please try again.');
  if (from.length > 254 || !EMAIL.test(from)) return reply(400, 'Please enter a valid email address.');
  if (subject.length > 150) return reply(400, 'Subject must be 150 characters or fewer.');
  if (!message || message.length > 5000) return reply(400, 'Message must be 1 to 5000 characters.');
  if (!RESEND_API_KEY || !CONTACT_TO) return reply(503, 'Messaging is not set up yet. Please email me directly.');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Portfolio <onboarding@resend.dev>',
      to: CONTACT_TO,
      reply_to: from,
      subject: subject || `Portfolio message from ${from}`,
      text: `From: ${from}\n\n${message}`,
    }),
  });
  if (!res.ok) {
    console.error('Resend error', res.status, await res.text());
    return reply(502, 'Sending failed. Please email me directly.');
  }
  return reply(200, 'sent');
};
