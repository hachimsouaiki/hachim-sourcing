import { Enquiry } from '../sourcing-sections';

export const metadata = {
  title: 'Discuss Your Project | Hachim Souaiki',
  alternates: { canonical: '/contact/' },
};

export default function Page() {
  return <main id="main"><h1 className="sr-only">Discuss Your Project</h1><Enquiry/></main>;
}
