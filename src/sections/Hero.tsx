import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { heroConfig } from '../config';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const hasHeroContent =
    heroConfig.videoPath ||
    heroConfig.eyebrow ||
    heroConfig.titleLine ||
    heroConfig.titleEmphasis ||
    heroConfig.subtitleLine1 ||
    heroConfig.subtitleLine2 ||
    heroConfig.ctaText;

  useEffect(() => {
    if (!hasHeroContent) return;

    const tl = gsap.timeline({ delay: 0.4 });

    // Paper fold animation on the panel
    if (panelRef.current) {
      gsap.set(panelRef.current, {
        scaleY: 0,
        opacity: 0,
        filter: 'blur(20px)',
        transformOrigin: 'top center',
      });
      tl.to(
        panelRef.current,
        {
          scaleY: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.8,
          ease: 'power4.out',
        }
      );
    }

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.4, ease: 'power2.out' },
      '-=1.0'
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 0.8, y: 0, duration: 1.0, ease: 'power2.out' },
        '-=0.6'
      );

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      );
    }

    return () => {
      tl.kill();
    };
  }, [hasHeroContent]);

  if (!hasHeroContent) {
    return null;
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: '12vh',
      }}
    >
      {/* Video Background */}
      {heroConfig.videoPath && (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src={heroConfig.videoPath} type="video/mp4" />
        </video>
      )}

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,15,26,0.5) 0%, rgba(10,15,26,0.7) 70%, rgba(10,15,26,0.9) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content Panel with Paper Fold */}
      <div
        ref={panelRef}
        className="liquid-glass"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '640px',
          width: '90%',
          padding: '48px 40px 40px',
          borderRadius: '4px',
          textAlign: 'center',
          background: 'rgba(10, 15, 26, 0.4)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {heroConfig.eyebrow && (
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
            {heroConfig.eyebrow}
          </p>
        )}

        {(heroConfig.titleLine || heroConfig.titleEmphasis) && (
          <h1
            ref={titleRef}
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 62px)',
              fontWeight: 400,
              color: '#fcfaee',
              lineHeight: 1.15,
              marginBottom: '20px',
              opacity: 0,
            }}
          >
            {heroConfig.titleLine}
            {heroConfig.titleEmphasis && (
              <>
                <br />
                <em style={{ fontStyle: 'italic', color: '#c9a66b' }}>{heroConfig.titleEmphasis}</em>
              </>
            )}
          </h1>
        )}

        {(heroConfig.subtitleLine1 || heroConfig.subtitleLine2) && (
          <p
            ref={subtitleRef}
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              color: '#94a3b8',
              lineHeight: 1.7,
              marginBottom: '32px',
              opacity: 0,
              maxWidth: '440px',
              margin: '0 auto 32px',
            }}
          >
            {heroConfig.subtitleLine1}
            {heroConfig.subtitleLine1 && heroConfig.subtitleLine2 && <br />}
            {heroConfig.subtitleLine2}
          </p>
        )}

        {heroConfig.ctaText && (
          <a
            ref={ctaRef}
            href={heroConfig.ctaTargetId || '#'}
            onClick={(e) => {
              e.preventDefault();
              if (!heroConfig.ctaTargetId) return;
              const el = document.querySelector(heroConfig.ctaTargetId);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#0a0f1a',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 36px',
              backgroundColor: '#c9a66b',
              borderRadius: '4px',
              opacity: 0,
              display: 'inline-block',
              transition: 'all 0.6s cubic-bezier(0.76, 0, 0.24, 1)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = '#fcfaee';
              el.style.color = '#0a0f1a';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = '#c9a66b';
              el.style.color = '#0a0f1a';
            }}
          >
            {heroConfig.ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
