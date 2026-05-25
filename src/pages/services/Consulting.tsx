import PageLayout from '../PageLayout';

export default function Consulting() {
  return (
    <PageLayout
      title="Consulting"
      subtitle="Strategic technology advisory to help you make the right architectural and platform decisions."
    >
      <div style={{ display: 'grid', gap: '48px' }}>
        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Technology Strategy
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            We help organizations navigate complex technology decisions. Whether you're choosing between monolithic and microservices architectures, evaluating cloud providers, or planning a digital transformation roadmap, we provide independent, experience-backed guidance that aligns with your business goals and budget constraints.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Code Audits & Reviews
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            Our engineering team conducts thorough code audits to identify security vulnerabilities, performance bottlenecks, and architectural debt. We deliver actionable reports with prioritized recommendations, estimated effort, and refactoring strategies that minimize disruption to your product roadmap.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Team Augmentation
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            Need senior engineers to accelerate your project? We embed directly into your team — attending standups, reviewing pull requests, and shipping production code. Our consultants bring deep expertise in React, TypeScript, Node.js, and system architecture to help you hit deadlines without compromising quality.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
