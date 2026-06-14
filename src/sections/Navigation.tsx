import { useEffect, useRef, useState } from 'react';
import { getLenis } from '../hooks/useLenis';
import { navigationConfig } from '../config';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const baseTextColor = '#fcfaee';
  const hoverTextColor = '#c9a66b';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(targetId);
    } else {
      const el = document.querySelector(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!navigationConfig.brandName && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: scrolled ? '16px 0' : '24px 0',
        transition: 'padding 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="liquid-glass"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '14px 24px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {navigationConfig.brandName ? (
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '20px',
              fontWeight: 600,
              color: baseTextColor,
              letterSpacing: '1px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'color 0.6s ease',
            }}
          >
            {navigationConfig.brandName}
          </a>
        ) : (
          <div />
        )}

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            gap: '36px',
            alignItems: 'center',
          }}
          className="nav-desktop-links"
        >
          {navigationConfig.links.map((item) => (
            <a
              key={`${item.label}-${item.target}`}
              href={item.target}
              onClick={(e) => handleNavClick(e, item.target)}
              className="nav-link"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                color: baseTextColor,
                letterSpacing: '1.3px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.6s ease',
                opacity: 0.85,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = hoverTextColor;
                (e.target as HTMLAnchorElement).style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = baseTextColor;
                (e.target as HTMLAnchorElement).style.opacity = '0.85';
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: baseTextColor,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            display: 'none',
            position: 'absolute',
            top: '100%',
            left: '24px',
            right: '24px',
            backgroundColor: 'rgba(10, 15, 26, 0.98)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '4px',
            padding: '16px',
            marginTop: '8px',
          }}
        >
          {navigationConfig.links.map((item) => (
            <a
              key={`mobile-${item.label}-${item.target}`}
              href={item.target}
              onClick={(e) => handleNavClick(e, item.target)}
              style={{
                display: 'block',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: baseTextColor,
                letterSpacing: '1.3px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = hoverTextColor;
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = baseTextColor;
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: block !important;
          }
          .nav-mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
