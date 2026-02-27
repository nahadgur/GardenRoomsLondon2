import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { LeadForm } from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Us | Get Free Garden Room Quotes in London',
  description: 'Get in touch or request free, no-obligation quotes from vetted garden room installers in London. Call, email, or fill in our quick form.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <div className="container-width py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Request free quotes from vetted local installers, or contact us directly with any questions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Request Free Quotes</h2>
          <p className="text-gray-600 text-sm mb-6">Fill in your details and we&apos;ll match you with up to 3 local professionals.</p>
          <LeadForm sourcePage="/contact/" />
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Contact Details</h2>
            <div className="space-y-5">
              {[
                { icon: <Phone className="w-5 h-5 text-brand-600" />, label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref },
                { icon: <Mail className="w-5 h-5 text-brand-600" />, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: <MapPin className="w-5 h-5 text-brand-600" />, label: "Area", value: "Greater London & South East", href: undefined },
                { icon: <Clock className="w-5 h-5 text-brand-600" />, label: "Hours", value: "Mon-Fri 8am-6pm, Sat 9am-1pm", href: undefined },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="bg-brand-50 p-2.5 rounded-lg">{item.icon}</div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-gray-900 font-medium hover:text-brand-600 transition-colors">{item.value}</a>
                    ) : (
                      <span className="text-gray-900 font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h3 className="font-display font-bold text-gray-900 mb-3">Important Note</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {siteConfig.name} is a free matching service. We connect you with independent, vetted garden room professionals — we do not perform installation work ourselves. All quotes come directly from the installers, and there is no obligation to proceed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
