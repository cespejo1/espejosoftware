import type { Metadata } from 'next';
import './globals.css';
import './service-cards.css';
import './pricing.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.espejosoftware.com'),
  title: 'Software Company in West Palm Beach | Espejo Software',
  description: 'South Florida software company creating custom web apps, mobile apps, MVPs, and websites for businesses in West Palm Beach, Loxahatchee, The Acreage, and beyond.',
  keywords: ['software company West Palm Beach', 'software developer Loxahatchee', 'web development The Acreage FL', 'South Florida software company', 'custom app development Palm Beach County', 'mobile app developer South Florida', 'MVP development Florida', 'bilingual software developer'],
  alternates: { canonical: '/', languages: { 'en-US': '/', 'es-US': '/es' } },
  openGraph: { title: 'Espejo Software | South Florida Software Company', description: 'Custom web apps, mobile apps, MVPs, and websites for businesses across West Palm Beach, Loxahatchee, The Acreage, and South Florida.', type: 'website', url: 'https://www.espejosoftware.com', locale: 'en_US', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Espejo Software — Software built around your business.' }] },
  twitter: { card: 'summary_large_image', title: 'Espejo Software | Software built around your business', description: 'Custom web apps, mobile apps, and ongoing software management for growing businesses.', images: ['/og.png'] },
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Espejo Software LLC',
  url: 'https://www.espejosoftware.com',
  email: 'cespejo1@yahoo.com',
  description: 'South Florida software company creating custom web applications, mobile applications, MVPs, and business websites.',
  priceRange: '$$-$$$',
  knowsLanguage: ['English', 'Spanish'],
  areaServed: [
    { '@type': 'City', name: 'West Palm Beach' },
    { '@type': 'Place', name: 'Loxahatchee' },
    { '@type': 'Place', name: 'The Acreage' },
    { '@type': 'AdministrativeArea', name: 'Palm Beach County' },
    { '@type': 'AdministrativeArea', name: 'South Florida' },
  ],
  serviceType: ['Custom software development', 'Web application development', 'Mobile app development', 'MVP development', 'Website development', 'Software maintenance'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} /></body></html>;
}
