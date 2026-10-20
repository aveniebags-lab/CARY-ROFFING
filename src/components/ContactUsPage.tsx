import React, { useState } from 'react';
import { COMPANY_DETAILS, CARY_ZIP_CODES } from '../data/roofingData';
import { SeoSchema } from './SeoSchema';

interface ContactUsPageProps {
  onNavigate: (path: string) => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    zip: '27518',
    service: 'Roof Replacement',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <article className="bg-[#FFFDF9] min-h-screen text-black">
      {/* Schema.org Structured Data */}
      <SeoSchema
        pageType="privacy"
        pageTitle="Contact Us & Emergency Roof Dispatch | Cary Roofing Contractors LLC"
        pageDescription="Contact Cary Roofing Contractors LLC. 24/7 emergency dispatch, free 21-point on-site roof inspections across Cary, NC (27511, 27512, 27513, 27518, 27519)."
        canonicalUrl="https://www.caryncroofing.com/contact-cary-roofing.html"
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
          <span className="text-[#9A3412] font-bold">Contact Us</span>
        </div>
      </nav>

      {/* Hero Header (H1) with Answer-First Callout */}
      <section className="py-12 md:py-16 bg-[#FFFDF9] border-b border-[#e8e4df]">
        <div className="container container-medium">
          <div className="kicker">DIRECT LOCAL DISPATCH &amp; VERIFIED CONTACT</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
            Contact Cary Roofing Contractors LLC
          </h1>

