import React, { useState } from 'react';
import { SEO_AEO_GUIDE, CARY_ZIP_CODES, COMPANY_DETAILS } from '../data/roofingData';

interface TechnicalPortalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPageTitle: string;
}

export const TechnicalPortalDrawer: React.FC<TechnicalPortalDrawerProps> = ({
  isOpen,
  onClose,
  currentPageTitle
}) => {
  const [activeTab, setActiveTab] = useState<'schema' | 'aeo' | 'estimator' | 'dispatch' | 'checklist'>('schema');
  const [copied, setCopied] = useState(false);

  // Roof Estimator State
  const [sqft, setSqft] = useState<number>(2400);
  const [material, setMaterial] = useState<'asphalt' | 'metal' | 'tile' | 'flat'>('asphalt');
  const [pitch, setPitch] = useState<'standard' | 'steep' | 'complex'>('standard');

  const calculateEstimate = () => {
    // 1 square = 100 sqft
    const squares = sqft / 100;
    let basePerSquare = 380; // standard architectural shingle
    if (material === 'metal') basePerSquare = 850;
    if (material === 'tile') basePerSquare = 1100;
    if (material === 'flat') basePerSquare = 550;

    let pitchMultiplier = 1.0;
    if (pitch === 'steep') pitchMultiplier = 1.25;
    if (pitch === 'complex') pitchMultiplier = 1.45;

    const baseCost = squares * basePerSquare * pitchMultiplier;
    const low = Math.round(baseCost * 0.95);
    const high = Math.round(baseCost * 1.15);

    return { low, high };
  };

  const { low, high } = calculateEstimate();

  const generatedSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://www.caryncroofing.com/#localbusiness",
    "name": "CaryRoofing",
    "legalName": "Cary Roofing Contractors LLC",
    "alternateName": ["Cary Roofing", "CaryRoofing", "Cary NC Roofing", "Roofing Cary NC", "caryncroofing.com"],
    "url": "https://www.caryncroofing.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.caryncroofing.com/favicon.svg",
      "width": 512,
      "height": 512,
      "caption": "CaryRoofing - Premier Roofing Services Cary NC"
    },
    "telephone": COMPANY_DETAILS.mainPhone,
    "email": COMPANY_DETAILS.email,
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Check, Insurance Financing, Financing Available",
    "slogan": "Best Roofing Services in Cary, NC - Precision Craftsmanship & 50-Year Protection",
    "foundingDate": "2011",
    "description": "Looking for the best roofing services in Cary, NC? As top roofing contractors in Cary, NC, we offer expert roof repair & roof replacement. Call +1 919-335-9543 today!",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "580 New Waverly Pl Ste 216",
      "addressLocality": "Cary",
      "addressRegion": "NC",
      "postalCode": "27518",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.7368,
      "longitude": -78.7832
    },
    "hasMap": "https://www.google.com/maps/place/580+New+Waverly+Pl+Ste+216,+Cary,+NC+27518",
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Cary, NC" },
      { "@type": "AdministrativeArea", "name": "Wake County, NC" },
      ...CARY_ZIP_CODES.map(z => ({
        "@type": "Place",
        "name": `${z.areaName} (${z.zip})`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cary",
          "addressRegion": "NC",
          "postalCode": z.zip,
          "addressCountry": "US"
        }
      }))
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "128",
      "reviewCount": "128"
    },
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "name": "NC Licensed General Contractor (#78942)" },
      { "@type": "EducationalOccupationalCredential", "name": "GAF Master Elite Certified Contractor" },
      { "@type": "EducationalOccupationalCredential", "name": "HAAG Certified Master Inspector" }
    ]
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(JSON.stringify(generatedSchema, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FFFDF9] border border-[#e8e4df] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#1e2a3a]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#FAF8F4] border-b border-[#e8e4df] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1D9E75] animate-ping"></span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F07020]">
                CaryRoofing Technical &amp; Service Portal
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-[#1e2a3a] mt-0.5">
              Cary, NC Roofing Specifications, Estimates &amp; Dispatch Directory
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#e8e4df] flex items-center justify-center text-lg font-bold hover:bg-[#FAF8F4] transition-all cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#e8e4df] bg-[#FFFDF9] px-6 overflow-x-auto text-sm font-bold gap-4">
          <button
            type="button"
            onClick={() => setActiveTab('schema')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'schema'
                ? 'border-[#F07020] text-[#F07020] font-bold'
                : 'border-transparent text-black hover:text-[#F07020] font-semibold'
            }`}
          >
            📋 Schema.org JSON-LD
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('aeo')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'aeo'
                ? 'border-[#F07020] text-[#F07020] font-bold'
                : 'border-transparent text-black hover:text-[#F07020] font-semibold'
            }`}
          >
            🤖 Local Knowledge &amp; AEO
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('estimator')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'estimator'
                ? 'border-[#F07020] text-[#F07020] font-bold'
                : 'border-transparent text-black hover:text-[#F07020] font-semibold'
            }`}
          >
            🧮 Cost Estimator Widget
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('dispatch')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'dispatch'
                ? 'border-[#F07020] text-[#F07020] font-bold'
                : 'border-transparent text-black hover:text-[#F07020] font-semibold'
            }`}
          >
            🗺️ Cary Zip Coverage
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('checklist')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'checklist'
                ? 'border-[#F07020] text-[#F07020] font-bold'
                : 'border-transparent text-black hover:text-[#F07020] font-semibold'
            }`}
          >
            ✓ Quality &amp; Building Standards
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 text-sm">
          
          {/* TAB 1: SCHEMA.ORG */}
          {activeTab === 'schema' && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-black font-medium">
                  This valid Schema.org script tells Google Search, Maps, and AI models exactly what business this is, its physical location in Cary NC (Waverly Place), its 5 zip codes, and services.
                </p>
                <button
                  type="button"
                  onClick={handleCopySchema}
                  className="px-3 py-1.5 bg-[#9A3412] text-white rounded-md text-xs font-extrabold hover:bg-[#7C2D12] transition-all cursor-pointer shrink-0 shadow-xs"
                >
                  {copied ? '✓ Copied!' : 'Copy JSON-LD'}
                </button>
              </div>
              <pre className="bg-[#1e2a3a] text-[#FAF8F4] p-4 rounded-xl text-xs overflow-x-auto font-mono max-h-96">
                {JSON.stringify(generatedSchema, null, 2)}
              </pre>
              <div className="mt-4 p-3 bg-[#E8F8F1] border-l-4 border-[#1D9E75] rounded-r-lg text-xs text-black font-medium">
                <strong className="text-[#1D9E75]">Technical SEO Pro Tip:</strong> This schema includes exact geographic coordinates (35.7368° N, -78.7832° W) and Wake County Postal Codes (27511, 27512, 27513, 27518, 27519) to trigger local map pack visibility.
              </div>
            </div>
          )}

          {/* TAB 2: AEO & AI SEARCH OVERVIEWS */}
          {activeTab === 'aeo' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                <h4 className="font-bold text-base text-black mb-1">
                  What is AEO (Answer Engine Optimization)?
                </h4>
                <p className="text-xs text-black font-medium">
                  Search engines (Google Gemini AI Overviews, Perplexity, ChatGPT Search, Apple Intelligence) do not just read links — they synthesize answers. To be chosen as the primary source, content must feature <strong>concise, definitive 40-60 word answer blocks</strong> directly answering user queries.
                </p>
              </div>

              <div className="space-y-3">
                {SEO_AEO_GUIDE.aeoSnippets.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white border border-[#e8e4df] rounded-xl shadow-xs">
                    <div className="text-xs font-bold text-[#F07020] uppercase tracking-wide mb-1">
                      Query: &ldquo;{item.query}&rdquo;
                    </div>
                    <div className="p-3 bg-[#FAF8F4] border-l-3 border-[#1D9E75] rounded-r-md text-xs font-medium text-black mb-2 leading-relaxed">
                      &ldquo;{item.directAnswer}&rdquo;
                    </div>
                    <div className="text-[11px] text-black font-medium">
                      <strong>Target Entities:</strong> {item.targetEntity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ESTIMATOR WIDGET */}
          {activeTab === 'estimator' && (
            <div className="space-y-5">
              <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                <h4 className="font-bold text-base text-black mb-1">
                  Lead Conversion Multiplier: Instant Roof Cost Estimator
                </h4>
                <p className="text-xs text-black font-medium">
                  Calculators convert visitors into qualified phone calls and inspection leads at over 3x the normal rate.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-4 bg-white p-4 rounded-xl border border-[#e8e4df]">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Roof Size (Square Footage):</span>
                      <span className="text-[#F07020]">{sqft.toLocaleString()} sq ft ({Math.round(sqft/100)} squares)</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="5000" 
                      step="100"
                      value={sqft}
                      onChange={(e) => setSqft(Number(e.target.value))}
                      className="w-full accent-[#F07020] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">Roofing Material:</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setMaterial('asphalt')}
                        className={`p-2.5 rounded-lg border font-semibold text-center cursor-pointer ${
                          material === 'asphalt' ? 'bg-[#FFF3EB] border-[#F07020] text-[#F07020]' : 'border-[#e8e4df]'
                        }`}
                      >
                        Architectural Shingles
                      </button>
                      <button
                        type="button"
                        onClick={() => setMaterial('metal')}
                        className={`p-2.5 rounded-lg border font-semibold text-center cursor-pointer ${
                          material === 'metal' ? 'bg-[#FFF3EB] border-[#F07020] text-[#F07020]' : 'border-[#e8e4df]'
                        }`}
                      >
                        Standing Seam Metal
                      </button>
                      <button
                        type="button"
                        onClick={() => setMaterial('tile')}
                        className={`p-2.5 rounded-lg border font-semibold text-center cursor-pointer ${
                          material === 'tile' ? 'bg-[#FFF3EB] border-[#F07020] text-[#F07020]' : 'border-[#e8e4df]'
                        }`}
                      >
                        Concrete / Clay Tile
                      </button>
                      <button
                        type="button"
                        onClick={() => setMaterial('flat')}
                        className={`p-2.5 rounded-lg border font-semibold text-center cursor-pointer ${
                          material === 'flat' ? 'bg-[#FFF3EB] border-[#F07020] text-[#F07020]' : 'border-[#e8e4df]'
                        }`}
                      >
                        Flat Deck (TPO / Rubber)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">Roof Pitch &amp; Complexity:</label>
                    <select
                      value={pitch}
                      onChange={(e) => setPitch(e.target.value as any)}
                      className="w-full p-2 border border-[#e8e4df] rounded-lg text-xs"
                    >
                      <option value="standard">Standard Pitch (4:12 - 6:12 slope)</option>
                      <option value="steep">Steep Pitch (7:12 - 9:12 slope)</option>
                      <option value="complex">High Pitch / Multi-Dormer &amp; Turrets (10:12+)</option>
                    </select>
                  </div>
                </div>

                <div className="bg-[#1e2a3a] text-white p-6 rounded-xl flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FB923C]">
                      Cary, NC Market Estimate
                    </span>
                    <div className="text-3xl font-extrabold text-white mt-2">
                      ${low.toLocaleString()} – ${high.toLocaleString()}
                    </div>
                    <p className="text-xs text-white font-medium mt-2">
                      Estimated price for complete tear-off, synthetic underlayment, drip edges, code-compliant fastening, and clean-up in Wake County.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        const el = document.getElementById('book');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn btn-primary w-full text-center text-sm font-extrabold block !text-white cursor-pointer"
                    >
                      Claim Exact Written Quote &amp; Free Inspection →
                    </button>
                    <div className="text-center text-[11px] text-white font-medium mt-2">
                      Zero obligation • On-site inspection confirms decking &amp; scope
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CARY LOCAL ZIP DISPATCH */}
          {activeTab === 'dispatch' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                <h4 className="font-bold text-base text-black mb-1">
                  Cary, NC Neighborhood Service &amp; Mobile Dispatch Network
                </h4>
                <p className="text-xs text-black font-medium">
                  Our Cary roofing technicians are stationed throughout Wake County for rapid on-site emergency tarping, roof inspections, and replacement estimates.
                </p>
              </div>

              <div className="border border-[#e8e4df] rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF8F4] border-b border-[#e8e4df] font-bold text-black">
                    <tr>
                      <th className="p-3">Zip Code</th>
                      <th className="p-3">Coverage Zone</th>
                      <th className="p-3">Direct Cary Hotline</th>
                      <th className="p-3">Coordinates</th>
                      <th className="p-3">Dispatch Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e8e4df]">
                    {CARY_ZIP_CODES.map((z) => (
                      <tr key={z.zip} className="hover:bg-[#FFFDF9]">
                        <td className="p-3 font-bold text-[#B43B06]">{z.zip}</td>
                        <td className="p-3 font-semibold text-black">{z.areaName}</td>
                        <td className="p-3 font-bold text-black">
                          <a href={`tel:${z.phoneRaw}`} className="hover:text-[#B43B06] underline">
                            {z.phone}
                          </a>
                        </td>
                        <td className="p-3 font-mono text-[11px] text-black font-medium">{z.coords}</td>
                        <td className="p-3">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8F8F1] text-[#0d684d]">
                            Active 24/7 Dispatch
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: BUILDING CODE & QUALITY STANDARDS */}
          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                <h4 className="font-bold text-base text-black mb-1">
                  North Carolina Building Code &amp; Craftsmanship Standards (Cary, NC)
                </h4>
                <p className="text-xs text-black font-medium">
                  Every roofing repair, replacement, and installation follows Town of Cary Inspections &amp; Permits, NC High-Wind (130 MPH) structural requirements, and manufacturer warranties.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-black font-medium">
                <div className="p-4 bg-white border border-[#e8e4df] rounded-xl space-y-2">
                  <h5 className="font-bold text-[#B43B06] uppercase tracking-wide">✓ Code &amp; Permitting Standards</h5>
                  <p>✓ <strong>Town of Cary Permits:</strong> Turnkey permit pulling &amp; inspection sign-off.</p>
                  <p>✓ <strong>NC High-Wind Code:</strong> 130 MPH rated 6-nail fastening patterns.</p>
                  <p>✓ <strong>Ice &amp; Water Barrier:</strong> Required along eaves, valleys, and flashing junctions.</p>
                  <p>✓ <strong>Synthetic Underlayment:</strong> Tear-resistant breathable underlayment.</p>
                  <p>✓ <strong>Continuous Ventilation:</strong> Balanced 1:300 NFA ridge and soffit airflow.</p>
                </div>
                <div className="p-4 bg-white border border-[#e8e4df] rounded-xl space-y-2">
                  <h5 className="font-bold text-[#0d684d] uppercase tracking-wide">✓ Quality &amp; Warranty Assurances</h5>
                  <p>✓ <strong>Licensed &amp; Insured:</strong> Full $2M General Liability coverage in NC.</p>
                  <p>✓ <strong>Certified Installers:</strong> GAF Master Elite &amp; CertainTeed certified.</p>
                  <p>✓ <strong>50-Year Protection:</strong> Non-prorated manufacturer warranty packages.</p>
                  <p>✓ <strong>Magnetic Nail Sweep:</strong> 100% clean yard &amp; driveway guarantee.</p>
                  <p>✓ <strong>Emergency Response:</strong> 24/7 rapid dispatch for storm damage &amp; tarping.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#FAF8F4] border-t border-[#e8e4df] flex items-center justify-between text-xs text-black font-semibold">
          <span>Current active page: <strong>{currentPageTitle}</strong></span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#9A3412] hover:bg-[#7C2D12] text-white font-extrabold transition-all cursor-pointer shadow-xs"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
};
