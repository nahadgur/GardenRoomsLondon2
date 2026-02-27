import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  showCta?: boolean;
  showTrust?: boolean;
}

export function Hero({ title, subtitle, image, showCta = true, showTrust = true }: HeroProps) {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="w-full h-full object-cover opacity-80" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-gray-900/20" />
      </div>

      <div className="relative container-width py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-white">
            {title}
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">{subtitle}</p>

          {showCta && (
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact/" className="btn-primary text-lg !px-8 !py-4 text-center">
                Get Free Quotes
              </Link>
              <Link href="/services/" className="btn-secondary !bg-white/10 !border-white/30 !text-white hover:!bg-white/20 text-lg !px-8 !py-4 text-center">
                View Services
              </Link>
            </div>
          )}

          {showTrust && (
            <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-300">
              {['Vetted Professionals', 'Free No-Obligation Quotes', '5-Star Rated Service'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