          {/* Answer-First Callout Box */}
          <div className="p-4 sm:p-5 bg-[#FAF8F4] border-l-4 border-[#9A3412] rounded-r-xl mb-6 shadow-xs">
            <p className="text-sm sm:text-base font-bold text-black leading-relaxed">
              <strong>How to contact Cary Roofing in Wake County:</strong> Homeowners and commercial property managers in Cary, NC can reach our central dispatch hotline 24 hours a day, 7 days a week at <a href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`} className="text-[#9A3412] underline">{COMPANY_DETAILS.mainPhone}</a> or visit our headquarters at 580 New Waverly Pl Ste 216, Cary, NC 27518 for rapid emergency roof tarping and free 21-point inspections.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-black">
            <span className="px-3.5 py-1.5 bg-white border border-[#e8e4df] rounded-full shadow-2xs">
              📍 Central HQ: 580 New Waverly Pl Ste 216, Cary, NC 27518
            </span>
            <span className="px-3.5 py-1.5 bg-[#E8F8F1] text-[#0d684d] border border-[#0d684d]/30 rounded-full font-bold">
              ✓ 24/7/365 Emergency Dispatch Available
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-[#e8e4df] rounded-full shadow-2xs">
              🛡️ Licensed, Vetted &amp; $2M Insured
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-16 bg-[#FAF8F4]">
        <div className="container container-medium space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information & NAP Details */}
            <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs space-y-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
                  Headquarters &amp; Direct Hotlines
                </h2>
                <p className="text-sm text-black/80">
                  Every phone call connects directly to active Wake County roofing specialists on duty.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                  <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider block mb-1">
                    Primary Dispatch &amp; Central Intake
                  </span>
                  <a href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`} className="text-xl font-extrabold text-black hover:text-[#9A3412] flex items-center gap-2">
                    📞 {COMPANY_DETAILS.mainPhone}
                  </a>
                  <p className="text-xs text-black/70 mt-1">Available 24 hours daily for urgent leak mitigation &amp; inspections.</p>
                </div>

                <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                  <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider block mb-1">
                    Central Corporate Office
                  </span>
                  <p className="font-bold text-black">{COMPANY_DETAILS.address}</p>
                  <p className="text-xs text-black/70 mt-1">Conveniently situated at New Waverly Place near Lochmere.</p>
                </div>

                <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                  <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider block mb-1">
                    Email Correspondence
                  </span>
                  <a href="mailto:caryncroofing@gmail.com" className="font-bold text-black hover:text-[#9A3412]">
                    ✉️ caryncroofing@gmail.com
                  </a>
                  <p className="text-xs text-black/70 mt-1">Response time under 2 business hours for written quotes.</p>
                </div>
              </div>
            </div>

            {/* Inspection Booking Form */}
            <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
                Request a Free 21-Point Roof Inspection
              </h2>
              <p className="text-sm text-black/80 mb-6">
                Receive an itemized written estimate and high-resolution attic/exterior diagnostics.
              </p>

              {submitted ? (
                <div className="p-6 bg-[#E8F8F1] border-2 border-[#0d684d] rounded-xl text-center space-y-3">
                  <div className="text-3xl">✅</div>
                  <h3 className="text-lg font-bold text-[#0d684d]">Inspection Request Confirmed!</h3>
                  <p className="text-sm text-black">
                    A Cary roofing director will contact you at <strong>{formData.phone}</strong> shortly to confirm your preferred inspection time.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#0d684d] underline font-bold"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-black mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Robert Smith"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8e4df] text-sm focus:outline-none focus:border-[#9A3412]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-black mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(919) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8e4df] text-sm focus:outline-none focus:border-[#9A3412]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase text-black mb-1">Street Address</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="e.g. 120 Waverly Way"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8e4df] text-sm focus:outline-none focus:border-[#9A3412]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-black mb-1">Cary ZIP Code</label>
                      <select
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8e4df] text-sm focus:outline-none focus:border-[#9A3412]"
                      >
                        <option value="27511">27511 (Downtown / Central Cary)</option>
                        <option value="27512">27512 (East Cary / Crossroads)</option>
                        <option value="27513">27513 (North Cary / Preston)</option>
                        <option value="27518">27518 (South Cary / Waverly)</option>
                        <option value="27519">27519 (West Cary / Amberly)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-black mb-1">Primary Roofing Concern</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8e4df] text-sm focus:outline-none focus:border-[#9A3412]"
                    >
                      <option value="Roof Replacement">Full Roof Replacement</option>
                      <option value="Roof Repair">Active Leak or Repair</option>
                      <option value="Storm Damage">Emergency Storm Damage &amp; Tarping</option>
                      <option value="Roof Inspection">Preventative 21-Point Inspection</option>
                      <option value="Metal Roofing">Standing Seam Metal Roofing</option>
                      <option value="Gutters">Seamless Gutters &amp; Drainage</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#9A3412] hover:bg-[#7C2D12] text-white font-extrabold text-sm transition-all shadow-md cursor-pointer"
                  >
                    Schedule Free Inspection Now →
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Local Cary ZIP Code Dispatch Table */}
          <div className="p-6 md:p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
              Cary, NC Local ZIP Code Dispatch Directory
            </h2>
            <p className="text-sm text-black/80 mb-6">
              Our crews are prepositioned across Wake County for rapid response times. Call the direct line for your zone:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FAF8F4] border-b-2 border-[#e8e4df]">
                    <th className="p-3 font-extrabold text-black">ZIP Code</th>
                    <th className="p-3 font-extrabold text-black">Coverage Sector</th>
                    <th className="p-3 font-extrabold text-black">Prominent Neighborhoods</th>
                    <th className="p-3 font-extrabold text-black">Direct Dispatch Phone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e4df]">
                  {CARY_ZIP_CODES.map((item) => (
                    <tr key={item.zip} className="hover:bg-[#FAF8F4]/60">
                      <td className="p-3 font-bold text-[#9A3412]">ZIP {item.zip}</td>
                      <td className="p-3 font-semibold text-black">{item.areaName}</td>
                      <td className="p-3 text-black/80">{item.neighborhoods.join(', ')}</td>
                      <td className="p-3 font-bold">
                        <a href={`tel:${item.phoneRaw}`} className="text-[#9A3412] hover:underline">
                          {item.phone}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
