import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: 'Home', href: '/' }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.label,
      ...(item.href ? { "item": `${siteConfig.url}${item.href}` } : {})
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-500">
        {allItems.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-300" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-600 transition-colors">{item.label}</Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
