import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-md flex items-center justify-center text-white font-bold">GR</div>
              <span className="font-display font-bold text-lg text-white">Garden Rooms London</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Connecting homeowners with trusted garden room specialists across London and the South East. Free, no-obligation quotes.
            </p>
            <p className="text-xs text-gray-500 italic border-l-2 border-gray-700 pl-3">
              Garden Rooms London connects you with independent service professionals. We do not perform the work ourselves.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map(s => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}/`} className="hover:text-brand-400 transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Service x Location Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Popular Areas</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Garden Offices Central London', href: '/services/garden-office-installation/central-london/' },
                { label: 'Music Studios North London', href: '/services/soundproof-music-studios/north-london/' },
                { label: 'Garden Gyms SW London', href: '/services/garden-gyms/sw-london/' },
                { label: 'Bespoke Rooms West London', href: '/services/bespoke-garden-rooms/west-london/' },
                { label: 'Garden Annexes South London', href: '/services/garden-annexes/south-london/' },
                { label: 'Art Studios East London', href: '/services/garden-art-studios/east-london/' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-white flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-500" /> {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-500" /> {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-brand-500" /> London, United Kingdom
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact/" className="text-brand-400 hover:text-brand-300 font-medium text-sm">
                Request a Callback →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/sitemap.xml" className="hover:text-gray-300">Sitemap</Link>
            <Link href="/about/" className="hover:text-gray-300">About</Link>
            <Link href="/contact/" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
