import React from 'react';
import { COMPANY_DETAILS } from '../data/roofingData';
import { SeoSchema } from './SeoSchema';

interface AboutUsPageProps {
  onNavigate: (path: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <article className="bg-[#FFFDF9] min-h-screen text-black">
      {/* Schema.org Structured Data */}
      <SeoSchema
        pageType="privacy"
        pageTitle="About Us & Technical Credentials | Cary Roofing Contractors LLC"
        pageDescription="Learn about Cary Roofing Contractors LLC: our certified roofing inspectors, 15+ years in Wake County, HAAG certifications, and high-standard roofing craft."
        canonicalUrl="https://caryncroofing.com/about-cary-roofing-contractors.html"
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F4] border-b border-[#e8e4df] py-3 text-xs text-black font-semibold">
        <div className="container flex items-center gap-2">
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="hover:text-[#9A3412] transition-colors cursor-pointer"
          >
            Home
          </a>
          <span>/</span>
          <span className="text-[#9A3412] font-bold">About Us</span>
        </div>
      </nav>

      {/* Hero Header (H1) */}
      <section className="py-12 md:py-16 bg-[#FFFDF9] border-b border-[#e8e4df]">
        <div className="container container-medium">
          <div className="kicker">ABOUT CARYROOFING</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
            About Cary Roofing Contractors LLC
          </h1>
          <p className="text-base md:text-lg text-black font-medium max-w-3xl leading-relaxed">
            Founded with a commitment to engineering precision and homeowner transparency, Cary Roofing connects Wake County families and commercial building managers with the highest standard of roofing craftsmanship, GAF Master Elite installations, and rapid storm leak defense.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6 text-xs font-semibold text-black">
            <span className="px-3.5 py-1.5 bg-[#FAF8F4] border border-[#e8e4df] rounded-full">
              📍 Headquarters: 580 New Waverly Pl Ste 216, Cary, NC
            </span>
            <span className="px-3.5 py-1.5 bg-[#E8F8F1] text-[#0d684d] border border-[#0d684d]/30 rounded-full font-bold">
              ✓ HAAG Certified Residential Roof Inspectors
            </span>
            <span className="px-3.5 py-1.5 bg-[#FAF8F4] border border-[#e8e4df] rounded-full">
              🛡️ $2M Comprehensive Liability Protected
            </span>
          </div>
        </div>
      </section>

      {/* Main Content with Strictly Sequential H2 and H3 */}
      <section className="py-12 md:py-16 bg-[#FAF8F4]">
        <div className="container container-medium space-y-10">
          {/* Section 1: Lead Technical Director & Author Profile */}
          <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-[#e8e4df]">
              <div className="w-20 h-20 rounded-2xl bg-[#141c27] text-white flex items-center justify-center text-3xl font-bold shrink-0 shadow-md">
                MV
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-extrabold text-[#9A3412]">
                  Lead Technical Author &amp; Chief Inspector
                </span>
                <h2 className="text-2xl font-bold text-black mt-0.5">
                  Marcus Vance
                </h2>
                <p className="text-xs text-black/70 font-semibold mt-1">
                  License #NC-R48201 • HAAG Certified Residential Inspector • CertainTeed Master Shingle Applicator
                </p>
                <div className="text-[11px] text-black/60 mt-1">
                  <time dateTime="2026-10-18">Published: January 15, 2026 • Updated: October 18, 2026</time>
                </div>
              </div>
            </div>

            <div className="mt-6 text-black space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Marcus Vance has directed residential roof diagnostic operations, structural deck evaluations, and emergency storm response in Cary and Wake County for over 15 years. Having overseen more than 2,800 roof installations across Preston, Lochmere, Kildaire Farms, and Amberly, Marcus ensures every referred installation complies strictly with Chapter 9 of the North Carolina Residential Building Code.
              </p>
              <p>
                His field investigations focus on forensic leak detection, micro-fractured shingle analysis from hail impact, and balancing attic net free ventilating area (NFVA) to prevent thermal degradation during hot North Carolina summers.
              </p>
            </div>
          </div>

          {/* Section 2: Our Standards and Core Principles */}
          <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Our Craftsmanship &amp; Material Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                <h3 className="font-bold text-black text-base mb-1">
                  50-Year Non-Prorated Warranties
                </h3>
                <p className="text-xs sm:text-sm text-black/80">
                  We install premium GAF Timberline HDZ and CertainTeed Landmark dimensional shingles with lifetime manufacturer warranties and 25-year workmanship guarantees.
                </p>
              </div>
              <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                <h3 className="font-bold text-black text-base mb-1">
                  Full Ice &amp; Water Valley Protection
                </h3>
                <p className="text-xs sm:text-sm text-black/80">
                  Self-adhering modified bitumen underlayment installed in all valleys, pipe boots, rake edges, and chimney saddles prevents wind-driven rain intrusion.
                </p>
              </div>
              <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                <h3 className="font-bold text-black text-base mb-1">
                  Magnetic Jobsite Cleanup
                </h3>
                <p className="text-xs sm:text-sm text-black/80">
                  Every replacement finishes with a triple-pass heavy industrial magnetic sweep of your driveway, lawn, flowerbeds, and perimeter walkways.
                </p>
              </div>
              <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                <h3 className="font-bold text-black text-base mb-1">
                  Town of Cary Permitting
                </h3>
                <p className="text-xs sm:text-sm text-black/80">
                  Our network pulls all required municipal permits through the Town of Cary Inspections Department, ensuring official code sign-off.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Technical Citations & Authority Links */}
          <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Regulatory Compliance &amp; Industry Citations
            </h2>
            <p className="text-sm text-black mb-4 leading-relaxed">
              Our technical guidelines are grounded in peer-reviewed industry specifications and verified state building codes:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                • <a href="https://www.nrca.net/" target="_blank" rel="noopener noreferrer" className="text-[#9A3412] font-bold hover:underline">National Roofing Contractors Association (NRCA)</a> — Technical Manual &amp; Steep-Slope Guidelines.
              </li>
              <li>
                • <a href="https://codes.iccsafe.org/content/NCRC2018/chapter-9-roof-assemblies" target="_blank" rel="noopener noreferrer" className="text-[#9A3412] font-bold hover:underline">North Carolina Residential Code: Chapter 9 Roof Assemblies</a> — State mandatory flashing and fastener laws.
              </li>
              <li>
                • <a href="https://www.carync.gov/services-permits/permits-inspections" target="_blank" rel="noopener noreferrer" className="text-[#9A3412] font-bold hover:underline">Town of Cary Inspections &amp; Permits Department</a> — Municipal building permitting standards.
              </li>
              <li>
                • <a href="https://www.gaf.com/en-us/specifications" target="_blank" rel="noopener noreferrer" className="text-[#9A3412] font-bold hover:underline">GAF Master Elite Commercial &amp; Residential Specifications</a>.
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="p-8 bg-[#141c27] text-white rounded-2xl text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold !text-white">
              Need Reliable Roofing Help in Cary, NC?
            </h2>
            <p className="text-sm text-white/90 max-w-xl mx-auto">
              Schedule your free 21-point on-site roof inspection or talk directly with our Cary dispatch desk.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
              <a href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`} className="btn btn-primary !bg-[#9A3412] !text-white font-extrabold px-6 py-3 rounded-lg shadow-md">
                📞 Call {COMPANY_DETAILS.mainPhone}
              </a>
              <button
                type="button"
                onClick={() => onNavigate('cary-nc-roofing-calculator.html')}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-lg transition-colors cursor-pointer"
              >
                🧮 Use Roofing Cost Calculator
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
