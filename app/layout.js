import './globals.css';
import Navigation from './navigation';
import SiteFooter from './site-footer';
import CookieNotice from './cookie-notice';
import WhatsAppWidget from './whatsapp-widget';
export const metadata = {
  metadataBase: new URL('https://hachimsouaiki.com'),
  title: 'China Industrial Sourcing for European Companies | Hachim Souaiki',
  description: 'China-based industrial sourcing for European companies, covering CNC-machined and sheet-metal parts, industrial machinery and supplier coordination.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Your mechanical parts sourcing partner in China.', description: 'Find Chinese manufacturers, compare technical quotations and coordinate your mechanical parts sourcing project with Hachim Souaiki.', url: 'https://hachimsouaiki.com', siteName: 'Hachim Souaiki', locale: 'en_US', type: 'website' },
  robots: { index: true, follow: true }
};
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Navigation/>
        {children}
        <SiteFooter/>
        <CookieNotice/>
        <WhatsAppWidget/>
      </body>
    </html>
  );
}
