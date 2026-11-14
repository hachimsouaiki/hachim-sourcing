import Icon from "../../line-icon";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { insights } from '../../insights-content';
import { readingTime } from '../../insight-cards';

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map(({ slug }) => ({ slug }));
}

async function getGuide(params) {
  const { slug } = await params;
  const guide = insights.find(item => item.slug === slug);
  if (!guide) notFound();
  return guide;
}

export async function generateMetadata({ params }) {
  const { title, summary, slug } = await getGuide(params);
  return {
    title: `${title} | Hachim Souaiki`,
    description: summary,
    alternates: { canonical: `/insights/${slug}/` },
  };
}

export default async function GuidePage({ params }) {
  const guide = await getGuide(params);
  return (
    <main id="main" className="section container guide-page">
      <article>
        <Link className="text-link" href="/insights/"><Icon name="arrow-left"/> All insights</Link>
        <header>
          <p className="eyebrow">{guide.category} · {readingTime(guide)} min read</p>
          <h1>{guide.title}</h1>
          <p className="intro-copy">{guide.summary}</p>
        </header>
        <img className="guide-cover" src={`/images/${guide.image}.webp`} alt="" width="960" height="450"/>
        <div className="guide-copy">
          {guide.takeaways && (
            <section className="panel guide-takeaways">
              <h2>Key takeaways</h2>
              <ul>{guide.takeaways.map(item => <li key={item}>{item}</li>)}</ul>
            </section>
          )}
          {guide.sections.map(([heading, text]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <p>{text}</p>
            </section>
          ))}
          {guide.example && (
            <section>
              <h2>{guide.example.title ?? "Example RFQ schedule"}</h2>
              <div className="guide-table" tabIndex={0} role="region" aria-label={guide.example.title ?? "Example RFQ schedule"}>
                <table>
                  <thead><tr>{guide.example.headers.map(label => <th key={label} scope="col">{label}</th>)}</tr></thead>
                  <tbody>{guide.example.rows.map(([sku, ...cells]) => (
                    <tr key={sku}><th scope="row">{sku}</th>{cells.map(cell => <td key={cell}>{cell}</td>)}</tr>
                  ))}</tbody>
                </table>
              </div>
            </section>
          )}
          {guide.questions && (
            <section className="faq-list">
              <h2>Common questions</h2>
              {guide.questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}<span className="faq-sign" aria-hidden="true"/></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </section>
          )}
          <Link className="btn btn-primary" href="/contact/">Discuss your project <Icon name="arrow-up-right"/></Link>
        </div>
      </article>
    </main>
  );
}
