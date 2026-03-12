import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Business Central implementation, customization, integration, and migration services by integrated.ee.',
  alternates: { canonical: '/pages/services/' },
  openGraph: {
    title: 'Services — integrated.ee',
    description: 'Business Central implementation, customization, integration, and migration services by integrated.ee.',
    url: '/pages/services/',
  },
  twitter: {
    title: 'Services — integrated.ee',
    description: 'Business Central implementation, customization, integration, and migration services by integrated.ee.',
  },
};

export default function ServicesPage() {
  return (
    <main id="main">
      {/* Page intro */}
      <section className="section">
        <div className="container">
          <span className="section-label">What we do</span>
          <h1 className="section-heading">Services</h1>
          <p className="section-intro">From your first requirements workshop to years of ongoing support — we cover the full Business Central lifecycle.</p>
        </div>
      </section>

      {/* Feature rows */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">

          {/* 1. BC Implementation */}
          <div className="feature-row">
            <div className="feature-text">
              <span className="feature-label">01</span>
              <h2>BC Implementation</h2>
              <p>We take you from day one to go-live — requirements, configuration, data migration, training, and the support after.</p>
              <ul className="feature-list">
                <li>Requirements analysis</li>
                <li>Configuration &amp; setup</li>
                <li>Data migration</li>
                <li>User training</li>
                <li>Go-live support</li>
              </ul>
            </div>
          </div>

          {/* 2. Customization & AL Development */}
          <div className="feature-row">
            <div className="feature-text">
              <span className="feature-label">02</span>
              <h2>Customization &amp; AL Development</h2>
              <p>When standard BC doesn&apos;t quite fit, we build extensions that do. Clean AL code, upgrade-safe, designed around how you actually work.</p>
              <ul className="feature-list">
                <li>Custom extensions</li>
                <li>Workflow automation</li>
                <li>Report development</li>
                <li>AppSource apps</li>
                <li>Code review &amp; optimization</li>
              </ul>
            </div>
          </div>

          {/* 3. Integration */}
          <div className="feature-row">
            <div className="feature-text">
              <span className="feature-label">03</span>
              <h2>Integration</h2>
              <p>Connect Business Central to the rest of your stack — e-commerce, warehousing, banking, or anything with an API.</p>
              <ul className="feature-list">
                <li>E-commerce platforms</li>
                <li>Warehouse management</li>
                <li>Banking &amp; payments</li>
                <li>REST/SOAP APIs</li>
                <li>Custom connectors</li>
              </ul>
            </div>
          </div>

          {/* 4. Process Improvement */}
          <div className="feature-row">
            <div className="feature-text">
              <span className="feature-label">04</span>
              <h2>Process Improvement</h2>
              <p>We look at how your business runs and find what can be automated, simplified, or handled by AI — then build it into BC.</p>
              <ul className="feature-list">
                <li>Workflow automation</li>
                <li>AI-assisted processes</li>
                <li>Manual task elimination</li>
                <li>Reporting &amp; dashboards</li>
                <li>Continuous optimization</li>
              </ul>
            </div>
          </div>

          {/* 5. Consulting & Architecture */}
          <div className="feature-row">
            <div className="feature-text">
              <span className="feature-label">05</span>
              <h2>Consulting &amp; Architecture</h2>
              <p>Strategic guidance to make sure your BC environment scales with your business. We help you design the right solution from the start.</p>
              <ul className="feature-list">
                <li>Solution architecture</li>
                <li>Process optimization</li>
                <li>BC roadmap planning</li>
                <li>Performance tuning</li>
                <li>Best practices audit</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Need help with Business Central?</h2>
          <p>Tell us where you are and where you want to go.</p>
          <Link href="/pages/contact/" className="btn btn-accent btn-lg">Start a conversation</Link>
        </div>
      </section>
    </main>
  );
}
