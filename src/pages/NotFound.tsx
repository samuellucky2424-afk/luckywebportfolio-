import { Link } from 'react-router-dom';
import { navigationConfig, footerConfig } from '../config';
import SeoHead from '../components/SeoHead';

export default function NotFound() {
  return (
    <div style={{ backgroundColor: '#0a0f1a', minHeight: '100vh', color: '#e8e8ec', display: 'flex', flexDirection: 'column' }}>
      <SeoHead title="Page Not Found" description="The page you are looking for does not exist." path="/404" />
      
      {/* Nav */}
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
        </div>
      </nav>

      {/* Content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px 24px',
        }}
      >
        <h1
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(80px, 15vw, 160px)',
            fontWeight: 700,
            color: '#c9a66b',
            lineHeight: 1,
            marginBottom: '20px',
          }}
        >
          404
        </h1>
        <p
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '28px',
            color: '#fcfaee',
            marginBottom: '16px',
          }}
        >
          Page Not Found
        </p>
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '15px',
            color: '#94a3b8',
            marginBottom: '40px',
            maxWidth: '400px',
          }}
        >
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            color: '#0a0f1a',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            padding: '14px 36px',
            backgroundColor: '#c9a66b',
            borderRadius: '4px',
            transition: 'all 0.6s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fcfaee'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#c9a66b'; }}
        >
          Back to Home
        </Link>
      </div>

      {/* Footer */}
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
