'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (!response.ok) throw new Error('Unable to send');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row"><label><span>Name *</span><input name="name" autoComplete="name" required /></label><label><span>Email *</span><input name="email" type="email" autoComplete="email" required /></label></div>
      <label><span>Company</span><input name="company" autoComplete="organization" /></label>
      <label><span>What can we help you build? *</span><textarea name="message" rows={5} required /></label>
      <label className="website-field" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="submit-button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send project details ↗'}</button>
      <div className="form-status" role="status" aria-live="polite">
        {status === 'sent' && <p className="success">Thank you. Your message is on its way.</p>}
        {status === 'error' && <p className="error">Something went wrong. Please email <a href="mailto:cespejo1@yahoo.com">cespejo1@yahoo.com</a>.</p>}
      </div>
    </form>
  );
}
