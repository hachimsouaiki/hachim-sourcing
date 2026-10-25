import './globals.css';
export const metadata = {
  metadataBase: new URL('https://hachimsouaiki.com'),
  title: 'China Sourcing Consultant for Mechanical Parts | Hachim Souaiki',
  description: 'Source mechanical parts and industrial equipment from China with a clear supplier selection process. Book a free 30-minute sourcing consultation with Hachim Souaiki.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Source from China. Make your next move with confidence.', description: 'Mechanical parts, industrial equipment and a clearer sourcing process. Talk to Hachim Souaiki.', url: 'https://hachimsouaiki.com', siteName: 'Hachim Souaiki', locale: 'en_US', type: 'website' },
  robots: { index: true, follow: true }
};
export default function Layout({children}) { return <html lang="en"><body>{children}</body></html>; }
