import { insights } from './insights-content';

export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://hachimsouaiki.com';
  const pages = ['expertise', 'services', 'how-it-works', 'about', 'contact', 'privacy', 'insights', 'evaluation', 'faq', 'sample-report'];
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    ...pages.map(page => ({ url: `${base}/${page}/` })),
    ...insights.map(({ slug }) => ({ url: `${base}/insights/${slug}/` })),
  ];
}
