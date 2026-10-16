import React from 'react';
import { ALL_SERVICES, CARY_ZIP_CODES, COMPANY_DETAILS, SEO_AEO_GUIDE } from '../data/roofingData';
import { BookingForm } from './BookingForm';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { SeoSchema } from './SeoSchema';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenEstimator?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEstimator }) => {
  const homeFaqs = SEO_AEO_GUIDE.aeoSnippets.map((item) => ({
    question: item.query,
    answer: item.directAnswer
  }));

  return (
    <article className="homepage-content">
      {/* Comprehensive Schema.org Structured Data (LocalBusiness + FAQPage + WebSite + BreadcrumbList) */}
      <SeoSchema
        pageType="home"
        faqs={homeFaqs}
        pageTitle="Best Roofing Services Cary NC USA | CaryRoofing"
        pageDescription="Looking for the best roofing services in Cary, NC? As top roofing contractors in Cary, NC, we offer expert roof repair & roof replacement. Call us today!"
        canonicalUrl="https://caryncroofing.com"
      />
      {/* ================= SECTION 1: HERO (EXACTLY ONE H1) ================= */}
      <section className="hero-section">
        <div className="container container-medium">
          <div className="kicker">The Trusted Choice for Cary, NC Homeowners</div>
          
          {/* USER SPECIFICATION: Exactly ONE H1 tag on home page */}
          <h1 className="hero-title">
            Best Roofing Services, Cary NC, USA
          </h1>
          
          <p className="hero-desc">
            Looking for the best roofing services in Cary, NC? As top roofing contractors in Cary, NC, we offer expert roof repair &amp; roof replacement. From high-grade synthetic underlayment to precision chimney flashing, see why Wake County residents trust our team for long-lasting roof protection. Call us today!
          </p>

          {/* Realistic Split Jobsite Transformation (Severe Damage Before & Clean Replacement After) */}
          <div className="my-8">
            <BeforeAfterSlider
              splitSrc="/images/split-replacement.webp"
              beforeSrc="/images/split-replacement-before.webp"
              beforeAlt="Severe hail-damaged and weathered roof with missing shingles in Cary NC before replacement"
              beforeLabel="Severe Storm Damage & Aging Shingles (Before)"
              afterSrc="/images/split-replacement-after.webp"
              afterAlt="Best Roofing Services Cary NC USA - Real jobsite field photograph of architectural shingle installation in Cary NC"
              afterLabel="Completed Architectural Shingle Installation (After)"
              gpsCoords="35.7368° N, -78.7832° W"
              elevation="418 FT"
              serviceTitle="Town of Cary Residential Roofing Transformation"
            />
          </div>

          <div className="hero-cta-group">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <a href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`} className="btn btn-primary btn-lg">
                Call {COMPANY_DETAILS.mainPhone}
              </a>
              <button
                type="button"
                onClick={() => onNavigate('cary-nc-roofing-calculator.html')}
                className="btn btn-secondary !mt-0 !py-3.5 !px-6 border-2 border-black/20 hover:border-[#F07020] text-black font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>🧮</span>
                <span>Cary NC Roofing Calculator</span>
              </button>
            </div>
            
            <div className="sub-guarantee">
              Serving homeowners and businesses with quick, hassle-free roofing solutions across all 5 Cary zip codes.
            </div>
            
            <div className="trust-badges">
              <span className="badge-item">✓ Cary, NC Certified Roofers</span>
              <span className="badge-item">✓ Premium Materials &amp; Workmanship</span>
              <span className="badge-item">✓ 50-Year Comprehensive Warranties</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: SERVICE FLOW (H2 + H3 + H4 + H5 + H6) ================= */}
      <section id="flow" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="kicker">3-Step Rapid Protocol</div>
            <h2>Simple &amp; Fast <span className="font-serif-accent">Roofing Service Flow in Cary, NC</span></h2>
            <p>How to get rapid roofing diagnostics and permanent leak repairs across Wake County without waiting days.</p>
          </div>

          <div className="grid grid-3">
            <div className="step-card card">
              <div className="step-badge">01</div>
              <div className="card-icon">📞</div>
              <h3>1. Call Our Cary Team</h3>
              <p>Give us a quick call to discuss your roofing issue, leak, or storm damage. Our local Cary support representative takes your details immediately.</p>
              
              {/* Hierarchical H4, H5, H6 for complete semantic tree */}
              <div className="mt-4 pt-3 border-t border-[#e8e4df]/60 text-left">
                <h4 className="text-xs font-bold uppercase tracking-wide text-[#F07020] mb-1">
                  Local Referral Network
                </h4>
                <h5 className="text-[11px] font-semibold text-black mb-1">
                  Standard Response: Fast Dispatch &amp; Estimate
                </h5>
                <h6 className="text-[10px] text-black/70 font-medium">
                  Network: Vetted &amp; Insured Cary Specialists
                </h6>
              </div>

              <div className="btn-group mt-3">
                <a href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`} className="btn btn-primary">
                  Call {COMPANY_DETAILS.mainPhone}
                </a>
              </div>
            </div>

            <div className="step-card card">
              <div className="step-badge">02</div>
              <div className="card-icon">🔍</div>
              <h3>2. On-Site Inspection</h3>
              <p>A certified local Cary roofer visits your property to conduct a thorough 21-point roof assessment, identify damage, and map out the exact repair plan.</p>
              
              <div className="mt-4 pt-3 border-t border-[#e8e4df]/60 text-left">
                <h4 className="text-xs font-bold uppercase tracking-wide text-[#F07020] mb-1">
                  Drone &amp; Attic Moisture Probe
                </h4>
                <h5 className="text-[11px] font-semibold text-black mb-1">
                  Inspection Scope: 21-Point Written Audit
                </h5>
                <h6 className="text-[10px] text-black/70 font-medium">
                  Standard: HAAG Certified Residential Inspector
                </h6>
              </div>

              <div className="btn-group mt-3">
                <button
                  type="button"
                  onClick={() => onNavigate('roof-inspection-services-cary-nc-usa.html')}
                  className="link-arrow"
                >
                  View Inspection Service →
                </button>
              </div>
            </div>

            <div className="step-card card">
              <div className="step-badge">03</div>
              <div className="card-icon">🏠</div>
              <h3>3. Problem Solved</h3>
              <p>Our experienced crew carries out the repair or replacement with premium materials, leaving your home protected, clean, and fully restored.</p>
              
              <div className="mt-4 pt-3 border-t border-[#e8e4df]/60 text-left">
                <h4 className="text-xs font-bold uppercase tracking-wide text-[#F07020] mb-1">
                  130 MPH Wind Resistant Materials
                </h4>
                <h5 className="text-[11px] font-semibold text-black mb-1">
                  Building Code: NC Zone 4A High-Wind Fastening
                </h5>
                <h6 className="text-[10px] text-black/70 font-medium">
                  Warranty: Lifetime Material &amp; Workmanship
                </h6>
              </div>

              <div className="btn-group mt-3">
                <button
                  type="button"
                  onClick={() => onNavigate('roof-repair-services-cary-nc-usa.html')}
                  className="link-arrow"
                >
                  Explore Repair Services →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: WHAT WE DO (H2 + LOCAL SVGs + INTERNAL LINKS) ================= */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <div className="kicker">Core Roofing Capabilities</div>
            <h2>What We Do – <span className="font-serif-accent">Professional Roofing Services in Cary, NC</span></h2>
            <p>From complete roof replacements to urgent leak repairs, we provide durable roofing solutions tailored for residential and commercial properties in Cary, NC.</p>
          </div>

          <div className="grid grid-3">
            {/* Service 1: Roof Replacement */}
            <div className="card">
              <div className="mb-3 rounded-xl overflow-hidden border border-[#e8e4df] relative group">
                <img 
                  src="/images/roof-replacement.webp" 
                  alt="Roof Replacement Cary NC - Jobsite field photo of complete roof replacement and clean tear-off in Cary NC benchmarked against Baker Roofing and Feazel"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono text-white flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75]"></span>
                  <span>GEO: 35.7368° N, -78.7832° W</span>
                </div>
              </div>
              <div className="kicker text-[11px]">Installation &amp; Reroofing</div>
              <h3>Roof Replacement Services</h3>
              <p>Complete tear-offs, rotten wood replacement, and high-wind architectural shingle installations for homes in Preston, Lochmere, and Kildaire Farms.</p>
              <div className="mt-2 text-xs text-black/70 font-semibold">
                ✓ 6-Nail High Wind Fastening • ✓ CDX Plywood Replacement
              </div>
              <button 
                type="button"
                onClick={() => onNavigate('roof-replacement-services-cary-nc-usa.html')}
                className="link-arrow mt-4"
              >
                Explore Roof Replacement →
              </button>
            </div>

            {/* Service 2: Roof Repair */}
            <div className="card">
              <div className="mb-3 rounded-xl overflow-hidden border border-[#e8e4df] relative group">
                <img 
                  src="/images/roof-repair.webp" 
                  alt="Roof Repair Cary NC - Precision field leak detection, pipe collar boot fixes, and storm damage repairs in Cary NC"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono text-white flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75]"></span>
                  <span>GEO: 35.7725° N, -78.7812° W</span>
                </div>
              </div>
              <div className="kicker text-[11px]">Leak Diagnostics &amp; Patches</div>
              <h3>Roof Repair &amp; Leak Fixes</h3>
              <p>Fast, effective repairs for active roof leaks, missing shingles, failed chimney flashings, and storm-damaged roof valleys across Wake County.</p>
              <div className="mt-2 text-xs text-black/70 font-semibold">
                ✓ Infrared Thermal Leak Tracing • ✓ Fast Local Assistance
              </div>
              <button 
                type="button"
                onClick={() => onNavigate('roof-repair-services-cary-nc-usa.html')}
                className="link-arrow mt-4"
              >
                Explore Roof Repair →
              </button>
            </div>

            {/* Service 3: Storm Emergency */}
            <div className="card">
              <div className="mb-3 rounded-xl overflow-hidden border border-[#e8e4df] relative group">
                <img 
                  src="/images/storm-emergency.webp" 
                  alt="Storm Emergency Roofing Services Cary NC - Real field storm damage repairs, temporary waterproof tarping, and tree limb impact stabilization benchmarked against top Cary roofing contractors"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono text-white flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-pulse"></span>
                  <span>GEO: 35.8115° N, -78.8890° W</span>
                </div>
              </div>
              <div className="kicker text-[11px]">Priority Emergency Intake</div>
              <h3>Storm Damage &amp; Emergency Roofing</h3>
              <p>Rapid emergency coordination across Cary for fallen pine tree impacts, hail damage, and heavy rain leaks with insurance claim support.</p>
              <div className="mt-2 text-xs text-black/70 font-semibold">
                ✓ Commercial 10-Mil Poly Tarps • ✓ Xactimate Insurance Scopes
              </div>
              <button 
                type="button"
                onClick={() => onNavigate('storm-emergency-roofing-services-cary-nc-usa.html')}
                className="link-arrow mt-4"
              >
                Explore Storm Emergency →
              </button>
            </div>

            {/* Service 4: Roof Installation */}
            <div className="card">
              <div className="mb-3 rounded-xl overflow-hidden border border-[#e8e4df] relative group">
                <img 
                  src="/images/roof-decking.webp" 
                  alt="Roof Installation Services Cary NC - Real photo of new roof decking, synthetic underlayment, and dimensional architectural shingles in Cary NC"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono text-white flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75]"></span>
                  <span>GEO: 35.8010° N, -78.8051° W</span>
                </div>
              </div>
              <div className="kicker text-[11px]">New Construction &amp; Custom Homes</div>
              <h3>Roof Installation Services</h3>
              <p>Engineered new roof builds for residential additions, modern custom homes, and commercial developments with multi-layer ice/water shields.</p>
              <div className="mt-2 text-xs text-black/70 font-semibold">
                ✓ Synthetic Underlayment • ✓ North Carolina Building Code Zone 4A
              </div>
              <button 
                type="button"
                onClick={() => onNavigate('roof-installation-services-cary-nc-usa.html')}
                className="link-arrow mt-4"
              >
                Explore Roof Installation →
              </button>
            </div>

            {/* Service 5: Metal Roofing */}
            <div className="card">
              <div className="mb-3 rounded-xl overflow-hidden border border-[#e8e4df] relative group">
                <img 
                  src="/images/metal-roofing.webp" 
                  alt="Metal Roofing Services Cary NC - Real photo of architectural 24-gauge standing seam metal roof installation with concealed clips in Cary NC"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono text-white flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75]"></span>
                  <span>GEO: 35.7368° N, -78.7832° W</span>
                </div>
              </div>
              <div className="kicker text-[11px]">Lifetime 50+ Year Protection</div>
              <h3>Metal Roofing Services</h3>
              <p>Architectural standing seam 24-gauge Galvalume steel, aluminum, and copper metal roofs with concealed clips and Kynar 500 cool-roof finishes.</p>
              <div className="mt-2 text-xs text-black/70 font-semibold">
                ✓ Non-Combustible Class A Fire • ✓ Zero Exposed Screw Holes
              </div>
              <button 
                type="button"
                onClick={() => onNavigate('metal-roofing-services-cary-nc-usa.html')}
                className="link-arrow mt-4"
              >
                Explore Metal Roofing →
              </button>
            </div>

            {/* Service 6: Seamless Gutters & Drainage */}
            <div className="card">
              <div className="mb-3 rounded-xl overflow-hidden border border-[#e8e4df] relative group">
                <img 
                  src="/images/gutter-install.webp" 
                  alt="Seamless Gutters Cary NC - Real photo of continuous 6-inch aluminum seamless gutter installation and mobile machine in Cary NC"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono text-white flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75]"></span>
                  <span>GEO: 35.7368° N, -78.7832° W</span>
                </div>
              </div>
              <div className="kicker text-[11px]">Custom Extrusion &amp; Guards</div>
              <h3>Seamless Gutter Services</h3>
              <p>Custom roll-formed 6-inch seamless aluminum gutters, surgical stainless steel micro-mesh leaf guards, and oversized downspouts.</p>
              <div className="mt-2 text-xs text-black/70 font-semibold">
                ✓ Heavy .032" Commercial Aluminum • ✓ Lifetime No-Clog Guards
              </div>
              <button 
                type="button"
                onClick={() => onNavigate('gutter-services-cary-nc-usa.html')}
                className="link-arrow mt-4"
              >
                Explore Gutter Services →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: ZIP COVERAGE & MAPS (H2) ================= */}
      <section id="coverage" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="kicker">Wake County Service Territory</div>
            <h2>
              Local Cary Service Coverage <br /> 
              <span className="font-serif-accent">Zip Codes, Neighborhoods &amp; Dispatch</span>
            </h2>
            <p>Our localized dispatch fleet covers all 5 postal zones in the Town of Cary, NC. Select your area below to connect directly with your dedicated neighborhood roofing team.</p>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden border border-[#e8e4df] shadow-md bg-white">
            <img 
              src="/images/cary-service-map.svg" 
              alt="Cary NC Roofing Service Coverage Map - Dedicated dispatch for zip codes 27511, 27512, 27513, 27518, 27519 with central hub at Waverly Place Cary NC"
              className="w-full h-auto object-cover max-h-[420px]"
              loading="lazy"
            />
            <div className="bg-[#0f172a] text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs border-t border-[#F07020]/40 text-left">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1D9E75] animate-ping"></span>
                <span className="font-bold text-[#F07020]">Active GIS Dispatch Radar:</span>
                <span className="text-white font-medium">Covering 27511, 27512, 27513, 27518, 27519</span>
              </div>
              <div className="font-mono text-[11px] text-[#38bdf8]">
                Central Hub: 580 New Waverly Pl (35.7368° N, -78.7832° W) • Same-Day Dispatch &amp; Free Inspection
              </div>
            </div>
          </div>

          <div className="grid grid-3 mb-6">
            {CARY_ZIP_CODES.map((item) => (
              <div className="card" key={item.zip}>
                <div className="kicker">ZIP {item.zip}</div>
                <h3>{item.areaName}</h3>
                <p>{item.desc}</p>
                <ul className="card-list">
                  <li><strong>Major Neighborhoods:</strong> {item.neighborhoods.join(', ')}</li>
                  <li><strong>Landmarks:</strong> {item.landmarks.join(', ')}</li>
                </ul>
                <div className="coords">🌐 Coords: {item.coords}</div>
                
                <div className="map-container">
                  <iframe 
                    title={`Map for Zip ${item.zip} in Cary NC`}
                    src={`https://maps.google.com/maps?q=${item.lat},${item.lng}&z=13&output=embed`}
                    loading="lazy"
                  ></iframe>
                </div>
                
                <div className="btn-group">
                  <a href={`tel:${item.phoneRaw}`} className="btn btn-primary w-full">
                    📞 Call {item.phone}
                  </a>
                  <button 
                    type="button"
                    onClick={() => onNavigate('our-locations')}
                    className="btn btn-secondary w-full"
                  >
                    View Zip Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="location-badge center-badge w-full text-center">
            📍 <strong>Operating Hub:</strong> {COMPANY_DETAILS.address} | <strong>Local Dispatch Hotline:</strong> All calls route immediately to active local Cary roofers on duty.
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: CLIMATE & HISTORICAL CONTEXT (H2) ================= */}
      <section id="history" className="section">
        <div className="container">
          <div className="section-header">
            <div className="kicker">Geographic &amp; Architectural Context</div>
            <h2>
              Wake County Geographic &amp; Historical Context <br /> 
              <span className="font-serif-accent">Cary Climate Factors &amp; Roofing Life Cycle</span>
            </h2>
            <p>Why local weather patterns, seasonal storm cycles, and historical housing growth shape the roofing needs of Cary homeowners.</p>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">⛈️</div>
              <h3>The Triangle Weather &amp; Climate Factor</h3>
              <p>
                Cary, NC experiences a humid subtropical climate with over 48 inches of rainfall annually and dual storm seasons. Heavy spring thunderstorms with localized hail and humid summer months create persistent thermal stress on asphalt shingles. Coastal tropical systems frequently bring high-wind gusts inland to Wake County, making rapid roof leak detection and flashing repairs essential for structural safety.
              </p>
              <div className="mt-4 pt-3 border-t border-[#e8e4df]/60 text-xs text-black/70">
                <strong>NC Climate Zone:</strong> 4A Mixed-Humid • <strong>Average Rainfall:</strong> 48.6 in/year
              </div>
            </div>

            <div className="card">
              <div className="card-icon">🏘️</div>
              <h3>Cary's 1990s Housing Boom &amp; Roof Aging</h3>
              <p>
                Driven by the rapid expansion of Research Triangle Park (RTP), the Town of Cary underwent massive residential development throughout the 1990s and early 2000s. Today, thousands of original architectural and 3-tab shingle roofs constructed during this period have reached or exceeded their natural 20-year operational lifespan, causing homeowners to face aging underlayment, brittle shingles, and sagging roof decking.
              </p>
              <div className="mt-4 pt-3 border-t border-[#e8e4df]/60 text-xs text-black/70">
                <strong>Target Neighborhoods:</strong> Preston, Lochmere, Kildaire Farms, Weatherstone
              </div>
            </div>

            <div className="card">
              <div className="card-icon">📐</div>
              <h3>North Carolina Building Codes &amp; Safety Standards</h3>
              <p>
                Roof repairs and full replacements in Cary must strictly comply with regional wind-resistance guidelines and structural requirements enforced under the North Carolina State Building Code. Proper attic ventilation, ice-and-water shield placement in roof valleys, and high-wind-rated fastener patterns ensure local properties remain protected against sudden severe weather events without compromising energy efficiency.
              </p>
              <div className="mt-4 pt-3 border-t border-[#e8e4df]/60 text-xs text-black/70">
                <strong>Code Authority:</strong> Town of Cary Inspections &amp; Permits • NC Residential Code
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: WHY WORK WITH US (H2) ================= */}
      <section id="why-us" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="kicker">The CaryRoofing Advantage</div>
            <h2>
              Why Work With Us? <br /> 
              <span className="font-serif-accent">Cary's Most Trusted Roofing Network</span>
            </h2>
            <p>We connect homeowners and commercial property managers with top-rated, pre-screened roofing professionals dedicated to honest pricing and long-lasting protection.</p>
          </div>

          <div className="grid grid-3">
            <div className="card card-horizontal">
              <div className="card-icon-sm">🛡️</div>
              <div>
                <h3 className="text-base font-bold text-black mb-1">Local Cary Specialists</h3>
                <p className="text-sm">Contractors who understand North Carolina's weather conditions and install roofing systems built to withstand heavy rain, wind, and storm damage.</p>
                <span className="text-xs font-semibold text-[#1D9E75]">Wake County Rooted Network</span>
              </div>
            </div>

            <div className="card card-horizontal">
              <div className="card-icon-sm">📜</div>
              <div>
                <h3 className="text-base font-bold text-black mb-1">Pre-Screened &amp; Insured</h3>
                <p className="text-sm">Every referred roofing crew is fully insured and rigorously vetted for local craftsmanship and safety compliance.</p>
                <span className="text-xs font-semibold text-[#1D9E75]">Verified Local Pros • $2M Liability Protected</span>
              </div>
            </div>

            <div className="card card-horizontal">
              <div className="card-icon-sm">⭐</div>
              <div>
                <h3 className="text-base font-bold text-black mb-1">Premium Grade Materials</h3>
                <p className="text-sm">We use top-quality shingles, metal panels, and waterproofing membranes from leading manufacturers for long-lasting performance.</p>
                <span className="text-xs font-semibold text-[#1D9E75]">GAF Master Elite &amp; CertainTeed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: CERTIFIED ROOFING SERVICES DIRECTORY (H2) ================= */}
      <section id="services-directory" className="section">
        <div className="container">
          <div className="section-header">
            <div className="kicker">Our Services</div>
            <h2>
              Cary NC Roofing Service Directory &amp; <span className="font-serif-accent">Certified Solutions</span>
            </h2>
            <p>Explore our specialized residential and commercial roofing solutions, precision-engineered for Cary homeowners, property managers, and local businesses.</p>
          </div>

          <div className="grid grid-3">
            {ALL_SERVICES.map((s) => (
              <div key={s.slug} className="p-4 bg-white border border-[#e8e4df] rounded-xl hover:border-[#F07020] transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#F07020] tracking-wider block mb-1">
                    {s.category}
                  </span>
                  <h3 className="text-base font-bold text-black mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-black/80 line-clamp-2 mb-3">
                    {s.shortDesc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate(s.slug)}
                  className="text-xs font-bold text-[#F07020] hover:underline text-left inline-flex items-center gap-1 cursor-pointer"
                >
                  View Full Service Guide →
                </button>
              </div>
            ))}
          </div>

          {/* Certified Service Highlights for Homeowners & Property Owners */}
          <div className="mt-8 p-6 bg-[#FAF8F4] border border-[#e8e4df] rounded-2xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-3">
              Frequently Requested Roofing Solutions in Cary, North Carolina:
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {SEO_AEO_GUIDE.mainKeywords.map((kw, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-white border border-[#e8e4df] rounded-lg font-semibold text-black hover:border-[#F07020] transition-colors"
                >
                  🔍 {kw}
                </span>
              ))}
              <span className="px-3 py-1.5 bg-white border border-[#e8e4df] rounded-lg font-semibold text-black">
                🔍 Cary NC Roofing Contractors
              </span>
              <span className="px-3 py-1.5 bg-white border border-[#e8e4df] rounded-lg font-semibold text-black">
                🔍 Wake County Roof Leak Diagnostics
              </span>
              <span className="px-3 py-1.5 bg-white border border-[#e8e4df] rounded-lg font-semibold text-black">
                🔍 24/7 Emergency Tarping Cary NC
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: FAQS (H2) ================= */}
      <section id="faqs" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="kicker">Homeowner Knowledge Base</div>
            <h2>
              Frequently Asked Questions <br />
              <span className="font-serif-accent">Cary, NC Roofing Guide</span>
            </h2>
            <p>Get immediate, expert answers to common questions about roof repairs, replacement timelines, and insurance in Wake County.</p>
          </div>

          <div className="content-wrapper">
            <div className="faq-accordion">
              {SEO_AEO_GUIDE.aeoSnippets.map((item, idx) => (
                <details className="faq-item" key={idx} open={idx === 0}>
                  <summary className="faq-question">
                    <span>{item.query}</span>
                    <span className="faq-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="faq-answer">
                    <p>{item.directAnswer}</p>
                    <div className="inspection-note">
                      <strong>Target Search Relevance:</strong> {item.targetEntity}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: 5 CARY NEIGHBORHOODS CONTACT & MAP PINS ================= */}
      <section className="section bg-[#FAF8F4] border-t border-[#e8e4df]">
        <div className="container">
          <div className="section-header">
            <div className="kicker">Direct Local Contact &amp; Neighborhood Hubs</div>
            <h2>
              Contact CaryRoofing Across <span className="font-serif-accent">5 Local Neighborhoods</span>
            </h2>
            <p>Select your local Cary zip code or neighborhood below to view our dedicated service pin, map directions, and instant click-to-call phone lines.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CARY_ZIP_CODES.map((loc) => {
              const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${loc.areaName} ${loc.zip}`)}`;
              return (
                <div 
                  key={loc.zip}
                  className="bg-white p-5 rounded-2xl border border-[#e8e4df] shadow-xs flex flex-col justify-between hover:border-[#F07020] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded text-xs font-extrabold bg-[#F07020] text-white">
                        ZIP {loc.zip}
                      </span>
                      <span className="text-[10px] text-[#1D9E75] font-bold">● Active 24/7</span>
                    </div>
                    <h3 className="text-sm font-bold text-black mb-1">
                      {loc.areaName}
                    </h3>
                    <p className="text-[11px] text-black/70 mb-3">
                      {loc.neighborhoods.slice(0, 2).join(', ')}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-[#e8e4df]">
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-1.5 px-2 bg-[#FAF8F4] hover:bg-[#FAF8F4]/80 border border-[#e8e4df] text-black text-center text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>📍 Google Maps Pin ↗</span>
                    </a>
                    <a
                      href={`tel:${loc.phoneRaw}`}
                      className="w-full py-2 px-2 bg-[#F07020] hover:bg-[#d65f17] text-white text-center text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-colors shadow-2xs"
                    >
                      <span>📞 Call {loc.phone}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: BOOK / CONTACT ================= */}
      <BookingForm />
    </article>
  );
};
