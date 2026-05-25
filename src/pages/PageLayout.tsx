import { Link, useLocation } from 'react-router-dom';
import { navigationConfig, footerConfig } from '../config';
import SeoHead from '../components/SeoHead';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
  keywords?: string;
}

export default function PageLayout({ children, title, subtitle, description, keywords }: PageLayoutProps) {
  const location = useLocation();
  const seoDescription = description || subtitle || `${title} — Lucky Web provides premium software engineering services.`;

  return (
    <div style={{ backgroundColor: '#0a0f1a', minHeight: '100vh', color: '#e8e8ec' }}>
      <SeoHead title={title} description={seoDescription} path={location.pathname} keywords={keywords} />
      {/* Simple Nav */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(10, 15, 26, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '16px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '20px',
              fontWeight: 600,
              color: '#fcfaee',
              letterSpacing: '1px',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            {navigationConfig.brandName}
          </Link>
          <Link
            to="/"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#94a3b8',
              letterSpacing: '1.3px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'color 0.4s ease',
            }}
            onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#c9a66b'; }}
            onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = '#94a3b8'; }}
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 40px 40px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: '#c9a66b',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          {location.pathname.split('/')[1]}
        </p>
        <h1
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 500,
            color: '#fcfaee',
            lineHeight: 1.2,
            marginBottom: subtitle ? '16px' : '0',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: '#94a3b8',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px 80px' }}>
        {children}
      </div>

      {/* Simple Footer */}
      <footer
        style={{
          backgroundColor: '#070b14',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '11px',
            fontWeight: 400,
            color: '#475569',
            letterSpacing: '0.5px',
          }}
        >
          {footerConfig.copyright}
        </p>
      </footer>
    </div>
  );
}
