'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ as FAQType } from '@/data/services';

export function FAQ({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQType[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  return (
    <section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <span className="pr-4">{faq.question}</span>
              <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
