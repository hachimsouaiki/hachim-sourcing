import './globals.css';
export const metadata = {
  metadataBase: new URL('https://hachimsouaiki.com'),
  title: 'China Mechanical Parts Sourcing | Hachim Souaiki',
  description: 'Source mechanical components, CNC parts and industrial spares from China. Supplier research, quotation comparison and coordination with Hachim Souaiki.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Your mechanical parts sourcing partner in China.', description: 'Find Chinese manufacturers, compare technical quotations and coordinate your mechanical parts sourcing project with Hachim Souaiki.', url: 'https://hachimsouaiki.com', siteName: 'Hachim Souaiki', locale: 'en_US', type: 'website' },
  robots: { index: true, follow: true }
};
export default function Layout({children}) { return <html lang="en"><body>{children}</body></html>; }
