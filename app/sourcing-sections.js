import Icon from "./line-icon";
import EnquiryForm from './enquiry-form';

export function Hero() {
  return (
    <section className="hero" data-area="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="container hero-inner">
        <p className="badge"><span className="badge-dot" aria-hidden="true"></span>China-Based Industrial Sourcing Partner for European Companies</p>
        <h1 id="hero-title"><span>Industrial Sourcing from China.</span> <span className="accent">Backed by Engineering Understanding.</span></h1>
        <p className="hero-lead">Helping European manufacturers source custom mechanical components and industrial machinery from qualified Chinese suppliers.</p>
        <div className="actions center"><a className="btn btn-primary" href="/contact/">Discuss Your Project <Icon name="arrow-right"/></a><a className="btn btn-ghost" href="/how-it-works/">Explore How It Works <Icon name="arrow-down"/></a></div>
        <ul className="hero-proof">
          <li><Icon name="check"/>Technical requirements</li>
          <li><Icon name="check"/>Supplier comparisons</li>
          <li><Icon name="check"/>Sourcing coordination</li>
        </ul>
      </div>
    </section>
  );
}

export function SourcingBand() {
  return (
    <section className="band" aria-label="What I help source">
      <div className="marquee">
        <ul className="marquee-track">
          <li><Icon name="settings"/>CNC milling</li>
          <li><Icon name="settings"/>CNC turning</li>
          <li><Icon name="settings"/>Sheet-metal fabrication</li>
          <li><Icon name="settings"/>Custom mechanical components</li>
          <li><Icon name="settings"/>Surface treatment</li>
          <li><Icon name="settings"/>Industrial spare parts</li>
          <li><Icon name="monitor"/>CNC machines</li>
          <li><Icon name="monitor"/>Production equipment</li>
          <li><Icon name="monitor"/>Automation equipment</li>
          <li aria-hidden="true"><Icon name="settings"/>CNC milling</li>
          <li aria-hidden="true"><Icon name="settings"/>CNC turning</li>
          <li aria-hidden="true"><Icon name="settings"/>Sheet-metal fabrication</li>
          <li aria-hidden="true"><Icon name="settings"/>Custom mechanical components</li>
          <li aria-hidden="true"><Icon name="settings"/>Surface treatment</li>
          <li aria-hidden="true"><Icon name="settings"/>Industrial spare parts</li>
          <li aria-hidden="true"><Icon name="monitor"/>CNC machines</li>
          <li aria-hidden="true"><Icon name="monitor"/>Production equipment</li>
          <li aria-hidden="true"><Icon name="monitor"/>Automation equipment</li>
        </ul>
      </div>
    </section>
  );
}

export function ProjectNeeds() {
  return (
    <section id="needs" className="section tint" data-area="needs" aria-labelledby="needs-title">
      <div className="container">
        <div className="intro">
          <p className="eyebrow">Where are you starting from?</p>
          <h2 id="needs-title">What do you need to source?</h2>
          <p className="lead">Pick the situation closest to yours. The enquiry form opens with the right questions.</p>
        </div>
        <div className="grid-3 need-grid"><a className="card need" href="/contact/?project=drawing">
            <span className="chip-icon"><Icon name="file-text"/></span>
            <h3>A new supplier for your drawing</h3>
            <p>CNC-machined or sheet-metal parts, made to your drawing, material and tolerances.</p>
            <span className="card-link">Start here <Icon name="arrow-right"/></span>
          </a><a className="card need" href="/contact/?project=alternative">
            <span className="chip-icon"><Icon name="arrow-left-right"/></span>
            <h3>An alternative to a current supplier</h3>
            <p>Price, lead time or communication no longer work. Compare other Chinese manufacturers.</p>
            <span className="card-link">Start here <Icon name="arrow-right"/></span>
          </a><a className="card need" href="/contact/?project=spare">
            <span className="chip-icon"><Icon name="wrench"/></span>
            <h3>A replacement spare part</h3>
            <p>A component is discontinued or hard to source locally. Start from the reference or a sample.</p>
            <span className="card-link">Start here <Icon name="arrow-right"/></span>
          </a><a className="card need" href="/contact/?project=equipment">
            <span className="chip-icon"><Icon name="monitor"/></span>
            <h3>A CNC machine or production equipment</h3>
            <p>Compare specifications, documentation, warranty and after-sales terms between manufacturers.</p>
            <span className="card-link">Start here <Icon name="arrow-right"/></span>
          </a><a className="card need" href="/contact/?project=quotes">
            <span className="chip-icon"><Icon name="factory"/></span>
            <h3>Quotations you already have</h3>
            <p>Check what each supplier really offers and which questions are still open.</p>
            <span className="card-link">Start here <Icon name="arrow-right"/></span>
          </a><a className="card need" href="/contact/?project=production">
            <span className="chip-icon"><Icon name="circle-dollar-sign"/></span>
            <h3>An order already in progress</h3>
            <p>Samples, production milestones and independent inspections to coordinate in China.</p>
            <span className="card-link">Start here <Icon name="arrow-right"/></span>
          </a></div>
      </div>
    </section>
  );
}

