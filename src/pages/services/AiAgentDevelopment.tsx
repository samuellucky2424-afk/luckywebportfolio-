import PageLayout from '../PageLayout';

export default function AiAgentDevelopment() {
  return (
    <PageLayout
      title="AI Agent Development"
      subtitle="Autonomous, intelligent software systems that reason, act, and adapt to solve complex business problems."
    >
      <div style={{ display: 'grid', gap: '48px' }}>
        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Autonomous AI Systems
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            We build AI agents that don't just respond — they act. From intelligent customer support bots that handle complex queries end-to-end, to autonomous data processing pipelines that make decisions without human intervention. Our agents integrate with large language models, vector databases, and external tools to perform real-world tasks.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Workflow Automation
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            Our AI agents can read emails, extract data from documents, update CRMs, schedule appointments, and trigger business processes — all while learning from feedback to improve over time. We design agent architectures that are transparent, controllable, and aligned with your business rules.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Use Cases
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Intelligent Support', desc: 'AI agents that resolve customer issues, escalate when necessary, and learn from every interaction.' },
              { title: 'Document Processing', desc: 'Automated extraction, classification, and analysis of invoices, contracts, and forms.' },
              { title: 'Research & Summarization', desc: 'Agents that scan multiple sources, synthesize information, and deliver actionable insights.' },
              { title: 'Code Generation', desc: 'AI-powered development assistants that write, review, and refactor code.' },
            ].map((item) => (
              <div key={item.title} style={{ padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '4px' }}>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '18px', color: '#c9a66b', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#94a3b8', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
