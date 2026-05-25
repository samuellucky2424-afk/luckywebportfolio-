import PageLayout from '../PageLayout';

export default function Contact() {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="Ready to build something exceptional? Let's start a conversation."
    >
      <div style={{ display: 'grid', gap: '48px' }}>
        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Get in Touch
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            Whether you have a detailed specification or just an idea, we'd love to hear about it. We typically respond within 24 hours and begin every engagement with a free discovery call to understand your goals, constraints, and timeline.
          </p>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          <div style={{ padding: '32px', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '4px' }}>
            <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '20px', color: '#c9a66b', marginBottom: '12px' }}>Email</h3>
            <a href="mailto:hello@luckyweb.site" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#fcfaee'; }} onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = '#94a3b8'; }}>
              hello@luckyweb.site
            </a>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#64748b', marginTop: '8px' }}>For project inquiries and general questions</p>
          </div>

          <div style={{ padding: '32px', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '4px' }}>
            <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '20px', color: '#c9a66b', marginBottom: '12px' }}>Location</h3>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8' }}>
              Lagos, Nigeria
            </p>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#64748b', marginTop: '8px' }}>Serving clients globally</p>
          </div>

          <div style={{ padding: '32px', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '4px' }}>
            <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '20px', color: '#c9a66b', marginBottom: '12px' }}>Response Time</h3>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8' }}>
              Within 24 hours
            </p>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#64748b', marginTop: '8px' }}>Monday — Friday, 9AM — 6PM WAT</p>
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            What to Expect
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { step: '01', title: 'Discovery Call', desc: 'A 30-minute conversation to understand your vision, constraints, and success criteria.' },
              { step: '02', title: 'Proposal', desc: 'A detailed scope, timeline, and investment breakdown within 48 hours of our call.' },
              { step: '03', title: 'Development', desc: 'Weekly demos, transparent progress tracking, and direct access to your engineering team.' },
              { step: '04', title: 'Delivery', desc: 'Rigorous testing, documentation, deployment support, and 30 days of post-launch care.' },
            ].map((item) => (
              <div key={item.step} style={{ padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '4px' }}>
                <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', fontWeight: 600, color: '#c9a66b', letterSpacing: '2px' }}>{item.step}</span>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '18px', color: '#fcfaee', marginTop: '8px', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#94a3b8', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
