import PageLayout from '../PageLayout';

export default function PaymentSolutions() {
  return (
    <PageLayout
      title="Payment Solutions"
      subtitle="Robust, secure payment integrations for local and international transactions with enterprise-grade compliance."
    >
      <div style={{ display: 'grid', gap: '48px' }}>
        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Local Payment Gateways
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            We integrate Nigeria's leading payment processors — Paystack, Flutterwave, and Remita — into your applications with full support for card payments, bank transfers, USSD, and mobile money. Our implementations handle transaction verification, webhook processing, refund workflows, and reconciliation reporting.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            International Payments
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            For global reach, we integrate Stripe, PayPal, and Wise to accept payments in multiple currencies. Our solutions handle currency conversion, tax calculation, subscription billing, and multi-party payouts — all while maintaining PCI-DSS compliance and fraud protection.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Enterprise Features
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Subscription Billing', desc: 'Recurring payments, trial periods, proration, and automated invoicing.' },
              { title: 'Split Payments', desc: 'Multi-party disbursement, marketplace commissions, and escrow workflows.' },
              { title: 'Fraud Detection', desc: 'AI-powered risk scoring, velocity checks, and chargeback prevention.' },
              { title: 'Compliance', desc: 'PCI-DSS, KYC, AML, and local regulatory adherence built-in.' },
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
