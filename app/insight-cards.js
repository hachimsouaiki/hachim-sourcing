import Icon from "./line-icon";
import Link from 'next/link';
import { insights } from './insights-content';

export function readingTime({ sections, takeaways, example, questions }) {
  const words = [sections, takeaways, example?.headers, example?.rows, questions].flat(Infinity).filter(Boolean).join(' ').split(/\s+/).length;
  return Math.ceil(words / 180);
}

export default function InsightCards({ limit = insights.length, heading: Heading = 'h2' }) {
  return (
    <div className="insight-grid">
      {insights.slice(0, limit).map(guide => (
        <article className="insight-card" key={guide.slug}>
          <img src={`/images/${guide.image}.webp`} alt="" width="760" height="404" loading="lazy"/>
          <div className="insight-card-content">
            <p className="eyebrow">{guide.category} · {readingTime(guide)} min read</p>
            <Heading>{guide.title}</Heading>
            <p>{guide.summary}</p>
            <Link className="text-link" href={`/insights/${guide.slug}/`} aria-label={`Read the guide: ${guide.title}`}>
              Read the Guide <Icon name="arrow-right"/>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
