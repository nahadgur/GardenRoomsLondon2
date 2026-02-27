import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, MapPin, Clock, Shield, Star } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { locations } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export function generateStaticParams() {
  return services.map(s => ({ serviceSlug: s.slug }));
}

export async function generateMetadata({ params }: { params: { serviceSlug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) return {};
  return {
    title: `${service.title} London | Professional Garden Room Installers`,
    description: `Expert ${service.title.toLowerCase()} in London. ${service.description} Get free quotes from vetted local professionals.`,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      title: `${service.title} London | ${siteConfig.name}`,
      description: `Expert ${service.title.toLowerCase()} in London. ${service.description}`,
      images: [{ url: service.image, width: 1200, height: 630 }],
    },
  };
}

export default function ServicePage({ params }: { params: { serviceSlug: string } }) {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();

  const relatedServices = services.filter(s => s.id !== service.id).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "url": siteConfig.url,
    },
    "areaServed": { "@type": "City", "name": "London" },
    "url": `${siteConfig.url}/services/${service.slug}/`
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Hero title={service.title} subtitle={service.description} image={service.image} />
      <TrustBadges />

      <div className="container-width py-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services/' }, { label: service.title }]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Premium {service.title} in London</h2>
              <p className="mb-6 text-lg leading-relaxed">{service.longDescription}</p>

              {service.benefits && (
                <>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mt-10 mb-4">Key Benefits</h3>
                  <ul className="space-y-3 mb-8 list-none pl-0">
                    {service.benefits.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-brand-100 p-1 rounded-full flex-shrink-0">
                          <Check className="w-4 h-4 text-brand-600" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {service.features && (
                <>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mt-10 mb-4">Standard Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <p className="font-medium text-gray-900 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {service.process && (
                <>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mt-10 mb-4">Our Installation Process</h3>
                  <div className="space-y-5 mb-8">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900">{step.title}</h4>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </article>

            {service.faqs.length > 0 && (
              <div className="mb-12">
                <FAQ faqs={service.faqs} />
              </div>
            )}

            {/* Location Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Available Locations for {service.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {locations.map(location => (
                  <Link
                    key={location.id}
                    href={`/services/${service.slug}/${location.slug}/`}
                    className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-brand-50 hover:shadow-md transition-all border border-gray-100 hover:border-brand-200"
                  >
                    <div className="bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                      <MapPin className="w-4 h-4 text-brand-600" />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-brand-700 text-sm">{location.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Homeowners Say</h2>
              <Testimonials limit={2} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Get a Quote for {service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">Free, no-obligation quotes from trusted local installers.</p>
                <Link href="/contact/" className="block w-full btn-primary text-center">Request Quotes</Link>
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                  {[
                    { icon: <Clock className="w-4 h-4 text-brand-600" />, text: "Installers available this week" },
                    { icon: <Shield className="w-4 h-4 text-brand-600" />, text: "Fully insured & vetted" },
                    { icon: <Star className="w-4 h-4 text-brand-600" />, text: "Top-rated professionals" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-brand-100 p-1.5 rounded-full">{item.icon}</div>
                      <span className="text-sm font-medium text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Services */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map(rs => (
              <Link key={rs.id} href={`/services/${rs.slug}/`} className="block group bg-white rounded-xl border border-gray-200 hover:border-brand-500 hover:shadow-md transition-all overflow-hidden">
                <div className="h-40 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={rs.image} alt={rs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-gray-900 group-hover:text-brand-600 mb-1">{rs.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{rs.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
