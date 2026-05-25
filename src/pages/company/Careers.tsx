import PageLayout from '../PageLayout';

export default function Careers() {
  return (
    <PageLayout
      title="Careers"
      subtitle="Join a team that values engineering excellence, design discipline, and radical transparency."
    >
      <div style={{ display: 'grid', gap: '48px' }}>
        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Why Lucky Web?
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            We're building a studio where engineers and designers do their best work. That means interesting projects, modern tooling, reasonable deadlines, and a culture of continuous learning. We don't do crunch culture, vague requirements, or technical debt as a strategy.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Open Positions
          </h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              {
                title: 'Senior Full-Stack Engineer',
                type: 'Full-time · Remote · Lagos',
                desc: '5+ years building production web applications. Deep expertise in React, TypeScript, and Node.js. Experience with cloud infrastructure and database design.',
              },
              {
                title: 'Frontend Engineer',
                type: 'Full-time · Remote · Lagos',
                desc: '3+ years crafting responsive, accessible, and performant user interfaces. Strong eye for design detail and animation. Experience with GSAP, Three.js, or WebGL is a plus.',
              },
              {
                title: 'AI / ML Engineer',
                type: 'Full-time · Remote · Lagos',
                desc: 'Experience building production AI systems using LLMs, vector databases, and agent frameworks. Strong software engineering fundamentals and a portfolio of shipped AI features.',
              },
              {
                title: 'Product Designer',
                type: 'Contract · Remote',
                desc: 'Portfolio demonstrating strong visual design, interaction design, and systems thinking. Experience working with engineering teams and designing for complex workflows.',
              },
            ].map((job) => (
              <div key={job.title} style={{ padding: '28px', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '20px', color: '#fcfaee' }}>{job.title}</h3>
                <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 600, color: '#c9a66b', letterSpacing: '1px', textTransform: 'uppercase' }}>{job.type}</span>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#94a3b8', lineHeight: 1.6 }}>{job.desc}</p>
                <a href="mailto:careers@luckyweb.site" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 600, color: '#0a0f1a', backgroundColor: '#c9a66b', padding: '10px 24px', borderRadius: '4px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1.5px', alignSelf: 'flex-start', marginTop: '8px', transition: 'all 0.4s ease' }} onMouseEnter={(e) => { const el = e.currentTarget; el.style.backgroundColor = '#fcfaee'; }} onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = '#c9a66b'; }}>
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#64748b', lineHeight: 1.6, maxWidth: '800px' }}>
            Don't see a role that fits? We're always interested in meeting exceptional engineers and designers.             Send your portfolio and a note about what you'd like to work on to <a href="mailto:careers@luckyweb.site" style={{ color: '#c9a66b', textDecoration: 'none' }}>careers@luckyweb.site</a>.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
