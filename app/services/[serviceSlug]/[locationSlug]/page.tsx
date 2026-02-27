import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, MapPin, Star, Clock, Shield } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { locations, getLocationBySlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { LeadForm } from '@/components/LeadForm';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Testimonials } from '@/components/Testimonials';
import { AreasGrid } from '@/components/AreasGrid';

export function generateStaticParams() {
  const params: { serviceSlug: string; locationSlug: string }[] = [];
  for (const service of services) {
    for (const location of locations) {
      params.push({ serviceSlug: service.slug, locationSlug: location.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { serviceSlug: string; locationSlug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.serviceSlug);
  const location = getLocationBySlug(params.locationSlug);
  if (!service || !location) return {};

  const title = `${service.title} in ${location.name} | Free Quotes from Local Experts`;
  const description = `Find top-rated ${service.title.toLowerCase()} installers in ${location.name}. Free quotes, vetted professionals, no obligation. Covering ${location.subLocations.slice(0, 4).map(s => s.name).join(', ')} and more.`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}/${location.slug}/` },
    openGraph: {
      title: `${service.title} in ${location.name} | ${siteConfig.name}`,
      description,
      images: [{ url: service.image, width: 1200, height: 630 }],
    },
  };
}

export default function ServiceLocationPage({ params }: { params: { serviceSlug: string; locationSlug: string } }) {
  const service = getServiceBySlug(params.serviceSlug);
  const location = getLocationBySlug(params.locationSlug);
  if (!service || !location) notFound();

  // Unique content per location (not just find-and-replace!)
  const locationIntro = service.locationIntros[location.slug] || service.longDescription;

  const relatedServices = services.filter(s => s.id !== service.id).slice(0, 3);
  const pageUrl = `${siteConfig.url}/services/${service.slug}/${location.slug}/`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.title} in ${location.name}`,
    "description": `Professional ${service.title.toLowerCase()} services in ${location.name}, London.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "url": siteConfig.url,
    },
    "areaServed": {
      "@type": "Place",
      "name": location.name,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": location.latitude,
        "longitude": location.longitude,
      }
    },
    "url": pageUrl,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Split Hero Section with Inline Form */}
      <section className="bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={service.image} alt="" className="w-full h-full object-cover opacity-50" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/30" />
        </div>

        <div className="container-width py-12 md:py-20 relative z-10">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services/' },
            { label: service.title, href: `/services/${service.slug}/` },
            { label: location.name }
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                <MapPin className="w-4 h-4" /> Available in {location.name}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                {service.title} in <span className="text-brand-400">{location.name}</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Find the best local professionals for your project. We&apos;ve vetted the top installers in {location.name} so you don&apos;t have to.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  `Local ${location.name} experts`,
                  "Compare up to 3 free quotes",
                  "Fully insured and vetted professionals"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-500 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span>Trusted by homeowners in {location.name}</span>
              </div>
            </div>

            {/* Right: Inline Form */}
            <div className="bg-white text-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100">
              <h2 className="text-2xl font-display font-bold mb-2">Get Your Free Quote</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Enter your details to match with {location.name} installers.
              </p>
              <LeadForm
                defaultService={service.slug}
                isInline={true}
                sourcePage={`/services/${service.slug}/${location.slug}/`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-width py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Unique Location Content */}
            <article className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Professional {service.title} in {location.name}
              </h2>
              <p className="mb-8 text-lg leading-relaxed">{locationIntro}</p>

              {service.benefits && (
                <>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mt-10 mb-4">
                    Why Choose Local {location.name} Installers?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 bg-brand-50 p-4 rounded-xl border border-brand-100">
                        <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800 font-medium text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <h3 className="text-2xl font-display font-bold text-gray-900 mt-10 mb-4">Local Expertise Matters</h3>
              <p>
                When choosing a garden room installer, local knowledge is invaluable. Our network of professionals in {location.name} understands the specific planning guidelines, soil conditions, and architectural styles of the area. Whether your property is in {location.subLocations.slice(0, 3).map(s => s.name).join(', ')}, or elsewhere in {location.name}, they ensure your project runs smoothly from start to finish.
              </p>

              {service.process && (
                <>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mt-10 mb-4">
                    Our Process for {location.name} Residents
                  </h3>
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

            {/* Areas Grid — sub-locations as LINKS */}
            <div className="mb-16">
              <AreasGrid location={location} serviceSlug={service.slug} />
            </div>

            {/* FAQs with FAQPage Schema */}
            {service.faqs.length > 0 && (
              <div className="mb-12">
                <FAQ faqs={service.faqs} title={`${service.title} FAQs — ${location.name}`} />
              </div>
            )}

            {/* Reviews */}
            <div className="mt-12">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Local Reviews</h2>
              <Testimonials limit={2} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Why Hire Local?</h3>
                <ul className="space-y-4">
                  {[
                    { icon: <Clock className="w-4 h-4 text-brand-600" />, title: "Faster Response", desc: `Local ${location.name} teams visit your site quicker.` },
                    { icon: <Shield className="w-4 h-4 text-brand-600" />, title: "Local Accountability", desc: "Trusted reputation in your community." },
                    { icon: <Star className="w-4 h-4 text-brand-600" />, title: "Verified Quality", desc: `We check past work in ${location.name}.` },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-brand-100 p-1.5 rounded-full mt-0.5">{item.icon}</div>
                      <div>
                        <span className="block font-bold text-gray-900 text-sm">{item.title}</span>
                        <span className="text-sm text-gray-600">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-900 text-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-display font-bold mb-4">Ready to start?</h3>
                <p className="text-brand-100 mb-6 text-sm">
                  Get quotes from the best {service.title.toLowerCase()} installers in {location.name}.
                </p>
                <Link href="/contact/" className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors">
                  Get Free Quotes
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Services in this Location */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">Other Services in {location.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map(rs => (
              <Link key={rs.id} href={`/services/${rs.slug}/${location.slug}/`} className="block group bg-white rounded-xl border border-gray-200 hover:border-brand-500 hover:shadow-md transition-all overflow-hidden">
                <div className="h-40 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={rs.image} alt={rs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-gray-900 group-hover:text-brand-600 mb-1">{rs.title}</h3>
                  <p className="text-sm text-gray-500">Available in {location.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
