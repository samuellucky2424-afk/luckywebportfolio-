import PageLayout from '../PageLayout';

export default function TermsOfService() {
  return (
    <PageLayout
      title="Terms of Service"
      subtitle="The rules and guidelines governing the use of our services."
    >
      <div style={{ display: 'grid', gap: '48px', maxWidth: '800px' }}>
        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            1. Acceptance of Terms
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, clients, and users of our website and services.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            2. Services Description
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            Lucky Web provides software engineering services including web application development, desktop software, API integration, AI agent development, and technology consulting. Specific deliverables, timelines, and pricing are defined in individual project contracts or statements of work.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            3. Intellectual Property
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            Upon full payment, clients receive full ownership rights to the custom software and deliverables we create for them. We retain ownership of our proprietary frameworks, tools, and reusable components. We may showcase completed work in our portfolio unless explicitly agreed otherwise in writing.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            4. Payment Terms
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            Project fees are outlined in the signed proposal or contract. A deposit is typically required before work begins, with subsequent payments tied to project milestones. Invoices are due within 14 days of issuance. Late payments may incur a 2% monthly service charge.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            5. Confidentiality
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            We treat all client information as strictly confidential. Our team members are bound by non-disclosure agreements, and we implement technical and organizational measures to protect sensitive data throughout the engagement and after project completion.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            6. Limitation of Liability
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            Our liability is limited to the amount paid for the specific services giving rise to the claim. We are not liable for indirect, incidental, or consequential damages. We do not guarantee uninterrupted or error-free service and are not responsible for issues caused by third-party services or client-provided materials.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            7. Termination
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            Either party may terminate the engagement with 14 days written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date. We will deliver all completed work and transfer any relevant access credentials within 7 days of termination.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#fcfaee', marginBottom: '16px' }}>
            8. Governing Law
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms or our services shall be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through arbitration in Lagos, Nigeria.
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
