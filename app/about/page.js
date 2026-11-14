import { About } from '../sourcing-sections';

export const metadata = {
  title: 'About Hachim | Hachim Souaiki',
  alternates: { canonical: '/about/' },
};

export default function Page() {
  return <main id="main" className="about-page"><About standalone/></main>;
}
