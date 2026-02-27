import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Location pages
  const locationPages: MetadataRoute.Sitemap = locations.map(l => ({
    url: `${base}/locations/${l.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Service x Location pages (the money pages)
  const serviceLocationPages: MetadataRoute.Sitemap = [];
  for (const service of services) {
    for (const location of locations) {
      serviceLocationPages.push({
        url: `${base}/services/${service.slug}/${location.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      });
    }
  }

  return [...staticPages, ...servicePages, ...locationPages, ...serviceLocationPages];
}
