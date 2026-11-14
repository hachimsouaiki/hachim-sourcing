import InsightCards from '../insight-cards';

export const metadata = {
  title: 'China Sourcing Insights | Hachim Souaiki',
  description: 'Seven guides on supplier selection, quotation comparison, samples, first orders and pre-shipment inspections.',
  alternates: { canonical: '/insights/' },
};

export default function Insights() {
  return (
    <main id="main" className="section insights-index">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">INSIGHTS</p>
          <h1>Practical guides for sourcing from China.</h1>
          <p className="intro-copy">Compare suppliers and quotes, plan your first order and work through quality decisions with seven practical guides.</p>
        </div>
        <InsightCards/>
      </div>
    </main>
  );
}
