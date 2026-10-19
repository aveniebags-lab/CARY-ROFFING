import React from 'react';
import { ServiceInfo, ALL_SERVICES, CARY_ZIP_CODES, COMPANY_DETAILS } from '../data/roofingData';
import { BookingForm } from './BookingForm';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { SeoSchema } from './SeoSchema';
import { RoofReplacementEditorialGuide } from './RoofReplacementEditorialGuide';

interface ServicePageProps {
  service: ServiceInfo;
  onNavigate: (path: string) => void;
  onOpenEstimator?: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ service, onNavigate, onOpenEstimator }) => {
  // Clean service name without trailing geographic suffix to prevent duplicate "NC USA in Cary, NC, USA"
  const cleanServiceName = service.title
    .replace(/\s*(Cary\s*,?\s*NC\s*,?\s*USA|Cary\s*,?\s*NC)\s*$/i, '')
    .trim();

  // Related services for deep mutual internal linking
  const relatedServices = ALL_SERVICES.filter(s => s.slug !== service.slug).slice(0, 4);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case 'layers':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 2 7l10 5 10-5-10-5z" />
            <path d="m2 17 10 5 10-5" />
            <path d="m2 12 10 5 10-5" />
          </svg>
        );
      case 'building':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h.01" />
            <path d="M16 6h.01" />
            <path d="M12 6h.01" />
            <path d="M12 10h.01" />
            <path d="M14 10h.01" />
            <path d="M16 10h.01" />
            <path d="M16 14h.01" />
            <path d="M8 10h.01" />
            <path d="M8 14h.01" />
          </svg>
        );
      case 'grid':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M3 15h18" />
            <path d="M9 3v18" />
            <path d="M15 3v18" />
          </svg>
        );
      case 'square':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h20" />
            <path d="M20 12v8H4v-8" />
            <path d="m4 12 8-4 8 4" />
          </svg>
        );
      case 'leaf':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        );
      case 'droplet':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
        );
      case 'alert':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        );
      case 'storm':
      case 'cloud-rain':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="16" y1="13" x2="16" y2="21" />
            <line x1="8" y1="13" x2="8" y2="21" />
            <line x1="12" y1="15" x2="12" y2="23" />
            <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
          </svg>
        );
      case 'wind':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
          </svg>
        );
      case 'tool':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m14.7 6.3 5 5-10.2 10.2c-.6.6-1.5.6-2.1 0l-2.8-2.8c-.6-.6-.6-1.5 0-2.1L14.7 6.3Z" />
            <path d="m18 10 2-2a3 3 0 0 0-4.2-4.2l-2 2" />
          </svg>
        );
      case 'wrench':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        );
      case 'check':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        );
      case 'shield':
      default:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F07020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          </svg>
        );
    }
  };

  return (
    <article className="service-page-article">
      {/* Comprehensive Schema.org Structured Data (LocalBusiness + Service + FAQPage + WebPage + BreadcrumbList) */}
      <SeoSchema
        pageType="service"
        service={service}
        faqs={service.faqs ? service.faqs.map(f => ({ question: f.q, answer: f.a })) : []}
        pageTitle={`${service.title} | caryncroofing.com`}
        pageDescription={service.heroDesc || service.shortDesc}
        canonicalUrl={`https://caryncroofing.com/${service.slug}`}
        image={`https://caryncroofing.com${service.splitImage || service.localImage}`}
      />

      {/* Breadcrumbs for Structured SEO Navigation & Internal Linking */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F4] border-b border-[#e8e4df] py-3 text-xs text-black font-semibold">
        <div className="container flex items-center gap-2">
          <button 
            type="button" 
            onClick={() => onNavigate('home')}
            className="hover:text-[#F07020] cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <button 
            type="button" 
            onClick={() => onNavigate('home')}
            className="hover:text-[#F07020] cursor-pointer"
          >
            Services
          </button>
          <span>/</span>
          <span className="font-bold text-[#F07020]">{cleanServiceName}</span>
        </div>
      </nav>

      {/* ================= HERO SECTION (EXACTLY ONE H1) ================= */}
      <section className="hero-section !py-12 md:!py-16 bg-[#FFFDF9] border-b border-[#e8e4df]">
        <div className="container container-medium">
          <div className="kicker">{service.heroKicker}</div>
          
          {/* Exactly ONE H1 tag on this service page */}
          <h1 className="hero-title !text-3xl md:!text-5xl">
            {service.title}
          </h1>
          
          <p className="hero-desc !text-base md:!text-lg">
            {service.heroDesc}
          </p>

          {/* Realistic Split Jobsite Transformation (Damaged Before & Repaired After) */}
          <div className="my-6 max-w-3xl mx-auto">
            <BeforeAfterSlider
              splitSrc={service.splitImage || service.localImage}
              beforeSrc={service.beforeImage || service.localImage}
              beforeAlt={service.beforeAlt || `Initial damage condition for ${service.title} in Cary NC`}
              beforeLabel={service.beforeLabel || 'Initial Inspection'}
              afterSrc={service.afterImage || service.localImage}
              afterAlt={service.imageAlt}
              afterLabel={service.afterLabel || 'Completed Installation'}
              gpsCoords={service.gpsCoords || '35.7725° N, 78.7812° W'}
              elevation={service.elevation || '418 FT'}
              serviceTitle={cleanServiceName}
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: ZIP CODE DISPATCH (H2) ================= */}
      <section id="dispatch" className="section">
        <div className="container">
          <div className="section-header">
            <div className="kicker">Local Cary Dispatch Routing</div>
            <h2>
              Fast Wake County Dispatch <br />
              <span className="font-serif-accent">Select Zip Code &amp; Call Now</span>
            </h2>
            <p className="mt-2 text-black font-medium">
              Click your local zip code below to view covered neighborhoods, embedded map location, and connect directly with our active Cary, NC dispatch line.
            </p>
          </div>

          <div className="grid grid-3 mb-6">
            {CARY_ZIP_CODES.map((item) => (
              <div className="card" key={item.zip}>
                <div className="kicker">ZIP {item.zip}</div>
                <h3>{item.areaName}</h3>
                <div className="card-list">
                  <p><strong>Key Neighborhoods &amp; Landmarks:</strong></p>
                  {item.neighborhoods.slice(0, 3).map((n, i) => (
                    <p key={i}>{n}</p>
                  ))}
                  <p>{item.landmarks[0]}</p>
                </div>
                <div className="map-container">
                  <iframe 
                    title={`Map ${item.zip} - ${cleanServiceName}`}
                    src={`https://maps.google.com/maps?q=${item.lat},${item.lng}&z=13&output=embed`}
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="cta-notice">Serving {item.zip} Residents Now</div>
                <a href={`tel:${item.phoneRaw}`} className="btn btn-primary w-full">
                  📞 Call {item.phone}
                </a>
              </div>
            ))}
          </div>

          {onOpenEstimator && (
            <div className="text-center mt-6">
              <button
                type="button"
                onClick={onOpenEstimator}
                className="btn btn-secondary !border-2 !border-[#F07020] !text-[#F07020] hover:!bg-[#FFF3EB] !font-bold"
              >
                ⚡ Calculate Estimated Roof Cost for Cary, NC
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= SECTION 2: PROCESS & SOLUTIONS (H2 + H3 + H4 + H5 + H6) ================= */}
      <section id="process" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="kicker">Diagnostic &amp; Engineering Scope</div>
            <h2>
              Professional {cleanServiceName} Solutions in <br />
              <span className="font-serif-accent">Cary, NC, USA</span>
            </h2>
          </div>
          
          <div className="content-wrapper">
            <div className="intro-box">
              <p>
                Prompt, precision roof care protects your home from severe moisture intrusion, wood rot, and structural frame degradation. Due to{' '}
                <a 
                  href="https://www.google.com/maps/place/Cary,+NC/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold underline text-black hover:text-[#F07020]"
                >
                  Cary, NC&apos;s
                </a>{' '}
                humid subtropical climate marked by seasonal hail, high-wind storms, and intense rainfall, specialized diagnostics are required for every roofing material.
              </p>
            </div>

            <p className="mb-6 text-center-desktop text-sm">
              Our active Cary repair crews serve all local postal districts: <strong>27511</strong> (Central Cary), <strong>27512</strong> (East Cary), <strong>27513</strong> (North Cary), <strong>27518</strong> (South Cary), and <strong>27519</strong> (West Cary) under full{' '}
              <a 
                href="https://www.wake.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold underline text-black hover:text-[#F07020]"
              >
                Wake County
              </a>{' '}
              building compliance.
            </p>
          </div>

          {/* COMPREHENSIVE SOLUTIONS GRID */}
          <div className="comprehensive-solutions-card mb-6">
            <div className="solutions-header text-center">
              <h2>
                Comprehensive <span className="font-serif-accent">{cleanServiceName} Solutions</span>
              </h2>
              <p>
                From sudden storm punctures and active leak stops to specialized installations and long-term restorations, our Cary specialists deliver permanent, warrantied craftsmanship.
              </p>
            </div>
            
            <div className="solutions-grid">
              {service.solutions.map((sol, idx) => (
                <div className="solution-item-card" key={idx}>
                  <div className="solution-icon-box">
                    {renderIcon(sol.iconSvg)}
                  </div>
                  <div className="solution-content">
                    <h3 className="solution-title">{sol.title}</h3>
                    <p>{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* METHODOLOGY (H2 + H3 + H4 + H5 + H6) */}
          <div className="content-wrapper">
            <h2 className="methodology-title text-center mt-8 mb-4">
              {service.methodologyTitle}
            </h2>
            <p className="mb-6 text-center text-sm">
              To guarantee long-term weather tightness and prevent hidden moisture rot behind drywall, all work strictly follows our standardized 6-step protocol:
            </p>

            {service.methodologySteps.map((step, idx) => (
              <div className="step-card card mb-6" key={idx}>
                <div className="step-badge">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>

                {/* Hierarchical H4, H5, H6 within step protocol */}
                <div className="mt-4 pt-3 border-t border-[#e8e4df]/60 flex flex-wrap items-center justify-between gap-2 text-left">
                  <div>
                    <h4 className="text-xs font-extrabold text-[#B43B06] uppercase">
                      Quality Gate #{idx + 1}
                    </h4>
                    <h5 className="text-[11px] font-semibold text-black">
                      NC Code Compliance Standard: Zone 4A
                    </h5>
                  </div>
                  <h6 className="text-[10px] text-black font-semibold bg-[#FAF8F4] px-2.5 py-1 rounded-md border border-[#e8e4df]">
                    Supervisor Verified: Master Roofer
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPREHENSIVE HUMAN-WRITTEN EDITORIAL GUIDE FOR ROOF REPLACEMENT ================= */}
      {service.id === 'replacement' && (
        <RoofReplacementEditorialGuide 
          onNavigate={onNavigate} 
          onOpenEstimator={onOpenEstimator} 
        />
      )}

      {/* ================= SECTION 3: FAQS (H2) ================= */}
      <section id="faqs" className="section">
        <div className="container">
          <div className="section-header">
            <div className="kicker">Frequently Asked Questions</div>
            <h2>
              {cleanServiceName} <br />
              <span className="font-serif-accent">FAQs – Cary, NC</span>
            </h2>
            <p>Click any question to view expert answers regarding Cary roof leaks, storm damage, costs, and emergency repairs.</p>
          </div>

          <div className="content-wrapper">
            <div className="faq-accordion">
              {service.faqs.map((faq, idx) => (
                <details className="faq-item" key={idx} open={idx === 0}>
                  <summary className="faq-question">
                    <span>{faq.q}</span>
                    <span className="faq-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                    {faq.note && (
                      <div className="inspection-note">
                        <strong>Important Note:</strong> {faq.note.replace('Important Note:', '').trim()}
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: RELATED SERVICES (INTERNAL LINKING H2) ================= */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="kicker">Comprehensive Roofing Coverage</div>
            <h2>
              Related Roofing Services in <span className="font-serif-accent">Cary, NC</span>
            </h2>
            <p>Explore complementary roofing solutions frequently paired with {cleanServiceName} across Wake County.</p>
          </div>

          <div className="grid grid-3">
            {relatedServices.map((rel) => (
              <div key={rel.slug} className="card">
                <div className="kicker text-[11px]">{rel.category}</div>
                <h3>{rel.title}</h3>
                <p className="text-sm line-clamp-3">{rel.shortDesc}</p>
                <button
                  type="button"
                  onClick={() => onNavigate(rel.slug)}
                  className="link-arrow mt-4"
                >
                  Explore Service →
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="btn btn-secondary !mt-0 font-bold"
            >
              ← Back to Main Homepage
            </button>
            <button
              type="button"
              onClick={() => onNavigate('our-locations')}
              className="btn btn-secondary !mt-0 font-bold"
            >
              View All Service Locations →
            </button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: BOOKING FORM ================= */}
      <BookingForm serviceName={cleanServiceName} />
    </article>
  );
};
