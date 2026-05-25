import PageLayout from '../PageLayout';

export default function ApiIntegration() {
  return (
    <PageLayout
      title="API Integration"
      subtitle="Seamless third-party integrations and custom API development that connects your entire technology stack."
    >
      <div style={{ display: 'grid', gap: '48px' }}>
        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Third-Party Integrations
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            We connect your systems to the services that power modern business. From payment gateways like Paystack and Flutterwave to identity verification providers, SMS gateways, email services, and cloud platforms — we handle the complexity of authentication, rate limiting, error handling, and webhook management so your data flows securely and reliably.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Custom API Development
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            When off-the-shelf solutions don't fit, we build custom APIs tailored to your exact requirements. RESTful or GraphQL, we design endpoints that are intuitive, well-documented, and built for scale. Our APIs include comprehensive authentication (JWT, OAuth2), input validation, automated testing, and monitoring.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Enterprise Connectors
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            We specialize in building connectors for enterprise platforms — ERP systems, CRM tools, accounting software, and legacy systems. Our integration solutions ensure data consistency across platforms, automate workflows, and eliminate manual data entry.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
