import { Process, WorkingTogether } from '../sourcing-sections';

export const metadata = {
  title: 'How It Works | Hachim Souaiki',
  alternates: { canonical: '/how-it-works/' },
};

export default function Page() {
  return <main id="main"><h1 className="sr-only">How It Works</h1><Process/><WorkingTogether/></main>;
}
