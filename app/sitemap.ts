import type { MetadataRoute } from 'next';
import { projects } from './work/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://espejosoftware.com';
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1, alternates: { languages: { en: base, es: `${base}/es` } } },
    { url: `${base}/es`, lastModified: now, changeFrequency: 'monthly', priority: 0.9, alternates: { languages: { en: base, es: `${base}/es` } } },
  ];

  for (const project of projects) {
    pages.push({ url: `${base}/work/${project.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.75, alternates: { languages: { en: `${base}/work/${project.slug}`, es: `${base}/es/work/${project.slug}` } } });
    pages.push({ url: `${base}/es/work/${project.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: { languages: { en: `${base}/work/${project.slug}`, es: `${base}/es/work/${project.slug}` } } });
  }
  return pages;
}
