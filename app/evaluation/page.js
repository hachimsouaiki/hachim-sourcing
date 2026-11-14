import { Evaluation, WorkingTogether } from '../sourcing-sections';

export const metadata = {
  title: 'Technical Evaluation | Hachim Souaiki',
  alternates: { canonical: '/evaluation/' },
};

export default function Page() {
  return <main id="main"><h1 className="sr-only">Technical Evaluation</h1><Evaluation/><WorkingTogether/></main>;
}
