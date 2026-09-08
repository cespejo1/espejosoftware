import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://espejosoftware.com'),
  title: 'Espejo Software | Custom Web & Mobile Apps',
  description: 'Florida-based software studio building and managing custom web and mobile apps for businesses.',
  openGraph: { title: 'Espejo Software | Software built around your business', description: 'Custom web apps, mobile apps, and ongoing software management for growing businesses.', type: 'website', url: 'https://espejosoftware.com', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Espejo Software — Software built around your business.' }] },
  twitter: { card: 'summary_large_image', title: 'Espejo Software | Software built around your business', description: 'Custom web apps, mobile apps, and ongoing software management for growing businesses.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
