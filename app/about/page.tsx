import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Users, Shield, Star, Clock } from 'lucide-react';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Us | How We Connect You With Garden Room Installers',
  description: 'Learn how Garden Rooms London connects homeowners with vetted, insured garden room professionals across London. Free service, no obligation.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <div className="container-width py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">About {siteConfig.name}</h1>

        <div className="prose prose-lg text-gray-600 mb-12">
          <p className="text-xl leading-relaxed">
            We&apos;re a free matching service that connects London homeowners with trusted, vetted garden room installers. We don&apos;t build garden rooms ourselves — we make sure you find the right people who do.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mt-10 mb-4">How It Works</h2>
          <p>
            Finding a reliable garden room installer can be overwhelming. There are hundreds of companies out there, and it&apos;s hard to know who to trust. That&apos;s where we come in. We&apos;ve done the legwork — checking credentials, insurance, past work, and customer reviews — so you can focus on choosing the right installer for your project.
          </p>
          <p>
            When you submit a request through our site, we match you with up to three local professionals who are qualified, available, and experienced in your specific type of project. You compare their quotes and choose the one that&apos;s right for you. There&apos;s no obligation and the service is completely free for homeowners.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mt-10 mb-4">Our Standards</h2>
          <p>
            Every installer in our network has been verified for public liability insurance, relevant trade qualifications, and a track record of quality work. We regularly review customer feedback and remove any professionals who don&apos;t meet our standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: <Shield className="w-6 h-6 text-brand-600" />, title: "Fully Vetted", desc: "Insurance, qualifications, and references checked" },
            { icon: <Users className="w-6 h-6 text-brand-600" />, title: "Local Experts", desc: "Professionals who know your area" },
            { icon: <Star className="w-6 h-6 text-brand-600" />, title: "Quality Assured", desc: "Ongoing review of customer feedback" },
            { icon: <Clock className="w-6 h-6 text-brand-600" />, title: "Fast Response", desc: "Matched within 24 hours of your request" },
          ].map(item => (
            <div key={item.title} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
              <div className="bg-brand-100 p-2 rounded-lg">{item.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold text-brand-900 mb-4">Ready to Get Started?</h2>
          <p className="text-brand-700 mb-6">It takes less than 2 minutes to get matched with local professionals.</p>
          <Link href="/contact/" className="btn-primary text-lg !px-8 !py-4">Get Free Quotes</Link>
        </div>
      </div>
    </div>
  );
}
