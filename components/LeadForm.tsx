'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';

interface LeadFormProps {
  className?: string;
  onSuccess?: () => void;
  defaultService?: string;
  isInline?: boolean;
  sourcePage?: string;
}

export function LeadForm({ className, onSuccess, defaultService, isInline = false, sourcePage }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data.sourcePage = sourcePage || (typeof window !== 'undefined' ? window.location.pathname : '');
    data.submittedAt = new Date().toISOString();

    try {
      const res = await fetch('/api/leads/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error('Failed to submit');
      setIsSubmitted(true);
      form.reset();
      if (onSuccess) setTimeout(onSuccess, 2500);
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className={cn("p-8 text-center bg-brand-50 rounded-xl border border-brand-100", className)}>
        <h3 className="text-2xl font-display font-bold text-brand-800 mb-2">Thank You!</h3>
        <p className="text-brand-700">Your request has been received. A local professional will contact you shortly.</p>
        <button onClick={() => setIsSubmitted(false)} className="mt-4 text-sm text-brand-600 hover:underline">
          Send another request
        </button>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900 bg-white";

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      {!isInline && <h3 className="text-xl font-display font-bold text-gray-900 mb-4">Get a Free Quote</h3>}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
        <input id="name" name="name" required className={inputClass} placeholder="John Doe" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="07700 900000" />
        </div>
        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Postcode *</label>
          <input id="postcode" name="postcode" required className={inputClass} placeholder="SW1A 1AA" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input id="email" name="email" type="email" required className={inputClass} placeholder="john@example.com" />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
        <select id="service" name="service" required defaultValue={defaultService || ""} className={inputClass}>
          <option value="" disabled>Select a service...</option>
          {services.map(s => (
            <option key={s.id} value={s.slug}>{s.title}</option>
          ))}
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
        <textarea id="description" name="description" className={cn(inputClass, "h-24 resize-none")} placeholder="Tell us about your project — size, use, budget..." />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button type="submit" disabled={isSubmitting} className="w-full btn-primary !py-3 disabled:opacity-60 disabled:cursor-not-allowed">
        {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Free, no-obligation service. By submitting you agree to our terms.
      </p>
    </form>
  );
}
