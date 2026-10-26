import React, { useState, useMemo } from 'react';
import { COMPANY_DETAILS, CARY_ZIP_CODES } from '../data/roofingData';
import { BookingForm } from './BookingForm';
import { SeoSchema } from './SeoSchema';

interface CalculatorPageProps {
  onNavigate: (path: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onNavigate }) => {
  // Calculator Form State
  const [houseSqFt, setHouseSqFt] = useState<number>(1700);
  const [pitch, setPitch] = useState<number>(1.15); // 5/12 to 7/12 default
  const [stories, setStories] = useState<number>(1.0); // 1-story default
  const [complexity, setComplexity] = useState<number>(1.0); // Simple Gable default
  const [material, setMaterial] = useState<string>('architectural');
  const [selectedZip, setSelectedZip] = useState<string>('27511');
  const [includeTearOff, setIncludeTearOff] = useState<boolean>(true);
  const [includePermit, setIncludePermit] = useState<boolean>(true);
  const [deckingPercent, setDeckingPercent] = useState<number>(0);

  // Material costs per square foot installed
  const materialsData: Record<string, { name: string; desc: string; lowPerSqFt: number; highPerSqFt: number }> = {
    architectural: {
      name: 'Architectural Asphalt Shingles (GAF / CertainTeed)',
      desc: 'Cary’s #1 choice. 50-year warranty, 130 MPH wind-resistant, HOA approved.',
      lowPerSqFt: 4.80,
      highPerSqFt: 6.50
    },
    threeTab: {
      name: 'Standard 3-Tab Asphalt Shingles',
      desc: 'Economy option for budget replacements and single-story rental homes.',
      lowPerSqFt: 3.80,
      highPerSqFt: 4.70
    },
    designer: {
      name: 'Premium Designer / Luxury Shingles',
      desc: 'Heavyweight dimensional shingles required in Preston and executive estates.',
      lowPerSqFt: 7.50,
      highPerSqFt: 10.20
    },
    metal: {
      name: 'Standing Seam Metal Roofing (24-Gauge)',
      desc: 'Concealed fastener architectural standing seam. 60+ year durability.',
      lowPerSqFt: 11.50,
      highPerSqFt: 16.50
    },
    syntheticSlate: {
      name: 'Synthetic Slate / Shake Tiles',
      desc: 'Class 4 impact-rated composite authentic slate appearance.',
      lowPerSqFt: 13.00,
      highPerSqFt: 18.50
    },
    flatTpo: {
      name: 'Commercial TPO / Low-Slope Flat Membrane',
      desc: 'Heat-welded energy-efficient white single-ply membrane for flat roofs.',
      lowPerSqFt: 5.80,
      highPerSqFt: 8.20
    }
  };

  // Calculations based on actual geometric roof surface area
  const calculation = useMemo(() => {
    // Roof Area = Base Area * Pitch Factor * Complexity Factor + Overhang allowance (approx 10%)
    const overhangMultiplier = 1.10;
    const effectiveRoofSqFt = Math.round(houseSqFt * pitch * complexity * overhangMultiplier);
    const roofingSquares = (effectiveRoofSqFt / 100).toFixed(1);

    const mat = materialsData[material] || materialsData.architectural;
    
    // Base material & installation
    let baseLow = effectiveRoofSqFt * mat.lowPerSqFt;
    let baseHigh = effectiveRoofSqFt * mat.highPerSqFt;

    // Stories multiplier (higher labor and safety hoisting on multi-story)
    baseLow *= stories;
    baseHigh *= stories;

    // Tear-off & Wake County disposal ($0.65 / sq ft)
    const tearOffCost = includeTearOff ? Math.round(effectiveRoofSqFt * 0.65) : 0;

    // Town of Cary Permit & Inspection ($350)
    const permitCost = includePermit ? 350 : 0;

    // Decking replacement allowance ($3.00 / sq ft of replaced decking)
    const deckingCost = Math.round((effectiveRoofSqFt * (deckingPercent / 100)) * 3.00);

    // Total cost range
    const totalLow = Math.round(baseLow + tearOffCost + permitCost + deckingCost);
    const totalHigh = Math.round(baseHigh + tearOffCost + permitCost + deckingCost);
    const average = Math.round((totalLow + totalHigh) / 2);

    return {
      roofSqFt: effectiveRoofSqFt,
      squares: roofingSquares,
      totalLow,
      totalHigh,
      average,
      tearOffCost,
      permitCost,
      deckingCost,
      materialCostLow: Math.round(baseLow),
      materialCostHigh: Math.round(baseHigh)
    };
  }, [houseSqFt, pitch, stories, complexity, material, includeTearOff, includePermit, deckingPercent]);

  const activeZip = CARY_ZIP_CODES.find(z => z.zip === selectedZip) || CARY_ZIP_CODES[0];

  const calculatorFaqs = [
    {
      question: "How much does a roof replacement cost in Cary, NC right now?",
      answer: "In 2024-2025, most Cary homeowners pay $8,500 to $13,500 for a standard 1,700 sq ft home with architectural asphalt shingles. For North Cary (27513) and West Cary (27519) where homes are larger, expect $12,000 to $18,000. Metal roofs in Cary run $18,000 to $40,000."
    },
    {
      question: "Do I need a permit to replace my roof in Cary, NC?",
      answer: "Yes. The Town of Cary requires a building permit for a full roof replacement. Your contractor should pull it for you. It costs around $250-$450 and includes an inspection. All our hubs, including our headquarters at 580 New Waverly Pl Ste 216, Cary, NC 27518, handle this daily."
    },
    {
      question: "How long does a roof replacement take in Cary?",
      answer: "For most Cary homes, it's 1 to 2 days for asphalt shingles. Larger homes in Amberly or Preston (27513, 27519) can take 2 to 3 days. Metal or tile can take 4 to 7 days. Weather in Cary, especially summer thunderstorms, can add a day."
    },
    {
      question: "My HOA is in Preston or Amberly. Does that affect my cost?",
      answer: "Yes. HOAs in Preston, Prestonwood Country Club, Lochmere, and Amberly Village often require premium architectural shingles and pre-approval of color. You cannot use the cheapest 3-tab option. This raises material cost by about $1,000 to $2,000 but gives you a better roof and keeps you compliant."
    },
    {
      question: "Will my homeowners insurance cover my roof in Cary, NC?",
      answer: "If your roof was damaged by wind or hail, which is common in Wake County during spring storms, most US insurance policies will cover it minus your deductible. After you get a new roof, especially an impact-resistant Class 4 shingle, call your insurance. Many Cary homeowners get a discount of $300 to $700 per year."
    },
    {
      question: "What is the best time of year to replace a roof in Cary, NC?",
      answer: "Fall (September - November) and Spring (March - May) are ideal in Cary. It's not too hot and not too wet. Summer is our busiest season and asphalt shingles seal very well in the heat. Winter is possible in Cary since we have mild winters, but shingles don't seal as fast."
    },
    {
      question: "Can you work in my specific neighborhood if I'm just outside Cary?",
      answer: "Absolutely. We work daily in Apex, Morrisville, Holly Springs, Raleigh, Durham, and Chapel Hill. If you're near Crossroads (27512), we cover Garner. If you're near Green Level (27519), we cover Apex and Durham. Just tell us your ZIP and we'll dispatch from the closest hub - Downtown Cary Park (27511), Crossroads (27512), Prestonwood (27513), Waverly Place (27518), or Amberly (27519)."
    }
  ];

  return (
    <article className="bg-[#FFFDF9] min-h-screen text-black">
      {/* Comprehensive Schema.org Structured Data */}
      <SeoSchema
        pageType="calculator"
        faqs={calculatorFaqs}
        pageTitle="Cary NC Roofing Calculator | Roof Replacement Cost Guide"
        pageDescription="Calculate realistic roof replacement costs for your Cary, NC home by ZIP code. Accurate pricing for 27511, 27512, 27513, 27518, 27519 with Wake County permit rules."
        canonicalUrl="https://www.caryncroofing.com/cary-nc-roofing-calculator.html"
      />

      {/* Structured Breadcrumbs */}
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
          <span className="text-[#F07020] font-bold">Cary NC Roofing Calculator</span>
        </div>
      </nav>

      {/* ================= HERO & CALCULATOR SECTION ================= */}
      <section className="py-10 md:py-16 bg-[#FFFDF9] border-b border-[#e8e4df]">
        <div className="container container-medium">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="kicker">REAL-TIME LOCAL ESTIMATION TOOL</div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
              Cary NC Roofing Calculator
            </h1>
            <p className="text-base md:text-lg text-black font-medium leading-relaxed">
              Calculate accurate roof replacement costs customized specifically for Cary, North Carolina. Factor in your exact home square footage, roof pitch, Cary ZIP code hub, and Wake County permit requirements.
            </p>
          </div>

          {/* THE CALCULATOR INTERACTIVE CARD */}
          <div className="bg-white border-2 border-[#e8e4df] rounded-3xl shadow-xl overflow-hidden mb-12">
            <div className="bg-[#1e2a3a] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#F07020] font-bold block mb-1">
                  Interactive Roofing Estimation Engine
                </span>
                <h2 
                  className="text-2xl md:text-3xl font-extrabold !text-white text-white tracking-tight"
                  style={{ color: '#ffffff' }}
                >
                  Estimate Your Roof Replacement Cost
                </h2>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-xs font-semibold backdrop-blur-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1D9E75] animate-ping"></span>
                <span className="!text-white text-white font-semibold" style={{ color: '#ffffff' }}>
                  Calibrated for Cary &amp; Wake County 2026-2027
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Calculator Controls (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. House Square Footage */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="houseSqFt" className="text-sm font-bold text-black">
                      1. Home Living Area (Square Footage):
                    </label>
                    <span className="text-base font-extrabold text-[#F07020]">
                      {houseSqFt.toLocaleString()} sq ft
                    </span>
                  </div>
                  <input
                    id="houseSqFt"
                    type="range"
                    min="800"
                    max="5000"
                    step="50"
                    value={houseSqFt}
                    onChange={(e) => setHouseSqFt(Number(e.target.value))}
                    className="w-full accent-[#F07020] cursor-pointer"
                  />
                  {/* Presets */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[1200, 1700, 2400, 3200, 4200].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setHouseSqFt(size)}
                        className={`px-2.5 py-1 text-xs rounded-lg font-bold border transition-all cursor-pointer ${
                          houseSqFt === size
                            ? 'bg-[#9A3412] text-white border-[#9A3412] !text-white'
                            : 'bg-[#FAF8F4] text-black border-[#e8e4df] hover:border-[#9A3412]'
                        }`}
                      >
                        {size === 1700 ? '1,700 (Cary Avg)' : `${size.toLocaleString()} sq ft`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Roofing Material */}
                <div>
                  <label htmlFor="materialSelect" className="text-sm font-bold text-black block mb-2">
                    2. Select Roofing Material:
                  </label>
                  <select
                    id="materialSelect"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full p-3 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl text-sm font-bold text-black focus:border-[#D9531E] focus:outline-hidden"
                  >
                    {Object.entries(materialsData).map(([key, data]) => (
                      <option key={key} value={key}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-black mt-1 font-medium">
                    {materialsData[material]?.desc}
                  </p>
                </div>

                {/* 3. Roof Pitch & Slope */}
                <div>
                  <label htmlFor="pitchSelect" className="text-sm font-bold text-black block mb-2">
                    3. Roof Pitch &amp; Slope:
                  </label>
                  <select
                    id="pitchSelect"
                    value={pitch}
                    onChange={(e) => setPitch(Number(e.target.value))}
                    className="w-full p-3 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl text-sm font-bold text-black focus:border-[#F07020] focus:outline-hidden"
                  >
                    <option value={1.05}>Flat / Very Low Slope (0/12 to 2/12)</option>
                    <option value={1.08}>Low Slope / Ranch (3/12 to 4/12)</option>
                    <option value={1.15}>Standard Gable / Hip (5/12 to 7/12) - Most Cary Homes</option>
                    <option value={1.25}>Moderate Steep (8/12 to 9/12)</option>
                    <option value={1.41}>Very Steep (10/12 to 12/12) - Amberly &amp; Preston Estates</option>
                  </select>
                </div>

                {/* 4. Stories & Complexity in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="storiesSelect" className="text-sm font-bold text-black block mb-2">
                      4. Number of Stories:
                    </label>
                    <select
                      id="storiesSelect"
                      value={stories}
                      onChange={(e) => setStories(Number(e.target.value))}
                      className="w-full p-3 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl text-sm font-bold text-black focus:border-[#F07020] focus:outline-hidden"
                    >
                      <option value={1.0}>1-Story (Standard Access)</option>
                      <option value={1.15}>2-Story (+15% Safety &amp; Hoisting)</option>
                      <option value={1.25}>3-Story (+25% Steep Hoisting)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="complexitySelect" className="text-sm font-bold text-black block mb-2">
                      5. Roof Architecture:
                    </label>
                    <select
                      id="complexitySelect"
                      value={complexity}
                      onChange={(e) => setComplexity(Number(e.target.value))}
                      className="w-full p-3 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl text-sm font-bold text-black focus:border-[#F07020] focus:outline-hidden"
                    >
                      <option value={1.0}>Simple Gable / A-Frame</option>
                      <option value={1.10}>Standard Hip Roof / L-Shaped</option>
                      <option value={1.20}>Complex (Dormers, Valleys, Turrets)</option>
                    </select>
                  </div>
                </div>

                {/* 5. Cary ZIP Code Hub */}
                <div>
                  <label htmlFor="zipSelect" className="text-sm font-bold text-black block mb-2">
                    6. Your Cary, NC ZIP Code:
                  </label>
                  <select
                    id="zipSelect"
                    value={selectedZip}
                    onChange={(e) => setSelectedZip(e.target.value)}
                    className="w-full p-3 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl text-sm font-bold text-black focus:border-[#F07020] focus:outline-hidden"
                  >
                    {CARY_ZIP_CODES.map((z) => (
                      <option key={z.zip} value={z.zip}>
                        ZIP {z.zip} - {z.areaName}
                      </option>
                    ))}
                  </select>
                  <div className="mt-2 p-3 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl text-xs flex items-center justify-between">
                    <div>
                      <span className="font-bold text-black">Local Hub: </span>
                      <span className="text-[#F07020] font-bold">{activeZip.areaName}</span>
                    </div>
                    <a href={`tel:${activeZip.phoneRaw}`} className="font-bold text-[#1D9E75] hover:underline">
                      📞 {activeZip.phone}
                    </a>
                  </div>
                </div>

                {/* 6. Add-Ons & Toggles */}
                <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-2xl space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-black block mb-1">
                    Town of Cary &amp; Disposal Options:
                  </span>
                  
                  <label className="flex items-center gap-3 cursor-pointer text-sm font-semibold text-black">
                    <input
                      type="checkbox"
                      checked={includeTearOff}
                      onChange={(e) => setIncludeTearOff(e.target.checked)}
                      className="w-4 h-4 accent-[#F07020]"
                    />
                    <span>Old Shingle Tear-Off &amp; Wake County Disposal ($0.65/sq ft)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer text-sm font-semibold text-black">
                    <input
                      type="checkbox"
                      checked={includePermit}
                      onChange={(e) => setIncludePermit(e.target.checked)}
                      className="w-4 h-4 accent-[#F07020]"
                    />
                    <span>Town of Cary Building Permit &amp; Final Inspection ($350)</span>
                  </label>

                  <div className="pt-2">
                    <div className="flex justify-between text-xs font-semibold text-black mb-1">
                      <span>Allowance for Plywood Decking Repairs:</span>
                      <span className="font-bold text-[#F07020]">{deckingPercent}% of deck</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      step="5"
                      value={deckingPercent}
                      onChange={(e) => setDeckingPercent(Number(e.target.value))}
                      className="w-full accent-[#F07020]"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Live Estimate Results Card (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#FAF8F4] p-6 sm:p-8 rounded-2xl border border-[#e8e4df]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-[#F07020]">
                      Estimated Investment
                    </span>
                    <span className="px-2.5 py-1 bg-white border border-[#e8e4df] rounded-md text-[11px] font-bold text-black">
                      ZIP {selectedZip}
                    </span>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs text-black font-extrabold block">Total Estimated Cost Range:</span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#1e2a3a] tracking-tight mt-1">
                      ${calculation.totalLow.toLocaleString()} – ${calculation.totalHigh.toLocaleString()}
                    </div>
                    <div className="text-sm font-bold text-[#0d684d] mt-1">
                      Midpoint Estimate: ${calculation.average.toLocaleString()}
                    </div>
                  </div>

                  {/* Surface Breakdown */}
                  <div className="bg-white p-4 rounded-xl border border-[#e8e4df] space-y-2.5 text-xs text-black mb-6">
                    <div className="flex justify-between border-b border-[#e8e4df] pb-2">
                      <span className="font-semibold text-black">Calculated Roof Surface:</span>
                      <span className="font-bold">{calculation.roofSqFt.toLocaleString()} sq ft</span>
                    </div>
                    <div className="flex justify-between border-b border-[#e8e4df] pb-2">
                      <span className="font-semibold text-black">Roofing Squares (100 sq ft):</span>
                      <span className="font-bold">{calculation.squares} Squares</span>
                    </div>
                    <div className="flex justify-between border-b border-[#e8e4df] pb-2">
                      <span className="font-semibold text-black">Material &amp; Labor:</span>
                      <span className="font-bold">${calculation.materialCostLow.toLocaleString()} – ${calculation.materialCostHigh.toLocaleString()}</span>
                    </div>
                    {includeTearOff && (
                      <div className="flex justify-between border-b border-[#e8e4df] pb-2">
                        <span className="font-semibold text-black">Tear-Off &amp; Wake Disposal:</span>
                        <span className="font-bold">${calculation.tearOffCost.toLocaleString()}</span>
                      </div>
                    )}
                    {includePermit && (
                      <div className="flex justify-between border-b border-[#e8e4df] pb-2">
                        <span className="font-semibold text-black">Town of Cary Permit:</span>
                        <span className="font-bold">${calculation.permitCost}</span>
                      </div>
                    )}
                    {deckingPercent > 0 && (
                      <div className="flex justify-between">
                        <span className="font-semibold text-black">Decking Repair ({deckingPercent}%):</span>
                        <span className="font-bold">${calculation.deckingCost.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  {/* Local Dispatch Notice */}
                  <div className="p-4 bg-white border border-[#D9531E]/40 rounded-xl mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">📍</span>
                      <strong className="text-xs font-bold text-black">
                        Direct Hub for ZIP {selectedZip}:
                      </strong>
                    </div>
                    <p className="text-xs text-black font-medium">
                      {activeZip.areaName} • Pinned Dispatch: {activeZip.landmarks[0]}
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <a
                    href={`tel:${activeZip.phoneRaw}`}
                    className="w-full btn btn-primary !bg-[#9A3412] hover:!bg-[#7C2D12] !py-3.5 !text-sm font-extrabold flex items-center justify-center gap-2 shadow-md !text-white"
                  >
                    <span>📞 Call Local Hub: {activeZip.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('book');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3.5 bg-[#9A3412] hover:bg-[#7C2D12] text-white font-extrabold text-sm rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    Lock In Quote &amp; Book Free On-Site Inspection →
                  </button>
                  <p className="text-[11px] text-center text-black font-semibold">
                    100% Free on-site laser measurement confirms exact roof plane dimensions &amp; scope.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= COMPLETE LOCAL GUIDE ARTICLE ================= */}
          <div className="bg-white border border-[#e8e4df] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            <div>
              <div className="kicker">CARY, NORTH CAROLINA ROOF COST GUIDE</div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight mb-4">
                Roof Replacement Cost in Cary, NC - Complete 2025 Local Guide by ZIP Code
              </h2>
              <div className="prose max-w-none text-black leading-relaxed space-y-4 text-base">
                <p>
                  If you own a home in Cary, North Carolina, and you're thinking about a new roof, you're probably seeing a lot of national averages online that don't really match Cary.
                </p>
                <p>
                  So let's talk about Cary specifically.
                </p>
                <p>
                  In Cary, NC, a full roof replacement for a typical 1,700 sq ft home costs between <strong>$8,500 and $13,500</strong> for architectural asphalt shingles. For larger homes or premium materials like metal or tile, most Cary homeowners pay <strong>$10,000 to $20,000</strong> total.
                </p>
                <p>
                  Why is Cary a little higher than the national average? It's Wake County. Permit costs, higher labor rates in the Triangle, insurance requirements, and HOA rules in neighborhoods like Preston and Amberly all add to the final price.
                </p>
                <p>
                  We work out of 5 local hubs across Cary, so we know exactly what each ZIP code costs right now.
                </p>
              </div>
            </div>

            {/* ZIP CODE BREAKDOWN */}
            <div className="pt-6 border-t border-[#e8e4df]">
              <h3 className="text-xl sm:text-2xl font-extrabold text-black mb-6">
                Roof Replacement Cost by ZIP Code in Cary, NC
              </h3>

              <div className="space-y-6">
                {/* 27511 */}
                <div className="p-6 bg-[#FAF8F4] border border-[#e8e4df] rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-black">
                      ZIP 27511 - Central &amp; Downtown Cary
                    </h4>
                    <span className="px-3 py-1 bg-[#F07020] text-white text-xs font-bold rounded-full self-start sm:self-auto">
                      Average: $8,000 - $12,000
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#F07020] mb-3">
                    📍 Pinned Hub: Downtown Cary Park &amp; Academy St Corridor, Cary, NC 27511
                  </p>
                  <p className="text-sm text-black leading-relaxed">
                    This is historic, central Cary. Around Downtown Cary Park, Academy Street, Chatham Street, and Dry Avenue. Most homes here were built in the 70s, 80s, and 90s. We see a lot of original 3-tab shingle roofs that are 20 to 25 years old and failing.
                  </p>
                  <p className="text-sm text-black leading-relaxed mt-2">
                    Because these homes are often single-story with easy access, labor is a bit lower. But we often find bad decking underneath due to age. Average cost in 27511: $8,000 - $12,000 for a full architectural shingle replacement. This hub also serves nearby areas of West Raleigh and Maynard Road.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#e8e4df] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold text-black/70">Central Cary Dispatch Hub:</span>
                    <a
                      href="tel:+19193359543"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F07020] hover:bg-[#d95e12] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
                    >
                      <span>📞 Call 27511 Hub: (919) 335-9543</span>
                    </a>
                  </div>
                </div>

                {/* 27512 */}
                <div className="p-6 bg-[#FAF8F4] border border-[#e8e4df] rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-black">
                      ZIP 27512 - East Cary &amp; Crossroads
                    </h4>
                    <span className="px-3 py-1 bg-[#F07020] text-white text-xs font-bold rounded-full self-start sm:self-auto">
                      Average: $9,000 - $13,000
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#F07020] mb-3">
                    📍 Pinned Hub: Crossroads Plaza &amp; Walnut St Commercial Corridor, Cary, NC 27512
                  </p>
                  <p className="text-sm text-black leading-relaxed">
                    This covers East Cary, Crossroads, Walnut Street, Buck Jones Road, and the border of Raleigh. Homes here are a mix of older ranches and newer subdivisions. Many houses near Crossroads Plaza have larger footprints and some low-slope sections that need special underlayment.
                  </p>
                  <p className="text-sm text-black leading-relaxed mt-2">
                    Homeowners here often upgrade from 3-tab to architectural shingles for better wind resistance near the Walnut Street corridor. Average cost in 27512: $9,000 - $13,000. From this hub, we also cover Garner and Southwest Raleigh.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#e8e4df] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold text-black/70">East Cary Dispatch Hub:</span>
                    <a
                      href="tel:+19197563165"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F07020] hover:bg-[#d95e12] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
                    >
                      <span>📞 Call 27512 Hub: (919) 756-3165</span>
                    </a>
                  </div>
                </div>

                {/* 27513 */}
                <div className="p-6 bg-[#FAF8F4] border border-[#e8e4df] rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-black">
                      ZIP 27513 - North Cary &amp; Preston
                    </h4>
                    <span className="px-3 py-1 bg-[#F07020] text-white text-xs font-bold rounded-full self-start sm:self-auto">
                      Average: $12,000 - $18,000
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#F07020] mb-3">
                    📍 Pinned Hub: Prestonwood Country Club &amp; Park West Village, Cary, NC 27513
                  </p>
                  <p className="text-sm text-black leading-relaxed">
                    This is North Cary - one of the most premium areas. Includes Preston, Preston Hollow, Prestonwood Country Club, Park West Village, High House Road, and Davis Drive. Most HOAs here do NOT allow cheap 3-tab shingles. They require architectural or designer shingles.
                  </p>
                  <p className="text-sm text-black leading-relaxed mt-2">
                    Homes are bigger here, usually 2,500 to 4,000 sq ft, many are two-story. So material and labor both cost more. Average cost in 27513: $12,000 - $18,000 for architectural shingles, $25,000+ for standing seam metal. This hub also serves Morrisville, West Cary, and Northwest Raleigh.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#e8e4df] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold text-black/70">North Cary Dispatch Hub:</span>
                    <a
                      href="tel:+19845204071"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F07020] hover:bg-[#d95e12] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
                    >
                      <span>📞 Call 27513 Hub: (984) 520-4071</span>
                    </a>
                  </div>
                </div>

                {/* 27518 */}
                <div className="p-6 bg-[#FAF8F4] border border-[#e8e4df] rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-black">
                      ZIP 27518 - South Cary &amp; Lochmere / Waverly Place
                    </h4>
                    <span className="px-3 py-1 bg-[#F07020] text-white text-xs font-bold rounded-full self-start sm:self-auto">
                      Average: $9,500 - $14,500
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#F07020] mb-3">
                    📍 Pinned Hub: 580 New Waverly Pl Ste 216, Cary, NC 27518 - Headquarters Hub
                  </p>
                  <p className="text-sm text-black leading-relaxed">
                    This is our headquarters. It covers South Cary including Lochmere, Kildaire Farms, Waverly Place, Regency, and Cary Parkway. This is the heart of Cary - lots of homes built from 1990 to 2005 that are all hitting replacement age at the same time.
                  </p>
                  <p className="text-sm text-black leading-relaxed mt-2">
                    We pull Town of Cary permits daily from this office. Average cost in 27518: $9,500 - $14,500. This location also handles calls from Apex and Holly Springs, which are just minutes south.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#e8e4df] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold text-black/70">Headquarters Dispatch Hub:</span>
                    <a
                      href="tel:+19199737931"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F07020] hover:bg-[#d95e12] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
                    >
                      <span>📞 Call 27518 HQ: (919) 973-7931</span>
                    </a>
                  </div>
                </div>

                {/* 27519 */}
                <div className="p-6 bg-[#FAF8F4] border border-[#e8e4df] rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-black">
                      ZIP 27519 - West Cary, Amberly &amp; Carpenter
                    </h4>
                    <span className="px-3 py-1 bg-[#F07020] text-white text-xs font-bold rounded-full self-start sm:self-auto">
                      Average: $11,000 - $16,500
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#F07020] mb-3">
                    📍 Pinned Hub: Amberly Village Center &amp; Green Level Church Rd, Cary, NC 27519
                  </p>
                  <p className="text-sm text-black leading-relaxed">
                    The fastest-growing ZIP in Cary. Includes Amberly, Carpenter Village, Green Level, Chatham County side, and new developments near Research Triangle Park. These are almost all large, two-story homes with steep pitches - 2,800 to 4,500 sq ft.
                  </p>
                  <p className="text-sm text-black leading-relaxed mt-2">
                    Steep pitch means more material, more safety equipment, and more time. Average cost in 27519: $11,000 - $16,500 for asphalt, more for metal. From here we also serve Apex, Morrisville, Durham, and Chapel Hill.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#e8e4df] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold text-black/70">West Cary Dispatch Hub:</span>
                    <a
                      href="tel:+19193359948"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F07020] hover:bg-[#d95e12] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
                    >
                      <span>📞 Call 27519 Hub: (919) 335-9948</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* TOWNS AND NEIGHBORHOODS */}
            <div className="pt-6 border-t border-[#e8e4df]">
              <h3 className="text-xl sm:text-2xl font-extrabold text-black mb-4">
                Towns and Neighborhoods We Serve Around Cary
              </h3>
              <p className="text-sm text-black leading-relaxed mb-4">
                We don't just stop at Cary city limits. From our 5 hubs, we cover the whole Triangle area organically:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-black">
                <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                  <strong className="text-black font-bold block mb-1">Inside Cary:</strong>
                  <span>Downtown Cary, Lochmere, Preston, Amberly, Carpenter, Kildaire Farm, Wessex, MacGregor Downs, Regency Park, Cary Park, Highcroft, Park West Village</span>
                </div>
                <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                  <strong className="text-black font-bold block mb-1">Immediate Neighbors:</strong>
                  <span>Apex - just south of 27518, Morrisville - north of 27513, Raleigh - especially West Raleigh and Southwest Raleigh bordering 27512, Durham - near 27519, Holly Springs - south of South Cary, Chapel Hill, Fuquay-Varina, and Garner.</span>
                </div>
              </div>
              <p className="text-xs text-black/70 font-semibold mt-3">
                If you're in any of these towns, you're still considered local to us.
              </p>
            </div>

            {/* WHAT CHANGES YOUR FINAL PRICE */}
            <div className="pt-6 border-t border-[#e8e4df]">
              <h3 className="text-xl sm:text-2xl font-extrabold text-black mb-4">
                What Changes Your Final Price in Cary?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-black">
                <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                  <strong className="text-black font-bold block mb-1">Town of Cary Permit:</strong>
                  <span>Cary requires a permit for a full replacement. Budget $250 to $450 for the permit and inspection.</span>
                </div>
                <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                  <strong className="text-black font-bold block mb-1">HOA Approval:</strong>
                  <span>In Preston, Amberly, and Lochmere, your HOA must approve the shingle color and type. This can add 2-3 days.</span>
                </div>
                <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                  <strong className="text-black font-bold block mb-1">Wake County Disposal Fees:</strong>
                  <span>Dumping old shingles in Wake County costs $0.50 to $0.75 per sq ft.</span>
                </div>
                <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
                  <strong className="text-black font-bold block mb-1">Two-Story &amp; Steep Roofs:</strong>
                  <span>Very common in 27519 and 27513. Adds 15% to 20% for safety harnesses and material hoisting.</span>
                </div>
                <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl sm:col-span-2">
                  <strong className="text-black font-bold block mb-1">Decking Damage:</strong>
                  <span>In older Cary homes in 27511, we often find soft plywood after tear-off. New decking is $2.50 to $3.50 per sq ft.</span>
                </div>
              </div>
            </div>

            {/* 7 FAQS */}
            <div className="pt-6 border-t border-[#e8e4df]">
              <h3 className="text-xl sm:text-2xl font-extrabold text-black mb-6">
                FAQs About Roof Replacement Cost in Cary, NC
              </h3>
              <div className="space-y-4">
                {calculatorFaqs.map((faq, idx) => (
                  <div key={idx} className="p-5 bg-[#FAF8F4] border border-[#e8e4df] rounded-2xl">
                    <h4 className="text-base font-bold text-black mb-2 flex items-start gap-2">
                      <span className="text-[#F07020] font-extrabold">{idx + 1}.</span>
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-sm text-black/90 leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM LINE */}
            <div className="pt-6 border-t border-[#e8e4df]">
              <div className="p-6 sm:p-8 bg-[#1e2a3a] text-white rounded-2xl shadow-lg border border-slate-700">
                <span className="text-xs uppercase tracking-widest text-[#F07020] font-bold block mb-2">
                  Transparent Local Commitment
                </span>
                <h3 
                  className="text-xl sm:text-2xl font-extrabold !text-white text-white mb-3"
                  style={{ color: '#ffffff' }}
                >
                  Bottom Line: Real Local Pricing for Cary Homeowners
                </h3>
                <p 
                  className="!text-white text-white text-sm sm:text-base leading-relaxed mb-6 font-medium"
                  style={{ color: '#ffffff' }}
                >
                  If you live in Cary, NC, don't go by national online calculators. Get a local quote from a roofer who knows your ZIP, your HOA, and your Town of Cary permit rules. A local inspection is free and takes 30 minutes - and it will give you a real price for your actual home, whether you're in Downtown Cary or out in Amberly Village.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`}
                    className="btn btn-primary !bg-[#9A3412] hover:!bg-[#7C2D12] !py-3 !px-6 !text-sm font-bold text-center !text-white shadow-md"
                    style={{ color: '#ffffff' }}
                  >
                    📞 Call Main Hotline: {COMPANY_DETAILS.mainPhone}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      const bookEl = document.getElementById('book');
                      if (bookEl) bookEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn btn-primary !mt-0 !bg-[#9A3412] hover:!bg-[#7C2D12] !text-white !py-3 !px-6 !text-sm font-bold text-center cursor-pointer shadow-md"
                    style={{ color: '#ffffff' }}
                  >
                    Request Free 30-Min On-Site Quote →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Booking & Consultation Form */}
      <BookingForm serviceName="Cary NC Roofing Calculator Estimate Consultation" />
    </article>
  );
};
