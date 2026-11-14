import Icon from "./line-icon";
import { Hero, SourcingBand, ProjectNeeds, ServiceOverview, Evaluation, Process, WorkingTogether, About, SamplePreview, Faq, Enquiry } from './sourcing-sections';
import InsightCards from './insight-cards';

export default function Home() {
  return (
    <main id="main">
      <Hero/>
      <SourcingBand/>
      <ProjectNeeds/>
      <ServiceOverview/>
      <Evaluation/>
      <Process/>
      <WorkingTogether/>
      <About/>
      <SamplePreview/>
      <section className="section tint">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">INSIGHTS</p>
            <h2>Practical guides for sourcing from China.</h2>
            <a className="text-link" href="/insights/">View all seven guides <Icon name="arrow-right"/></a>
          </div>
          <InsightCards limit={3} heading="h3"/>
        </div>
      </section>
      <Faq/>
      <Enquiry/>
    </main>
  );
}
