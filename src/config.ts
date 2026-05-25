export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  target: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  videoPath: string
  eyebrow: string
  titleLine: string
  titleEmphasis: string
  subtitleLine1: string
  subtitleLine2: string
  ctaText: string
  ctaTargetId: string
}

export interface ManifestoConfig {
  sectionLabel: string
  text: string
}

export interface AnatomyPillar {
  label: string
  title: string
  body: string
}

export interface AnatomyConfig {
  sectionLabel: string
  title: string
  pillars: AnatomyPillar[]
}

export interface TierConfig {
  name: string
  price: string
  frequency: string
  journeys: string
  image: string
  description: string
  amenities: string[]
  ctaText: string
  ctaHref: string
}

export interface TiersConfig {
  sectionLabel: string
  title: string
  tiers: TierConfig[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  heading: string
  links: FooterLink[]
}

export interface FooterConfig {
  ageGateText: string
  brandName: string
  brandTaglineLines: string[]
  columns: FooterColumn[]
  copyright: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Lucky Web — Advanced Software Engineering",
  siteDescription: "Lucky Web builds premium web applications and high-performance desktop software for enterprise clients worldwide. Based in Nigeria, building for the world.",
}

export const navigationConfig: NavigationConfig = {
  brandName: "Lucky Web",
  links: [
    { label: "Services", target: "#anatomy" },
    { label: "Projects", target: "#tiers" },
    { label: "Contact", target: "#footer" },
  ],
}

export const heroConfig: HeroConfig = {
  videoPath: "videos/hero.mp4",
  eyebrow: "Advanced Software Engineering",
  titleLine: "Engineering",
  titleEmphasis: "Advanced Solutions",
  subtitleLine1: "Premium web architecture and desktop software",
  subtitleLine2: "for forward-thinking enterprises.",
  ctaText: "View Featured Projects",
  ctaTargetId: "#tiers",
}

export const manifestoConfig: ManifestoConfig = {
  sectionLabel: "Our Mission",
  text: "We architect software that endures. From high-frequency trading dashboards to system-level utilities, we combine rigorous engineering with refined design — building digital infrastructure that performs flawlessly at scale and earns the trust of users worldwide.",
}

export const anatomyConfig: AnatomyConfig = {
  sectionLabel: "Core Disciplines",
  title: "Engineering Excellence, Delivered",
  pillars: [
    {
      label: "01 — Web Architecture",
      title: "Full-Stack Web Development",
      body: "We build custom websites, e-commerce platforms, and scalable web architectures using modern frameworks. Our stack includes React, Vite, Supabase, and Paystack integrations — engineered for performance, security, and seamless user experience. Every application is built with enterprise-grade standards and optimized for conversion.",
    },
    {
      label: "02 — Desktop Systems",
      title: "Desktop Software Engineering",
      body: "High-performance standalone applications and custom utilities built for macOS, Windows, and Linux. We specialize in system-level engineering — from developer tools to automation utilities — delivering native-speed applications with modern web-based interfaces using Tauri and Electron.",
    },
    {
      label: "03 — Integration",
      title: "API & System Integration",
      body: "Seamless third-party integrations, API development, and verification services. We connect your systems to payment gateways, identity providers, and enterprise platforms — ensuring data flows securely and reliably across your entire technology stack.",
    },
  ],
}

export const tiersConfig: TiersConfig = {
  sectionLabel: "Featured Work",
  title: "Selected Projects",
  tiers: [
    {
      name: "Splendour Vites",
      price: "2024",
      frequency: "Multi-Service",
      journeys: "Wellness / Booking Platform",
      image: "images/project-splendour.jpg",
      description: "A premium multi-service booking platform combining spa treatments, salon services, pharmacy orders, and table water delivery. Built with seamless appointment scheduling, POS integration, and real-time service availability.",
      amenities: [
        "Multi-service booking engine",
        "POS & payment integration",
        "Real-time availability",
        "Customer review system",
        "Service category management",
      ],
      ctaText: "Live Preview",
      ctaHref: "https://adams-liart.vercel.app",
    },
    {
      name: "Bright G-7 Logistics",
      price: "2024",
      frequency: "Logistics",
      journeys: "Import / Export / Tracking",
      image: "images/project-brightg7.jpg",
      description: "AI-driven logistics and freight management platform offering import/export services, home delivery, and real-time cargo tracking. Designed for global commerce with route optimization and quote management.",
      amenities: [
        "Real-time cargo tracking",
        "AI-driven route optimization",
        "International freight management",
        "Home delivery scheduling",
        "Instant quote generation",
      ],
      ctaText: "Live Preview",
      ctaHref: "https://bright-g-7.vercel.app",
    },
    {
      name: "Caminierre Global Concepts",
      price: "2024",
      frequency: "Supplier",
      journeys: "FMCG / Distribution",
      image: "images/project-caminierre.jpg",
      description: "A professional supplier website showcasing FMCG distribution, supply chain management, and merchandise delivery. Built to communicate trust and scale for a growing distribution enterprise.",
      amenities: [
        "FMCG product showcase",
        "Supply chain overview",
        "Distribution network map",
        "Contact & inquiry system",
        "Service category breakdown",
      ],
      ctaText: "Live Preview",
      ctaHref: "https://fmcgdistributiondesignpreview.vercel.app/",
    },
    {
      name: "CINO Universal Gym",
      price: "2024",
      frequency: "Fitness",
      journeys: "Gym / Membership Platform",
      image: "images/project-cino.jpg",
      description: "A premium fitness platform with member registration, class booking, trainer scheduling, and facility management. Designed for 24/7 gym operations with a modern, motivating user experience.",
      amenities: [
        "Online member registration",
        "Class & trainer booking",
        "24/7 access scheduling",
        "Facility showcase gallery",
        "Membership plan management",
      ],
      ctaText: "Live Preview",
      ctaHref: "https://gym-zeta-black.vercel.app/#",
    },
  ],
}

export const footerConfig: FooterConfig = {
  ageGateText: "Based in Nigeria. Building for the world.",
  brandName: "Lucky Web",
  brandTaglineLines: [
    "Advanced software engineering",
    "for ambitious organizations.",
    "hello@luckyweb.site",
  ],
  columns: [
    {
      heading: "Services",
      links: [
        { label: "Web Architecture", href: "/services/web-architecture" },
        { label: "Desktop Software", href: "/services/desktop-software" },
        { label: "API Integration", href: "/services/api-integration" },
        { label: "AI Agent Development", href: "/services/ai-agent-development" },
        { label: "Payment Solutions", href: "/services/payment-solutions" },
        { label: "Consulting", href: "/services/consulting" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Lucky Web", href: "/company/about" },
        { label: "Featured Projects", href: "#tiers" },
        { label: "Tech Stack", href: "#anatomy" },
        { label: "Products / Internal Tools", href: "/company/products" },
        { label: "Contact Us", href: "/company/contact" },
        { label: "Careers", href: "/company/careers" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "hello@luckyweb.site", href: "mailto:hello@luckyweb.site" },
        { label: "GitHub", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Twitter / X", href: "#" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms of Service", href: "/legal/terms-of-service" },
      ],
    },
  ],
  copyright: "© 2026 Lucky Web. All rights reserved. Lagos, Nigeria.",
}
