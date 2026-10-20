import React, { useEffect } from 'react';
import { COMPANY_DETAILS, CARY_ZIP_CODES, ALL_SERVICES, ServiceInfo } from '../data/roofingData';

export interface SeoSchemaProps {
  pageType: 'home' | 'service' | 'location' | 'privacy' | 'calculator';
  service?: ServiceInfo;
  faqs?: Array<{ question: string; answer: string }>;
  pageTitle?: string;
  pageDescription?: string;
  canonicalUrl?: string;
  image?: string;
}

export const SeoSchema: React.FC<SeoSchemaProps> = ({
  pageType,
  service,
  faqs,
  pageTitle,
  pageDescription,
  canonicalUrl,
  image
}) => {
  const baseUrl = 'https://www.caryncroofing.com';
  const effectiveCurrentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : baseUrl);
  const pageImage = image || `${baseUrl}/images/hero-roofing.webp`;

  // 1. Comprehensive LocalBusiness / RoofingContractor Schema compliant with https://schema.org/LocalBusiness
  const businessSchema = {
    '@type': ['LocalBusiness', 'RoofingContractor', 'HomeAndConstructionBusiness'],
    '@id': `${baseUrl}/#localbusiness`,
    name: COMPANY_DETAILS.name,
    legalName: `${COMPANY_DETAILS.name} LLC`,
    alternateName: [
      'Cary Roofing',
      'CaryRoofing',
      'Cary NC Roofing',
      'Roofing Contractors Cary NC',
      'Cary Roofing Pros',
      'caryncroofing.com'
    ],
    url: baseUrl,
    sameAs: [
      'https://en.wikipedia.org/wiki/Cary,_North_Carolina',
      'https://www.wikidata.org/wiki/Q54291',
      'https://en.wikipedia.org/wiki/Wake_County,_North_Carolina',
      'https://www.wikidata.org/wiki/Q508681',
      'https://www.bbb.org/us/nc/cary/category/roofing-contractors',
      'https://www.google.com/maps/place/Cary,+NC',
      'https://www.facebook.com/caryncroofing',
      'https://www.yelp.com/biz/cary-roofing-contractors',
      'https://www.linkedin.com/company/cary-roofing'
    ],
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/favicon.svg`,
      width: 512,
      height: 512,
      caption: 'CaryRoofing - Premier Roofing Services Cary NC'
    },
    image: [
      `${baseUrl}/images/hero-roofing.webp`,
      `${baseUrl}/images/roof-replacement.webp`,
      `${baseUrl}/images/roof-repair.webp`,
      `${baseUrl}/images/split-replacement.webp`,
      `${baseUrl}/images/split-repair.webp`,
      `${baseUrl}/images/split-installation.webp`,
      `${baseUrl}/images/split-storm-emergency.webp`
    ],
    description: pageDescription || 'Looking for the best roofing services in Cary, NC? As top roofing contractors in Cary, NC, we offer expert roof repair & roof replacement. Call +1 919-335-9543 today!',
    telephone: COMPANY_DETAILS.mainPhone,
    email: COMPANY_DETAILS.email,
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Check, Insurance Financing, Financing Available',
    slogan: 'Best Roofing Services in Cary, NC - Precision Craftsmanship & 50-Year Protection',
    foundingDate: '2011',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '580 New Waverly Pl Ste 216',
      addressLocality: COMPANY_DETAILS.city,
      addressRegion: COMPANY_DETAILS.state,
      postalCode: COMPANY_DETAILS.zip,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.7368,
      longitude: -78.7832,
      elevation: '418 FT'
    },
    hasMap: 'https://www.google.com/maps/place/580+New+Waverly+Pl+Ste+216,+Cary,+NC+27518',
    map: 'https://www.google.com/maps/place/580+New+Waverly+Pl+Ste+216,+Cary,+NC+27518',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 35.7368,
        longitude: -78.7832
      },
      geoRadius: 40000
    },
    openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Cary, NC',
        sameAs: 'https://en.wikipedia.org/wiki/Cary,_North_Carolina'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Wake County, NC',
        sameAs: 'https://en.wikipedia.org/wiki/Wake_County,_North_Carolina'
      },
      { '@type': 'City', name: 'Raleigh, NC' },
      { '@type': 'City', name: 'Apex, NC' },
      { '@type': 'City', name: 'Morrisville, NC' },
      { '@type': 'City', name: 'Holly Springs, NC' },
      ...CARY_ZIP_CODES.map((z) => ({
        '@type': 'PostalCode',
        postalCode: z.zip,
        addressLocality: z.areaName,
        addressRegion: 'NC',
        addressCountry: 'US'
      })),
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 35.7368,
          longitude: -78.7832
        },
        geoRadius: 40000
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '128',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'David Miller'
        },
        datePublished: '2026-03-12',
        reviewBody: 'Outstanding roof replacement in Preston, Cary. Handled full tear-off and installed brand new GAF Timberline HDZ architectural shingles with flawless magnetic nail sweeps.'
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Sarah Jenkins'
        },
        datePublished: '2026-04-05',
        reviewBody: 'Emergency chimney flashing and roof leak repair in Lochmere. Prompt same-day dispatch and watertight copper counter-flashing that held up beautifully during intense NC storms.'
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Michael Thompson'
        },
        datePublished: '2026-04-18',
        reviewBody: 'Installed seamless 6-inch K-style aluminum gutters and leaf guards in Amberly, West Cary. Clean installation, accurate pitch, and excellent drainage.'
      }
    ],
    knowsAbout: [
      'Residential Roof Replacement',
      'Emergency Roof Leak Repair',
      'Emergency Tarping and Storm Damage Mitigation',
      'Architectural Shingles (GAF Timberline HDZ, Owens Corning Duration, CertainTeed Landmark)',
      'Standing Seam Metal Roofing (24-Gauge Kynar 500)',
      'Commercial Flat Roofing (TPO, EPDM, PVC Heat-Welded Membranes)',
      'Chimney Flashing, Step Flashing & Counter-Flashing',
      'Ridge Ventilation & Continuous Soffit Airflow Balancing',
      'Seamless Aluminum Gutters & Gutter Protection',
      'Town of Cary Building Permit Protocol',
      'North Carolina High-Wind Building Codes (130 MPH Wind Resistance)'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'North Carolina General Contractor License (#78942)'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'GAF Master Elite Certified Roofing Contractor'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'CertainTeed Select ShingleMaster'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'HAAG Certified Residential Roof Inspector'
      }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: COMPANY_DETAILS.mainPhone,
        contactType: 'headquarters customer service & central dispatch',
        contactOption: 'TollFree',
        areaServed: ['US-NC', 'Wake County', 'Cary NC'],
        availableLanguage: ['English', 'Spanish']
      },
      ...CARY_ZIP_CODES.map((z) => ({
        '@type': 'ContactPoint',
        telephone: z.phone,
        contactType: `local roofing dispatch - ZIP ${z.zip} (${z.areaName})`,
        areaServed: {
          '@type': 'PostalCode',
          postalCode: z.zip,
          addressLocality: z.areaName,
          addressRegion: 'NC',
          addressCountry: 'US'
        },
        availableLanguage: ['English', 'Spanish']
      }))
    ],
    department: CARY_ZIP_CODES.map((z) => ({
      '@type': ['RoofingContractor', 'LocalBusiness'],
      name: `CaryRoofing - ${z.areaName} (ZIP ${z.zip})`,
      telephone: z.phone,
      url: `${baseUrl}/our-locations`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: z.landmarks[0] || COMPANY_DETAILS.address,
        addressLocality: 'Cary',
        addressRegion: 'NC',
        postalCode: z.zip,
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: z.lat,
        longitude: z.lng
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59'
        }
      ]
    })),
    founder: {
      '@type': 'Person',
      name: 'Marcus Vance',
      jobTitle: 'Lead Master Roofing Inspector & Technical Director',
      sameAs: `${baseUrl}/about-cary-roofing-contractors.html`
    },
    author: {
      '@type': 'Person',
      name: 'Marcus Vance',
      jobTitle: 'Lead Master Roofing Inspector & Technical Director',
      sameAs: `${baseUrl}/about-cary-roofing-contractors.html`
    },
    datePublished: '2026-01-15T08:00:00-05:00',
    dateModified: '2026-10-18T10:00:00-05:00',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services Catalog',
      itemListElement: ALL_SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.shortDesc,
          url: `${baseUrl}/${s.slug}`,
          areaServed: 'Cary, NC'
        }
      }))
    }
  };

  // 2. WebSite Schema with SearchAction
  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: COMPANY_DETAILS.name,
    alternateName: 'Best Roofing Services Cary NC',
    description: 'Premier Cary NC Roofing Services for Residential & Commercial Properties across Wake County',
    publisher: {
      '@id': `${baseUrl}/#localbusiness`
    },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/#services`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // 3. WebPage / ItemPage Schema
  const webPageSchema = {
    '@type': pageType === 'service' ? 'ItemPage' : 'WebPage',
    '@id': `${effectiveCurrentUrl}#webpage`,
    url: effectiveCurrentUrl,
    name: pageTitle || `${COMPANY_DETAILS.name} - Best Roofing Services Cary NC`,
    description: pageDescription || COMPANY_DETAILS.tagline,
    isPartOf: {
      '@id': `${baseUrl}/#website`
    },
    breadcrumb: {
      '@id': `${effectiveCurrentUrl}#breadcrumb`
    },
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: 'Marcus Vance',
      jobTitle: 'Lead Master Roofing Inspector & Technical Director',
      url: `${baseUrl}/about-cary-roofing-contractors.html`
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_DETAILS.name,
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.svg`
      }
    },
    datePublished: '2026-01-15T08:00:00-05:00',
    dateModified: '2026-10-18T10:00:00-05:00',
    mainEntity: pageType === 'service' ? { '@id': `${effectiveCurrentUrl}#service` } : { '@id': `${baseUrl}/#localbusiness` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: pageImage,
      caption: pageTitle || COMPANY_DETAILS.name
    }
  };

  // 4. BreadcrumbList Schema
  const breadcrumbElements: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl
    }
  ];

  if (pageType === 'service' && service) {
    breadcrumbElements.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: `${baseUrl}/#services`
    });
    breadcrumbElements.push({
      '@type': 'ListItem',
      position: 3,
      name: service.title,
      item: `${baseUrl}/${service.slug}`
    });
  } else if (pageType === 'location') {
    breadcrumbElements.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Our Locations',
      item: `${baseUrl}/our-locations`
    });
  } else if (pageType === 'privacy') {
    breadcrumbElements.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Privacy Policy',
      item: `${baseUrl}/privacy-policy`
    });
  } else if (pageType === 'calculator') {
    breadcrumbElements.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Cary NC Roofing Calculator',
      item: `${baseUrl}/cary-nc-roofing-calculator.html`
    });
  }

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    '@id': `${effectiveCurrentUrl}#breadcrumb`,
    itemListElement: breadcrumbElements
  };

  // 5. Service Schema (If on a Service page)
  let serviceSchema = null;
  if (pageType === 'service' && service) {
    serviceSchema = {
      '@type': 'Service',
      '@id': `${effectiveCurrentUrl}#service`,
      name: service.title,
      serviceType: service.category || 'Roofing Contractor Service',
      description: service.heroDesc || service.shortDesc,
      provider: {
        '@id': `${baseUrl}/#localbusiness`
      },
      areaServed: [
        { '@type': 'City', name: 'Cary, NC' },
        { '@type': 'AdministrativeArea', name: 'Wake County, NC' },
        ...CARY_ZIP_CODES.map((z) => ({
          '@type': 'PostalCode',
          postalCode: z.zip,
          addressLocality: z.areaName,
          addressRegion: 'NC'
        }))
      ],
      image: `${baseUrl}${service.splitImage || service.localImage}`,
      termsOfService: `${baseUrl}/privacy-policy`,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '0.00',
        availability: 'https://schema.org/InStock',
        url: effectiveCurrentUrl,
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '0.00',
          priceCurrency: 'USD',
          description: '100% Free On-Site Roof Diagnostic Inspection & Estimate'
        }
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.title} Solutions`,
        itemListElement: service.solutions.map((sol) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: sol.title,
            description: sol.desc
          }
        }))
      }
    };
  }

  // 6. FAQPage Schema (Wherever FAQs are passed)
  let faqSchema = null;
  if (faqs && faqs.length > 0) {
    faqSchema = {
      '@type': 'FAQPage',
      '@id': `${effectiveCurrentUrl}#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer
        }
      }))
    };
  }

  // Combine into Schema.org @graph
  const graphEntities: any[] = [
    businessSchema,
    websiteSchema,
    webPageSchema,
    breadcrumbSchema
  ];

  if (serviceSchema) {
    graphEntities.push(serviceSchema);
  }

  if (faqSchema) {
    graphEntities.push(faqSchema);
  }

  const fullSchema = {
    '@context': 'https://schema.org',
    '@graph': graphEntities
  };

  const schemaJsonString = JSON.stringify(fullSchema);

  // Sync dynamically to document.head script#app-dynamic-schema for head scrapers & search engine bots
  useEffect(() => {
    if (typeof document !== 'undefined') {
      let headScript = document.getElementById('app-dynamic-schema') as HTMLScriptElement | null;
      if (!headScript) {
        headScript = document.createElement('script');
        headScript.id = 'app-dynamic-schema';
        headScript.type = 'application/ld+json';
        document.head.appendChild(headScript);
      }
      headScript.textContent = schemaJsonString;
    }
  }, [schemaJsonString]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemaJsonString }}
    />
  );
};
