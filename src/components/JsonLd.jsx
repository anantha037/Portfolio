"use client";
import { siteConfig } from '../config/site';

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "description": siteConfig.description,
        "publisher": {
          "@id": `${siteConfig.url}/#person`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        "url": siteConfig.url,
        "name": siteConfig.title,
        "isPartOf": {
          "@id": `${siteConfig.url}/#website`
        },
        "about": {
          "@id": `${siteConfig.url}/#person`
        },
        "description": siteConfig.description,
        "inLanguage": "en-US"
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        "name": siteConfig.author,
        "jobTitle": "AI & Machine Learning Engineer",
        "description": siteConfig.description,
        "url": siteConfig.url,
        "email": `mailto:${siteConfig.email}`,
        "sameAs": [
          siteConfig.links.github,
          siteConfig.links.linkedin
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
