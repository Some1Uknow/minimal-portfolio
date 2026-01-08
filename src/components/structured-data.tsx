'use client';


import Script from 'next/script';

const siteUrl = 'https://raghav.codes';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Raghav Sharma',
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  sameAs: [
    'https://github.com/Some1Uknow',
    'https://linkedin.com/in/raghavsharma',
    'https://twitter.com/Some1UKnow25',
  ],
  jobTitle: 'Solana Program Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  description:
    'Solana engineer building on-chain programs with Rust and Anchor. Solana Foundation Grant Recipient, SIH24 Winner, and Superteam India Member.',
  email: 'raghu250407@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressCountry: 'India',
  },
  knowsAbout: [
    'Solana',
    'Blockchain',
    'Rust',
    'Anchor',
    'Web3',
    'Smart Contracts',
    'DeFi',
    'NFT',
    'TypeScript',
    'Next.js',
    'React',
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Raghav Sharma',
  url: siteUrl,
  logo: `${siteUrl}/icon-512x512.png`,
  description:
    'Solana engineer building on-chain programs with Rust and Anchor. Solana Foundation Grant Recipient, SIH24 Winner, and Superteam India Member.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'raghu250407@gmail.com',
    contactType: 'professional',
  },
  sameAs: [
    'https://github.com/Some1Uknow',
    'https://linkedin.com/in/raghavsharma',
    'https://twitter.com/Some1UKnow25',
  ],
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Raghav Sharma | Solana Program Engineer',
  url: siteUrl,
  description:
    'Solana engineer building on-chain programs with Rust and Anchor. Solana Foundation Grant Recipient, SIH24 Winner, and Superteam India Member.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Person',
    name: 'Raghav Sharma',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About',
      item: `${siteUrl}/#about`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Projects',
      item: `${siteUrl}/#projects`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Experience',
      item: `${siteUrl}/#experience`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Contact',
      item: `${siteUrl}/#contact`,
    },
  ],
};

export function StructuredData() {
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
