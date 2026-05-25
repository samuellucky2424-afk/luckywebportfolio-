import PageLayout from '../PageLayout';

export default function Products() {
  return (
    <PageLayout
      title="Products & Internal Tools"
      subtitle="Standalone platforms and utilities we build, operate, and continuously improve."
    >
      <div style={{ display: 'grid', gap: '48px' }}>
        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            LuckyNumV Verification API
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            A high-performance phone number verification platform with global carrier lookup, fraud detection, and real-time validation. Processes millions of verifications with 99.99% uptime and sub-200ms response times. Built for developers who need reliable identity verification at scale.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Morphly Desktop Utility
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            A cross-platform developer toolkit featuring real-time system monitoring, automated build pipelines, and intelligent workspace management. Built with Tauri for native-speed performance. Designed to eliminate repetitive development tasks and keep engineering teams focused on shipping.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Internal Automation Tools
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            We maintain a suite of proprietary automation tools that power our own workflows — from automated deployment pipelines and infrastructure monitoring to AI-assisted code review and client reporting dashboards. These tools are battle-tested in production and continuously refined based on real-world usage.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
