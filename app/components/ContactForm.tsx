'use client';

import { FormEvent, useState } from 'react';

const copy = {
  en: { name: 'Name *', email: 'Email *', company: 'Company', message: 'What can we help you build? *', website: 'Website', sending: 'Sending…', submit: 'Send project details ↗', sent: 'Thank you. Your message is on its way.', error: 'Something went wrong. Please email' },
  es: { name: 'Nombre *', email: 'Correo electrónico *', company: 'Empresa', message: '¿Qué podemos ayudarte a crear? *', website: 'Sitio web', sending: 'Enviando…', submit: 'Enviar detalles del proyecto ↗', sent: 'Gracias. Tu mensaje está en camino.', error: 'Algo salió mal. Escríbenos a' },
};

export default function ContactForm({ locale = 'en' }: { locale?: 'en' | 'es' }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const text = copy[locale];

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
      <input type="hidden" name="locale" value={locale} />
      <div className="field-row"><label><span>{text.name}</span><input name="name" autoComplete="name" required /></label><label><span>{text.email}</span><input name="email" type="email" autoComplete="email" required /></label></div>
      <label><span>{text.company}</span><input name="company" autoComplete="organization" /></label>
      <label><span>{text.message}</span><textarea name="message" rows={5} required /></label>
      <label className="website-field" aria-hidden="true"><span>{text.website}</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="submit-button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? text.sending : text.submit}</button>
      <div className="form-status" role="status" aria-live="polite">
        {status === 'sent' && <p className="success">{text.sent}</p>}
        {status === 'error' && <p className="error">{text.error} <a href="mailto:cespejo1@yahoo.com">cespejo1@yahoo.com</a>.</p>}
      </div>
    </form>
  );
}
