import React from 'react';
import { COMPANY_DETAILS } from '../data/roofingData';
import { SeoSchema } from './SeoSchema';

interface TermsOfServicePageProps {
  onNavigate: (path: string) => void;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onNavigate }) => {
  return (
    <article className="bg-[#FFFDF9] min-h-screen text-black">
      {/* Schema.org Structured Data */}
      <SeoSchema
        pageType="privacy"
        pageTitle="Terms of Service & Warranty Conditions | caryncroofing.com - Cary, NC"
        pageDescription="Terms of Service, contractor referral standards, estimate guidelines, and warranty terms for caryncroofing in Cary, NC and Wake County."
        canonicalUrl="https://caryncroofing.com/terms-of-service.html"
      />

      {/* Breadcrumbs */}
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
          <span className="text-[#9A3412] font-bold">Terms of Service</span>
        </div>
      </nav>

      {/* Hero Header (H1) */}
      <section className="py-12 md:py-16 bg-[#FFFDF9] border-b border-[#e8e4df]">
        <div className="container container-medium">
          <div className="kicker">LEGAL TERMS &amp; CONDITIONS</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
            Terms of Service &amp; Operational Agreement
          </h1>
          <p className="text-base md:text-lg text-black font-medium max-w-3xl leading-relaxed">
            Effective Date: October 18, 2026. These Terms of Service govern your access to and use of <strong>caryncroofing.com</strong>, including all roofing estimate tools, cost calculators, on-site assessment dispatch services, and contractor referral interactions across Cary, NC and Wake County.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-semibold text-black">
            <span className="px-3 py-1 bg-[#FAF8F4] border border-[#e8e4df] rounded-full">
              📍 Jurisdiction: Town of Cary &amp; Wake County, NC
            </span>
            <span className="px-3 py-1 bg-[#E8F8F1] text-[#0d684d] border border-[#0d684d]/30 rounded-full font-bold">
              ✓ Fully Insured &amp; Verified Contractors
            </span>
          </div>
        </div>
      </section>

      {/* Main Content with Sequential H2 & H3 */}
      <section className="py-12 md:py-16 bg-[#FAF8F4]">
        <div className="container container-medium space-y-8">
          <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-black text-sm sm:text-base leading-relaxed mb-3">
              By submitting an estimate request form, using our online roofing calculator, or placing a phone call to our central Cary dispatch desk at <strong>+1 919-335-9543</strong>, you agree to be bound by these Terms of Service.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
              2. Scope of Contractor Referral &amp; Diagnostic Services
            </h2>
            <p className="text-black text-sm sm:text-base leading-relaxed mb-4">
              Cary Roofing operates a curated referral network of independently licensed, vetted, and insured roofing contractors operating within the Town of Cary and surrounding Wake County municipalities.
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-[#FAF8F4] border border-[#e8e4df] rounded-lg">
                <h3 className="font-bold text-black text-sm mb-1">Estimates &amp; Quotes</h3>
                <p className="text-xs text-black/80">
                  Estimates generated via online forms or calculators are preliminary calculations based on user-entered square footage and material choices. Final binding pricing is confirmed solely after a certified on-site 21-point physical roof inspection.
                </p>
              </div>
              <div className="p-3 bg-[#FAF8F4] border border-[#e8e4df] rounded-lg">
                <h3 className="font-bold text-black text-sm mb-1">Permitting &amp; Code Compliance</h3>
                <p className="text-xs text-black/80">
                  All roofing replacements requiring structural modifications or exceeding municipal thresholds must obtain building permits through the Town of Cary Inspections Department prior to commencement.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
              3. Warranties &amp; Manufacturer Guarantees
            </h2>
            <p className="text-black text-sm sm:text-base leading-relaxed mb-3">
              Manufacturer warranties (such as GAF Golden Pledge, CertainTeed SureStart PLUS, or Owens Corning Platinum) are registered directly with the respective manufacturer following complete installation and quality inspection. Workmanship warranties are guaranteed in writing by the assigned licensed contractor.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
              4. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-black text-sm sm:text-base leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the State of North Carolina. Any legal disputes arising out of these terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Wake County, North Carolina.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
              5. Contact &amp; Legal Inquiries
            </h2>
            <div className="text-sm text-black space-y-1">
              <p><strong>Entity:</strong> Cary Roofing Contractors LLC</p>
              <p><strong>Address:</strong> 580 New Waverly Pl Ste 216, Cary, NC 27518</p>
              <p><strong>Phone:</strong> <a href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`} className="text-[#9A3412] font-bold hover:underline">{COMPANY_DETAILS.mainPhone}</a></p>
              <p><strong>Email:</strong> <a href="mailto:caryncroofing@gmail.com" className="text-[#9A3412] font-bold hover:underline">caryncroofing@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
