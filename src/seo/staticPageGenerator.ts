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
    '@type': ['RoofingContractor', 'LocalBusiness', 'HomeAndConstructionBusiness'],
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
      '@id': `${SITE_ORIGIN}/#aggregaterating`,
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '128',
      reviewCount: '128',
      itemReviewed: { '@id': `${SITE_ORIGIN}/#localbusiness` },
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
      '@type': params.isService ? 'ItemPage' : 'WebPage',
      '@id': `${params.canonicalUrl}#webpage`,
      url: params.canonicalUrl,
      name: params.title,
      description: params.description,
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
      breadcrumb: { '@id': `${params.canonicalUrl}#breadcrumb` },
      inLanguage: 'en-US',
      datePublished: '2026-01-15T08:00:00-05:00',
      dateModified: '2026-10-25T10:00:00-05:00',
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

  const outputFiles = [service.slug, `${slugNoExt}/index.html`];
  const aliases = [service.slug, slugNoExt, service.id];

  // Legacy roof-maintenance-services-cary-nc-usa.html maps cleanly to roof-inspection-services-cary-nc-usa.html
  if (service.slug === 'roof-inspection-services-cary-nc-usa.html') {
    outputFiles.push(
      'roof-maintenance-services-cary-nc-usa.html',
      'roof-maintenance-services-cary-nc-usa/index.html'
    );
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
    outputFiles: [
      'contact-cary-roofing.html',
      'contact-cary-roofing/index.html',
      'contact.html',
      'contact/index.html',
    ],
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
            <strong>How to contact Cary Roofing in Wake County:</strong> Homeowners and commercial property managers in Cary, NC can reach our central dispatch hotline 24/7 at <a href="tel:+19193359543" style="color: #9A3412; font-weight: 800;">+1 919-335-9543</a>, email <a href="mailto:caryncroofing@gmail.com" style="color: #9A3412; font-weight: 700;">caryncroofing@gmail.com</a>, or visit our headquarters at 580 New Waverly Pl Ste 216, Cary, NC 27518 for rapid emergency roof tarping and free 21-point inspections.
          </p>
        </div>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #ffffff; margin-bottom: 28px;">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 12px 0;">Headquarters &amp; Direct Dispatch Information</h2>
          <ul style="padding-left: 20px; font-size: 15px; line-height: 1.8;">
            <li><strong>Corporate Headquarters:</strong> 580 New Waverly Pl Ste 216, Cary, NC 27518</li>
            <li><strong>24/7 Central Intake Hotline:</strong> <a href="tel:+19193359543" style="color: #9A3412; font-weight: 700;">+1 919-335-9543</a></li>
            <li><strong>Email Dispatch:</strong> <a href="mailto:caryncroofing@gmail.com" style="color: #9A3412;">caryncroofing@gmail.com</a></li>
            <li><strong>Operating Hours:</strong> Rapid Local Service (Mon &ndash; Sun 7:00 AM &ndash; 9:00 PM) &amp; 24/7 Storm Emergency Tarping</li>
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
    outputFiles: [
      'about-cary-roofing-contractors.html',
      'about-cary-roofing-contractors/index.html',
      'about.html',
      'about/index.html',
    ],
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
          Founded with a commitment to engineering precision and homeowner transparency, Cary Roofing connects Wake County families and commercial building managers with the highest standard of roofing craftsmanship, GAF Master Elite installations, and rapid storm leak defense.
        </p>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #FAF8F4; margin-bottom: 28px;">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 10px 0;">Lead Technical Author &amp; Chief Inspector: Marcus Vance</h2>
          <p style="font-size: 15px; margin: 0 0 12px 0;">
            <strong>Credentials:</strong> License #NC-R48201 &bull; HAAG Certified Residential Inspector &bull; CertainTeed Master Shingle Applicator
          </p>
          <p style="font-size: 15px; margin: 0;">
            Marcus Vance has directed residential roof diagnostic operations, structural deck evaluations, and emergency storm response in Cary and Wake County for over 15 years, overseeing more than 2,800 roof installations across Preston, Lochmere, Kildaire Farms, and Amberly in strict compliance with Chapter 9 of the North Carolina Residential Building Code.
          </p>
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
      a: 'Most Cary homeowners pay $8,500 to $13,500 for a standard 1,700 sq ft home with architectural asphalt shingles. Larger homes in North Cary (27513) and West Cary (27519) average $12,000 to $18,000, while standing seam metal roofs run $18,000 to $40,000.',
    },
    {
      q: 'Do I need a permit to replace my roof in Cary, NC?',
      a: 'Yes. The Town of Cary requires a residential building permit ($250–$450 including inspection) for a full roof replacement. Our Cary hubs handle all municipal permitting directly.',
    },
  ];
  const calcDescriptor: PageSeoDescriptor = {
    canonicalSlug: 'cary-nc-roofing-calculator.html',
    outputFiles: [
      'cary-nc-roofing-calculator.html',
      'cary-nc-roofing-calculator/index.html',
      'roofing-calculator.html',
      'calculator/index.html',
    ],
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
          Estimate your exact roof replacement investment in Cary, NC based on home square footage, roof pitch, complexity, tear-off disposal, Town of Cary permit fees, and material choice.
        </p>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #FAF8F4; margin-bottom: 28px;">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 12px 0;">Installed Cost Per Square Foot in Cary, NC</h2>
          <ul style="padding-left: 20px; font-size: 15px; line-height: 1.8;">
            <li><strong>Architectural Asphalt Shingles (GAF / CertainTeed):</strong> $4.80 &ndash; $6.50 / sq ft installed (50-year warranty, 130 MPH wind rating)</li>
            <li><strong>Standard 3-Tab Asphalt Shingles:</strong> $3.80 &ndash; $4.70 / sq ft installed</li>
            <li><strong>Premium Designer / Luxury Shingles:</strong> $7.50 &ndash; $10.20 / sq ft installed</li>
            <li><strong>Standing Seam Metal Roofing (24-Gauge Kynar 500):</strong> $11.50 &ndash; $16.50 / sq ft installed</li>
            <li><strong>Synthetic Slate / Composite Tiles (Class 4):</strong> $13.00 &ndash; $18.50 / sq ft installed</li>
            <li><strong>Commercial TPO / Low-Slope Membrane:</strong> $5.80 &ndash; $8.20 / sq ft installed</li>
          </ul>
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
  const locationsDescriptor: PageSeoDescriptor = {
    canonicalSlug: 'our-locations.html',
    outputFiles: ['our-locations.html', 'our-locations/index.html'],
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
          CaryRoofing operates dedicated local dispatch coverage across every official Town of Cary ZIP code—Central &amp; Downtown Cary (27511), East Cary &amp; Crossroads (27512), North Cary &amp; Preston (27513), South Cary &amp; Lochmere / Waverly Place HQ (27518), and West Cary &amp; Amberly (27519).
        </p>
        ${renderZipDispatchSection()}
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
    outputFiles: ['privacy-policy.html', 'privacy-policy/index.html'],
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
        <p style="font-size: 16px; margin-bottom: 20px;">
          Effective Date: October 14, 2026. This Privacy Policy outlines how <strong>Cary Roofing Contractors LLC</strong> (caryncroofing.com) collects, uses, and protects personal information obtained from homeowners, commercial property owners, and website visitors across Cary, NC and Wake County.
        </p>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #FAF8F4; margin-bottom: 24px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 10px 0;">Strict No-Sale of Personal Homeowner Data</h2>
          <p style="font-size: 15px; margin: 0;">
            We never sell, rent, or auction homeowner contact details to third-party lead aggregators. Information submitted via estimate forms or telephone dispatch (+1 919-335-9543) is used strictly to coordinate your on-site roof inspection, Town of Cary permitting, and written estimate.
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
    outputFiles: ['terms-of-service.html', 'terms-of-service/index.html'],
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
        <p style="font-size: 16px; margin-bottom: 20px;">
          Effective Date: October 18, 2026. These Terms of Service govern your access to and use of <strong>caryncroofing.com</strong>, including all roofing estimate tools, cost calculators, on-site assessment dispatch services, and licensed contractor interactions across Cary, NC and Wake County.
        </p>
        <section style="padding: 24px; border: 1px solid #e8e4df; border-radius: 12px; background: #FAF8F4; margin-bottom: 24px;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 10px 0;">Estimates, Permitting &amp; Manufacturer Warranties</h2>
          <p style="font-size: 15px; margin: 0;">
            Online calculator figures represent preliminary estimates; final binding project pricing is confirmed following a physical 21-point roof inspection. All full replacements comply with Town of Cary Inspections &amp; Permits requirements and North Carolina Residential Code Chapter 9.
          </p>
        </section>
      </main>
      ${renderSharedFooter()}`,
  };

  // 7. Standing Seam Metal Roof Editorial Guide (Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof)
  const standingSlug = 'Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof';
  const standingUrl = `${SITE_ORIGIN}/${standingSlug}`;
  const standingTitle = 'Why More Homeowners Are Choosing Standing Seam Metal Roof Cary NC USA | CaryRoofing';
  const standingDesc =
    'Why More Homeowners Are Choosing Standing Seam Metal Roof Cary NC USA: concealed fasteners, 50+ year durability, Kynar 500 energy savings, cost analysis, and local Cary NC installation.';
  const standingFaqs = [
    {
      q: 'How long does a standing seam metal roof last?',
      a: 'When properly installed with 24-gauge Galvalume and Kynar 500 coating, a standing seam metal roof easily lasts 40 to 70 years with minimal annual maintenance.',
    },
    {
      q: 'How much does a standing seam roof cost per square foot?',
      a: 'Installed standing seam metal roofing typically ranges from $9 to $16 per square foot depending on metal gauge, roof complexity, and tear-off requirements.',
    },
  ];
  const standingDescriptor: PageSeoDescriptor = {
    canonicalSlug: standingSlug,
    outputFiles: [
      `${standingSlug}/index.html`,
      `${standingSlug}.html`,
      'why-more-homeowners-are-choosing-standing-seam-metal-roof/index.html',
      'standing-seam-metal-roof/index.html',
      'standing-seam-metal-roof.html',
    ],
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
        <p style="font-size: 17px; margin-bottom: 20px;">
          More Cary, NC homeowners are upgrading from traditional asphalt shingles to concealed-fastener 24-gauge standing seam metal roofing for 40&ndash;70 year durability, 140+ mph hurricane wind resistance, Kynar 500 solar heat reflection, and non-penetrating solar panel clamp compatibility.
        </p>
        <p style="font-size: 15px; margin-bottom: 28px;">
          Explore related guides: <a href="/metal-roofing-services-cary-nc-usa.html" style="color: #9A3412; font-weight: 700;">Metal Roofing Services Cary NC</a> &bull;
          <a href="/shingle-tile-slate-roofing-cary-nc-usa.html" style="color: #9A3412; font-weight: 700;">Shingle, Tile &amp; Slate Comparison</a> &bull;
          <a href="/cary-nc-roofing-calculator.html" style="color: #9A3412; font-weight: 700;">Cary NC Roofing Cost Calculator</a>
        </p>
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
