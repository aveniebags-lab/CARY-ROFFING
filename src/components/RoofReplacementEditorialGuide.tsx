import React from 'react';
import { COMPANY_DETAILS } from '../data/roofingData';

interface RoofReplacementEditorialGuideProps {
  onNavigate?: (path: string) => void;
  onOpenEstimator?: () => void;
}

export const RoofReplacementEditorialGuide: React.FC<RoofReplacementEditorialGuideProps> = ({ 
  onNavigate, 
  onOpenEstimator 
}) => {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-b border-[#e8e4df]">
      <div className="container container-medium">
        
        {/* ================= INTRODUCTORY ESSAY ================= */}
        <div className="mb-12">
          <div className="kicker">Homeowner &amp; Commercial Guide</div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight mb-4">
            Give Your Property a Stronger, More Reliable Roof
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-black/90 leading-relaxed font-normal">
            <p>
              A roof isn't just to cover a building. It protects everything under it. It keeps the inside comfortable, adds to the look of the property, and builds its long-term value too.
            </p>
            <p>
              But what happens when the roof gets old? Leaks start again and again. Or damage is so extensive that normal repairs just won't work anymore.
            </p>
            <p>
              That's when professional <strong>Roof Replacement Services in Cary, NC, USA</strong>... that's when you really need to think about it.
            </p>
            <p>
              For homeowners and business owners in Cary, a new roof is a big investment. It's not a small thing. The right replacement can fix old recurring problems once and for all. It gives better protection from Carolina storms, and you feel much more confident about your property.
            </p>
            <p>
              But every building is different. Its need is different. Some roofs need full replacement—completely. While on some... only the damaged part needs to be changed, and that is enough. If you understand what roofing options are available, then it becomes easy. You can decide by looking at your actual property condition, your budget, and your long-term plan.
            </p>
          </div>
        </div>

        {/* ================= WHEN SHOULD YOU ACTUALLY REPLACE IT? ================= */}
        <div className="mb-12 p-6 sm:p-8 bg-[#FAF8F4] border border-[#e8e4df] rounded-3xl">
          <h3 className="text-xl sm:text-2xl font-extrabold text-black mb-4">
            So, When Should You Actually Replace It?
          </h3>
          <div className="space-y-4 text-sm sm:text-base text-black/90 leading-relaxed font-normal">
            <p>
              Many property owners wait. They wait until a leak appears inside the building. Then they think about roof replacement.
            </p>
            <p>
              Unfortunately, when you see water damage on the ceiling, that means moisture has already gone through several layers of the roof, soaked the insulation, and reached the drywall.
            </p>
            <p>
              A roof needs closer attention when shingles start curling, metal panels start corroding, tiles become cracked, or leaks keep coming back even after previous patch repairs.
            </p>
            <p>
              Other warning signs are also there: damaged flashing around chimneys, granules coming off everywhere in your gutters, recurring moisture problems, and visible dipping or changes in the roofline.
            </p>
            <p>
              Age is another important thing, but it should not be the only factor. A well-maintained roof will perform differently, while a roof that had poor original installation or faced severe Wake County wind and hail will fail much faster.
            </p>
            <p>
              A professional on-site inspection can help. It can tell whether repairing the existing roof is still practical, or whether replacement will give better long-term value.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`}
              className="btn btn-primary !bg-[#9A3412] hover:!bg-[#7C2D12] !py-2.5 !px-5 !text-xs font-extrabold !text-white shadow-sm"
            >
              📞 Call for Free Roof Inspection: {COMPANY_DETAILS.mainPhone}
            </a>
            {onOpenEstimator && (
              <button
                type="button"
                onClick={onOpenEstimator}
                className="px-4 py-2.5 bg-[#9A3412] hover:bg-[#7C2D12] text-white font-extrabold text-xs rounded-xl transition-all cursor-pointer shadow-sm"
              >
                Estimate Cary Replacement Cost →
              </button>
            )}
          </div>
        </div>

        {/* ================= 14 COMPREHENSIVE REPLACEMENT SERVICES ================= */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="kicker">Full Breakdown of Available Options</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
              Our Roof Replacement Services in Cary, NC
            </h3>
            <p className="text-sm text-black/70 mt-1">
              From residential homes to commercial facilities, explore exactly how we handle every replacement category:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* 1. Complete Roof Replacement */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#F07020] text-white text-xs font-extrabold flex items-center justify-center">1</span>
                <h4 className="text-lg font-bold text-black">Complete Roof Replacement</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                Sometimes, the problem is not just in one small section. When roofing material deteriorates over a large area, leaks keep coming again and again, or the existing system has reached the end of its life... then Complete Roof Replacement may be the most right solution.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                This service means removing the existing roofing system completely down to the decking, inspecting the wood underneath, fixing damaged components, and installing brand new roofing materials, updated flashing, synthetic underlayment, and ridge ventilation where required. A complete replacement gives you a chance to address every roofing concern in one clean project.
              </p>
            </div>

            {/* 2. Partial Roof Replacement */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#1D9E75] text-white text-xs font-extrabold flex items-center justify-center">2</span>
                <h4 className="text-lg font-bold text-black">Partial Roof Replacement</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                A roof does not always need to be replaced from edge to edge. If damage is only in one section, and the rest of the roofing system is still in good condition, then Partial Roof Replacement may be worth thinking about.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                For example, one particular roof slope might get damaged from falling branches or severe weather while other sections are still working fine. Replacing only the affected area can restore protection without the expense of a full replacement. Before choosing this, our contractor checks surrounding materials, roof age, and product compatibility.
              </p>
            </div>

            {/* 3. Residential Roof Replacement */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#F07020] text-white text-xs font-extrabold flex items-center justify-center">3</span>
                <h4 className="text-lg font-bold text-black">Residential Roof Replacement</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                A home should feel safe and comfortable in every season. Residential Roof Replacement helps Cary homeowners when the roof gets old, worn out, or damaged.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                The work starts with inspecting the old roof, then talking about material: how it will look, how long it will last, and what the budget is. For most Cary homes, asphalt shingles just work. But on some homes metal suits, on some tile, and on some slate. Proper planning gives your home fresh curb appeal and customized protection.
              </p>
            </div>

            {/* 4. Commercial Roof Replacement */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#1D9E75] text-white text-xs font-extrabold flex items-center justify-center">4</span>
                <h4 className="text-lg font-bold text-black">Commercial Roof Replacement</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                Commercial properties need a different approach because of size, design, rooftop HVAC equipment, and drainage. Offices, retail buildings, and warehouses often use flat or low-slope roofs requiring specialized materials and installation methods.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                Commercial Roof Replacement focuses on choosing a system that fits your building structure and budget while maintaining daily business operations. Clear scheduling, strict safety measures, and daily contractor communication help keep disturbance minimal during construction.
              </p>
            </div>

            {/* 5. Flat Roof Replacement */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#F07020] text-white text-xs font-extrabold flex items-center justify-center">5</span>
                <h4 className="text-lg font-bold text-black">Flat Roof Replacement</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                Flat roofs and low-slope roofs are a little tricky. They need proper waterproofing and drainage designed carefully. When water keeps ponding on the surface, seams fail, or membrane deteriorates over a large area, replacement becomes necessary.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                We evaluate membrane, drainage, insulation, and roof decking. Depending on the building, single-ply TPO/EPDM membranes or modified bitumen are selected. Proper installation ensures water flows cleanly toward scuppers and drains without early roof failures.
              </p>
            </div>

            {/* 6. Metal Roof Replacement */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#1D9E75] text-white text-xs font-extrabold flex items-center justify-center">6</span>
                <h4 className="text-lg font-bold text-black">Metal Roof Replacement</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                Metal roofing looks clean, sharp, and modern. If installation is right and maintenance is done properly, it lasts for decades. But with time, metal panels can corrode, fasteners become loose, seams get damaged, or chronic leaks develop.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                Metal Roof Replacement means thoroughly assessing the substrate and installing compatible standing seam panels and concealed clips. We pay meticulous attention to perimeter flashing, underlayment, and water deflection for reliable performance.
              </p>
            </div>

            {/* 7. Shingle Roof Replacement */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#F07020] text-white text-xs font-extrabold flex items-center justify-center">7</span>
                <h4 className="text-lg font-bold text-black">Shingle Roof Replacement</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                Shingles are the most common choice across Cary homes. They come in rich color profiles and architectural dimensions, making it easy to match your home's exterior aesthetic.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                Over time, granules fall off, shingles crack, curl, or become loose from storms. When damage spreads across major sections, Shingle Roof Replacement is far more practical than patching single shingles repeatedly. We inspect the deck and underlayment before installing new architectural shingles for superior weather resistance.
              </p>
            </div>

            {/* 8. Tile Roof Replacement */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#1D9E75] text-white text-xs font-extrabold flex items-center justify-center">8</span>
                <h4 className="text-lg font-bold text-black">Tile Roof Replacement</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                Tile roofing gives a distinctive, upscale style with clay or concrete profiles selected for appearance and heavy durability.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                When tiles crack, breakage spreads, underlayment deteriorates, or leaks emerge beneath the visible surface, replacement is essential. Tile is heavy, so our contractor checks structural load capacity first, along with flashing and waterproofing layers to ensure long-term stability.
              </p>
            </div>

            {/* 9. Slate Roof Replacement */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#F07020] text-white text-xs font-extrabold flex items-center justify-center">9</span>
                <h4 className="text-lg font-bold text-black">Slate Roof Replacement</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                Slate roofing has natural, timeless beauty that can last for generations. However, slate is a specialized natural stone that requires experienced craftsmen.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                When damage is extensive across the slate covering or supporting timbers, Slate Roof Replacement is needed. Because slate tiles can be fragile, proper copper nail fastening and structural assessment determine whether targeted repairs or broader replacement is the right approach.
              </p>
            </div>

            {/* 10. Asphalt Roof Replacement */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#1D9E75] text-white text-xs font-extrabold flex items-center justify-center">10</span>
                <h4 className="text-lg font-bold text-black">Asphalt Roof Replacement</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                Asphalt shingles remain the most popular choice because they are available in a variety of styles, warranties, and price ranges, offering a practical balance between cost and curb appeal.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                Replacement is needed when shingles show widespread deterioration, recurring leaks, or when the system has reached the end of its useful life. We evaluate shingles, underlayment, ventilation, and decking to ensure full manufacturer warranty protection.
              </p>
            </div>

            {/* 11. Old Roof Replacement */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#F07020] text-white text-xs font-extrabold flex items-center justify-center">11</span>
                <h4 className="text-lg font-bold text-black">Old Roof Replacement</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                An old roof can look fine from the ground even when vital protective components underneath have started deteriorating. Over time, materials lose their weatherproofing oils, and small problems emerge more frequently.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                Replacing an aging roof before widespread failure occurs makes planning easier: you can compare materials calmly and address underlying decking issues in a controlled, scheduled manner based on actual roof condition.
              </p>
            </div>

            {/* 12. Damaged Roof Replacement */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#1D9E75] text-white text-xs font-extrabold flex items-center justify-center">12</span>
                <h4 className="text-lg font-bold text-black">Damaged Roof Replacement</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                Roof damage happens for many reasons: long-term wear, falling branches, severe weather, poor previous workmanship, or neglected maintenance.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                When damage compromises the integrity of the whole roofing system, a new roof is the most practical solution. We assess affected materials down to the rafters to select a solution that permanently fixes the root cause rather than simply covering it up.
              </p>
            </div>

            {/* 13. Replacing a Roof After Storm Damage */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#F07020] text-white text-xs font-extrabold flex items-center justify-center">13</span>
                <h4 className="text-lg font-bold text-black">Replacing a Roof After Storm Damage</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                One bad storm—that's all it takes sometimes. Shingles get loose, crack, or fly off into the yard. Wind gets under the flashing, hail bruises the fiberglass mat, a heavy branch comes down, and the wood underneath gets exposed to rain.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                At that point, storm-damaged roof replacement makes far more sense than repeated patching. We send crews up with safety harnesses, take detailed photos of every affected plane for your insurance adjuster, and provide line-item written estimates to streamline the entire claim process.
              </p>
            </div>

            {/* 14. Overlay Roofing */}
            <div className="p-6 bg-white border border-[#e8e4df] rounded-2xl shadow-xs hover:border-[#F07020] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#1D9E75] text-white text-xs font-extrabold flex items-center justify-center">14</span>
                <h4 className="text-lg font-bold text-black">Overlay Roofing</h4>
              </div>
              <p className="text-sm text-black/85 leading-relaxed">
                Overlay roofing is straightforward: instead of ripping the old shingles off, you install the new layer right over top. People consider it because it's faster and less messy, but it cannot be done on just any roof.
              </p>
              <p className="text-sm text-black/85 leading-relaxed mt-2">
                The deck must be solid, and building codes must allow it (NC code forbids overlays if two layers already exist). If water is trapped underneath or the wood is soft, putting another layer on top invites serious rot and voids warranties. We help homeowners weigh tear-off vs overlay transparently.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CHOOSING THE RIGHT ROOFING MATERIAL ================= */}
        <div className="mb-12 p-6 sm:p-8 bg-[#FAF8F4] border border-[#e8e4df] rounded-3xl">
          <h3 className="text-xl sm:text-2xl font-extrabold text-black mb-3">
            Choosing the Right Roofing Material for Your Property
          </h3>
          <p className="text-sm sm:text-base text-black/90 leading-relaxed mb-4">
            Picking a new roof isn't just about how it looks. You've got to think about your house first: how it's built, how steep the roof is, what you can comfortably afford, and how much upkeep you're willing to do later.
          </p>
          <p className="text-sm font-bold text-black mb-3">
            Here are the main options Cary homeowners and business owners choose:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="p-4 bg-white border border-[#e8e4df] rounded-xl">
              <strong className="text-sm text-[#F07020] block mb-1">Asphalt Shingles:</strong>
              <p className="text-xs text-black/80 leading-relaxed">
                What most Cary homes have. Works for almost any house style and provides dependable performance at a practical price point.
              </p>
            </div>
            <div className="p-4 bg-white border border-[#e8e4df] rounded-xl">
              <strong className="text-sm text-[#F07020] block mb-1">Metal Roofing:</strong>
              <p className="text-xs text-black/80 leading-relaxed">
                Clean, contemporary standing seam panels. Highly durable, storm-resistant, and available in modern or traditional profiles.
              </p>
            </div>
            <div className="p-4 bg-white border border-[#e8e4df] rounded-xl">
              <strong className="text-sm text-[#F07020] block mb-1">Tile Roofing:</strong>
              <p className="text-xs text-black/80 leading-relaxed">
                Looks great with Mediterranean or custom styling, but it is heavy. Your house must have sufficient structural framing to hold the weight.
              </p>
            </div>
            <div className="p-4 bg-white border border-[#e8e4df] rounded-xl">
              <strong className="text-sm text-[#F07020] block mb-1">Slate Roofing:</strong>
              <p className="text-xs text-black/80 leading-relaxed">
                Premium natural stone requiring specialized installers. Can last a century if handled with care, but brittle if walked on incorrectly.
              </p>
            </div>
            <div className="p-4 bg-white border border-[#e8e4df] rounded-xl sm:col-span-2 lg:col-span-2">
              <strong className="text-sm text-[#F07020] block mb-1">Flat Roofing Systems (TPO / EPDM):</strong>
              <p className="text-xs text-black/80 leading-relaxed">
                Engineered specifically for low-slope and commercial decks. Waterproofing and positive slope drainage are everything here.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-black/80 italic bg-white p-3 rounded-xl border border-[#e8e4df]">
            💬 <strong>Contractor Tip:</strong> Honestly, just talk to a good local contractor. We'll tell you straight what's good and what's not for each type, and which one actually makes sense for your property here in Cary, NC.
          </p>
        </div>

        {/* ================= WHAT AFFECTS THE COST OF ROOF REPLACEMENT? ================= */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-extrabold text-black mb-3">
            What Affects the Cost of Roof Replacement?
          </h3>
          <p className="text-sm sm:text-base text-black/90 leading-relaxed mb-4">
            Every roof costs different. There's no one price that fits every house. It mostly depends on factors like these:
          </p>

          <div className="space-y-3 mb-6">
            <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl flex items-start gap-3">
              <span className="text-lg text-[#F07020]">📐</span>
              <div>
                <strong className="text-sm text-black block mb-0.5">Roof Size &amp; Complexity:</strong>
                <p className="text-xs text-black/80 leading-relaxed">
                  Bigger roof, more square footage, more materials and labor. Simple. And if your roof has a bunch of steep slopes, hips, valleys, skylights, and dormers, that adds extra staging and labor time.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl flex items-start gap-3">
              <span className="text-lg text-[#F07020]">🪵</span>
              <div>
                <strong className="text-sm text-black block mb-0.5">Existing Roof Condition:</strong>
                <p className="text-xs text-black/80 leading-relaxed">
                  This is where surprises happen. If the plywood decking underneath is rotted or moisture is trapped in the rafters, that has to be fixed before the new roof goes on.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl flex items-start gap-3">
              <span className="text-lg text-[#F07020]">🛡️</span>
              <div>
                <strong className="text-sm text-black block mb-0.5">Material Selection:</strong>
                <p className="text-xs text-black/80 leading-relaxed">
                  Asphalt shingles are one price. Metal is another. Tile and natural slate cost more, not just for the material itself but for specialized installation craftsmanship.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl flex items-start gap-3">
              <span className="text-lg text-[#F07020]">🚛</span>
              <div>
                <strong className="text-sm text-black block mb-0.5">Removal &amp; Disposal:</strong>
                <p className="text-xs text-black/80 leading-relaxed">
                  If they have to tear off multiple old layers, that's extra labor and Wake County landfill disposal fees. An overlay skips tear-off costs, if your roof qualifies.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl flex items-start gap-3">
              <span className="text-lg text-[#F07020]">🪜</span>
              <div>
                <strong className="text-sm text-black block mb-0.5">Accessibility &amp; Project Requirements:</strong>
                <p className="text-xs text-black/80 leading-relaxed">
                  Steep two-story roofs common in Preston or Amberly require safety harnesses, scaffolding, and extra time to hoist bundles safely, which is reflected in the quote.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white border-2 border-[#1D9E75]/30 rounded-2xl">
            <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
              💡 <strong>Our Advice:</strong> Always get your estimate in writing. The quote should clearly state what's included: materials, tear-off, decking replacement per sheet allowance, cleanup, timeline, and manufacturer warranty. Then compare 2 or 3 contractors side by side. That's the only way you really know who is giving you genuine local value.
            </p>
          </div>
        </div>

        {/* ================= HOW TO PREPARE FOR A ROOF REPLACEMENT ================= */}
        <div className="mb-12 p-6 sm:p-8 bg-[#FAF8F4] border border-[#e8e4df] rounded-3xl">
          <h3 className="text-xl sm:text-2xl font-extrabold text-black mb-3">
            How to Prepare for a Roof Replacement?
          </h3>
          <p className="text-sm sm:text-base text-black/90 leading-relaxed mb-4">
            Honestly, just get a few small things done before the crew arrives. It saves a lot of headache later:
          </p>

          <ul className="space-y-2.5 text-xs sm:text-sm text-black/85 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-[#F07020] font-bold">✓</span>
              <span><strong>Move your car:</strong> Park it down the street or somewhere away from the driveway so old debris won't touch it and you aren't blocked in.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F07020] font-bold">✓</span>
              <span><strong>Clear the driveway:</strong> The crew needs space for their work trucks, dump trailer, and material pallets.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F07020] font-bold">✓</span>
              <span><strong>Cover items in the attic:</strong> If you have breakables stored in the attic, cover them with sheets. Nailing causes vibration and dust falls.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F07020] font-bold">✓</span>
              <span><strong>Keep kids and pets inside:</strong> Seriously. Not a good day to let them run around the yard while old shingles are coming down.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F07020] font-bold">✓</span>
              <span><strong>Talk to your contractor before day one:</strong> Ask when they start in the morning, how loud it will be, and what the contingency is if summer thunderstorms pop up.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F07020] font-bold">✓</span>
              <span><strong>Ask about cleanup:</strong> Nails get everywhere, so make sure they are doing a triple magnetic roller sweep of the lawn and driveway.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F07020] font-bold">✓</span>
              <span><strong>Check the warranty and payment papers again:</strong> Read it once before work starts so everyone is clear on scope and final expectations.</span>
            </li>
          </ul>
        </div>

        {/* ================= CLOSING CTA ESSAY ================= */}
        <div className="p-6 sm:p-8 bg-[#1e2a3a] text-white rounded-3xl shadow-xl">
          <div className="kicker !text-[#FB923C] font-extrabold">Ready for Lasting Peace of Mind?</div>
          <h3 className="text-xl sm:text-3xl font-extrabold !text-white text-white mb-4" style={{ color: '#ffffff' }}>
            Give Your Property a Fresh Start with the Right Roof
          </h3>
          <div className="space-y-4 text-sm sm:text-base !text-white leading-relaxed font-normal" style={{ color: '#ffffff' }}>
            <p style={{ color: '#ffffff' }}>
              A new roof isn't just about changing the look. Honestly, it's a chance. A chance to get rid of all those recurring leaks and stress once and for all.
            </p>
            <p style={{ color: '#ffffff' }}>
              No more leaks. Better storm protection. And the best part? You get to choose the material yourself—whatever actually suits your house and neighborhood guidelines.
            </p>
            <p style={{ color: '#ffffff' }}>
              Now look, it doesn't matter what kind of job it is. It always comes down to one thing first: get it checked properly. What is actually wrong up there? Do you need a Complete Roof Replacement, a Residential Roof Replacement, a Commercial Flat Roof, or a Storm-Damaged Roof Replacement? The start is the same for all of them: don't rush into it blindly.
            </p>
            <p style={{ color: '#ffffff' }}>
              If you're searching for Roof Replacement Services in Cary, NC, USA, here's a simple tip: find a decent local contractor who knows Cary permits and HOA rules. It just makes everything easier: less tension, no unnecessary confusion, and the work gets done right the first time.
            </p>
            <p style={{ color: '#ffffff' }}>
              And one more thing we always say: don't wait for the leak to come back again. Once water starts coming through the ceiling, that's when people panic and make rushed decisions. Get it looked at now, check your options, and pick what feels right so you can stay stress-free for the next 30 to 50 years.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`}
              className="btn btn-primary !bg-[#9A3412] hover:!bg-[#7C2D12] !py-3 !px-6 !text-sm font-extrabold text-center !text-white shadow-md"
              style={{ color: '#ffffff' }}
            >
              📞 Call Cary Dispatch Hotline: {COMPANY_DETAILS.mainPhone}
            </a>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('book');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-primary !mt-0 !bg-[#9A3412] hover:!bg-[#7C2D12] !text-white !py-3 !px-6 !text-sm font-extrabold text-center cursor-pointer shadow-md"
              style={{ color: '#ffffff' }}
            >
              Request Free On-Site Inspection &amp; Estimate →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
