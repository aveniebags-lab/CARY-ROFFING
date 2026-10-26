import React from 'react';
import { COMPANY_DETAILS, ALL_SERVICES } from '../data/roofingData';
import { SeoSchema } from './SeoSchema';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <article className="bg-[#FFFDF9] min-h-screen text-black">
      {/* Comprehensive Schema.org Structured Data (LocalBusiness + WebPage + BreadcrumbList) */}
      <SeoSchema
        pageType="privacy"
        pageTitle="Privacy Policy & Data Protection | caryncroofing.com - Cary, NC"
        pageDescription="Privacy Policy and customer data protection standards for caryncroofing in Cary, NC and Wake County. Strict no-sale of personal information."
        canonicalUrl="https://www.caryncroofing.com/privacy-policy.html"
      />

      {/* Breadcrumbs for Hierarchy & Internal Linking */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F4] border-b border-[#e8e4df] py-3 text-xs text-black font-semibold">
        <div className="container flex items-center gap-2">
          <button 
            type="button" 
            onClick={() => onNavigate('home')}
            className="hover:text-[#F07020] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#F07020] font-bold">Privacy Policy</span>
        </div>
      </nav>

      {/* Hero Header with Exactly ONE H1 */}
      <section className="py-12 md:py-16 bg-[#FFFDF9] border-b border-[#e8e4df]">
        <div className="container container-medium">
          <div className="kicker">LEGAL &amp; DATA TRANSPARENCY</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
            Privacy Policy &amp; Data Protection Standards
          </h1>
          <p className="text-base md:text-lg text-black font-medium max-w-3xl leading-relaxed">
            Effective Date: October 14, 2026. This Privacy Policy outlines how <strong>caryncroofing</strong> collects, uses, protects, and discloses personal information obtained from homeowners, commercial property owners, and website visitors across Cary, NC and Wake County.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-semibold text-black">
            <span className="px-3 py-1 bg-[#FAF8F4] border border-[#e8e4df] rounded-full">
              📍 Jurisdiction: Town of Cary &amp; Wake County, NC
            </span>
            <span className="px-3 py-1 bg-[#E8F8F1] text-[#1D9E75] border border-[#1D9E75]/30 rounded-full font-bold">
              ✓ Strict No-Sale of Personal Data
            </span>
            <span className="px-3 py-1 bg-[#FAF8F4] border border-[#e8e4df] rounded-full">
              🔒 256-Bit SSL Form Encryption
            </span>
          </div>
        </div>
      </section>

      {/* Main Policy Content with Structured H2, H3, H4 */}
      <section className="py-12 md:py-16 bg-[#FAF8F4]">
        <div className="container container-medium">
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
                1. Company Information &amp; Operational Scope
              </h2>
              <p className="text-black leading-relaxed font-normal mb-3">
                This policy applies to all web interactions, estimate inquiry forms, telephone consultations, and on-site roofing assessments coordinated by <strong>caryncroofing Technologies, LLC</strong>.
              </p>
              <div className="bg-[#FAF8F4] p-4 rounded-xl border border-[#e8e4df] text-sm text-black">
                <p><strong>Primary Operating Hub:</strong> {COMPANY_DETAILS.address}</p>
                <p><strong>Primary Dispatch Hotline:</strong> {COMPANY_DETAILS.mainPhone}</p>
                <p><strong>Service Area:</strong> Cary, NC (Zip codes 27511, 27512, 27513, 27518, 27519) and surrounding Triangle communities.</p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
                2. Information We Collect
              </h2>
              <p className="text-black leading-relaxed mb-4">
                To provide precise roof repairs, replacements, and structural certifications, we collect information that you directly provide to us, as well as limited technical usage data:
              </p>
              <ul className="space-y-3 text-black text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#F07020] font-bold">•</span>
                  <span><strong>Contact Details:</strong> Your full name, telephone number, email address, and physical property address in Wake County.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F07020] font-bold">•</span>
                  <span><strong>Roofing Project Specifications:</strong> Roof pitch, approximate square footage, existing shingle material (asphalt, metal, tile, flat membrane), reported leak locations, attic ventilation status, and submitted damage photos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F07020] font-bold">•</span>
                  <span><strong>Insurance Claim Documentation:</strong> For storm damage claims (hail, fallen limbs, high-wind shingle tears), we may record your insurer's claim reference number to provide itemized Xactimate estimates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F07020] font-bold">•</span>
                  <span><strong>Automated Technical Data:</strong> IP address, device type, browser settings, and visited service pages to ensure optimal page performance and local zip-code dispatch routing.</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
                3. How We Use Your Information
              </h2>
              <p className="text-black leading-relaxed mb-4">
                We strictly use your information to execute roofing operations, communicate project milestones, and fulfill regulatory requirements:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#e8e4df]">
                  <h3 className="font-bold text-black text-base mb-1">Estimates &amp; Diagnostics</h3>
                  <p className="text-sm text-black">Calculating comprehensive repair costs, material takeoffs, and scheduling free on-site roof inspections.</p>
                </div>
                <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#e8e4df]">
                  <h3 className="font-bold text-black text-base mb-1">Local Crew Dispatch</h3>
                  <p className="text-sm text-black">Routing licensed, HAAG-certified roofing technicians directly to your address in Cary or Wake County.</p>
                </div>
                <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#e8e4df]">
                  <h3 className="font-bold text-black text-base mb-1">Town of Cary Permits</h3>
                  <p className="text-sm text-black">Filing required building and structural alteration permits with the Town of Cary Inspections Department when required by NC State Building Code.</p>
                </div>
                <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#e8e4df]">
                  <h3 className="font-bold text-black text-base mb-1">Warranty Registration</h3>
                  <p className="text-sm text-black">Registering manufacturer warranty certificates with leading suppliers (e.g., GAF, CertainTeed, Owens Corning) under your name.</p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
                4. Absolute No-Sale Policy &amp; Data Sharing
              </h2>
              <div className="p-4 bg-[#E8F8F1] border-l-4 border-[#1D9E75] rounded-r-xl mb-4">
                <p className="text-black font-semibold text-sm md:text-base">
                  <strong>We do not sell, rent, monetize, or trade your personal contact details to third-party telemarketers or marketing brokers.</strong>
                </p>
              </div>
              <p className="text-black leading-relaxed text-sm md:text-base mb-3">
                We only disclose necessary project details under the following conditions:
              </p>
              <ul className="space-y-2 text-black text-sm md:text-base list-disc pl-5">
                <li><strong>Certified Subcontractors &amp; Delivery Drivers:</strong> Delivery of roofing shingles, dumpsters, or structural lumber to your driveway.</li>
                <li><strong>Building Inspection Officials:</strong> Municipal code inspectors reviewing roof deck fastening, ice-and-water underlayment, and flashing installations.</li>
                <li><strong>Insurance Adjusters:</strong> Only upon your explicit authorization to negotiate scope-of-loss items for hail or hurricane restoration.</li>
                <li><strong>Legal Requirements:</strong> To comply with valid subpoenas, state regulations, or court orders under North Carolina law.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
                5. Data Security &amp; Retention Protocols
              </h2>
              <ul className="space-y-2 text-black text-sm md:text-base">
                <li>🔒 <strong>Encryption:</strong> All website quote submissions utilize Transport Layer Security (TLS 1.3 / SSL 256-bit encryption).</li>
                <li>🛡️ <strong>Access Controls:</strong> Project photos and inspection documents are stored in role-restricted, access-logged environments.</li>
                <li>📁 <strong>Retention:</strong> Project invoices and warranty records are retained for the lifetime of your roofing warranty (up to 25 to 50 years). Inactive inquiries are purged after 24 months.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
                6. Contact Our Privacy Office
              </h2>
              <p className="text-black leading-relaxed text-sm md:text-base mb-4">
                If you have questions regarding this Privacy Policy or wish to exercise your data rights, please contact our local Cary administration team:
              </p>
              <div className="bg-[#FAF8F4] p-5 rounded-xl border border-[#e8e4df] space-y-2 text-sm text-black">
                <p><strong>CaryRoofing LLC</strong></p>
                <p><strong>Physical Hub:</strong> {COMPANY_DETAILS.address}</p>
                <p><strong>Telephone:</strong> <a href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`} className="text-[#F07020] font-bold hover:underline">{COMPANY_DETAILS.mainPhone}</a></p>
                <p><strong>Email:</strong> <a href="mailto:caryncroofing@gmail.com" className="text-[#F07020] hover:underline">caryncroofing@gmail.com</a></p>
                <p><strong>Hours of Operation:</strong> Monday – Friday 7:00 AM – 7:00 PM EST (24/7 Emergency Storm Dispatch)</p>
              </div>
            </div>
          </div>

          {/* Bottom Back Button & Action */}
          <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="btn btn-primary !bg-[#9A3412] hover:!bg-[#7C2D12] !text-white font-extrabold shadow-sm"
            >
              Return to Homepage
            </button>
            <button
              type="button"
              onClick={() => onNavigate('our-locations')}
              className="btn btn-primary !bg-[#9A3412] hover:!bg-[#7C2D12] !text-white font-extrabold shadow-sm"
            >
              View Our Service Locations
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};
