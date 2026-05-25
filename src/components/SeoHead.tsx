import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  ogImage?: string;
}

export default function SeoHead({ title, description, path = '', keywords = '', ogImage = 'https://luckyweb.site/og-image.jpg' }: SeoHeadProps) {
  const fullTitle = `${title} — Lucky Web`;
  const url = `https://luckyweb.site${path}`;

  useEffect(() => {
    // Update title
    document.title = fullTitle;

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const updateProperty = (property: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    updateMeta('title', fullTitle);
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    
    // Open Graph
    updateProperty('og:title', fullTitle);
    updateProperty('og:description', description);
    updateProperty('og:url', url);
    updateProperty('og:image', ogImage);
    
    // Twitter
    updateProperty('twitter:title', fullTitle);
    updateProperty('twitter:description', description);
    updateProperty('twitter:image', ogImage);

    // Update canonical
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

  }, [fullTitle, description, url, keywords, ogImage]);

  return null;
}
