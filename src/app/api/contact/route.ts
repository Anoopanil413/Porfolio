import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type Payload = {
  name?: unknown
  email?: unknown
  message?: unknown
  company?: unknown
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Small in-memory limiter — enough to blunt casual abuse on a single instance. */
const hits = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5

function rateLimited(key: string) {
  const now = Date.now()
  const entry = hits.get(key)
  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}

function str(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  let body: Payload
  try {
    body = (await request.json()) as Payload
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 })
  }

  // Honeypot: a real visitor never fills this.
  if (str(body.company)) {
    return NextResponse.json({ ok: true })
  }

  const name = str(body.name)
  const email = str(body.email)
  const message = str(body.message)

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Please fill in every field.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'That email address does not look right.' }, { status: 400 })
  }
  if (message.length > 4000 || name.length > 120) {
    return NextResponse.json({ ok: false, error: 'That message is a little too long.' }, { status: 400 })
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many messages from here just now. Try again shortly.' },
      { status: 429 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL ?? 'anoopa413@gmail.com'
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>'

  if (!apiKey) {
    // No mail provider configured yet — say so honestly rather than pretending to send.
    console.warn('[contact] RESEND_API_KEY is not set; message was not delivered.', { name, email })
    return NextResponse.json(
      {
        ok: false,
        error: `The form is not wired to a mail provider yet — please email ${to} directly.`,
      },
      { status: 503 },
    )
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio enquiry — ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('[contact] provider rejected the message', response.status, detail)
      return NextResponse.json(
        { ok: false, error: 'The mail provider rejected that. Please try again shortly.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] send failed', error)
    return NextResponse.json(
      { ok: false, error: `Could not send just now — email ${to} directly.` },
      { status: 500 },
    )
  }
}
