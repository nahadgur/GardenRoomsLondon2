import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locations, getLocationBySlug } from '@/data/locations';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { Hero } from '@/components/Hero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AreasGrid } from '@/components/AreasGrid';

export function generateStaticParams() {
  return locations.map(l => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = getLocationBySlug(params.slug);
  if (!location) return {};
  return {
    title: `Garden Rooms in ${location.name} | Local Installers & Free Quotes`,
    description: `Find the best garden room installers in ${location.name}. Covering ${location.subLocations.slice(0, 5).map(s => s.name).join(', ')} and more. Free quotes from vetted local professionals.`,
    alternates: { canonical: `/locations/${location.slug}/` },
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = getLocationBySlug(params.slug);
  if (!location) notFound();

  return (
    <>
      <Hero
        title={`Garden Rooms in ${location.name}`}
        subtitle={`Your local guide to garden room specialists in ${location.name} and surrounding areas.`}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="container-width py-12">
        <Breadcrumbs items={[{ label: 'Locations' }, { label: location.name }]} />

        {/* About the area */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Garden Room Services in {location.name}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{location.description}</p>
        </div>

        {/* Services available in this location */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Services Available in {location.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <Link
                key={service.id}
                href={`/services/${service.slug}/${location.slug}/`}
                className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-brand-500 hover:shadow-md transition-all group"
              >
                <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 mb-2">
                  {service.title} in {location.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {service.description}
                </p>
                <span className="text-brand-600 font-medium text-sm">Get free quotes →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Areas Grid */}
        <div className="mb-16">
          <AreasGrid location={location} title={`Areas in ${location.name} We Cover`} />
        </div>

        {/* CTA */}
        <div className="bg-brand-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-900 mb-4">
            Live in {location.name}?
          </h2>
          <p className="text-brand-700 mb-8 max-w-2xl mx-auto">
            Get up to 3 free quotes from vetted installers in the {location.name} area. It takes less than 2 minutes.
          </p>
          <Link href="/contact/" className="btn-primary text-lg !px-8 !py-4">Get Local Quotes</Link>
        </div>
      </div>
    </>
  );
}
