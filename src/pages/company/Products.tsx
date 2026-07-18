import { useState } from 'react';
import PageLayout from '../PageLayout';

export default function Products() {
  const [downloading, setDownloading] = useState(false);
  const [downloadingAndroid, setDownloadingAndroid] = useState(false);
  const [downloadingVoice, setDownloadingVoice] = useState(false);
  const [downloadError, setDownloadError] = useState('');

  const handleDownload = async () => {
    setDownloading(true);
    setDownloadError('');
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
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } else {
        throw new Error('morphly-setup asset not found in the latest release.');
      }
    } catch (err: any) {
      setDownloadError(err.message || 'Download failed. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  const handleAndroidDownload = () => {
    setDownloadingAndroid(true);
    setDownloadError('');
    try {
      const link = document.createElement('a');
      link.href = 'https://github.com/samuellucky2424-afk/morphly-apk/releases/download/v1.0.0/morphly.apk';
      link.download = 'morphly-latest.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err: any) {
      setDownloadError(err.message || 'Download failed. Please try again.');
    } finally {
      setTimeout(() => setDownloadingAndroid(false), 2500);
    }
  };

  const handleVoiceDownload = () => {
    setDownloadingVoice(true);
    setDownloadError('');
    try {
      const link = document.createElement('a');
      link.href = 'https://github.com/samuellucky2424-afk/morphly-voice-/releases/download/v0.2.1/Morphly-Voice-Setup-0.2.1.exe';
      link.download = 'Morphly-Voice-Setup-0.2.1.exe';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err: any) {
      setDownloadError(err.message || 'Download failed. Please try again.');
    } finally {
      setTimeout(() => setDownloadingVoice(false), 2500);
    }
  };

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
            Morphly AI
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px', marginBottom: '16px' }}>
            Morphly AI is a real-time AI-powered face animation app that transforms a single photo into a live, expressive digital avatar. Simply upload your image, and the app uses advanced facial motion technology to bring your portrait to life with realistic facial expressions, lip movement, eye blinking, and head motion.
          </p>
          <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px', marginBottom: '16px' }}>
            <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '18px', color: '#fcfaee', marginBottom: '8px', marginTop: '16px' }}>Key Features</h3>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              <li>Upload a single photo and animate it instantly</li>
              <li>Real-time facial expression tracking</li>
              <li>Natural lip-sync and eye blinking</li>
              <li>AI-powered live camera experience</li>
              <li>Works on desktop and mobile devices</li>
              <li>Secure user accounts and cloud storage</li>
            </ul>
            <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '18px', color: '#fcfaee', marginBottom: '8px', marginTop: '16px' }}>How It Works</h3>
            <ol style={{ paddingLeft: '20px', margin: 0 }}>
              <li>Download the app for free.</li>
              <li>Create a free account.</li>
              <li>Upload your portrait photo.</li>
              <li>Purchase credits when you&apos;re ready to start animating.</li>
              <li>Connect your camera and watch your image come alive in real time.</li>
            </ol>
            <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '18px', color: '#fcfaee', marginBottom: '8px', marginTop: '16px' }}>Credit System</h3>
            <p style={{ margin: 0 }}>
              Morphly AI uses a pay-as-you-go credit system. Credits are only consumed while the live animation is running, allowing users to pay only for the time they use.
            </p>
            <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '18px', color: '#fcfaee', marginBottom: '8px', marginTop: '16px' }}>Mobile App Available</h3>
            <p style={{ margin: 0 }}>
              The official Android version of Morphly AI is now available. Download the APK and enjoy the full live AI camera experience directly from your smartphone with improved performance and a seamless user experience.
            </p>
            <p style={{ marginTop: '12px', marginBottom: 0, fontStyle: 'italic' }}>
              Whether you&apos;re a content creator, streamer, influencer, educator, or simply exploring AI technology, Morphly AI provides an innovative way to create engaging live animated content from a single photo.
            </p>
          </div>

          {/* Desktop Download */}
          <div style={{ marginTop: '24px' }}>
            <button
              onClick={handleDownload}
              disabled={downloading}
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: '#0a0f1a',
                backgroundColor: downloading ? '#475569' : '#c9a66b',
                padding: '12px 28px',
                border: 'none',
                borderRadius: '4px',
                cursor: downloading ? 'not-allowed' : 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (!downloading) {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#b8945a';
                }
              }}
              onMouseLeave={(e) => {
                if (!downloading) {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#c9a66b';
                }
              }}
            >
              {downloading ? 'Fetching latest version...' : 'Download Morphly AI (Desktop)'}
            </button>
          </div>

          {/* Android Download */}
          <div style={{ marginTop: '32px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
            <h4 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '20px', color: '#fcfaee', marginBottom: '12px', marginTop: 0 }}>
              Morphly AI for Android
            </h4>
            <img
              src="images/morphly_apk.jpg"
              alt="Morphly AI Android App"
              style={{
                width: '100%',
                maxWidth: '400px',
                borderRadius: '8px',
                marginBottom: '16px',
                display: 'block',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            />
            <button
              onClick={handleAndroidDownload}
              disabled={downloadingAndroid}
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: '#0a0f1a',
                backgroundColor: downloadingAndroid ? '#475569' : '#22c55e',
                padding: '12px 28px',
                border: 'none',
                borderRadius: '4px',
                cursor: downloadingAndroid ? 'not-allowed' : 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (!downloadingAndroid) {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#16a34a';
                }
              }}
              onMouseLeave={(e) => {
                if (!downloadingAndroid) {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#22c55e';
                }
              }}
            >
              {downloadingAndroid ? 'Fetching APK...' : 'Download Android APK'}
            </button>
          </div>

          {downloadError && (
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#ef4444', marginTop: '12px' }}>
              {downloadError}
            </p>
          )}
        </section>

        <section>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', color: '#fcfaee', marginBottom: '20px' }}>
            Morphly Voice Changer
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px', marginBottom: '16px' }}>
            Morphly Voice Changer is a real-time AI voice studio that transforms your voice while you stream, record, or chat. Built with two powerful inference engines, it gives you the flexibility to choose the right performance profile for your hardware.
          </p>
          <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#94a3b8', lineHeight: 1.8, maxWidth: '800px', marginBottom: '16px' }}>
            <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '18px', color: '#fcfaee', marginBottom: '8px', marginTop: '16px' }}>Key Features</h3>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              <li>Dual-engine architecture: RVC and Beatrice V2</li>
              <li>RVC engine for high-performance laptops with NVIDIA graphics</li>
              <li>Beatrice V2 engine for both low-end and high-end laptops</li>
              <li>Virtual-cable microphone support for streaming platforms</li>
              <li>Compatible with YouTube, Instagram, TikTok, and other live apps</li>
              <li>Pay-as-you-go credit system</li>
            </ul>
            <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '18px', color: '#fcfaee', marginBottom: '8px', marginTop: '16px' }}>How It Works</h3>
            <ol style={{ paddingLeft: '20px', margin: 0 }}>
              <li>Download and install Morphly Voice Changer.</li>
              <li>Create your account and load credits.</li>
              <li>Select your preferred voice model and engine.</li>
              <li>Set up your virtual cable microphone.</li>
              <li>Connect to your streaming platform and start speaking.</li>
            </ol>
          </div>
          <img
            src="images/morphly-voice.jpg"
            alt="Morphly Voice Changer Dashboard"
            style={{
              width: '100%',
              maxWidth: '600px',
              borderRadius: '8px',
              marginBottom: '16px',
              display: 'block',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          />
          <div style={{ marginTop: '8px' }}>
            <button
              onClick={handleVoiceDownload}
              disabled={downloadingVoice}
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: '#0a0f1a',
                backgroundColor: downloadingVoice ? '#475569' : '#c9a66b',
                padding: '12px 28px',
                border: 'none',
                borderRadius: '4px',
                cursor: downloadingVoice ? 'not-allowed' : 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (!downloadingVoice) {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#b8945a';
                }
              }}
              onMouseLeave={(e) => {
                if (!downloadingVoice) {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#c9a66b';
                }
              }}
            >
              {downloadingVoice ? 'Fetching installer...' : 'Download Morphly Voice Changer'}
            </button>
          </div>
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
