import { NextResponse } from 'next/server';

const clean = (value: unknown, max: number) => typeof value === 'string' ? value.trim().slice(0, max) : '';

export async function POST(request: Request) {
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
    const body = parsed as Record<string, unknown>;
    if (clean(body.website, 100)) return NextResponse.json({ ok: true });

    const name = clean(body.name, 100);
    const email = clean(body.email, 200);
    const company = clean(body.company, 150);
    const message = clean(body.message, 5000);
    if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: 'Invalid form submission' }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !from) return NextResponse.json({ error: 'Email is not configured' }, { status: 503 });

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: ['cespejo1@yahoo.com'],
        reply_to: email,
        subject: `New Espejo Software inquiry from ${name.replace(/[\r\n]/g, ' ')}`,
        text: [`Name: ${name}`, `Email: ${email}`, `Company: ${company || 'Not provided'}`, '', message].join('\n'),
      }),
    });
    if (!response.ok) return NextResponse.json({ error: 'Email provider rejected the message' }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
