import { ServiceOverview } from '../sourcing-sections';
import ServicePackages from '../service-packages';

export const metadata = {
  title: 'Industrial Sourcing Services & Pricing | Hachim Souaiki',
  description: 'Compare four China industrial sourcing packages covering consultation, supplier discovery, samples and production follow-up.',
  alternates: { canonical: '/services/' },
};

export default function Services() {
  return <main id="main"><ServicePackages/><ServiceOverview/></main>;
}
