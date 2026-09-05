'use client'

import { useState, type FormEvent } from 'react'
import { AlertIcon, ArrowRightIcon, CheckIcon, SpinnerIcon } from '@/components/icons'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const fieldClass =
  'w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-[14.5px] text-fg placeholder:text-subtle/70 transition-colors duration-200 focus:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    setStatus('submitting')
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const payload = (await response.json()) as { ok?: boolean; error?: string }

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error ?? 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setMessage('Thanks — your message is through. I usually reply within a day or two.')
      form.reset()
    } catch (error) {
      setStatus('error')
      setMessage(
        error instanceof Error
          ? error.message
          : 'Could not send just now — email works too: anoopa413@gmail.com',
      )
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow mb-2 block">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={120}
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow mb-2 block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          placeholder="What are you building?"
          className={cn(fieldClass, 'resize-y')}
        />
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group inline-flex h-11 items-center gap-2 rounded-lg bg-fg px-5 text-[14px] font-medium text-bg transition-opacity duration-200 hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <>
              <SpinnerIcon width={15} height={15} />
              Sending
            </>
          ) : (
            <>
              Send Message
              <ArrowRightIcon
                width={15}
                height={15}
                className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>
      </div>

      <div aria-live="polite" role="status" className="min-h-[1.25rem]">
        {status === 'success' ? (
          <p className="flex items-start gap-2 text-[13.5px] text-accent">
            <CheckIcon width={15} height={15} className="mt-0.5 shrink-0" />
            {message}
          </p>
        ) : null}
        {status === 'error' ? (
          <p className="flex items-start gap-2 text-[13.5px] text-red-500 dark:text-red-400">
            <AlertIcon width={15} height={15} className="mt-0.5 shrink-0" />
            {message}
          </p>
        ) : null}
      </div>
    </form>
  )
}