export function ServiceOverview() {
  return (
    <section id="services" className="section" data-area="services" aria-labelledby="services-title">
      <div className="container">
        <div className="intro">
          <p className="eyebrow">Services</p>
          <h2 id="services-title">Parts, machinery and supplier coordination.</h2>
          <p className="lead">Three services with defined deliverables, a fee agreed in advance and clear responsibilities.</p>
        </div>
        <div className="grid-3 service-grid">
          <article id="parts" className="card service" data-reveal="true">
            <div className="service-media">
              <img src="/images/cnc.webp" alt="CNC milling of a metal component" width="1200" height="800" loading="lazy" decoding="async"/>
            </div>
            <div className="service-body">
              <div className="service-head"><span className="chip-icon"><Icon name="settings"/></span><span className="service-num">01</span></div>
              <h3>Custom Parts Sourcing</h3>
              <p className="service-intro">For European manufacturers and purchasing teams looking for a new or alternative Chinese source for components.</p>
              <ul className="ticks">
                <li><Icon name="check"/>CNC machining, milling and turning</li>
                <li><Icon name="check"/>Sheet-metal fabrication</li>
                <li><Icon name="check"/>Custom mechanical components</li>
                <li><Icon name="check"/>Industrial spare parts</li>
              </ul>
              <div className="deliverables">
                <p className="micro">Deliverables</p>
                <ul>
                  <li>Supplier shortlist</li>
                  <li>Technical capability comparison</li>
                  <li>Quotation comparison</li>
                  <li>Identification of missing technical information</li>
                </ul>
              </div>
              <p className="fineprint">Fixed project fee · Scope agreed upfront</p>
              <a className="btn btn-outline" href="/contact/?project=drawing">Discuss this service <Icon name="arrow-right"/></a>
            </div>
          </article>
          <article id="machinery" className="card service" data-reveal="true">
            <div className="service-media">
              <img src="/images/spindle.webp" alt="Close-up of a CNC machine spindle" width="1200" height="800" loading="lazy" decoding="async"/>
            </div>
            <div className="service-body">
              <div className="service-head"><span className="chip-icon"><Icon name="monitor"/></span><span className="service-num">02</span></div>
              <h3>Industrial Machinery Sourcing</h3>
              <p className="service-intro">For companies planning to buy CNC machines, production or automation equipment from Chinese manufacturers.</p>
              <ul className="ticks">
                <li><Icon name="check"/>CNC machines</li>
                <li><Icon name="check"/>Production equipment and industrial machinery</li>
                <li><Icon name="check"/>Automation equipment</li>
                <li><Icon name="check"/>Selected manufacturing equipment</li>
              </ul>
              <div className="deliverables">
                <p className="micro">Deliverables</p>
                <ul>
                  <li>Machine specification comparison</li>
                  <li>Manufacturer and supplier research</li>
                  <li>Technical documentation review</li>
                  <li>Warranty and after-sales comparison</li>
                  <li>Coordination of machine verification and acceptance testing where agreed</li>
                </ul>
              </div>
              <p className="fineprint">Fixed fee · Based on the machine and scope</p>
              <a className="btn btn-outline" href="/contact/?project=equipment">Discuss this service <Icon name="arrow-right"/></a>
            </div>
          </article>
          <article id="coordination" className="card service" data-reveal="true">
            <div className="service-media">
              <img src="/images/drawing.webp" alt="Technical drawing under review" width="1200" height="800" loading="lazy" decoding="async"/>
            </div>
            <div className="service-body">
              <div className="service-head"><span className="chip-icon"><Icon name="search"/></span><span className="service-num">03</span></div>
              <h3>Supplier Assessment &amp; Sourcing Coordination</h3>
              <p className="service-intro">For buyers who already have suppliers or quotations, or who are proceeding with a purchase and need follow-up in China.</p>
              <ul className="ticks">
                <li><Icon name="check"/>Supplier research and preliminary assessment</li>
                <li><Icon name="check"/>Technical and commercial comparison</li>
                <li><Icon name="check"/>Supplier communication in Chinese</li>
                <li><Icon name="check"/>Sample coordination</li>
                <li><Icon name="check"/>Production milestone follow-up</li>
                <li><Icon name="check"/>Independent inspection coordination when required</li>
              </ul>
              <div className="deliverables">
                <p className="micro">Deliverables</p>
                <ul>
                  <li>Supplier assessment notes</li>
                  <li>Record of technical decisions</li>
                  <li>Tracker of agreed milestones and open points</li>
                </ul>
              </div>
              <p className="fineprint">Project fee or agreed retainer</p>
              <a className="btn btn-outline" href="/contact/?project=production">Discuss this service <Icon name="arrow-right"/></a>
            </div>
          </article>
        </div>
        <p className="note">Independent inspection, certification, customs, freight forwarding and legal advice are separate specialist services.</p>
      </div>
    </section>
  );
}

