import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Briefcase, Music, Dumbbell, Home, Palette, House, CheckCircle } from 'lucide-react';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';

export const metadata: Metadata = {
  title: `Garden Room Installers London | Free Quotes from Vetted Pros`,
  description: 'Connect with top-rated garden room installers in London. Free quotes for garden offices, studios, gyms, annexes and bespoke builds across all London areas.',
  alternates: { canonical: '/' },
};

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-7 h-7 text-brand-600" />,
  Music: <Music className="w-7 h-7 text-brand-600" />,
  Dumbbell: <Dumbbell className="w-7 h-7 text-brand-600" />,
  Home: <Home className="w-7 h-7 text-brand-600" />,
  Palette: <Palette className="w-7 h-7 text-brand-600" />,
  House: <House className="w-7 h-7 text-brand-600" />,
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="Transform Your Outdoor Space"
        subtitle="Find trusted local experts for bespoke garden rooms, offices, and studios in London and the South East."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
      />

      <TrustBadges />

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need a home office, a gym, or a creative studio, we connect you with the right specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <article key={service.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                <Link href={`/services/${service.slug}/`} className="block h-48 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                    {iconMap[service.icon] || <Home className="w-6 h-6 text-brand-600" />}
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <Link href={`/services/${service.slug}/`}>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">{service.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <Link href={`/services/${service.slug}/`} className="text-brand-600 font-medium text-sm flex items-center hover:underline">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link href="/contact/" className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white border-y border-gray-100">
        <div className="container-width">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make it simple to find the perfect installer for your garden room project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: 1, title: "Tell Us What You Need", desc: "Fill out our quick form with your project details and location. It takes less than 2 minutes." },
              { step: 2, title: "Get Matched With Pros", desc: "We match you with up to 3 vetted local installers who are available and qualified for your job." },
              { step: 3, title: "Get It Done", desc: "Compare quotes, check credentials, and hire the best professional for your garden room." }
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                  <span className="text-3xl font-display font-bold text-brand-600">{item.step}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact/" className="btn-primary text-lg !px-8 !py-4">Start Your Project</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">What Homeowners Say</h2>
          </div>
          <Testimonials limit={3} />
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Areas We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connecting you with garden room specialists across Greater London.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {locations.map(location => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}/`}
                className="group block bg-gray-50 hover:bg-brand-50 border border-gray-100 hover:border-brand-200 rounded-xl p-5 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <span className="font-display font-bold text-gray-900 group-hover:text-brand-700">{location.name}</span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 ml-13">
                  {location.subLocations.slice(0, 5).map(s => s.name).join(', ')} & more
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=2000" alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container-width text-center relative z-10">
          <h2 className="text-4xl font-display font-bold text-white mb-6">Ready to Transform Your Garden?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of happy homeowners who found their perfect garden room installer through us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary text-xl !px-10 !py-5">Get Free Quotes</Link>
            <Link href="/services/" className="btn-secondary !bg-white/10 !border-white/30 !text-white hover:!bg-white/20 text-xl !px-10 !py-5">
              Browse Services
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
            {['No obligation', 'Free service', 'Secure & private'].map(item => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-500" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
