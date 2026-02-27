import { Star } from 'lucide-react';
import { testimonials } from '@/data/site';
import { cn } from '@/lib/utils';

export function Testimonials({ limit = 3, className }: { limit?: number; className?: string }) {
  const items = testimonials.slice(0, limit);
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items.map(t => (
        <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex text-yellow-400 mb-3">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
          <div className="border-t border-gray-50 pt-3">
            <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
            <div className="text-xs text-gray-500">{t.location} &middot; {t.service}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
