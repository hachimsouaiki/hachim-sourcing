import { SourcingBand, ProjectNeeds, ServiceOverview } from '../sourcing-sections';

export const metadata = {
  title: 'What I Help Source | Hachim Souaiki',
  alternates: { canonical: '/expertise/' },
};

export default function Page() {
  return <main id="main"><h1 className="sr-only">What I Help Source</h1><SourcingBand/><ProjectNeeds/><ServiceOverview/></main>;
}
