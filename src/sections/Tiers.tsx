import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { tiersConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function Tiers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tierRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tiers = tiersConfig.tiers;
  const [downloadingTier, setDownloadingTier] = useState<string | null>(null);
  const [downloadingAndroid, setDownloadingAndroid] = useState(false);

  const handleDownload = async (tierName: string) => {
    setDownloadingTier(tierName);
    try {
      const response = await fetch('https://api.github.com/repos/samuellucky2424-afk/morphly/releases/latest');
      if (!response.ok) {
        throw new Error('Failed to fetch latest release information.');
      }
      const data = await response.json();
      const assets = data.assets || [];
      const setupAsset = assets.find((a: any) =>
        a.name && a.name.toLowerCase().includes('morphly-setup')
      );
      if (setupAsset && setupAsset.browser_download_url) {
        const url = setupAsset.browser_download_url;
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          window.open(url, '_blank');
        } else {
          const link = document.createElement('a');
          link.href = url;
          link.download = setupAsset.name;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } else {
        throw new Error('morphly-setup asset not found in the latest release.');
      }
    } catch (err: any) {
      alert(err.message || 'Download failed. Please try again.');
    } finally {
      setDownloadingTier(null);
    }
  };

  const handleAndroidDownload = async () => {
    setDownloadingAndroid(true);
    try {
      const response = await fetch('https://api.github.com/repos/samuellucky2424-afk/morphly/releases/latest');
      if (!response.ok) {
        throw new Error('Failed to fetch latest release information.');
      }
      const data = await response.json();
      const assets = data.assets || [];
      const apkAsset = assets.find((a: any) =>
        a.name && a.name.toLowerCase().endsWith('.apk')
      );
      if (apkAsset && apkAsset.browser_download_url) {
        const link = document.createElement('a');
        link.href = apkAsset.browser_download_url;
        link.download = apkAsset.name;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        throw new Error('Android APK not found in the latest release.');
      }
    } catch (err: any) {
      alert(err.message || 'Download failed. Please try again.');
    } finally {
      setDownloadingAndroid(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // List sort entrance animation
      const items = sectionRef.current?.querySelectorAll('.tier-row');
      if (items && items.length > 0) {
        gsap.set(items, {
          opacity: 0,
          y: (i: number) => (i % 2 === 0 ? 80 : -80),
        });
        gsap.to(items, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }

      tierRefs.current.forEach((el) => {
        if (!el) return;
        const textEl = el.querySelector('.tier-text-content');
        if (textEl) {
          gsap.fromTo(
            textEl,
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration: 1.0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!tiersConfig.sectionLabel && !tiersConfig.title && tiers.length === 0) {
    return null;
  }

  return (
    <section
      id="tiers"
      ref={sectionRef}
      style={{
        backgroundColor: '#0a0f1a',
        position: 'relative',
        zIndex: 2,
        padding: '100px 0 80px',
      }}
    >
      {/* Section Header */}
      <div
        style={{
          textAlign: 'center',
          padding: '0 24px 80px',
        }}
      >
        {tiersConfig.sectionLabel && (
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
            {tiersConfig.sectionLabel}
          </p>
        )}
        {tiersConfig.title && (
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '42px',
              fontWeight: 500,
              lineHeight: 1.2,
              color: '#fcfaee',
            }}
          >
            {tiersConfig.title}
          </h2>
        )}
      </div>

      {/* Tier Rows */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {tiers.map((tier, i) => (
          <div
            key={tier.name}
            ref={(el) => { tierRefs.current[i] = el; }}
            className="tier-row"
            style={{
              display: 'flex',
              flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
              gap: '60px',
              marginBottom: i < tiers.length - 1 ? '100px' : '0',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {/* Image */}
            <div
              className="tier-image-placeholder"
              style={{
                width: '100%',
                maxWidth: '460px',
                flex: '0 0 auto',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4px',
                boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              {tier.image && (
                <img
                  src={tier.image}
                  alt={tier.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    aspectRatio: '4/3',
                    objectFit: 'cover',
                  }}
                />
              )}
            </div>

            {/* Text Content */}
            <div
              className="tier-text-content"
              style={{
                flex: '1 1 400px',
                minWidth: '300px',
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
                  marginBottom: '16px',
                }}
              >
                {tier.journeys}
              </p>
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '32px',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: '#fcfaee',
                  marginBottom: '8px',
                }}
              >
                {tier.name}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#64748b',
                  marginBottom: '24px',
                  letterSpacing: '0.5px',
                }}
              >
                <span style={{ color: '#94a3b8', fontSize: '14px' }}>{tier.price}</span>
                <span
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#64748b',
                    marginLeft: '12px',
                    letterSpacing: '0.5px',
                  }}
                >
                  {tier.frequency}
                </span>
              </p>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: '#94a3b8',
                  marginBottom: '28px',
                  maxWidth: '440px',
                }}
              >
                {tier.description}
              </p>

              {/* Amenities List */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                {tier.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '13px',
                      fontWeight: 400,
                      lineHeight: 1.5,
                      color: '#94a3b8',
                      padding: '8px 0',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#c9a66b',
                        flexShrink: 0,
                      }}
                    />
                    {amenity}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {tier.ctaText && (
                <>
                  {tier.name === 'Morphly AI' ? (
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => handleDownload(tier.name)}
                        disabled={downloadingTier === tier.name}
                        style={{
                          display: 'inline-block',
                          fontFamily: 'Inter, system-ui, sans-serif',
                          fontSize: '11px',
                          fontWeight: 600,
                          color: '#fcfaee',
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          textDecoration: 'none',
                          padding: '14px 36px',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '4px',
                          backgroundColor: 'transparent',
                          cursor: downloadingTier === tier.name ? 'not-allowed' : 'pointer',
                          transition: 'all 0.6s cubic-bezier(0.76, 0, 0.24, 1)',
                        }}
                        onMouseEnter={(e) => {
                          if (downloadingTier !== tier.name) {
                            const el = e.currentTarget;
                            el.style.backgroundColor = '#c9a66b';
                            el.style.color = '#0a0f1a';
                            el.style.borderColor = '#c9a66b';
                          }
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;
                          el.style.backgroundColor = 'transparent';
                          el.style.color = '#fcfaee';
                          el.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        }}
                      >
                        {downloadingTier === tier.name ? 'Fetching...' : 'Download Desktop'}
                      </button>
                      <button
                        onClick={handleAndroidDownload}
                        disabled={downloadingAndroid}
                        style={{
                          display: 'inline-block',
                          fontFamily: 'Inter, system-ui, sans-serif',
                          fontSize: '11px',
                          fontWeight: 600,
                          color: '#0a0f1a',
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          textDecoration: 'none',
                          padding: '14px 36px',
                          border: '1px solid #22c55e',
                          borderRadius: '4px',
                          backgroundColor: '#22c55e',
                          cursor: downloadingAndroid ? 'not-allowed' : 'pointer',
                          transition: 'all 0.6s cubic-bezier(0.76, 0, 0.24, 1)',
                        }}
                        onMouseEnter={(e) => {
                          if (!downloadingAndroid) {
                            const el = e.currentTarget;
                            el.style.backgroundColor = '#16a34a';
                            el.style.borderColor = '#16a34a';
                          }
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;
                          el.style.backgroundColor = '#22c55e';
                          el.style.borderColor = '#22c55e';
                        }}
                      >
                        {downloadingAndroid ? 'Fetching APK...' : 'Download Android'}
                      </button>
                    </div>
                  ) : (
                    <a
                      href={tier.ctaHref || '#'}
                      target={tier.ctaHref?.startsWith('http') ? '_blank' : undefined}
                      rel={tier.ctaHref?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={(e) => {
                        if (!tier.ctaHref || tier.ctaHref === '#') e.preventDefault();
                      }}
                      style={{
                        display: 'inline-block',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#fcfaee',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        padding: '14px 36px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '4px',
                        transition: 'all 0.6s cubic-bezier(0.76, 0, 0.24, 1)',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.backgroundColor = '#c9a66b';
                        el.style.color = '#0a0f1a';
                        el.style.borderColor = '#c9a66b';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.backgroundColor = 'transparent';
                        el.style.color = '#fcfaee';
                        el.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      }}
                    >
                      {tier.ctaText}
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
