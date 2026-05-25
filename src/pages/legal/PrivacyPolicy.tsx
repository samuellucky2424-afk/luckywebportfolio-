import PageLayout from '../PageLayout';

export default function PrivacyPolicy() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information."
    >
      <div style={{ display: 'grid', gap: '48px', maxWidth: '800px' }}>
        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            1. Information We Collect
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            We collect information you provide directly to us, such as your name, email address, and project details when you contact us. We also collect technical data including IP addresses, browser types, and usage patterns through cookies and analytics tools to improve our website and services.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            2. How We Use Your Information
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            We use your information to respond to inquiries, deliver our services, process payments, and communicate project updates. We may also use anonymized data for analytics and marketing purposes. We never sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            3. Data Security
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your data. While we strive for absolute security, no system is impenetrable, and we cannot guarantee complete protection against unauthorized access.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            4. Third-Party Services
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            We may use trusted third-party services for hosting, analytics, payment processing, and communication. These services have their own privacy policies and are bound by data protection regulations. We only share the minimum necessary information required for these services to function.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            5. Your Rights
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            You have the right to access, correct, or delete your personal information. You may also object to certain processing activities or request data portability.             To exercise these rights, contact us at <a href="mailto:hello@luckyweb.site" style={{ color: '#c9a66b', textDecoration: 'none' }}>hello@luckyweb.site</a>.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            6. Changes to This Policy
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            We may update this privacy policy periodically. Changes will be posted on this page with an updated effective date. We encourage you to review this policy regularly to stay informed about how we protect your information.
          </p>
        </section>

        <section>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#64748b' }}>
            Last updated: May 2026
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
