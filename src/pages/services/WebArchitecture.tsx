import PageLayout from '../PageLayout';

export default function WebArchitecture() {
  return (
    <PageLayout
      title="Web Architecture"
      subtitle="Scalable, high-performance web applications built with modern frameworks and enterprise-grade standards."
    >
      <div style={{ display: 'grid', gap: '48px' }}>
        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Full-Stack Development
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            We architect and build complete web ecosystems — from pixel-perfect frontends to resilient backend infrastructure. Every project begins with a thorough analysis of your business requirements, user flows, and scalability needs. We then select the optimal technology stack, design the database schema, and implement APIs that are clean, documented, and extensible.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            E-Commerce Platforms
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            Our e-commerce solutions are built for conversion. We integrate secure payment gateways like Paystack, Flutterwave, and Stripe; implement inventory management, order tracking, and customer analytics. From single-vendor stores to multi-vendor marketplaces, we deliver platforms that handle high traffic and transaction volumes without compromise.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Tech Stack
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {['React', 'Vite', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Next.js', 'Express', 'Docker'].map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#c9a66b',
                  padding: '8px 16px',
                  border: '1px solid rgba(201, 166, 107, 0.3)',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
