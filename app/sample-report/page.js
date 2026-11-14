import Icon from "../line-icon";
export const metadata = {
  title: 'Sample Sourcing Report | Hachim Souaiki',
  alternates: { canonical: '/sample-report/' },
};

export default function Page() {
  return (
    <main className="shell legal sr-page" id="main">
      <a href="/#example">← Back to the website</a>
      <header className="sr-header">
        <div className="sr-brand"><svg className="logo-mark " viewBox="0 0 108.14 100" aria-hidden="true" focusable="false"><path d="M69.2 0L62.8 13.23H28.31A15.08 15.08 0 0 0 28.31 43.38H79.84A28.31 28.31 0 0 1 79.84 100H38.94L45.34 86.77H79.84A15.08 15.08 0 0 0 79.84 56.62H28.31A28.31 28.31 0 0 1 28.31 0Z" fill="var(--logo-red, #ad302a)"></path><path d="M89.42 0L103.99 0L66.92 76.69L52.35 76.69ZM18.73 100L4.15 100L41.22 23.31L55.79 23.31Z" fill="var(--logo-yellow, #ffda58)"></path></svg><span>Hachim Souaiki</span></div>
        <p className="sr-badge">Illustrative example — not a client project</p>
        <p className="eyebrow">SAMPLE SOURCING REPORT · REF. HS-EX-001</p>
        <h1>CNC-machined bearing housing</h1>
        <p>A German machine-maintenance company needs 500 aluminium bearing housings to replace a part that is no longer available from its original supplier. This example shows how a sourcing report organises the requirement, compares three anonymised supplier responses and lists what must be resolved before ordering.</p>
        <div className="sr-actions">
          <button type="button" className="button secondary">Print or save as PDF</button>
          <a className="btn btn-primary" href="/contact/">Discuss Your Project <Icon name="arrow-right"/></a>
        </div>
      </header>
      <section className="sr-block" aria-labelledby="sr-01">
        <h2 id="sr-01"><span>01</span>Component and requirement</h2>
        <div className="sr-two">
          <dl className="spec-list">
            <div>
              <dt>Component</dt>
              <dd>Bearing housing, single bore, 4 × M6 mounting holes</dd>
            </div>
            <div>
              <dt>Application</dt>
              <dd>Conveyor drive replacement part (maintenance)</dd>
            </div>
            <div>
              <dt>Material</dt>
              <dd>Aluminium 6061-T6, material certificate requested</dd>
            </div>
            <div>
              <dt>Envelope</dt>
              <dd>120 × 80 × 45 mm</dd>
            </div>
            <div>
              <dt>Critical features</dt>
              <dd>Bore Ø42 H7 · flatness of mounting face 0.05 mm</dd>
            </div>
            <div>
              <dt>General tolerance</dt>
              <dd>ISO 2768-m</dd>
            </div>
            <div>
              <dt>Surface</dt>
              <dd>Ra 1.6 µm in bore · clear anodise 10–15 µm</dd>
            </div>
            <div>
              <dt>Process</dt>
              <dd>CNC milling (3-axis) + boring · anodising (may be subcontracted)</dd>
            </div>
            <div>
              <dt>Quantity</dt>
              <dd>500 pcs first order · approx. 2,000 pcs/year</dd>
            </div>
            <div>
              <dt>Destination</dt>
              <dd>Stuttgart, Germany</dd>
            </div>
          </dl>
          <svg className="housing-drawing " viewBox="0 0 640 380" role="img" aria-labelledby="housing-title housing-desc">
            <title id="housing-title">Illustrative drawing of a CNC-machined bearing housing</title>
            <desc id="housing-desc">Front and side views. Envelope 120 by 80 by 45 millimetres, central bore diameter 42 H7, four M6 mounting holes.</desc>
            <g className="dw-grid" aria-hidden="true"><line x1="12" y1="0" x2="12" y2="380"></line><line x1="56" y1="0" x2="56" y2="380"></line><line x1="100" y1="0" x2="100" y2="380"></line><line x1="144" y1="0" x2="144" y2="380"></line><line x1="188" y1="0" x2="188" y2="380"></line><line x1="232" y1="0" x2="232" y2="380"></line><line x1="276" y1="0" x2="276" y2="380"></line><line x1="320" y1="0" x2="320" y2="380"></line><line x1="364" y1="0" x2="364" y2="380"></line><line x1="408" y1="0" x2="408" y2="380"></line><line x1="452" y1="0" x2="452" y2="380"></line><line x1="496" y1="0" x2="496" y2="380"></line><line x1="540" y1="0" x2="540" y2="380"></line><line x1="584" y1="0" x2="584" y2="380"></line><line x1="628" y1="0" x2="628" y2="380"></line><line x1="0" y1="12" x2="640" y2="12"></line><line x1="0" y1="56" x2="640" y2="56"></line><line x1="0" y1="100" x2="640" y2="100"></line><line x1="0" y1="144" x2="640" y2="144"></line><line x1="0" y1="188" x2="640" y2="188"></line><line x1="0" y1="232" x2="640" y2="232"></line><line x1="0" y1="276" x2="640" y2="276"></line><line x1="0" y1="320" x2="640" y2="320"></line><line x1="0" y1="364" x2="640" y2="364"></line></g>
            <g className="dw-part"><rect className="draw" pathlength="1" x="40" y="70" width="288" height="192"></rect><circle className="draw" pathlength="1" cx="184" cy="166" r="50.4"></circle><circle className="draw thin" pathlength="1" cx="184" cy="166" r="56"></circle><circle className="draw" pathlength="1" cx="69" cy="99" r="7.2"></circle><circle className="draw" pathlength="1" cx="299" cy="99" r="7.2"></circle><circle className="draw" pathlength="1" cx="69" cy="233" r="7.2"></circle><circle className="draw" pathlength="1" cx="299" cy="233" r="7.2"></circle><rect className="draw" pathlength="1" x="440" y="70" width="108" height="192"></rect><line className="hidden-line" x1="440" y1="115.6" x2="548" y2="115.6"></line><line className="hidden-line" x1="440" y1="216.4" x2="548" y2="216.4"></line></g>
            <g className="dw-centre" aria-hidden="true"><line x1="184" y1="52" x2="184" y2="280"></line><line x1="22" y1="166" x2="346" y2="166"></line><line x1="428" y1="166" x2="560" y2="166"></line></g>
            <g className="dw-dims">
              <line className="draw" pathlength="1" x1="40" y1="40" x2="328" y2="40"></line>
              <line className="draw" pathlength="1" x1="40" y1="34" x2="40" y2="64"></line>
              <line className="draw" pathlength="1" x1="328" y1="34" x2="328" y2="64"></line>
              <text x="184" y="32">120</text>
              <line className="draw" pathlength="1" x1="14" y1="70" x2="14" y2="262"></line>
              <text x="10" y="170" transform="rotate(-90 10 170)">80</text>
              <line className="draw" pathlength="1" x1="440" y1="40" x2="548" y2="40"></line>
              <line className="draw" pathlength="1" x1="440" y1="34" x2="440" y2="64"></line>
              <line className="draw" pathlength="1" x1="548" y1="34" x2="548" y2="64"></line>
              <text x="494" y="32">45</text>
              <line className="draw leader" pathlength="1" x1="220" y1="130" x2="268" y2="300"></line>
              <line className="draw leader" pathlength="1" x1="268" y1="300" x2="350" y2="300"></line>
              <text className="callout" x="274" y="294">Ø42 H7 · Ra 1.6</text>
              <text className="callout" x="44" y="294">4 × M6</text>
            </g>
            <g className="dw-block">
              <rect x="392" y="296" width="236" height="72"></rect>
              <line x1="392" y1="320" x2="628" y2="320"></line>
              <line x1="392" y1="344" x2="628" y2="344"></line>
              <text x="402" y="313">HS-EX-001 · BEARING HOUSING</text>
              <text x="402" y="337">6061-T6 · CLEAR ANODISE</text>
              <text x="402" y="361">ILLUSTRATIVE · NOT TO SCALE</text>
            </g>
          </svg>
        </div>
      </section>
      <section className="sr-block" aria-labelledby="sr-02">
        <h2 id="sr-02"><span>02</span>Supplier selection criteria</h2>
        <ul className="criteria">
          <li><span>CNC milling and boring capability for H7 bores</span><span className="pill required">Required</span></li>
          <li><span>Measurement method for the bore (gauge or CMM)</span><span className="pill required">Required</span></li>
          <li><span>Material certificate for 6061-T6 available</span><span className="pill required">Required</span></li>
          <li><span>Anodising in-house or named subcontractor</span><span className="pill preferred">Preferred</span></li>
          <li><span>Sample policy and sample lead time stated</span><span className="pill required">Required</span></li>
          <li><span>Export documentation experience</span><span className="pill preferred">Preferred</span></li>
          <li><span>Response time and clarity of answers</span><span className="pill assessed">Assessed</span></li>
        </ul>
      </section>
      <section className="sr-block" aria-labelledby="sr-03">
        <h2 id="sr-03"><span>03</span>Quotation comparison</h2>
        <div className="table-scroll" tabIndex="0" role="region" aria-label="Fictitious quotation comparison, scrollable">
          <table className="quote-table">
            <caption className="sr-only">Fictitious quotation comparison for 500 pieces, in US dollars</caption>
            <thead>
              <tr>
                <th scope="col">USD · fictitious</th>
                <th scope="col">Supplier A</th>
                <th scope="col">Supplier B</th>
                <th scope="col">Supplier C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Quote basis</th>
                <td>FOB Shanghai</td>
                <td>EXW factory</td>
                <td>FOB Ningbo</td>
              </tr>
              <tr>
                <th scope="row">Unit price</th>
                <td>9.80</td>
                <td>8.60</td>
                <td>11.20</td>
              </tr>
              <tr>
                <th scope="row">Fixture / tooling</th>
                <td>350</td>
                <td className="flag">Not stated<span className="sr-only"> (to clarify)</span></td>
                <td>280</td>
              </tr>
              <tr>
                <th scope="row">Total for 500 pcs</th>
                <td>5,250</td>
                <td className="flag">4,300 + fixture?<span className="sr-only"> (to clarify)</span></td>
                <td>5,880</td>
              </tr>
              <tr>
                <th scope="row">Samples</th>
                <td>5 pcs · 180</td>
                <td>5 pcs · 120</td>
                <td>5 pcs · included</td>
              </tr>
              <tr>
                <th scope="row">Sample lead time</th>
                <td>12 days</td>
                <td>10 days</td>
                <td>15 days</td>
              </tr>
              <tr>
                <th scope="row">Production lead time</th>
                <td>25 days</td>
                <td>30 days</td>
                <td>20 days</td>
              </tr>
              <tr>
                <th scope="row">MOQ</th>
                <td>300 pcs</td>
                <td>500 pcs</td>
                <td>200 pcs</td>
              </tr>
              <tr>
                <th scope="row">Anodising</th>
                <td>Subcontracted</td>
                <td className="flag">Not confirmed<span className="sr-only"> (to clarify)</span></td>
                <td>In-house</td>
              </tr>
              <tr>
                <th scope="row">Inspection record</th>
                <td>Dimensional report</td>
                <td className="flag">Not stated<span className="sr-only"> (to clarify)</span></td>
                <td>CMM report on samples</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="sr-note"><span className="flag-key" aria-hidden="true"></span> Highlighted cells need clarification. B looks cheapest, but its quote is EXW and omits the fixture cost: it is not comparable with A and C until it is re-quoted on the same basis.</p>
        <p className="sr-fine">Fictitious figures in USD for 500 pcs. Total = unit price × 500 + fixture. Anonymised suppliers — not real quotations.</p>
      </section>
      <div className="sr-two">
        <section className="sr-block" aria-labelledby="sr-04">
          <h2 id="sr-04"><span>04</span>Tooling and samples</h2>
          <ul className="sr-list">
            <li>Dedicated milling fixture expected (A and C quote it; B to confirm).</li>
            <li>No mould or casting tooling required for this design.</li>
            <li>5 samples per shortlisted supplier, measured before any production order.</li>
            <li>Samples must be produced with the intended production process and anodising route.</li>
          </ul>
        </section>
        <section className="sr-block" aria-labelledby="sr-05">
          <h2 id="sr-05"><span>05</span>Lead time considerations</h2>
          <ul className="sr-list">
            <li>Sample stage: 10–15 days after drawing approval, plus transit.</li>
            <li>Production: 20–30 days after sample approval.</li>
            <li>Anodising subcontracting can add variability — to confirm with A and B.</li>
            <li>Allow time for the buyer’s own sample evaluation before ordering.</li>
          </ul>
        </section>
      </div>
      <section className="sr-block" aria-labelledby="sr-06">
        <h2 id="sr-06"><span>06</span>Missing technical information</h2>
        <ol className="sr-list numbered">
          <li>Current drawing revision and which dimensions are critical to fit</li>
          <li>Whether the bore is masked during anodising</li>
          <li>Thread depth and class for the M6 holes</li>
          <li>Packaging and marking requirements</li>
          <li>Inspection level expected for production lots</li>
          <li>Preferred Incoterm and delivery point</li>
        </ol>
      </section>
      <section className="sr-block" aria-labelledby="sr-07">
        <h2 id="sr-07"><span>07</span>Potential risks</h2>
        <ul className="risk-cards">
          <li>
            <span className="level high">High</span>
            <h3>Bore fit after anodising</h3>
            <p>A 10–15 µm coating can move a Ø42 H7 bore out of tolerance unless it is masked or machined to allow for it.</p>
          </li>
          <li>
            <span className="level medium">Medium</span>
            <h3>Quotes not comparable</h3>
            <p>EXW vs FOB and a missing fixture cost distort the price comparison.</p>
          </li>
          <li>
            <span className="level medium">Medium</span>
            <h3>Subcontracted finishing</h3>
            <p>Anodising outside the factory adds a hand-off for quality and lead time.</p>
          </li>
          <li>
            <span className="level medium">Medium</span>
            <h3>Unrepresentative samples</h3>
            <p>Samples made differently from production would not validate the process.</p>
          </li>
        </ul>
      </section>
      <section className="sr-block" aria-labelledby="sr-08">
        <h2 id="sr-08"><span>08</span>Recommended next steps</h2>
        <ol className="sr-list numbered">
          <li>Confirm critical dimensions and bore masking with the buyer.</li>
          <li>Send a revised RFQ to A, B and C on the same basis (FOB, fixture included).</li>
          <li>Request 5 samples from the two best-placed suppliers.</li>
          <li>Buyer measures samples; independent inspection arranged separately if required.</li>
          <li>Decide whether to place the first order, and with whom.</li>
        </ol>
      </section>
      <aside className="sr-limits">
        <strong>Limits of this report</strong>
        <p>This illustrative report is based on information supplied by suppliers. It does not verify supplier facilities, guarantee quality or replace independent inspection, testing or certification.</p>
      </aside>
      <div className="sr-cta">
        <h2>Have a parts or machinery sourcing project?</h2>
        <p>Share your requirements and receive a proposal outlining the project scope, deliverables, timeline, and fee.</p>
        <a className="btn btn-primary" href="/contact/">Discuss Your Project <Icon name="arrow-right"/></a>
      </div>
    </main>
  );
}
