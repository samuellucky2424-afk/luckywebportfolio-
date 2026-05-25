import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Manifesto from './sections/Manifesto';
import Anatomy from './sections/Anatomy';
import Tiers from './sections/Tiers';
import Footer from './sections/Footer';
import { siteConfig } from './config';

// Service Pages
import WebArchitecture from './pages/services/WebArchitecture';
import DesktopSoftware from './pages/services/DesktopSoftware';
import ApiIntegration from './pages/services/ApiIntegration';
import AiAgentDevelopment from './pages/services/AiAgentDevelopment';
import PaymentSolutions from './pages/services/PaymentSolutions';
import Consulting from './pages/services/Consulting';

// Company Pages
import About from './pages/company/About';
import Products from './pages/company/Products';
import Contact from './pages/company/Contact';
import Careers from './pages/company/Careers';

// Legal Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';

function HomePage() {
  useLenis();

  useEffect(() => {
    document.title = siteConfig.siteTitle || '';
    document.documentElement.lang = siteConfig.language || '';

    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = siteConfig.siteDescription || '';
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Manifesto />
        <Anatomy />
        <Tiers />
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Services */}
        <Route path="/services/web-architecture" element={<WebArchitecture />} />
        <Route path="/services/desktop-software" element={<DesktopSoftware />} />
        <Route path="/services/api-integration" element={<ApiIntegration />} />
        <Route path="/services/ai-agent-development" element={<AiAgentDevelopment />} />
        <Route path="/services/payment-solutions" element={<PaymentSolutions />} />
        <Route path="/services/consulting" element={<Consulting />} />
        {/* Company */}
        <Route path="/company/about" element={<About />} />
        <Route path="/company/products" element={<Products />} />
        <Route path="/company/contact" element={<Contact />} />
        <Route path="/company/careers" element={<Careers />} />
        {/* Legal */}
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
