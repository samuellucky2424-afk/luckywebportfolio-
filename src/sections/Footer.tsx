import { Link } from 'react-router-dom';
import { footerConfig } from '../config';

function FooterLink({ href, label }: { href: string; label: string }) {
  const isInternal = href.startsWith('/');

  if (isInternal) {
    return (
      <Link
        to={href}
        style={{
          display: 'block',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '12px',
          fontWeight: 400,
          color: '#64748b',
          textDecoration: 'none',
          marginBottom: '10px',
          transition: 'color 0.4s ease',
        }}
        onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fcfaee'; }}
        onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#64748b'; }}
      >
        {label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={(e) => {
        if (!href || href === '#') e.preventDefault();
      }}
      style={{
        display: 'block',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '12px',
        fontWeight: 400,
        color: '#64748b',
        textDecoration: 'none',
        marginBottom: '10px',
        transition: 'color 0.4s ease',
      }}
      onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#fcfaee'; }}
      onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = '#64748b'; }}
    >
      {label}
    </a>
  );
}

export default function Footer() {
  const hasFooterContent =
    footerConfig.ageGateText ||
    footerConfig.brandName ||
    footerConfig.brandTaglineLines.length > 0 ||
    footerConfig.columns.length > 0 ||
    footerConfig.copyright;

  if (!hasFooterContent) {
    return null;
  }

  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#070b14',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* Trust Statement */}
      <div
        style={{
          textAlign: 'center',
          padding: '80px 24px 60px',
        }}
      >
        {footerConfig.ageGateText && (
          <p
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#fcfaee',
              lineHeight: 1.3,
              maxWidth: '500px',
              margin: '0 auto',
              textWrap: 'balance',
            }}
          >
            {footerConfig.ageGateText}
          </p>
        )}
      </div>

      {/* Footer Columns */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
        }}
      >
        {/* Brand Column */}
        <div>
          {footerConfig.brandName && (
            <p
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '18px',
                fontWeight: 600,
                color: '#fcfaee',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              {footerConfig.brandName}
            </p>
          )}
          {footerConfig.brandTaglineLines.length > 0 && (
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#64748b',
              }}
            >
              {footerConfig.brandTaglineLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < footerConfig.brandTaglineLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          )}
        </div>

        {footerConfig.columns.map((column) => (
          <div key={column.heading}>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                color: '#c9a66b',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              {column.heading}
            </p>
            {column.links.map((item) => (
              <FooterLink key={`${column.heading}-${item.label}`} href={item.href} label={item.label} />
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '24px',
          textAlign: 'center',
        }}
      >
        {footerConfig.copyright && (
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
        )}
      </div>
    </footer>
  );
}
