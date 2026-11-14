import Icon from "./line-icon";
const packages = [
  {
    id: 'consultation', title: 'Sourcing Consultation', price: '€95',
    basis: 'Per 60-minute online session',
    fit: 'For companies exploring China sourcing or looking for direction before sending an RFQ.',
    includes: [
      'Review of your sourcing requirements and current challenge',
      'Initial review of technical and commercial risks',
      'Guidance on sourcing and supplier evaluation',
      '60-minute online consultation',
      'Written summary and action plan within 2 business days',
      'One follow-up email for clarification',
    ],
    exclusions: 'Supplier search, factory verification, RFQs, quotation collection, production management, inspection and certification.',
  },
  {
    id: 'discovery', title: 'Supplier Discovery & Comparison', price: '€490',
    basis: 'Fixed fee for one defined sourcing brief',
    fit: 'For buyers who need a shortlist for one defined product or a closely related product family.',
    includes: [
      'Review of your drawing, specification or product brief',
      'Preparation of a supplier enquiry or RFQ brief',
      'Search and initial screening of up to 5 potential suppliers',
      'Request and organization of available quotations',
      'Like-for-like technical and commercial comparison',
      'Comparison report with key gaps and recommended next steps',
    ],
    exclusions: 'On-site audits, independent verification, laboratory testing, certification, compliance approval, negotiation, production follow-up and sample, tooling, freight, customs or other third-party costs.',
  },
  {
    id: 'coordination', title: 'Sourcing & Sample Coordination', price: 'From €350',
    basis: 'Per supplier and sample round. Final fee depends on scope.',
    fit: 'For companies with a shortlisted supplier that need help coordinating samples and clarifications.',
    includes: [
      'Supplier communication and clarification of outstanding requirements',
      'Coordination of sample quotations, lead times and ordering details',
      'Follow-up on sample preparation and dispatch',
      'Coordination of customer feedback and revisions',
      'Sample-stage status summary and open-issue log',
    ],
    exclusions: 'Sample, tooling, courier, freight and import costs, independent dimensional inspection, testing, formal approval, certification and mass-production management unless separately agreed.',
  },
  {
    id: 'production', title: 'Managed Sourcing & Production Follow-up', price: 'From €450',
    basis: 'Per supplier, per 30-day coordination period',
    fit: 'For companies with an active order that need regular supplier communication and production updates.',
    includes: [
      'Agreed communication schedule with the supplier',
      'Follow-up on production milestones and delivery updates',
      'Tracking of open technical and commercial issues',
      'Coordination of customer and supplier clarifications',
      'Periodic written status reports and escalation of identified risks',
      'Coordination of third-party pre-shipment inspection on request',
    ],
    exclusions: 'Factory control, performance or delivery guarantees, inspection fees, testing, travel, freight forwarding, customs clearance, insurance and legal services.',
  },
];

const extras = [
  ['Additional supplier screening', 'Each supplier beyond the package scope.'],
  ['On-site factory visit or audit coordination', 'Availability, travel and audit scope are confirmed before booking.'],
  ['Independent inspection coordination', 'The inspection provider’s fee is paid separately.'],
  ['Additional sample round', 'Extra sample iterations or additional suppliers.'],
];

export default function ServicePackages({ preview = false }) {
  const Heading = preview ? 'h2' : 'h1';
  const PackageHeading = preview ? 'h3' : 'h2';

  return (
    <section id="pricing" className="section container">
      <div className="section-intro">
        <p className="eyebrow">CHINA INDUSTRIAL SOURCING</p>
        <Heading>Services & pricing</Heading>
        <p className="intro-copy">Choose support for the stage you’re at, from defining a sourcing brief to following up on production.</p>
      </div>
      <div className={`package-grid ${preview ? 'package-preview' : ''}`}>
        {packages.map(({ id, title, price, basis, fit, includes, exclusions }) => (
          <article className="package-card" id={preview ? undefined : id} key={id}>
            <header className="package-header">
              <PackageHeading>{title}</PackageHeading>
              <div className="package-rate">
                <p className="package-price">{price}</p>
                
              </div>
              <p className="package-fit">{fit}</p>
            </header>
            {preview ? (
              <a className="text-link" href={`/services/#${id}`}>See package <Icon name="arrow-right"/></a>
            ) : (
              <details className="package-scope">
                <summary>See service scope <Icon name="arrow-right"/></summary>
                <div className="package-content">
                <p className="package-basis">{basis}</p>
                <h3>What’s included</h3>
                <ul className="package-inclusions" role="list">
                  {includes.map(item => <li key={item}><Icon name="check"/>{item}</li>)}
                </ul>
                <h3>Outside this package</h3>
                <p>{exclusions}</p>
                <a className="btn btn-ghost" href="/contact/" aria-label={`Discuss ${title}`}>
                  Discuss this package <Icon name="arrow-up-right"/>
                </a>
                </div>
              </details>
            )}
          </article>
        ))}
      </div>
      {!preview && (
        <div className="package-notes">
          <h2>Optional services</h2>
          <p>Optional services are quoted separately.</p>
          <dl>{extras.map(([title, detail]) => <div key={title}><dt>{title}</dt><dd>{detail}</dd></div>)}</dl>
          <h2>Scope and fees</h2>
          <ul>
            <li>Prices are launch prices in EUR. Your written proposal confirms deliverables, timing, assumptions and payment terms before work starts.</li>
            <li>Supplier quotations, samples, tooling, shipping, duties, taxes, travel, independent inspections, laboratory tests and certification costs are separate unless expressly included.</li>
            <li>Hachim provides sourcing support and coordination. Manufacturing, factory control, certification and legal advice fall outside that scope. Supplier performance and product conformity are the supplier’s responsibility.</li>
            <li>Any referral fee, commission or other compensation received from a supplier is disclosed to the customer.</li>
            <li>You retain final supplier selection, technical acceptance and purchasing decisions.</li>
          </ul>
        </div>
      )}
    </section>
  );
}
