import { Faq } from '../sourcing-sections';

export const metadata = {
  title: 'Questions Buyers Ask | Hachim Souaiki',
  alternates: { canonical: '/faq/' },
};

export default function Page() {
  return <main id="main" className="faq-page"><Faq standalone/></main>;
}
