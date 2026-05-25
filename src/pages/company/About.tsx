import PageLayout from '../PageLayout';

export default function About() {
  return (
    <PageLayout
      title="About Lucky Web"
      subtitle="A software engineering studio building premium digital infrastructure for ambitious organizations worldwide."
    >
      <div style={{ display: 'grid', gap: '48px' }}>
        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Our Story
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            Lucky Web was founded with a simple belief: software should be built to last. Based in Lagos, Nigeria, we serve clients across Africa, Europe, and North America — delivering web applications, desktop software, and AI systems that combine rigorous engineering with refined design. Every project we undertake is an opportunity to solve real problems with technology that performs flawlessly at scale.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Our Values
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Engineering Excellence', desc: 'We write clean, tested, and maintainable code. No shortcuts, no technical debt left behind.' },
              { title: 'Design Discipline', desc: 'Every interface is crafted with intention — intuitive, accessible, and visually coherent.' },
              { title: 'Radical Transparency', desc: 'Clear communication, honest timelines, and visible progress throughout every engagement.' },
              { title: 'Long-Term Partnership', desc: 'We build relationships, not just software. Your success is our success.' },
            ].map((item) => (
              <div key={item.title} style={{ padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '4px' }}>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '18px', color: '#c9a66b', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#94a3b8', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Based in Nigeria. Building for the World.
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            From our base in Lagos, we bring a unique perspective to global software challenges — combining deep local market knowledge with international best practices. We understand the nuances of building for emerging markets: unreliable networks, diverse devices, and the need for offline-capable applications. This experience makes us uniquely qualified to build software that works everywhere.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
