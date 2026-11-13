import { ALL_SERVICES, CARY_ZIP_CODES, COMPANY_DETAILS, ServiceInfo } from '../data/roofingData';

export const SITE_ORIGIN = 'https://www.caryncroofing.com';

export interface PageSeoDescriptor {
  /** Primary canonical path without leading slash (e.g. "contact-cary-roofing.html") */
  canonicalSlug: string;
  /** Additional file output paths in dist/ (e.g. ["contact-cary-roofing/index.html", "contact/index.html"]) */
  outputFiles: string[];
  /** Additional URL path aliases handled by dev server middleware */
  aliases: string[];
  title: string;
  description: string;
  ogImage: string;
  breadcrumbLabel: string;
  breadcrumbParent?: { label: string; href: string };
  schemaJson: string;
  bodyHtml: string;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderSharedHeader(): string {
  return `
      <header style="padding: 16px 24px; border-bottom: 1px solid #e8e4df; display: flex; justify-content: space-between; align-items: center; max-width: 1440px; margin: 0 auto; background: #FFFDF9;">
        <div>
          <a href="/" style="font-size: 22px; font-weight: 800; color: #000000; text-decoration: none;">
            Cary<span style="color: #9A3412;">Roofing</span>
          </a>
        </div>
        <nav style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <a href="/roof-installation-services-cary-nc-usa.html" style="color: #000000; text-decoration: none; font-size: 14px; font-weight: 600;">Roof Installation</a>
          <a href="/roof-repair-services-cary-nc-usa.html" style="color: #000000; text-decoration: none; font-size: 14px; font-weight: 600;">Roof Repair</a>
          <a href="/roof-replacement-services-cary-nc-usa.html" style="color: #000000; text-decoration: none; font-size: 14px; font-weight: 600;">Roof Replacement</a>
          <a href="/storm-emergency-roofing-services-cary-nc-usa.html" style="color: #000000; text-decoration: none; font-size: 14px; font-weight: 600;">Emergency Storm Damage</a>
          <a href="/cary-nc-roofing-calculator.html" style="color: #000000; text-decoration: none; font-size: 14px; font-weight: 600;">Roofing Calculator</a>
          <a href="/Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof" style="color: #9A3412; text-decoration: none; font-size: 14px; font-weight: 700;">Standing Seam Metal Roof Cary NC USA</a>
          <a href="/our-locations.html" style="color: #000000; text-decoration: none; font-size: 14px; font-weight: 600;">Our Locations</a>
          <a href="/about-cary-roofing-contractors.html" rel="author" style="color: #9A3412; text-decoration: none; font-size: 14px; font-weight: 700;">About Us</a>
          <a href="/contact-cary-roofing.html" style="color: #9A3412; text-decoration: none; font-size: 14px; font-weight: 700;">Contact Us</a>
        </nav>
      </header>`;
}

function renderSharedFooter(): string {
  return `
      <footer style="padding: 28px 24px; border-top: 1px solid #e8e4df; background: #141c27; color: #ffffff; text-align: center; font-size: 13px;">
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 16px;">
          <a href="/" style="color: #ffffff; text-decoration: underline; font-weight: 700;">Home</a>
          <a href="/Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof" style="color: #FB923C; text-decoration: underline; font-weight: 700;">Standing Seam Metal Roof</a>
          <a href="/about-cary-roofing-contractors.html" rel="author" style="color: #ffffff; text-decoration: underline; font-weight: 700;">About Us</a>
          <a href="/contact-cary-roofing.html" style="color: #ffffff; text-decoration: underline; font-weight: 700;">Contact Us</a>
          <a href="/privacy-policy.html" style="color: #ffffff; text-decoration: underline;">Privacy Policy</a>
          <a href="/terms-of-service.html" style="color: #ffffff; text-decoration: underline;">Terms of Service</a>
          <a href="/cary-nc-roofing-calculator.html" style="color: #ffffff; text-decoration: underline;">Roofing Calculator</a>
          <a href="/our-locations.html" style="color: #ffffff; text-decoration: underline;">Our Locations</a>
        </div>
        <p style="margin: 0 0 6px 0; color: #ffffff;">&copy; 2026 CaryRoofing Contractors LLC. All rights reserved. Registered North Carolina Roofing Network.</p>
        <p style="margin: 0; color: #94a3b8; font-size: 12px;">${escapeHtml(COMPANY_DETAILS.address)} &bull; Phone: (919) 335-9543</p>
      </footer>`;
}

function renderZipDispatchSection(): string {
  const rows = CARY_ZIP_CODES.map(
    (z) => `
      <tr>
        <td style="font-weight: 700; padding: 10px;">ZIP ${escapeHtml(z.zip)} &mdash; ${escapeHtml(z.areaName)}</td>
        <td style="padding: 10px;"><a href="tel:${escapeHtml(z.phoneRaw)}" style="color: #9A3412; font-weight: 700;">${escapeHtml(z.phone)}</a></td>
        <td style="padding: 10px;">${escapeHtml(z.neighborhoods.join(', '))}</td>
      </tr>`
  ).join('');

  return `
    <section style="margin-top: 36px; margin-bottom: 36px; padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #FAF8F4;">
      <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 12px 0;">Cary, NC Local ZIP Code Dispatch &amp; Direct Hotlines</h2>
      <p style="font-size: 14px; margin: 0 0 16px 0;">Connect directly with our Wake County roofing hubs across all five Cary postal zones:</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; background: #ffffff;" border="1" cellpadding="8">
        <thead style="background: #141c27; color: #ffffff;">
          <tr>
            <th style="padding: 10px; text-align: left;">Service Zone</th>
            <th style="padding: 10px; text-align: left;">Direct Dispatch Phone</th>
            <th style="padding: 10px; text-align: left;">Key Neighborhoods Covered</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </section>`;
}

function buildBaseBusinessGraphNode(description: string) {
  return {
    '@type': 'RoofingContractor',
    '@id': `${SITE_ORIGIN}/#localbusiness`,
    name: COMPANY_DETAILS.name,
    legalName: 'Cary Roofing Contractors LLC',
    url: `${SITE_ORIGIN}/`,
    telephone: COMPANY_DETAILS.mainPhone,
    email: COMPANY_DETAILS.email,
    priceRange: '$$',
    description,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_ORIGIN}/favicon.svg`,
      width: 512,
      height: 512,
    },
    image: [
      `${SITE_ORIGIN}/images/hero-roofing.webp`,
      `${SITE_ORIGIN}/images/roof-replacement.webp`,
      `${SITE_ORIGIN}/images/split-replacement.webp`,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '580 New Waverly Pl Ste 216',
      addressLocality: 'Cary',
      addressRegion: 'NC',
      postalCode: '27518',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.7368,
      longitude: -78.7832,
    },
    openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '128',
      reviewCount: '128',
    },
  };
}

function buildSchemaGraph(params: {
  canonicalUrl: string;
  title: string;
  description: string;
  ogImage: string;
  breadcrumbLabel: string;
  breadcrumbParent?: { label: string; href: string };
  isService?: boolean;
  service?: ServiceInfo;
  faqs?: Array<{ q: string; a: string }>;
}): string {
  const breadcrumbItems: Array<Record<string, unknown>> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_ORIGIN}/`,
    },
  ];

  if (params.breadcrumbParent) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: params.breadcrumbParent.label,
      item: `${SITE_ORIGIN}${params.breadcrumbParent.href}`,
    });
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: params.breadcrumbLabel,
      item: params.canonicalUrl,
    });
  } else {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: params.breadcrumbLabel,
      item: params.canonicalUrl,
    });
  }

  const graph: Array<Record<string, unknown>> = [
    buildBaseBusinessGraphNode(params.description),
    {
      '@type': 'WebSite',
      '@id': `${SITE_ORIGIN}/#website`,
      url: `${SITE_ORIGIN}/`,
      name: COMPANY_DETAILS.name,
      publisher: { '@id': `${SITE_ORIGIN}/#localbusiness` },
      inLanguage: 'en-US',
    },
    {
      '@type': params.isService && params.service ? 'ItemPage' : 'WebPage',
      '@id': `${params.canonicalUrl}#webpage`,
      url: params.canonicalUrl,
      name: params.title,
      description: params.description,
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
      breadcrumb: { '@id': `${params.canonicalUrl}#breadcrumb` },
      mainEntity: params.isService && params.service
        ? { '@id': `${params.canonicalUrl}#service` }
        : { '@id': `${SITE_ORIGIN}/#localbusiness` },
      inLanguage: 'en-US',
      datePublished: '2026-01-15T08:00:00-05:00',
      dateModified: '2026-11-12T10:00:00-05:00',
      author: {
        '@type': 'Person',
        name: 'Marcus Vance',
        jobTitle: 'Lead Master Roofing Inspector & Technical Director',
        url: `${SITE_ORIGIN}/about-cary-roofing-contractors.html`,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: params.ogImage,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${params.canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbItems,
    },
  ];

  if (params.service) {
    graph.push({
      '@type': 'Service',
      '@id': `${params.canonicalUrl}#service`,
      name: params.service.title,
      serviceType: params.service.category,
      description: params.service.heroDesc || params.service.shortDesc,
      provider: { '@id': `${SITE_ORIGIN}/#localbusiness` },
      areaServed: { '@type': 'City', name: 'Cary, NC' },
      image: params.ogImage,
      url: params.canonicalUrl,
    });
  }

  if (params.faqs && params.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${params.canonicalUrl}#faq`,
      mainEntity: params.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

function buildServicePageDescriptor(service: ServiceInfo): PageSeoDescriptor {
  const slugNoExt = service.slug.replace(/\.html$/i, '');
  const canonicalUrl = `${SITE_ORIGIN}/${service.slug}`;
  const ogImage = `${SITE_ORIGIN}${service.splitImage || service.localImage}`;
  const title = `${service.title} | caryncroofing.com`;
  const description = service.heroDesc || service.shortDesc;

  const related = ALL_SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6);

  const solutionsHtml = service.solutions
    .map(
      (sol) => `
        <div style="padding: 18px; border: 1px solid #e8e4df; border-radius: 10px; background: #FAF8F4;">
          <h3 style="font-size: 18px; font-weight: 700; margin: 0 0 6px 0;">${escapeHtml(sol.title)}</h3>
          <p style="margin: 0; font-size: 14px;">${escapeHtml(sol.desc)}</p>
        </div>`
    )
    .join('');

  const stepsHtml = service.methodologySteps
    .map(
      (st) => `
        <li style="margin-bottom: 12px;">
          <strong>${escapeHtml(st.step)} &mdash; ${escapeHtml(st.title)}:</strong> ${escapeHtml(st.desc)}
        </li>`
    )
    .join('');

  const faqsHtml = service.faqs
    .map(
      (f) => `
        <div style="padding: 18px; background: #FAF8F4; border-radius: 10px; border: 1px solid #e8e4df;">
          <h3 style="font-size: 17px; font-weight: 700; margin: 0 0 6px 0;">${escapeHtml(f.q)}</h3>
          <p style="margin: 0; font-size: 15px;">${escapeHtml(f.a)}</p>
        </div>`
    )
    .join('');

  const relatedHtml = related
    .map(
      (r) =>
        `<li><a href="/${escapeHtml(r.slug)}" style="color: #9A3412; font-weight: 700;">${escapeHtml(r.title)}</a> &mdash; ${escapeHtml(r.shortDesc)}</li>`
    )
    .join('');

  const bodyHtml = `
      ${renderSharedHeader()}
      <nav aria-label="Breadcrumb" style="background: #FAF8F4; border-bottom: 1px solid #e8e4df; padding: 10px 24px; font-size: 12px; font-weight: 600;">
        <div style="max-width: 1100px; margin: 0 auto;">
          <a href="/" style="color: #000000; text-decoration: none;">Home</a> /
          <span style="color: #9A3412; font-weight: 700;">${escapeHtml(service.title)}</span>
        </div>
      </nav>
      <main style="max-width: 1100px; margin: 0 auto; padding: 36px 24px; color: #000000; line-height: 1.6;">
        <div class="kicker">${escapeHtml(service.heroKicker)}</div>
        <h1 style="font-size: 38px; font-weight: 800; line-height: 1.2; margin: 0 0 16px 0;">${escapeHtml(service.heroTitle)}</h1>
        <div class="my-5 p-4 sm:p-5 bg-[#FAF8F4] border-l-4 border-[#9A3412] rounded-r-xl text-left shadow-xs" style="background: #FAF8F4; border-left: 5px solid #9A3412; padding: 18px 22px; border-radius: 0 12px 12px 0; margin-bottom: 24px;">
          <span class="text-xs font-extrabold uppercase tracking-widest text-[#9A3412] block mb-1">Direct Service Summary (Cary, NC &amp; Wake County)</span>
          <p class="text-sm sm:text-base font-semibold text-black leading-relaxed" style="margin: 0;">
            <strong>${escapeHtml(service.title)}:</strong> ${escapeHtml(description)} Call <a href="tel:${escapeHtml(COMPANY_DETAILS.mainPhoneRaw)}" style="color: #9A3412; font-weight: 800;">${escapeHtml(COMPANY_DETAILS.mainPhone)}</a> for a free 21-point on-site roof inspection in Cary, NC (ZIP codes 27511, 27512, 27513, 27518, 27519).
          </p>
        </div>
        <div style="margin-bottom: 32px; display: flex; gap: 14px; flex-wrap: wrap;">
          <a href="tel:${escapeHtml(COMPANY_DETAILS.mainPhoneRaw)}" style="background: #9A3412; color: #ffffff; padding: 14px 26px; border-radius: 8px; font-weight: 800; text-decoration: none;">Call ${escapeHtml(COMPANY_DETAILS.mainPhone)}</a>
          <a href="/contact-cary-roofing.html" style="background: #141c27; color: #ffffff; padding: 14px 26px; border-radius: 8px; font-weight: 800; text-decoration: none;">Schedule Free Inspection</a>
          <a href="/cary-nc-roofing-calculator.html" style="background: #FAF8F4; color: #9A3412; border: 1px solid #9A3412; padding: 14px 24px; border-radius: 8px; font-weight: 800; text-decoration: none;">Estimate Cost Online</a>
        </div>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 800; margin-bottom: 16px;">Core ${escapeHtml(service.category)} Capabilities</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
            ${solutionsHtml}
          </div>
        </section>

        <section style="margin-bottom: 40px; padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #FAF8F4;">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 14px 0;">${escapeHtml(service.methodologyTitle)}</h2>
          <ol style="padding-left: 20px; font-size: 15px; line-height: 1.7;">
            ${stepsHtml}
          </ol>
        </section>

        ${renderZipDispatchSection()}

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 800; margin-bottom: 16px;">Frequently Asked Questions</h2>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${faqsHtml}
          </div>
        </section>

        <section style="margin-bottom: 24px; padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 12px 0;">Related Cary, NC Roofing Services &amp; Guides</h2>
          <ul style="padding-left: 20px; font-size: 14px; line-height: 1.8;">
            <li><a href="/Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof" style="color: #9A3412; font-weight: 700;">Why More Homeowners Are Choosing Standing Seam Metal Roof Cary NC USA</a></li>
            ${relatedHtml}
          </ul>
        </section>
      </main>
      ${renderSharedFooter()}`;

  // Emit ONLY the canonical .html file in dist/ so extensionless duplicates never serve 200 OK
  const outputFiles = [service.slug];
  const aliases = [service.slug, slugNoExt, service.id];

  if (service.slug === 'roof-inspection-services-cary-nc-usa.html') {
    aliases.push('roof-maintenance-services-cary-nc-usa.html', 'roof-maintenance-services-cary-nc-usa');
  }

  return {
    canonicalSlug: service.slug,
    outputFiles,
    aliases,
    title,
    description,
    ogImage,
    breadcrumbLabel: service.title,
    schemaJson: buildSchemaGraph({
      canonicalUrl,
      title,
      description,
      ogImage,
      breadcrumbLabel: service.title,
      isService: true,
      service,
      faqs: service.faqs,
    }),
    bodyHtml,
  };
}

export function getAllStaticPageDescriptors(): PageSeoDescriptor[] {
  const serviceDescriptors = ALL_SERVICES.map(buildServicePageDescriptor);

  // 1. Contact Us Page (contact-cary-roofing.html)
  const contactUrl = `${SITE_ORIGIN}/contact-cary-roofing.html`;
  const contactTitle = 'Contact Us & Emergency Roof Dispatch | Cary Roofing Contractors LLC';
  const contactDesc =
    'Contact Cary Roofing Contractors LLC. 24/7 emergency dispatch, free 21-point on-site roof inspections across Cary, NC (27511, 27512, 27513, 27518, 27519). Call +1 919-335-9543.';
  const contactDescriptor: PageSeoDescriptor = {
    canonicalSlug: 'contact-cary-roofing.html',
    outputFiles: ['contact-cary-roofing.html'],
    aliases: ['contact-cary-roofing.html', 'contact-cary-roofing', 'contact', 'contact-us', 'contact.html'],
    title: contactTitle,
    description: contactDesc,
    ogImage: `${SITE_ORIGIN}/images/hero-roofing.webp`,
    breadcrumbLabel: 'Contact Us',
    schemaJson: buildSchemaGraph({
      canonicalUrl: contactUrl,
      title: contactTitle,
      description: contactDesc,
      ogImage: `${SITE_ORIGIN}/images/hero-roofing.webp`,
      breadcrumbLabel: 'Contact Us',
    }),
    bodyHtml: `
      ${renderSharedHeader()}
      <nav aria-label="Breadcrumb" style="background: #FAF8F4; border-bottom: 1px solid #e8e4df; padding: 10px 24px; font-size: 12px; font-weight: 600;">
        <div style="max-width: 1100px; margin: 0 auto;"><a href="/" style="color: #000000; text-decoration: none;">Home</a> / <span style="color: #9A3412; font-weight: 700;">Contact Us</span></div>
      </nav>
      <main style="max-width: 1100px; margin: 0 auto; padding: 36px 24px; color: #000000; line-height: 1.6;">
        <div class="kicker">DIRECT LOCAL DISPATCH &amp; VERIFIED CONTACT</div>
        <h1 style="font-size: 38px; font-weight: 800; margin: 0 0 16px 0;">Contact Cary Roofing Contractors LLC</h1>
        <div style="background: #FAF8F4; border-left: 5px solid #9A3412; padding: 18px 22px; border-radius: 0 12px 12px 0; margin-bottom: 24px;">
          <p style="margin: 0; font-size: 16px; font-weight: 600;">
            <strong>How to contact Cary Roofing in Wake County:</strong> Homeowners and commercial property managers in Cary, NC can reach our central dispatch hotline 24 hours a day, 7 days a week at <a href="tel:+19193359543" style="color: #9A3412; font-weight: 800;">+1 919-335-9543</a>, email <a href="mailto:caryncroofing@gmail.com" style="color: #9A3412; font-weight: 700;">caryncroofing@gmail.com</a>, or visit our headquarters at 580 New Waverly Pl Ste 216, Cary, NC 27518 for rapid emergency roof tarping and free 21-point inspections.
          </p>
        </div>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff; margin-bottom: 28px;">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 12px 0;">Headquarters &amp; Direct Dispatch Information</h2>
          <ul style="padding-left: 20px; font-size: 15px; line-height: 1.8;">
            <li><strong>Corporate Headquarters:</strong> 580 New Waverly Pl Ste 216, Cary, NC 27518 (Near Lochmere &amp; Regency)</li>
            <li><strong>24/7 Central Intake Hotline:</strong> <a href="tel:+19193359543" style="color: #9A3412; font-weight: 700;">+1 919-335-9543</a></li>
            <li><strong>Email Dispatch:</strong> <a href="mailto:caryncroofing@gmail.com" style="color: #9A3412;">caryncroofing@gmail.com</a> (Under 2-hour response)</li>
            <li><strong>Operating Hours:</strong> Rapid Local Service (Mon &ndash; Sun 7:00 AM &ndash; 9:00 PM) &amp; 24/7 Storm Emergency Tarping</li>
            <li><strong>Coverage Guarantee:</strong> All 5 Town of Cary ZIP codes (27511, 27512, 27513, 27518, 27519), Apex, Morrisville, and Holly Springs.</li>
          </ul>
        </section>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #FAF8F4; margin-bottom: 28px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 12px 0;">Popular Roofing Services You Can Schedule</h2>
          <ul style="padding-left: 20px; font-size: 14px; line-height: 1.8;">
            <li><a href="/roof-repair-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700;">Emergency &amp; Active Leak Roof Repair Services</a></li>
            <li><a href="/roof-replacement-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700;">Full Architectural Shingle &amp; Metal Roof Replacement</a></li>
            <li><a href="/storm-emergency-roofing-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700;">24/7 Storm Damage &amp; Waterproof Emergency Tarping</a></li>
            <li><a href="/cary-nc-roofing-calculator.html" style="color: #9A3412; font-weight: 700;">Cary NC Instant Roof Replacement Cost Calculator</a></li>
          </ul>
        </section>
        ${renderZipDispatchSection()}
      </main>
      ${renderSharedFooter()}`,
  };

  // 2. About Us Page (about-cary-roofing-contractors.html)
  const aboutUrl = `${SITE_ORIGIN}/about-cary-roofing-contractors.html`;
  const aboutTitle = 'About Us & Technical Credentials | Cary Roofing Contractors LLC';
  const aboutDesc =
    'Learn about Cary Roofing Contractors LLC: certified HAAG roofing inspectors led by Marcus Vance, 15+ years in Wake County, NCRC Chapter 9 compliance, and $2M liability protection.';
  const aboutDescriptor: PageSeoDescriptor = {
    canonicalSlug: 'about-cary-roofing-contractors.html',
    outputFiles: ['about-cary-roofing-contractors.html'],
    aliases: ['about-cary-roofing-contractors.html', 'about-cary-roofing-contractors', 'about', 'about-us', 'about.html'],
    title: aboutTitle,
    description: aboutDesc,
    ogImage: `${SITE_ORIGIN}/images/hero-roofing.webp`,
    breadcrumbLabel: 'About Us',
    schemaJson: buildSchemaGraph({
      canonicalUrl: aboutUrl,
      title: aboutTitle,
      description: aboutDesc,
      ogImage: `${SITE_ORIGIN}/images/hero-roofing.webp`,
      breadcrumbLabel: 'About Us',
    }),
    bodyHtml: `
      ${renderSharedHeader()}
      <nav aria-label="Breadcrumb" style="background: #FAF8F4; border-bottom: 1px solid #e8e4df; padding: 10px 24px; font-size: 12px; font-weight: 600;">
        <div style="max-width: 1100px; margin: 0 auto;"><a href="/" style="color: #000000; text-decoration: none;">Home</a> / <span style="color: #9A3412; font-weight: 700;">About Us</span></div>
      </nav>
      <main style="max-width: 1100px; margin: 0 auto; padding: 36px 24px; color: #000000; line-height: 1.6;">
        <div class="kicker">ABOUT CARYROOFING</div>
        <h1 style="font-size: 38px; font-weight: 800; margin: 0 0 16px 0;">About Cary Roofing Contractors LLC</h1>
        <p style="font-size: 17px; font-weight: 500; margin-bottom: 24px;">
          Founded with a commitment to engineering precision and homeowner transparency, Cary Roofing connects Wake County families and commercial building managers with the highest standard of roofing craftsmanship, GAF Master Elite installations, HAAG certified inspectors, and $2M comprehensive liability protection.
        </p>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #FAF8F4; margin-bottom: 24px;">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 10px 0;">Lead Technical Author &amp; Chief Inspector: Marcus Vance</h2>
          <p style="font-size: 15px; margin: 0 0 12px 0;">
            <strong>Credentials:</strong> License #NC-R48201 &bull; HAAG Certified Residential Inspector &bull; CertainTeed Master Shingle Applicator
          </p>
          <p style="font-size: 15px; margin: 0 0 12px 0;">
            Marcus Vance has directed residential roof diagnostic operations, structural deck evaluations, and emergency storm response in Cary and Wake County for over 15 years, overseeing more than 2,800 roof installations across Preston, Lochmere, Kildaire Farms, and Amberly in strict compliance with Chapter 9 of the North Carolina Residential Building Code.
          </p>
          <p style="font-size: 15px; margin: 0;">
            His field investigations focus on forensic leak detection, micro-fractured shingle analysis from hail impact, and balancing attic net free ventilating area (NFVA) to prevent thermal degradation during humid North Carolina summers.
          </p>
        </section>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff; margin-bottom: 24px;">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 14px 0;">Our Craftsmanship &amp; Material Standards</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
            <div style="padding: 16px; background: #FAF8F4; border: 1px solid #e8e4df; border-radius: 10px;">
              <h3 style="font-size: 17px; font-weight: 700; margin: 0 0 6px 0;">50-Year Non-Prorated Warranties</h3>
              <p style="margin: 0; font-size: 14px;">Premium GAF Timberline HDZ and CertainTeed Landmark dimensional shingles with lifetime manufacturer coverage and 25-year workmanship guarantees.</p>
            </div>
            <div style="padding: 16px; background: #FAF8F4; border: 1px solid #e8e4df; border-radius: 10px;">
              <h3 style="font-size: 17px; font-weight: 700; margin: 0 0 6px 0;">Full Ice &amp; Water Valley Protection</h3>
              <p style="margin: 0; font-size: 14px;">Self-adhering modified bitumen underlayment installed in all valleys, pipe boots, rake edges, and chimney saddles prevents wind-driven rain intrusion.</p>
            </div>
            <div style="padding: 16px; background: #FAF8F4; border: 1px solid #e8e4df; border-radius: 10px;">
              <h3 style="font-size: 17px; font-weight: 700; margin: 0 0 6px 0;">Magnetic Jobsite Cleanup</h3>
              <p style="margin: 0; font-size: 14px;">Every replacement finishes with a triple-pass heavy industrial magnetic sweep of your driveway, lawn, flowerbeds, and walkways.</p>
            </div>
            <div style="padding: 16px; background: #FAF8F4; border: 1px solid #e8e4df; border-radius: 10px;">
              <h3 style="font-size: 17px; font-weight: 700; margin: 0 0 6px 0;">Town of Cary Permitting</h3>
              <p style="margin: 0; font-size: 14px;">Our network pulls all required municipal permits through the Town of Cary Inspections &amp; Permits Department for full NC building code sign-off.</p>
            </div>
          </div>
        </section>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff; margin-bottom: 24px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 10px 0;">Regulatory Compliance &amp; Industry Citations</h2>
          <ul style="padding-left: 20px; font-size: 14px; line-height: 1.8; margin: 0;">
            <li><a href="https://www.nrca.net/" target="_blank" rel="noopener noreferrer" style="color: #9A3412; font-weight: 700;">National Roofing Contractors Association (NRCA)</a> &mdash; Technical Manual &amp; Steep-Slope Guidelines</li>
            <li><a href="https://codes.iccsafe.org/content/NCRC2018/chapter-9-roof-assemblies" target="_blank" rel="noopener noreferrer" style="color: #9A3412; font-weight: 700;">North Carolina Residential Code: Chapter 9 Roof Assemblies</a> &mdash; State flashing and fastener standards</li>
            <li><a href="https://www.carync.gov/services-permits/permits-inspections" target="_blank" rel="noopener noreferrer" style="color: #9A3412; font-weight: 700;">Town of Cary Inspections &amp; Permits Department</a> &mdash; Municipal building permitting portal</li>
          </ul>
        </section>
        ${renderZipDispatchSection()}
      </main>
      ${renderSharedFooter()}`,
  };

  // 3. Calculator Page (cary-nc-roofing-calculator.html)
  const calcUrl = `${SITE_ORIGIN}/cary-nc-roofing-calculator.html`;
  const calcTitle = 'Cary NC Roofing Calculator | Roof Replacement Cost Guide';
  const calcDesc =
    'Calculate realistic roof replacement costs for your Cary, NC home by ZIP code (27511, 27512, 27513, 27518, 27519). Compare architectural shingles, standing seam metal, slate, and TPO pricing.';
  const calcFaqs = [
    {
      q: 'How much does a roof replacement cost in Cary, NC right now?',
      a: 'Most Cary homeowners pay $8,500 to $13,500 for a standard 1,700 sq ft home with architectural asphalt shingles. For North Cary (27513) and West Cary (27519) where homes are larger, expect $12,000 to $18,000. Metal roofs in Cary run $18,000 to $40,000.',
    },
    {
      q: 'Do I need a permit to replace my roof in Cary, NC?',
      a: 'Yes. The Town of Cary requires a building permit for a full roof replacement ($250–$450 including inspection). All our hubs, including our headquarters at 580 New Waverly Pl Ste 216, Cary, NC 27518, handle municipal permitting daily.',
    },
    {
      q: 'How long does a roof replacement take in Cary?',
      a: 'For most Cary homes, asphalt shingle replacements take 1 to 2 days. Larger estates in Amberly or Preston (27513, 27519) take 2 to 3 days, while standing seam metal or tile projects take 4 to 7 days.',
    },
    {
      q: 'My HOA is in Preston or Amberly. Does that affect my cost?',
      a: 'Yes. HOAs in Preston, Prestonwood Country Club, Lochmere, and Amberly Village typically require architectural or designer shingles and color pre-approval, adding about $1,000 to $2,000 over basic 3-tab shingles.',
    },
    {
      q: 'Will my homeowners insurance cover my roof in Cary, NC?',
      a: 'If your roof was damaged by wind or hail during Wake County storms, standard US homeowner policies usually cover replacement minus your deductible, and Class 4 impact-resistant shingles can qualify for annual insurance discounts.',
    },
    {
      q: 'What is the best time of year to replace a roof in Cary, NC?',
      a: 'Fall (September through November) and Spring (March through May) offer ideal moderate temperatures in Cary, though our mild North Carolina climate supports year-round installation.',
    },
    {
      q: 'Can you work in my specific neighborhood if I am just outside Cary?',
      a: 'Yes. We dispatch daily to Apex, Morrisville, Holly Springs, West Raleigh, Durham, and Chapel Hill directly from our 5 Wake County ZIP code hubs.',
    },
  ];
  const calcFaqsHtml = calcFaqs
    .map(
      (f, idx) => `
        <div style="padding: 18px; background: #FAF8F4; border-radius: 10px; border: 1px solid #e8e4df;">
          <h3 style="font-size: 17px; font-weight: 700; margin: 0 0 6px 0;">${idx + 1}. ${escapeHtml(f.q)}</h3>
          <p style="margin: 0; font-size: 15px;">${escapeHtml(f.a)}</p>
        </div>`
    )
    .join('');
  const calcDescriptor: PageSeoDescriptor = {
    canonicalSlug: 'cary-nc-roofing-calculator.html',
    outputFiles: ['cary-nc-roofing-calculator.html'],
    aliases: ['cary-nc-roofing-calculator.html', 'cary-nc-roofing-calculator', 'calculator', 'roofing-calculator', 'roofing-calculator.html'],
    title: calcTitle,
    description: calcDesc,
    ogImage: `${SITE_ORIGIN}/images/split-replacement.webp`,
    breadcrumbLabel: 'Cary NC Roofing Calculator',
    schemaJson: buildSchemaGraph({
      canonicalUrl: calcUrl,
      title: calcTitle,
      description: calcDesc,
      ogImage: `${SITE_ORIGIN}/images/split-replacement.webp`,
      breadcrumbLabel: 'Cary NC Roofing Calculator',
      faqs: calcFaqs,
    }),
    bodyHtml: `
      ${renderSharedHeader()}
      <nav aria-label="Breadcrumb" style="background: #FAF8F4; border-bottom: 1px solid #e8e4df; padding: 10px 24px; font-size: 12px; font-weight: 600;">
        <div style="max-width: 1100px; margin: 0 auto;"><a href="/" style="color: #000000; text-decoration: none;">Home</a> / <span style="color: #9A3412; font-weight: 700;">Cary NC Roofing Calculator</span></div>
      </nav>
      <main style="max-width: 1100px; margin: 0 auto; padding: 36px 24px; color: #000000; line-height: 1.6;">
        <div class="kicker">INSTANT WAKE COUNTY ROOF COST ESTIMATOR</div>
        <h1 style="font-size: 38px; font-weight: 800; margin: 0 0 16px 0;">Cary, NC Roofing Cost Calculator &amp; Price Guide</h1>
        <p style="font-size: 17px; font-weight: 500; margin-bottom: 24px;">
          Estimate your exact roof replacement investment in Cary, NC based on home square footage, roof pitch, complexity, tear-off disposal ($0.65/sq ft), Town of Cary building permit fees ($350), and material choice.
        </p>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #FAF8F4; margin-bottom: 28px;">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 12px 0;">Installed Cost Per Square Foot in Cary, NC</h2>
          <ul style="padding-left: 20px; font-size: 15px; line-height: 1.8;">
            <li><strong>Architectural Asphalt Shingles (GAF / CertainTeed):</strong> $4.80 &ndash; $6.50 / sq ft installed (50-year warranty, 130 MPH wind rating)</li>
            <li><strong>Standard 3-Tab Asphalt Shingles:</strong> $3.80 &ndash; $4.70 / sq ft installed</li>
            <li><strong>Premium Designer / Luxury Shingles:</strong> $7.50 &ndash; $10.20 / sq ft installed</li>
            <li><strong>Standing Seam Metal Roofing (24-Gauge Kynar 500):</strong> $11.50 &ndash; $16.50 / sq ft installed (<a href="/Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof" style="color: #9A3412; font-weight: 700;">Explore Standing Seam Guide</a>)</li>
            <li><strong>Synthetic Slate / Composite Tiles (Class 4):</strong> $13.00 &ndash; $18.50 / sq ft installed</li>
            <li><strong>Commercial TPO / Low-Slope Membrane:</strong> $5.80 &ndash; $8.20 / sq ft installed</li>
          </ul>
        </section>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff; margin-bottom: 28px;">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 14px 0;">Average Roof Replacement Cost by Cary ZIP Code</h2>
          <ul style="padding-left: 20px; font-size: 15px; line-height: 1.8;">
            <li><strong>ZIP 27511 (Central &amp; Downtown Cary):</strong> $8,000 &ndash; $12,000 average for older 70s&ndash;90s ranches near Downtown Cary Park &amp; Academy St.</li>
            <li><strong>ZIP 27512 (East Cary &amp; Crossroads):</strong> $9,000 &ndash; $13,000 average across Walnut St Corridor and Crossroads subdivisions.</li>
            <li><strong>ZIP 27513 (North Cary &amp; Preston):</strong> $12,000 &ndash; $18,000 average for 2,500&ndash;4,000 sq ft HOA-governed Preston &amp; Park West Village homes.</li>
            <li><strong>ZIP 27518 (South Cary &amp; Lochmere / Waverly Place HQ):</strong> $9,500 &ndash; $14,500 average around Lochmere, Kildaire Farms, and Regency.</li>
            <li><strong>ZIP 27519 (West Cary &amp; Amberly / Carpenter):</strong> $11,000 &ndash; $16,500 average for steep two-story estates in Amberly &amp; Carpenter Village.</li>
          </ul>
        </section>
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 26px; font-weight: 800; margin: 0 0 16px 0;">FAQs About Roof Replacement Cost in Cary, NC</h2>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${calcFaqsHtml}
          </div>
        </section>
        ${renderZipDispatchSection()}
      </main>
      ${renderSharedFooter()}`,
  };

  // 4. Our Locations Page (our-locations.html)
  const locationsUrl = `${SITE_ORIGIN}/our-locations.html`;
  const locationsTitle = 'Roofing Service Locations in Cary, NC & Triangle | caryncroofing.com';
  const locationsDesc =
    'Local roofing coverage for all Cary, NC zip codes (27511, 27512, 27513, 27518, 27519), plus Apex, Morrisville, and Holly Springs. Same-day dispatch and free on-site roof inspections.';
  const locationFaqs = [
    {
      q: 'Which zip codes does CaryRoofing serve in Cary, NC?',
      a: 'We provide comprehensive residential and commercial roofing coverage across all 5 official Cary zip codes: 27511 (Central & Downtown Cary), 27512 (East Cary & Crossroads), 27513 (North Cary & Preston), 27518 (South Cary & Lochmere / Waverly Place), and 27519 (West Cary & Amberly), plus adjacent Triangle towns like Apex, Morrisville, and Holly Springs.',
    },
    {
      q: 'How fast is emergency roof dispatch in Cary, NC?',
      a: 'Our mobile roofing crews are stationed locally in Cary and dispatch within 60 to 90 minutes across Wake County for emergency roof tarping, storm damage, tree impacts, and active ceiling leaks.',
    },
    {
      q: 'Are on-site roof inspections free across all Cary neighborhoods?',
      a: 'Yes, 100% free on-site roof inspections are provided for all Cary homeowners and business owners with full drone aerial diagnostics, HAAG-certified photo reports, and transparent repair or replacement estimates.',
    },
    {
      q: 'Do you handle Town of Cary roofing permits and building code compliance?',
      a: 'Yes, our team manages all Town of Cary Inspections & Permits filings, ensuring complete compliance with North Carolina Residential Building Code High-Wind (130 MPH) requirements.',
    },
  ];
  const locationFaqsHtml = locationFaqs
    .map(
      (f, idx) => `
        <div style="padding: 18px; background: #FAF8F4; border-radius: 10px; border: 1px solid #e8e4df;">
          <h3 style="font-size: 17px; font-weight: 700; margin: 0 0 6px 0;">${idx + 1}. ${escapeHtml(f.q)}</h3>
          <p style="margin: 0; font-size: 15px;">${escapeHtml(f.a)}</p>
        </div>`
    )
    .join('');
  const locationsDescriptor: PageSeoDescriptor = {
    canonicalSlug: 'our-locations.html',
    outputFiles: ['our-locations.html'],
    aliases: ['our-locations.html', 'our-locations', 'locations', 'service-areas'],
    title: locationsTitle,
    description: locationsDesc,
    ogImage: `${SITE_ORIGIN}/images/cary-service-map.svg`,
    breadcrumbLabel: 'Our Locations',
    schemaJson: buildSchemaGraph({
      canonicalUrl: locationsUrl,
      title: locationsTitle,
      description: locationsDesc,
      ogImage: `${SITE_ORIGIN}/images/cary-service-map.svg`,
      breadcrumbLabel: 'Our Locations',
      faqs: locationFaqs,
    }),
    bodyHtml: `
      ${renderSharedHeader()}
      <nav aria-label="Breadcrumb" style="background: #FAF8F4; border-bottom: 1px solid #e8e4df; padding: 10px 24px; font-size: 12px; font-weight: 600;">
        <div style="max-width: 1100px; margin: 0 auto;"><a href="/" style="color: #000000; text-decoration: none;">Home</a> / <span style="color: #9A3412; font-weight: 700;">Our Locations</span></div>
      </nav>
      <main style="max-width: 1100px; margin: 0 auto; padding: 36px 24px; color: #000000; line-height: 1.6;">
        <div class="kicker">WAKE COUNTY &amp; TRIANGLE DISPATCH NETWORK</div>
        <h1 style="font-size: 38px; font-weight: 800; margin: 0 0 16px 0;">Cary, NC Roofing Service Locations &amp; ZIP Code Directory</h1>
        <p style="font-size: 17px; font-weight: 500; margin-bottom: 24px;">
          CaryRoofing operates dedicated local dispatch coverage across every official Town of Cary ZIP code&mdash;Central &amp; Downtown Cary (27511), East Cary &amp; Crossroads (27512), North Cary &amp; Preston (27513), South Cary &amp; Lochmere / Waverly Place HQ (27518), and West Cary &amp; Amberly (27519)&mdash;plus Apex, Morrisville, Holly Springs, and West Raleigh / RTP.
        </p>
        ${renderZipDispatchSection()}
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff; margin-bottom: 28px;">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 12px 0;">Surrounding Triangle Communities We Serve</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
            <div style="padding: 16px; background: #FAF8F4; border: 1px solid #e8e4df; border-radius: 10px;">
              <h3 style="font-size: 17px; font-weight: 700; margin: 0 0 6px 0;">Apex, NC</h3>
              <p style="margin: 0; font-size: 14px;">Downtown Apex, Peakway corridor, Bella Casa, and Salem Street communities.</p>
            </div>
            <div style="padding: 16px; background: #FAF8F4; border: 1px solid #e8e4df; border-radius: 10px;">
              <h3 style="font-size: 17px; font-weight: 700; margin: 0 0 6px 0;">Morrisville, NC</h3>
              <p style="margin: 0; font-size: 14px;">Davis Drive, Park West, Perimeter Park, and RTP adjacent developments.</p>
            </div>
            <div style="padding: 16px; background: #FAF8F4; border: 1px solid #e8e4df; border-radius: 10px;">
              <h3 style="font-size: 17px; font-weight: 700; margin: 0 0 6px 0;">Holly Springs, NC</h3>
              <p style="margin: 0; font-size: 14px;">Sunset Ridge, Holly Springs Rd corridor, 12 Oaks, and Ting Park area.</p>
            </div>
            <div style="padding: 16px; background: #FAF8F4; border: 1px solid #e8e4df; border-radius: 10px;">
              <h3 style="font-size: 17px; font-weight: 700; margin: 0 0 6px 0;">West Raleigh &amp; RTP</h3>
              <p style="margin: 0; font-size: 14px;">Wade Avenue, Blue Ridge, Crabtree Valley, and commercial roofs in RTP.</p>
            </div>
          </div>
        </section>
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 26px; font-weight: 800; margin: 0 0 16px 0;">Frequently Asked Location &amp; Dispatch Questions</h2>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${locationFaqsHtml}
          </div>
        </section>
      </main>
      ${renderSharedFooter()}`,
  };

  // 5. Privacy Policy Page (privacy-policy.html)
  const privacyUrl = `${SITE_ORIGIN}/privacy-policy.html`;
  const privacyTitle = 'Privacy Policy & Data Protection | caryncroofing.com - Cary, NC';
  const privacyDesc =
    'Privacy Policy and customer data protection standards for caryncroofing.com in Cary, NC and Wake County. Strict no-sale of personal homeowner information.';
  const privacyDescriptor: PageSeoDescriptor = {
    canonicalSlug: 'privacy-policy.html',
    outputFiles: ['privacy-policy.html'],
    aliases: ['privacy-policy.html', 'privacy-policy', 'privacy'],
    title: privacyTitle,
    description: privacyDesc,
    ogImage: `${SITE_ORIGIN}/images/hero-roofing.webp`,
    breadcrumbLabel: 'Privacy Policy',
    schemaJson: buildSchemaGraph({
      canonicalUrl: privacyUrl,
      title: privacyTitle,
      description: privacyDesc,
      ogImage: `${SITE_ORIGIN}/images/hero-roofing.webp`,
      breadcrumbLabel: 'Privacy Policy',
    }),
    bodyHtml: `
      ${renderSharedHeader()}
      <nav aria-label="Breadcrumb" style="background: #FAF8F4; border-bottom: 1px solid #e8e4df; padding: 10px 24px; font-size: 12px; font-weight: 600;">
        <div style="max-width: 1100px; margin: 0 auto;"><a href="/" style="color: #000000; text-decoration: none;">Home</a> / <span style="color: #9A3412; font-weight: 700;">Privacy Policy</span></div>
      </nav>
      <main style="max-width: 1100px; margin: 0 auto; padding: 36px 24px; color: #000000; line-height: 1.6;">
        <div class="kicker">LEGAL &amp; DATA TRANSPARENCY</div>
        <h1 style="font-size: 38px; font-weight: 800; margin: 0 0 16px 0;">Privacy Policy &amp; Data Protection Standards</h1>
        <p style="font-size: 16px; margin-bottom: 24px;">
          Effective Date: October 14, 2026. This Privacy Policy outlines how <strong>Cary Roofing Contractors LLC</strong> (caryncroofing.com) collects, uses, protects, and discloses personal information obtained from homeowners, commercial property owners, and website visitors across Cary, NC and Wake County.
        </p>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff; margin-bottom: 20px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 10px 0;">1. Company Information &amp; Operational Scope</h2>
          <p style="font-size: 15px; margin: 0;">
            This policy applies to all web interactions, estimate inquiry forms, telephone consultations, and on-site roofing assessments coordinated from our central hub at <strong>580 New Waverly Pl Ste 216, Cary, NC 27518</strong> (Hotline: <a href="tel:+19193359543" style="color: #9A3412; font-weight: 700;">+1 919-335-9543</a>) serving Cary ZIP codes 27511, 27512, 27513, 27518, and 27519.
          </p>
        </section>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff; margin-bottom: 20px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 10px 0;">2. Information We Collect</h2>
          <ul style="padding-left: 20px; font-size: 15px; line-height: 1.8; margin: 0;">
            <li><strong>Contact Details:</strong> Full name, telephone number, email address, and Wake County property address.</li>
            <li><strong>Roofing Project Specifications:</strong> Roof pitch, square footage, existing shingle or metal profile, reported leak locations, and storm damage photos.</li>
            <li><strong>Insurance Claim Documentation:</strong> Claim reference numbers when authorized to prepare itemized Xactimate storm restoration estimates.</li>
            <li><strong>Automated Technical Data:</strong> Standard browser and routing metadata to optimize local ZIP code dispatch performance.</li>
          </ul>
        </section>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff; margin-bottom: 20px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 10px 0;">3. How We Use Your Information</h2>
          <p style="font-size: 15px; margin: 0;">
            Submitted details are used strictly for estimates and diagnostics, local HAAG-certified crew dispatch, Town of Cary Inspections &amp; Permits filings, and registering manufacturer warranties (such as GAF Golden Pledge or CertainTeed SureStart PLUS) in your name.
          </p>
        </section>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #FAF8F4; margin-bottom: 20px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 10px 0;">4. Strict No-Sale Policy &amp; Data Sharing</h2>
          <p style="font-size: 15px; margin: 0;">
            We never sell, rent, or auction homeowner contact details to third-party lead aggregators or marketing brokers. Information is shared only with assigned material delivery crews, municipal building inspection officials, or authorized insurance adjusters at your request.
          </p>
        </section>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff; margin-bottom: 20px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 10px 0;">5. Data Security, Retention &amp; Contact</h2>
          <p style="font-size: 15px; margin: 0;">
            All forms use TLS 1.3 / 256-bit SSL encryption. Active project warranties are retained for the warranty lifespan; inactive inquiries are purged after 24 months. Questions? Email <a href="mailto:caryncroofing@gmail.com" style="color: #9A3412; font-weight: 700;">caryncroofing@gmail.com</a> or call <a href="tel:+19193359543" style="color: #9A3412; font-weight: 700;">+1 919-335-9543</a>.
          </p>
        </section>
      </main>
      ${renderSharedFooter()}`,
  };

  // 6. Terms of Service Page (terms-of-service.html)
  const termsUrl = `${SITE_ORIGIN}/terms-of-service.html`;
  const termsTitle = 'Terms of Service & Warranty Conditions | caryncroofing.com - Cary, NC';
  const termsDesc =
    'Terms of Service, contractor referral standards, estimate guidelines, Town of Cary permit compliance, and warranty terms for caryncroofing.com in Cary, NC.';
  const termsDescriptor: PageSeoDescriptor = {
    canonicalSlug: 'terms-of-service.html',
    outputFiles: ['terms-of-service.html'],
    aliases: ['terms-of-service.html', 'terms-of-service', 'terms'],
    title: termsTitle,
    description: termsDesc,
    ogImage: `${SITE_ORIGIN}/images/hero-roofing.webp`,
    breadcrumbLabel: 'Terms of Service',
    schemaJson: buildSchemaGraph({
      canonicalUrl: termsUrl,
      title: termsTitle,
      description: termsDesc,
      ogImage: `${SITE_ORIGIN}/images/hero-roofing.webp`,
      breadcrumbLabel: 'Terms of Service',
    }),
    bodyHtml: `
      ${renderSharedHeader()}
      <nav aria-label="Breadcrumb" style="background: #FAF8F4; border-bottom: 1px solid #e8e4df; padding: 10px 24px; font-size: 12px; font-weight: 600;">
        <div style="max-width: 1100px; margin: 0 auto;"><a href="/" style="color: #000000; text-decoration: none;">Home</a> / <span style="color: #9A3412; font-weight: 700;">Terms of Service</span></div>
      </nav>
      <main style="max-width: 1100px; margin: 0 auto; padding: 36px 24px; color: #000000; line-height: 1.6;">
        <div class="kicker">LEGAL TERMS &amp; CONDITIONS</div>
        <h1 style="font-size: 38px; font-weight: 800; margin: 0 0 16px 0;">Terms of Service &amp; Operational Agreement</h1>
        <p style="font-size: 16px; margin-bottom: 24px;">
          Effective Date: October 18, 2026. These Terms of Service govern your access to and use of <strong>caryncroofing.com</strong>, including all roofing estimate tools, cost calculators, on-site assessment dispatch services, and licensed contractor interactions across Cary, NC and Wake County.
        </p>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff; margin-bottom: 20px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 10px 0;">1. Acceptance of Terms</h2>
          <p style="font-size: 15px; margin: 0;">
            By submitting an estimate request form, using our <a href="/cary-nc-roofing-calculator.html" style="color: #9A3412; font-weight: 700;">online roofing calculator</a>, or calling our central Cary dispatch desk at <a href="tel:+19193359543" style="color: #9A3412; font-weight: 700;">+1 919-335-9543</a>, you agree to these Terms of Service.
          </p>
        </section>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #FAF8F4; margin-bottom: 20px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 10px 0;">2. Scope, Estimates &amp; Town of Cary Permitting</h2>
          <p style="font-size: 15px; margin: 0 0 10px 0;">
            Cary Roofing operates a curated network of independently licensed, vetted, and $2M-insured roofing contractors in Wake County. Online calculator figures are preliminary estimates; final binding project pricing is confirmed solely following a physical 21-point roof inspection.
          </p>
          <p style="font-size: 15px; margin: 0;">
            All full replacements comply with Town of Cary Inspections &amp; Permits requirements and Chapter 9 of the North Carolina Residential Building Code.
          </p>
        </section>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff; margin-bottom: 20px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 10px 0;">3. Warranties &amp; Manufacturer Guarantees</h2>
          <p style="font-size: 15px; margin: 0;">
            Manufacturer warranties (GAF Golden Pledge, CertainTeed SureStart PLUS, Owens Corning Platinum) are registered directly after final inspection. Workmanship warranties are provided in writing by the assigned licensed contractor.
          </p>
        </section>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff; margin-bottom: 20px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 10px 0;">4. Governing Law &amp; Legal Contact</h2>
          <p style="font-size: 15px; margin: 0;">
            Governed by the laws of the State of North Carolina with exclusive jurisdiction in Wake County courts. Contact <strong>Cary Roofing Contractors LLC</strong> at 580 New Waverly Pl Ste 216, Cary, NC 27518 or <a href="mailto:caryncroofing@gmail.com" style="color: #9A3412; font-weight: 700;">caryncroofing@gmail.com</a>.
          </p>
        </section>
      </main>
      ${renderSharedFooter()}`,
  };

  // 7. Standing Seam Metal Roof Editorial Guide (Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof)
  // NOTE: Keeps exact H2 heading ("Why More Homeowners Are Choosing Standing Seam Metal Roof Cary NC USA") and full FAQ parity!
  const standingSlug = 'Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof';
  const standingUrl = `${SITE_ORIGIN}/${standingSlug}`;
  const standingTitle = 'Why More Homeowners Are Choosing Standing Seam Metal Roof Cary NC USA | CaryRoofing';
  const standingDesc =
    'Why More Homeowners Are Choosing Standing Seam Metal Roof Cary NC USA: concealed fasteners, 50+ year durability, Kynar 500 energy savings, cost analysis, and local Cary NC installation.';
  const standingFaqs = [
    {
      q: 'How long does a standing seam metal roof last?',
      a: 'If it is installed in the proper way, it can easily last 40 to 70 years. Some roofs go even more than that depending on metal gauge, Kynar 500 coating quality, and annual inspection.',
    },
    {
      q: 'How much does a standing seam roof cost per square foot?',
      a: 'In the US, it normally costs around $9 to $16 per square foot with full installation depending on material gauge, roof complexity, labor charges, and old roof tear-off requirements.',
    },
    {
      q: 'Does a metal roof make a house hotter?',
      a: 'No. With a high-reflectance Kynar finish and proper attic ventilation and insulation, standing seam metal roofs reflect solar radiation and help reduce cooling costs.',
    },
    {
      q: 'Can you walk on a standing seam roof?',
      a: 'Yes, carefully, though wet or steep panels are slippery and improper footing can dent seams or scratch coatings. Calling a professional inspector is recommended for routine checks or repairs.',
    },
    {
      q: 'How often does metal roof need maintenance?',
      a: 'Minimal maintenance is needed: inspect once per year and after major storms to clear leaves or debris from valleys and check flashing and drainage paths.',
    },
  ];
  const standingFaqsHtml = standingFaqs
    .map(
      (f) => `
        <div style="padding: 18px; background: #FAF8F4; border-radius: 10px; border: 1px solid #e8e4df;">
          <h3 style="font-size: 17px; font-weight: 700; margin: 0 0 6px 0;">${escapeHtml(f.q)}</h3>
          <p style="margin: 0; font-size: 15px;">${escapeHtml(f.a)}</p>
        </div>`
    )
    .join('');
  const standingDescriptor: PageSeoDescriptor = {
    canonicalSlug: standingSlug,
    outputFiles: [`${standingSlug}/index.html`],
    aliases: [
      standingSlug,
      `${standingSlug}.html`,
      standingSlug.toLowerCase(),
      'standing-seam-metal-roof',
      'standing-seam-metal-roof.html',
      'standing-seam',
    ],
    title: standingTitle,
    description: standingDesc,
    ogImage: `${SITE_ORIGIN}/images/standing-seam-metal-roof-cary-nc.webp`,
    breadcrumbLabel: 'Standing Seam Metal Roof',
    breadcrumbParent: { label: 'Metal Roofing', href: '/metal-roofing-services-cary-nc-usa.html' },
    schemaJson: buildSchemaGraph({
      canonicalUrl: standingUrl,
      title: standingTitle,
      description: standingDesc,
      ogImage: `${SITE_ORIGIN}/images/standing-seam-metal-roof-cary-nc.webp`,
      breadcrumbLabel: 'Standing Seam Metal Roof',
      breadcrumbParent: { label: 'Metal Roofing', href: '/metal-roofing-services-cary-nc-usa.html' },
      isService: true,
      faqs: standingFaqs,
    }),
    bodyHtml: `
      ${renderSharedHeader()}
      <nav aria-label="Breadcrumb" style="background: #FAF8F4; border-bottom: 1px solid #e8e4df; padding: 10px 24px; font-size: 12px; font-weight: 600;">
        <div style="max-width: 1100px; margin: 0 auto;">
          <a href="/" style="color: #000000; text-decoration: none;">Home</a> /
          <a href="/metal-roofing-services-cary-nc-usa.html" style="color: #000000; text-decoration: none;">Metal Roofing</a> /
          <span style="color: #9A3412; font-weight: 700;">Standing Seam Metal Roof</span>
        </div>
      </nav>
      <main style="max-width: 1100px; margin: 0 auto; padding: 36px 24px; color: #000000; line-height: 1.6;">
        <div class="kicker">TOWN OF CARY &amp; WAKE COUNTY ARCHITECTURAL METAL ROOFING GUIDE</div>
        <h2 style="font-size: 38px; font-weight: 800; line-height: 1.2; margin: 0 0 16px 0;">
          Why More Homeowners Are Choosing Standing Seam Metal Roof Cary NC USA
        </h2>
        <p style="font-size: 17px; margin-bottom: 16px;">
          A quality roof provides structural security, energy efficiency, and long-term property value. More homeowners in Cary, NC are upgrading from traditional <a href="/shingle-tile-slate-roofing-cary-nc-usa.html" style="color: #9A3412; font-weight: 700;">asphalt shingles</a> to <a href="/metal-roofing-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700;">architectural standing seam metal roofing</a> because screws and clips are concealed beneath interlocking raised seams, protecting the roof deck for 40 to 70+ years.
        </p>
        <div style="margin-bottom: 28px; display: flex; gap: 14px; flex-wrap: wrap;">
          <a href="tel:+19193359543" style="background: #9A3412; color: #ffffff; padding: 14px 26px; border-radius: 8px; font-weight: 800; text-decoration: none;">Call Cary Hotline: +1 919-335-9543</a>
          <a href="/contact-cary-roofing.html" style="background: #141c27; color: #ffffff; padding: 14px 26px; border-radius: 8px; font-weight: 800; text-decoration: none;">Get Free Standing Seam Quote</a>
        </div>

        <section style="margin-bottom: 32px; padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #FAF8F4;">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 12px 0;">What Is a Standing Seam Metal Roof?</h2>
          <p style="font-size: 15px; margin: 0 0 12px 0;">
            A standing seam metal roof uses continuous 24-gauge Galvalume steel or aluminum panels running from ridge to eaves joined by 1.5&Prime; to 2&Prime; raised seams with hidden clips. Unlike exposed-fastener metal roofs, rain and UV light never hit fasteners directly. All installations meet <a href="https://www.carync.gov/services-permits/permits-inspections" target="_blank" rel="noopener noreferrer" style="color: #9A3412; font-weight: 700;">Town of Cary Inspections &amp; Permits</a> and <a href="https://www.ncdoi.gov/osfm/engineering-and-codes/nc-state-building-codes" target="_blank" rel="noopener noreferrer" style="color: #9A3412; font-weight: 700;">North Carolina State Building Code</a> requirements.
          </p>
        </section>

        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 14px 0;">Why Are More Homeowners Choosing Standing Seam Metal Roofing?</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
            <div style="padding: 18px; border: 1px solid #e8e4df; border-radius: 10px; background: #ffffff;">
              <h3 style="font-size: 18px; font-weight: 700; margin: 0 0 6px 0;">1. Long-Lasting Durability</h3>
              <p style="margin: 0; font-size: 14px;">Engineered for a 40 to 70+ year lifespan against humid Carolina summers and heavy storm cycles.</p>
            </div>
            <div style="padding: 18px; border: 1px solid #e8e4df; border-radius: 10px; background: #ffffff;">
              <h3 style="font-size: 18px; font-weight: 700; margin: 0 0 6px 0;">2. Excellent Weather Protection</h3>
              <p style="margin: 0; font-size: 14px;">Raised vertical seams and concealed clips withstand 140+ MPH winds and wind-driven rain without exposed screw leaks.</p>
            </div>
            <div style="padding: 18px; border: 1px solid #e8e4df; border-radius: 10px; background: #ffffff;">
              <h3 style="font-size: 18px; font-weight: 700; margin: 0 0 6px 0;">3. Clean Modern Appearance</h3>
              <p style="margin: 0; font-size: 14px;">Smooth vertical lines in Matte Black, Charcoal Gray, Bronze, White, and Dark Green complement modern, colonial, and farmhouse homes.</p>
            </div>
            <div style="padding: 18px; border: 1px solid #e8e4df; border-radius: 10px; background: #ffffff;">
              <h3 style="font-size: 18px; font-weight: 700; margin: 0 0 6px 0;">4. Lower Routine Maintenance</h3>
              <p style="margin: 0; font-size: 14px;">Zero exposed neoprene washers to crack or retighten; simple annual seam and gutter checks.</p>
            </div>
            <div style="padding: 18px; border: 1px solid #e8e4df; border-radius: 10px; background: #ffffff;">
              <h3 style="font-size: 18px; font-weight: 700; margin: 0 0 6px 0;">5. Energy Savings (ENERGY STAR)</h3>
              <p style="margin: 0; font-size: 14px;">Cool-roof reflective Kynar 500 coatings paired with <a href="/roof-insulation-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700;">attic insulation</a> reduce summer cooling loads.</p>
            </div>
            <div style="padding: 18px; border: 1px solid #e8e4df; border-radius: 10px; background: #ffffff;">
              <h3 style="font-size: 18px; font-weight: 700; margin: 0 0 6px 0;">6. Non-Penetrating Solar Compatibility</h3>
              <p style="margin: 0; font-size: 14px;">S-5! seam clamps mount solar panels cleanly without drilling holes through roof panels.</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 32px; padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff;">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 12px 0;">Standing Seam vs. R-Panel vs. Asphalt Shingles</h2>
          <p style="font-size: 15px; margin: 0;">
            Standing seam offers concealed fasteners and 50+ year longevity; R-Panel uses exposed fasteners suited to garages and workshops; asphalt shingles offer the lowest upfront cost ($4.80&ndash;$6.50/sq ft) with an 18&ndash;25 year service life. Compare exact square-foot pricing with our <a href="/cary-nc-roofing-calculator.html" style="color: #9A3412; font-weight: 700;">Cary NC Roofing Cost Calculator</a>.
          </p>
        </section>

        ${renderZipDispatchSection()}

        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 26px; font-weight: 800; margin: 0 0 16px 0;">Frequently Asked Questions: Standing Seam Metal Roof Cost &amp; Care</h2>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${standingFaqsHtml}
          </div>
        </section>

        <section style="margin-bottom: 24px; padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #FAF8F4;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 12px 0;">Related Cary, NC Roofing Guides &amp; Authorities</h2>
          <ul style="padding-left: 20px; font-size: 14px; line-height: 1.8; margin: 0;">
            <li><a href="/metal-roofing-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700;">Architectural Metal Roofing Services Cary NC</a></li>
            <li><a href="/roof-replacement-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700;">Complete Roof Replacement Services in Cary NC</a></li>
            <li><a href="/roof-inspection-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700;">HAAG Drone Roof Inspection Services</a></li>
            <li><a href="/our-locations.html" style="color: #9A3412; font-weight: 700;">All Cary ZIP Code Service Locations (27511&ndash;27519)</a></li>
            <li><a href="https://www.metalroofing.com/" target="_blank" rel="noopener noreferrer" style="color: #9A3412;">Metal Roofing Alliance (MRA)</a> &bull; <a href="https://www.energystar.gov/" target="_blank" rel="noopener noreferrer" style="color: #9A3412;">ENERGY STAR Cool Roofs</a> &bull; <a href="https://www.nrca.net/" target="_blank" rel="noopener noreferrer" style="color: #9A3412;">NRCA</a></li>
          </ul>
        </section>
      </main>
      ${renderSharedFooter()}`,
  };

  // 8. Custom 404 Page (404.html) with auto-redirect for legacy URLs and full directory links
  const notFoundDescriptor: PageSeoDescriptor = {
    canonicalSlug: '404.html',
    outputFiles: ['404.html'],
    aliases: ['404', '404.html', 'not-found'],
    title: 'Page Not Found (404) | Cary Roofing Contractors LLC',
    description:
      'The requested page was not found. Explore all certified Cary, NC roofing services, free 21-point roof inspection scheduling, and 24/7 Wake County emergency dispatch.',
    ogImage: `${SITE_ORIGIN}/images/hero-roofing.webp`,
    breadcrumbLabel: '404 Not Found',
    schemaJson: buildSchemaGraph({
      canonicalUrl: `${SITE_ORIGIN}/404.html`,
      title: 'Page Not Found (404) | Cary Roofing Contractors LLC',
      description: 'The requested page was not found. Explore Cary, NC roofing services.',
      ogImage: `${SITE_ORIGIN}/images/hero-roofing.webp`,
      breadcrumbLabel: '404 Not Found',
    }),
    bodyHtml: `
      ${renderSharedHeader()}
      <nav aria-label="Breadcrumb" style="background: #FAF8F4; border-bottom: 1px solid #e8e4df; padding: 10px 24px; font-size: 12px; font-weight: 600;">
        <div style="max-width: 1100px; margin: 0 auto;"><a href="/" style="color: #000000; text-decoration: none;">Home</a> / <span style="color: #9A3412; font-weight: 700;">404 - Page Not Found</span></div>
      </nav>
      <main style="max-width: 1100px; margin: 0 auto; padding: 48px 24px; color: #000000; line-height: 1.6; text-align: center;">
        <div class="kicker" style="color: #9A3412; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px;">HTTP ERROR 404</div>
        <h1 style="font-size: 42px; font-weight: 800; margin: 0 0 16px 0;">Looking for Cary Roofing Services?</h1>
        <p style="font-size: 18px; max-width: 700px; margin: 0 auto 28px auto; color: #334155;">
          The specific link you requested has moved or is no longer at this address. Use the directory below to find certified roof replacement, repair, inspection, and calculator tools across Cary, NC.
        </p>
        <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-bottom: 40px;">
          <a href="/" style="background: #9A3412; color: #ffffff; padding: 14px 28px; border-radius: 8px; font-weight: 800; text-decoration: none;">Return to Home</a>
          <a href="/contact-cary-roofing.html" style="background: #141c27; color: #ffffff; padding: 14px 28px; border-radius: 8px; font-weight: 800; text-decoration: none;">Contact 24/7 Hotline</a>
          <a href="/cary-nc-roofing-calculator.html" style="background: #FAF8F4; color: #9A3412; border: 1px solid #9A3412; padding: 14px 28px; border-radius: 8px; font-weight: 800; text-decoration: none;">Cary NC Roofing Calculator</a>
        </div>
        <section style="text-align: left; background: #ffffff; border: 1px solid #e8e4df; border-radius: 12px; padding: 28px; margin-bottom: 32px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 16px 0;">All Cary, NC Roofing Services &amp; Guides</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; font-size: 14px;">
            <a href="/roof-installation-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700; text-decoration: none;">Roof Installation Services</a>
            <a href="/roof-repair-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700; text-decoration: none;">Roof Repair Services</a>
            <a href="/roof-replacement-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700; text-decoration: none;">Roof Replacement Services</a>
            <a href="/storm-emergency-roofing-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700; text-decoration: none;">Emergency Storm Damage</a>
            <a href="/Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof" style="color: #9A3412; font-weight: 700; text-decoration: none;">Standing Seam Metal Roof Guide</a>
            <a href="/metal-roofing-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700; text-decoration: none;">Metal Roofing Services</a>
            <a href="/roof-inspection-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700; text-decoration: none;">Roof Inspection Services</a>
            <a href="/shingle-tile-slate-roofing-cary-nc-usa.html" style="color: #9A3412; font-weight: 700; text-decoration: none;">Shingle, Tile &amp; Slate</a>
            <a href="/commercial-industrial-roofing-cary-nc-usa.html" style="color: #9A3412; font-weight: 700; text-decoration: none;">Commercial &amp; Industrial</a>
            <a href="/flat-roofing-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700; text-decoration: none;">Flat Roofing (TPO/EPDM)</a>
            <a href="/gutter-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700; text-decoration: none;">Seamless Gutters</a>
            <a href="/our-locations.html" style="color: #9A3412; font-weight: 700; text-decoration: none;">Our Locations (All Cary ZIPs)</a>
          </div>
        </section>
        ${renderZipDispatchSection()}
      </main>
      ${renderSharedFooter()}`,
  };

  return [
    ...serviceDescriptors,
    contactDescriptor,
    aboutDescriptor,
    calcDescriptor,
    locationsDescriptor,
    privacyDescriptor,
    termsDescriptor,
    standingDescriptor,
    notFoundDescriptor,
  ];
}

export function renderStaticPageHtml(baseHtmlTemplate: string, page: PageSeoDescriptor): string {
  const canonicalUrl = `${SITE_ORIGIN}/${page.canonicalSlug}`;
  const safeTitle = escapeHtml(page.title);
  const safeDesc = escapeHtml(page.description);
  const safeCanonical = escapeHtml(canonicalUrl);
  const safeImage = escapeHtml(page.ogImage);

  let html = baseHtmlTemplate;

  // 1. Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`);

  // For 404 error page, instruct search engines not to index the 404 URL itself while following directory links
  if (page.canonicalSlug === '404.html') {
    html = html.replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${safeTitle}</title>\n    <meta name="robots" content="noindex, follow" />`
    );
  }

  // 2. Replace <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${safeDesc}" />`
  );

  // 3. Replace OpenGraph tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${safeTitle}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${safeCanonical}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:image" content="${safeImage}" />`
  );

  // 4. Replace Twitter tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${safeTitle}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:url" content="${safeCanonical}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:image" content="${safeImage}" />`
  );

  // 5. Replace <link id="canonical-url" rel="canonical" ...>
  html = html.replace(
    /<link\s+id="canonical-url"\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link id="canonical-url" rel="canonical" href="${safeCanonical}" />`
  );

  // 6. Replace JSON-LD Schema script
  html = html.replace(
    /<script\s+id="app-dynamic-schema"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="app-dynamic-schema" type="application/ld+json">\n    ${page.schemaJson}\n    </script>`
  );

  // 7. Replace pre-rendered semantic HTML inside <div id="root">
  if (html.includes('<!--STATIC_ROOT_START-->') && html.includes('<!--STATIC_ROOT_END-->')) {
    html = html.replace(
      /<!--STATIC_ROOT_START-->[\s\S]*?<!--STATIC_ROOT_END-->/,
      `<!--STATIC_ROOT_START-->${page.bodyHtml}\n      <!--STATIC_ROOT_END-->`
    );
  } else {
    html = html.replace(
      /<div id="root">[\s\S]*?<\/footer>\s*<\/div>/,
      `<div id="root">${page.bodyHtml}\n    </div>`
    );
  }

  return html;
}
