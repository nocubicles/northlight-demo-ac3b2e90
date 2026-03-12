import type { Metadata } from 'next';
import Link from 'next/link';
import StatsAnimation from '@/components/StatsAnimation';

export const metadata: Metadata = {
  title: 'integrated.ee — Business Central Partner in Estonia',
  description: 'Business Central expertise with a senior team and AI-powered delivery. Implementations, customizations, integrations, and support.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'integrated.ee — Business Central Partner in Estonia',
    description: 'Business Central expertise with a senior team and AI-powered delivery. Implementations, customizations, integrations, and support.',
    url: '/',
  },
  twitter: {
    title: 'integrated.ee — Business Central Partner in Estonia',
    description: 'Business Central expertise with a senior team and AI-powered delivery. Implementations, customizations, integrations, and support.',
  },
};

export default function HomePage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Business Central expertise. Senior team. Direct access.</h1>
          <p className="hero-sub">You get a named consultant who knows your system. Senior team, direct access, AI-powered delivery. Delivered across 6 countries.</p>
          <div className="hero-actions">
            <Link href="/pages/approach/" className="btn btn-accent btn-lg">Our approach</Link>
            <Link href="/pages/contact/" className="btn btn-ghost-light btn-lg">Get in touch</Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="stat-block">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years in Business Software</div>
            </div>

            <div className="stat-block">
              <div className="stat-number">3 &rarr; 15</div>
              <div className="stat-label">3-person team, output of 15 — thanks to AI</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">Same day</div>
              <div className="stat-label">Response on business days</div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="credibility-strip">
        <div className="container">
          <div className="credibility-grid">
            <div className="credibility-block">
              <div className="credibility-block-title">Recognition</div>
              <div className="credibility-badge">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                Microsoft MVP — Business Central
              </div>
            </div>
            <div className="credibility-block">
              <div className="credibility-block-title">Industries</div>
              <div className="credibility-tags">
                <span className="credibility-tag">Construction</span>
                <span className="credibility-tag">Manufacturing</span>
                <span className="credibility-tag">Tech</span>
                <span className="credibility-tag">Energy</span>
                <span className="credibility-tag">Food</span>
              </div>
            </div>
            <div className="credibility-block">
              <div className="credibility-block-title">Countries</div>
              <div className="credibility-tags">
                <span className="credibility-tag">Estonia</span>
                <span className="credibility-tag">Canada</span>
                <span className="credibility-tag">USA</span>
                <span className="credibility-tag">UK</span>
                <span className="credibility-tag">Finland</span>
                <span className="credibility-tag">Sweden</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <span className="section-label">What we do</span>
          <h2 className="section-heading">Services</h2>
          <div className="card-grid card-grid-3">
            <div className="service-card">
              <div className="service-card-icon">01</div>
              <h3>Implementation</h3>
              <p>We take you from day one to go-live — requirements, configuration, data migration, training, and the support after.</p>
            </div>
            <div className="service-card">
              <div className="service-card-icon">02</div>
              <h3>Process Improvement</h3>
              <p>We look at how your business runs and find what can be automated, simplified, or handled by AI — then build it into BC.</p>
            </div>
            <div className="service-card">
              <div className="service-card-icon">03</div>
              <h3>Consulting &amp; Architecture</h3>
              <p>Strategic guidance to make sure your BC environment scales with your business. We help you design the right solution from the start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Teaser (dark) */}
      <section className="dark-section" style={{ padding: 'var(--sp-10) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">How we work</span>
          <h2 style={{ marginBottom: 'var(--sp-4)' }}>AI-powered delivery.<br />Human-led decisions.</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto var(--sp-6)' }}>We use AI to accelerate development, automate repetitive work, and deliver faster — while senior consultants make every decision and review every line of code.</p>
          <Link href="/pages/approach/" className="btn btn-ghost-light">Learn about our approach</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to talk?</h2>
          <p>We respond the same business day. Solutions usually within a day or two.</p>
          <div style={{ display: 'flex', gap: 'var(--sp-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/pages/contact/" className="btn btn-accent btn-lg">Start a conversation</Link>
            <a href="https://outlook.office365.com/book/integratedee@integrated.ee/" target="_blank" rel="noopener" className="btn btn-ghost-light btn-lg">Book a 30-min call</a>
          </div>
        </div>
      </section>

      <StatsAnimation />
    </main>
  );
}
