import PageLayout from '../PageLayout';

export default function DesktopSoftware() {
  return (
    <PageLayout
      title="Desktop Software"
      subtitle="High-performance native applications for macOS, Windows, and Linux with modern web-based interfaces."
    >
      <div style={{ display: 'grid', gap: '48px' }}>
        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Cross-Platform Native Apps
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            We build desktop applications that combine the performance of native code with the flexibility of modern web technologies. Using Tauri and Electron, we deliver apps that are lightweight, secure, and feel native on every platform. Whether it's a developer utility, automation tool, or enterprise dashboard, we optimize for speed, memory efficiency, and seamless user experience.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            System-Level Engineering
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px' }}>
            Our expertise extends to system-level programming — file system operations, process management, hardware interfacing, and background services. We create utilities that integrate deeply with the operating system while maintaining clean, maintainable code architecture.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Tech Stack
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {['Tauri', 'Electron', 'Rust', 'TypeScript', 'React', 'C++', 'SQLite', 'Wails'].map((tech) => (
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