export function Evaluation() {
  return (
    <section id="evaluation" className="section tint" data-area="evaluation" aria-labelledby="evaluation-title">
      <div className="container split">
        <div className="split-copy">
          <div className="intro">
            <p className="eyebrow">Technical evaluation</p>
            <h2 id="evaluation-title">Beyond the Quotation: What We Evaluate</h2>
            <p className="lead">Price is one line of the comparison. These are the technical points reviewed before you decide.</p>
          </div>
          <p className="statement">Every project is evaluated against its specific technical requirements. Available evidence, missing information and verification needs are documented before a purchasing decision.</p>
          <a className="btn btn-outline" href="/sample-report/">See a sample report <Icon name="arrow-right"/></a>
        </div>
        <div className="eval-panels">
          <div className="panel" data-reveal="true">
            <p className="panel-title"><span className="chip-icon small"><Icon name="settings"/></span>Parts &amp; Components</p>
            <ul className="rows">
              <li><Icon name="check"/>Material and material certificates</li>
              <li><Icon name="check"/>Engineering drawings and revisions</li>
              <li><Icon name="check"/>Dimensions and tolerances</li>
              <li><Icon name="check"/>GD&amp;T requirements</li>
              <li><Icon name="check"/>Manufacturing processes</li>
              <li><Icon name="check"/>Surface finish and treatment</li>
              <li><Icon name="check"/>Inspection documentation</li>
              <li><Icon name="check"/>Packaging and delivery requirements</li>
            </ul>
          </div>
          <div className="panel" data-reveal="true">
            <p className="panel-title"><span className="chip-icon small"><Icon name="monitor"/></span>Industrial Machinery</p>
            <ul className="rows">
              <li><Icon name="check"/>Technical specifications</li>
              <li><Icon name="check"/>Machine structure and components</li>
              <li><Icon name="check"/>Spindle, motors and control systems</li>
              <li><Icon name="check"/>Positioning accuracy and repeatability</li>
              <li><Icon name="check"/>Performance and acceptance testing</li>
              <li><Icon name="check"/>Electrical and safety documentation</li>
              <li><Icon name="check"/>Warranty and spare parts availability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="section" data-area="process" aria-labelledby="process-title">
      <div className="container">
        <div className="intro">
          <p className="eyebrow">How it works</p>
          <h2 id="process-title">Your sourcing project, step by step.</h2>
          <p className="lead">From the first drawing or machine specification to verification and purchasing, you know what is being done at every stage.</p>
        </div>
        <ol className="steps">
          <li className="card step" data-reveal="true">
            <span className="step-num">01</span>
            <h3>Understand the requirement</h3>
            <p>Receive drawings, specifications, machine applications, quantities and delivery requirements.</p>
          </li>
          <li className="card step" data-reveal="true">
            <span className="step-num">02</span>
            <h3>Define technical criteria</h3>
            <p>Identify critical dimensions, materials, machine capacity, standards and acceptance criteria.</p>
          </li>
          <li className="card step" data-reveal="true">
            <span className="step-num">03</span>
            <h3>Find potential manufacturers</h3>
            <p>Research Chinese suppliers and collect company and capability information.</p>
          </li>
          <li className="card step" data-reveal="true">
            <span className="step-num">04</span>
            <h3>Compare technical &amp; commercial offers</h3>
            <p>Compare specifications, prices, lead times, documentation and unresolved questions.</p>
          </li>
          <li className="card step" data-reveal="true">
            <span className="step-num">05</span>
            <h3>Coordinate verification &amp; purchasing</h3>
            <p>Coordinate samples, independent inspections and machine acceptance tests where required and agreed.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export function WorkingTogether() {
  return (
    <section id="trust" className="section tint" data-area="trust" aria-labelledby="trust-title">
      <div className="container split">
        <div className="split-copy">
          <div className="intro">
            <p className="eyebrow">Working together</p>
            <h2 id="trust-title">A defined role. No surprises.</h2>
            <p className="lead">Sourcing from another continent needs clarity on who does what. Here is how projects are run.</p>
          </div>
          <ul className="commitments">
            <li>
              <span className="chip-icon"><Icon name="clipboard-list"/></span>
              <div>
                <h3>Scope and fee agreed first</h3>
                <p>You receive a written proposal with deliverables, timing, fee and responsibilities before any work starts.</p>
              </div>
            </li>
            <li>
              <span className="chip-icon"><Icon name="lock-keyhole"/></span>
              <div>
                <h3>Drawings shared only when needed</h3>
                <p>No confidential files in the first enquiry. Technical documents go only to suppliers agreed with you.</p>
              </div>
            </li>
            <li>
              <span className="chip-icon"><Icon name="user-round"/></span>
              <div>
                <h3>You keep the decision</h3>
                <p>Comparisons document the evidence and the open points. The purchasing decision always stays with you.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="panel role" data-reveal="true">
          <p className="panel-title"><span className="chip-icon small"><Icon name="shield-check"/></span>What I am — and what I am not</p>
          <ul className="rows">
            <li><Icon name="check"/>Sourcing partner based in China</li>
            <li><Icon name="check"/>Supplier research and technical comparison</li>
            <li><Icon name="check"/>Supplier communication in Chinese</li>
            <li><Icon name="check"/>Coordination of samples, milestones and independent inspections when agreed</li>
            <li className="is-not"><Icon name="x"/>Not a manufacturer</li>
            <li className="is-not"><Icon name="x"/>Not an inspection or certification body</li>
            <li className="is-not"><Icon name="x"/>No guarantee of supplier quality or compliance</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function About({ standalone = false }) {
  const Heading = standalone ? 'h1' : 'h2';

  return (
    <section id="about" aria-labelledby="about-title">
      <div className="section about-hero">
        <div className="container about-hero-inner">
          <div>
            <p className="eyebrow">ABOUT HACHIM</p>
            <Heading id="about-title">{standalone ? "Engineering insight for better supplier decisions." : "Meet Hachim Souaiki"}</Heading>
            <p className="lead">I am a mechanical engineering student and China-based industrial sourcing professional focused on connecting European businesses with Chinese manufacturers.</p>
          </div>
          <figure className="about-portrait">
            <img src="/images/hachim-about-portrait.webp" alt="Portrait of Hachim Souaiki" width={1438} height={1094} loading={standalone ? 'eager' : 'lazy'} decoding="async"/>
            <figcaption>Hachim Souaiki · China-based industrial sourcing</figcaption>
          </figure>
        </div>
      </div>
      {standalone ? (
        <div className="section container about-story">
          <section aria-labelledby="about-approach">
            <h2 id="about-approach">What That Experience Changes for You</h2>
            <p><em>You get more than a supplier. You get an engineering-minded partner who understands how manufacturing works.</em></p>
            <p>Working with manufacturers in China requires more than finding a factory and comparing prices. It requires understanding technical requirements, production capabilities, materials, tolerances, and quality expectations.</p>
            <h3>01. Better Technical Understanding</h3>
            <p>Your drawings, specifications, materials, and tolerances are understood from an engineering perspective before approaching manufacturers.</p>
            <h3>02. More Relevant Suppliers</h3>
            <p>Instead of contacting random factories, we focus on manufacturers whose equipment, capabilities, and production processes match your requirements.</p>
            <h3>03. Clearer Communication</h3>
            <p>Technical requirements are translated into clear discussions with Chinese manufacturers, reducing misunderstandings between your engineering team and the production floor.</p>
            <h3>04. Greater Production Visibility</h3>
            <p>You get a clearer understanding of manufacturing processes, production capabilities, potential limitations, and quality requirements before moving forward.</p>
            <h3>05. Better-Informed Decisions</h3>
            <p>You receive technical and commercial information that helps you evaluate suppliers, compare manufacturing solutions, and make decisions with greater confidence.</p>
            <p><em>The goal is simple: make sourcing from China more transparent, technically informed, and reliable.</em></p>
          </section>
          <section className="panel about-background" aria-labelledby="about-background">
            <h2 id="about-background">Relevant background</h2>
            <ul>
              <li>Master mechanical engineering student with internships in industrial departments</li>
              <li>Based in China, working directly with European industrial buyers</li>
              <li>Focus on custom mechanical components, CNC machining, sheet-metal fabrication and selected industrial machinery</li>
              <li>Supplier communication in Chinese, with English, French, Arabic and German also available</li>
            </ul>
            <p>I handle your supplier research and communication directly. You make the final supplier and purchasing decisions.</p>
          </section>
          <section aria-labelledby="about-confidentiality">
            <h2 id="about-confidentiality">Confidentiality</h2>
            <p>A short project description is enough to get started. Technical documents are shared only with suppliers you agree to involve.</p>
          </section>
        </div>
      ) : (
      <div className="section">
        <div className="container split">
          <div className="prose">
            <h2>How I help industrial buyers</h2>
            <p>My background in mechanical engineering, manufacturing processes and industrial environments helps me understand technical requirements beyond price and availability.</p>
            <p>I work with European manufacturers, purchasing teams and industrial businesses to identify potential Chinese suppliers, review technical and commercial information, coordinate communication and organize sourcing projects.</p>
            <p>My approach combines engineering understanding, structured supplier research and Chinese-language communication.</p>
          </div>
          <aside className="panel facts" aria-label="Key facts">
          <dl>
            <div>
              <dt><Icon name="map-pin"/>Based in</dt>
              <dd>China · working with European industrial buyers</dd>
            </div>
            <div>
              <dt><Icon name="settings"/>Background</dt>
              <dd>Mechanical engineering (final-year student), internships in industrial departments</dd>
            </div>
            <div>
              <dt><Icon name="file-text"/>Focus</dt>
              <dd>Custom mechanical components, CNC machining, sheet-metal fabrication and selected industrial machinery</dd>
            </div>
            <div>
              <dt><Icon name="globe"/>Languages</dt>
              <dd>English · Chinese · French · Arabic · German</dd>
            </div>
          </dl>
          <a className="btn btn-whatsapp" href="https://wa.me/8617589879618" target="_blank" rel="noopener noreferrer"><svg className="icon " viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M12.04 2.5a9.43 9.43 0 00-8.1 14.27L2.5 21.5l4.86-1.4A9.43 9.43 0 1012.04 2.5zm0 17.2a7.8 7.8 0 01-3.97-1.09l-.28-.17-2.88.83.85-2.8-.19-.29a7.78 7.78 0 116.47 3.52zm4.28-5.83c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.53.12-.16.23-.6.76-.74.92-.14.15-.27.17-.5.06a6.4 6.4 0 01-1.89-1.17 7.1 7.1 0 01-1.3-1.63c-.14-.23 0-.36.1-.47.11-.11.24-.27.35-.41.12-.14.16-.23.24-.39.08-.15.04-.29-.02-.4-.06-.12-.53-1.27-.72-1.74-.19-.46-.39-.4-.53-.4h-.45a.87.87 0 00-.63.29 2.65 2.65 0 00-.82 1.96 4.6 4.6 0 00.96 2.44 10.5 10.5 0 004.03 3.56c.56.24 1 .39 1.35.5.56.18 1.08.15 1.48.09.45-.07 1.38-.56 1.58-1.11.2-.55.2-1.02.14-1.12-.06-.1-.21-.15-.45-.27z"></path></svg>Message Hachim on WhatsApp</a>
          </aside>
        </div>
      </div>
      )}
    </section>
  );
}

export function SamplePreview() {
  return (
    <section id="example" className="section tint" data-area="example" aria-labelledby="example-title">
      <div className="container split">
        <div className="split-copy">
          <div className="intro">
            <p className="eyebrow">Illustrative example</p>
            <h2 id="example-title">What a sourcing report looks like.</h2>
            <p className="lead">Requirement, supplier criteria, quotation comparison, open questions and next steps, organised in one document. All figures and suppliers in the example are fictitious.</p>
          </div>
          <div className="actions"><a className="btn btn-primary" href="/sample-report/">View the sample report <Icon name="arrow-right"/></a></div>
        </div>
        <div className="panel report-card" data-reveal="true">
          <div className="report-top">
            <p className="micro">Sample report · HS-EX-001</p>
            <span className="tag">Fictitious data</span>
          </div>
          <h3>CNC-machined bearing housing</h3>
          <dl className="report-rows">
            <div>
              <dt>Material</dt>
              <dd>Aluminium 6061-T6, certificate requested</dd>
            </div>
            <div>
              <dt>Critical feature</dt>
              <dd>Bore Ø42 H7</dd>
            </div>
            <div>
              <dt>Process</dt>
              <dd>CNC milling + boring · clear anodise</dd>
            </div>
            <div>
              <dt>Quotations</dt>
              <dd>3 anonymised suppliers, same basis</dd>
            </div>
            <div>
              <dt>Next action</dt>
              <dd>Clarify bore masking, then request samples</dd>
            </div>
          </dl>
          <p className="open-point"><strong>Open point</strong> Will the anodising keep the Ø42 H7 bore within tolerance?</p>
        </div>
      </div>
    </section>
  );
}

export function Faq({ standalone = false }) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section id="faq" className="section" data-area="faq" aria-labelledby="faq-title">
      <div className="container faq">
        <div className="faq-side">
          <div className="intro">
            <p className="eyebrow">FAQ</p>
            <Heading id="faq-title">Questions buyers ask.</Heading>
          </div>
          <p className="muted">Something specific to your project?</p>
          <a className="text-link" href="mailto:info@hachimsouaiki.com">Ask Hachim by email <Icon name="arrow-right"/></a>
        </div>
        <div className="faq-list">
          <details name={standalone ? "buyer-faq" : undefined}>
            <summary>Can you source CNC-machined and sheet-metal components?<span className="faq-sign" aria-hidden="true"></span></summary>
            <p>Yes. CNC-machined parts (milling and turning), sheet-metal fabrication, custom mechanical components and industrial spare parts are the main focus. I research Chinese manufacturers whose capabilities match your drawing, material, tolerances, finish and quantity, and compare their quotations on the same basis.</p>
          </details>
          <details name={standalone ? "buyer-faq" : undefined}>
            <summary>Can you help us evaluate an existing Chinese supplier?<span className="faq-sign" aria-hidden="true"></span></summary>
            <p>Yes. I can review the information and quotations you already have, collect missing company and capability information, compare it against your requirements and list the questions that remain open before you place an order.</p>
          </details>
          <details name={standalone ? "buyer-faq" : undefined}>
            <summary>Can you compare industrial machinery from different Chinese manufacturers?<span className="faq-sign" aria-hidden="true"></span></summary>
            <p>Yes. I compare machine specifications, components, documentation, warranty and after-sales terms from different manufacturers, and highlight the differences and the information still to confirm. The purchasing decision remains yours.</p>
          </details>
          <details name={standalone ? "buyer-faq" : undefined}>
            <summary>Do you perform independent factory inspections?<span className="faq-sign" aria-hidden="true"></span></summary>
            <p>No. I am not an inspection or certification body. When a factory audit, product inspection or testing is required, I can coordinate it with an independent inspection provider as part of the agreed scope.</p>
          </details>
          <details name={standalone ? "buyer-faq" : undefined}>
            <summary>Can you coordinate sample inspection and machine acceptance testing?<span className="faq-sign" aria-hidden="true"></span></summary>
            <p>Yes, where this is agreed in the project scope. I can coordinate samples, independent inspections and machine acceptance tests with the supplier and the provider you choose, and record the results and open points. I do not personally certify parts or machinery.</p>
          </details>
          <details name={standalone ? "buyer-faq" : undefined}>
            <summary>How do you protect confidential technical drawings?<span className="faq-sign" aria-hidden="true"></span></summary>
            <p>You do not need to send confidential drawings in the first enquiry. Drawings are shared only when needed for a specific step and only with suppliers agreed with you. Confidentiality and file-sharing arrangements, such as an NDA, can be agreed before technical files are exchanged.</p>
          </details>
          <details name={standalone ? "buyer-faq" : undefined}>
            <summary>Do you work with companies throughout Europe?<span className="faq-sign" aria-hidden="true"></span></summary>
            <p>Yes. I am based in China and work with industrial buyers in Germany, Austria and other European countries. Projects are handled remotely in English, with supplier communication in Chinese.</p>
          </details>
          <details name={standalone ? "buyer-faq" : undefined}>
            <summary>How are your China sourcing services priced?<span className="faq-sign" aria-hidden="true"></span></summary>
            <p>See <a className="text-link" href="/services/">Services &amp; pricing</a> for the four packages and what each includes. The final fee depends on the scope. You receive a proposal covering the deliverables, timing, fee and responsibilities before work begins.</p>
          </details>
          <details name={standalone ? "buyer-faq" : undefined}>
            <summary>Do you guarantee quality or supplier reliability?<span className="faq-sign" aria-hidden="true"></span></summary>
            <p>No. Supplier research, comparisons and document reviews help inform your decision, but they do not guarantee product quality, supplier reliability or regulatory compliance. Independent inspection, testing or certification must be arranged separately with an appropriate provider.</p>
          </details>
          <details name={standalone ? "buyer-faq" : undefined}>
            <summary>Do you handle shipping, customs and certification?<span className="faq-sign" aria-hidden="true"></span></summary>
            <p>My role is sourcing support and coordination. Freight forwarding, customs brokerage, legal advice and certification are separate specialist services. Any coordination with these providers must be agreed in the project scope.</p>
          </details>
        </div>
      </div>
    </section>
  );
}

export function Enquiry() {
  return (
    <section id="enquiry" className="section tint contact" data-area="enquiry" aria-labelledby="enquiry-title">
      <div className="container contact-grid">
        <div className="contact-copy">
          <div className="intro">
            <p className="eyebrow">Discuss your project</p>
            <h2 id="enquiry-title">Have a parts or machinery sourcing project?</h2>
            <p className="lead">Share your requirements and receive a proposal outlining the scope, deliverables, timeline and fee.</p>
          </div>
          <ul className="contact-list">
            <li><a href="https://cal.com/hachimsouaiki/china-sourcing-consultation" target="_blank" rel="noopener noreferrer"><span className="chip-icon"><Icon name="calendar-days"/></span><span><strong>Book a free 30-minute call</strong><small>Video call · no obligation</small></span><Icon name="arrow-right" className="icon end"/></a></li>
            <li><a href="https://wa.me/8617589879618" target="_blank" rel="noopener noreferrer"><span className="chip-icon"><svg className="icon " viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M12.04 2.5a9.43 9.43 0 00-8.1 14.27L2.5 21.5l4.86-1.4A9.43 9.43 0 1012.04 2.5zm0 17.2a7.8 7.8 0 01-3.97-1.09l-.28-.17-2.88.83.85-2.8-.19-.29a7.78 7.78 0 116.47 3.52zm4.28-5.83c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.53.12-.16.23-.6.76-.74.92-.14.15-.27.17-.5.06a6.4 6.4 0 01-1.89-1.17 7.1 7.1 0 01-1.3-1.63c-.14-.23 0-.36.1-.47.11-.11.24-.27.35-.41.12-.14.16-.23.24-.39.08-.15.04-.29-.02-.4-.06-.12-.53-1.27-.72-1.74-.19-.46-.39-.4-.53-.4h-.45a.87.87 0 00-.63.29 2.65 2.65 0 00-.82 1.96 4.6 4.6 0 00.96 2.44 10.5 10.5 0 004.03 3.56c.56.24 1 .39 1.35.5.56.18 1.08.15 1.48.09.45-.07 1.38-.56 1.58-1.11.2-.55.2-1.02.14-1.12-.06-.1-.21-.15-.45-.27z"></path></svg></span><span><strong>WhatsApp</strong><small>+86 175 8987 9618</small></span><Icon name="arrow-right" className="icon end"/></a></li>
            <li><a href="mailto:info@hachimsouaiki.com"><span className="chip-icon"><Icon name="mail"/></span><span><strong>Email</strong><small>info@hachimsouaiki.com</small></span><Icon name="arrow-right" className="icon end"/></a></li>
          </ul>
          <p className="muted small hours"><Icon name="clock"/>Mon–Fri, 09:00–17:00 · China (UTC+8). No confidential drawings needed at this stage.</p>
        </div>
        <EnquiryForm/>
      </div>
    </section>
  );
}
