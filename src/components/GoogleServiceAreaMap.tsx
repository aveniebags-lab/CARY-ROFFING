import React, { useState } from 'react';
import { COMPANY_DETAILS, CARY_ZIP_CODES } from '../data/roofingData';

interface MapHubOption {
  id: string;
  name: string;
  zip?: string;
  tag: string;
  address: string;
  embedQuery: string;
  zoom: number;
  phone: string;
  phoneRaw: string;
  lat: number;
  lng: number;
  landmarks: string;
  highlights: string[];
}

export const GoogleServiceAreaMap: React.FC = () => {
  const mapOptions: MapHubOption[] = [
    {
      id: 'hq',
      name: 'Official Headquarters Hub',
      zip: '27518',
      tag: 'Verified Physical Location',
      address: '580 New Waverly Pl Ste 216, Cary, NC 27518',
      embedQuery: '580 New Waverly Pl Ste 216, Cary, NC 27518',
      zoom: 15,
      phone: '(919) 973-7931',
      phoneRaw: '+19199737931',
      lat: 35.7368,
      lng: -78.7832,
      landmarks: 'Waverly Place Shopping Center • Lochmere • Regency Park',
      highlights: [
        'Central Office & Direct Permit Dispatch',
        'Town of Cary Building Inspection Coordination',
        'Emergency Shingle & Underlayment Staging Hub'
      ]
    },
    {
      id: 'full',
      name: 'Full Cary & Wake County Service Radius',
      tag: 'Complete Regional Coverage',
      address: 'All 5 Cary ZIP Codes & Surrounding Wake County',
      embedQuery: 'Cary, NC',
      zoom: 12,
      phone: COMPANY_DETAILS.mainPhone,
      phoneRaw: COMPANY_DETAILS.mainPhoneRaw,
      lat: 35.7915,
      lng: -78.7811,
      landmarks: 'Downtown Cary, Amberly, Preston, Lochmere, Crossroads, RTP',
      highlights: [
        '25-Mile Rapid Mobile Roofing Service Area',
        'Full Coverage: 27511, 27512, 27513, 27518, 27519',
        'Immediate Dispatch to Apex, Morrisville, Raleigh & Holly Springs'
      ]
    },
    {
      id: '27511',
      name: 'Central & Downtown Cary',
      zip: '27511',
      tag: 'Historic & Established Hub',
      address: 'Downtown Cary Park & Academy St Corridor, Cary, NC 27511',
      embedQuery: 'Downtown Cary Park, Cary, NC 27511',
      zoom: 14,
      phone: '(919) 335-9543',
      phoneRaw: '+19193359543',
      lat: 35.7915,
      lng: -78.7811,
      landmarks: 'Downtown Cary Park • Academy St • Chatham St • Dry Ave',
      highlights: [
        'Historic Bungalow & Mid-Century Decking Repair',
        'Architectural Shingle Upgrades from 3-Tab',
        'Prompt 30-45 Minute Local Dispatch'
      ]
    },
    {
      id: '27512',
      name: 'East Cary & Crossroads',
      zip: '27512',
      tag: 'Commercial & Multi-Family Hub',
      address: 'Crossroads Plaza & Walnut St Commercial Corridor, Cary, NC 27512',
      embedQuery: 'Crossroads Plaza, Cary, NC 27512',
      zoom: 14,
      phone: '(919) 756-3165',
      phoneRaw: '+19197563165',
      lat: 35.7725,
      lng: -78.7512,
      landmarks: 'Crossroads Plaza • Walnut Street • US-1 & I-40 Corridor',
      highlights: [
        'Commercial Flat Roofing (TPO, EPDM, Silicone Coating)',
        'Low-Slope & Valley Drainage Specialization',
        'Priority Service for Crossroads Commercial Facilities'
      ]
    },
    {
      id: '27513',
      name: 'North Cary & Preston',
      zip: '27513',
      tag: 'Executive & Golf Course Estates',
      address: 'Prestonwood Country Club & Park West Village, Cary, NC 27513',
      embedQuery: 'Prestonwood Country Club, Cary, NC 27513',
      zoom: 14,
      phone: '(984) 520-4071',
      phoneRaw: '+19845204071',
      lat: 35.8122,
      lng: -78.8041,
      landmarks: 'Prestonwood Country Club • Park West Village • High House Rd',
      highlights: [
        'HOA Compliant Designer & Heavyweight Shingles',
        'Steep Pitch 2-Story Safety & Hoisting Protocols',
        'Synthetic Slate & Standing Seam Metal Installations'
      ]
    },
    {
      id: '27519',
      name: 'West Cary, Amberly & Carpenter',
      zip: '27519',
      tag: 'Fast-Growing Master Communities',
      address: 'Amberly Village Center & Green Level Church Rd, Cary, NC 27519',
      embedQuery: 'Amberly Village Center, Cary, NC 27519',
      zoom: 14,
      phone: '(919) 335-9948',
      phoneRaw: '+19193359948',
      lat: 35.8367,
      lng: -78.8789,
      landmarks: 'Amberly Village • Carpenter • Green Level • Parkside Commons',
      highlights: [
        '130 MPH High-Wind Storm Resistance Rating',
        'Continuous Ridge Vent & Soffit Airflow Balancing',
        'Fast Dispatch to West Cary, RTP, Durham & Morrisville'
      ]
    }
  ];

  const [activeId, setActiveId] = useState<string>('hq');
  const activeHub = mapOptions.find((o) => o.id === activeId) || mapOptions[0];

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=580+New+Waverly+Pl+Ste+216,+Cary,+NC+27518`;
  const googleMapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeHub.embedQuery)}`;

  return (
    <section className="my-8 bg-white border-2 border-[#e8e4df] rounded-3xl shadow-xl overflow-hidden">
      {/* Official GMB Business Address Top Banner */}
      <div className="bg-[#1e2a3a] text-white p-5 sm:p-7 border-b border-slate-700">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1D9E75] animate-ping"></span>
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#F07020]">
                Verified Google Business Profile &amp; Service Area
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold !text-white text-white tracking-tight" style={{ color: '#ffffff' }}>
              Official Headquarters &amp; Cary Service Radius
            </h2>
            {/* Prominent Official Physical Address Display */}
            <div className="mt-3 inline-flex flex-wrap items-center gap-2 px-3.5 py-2 bg-white/10 rounded-xl border border-white/20 backdrop-blur-xs">
              <span className="text-base text-[#F07020]">📍</span>
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                Official Business Address:
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-white underline decoration-[#F07020] decoration-2">
                580 New Waverly Pl Ste 216, Cary, NC 27518
              </span>
              <span className="text-[11px] text-[#1D9E75] bg-[#E8F8F1]/20 px-2 py-0.5 rounded font-bold ml-1">
                ✓ Pinned
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={googleMapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white text-black hover:bg-slate-100 text-xs font-extrabold rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <span>🗺️ View on Google Maps</span>
              <span className="text-black/60">↗</span>
            </a>
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#F07020] hover:bg-[#d95e12] text-white text-xs font-extrabold rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <span>🚗 Get Directions</span>
              <span className="text-white/80">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hub Selection Buttons */}
      <div className="bg-[#FAF8F4] border-b border-[#e8e4df] p-3 sm:p-4 overflow-x-auto">
        <div className="flex flex-nowrap sm:flex-wrap items-center gap-2 min-w-max sm:min-w-0">
          <span className="text-xs font-bold text-black/70 mr-1 hidden sm:inline">
            Select Map View:
          </span>
          {mapOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setActiveId(opt.id)}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeId === opt.id
                  ? 'bg-[#1e2a3a] text-white shadow-md'
                  : 'bg-white text-black border border-[#e8e4df] hover:border-[#F07020]'
              }`}
            >
              <span>{opt.id === 'hq' ? '🏢' : opt.id === 'full' ? '🌐' : '📍'}</span>
              <span>{opt.name}</span>
              {opt.zip && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  activeId === opt.id ? 'bg-[#F07020] text-white' : 'bg-slate-100 text-black/70'
                }`}>
                  {opt.zip}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Interactive Map + Active Coverage Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Dynamic Google Map Embed (7 Columns) */}
        <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] bg-slate-100">
          <iframe
            key={`${activeHub.id}-${activeHub.zoom}`}
            title={`CaryRoofing Google Map - ${activeHub.name}`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(activeHub.embedQuery)}&t=&z=${activeHub.zoom}&ie=UTF8&iwloc=&output=embed`}
            className="w-full h-full min-h-[380px] sm:min-h-[460px] border-0"
            loading="lazy"
            allowFullScreen
          />
          {/* Floating Hub Badge inside map corner */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-[#e8e4df] text-xs max-w-[280px]">
            <div className="font-extrabold text-black flex items-center gap-1.5">
              <span className="text-[#F07020]">📍</span>
              <span className="truncate">{activeHub.name}</span>
            </div>
            <p className="text-[11px] text-black/70 font-medium truncate mt-0.5">
              {activeHub.address}
            </p>
          </div>
        </div>

        {/* Coverage & GMB Local Authority Details (5 Columns) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-[#e8e4df]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#e8e4df] pb-3">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#F07020]">
                {activeHub.tag}
              </span>
              <span className="text-[11px] font-mono font-bold text-slate-500">
                {activeHub.lat.toFixed(4)}° N, {Math.abs(activeHub.lng).toFixed(4)}° W
              </span>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-black mb-1">
                {activeHub.name}
              </h3>
              <p className="text-xs font-semibold text-black/80">
                📌 {activeHub.address}
              </p>
              <p className="text-xs text-black/60 mt-1">
                <strong>Key Landmarks:</strong> {activeHub.landmarks}
              </p>
            </div>

            {/* Operational Highlights */}
            <div className="bg-[#FAF8F4] p-4 rounded-xl border border-[#e8e4df] space-y-2">
              <span className="text-[11px] font-bold text-black uppercase tracking-wider block">
                Local Coverage Capabilities:
              </span>
              {activeHub.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-black/85">
                  <span className="text-[#1D9E75] font-bold">✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* 5 Cary ZIP Codes Quick Badges */}
            <div>
              <span className="text-[11px] font-bold text-black/70 uppercase tracking-wider block mb-2">
                Certified Cary Coverage Hubs:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {CARY_ZIP_CODES.map((z) => (
                  <span
                    key={z.zip}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border ${
                      activeHub.zip === z.zip
                        ? 'bg-[#F07020] text-white border-[#F07020]'
                        : 'bg-white text-black border-[#e8e4df]'
                    }`}
                  >
                    ZIP {z.zip} ({z.phone})
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-[#e8e4df] mt-6 space-y-2.5">
            <a
              href={`tel:${activeHub.phoneRaw}`}
              className="w-full btn btn-primary !py-3 !text-sm font-bold flex items-center justify-center gap-2 shadow-md"
            >
              <span>📞 Call Dispatch: {activeHub.phone}</span>
            </a>
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <a
                href={googleMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-[#FAF8F4] hover:bg-slate-100 text-black font-bold rounded-xl border border-[#e8e4df] transition-colors"
              >
                Google Maps Pin ↗
              </a>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('book');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="py-2.5 px-3 bg-[#FAF8F4] hover:bg-slate-100 text-[#F07020] font-bold rounded-xl border border-[#e8e4df] transition-colors cursor-pointer"
              >
                Book Inspection →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="bg-[#FAF8F4] border-t border-[#e8e4df] px-6 py-3 text-xs text-black/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[#1D9E75] font-bold">✓ Town of Cary Permitting:</span>
          <span>Pulled daily from 580 New Waverly Pl Ste 216</span>
        </div>
        <div className="text-[11px] text-black/60">
          Google Maps Grounding • Code-Compliant NC High-Wind (130 MPH) Installations
        </div>
      </div>
    </section>
  );
};
