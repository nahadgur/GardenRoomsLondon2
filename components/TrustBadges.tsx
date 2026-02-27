import { ShieldCheck, UserCheck, Award, PoundSterling } from 'lucide-react';
import { trustBadges } from '@/data/site';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-brand-600" />,
  UserCheck: <UserCheck className="w-7 h-7 text-brand-600" />,
  Award: <Award className="w-7 h-7 text-brand-600" />,
  PoundSterling: <PoundSterling className="w-7 h-7 text-brand-600" />,
};

export function TrustBadges() {
  return (
    <section className="py-10 bg-white border-b border-gray-100">
      <div className="container-width">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map(badge => (
            <div key={badge.title} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                {iconMap[badge.icon]}
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{badge.title}</div>
                <div className="text-xs text-gray-500">{badge.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
