import React, { useState } from 'react';
import { COMPANY_DETAILS, CARY_ZIP_CODES } from '../data/roofingData';
import { SeoSchema } from './SeoSchema';
import { BookingForm } from './BookingForm';

interface StandingSeamMetalRoofPageProps {
  onNavigate: (page: string) => void;
}

export const StandingSeamMetalRoofPage: React.FC<StandingSeamMetalRoofPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'How long does a standing seam metal roof last?',
      a: "If it is installed in the proper way, it can easily last 40 to 70 years. Some roofs go even more than that. It all depends on which metal you use, how good the coating quality is, and the weather in your area. Just check it one time in a year, the roof will last a long time."
    },
    {
      q: 'How much does a standing seam roof cost per square foot?',
      a: "In the US, it normally costs around $9 to $16 per square foot with full installation. Final price can change a bit. It depends on which material you pick, how difficult your roof design is, labor charges, and if the old roof needs to be removed first."
    },
    {
      q: 'Does a metal roof make a house hotter?',
      a: "No, it does not make the house hot. This is just an old myth. If the roof has a good reflective finish and proper insulation under it, it actually keeps the heat out. Your house stays cooler and cooling cost also goes down."
    },
    {
      q: 'Can you walk on a standing seam roof?',
      a: "Yes you can, but you have to be very careful. If the roof is wet or steep, it gets very slippery and dangerous. A wrong step can also make a dent on the panel or spoil the finish. So for checking or any repair work, it's better to call a professional roofer."
    },
    {
      q: 'How often does metal roof need maintenance?',
      a: "You don't need too much maintenance. Just check it one time in a year, and also after heavy rain or a big storm. Clear any leaves or dust sitting on it, and see if flashing is fine and water is draining properly. That's enough; it will save you from big repair cost later."
    }
  ];

  return (
    <article className="standing-seam-page pb-16">
      {/* Schema.org Structured Data with FAQs and Geo Localization */}
      <SeoSchema
        pageType="service"
        faqs={faqs.map(f => ({ question: f.q, answer: f.a }))}
        pageTitle="Why More Homeowners Are Choosing Standing Seam Metal Roof Cary NC USA | CaryRoofing"
        pageDescription="Why More Homeowners Are Choosing Standing Seam Metal Roof Cary NC USA: concealed fasteners, 50+ year durability, energy savings, modern aesthetics, cost analysis, and local Cary NC installation."
        canonicalUrl="https://caryncroofing.com/Why%20More%20Homeowners%20Are%20Choosing%20Standing%20Seam%20Metal%20Roof.html"
        image="https://caryncroofing.com/images/standing-seam-metal-roof-cary-nc.webp"
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F4] border-b border-[#e8e4df] py-3 text-xs text-black font-semibold">
        <div className="container flex items-center gap-2">
          <button 
            type="button" 
            onClick={() => onNavigate('home')}
            className="hover:text-[#9A3412] cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <button
            type="button"
            onClick={() => onNavigate('metal-roofing-services-cary-nc-usa.html')}
            className="hover:text-[#9A3412] cursor-pointer"
          >
            Metal Roofing
          </button>
          <span>/</span>
          <span className="text-[#9A3412] font-bold">Standing Seam Metal Roof</span>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="bg-gradient-to-b from-[#FAF8F4] to-[#FFFDF9] py-10 md:py-16 border-b border-[#e8e4df]">
        <div className="container max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8F8F1] border border-[#1D9E75]/30 text-[#0d684d] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0d684d] animate-pulse"></span>
            Town of Cary &amp; Wake County Architectural Metal Roofing Guide
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141c27] leading-tight tracking-tight mb-6">
            Why More Homeowners Are Choosing Standing Seam Metal Roof Cary NC USA
          </h2>

          <div className="text-base sm:text-lg text-[#1e293b] leading-relaxed space-y-4 mb-8">
            <p>
              A quality roof does more than keep out the elements; it provides security, comfort, and peace of mind. It helps your home efficient and strong. It makes the house look better from the outside, and it also adds to the value of your property over time. This is the reason a lot of homeowners these days are moving away from the old asphalt shingles (explore our{' '}
              <button 
                type="button" 
                onClick={() => onNavigate('shingle-tile-slate-roofing-cary-nc-usa.html')}
                className="text-[#9A3412] font-bold underline hover:text-[#7C2D12] cursor-pointer"
              >
                Asphalt Shingles vs. Metal Comparison
              </button>
              ) and going for{' '}
              <button 
                type="button" 
                onClick={() => onNavigate('metal-roofing-services-cary-nc-usa.html')}
                className="text-[#9A3412] font-bold underline hover:text-[#7C2D12] cursor-pointer"
              >
                architectural standing seam metal roofing in Cary, NC
              </button>{' '}
              instead. It looks neat and modern, which people really like.
            </p>
            <p>
              The best part is that the screws and fasteners are hidden under the panels, so the roof stays much more protected from bad weather. The panels are long with those raised seams on top, and you don't have to do much maintenance on it. So if you want a roof that looks nice and will keep working well for many years without much hassle, this is a pretty good option.
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`}
              className="btn btn-primary !bg-[#9A3412] hover:!bg-[#7C2D12] !text-white text-base font-extrabold px-6 py-3.5 shadow-md flex items-center gap-2"
            >
              <span>📞</span> Call Cary Hotline: {COMPANY_DETAILS.mainPhone}
            </a>
            <a 
              href="#quote-section"
              className="btn btn-secondary !bg-[#9A3412] hover:!bg-[#7C2D12] !text-white text-base font-extrabold px-6 py-3.5 shadow-md flex items-center gap-2"
            >
              <span>📋</span> Get Free Standing Seam Quote
            </a>
          </div>

          {/* Localized Geo Address Verification Strip */}
          <div className="mt-8 p-3.5 bg-white border border-[#e8e4df] rounded-xl flex flex-wrap items-center justify-between text-xs text-[#475569] gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[#9A3412] font-bold">📍 Headquarters:</span>
              <span>580 New Waverly Pl Ste 216, Cary, NC 27518</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#0d684d] font-bold">🌐 Geo Coordinates:</span>
              <span>35.7368° N, -78.7832° W</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#9A3412] font-bold">⏱️ Service Area:</span>
              <span>Cary ZIPs: 27511, 27512, 27513, 27518, 27519</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="container max-w-5xl pt-10 space-y-14">

        {/* ================= LOCATION ZIP CODES & DIRECT MOBILE NUMBERS ================= */}
        <section id="dispatch" className="section bg-white rounded-2xl border border-[#e8e4df] p-6 sm:p-10 shadow-xs">
          <div className="section-header text-center mb-8">
            <div className="kicker text-[#9A3412] font-bold uppercase tracking-wider text-xs mb-2">Local Cary Dispatch Routing</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141c27]">
              Fast Wake County Dispatch <br />
              <span className="font-serif-accent text-[#9A3412]">Select Zip Code &amp; Call Now</span>
            </h2>
            <p className="mt-2 text-black font-medium text-sm sm:text-base max-w-2xl mx-auto">
              Click your local zip code below to view covered neighborhoods, embedded map location, and connect directly with our active Cary, NC standing seam metal roof dispatch line.
            </p>
          </div>

          <div className="grid grid-3 mb-2 gap-6">
            {CARY_ZIP_CODES.map((item) => (
              <div className="card bg-[#FAF8F4] border border-[#e8e4df] rounded-xl p-5 flex flex-col justify-between" key={item.zip}>
                <div>
                  <div className="kicker text-xs font-bold text-[#9A3412] uppercase mb-1">ZIP {item.zip}</div>
                  <h3 className="text-lg font-bold text-[#141c27] mb-2">{item.areaName}</h3>
                  <div className="card-list text-xs text-[#1e293b] space-y-1 mb-3">
                    <p className="font-semibold text-black">Key Neighborhoods &amp; Landmarks:</p>
                    {item.neighborhoods.slice(0, 3).map((n, i) => (
                      <p key={i}>• {n}</p>
                    ))}
                    <p className="text-[#64748b]">📍 {item.landmarks[0]}</p>
                  </div>
                </div>
                <div>
                  <div className="map-container mb-3 rounded-lg overflow-hidden border border-[#e8e4df] h-36">
                    <iframe 
                      title={`Map ${item.zip} - Standing Seam Metal Roof`}
                      src={`https://maps.google.com/maps?q=${item.lat},${item.lng}&z=13&output=embed`}
                      loading="lazy"
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>
                  <div className="cta-notice text-[11px] font-bold text-[#0d684d] mb-2 text-center bg-[#E8F8F1] py-1 rounded">
                    Serving {item.zip} Residents Now
                  </div>
                  <a href={`tel:${item.phoneRaw}`} className="btn btn-primary w-full !bg-[#9A3412] hover:!bg-[#7C2D12] !text-white font-extrabold shadow-sm py-2.5 text-sm flex items-center justify-center gap-1.5 rounded-lg">
                    📞 Call {item.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 1: WHAT IS A STANDING SEAM METAL ROOF */}
        <section className="bg-white rounded-2xl border border-[#e8e4df] p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider">
                System Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141c27]">
                What Is a Standing Seam Metal Roof?
              </h2>
              <div className="text-sm sm:text-base text-[#1e293b] leading-relaxed space-y-3">
                <p>
                  Standing seam metal roof is made of long metal sheets. These sheets go from the top of the roof down to the bottom edge. One sheet is joined with the other sheet, and the joint part is a little raised up. That raised joint is called seam.
                </p>
                <p>
                  In other metal roofs the screws are seen from outside but in this roof screws are not seen. Panels are fixed with clips and those clips are hidden inside the seam because of this the roof looks clean. Also in rain and sun does not hit the screws directly, so they stay safe for long time.
                </p>
                <p>
                  Mostly this roof is made of steel or aluminum and Copper is also used but it is costly. Colors and designs are many, so people use it for new houses, old style houses and also for farm houses. In short this roof is strong, looks simple and clean, and it works well in every weather. All panel engineering aligns with the permitting and structural requirements enforced by the{' '}
                  <a 
                    href="https://www.carync.gov/services-permits/permits-inspections" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#9A3412] font-bold underline hover:text-[#7C2D12]"
                  >
                    Town of Cary Inspections &amp; Permits Department
                  </a>{' '}
                  and the{' '}
                  <a 
                    href="https://www.ncdoi.gov/osfm/engineering-and-codes/nc-state-building-codes" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#9A3412] font-bold underline hover:text-[#7C2D12]"
                  >
                    North Carolina State Building Code
                  </a>.
                </p>
              </div>

              {/* Technical Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3">
                <div className="bg-[#FAF8F4] p-2.5 rounded-lg border border-[#e8e4df] text-center">
                  <div className="text-xs font-bold text-[#9A3412]">Hidden Clips</div>
                  <div className="text-[11px] text-[#64748b]">Zero exposed screws</div>
                </div>
                <div className="bg-[#FAF8F4] p-2.5 rounded-lg border border-[#e8e4df] text-center">
                  <div className="text-xs font-bold text-[#9A3412]">Raised Seams</div>
                  <div className="text-[11px] text-[#64748b]">1.5" to 2" interlock</div>
                </div>
                <div className="bg-[#FAF8F4] p-2.5 rounded-lg border border-[#e8e4df] text-center">
                  <div className="text-xs font-bold text-[#9A3412]">Steel &amp; Aluminum</div>
                  <div className="text-[11px] text-[#64748b]">24-gauge Galvalume</div>
                </div>
                <div className="bg-[#FAF8F4] p-2.5 rounded-lg border border-[#e8e4df] text-center">
                  <div className="text-xs font-bold text-[#9A3412]">50+ Year Life</div>
                  <div className="text-[11px] text-[#64748b]">Generational durability</div>
                </div>
              </div>
            </div>

            {/* Image 1: Standing Seam Profile */}
            <div className="lg:col-span-5">
              <figure className="m-0 rounded-xl overflow-hidden border border-[#e8e4df] bg-[#FAF8F4] shadow-sm">
                <img 
                  src="/images/standing-seam-metal-roof-cary-nc.webp" 
                  alt="Cary NC Standing Seam Metal Roof with concealed fasteners and vertical raised seams - CaryRoofing at 580 New Waverly Pl Ste 216, Cary NC 27518"
                  className="w-full h-auto object-cover max-h-80"
                  loading="eager"
                  width="1400"
                  height="933"
                />
                <figcaption className="p-3 bg-[#FAF8F4] border-t border-[#e8e4df] text-[11px] text-[#475569] leading-tight flex items-center justify-between">
                  <span><strong>Concealed Fastener Profile:</strong> Precision vertical seams</span>
                  <span className="text-[#9A3412] font-semibold">Cary, NC</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY ARE MORE HOMEOWNERS CHOOSING STANDING SEAM */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider">
              Benefits &amp; Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141c27]">
              Why Are More Homeowners Choosing Standing Seam Metal Roofing?
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b]">
              A lot of homeowners are now going for standing seam metal roofs, and it's not just because they look good. They last for years don't need much maintenance, and honestly it's a solid investment if you want a roof that will protect your home for a long time without giving you trouble.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">

            {/* 1. Long-Lasting Durability */}
            <div className="bg-white p-6 rounded-2xl border border-[#e8e4df] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F4] border border-[#e8e4df] flex items-center justify-center text-[#9A3412] font-black text-lg mb-3">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#141c27] mb-2">
                  Long-Lasting Durability
                </h3>
                <p className="text-sm text-[#1e293b] leading-relaxed">
                  A standing seam metal roof can last for many years if good material is used and it's installed the right way. The panels are strong enough to handle sun, rain, and changes in temperature every day. That's why many homeowners pick it when they want a roof for the long term.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f1efe9] text-xs font-semibold text-[#0d684d] flex items-center gap-1.5">
                <span>✓</span> 40 to 70+ year engineered lifespan in NC climate
              </div>
            </div>

            {/* 2. Excellent Weather Protection with Image */}
            <div className="bg-white p-6 rounded-2xl border border-[#e8e4df] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F4] border border-[#e8e4df] flex items-center justify-center text-[#9A3412] font-black text-lg mb-3">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#141c27] mb-2">
                  Excellent Weather Protection
                </h3>
                <p className="text-sm text-[#1e293b] leading-relaxed mb-4">
                  Because the seams are raised and the screws are hidden, rainwater runs off easily and there are very few places where a leak can start. If it's installed properly, this roof can also handle strong winds and rain that blows in with the wind without any problem.
                </p>
              </div>
              <figure className="m-0 rounded-lg overflow-hidden border border-[#e8e4df]">
                <img 
                  src="/images/standing-seam-metal-roof-weather-protection-cary-nc.webp" 
                  alt="Heavy North Carolina rain sheeting smoothly off a durable standing seam metal roof without leak vulnerabilities - Cary NC"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                  width="1400"
                  height="933"
                />
                <figcaption className="p-2 bg-[#FAF8F4] text-[11px] text-[#475569]">
                  Rapid rain runoff without exposed screw penetration leaks
                </figcaption>
              </figure>
            </div>

            {/* 3. A Clean and Modern Appearance with Image */}
            <div className="bg-white p-6 rounded-2xl border border-[#e8e4df] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F4] border border-[#e8e4df] flex items-center justify-center text-[#9A3412] font-black text-lg mb-3">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#141c27] mb-2">
                  A Clean and Modern Appearance
                </h3>
                <p className="text-sm text-[#1e293b] leading-relaxed mb-4">
                  One of the biggest reasons people like it is the clean, simple look. The straight lines going up and the smooth panels look good on modern houses, older style homes, and even those farmhouse style homes that are really popular now. It also comes in a lot of colors and finishes, so it's pretty easy to match it with your siding, trim, and the rest of the outside of the house.
                </p>
              </div>
              <figure className="m-0 rounded-lg overflow-hidden border border-[#e8e4df]">
                <img 
                  src="/images/modern-standing-seam-metal-roof-home-cary.webp" 
                  alt="Modern residential home in Cary NC featuring matte black standing seam metal roof panels and clean architectural lines"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                  width="1400"
                  height="933"
                />
                <figcaption className="p-2 bg-[#FAF8F4] text-[11px] text-[#475569]">
                  Architectural curb appeal on modern &amp; farmhouse style homes
                </figcaption>
              </figure>
            </div>

            {/* 4. Lower Routine Maintenance Needs */}
            <div className="bg-white p-6 rounded-2xl border border-[#e8e4df] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F4] border border-[#e8e4df] flex items-center justify-center text-[#9A3412] font-black text-lg mb-3">
                  4
                </div>
                <h3 className="text-xl font-bold text-[#141c27] mb-2">
                  Lower Routine Maintenance Needs
                </h3>
                <p className="text-sm text-[#1e293b] leading-relaxed">
                  Since all the screws are hidden, you don't really have to worry about exposed screws and washers wearing out like you do with other metal roofs. You should still get it checked once in a while, just to look at the seams, flashing, and how the water is draining, but honestly the regular upkeep is pretty simple.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f1efe9] text-xs font-semibold text-[#0d684d] flex items-center gap-1.5">
                <span>✓</span> No neoprene rubber washers to degrade or retighten
              </div>
            </div>

            {/* 5. Potential Energy Savings with Image */}
            <div className="bg-white p-6 rounded-2xl border border-[#e8e4df] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F4] border border-[#e8e4df] flex items-center justify-center text-[#9A3412] font-black text-lg mb-3">
                  5
                </div>
                <h3 className="text-xl font-bold text-[#141c27] mb-2">
                  Potential Energy Savings
                </h3>
                <p className="text-sm text-[#1e293b] leading-relaxed mb-4">
                  Metal roofs with that shiny reflective coating just bounce the sun right off, way better than a regular roof. Meeting standards from the{' '}
                  <a 
                    href="https://www.energystar.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#9A3412] font-bold underline hover:text-[#7C2D12]"
                  >
                    ENERGY STAR® Cool Roof Program
                  </a>{' '}
                  and the{' '}
                  <a 
                    href="https://www.metalroofing.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#9A3412] font-bold underline hover:text-[#7C2D12]"
                  >
                    Metal Roofing Alliance (MRA)
                  </a>, these panels prevent solar thermal absorption. And if your attic has decent insulation (check our{' '}
                  <button 
                    type="button" 
                    onClick={() => onNavigate('roof-insulation-services-cary-nc-usa.html')} 
                    className="text-[#9A3412] font-bold underline hover:text-[#7C2D12] cursor-pointer"
                  >
                    roof insulation services
                  </button>
                  ) and air flowing through, the house doesn't heat up as much so you're not blasting the AC all day. How much you save though, that totally depends. Light color roof in a hot place saves more, dark roof not so much.
                </p>
              </div>
              <figure className="m-0 rounded-lg overflow-hidden border border-[#e8e4df]">
                <img 
                  src="/images/standing-seam-metal-roof-energy-savings-sun-reflection.webp" 
                  alt="High-solar-reflectance standing seam metal roof deflecting radiant heat to reduce summer AC energy bills in Wake County NC"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                  width="1400"
                  height="933"
                />
                <figcaption className="p-2 bg-[#FAF8F4] text-[11px] text-[#475569]">
                  High solar reflectivity cuts attic heat load by up to 25%
                </figcaption>
              </figure>
            </div>

            {/* 6. Solar Panel Compatibility with Image */}
            <div className="bg-white p-6 rounded-2xl border border-[#e8e4df] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F4] border border-[#e8e4df] flex items-center justify-center text-[#9A3412] font-black text-lg mb-3">
                  6
                </div>
                <h3 className="text-xl font-bold text-[#141c27] mb-2">
                  Solar Panel Compatibility
                </h3>
                <p className="text-sm text-[#1e293b] leading-relaxed mb-4">
                  You can put solar panels on most standing seam roofs pretty easily. They just use special clamps that grab right onto the raised seams, so you don't have to drill holes through the roof itself. Just make sure the clamps are actually made for that type of roof and it won't void the warranty. Use our{' '}
                  <button 
                    type="button" 
                    onClick={() => onNavigate('cary-nc-roofing-calculator.html')} 
                    className="text-[#9A3412] font-bold underline hover:text-[#7C2D12] cursor-pointer"
                  >
                    Cary NC Roofing Calculator
                  </button>{' '}
                  to plan roofing squares and solar installation feasibility.
                </p>
              </div>
              <figure className="m-0 rounded-lg overflow-hidden border border-[#e8e4df]">
                <img 
                  src="/images/standing-seam-metal-roof-solar-panel-clamps.webp" 
                  alt="Residential solar panel array installed on standing seam metal roof using non-penetrating seam clamps preserving roof warranty"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                  width="1400"
                  height="933"
                />
                <figcaption className="p-2 bg-[#FAF8F4] text-[11px] text-[#475569]">
                  Non-penetrating S-5! clamps mount solar securely with zero drilling
                </figcaption>
              </figure>
            </div>

          </div>
        </section>

        {/* SECTION 3: IS STANDING SEAM WORTH THE INVESTMENT */}
        <section className="bg-[#141c27] !text-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-700">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-[#FB923C] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
              Financial Analysis
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold !text-white">
              Is Standing Seam Metal Roofing Worth the Investment?
            </h2>
            <div className="text-sm sm:text-base !text-white leading-relaxed space-y-4">
              <p className="!text-white text-base">
                If you are planning to live in the same house for many years, standing seam metal roof is honestly worth it. It is strong, looks neat, and its screws are not directly exposed to rain and sun, so they last longer.
              </p>
              <p className="!text-white text-base">
                Yes, it costs more than asphalt shingles in the start. No doubt about that. But it also runs for many, many years and you don't have to spend money on repairs again and again. In the long run, it covers its cost. Still, it depends on your budget, the weather in your area, and how your roof is designed.
              </p>
              <div className="p-4 bg-white/10 border-l-4 border-[#FB923C] rounded-r-lg !text-white font-medium">
                <strong className="!text-white font-bold">Critical Pro Tip:</strong> Always get it installed by someone who actually knows metal roofing work. If the fitting is wrong, flashing is not done properly, or they don't leave proper space for the sheets to expand in heat, even this expensive roof can start giving you problems.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CONS TO WEIGH BEFORE YOU DECIDE */}
        <section className="bg-white rounded-2xl border border-[#e8e4df] p-6 sm:p-10 shadow-xs">
          <div className="space-y-3 mb-6">
            <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider">
              Honest Assessment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141c27]">
              Cons to Weigh Before You Decide
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b]">
              Every roofing material comes with trade-offs. Before investing, carefully review these 5 considerations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-5 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
              <div className="text-[#9A3412] font-black text-sm mb-1">01. High Initial Cost</div>
              <p className="text-xs sm:text-sm text-[#1e293b] leading-relaxed">
                A standing seam metal roof takes a lot of money at the start. If we compare it with a shingle roof, its metal sheets are costly and the workers who install it also charge more money.
              </p>
            </div>

            <div className="p-5 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
              <div className="text-[#9A3412] font-black text-sm mb-1">02. Difficult Installation</div>
              <p className="text-xs sm:text-sm text-[#1e293b] leading-relaxed">
                Installing this roof is not an easy job for everyone. Only a person who has experience in this work can do it properly. If there is even a small mistake in fitting, water can start leaking from the roof later on.
              </p>
            </div>

            <div className="p-5 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
              <div className="text-[#9A3412] font-black text-sm mb-1">03. Rain and Hail Noise</div>
              <p className="text-xs sm:text-sm text-[#1e293b] leading-relaxed">
                When it rains heavily or hail falls, a lot of noise comes from this roof inside the house. It can disturb the people living inside. However, if good insulation is placed under the roof, this noise can be reduced a lot.
              </p>
            </div>

            <div className="p-5 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
              <div className="text-[#9A3412] font-black text-sm mb-1">04. Dents and Scratches</div>
              <p className="text-xs sm:text-sm text-[#1e293b] leading-relaxed">
                If heavy hail falls or a tree branch falls on the roof, the metal sheet can get a dent. Scratches can also damage its upper protective layer, which can then cause rust.
              </p>
            </div>

            <div className="p-5 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl md:col-span-2 lg:col-span-2">
              <div className="text-[#9A3412] font-black text-sm mb-1">05. Expensive Repairs</div>
              <p className="text-xs sm:text-sm text-[#1e293b] leading-relaxed">
                If one panel of this roof gets damaged, repairing it is not easy. It needs special tools and a skilled worker, so the repair cost also becomes high. Proper installation with 24-gauge steel significantly minimizes panel replacement risks.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: STANDING SEAM VS R-PANEL VS SHINGLES */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider">
              Side-by-Side Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141c27]">
              Standing Seam vs. R-Panel vs. Shingles
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b]">
              Look, choosing a roof is not easy decision. First a person see his budget, then he see his house look, then he think how many years this roof will work and how much money will spend on its care. Now a days three types of roofs are very common, one is standing seam metal roof, second is R-panel metal roof, and third is asphalt shingles. All three are good but all three have different work and different benefit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">

            {/* Standing Seam Card */}
            <div className="bg-white rounded-2xl border-2 border-[#9A3412] p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9A3412] bg-[#FAF8F4] px-2.5 py-1 rounded-full">
                  Premium Residential
                </span>
                <h3 className="text-xl font-bold text-[#141c27] mt-3 mb-2">
                  1. Standing Seam Metal Roof
                </h3>
                <p className="text-xs sm:text-sm text-[#1e293b] leading-relaxed mb-4">
                  In standing seam roof, long metal sheets are used. The joints of these sheets are raised up and the screws are hidden inside. That is why this roof looks very clean and modern. If this roof is installed properly, it gives very good protection from rain and weather, and you do not need to spend much time on its daily care. The only bad thing about this roof is that its installation cost is very high.
                </p>
              </div>
              <div className="pt-3 border-t border-[#f1efe9] text-xs font-bold text-[#9A3412]">
                Best For: High-end homes &amp; 50-year longevity
              </div>
            </div>

            {/* R-Panel Card with Image */}
            <div className="bg-white rounded-2xl border border-[#e8e4df] p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#475569] bg-[#FAF8F4] px-2.5 py-1 rounded-full">
                  Agricultural &amp; Storage
                </span>
                <h3 className="text-xl font-bold text-[#141c27] mt-3 mb-2">
                  2. R-Panel Metal Roof
                </h3>
                <p className="text-xs sm:text-sm text-[#1e293b] leading-relaxed mb-4">
                  R-Panel roofs use big metal sheets with raised ribs on them. Its screws are not hidden like standing seam, you can see them clearly from outside. It's much cheaper than standing seam, that's why most people use it for barns, workshops, garages and shops. You just need to take care of the screws. Over time the washers and seals get worn out, and if you don't replace them in time, water will start leaking inside.
                </p>
              </div>
              <div>
                <figure className="m-0 rounded-lg overflow-hidden border border-[#e8e4df] mb-3">
                  <img 
                    src="/images/r-panel-metal-roof-exposed-fasteners-comparison.webp" 
                    alt="R-Panel metal roofing with exposed screws and corrugated ribs compared against concealed standing seam systems"
                    className="w-full h-36 object-cover"
                    loading="lazy"
                    width="1400"
                    height="933"
                  />
                  <figcaption className="p-1.5 bg-[#FAF8F4] text-[10px] text-[#475569]">
                    Exposed screws require periodic washer maintenance
                  </figcaption>
                </figure>
                <div className="pt-2 border-t border-[#f1efe9] text-xs font-bold text-[#475569]">
                  Best For: Garages, barns &amp; workshops
                </div>
              </div>
            </div>

            {/* Asphalt Shingles Card with Image */}
            <div className="bg-white rounded-2xl border border-[#e8e4df] p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#475569] bg-[#FAF8F4] px-2.5 py-1 rounded-full">
                  Standard Residential
                </span>
                <h3 className="text-xl font-bold text-[#141c27] mt-3 mb-2">
                  3. Asphalt Shingles
                </h3>
                <p className="text-xs sm:text-sm text-[#1e293b] leading-relaxed mb-4">
                  Most people go for asphalt shingles for their homes. Reason is simple, they cost less than other roofs and you can find them in so many colors and designs and repairing them isn't a headache either. If just one shingle gets damaged, you can pull that one out and put a new one. No need to change the whole roof. But yeah, they don't last as long as a good metal roof.
                </p>
              </div>
              <div>
                <figure className="m-0 rounded-lg overflow-hidden border border-[#e8e4df] mb-3">
                  <img 
                    src="/images/asphalt-shingles-roof-comparison-cary-nc.webp" 
                    alt="Traditional dimensional asphalt shingle roof comparison with standing seam metal roofing longevity in Cary NC"
                    className="w-full h-36 object-cover"
                    loading="lazy"
                    width="1400"
                    height="933"
                  />
                  <figcaption className="p-1.5 bg-[#FAF8F4] text-[10px] text-[#475569]">
                    Lower initial cost with 18-25 year typical life
                  </figcaption>
                </figure>
                <div className="pt-2 border-t border-[#f1efe9] text-xs font-bold text-[#475569]">
                  Best For: Budget-conscious residential homes
                </div>
              </div>
            </div>

          </div>

          {/* Quick Comparison Table */}
          <div className="bg-white rounded-2xl border border-[#e8e4df] p-6 shadow-xs overflow-x-auto mt-6">
            <h3 className="text-xl font-bold text-[#141c27] mb-4">
              Quick Comparison
            </h3>
            <table className="w-full text-left border-collapse min-w-[600px] text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#FAF8F4] border-b border-[#e8e4df]">
                  <th className="p-3.5 font-bold text-[#141c27]">Feature</th>
                  <th className="p-3.5 font-extrabold text-[#9A3412]">Standing Seam</th>
                  <th className="p-3.5 font-bold text-[#141c27]">R-Panel</th>
                  <th className="p-3.5 font-bold text-[#141c27]">Asphalt Shingles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8e4df]">
                <tr>
                  <td className="p-3.5 font-bold text-[#141c27]">Starting Cost</td>
                  <td className="p-3.5 font-bold text-[#9A3412]">High</td>
                  <td className="p-3.5 text-[#1e293b]">Low to Medium</td>
                  <td className="p-3.5 text-[#1e293b]">Low to Medium</td>
                </tr>
                <tr className="bg-[#FAF8F4]/50">
                  <td className="p-3.5 font-bold text-[#141c27]">Look</td>
                  <td className="p-3.5 font-bold text-[#9A3412]">Modern and Clean</td>
                  <td className="p-3.5 text-[#1e293b]">Ribbed, Simple Look</td>
                  <td className="p-3.5 text-[#1e293b]">Old Traditional Look</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#141c27]">Screws</td>
                  <td className="p-3.5 font-bold text-[#0d684d]">Mostly Hidden (Concealed Clips)</td>
                  <td className="p-3.5 text-[#1e293b]">Open, You Can See</td>
                  <td className="p-3.5 text-[#1e293b]">Covered by Shingles</td>
                </tr>
                <tr className="bg-[#FAF8F4]/50">
                  <td className="p-3.5 font-bold text-[#141c27]">Care</td>
                  <td className="p-3.5 font-bold text-[#0d684d]">Very Less Care Needed</td>
                  <td className="p-3.5 text-[#1e293b]">Need to Check Screws Time to Time</td>
                  <td className="p-3.5 text-[#1e293b]">If Shingle Break, Need to Change It</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#141c27]">Strength</td>
                  <td className="p-3.5 font-bold text-[#0d684d]">Very Strong (140+ MPH rated)</td>
                  <td className="p-3.5 text-[#1e293b]">Strong if Fitted Right</td>
                  <td className="p-3.5 text-[#1e293b]">Medium to Strong, Depend on Quality</td>
                </tr>
                <tr className="bg-[#FAF8F4]/50">
                  <td className="p-3.5 font-bold text-[#141c27]">Best For</td>
                  <td className="p-3.5 font-bold text-[#9A3412]">Good Quality Houses</td>
                  <td className="p-3.5 text-[#1e293b]">Garages, Barns, Shops</td>
                  <td className="p-3.5 text-[#1e293b]">Mostly Normal Houses</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Which Roofing Option Is Best Summary */}
          <div className="bg-[#FAF8F4] rounded-2xl border border-[#e8e4df] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[#141c27] mb-4">
              Which Roofing Option Is Best?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-xl border border-[#e8e4df]">
                <strong className="text-[#9A3412] block mb-1">Standing Seam:</strong>
                <p className="text-xs sm:text-sm text-[#1e293b]">
                  This is best for those people who want a premium and modern look, hidden screws, and a roof that works well for a long time.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#e8e4df]">
                <strong className="text-[#141c27] block mb-1">R-Panel:</strong>
                <p className="text-xs sm:text-sm text-[#1e293b]">
                  This is best for those people who want a practical metal roof but in a low budget.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#e8e4df]">
                <strong className="text-[#141c27] block mb-1">Asphalt Shingles:</strong>
                <p className="text-xs sm:text-sm text-[#1e293b]">
                  This is best for those people who want a normal and common type roof, which is easy to use and its starting cost is also low.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: COLORS AND FINISHES */}
        <section className="bg-white rounded-2xl border border-[#e8e4df] p-6 sm:p-10 shadow-xs space-y-8">
          <div>
            <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider">
              Aesthetics &amp; Finishes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141c27] mt-1 mb-4">
              Standing Seam Metal Roof: The Colors and Finishes Homeowners Love Most
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b] leading-relaxed">
              When it comes to standing seam metal roofs, the color you pick makes a huge difference. It’s not just about looks — the right shade can tie your whole home together and seriously boost curb appeal. Across the USA, a few colors keep coming up again and again. Black is a top favorite for that clean, modern look. Charcoal gray is right behind it, a little softer but still very timeless. Bronze gives a warm, rich feel, while white keeps things bright and classic. And of course, earthy tones are huge for homes that blend in with nature. At the end of the day, there’s no one “best” color. It really comes down to your home’s style, what’s around it, and what you personally like.
            </p>
          </div>

          {/* Color Showcase Image */}
          <figure className="m-0 rounded-xl overflow-hidden border border-[#e8e4df] bg-[#FAF8F4] shadow-sm">
            <img 
              src="/images/standing-seam-metal-roof-colors-and-finishes.webp" 
              alt="Standing seam metal roof color variations including red on brick colonial, dark green rustic woodland, and bronze copper swatches"
              className="w-full h-auto object-cover max-h-[500px]"
              loading="lazy"
              width="1400"
              height="1400"
            />
            <figcaption className="p-3 bg-[#FAF8F4] border-t border-[#e8e4df] text-xs text-[#475569] flex flex-wrap items-center justify-between gap-2">
              <span><strong>Architectural Palette:</strong> Red on brick, rustic dark green woodland, matte charcoal &amp; bronze copper profiles</span>
              <span className="text-[#9A3412] font-bold">580 New Waverly Pl, Cary NC</span>
            </figcaption>
          </figure>

          {/* 1. Most Popular Standing Seam Metal Roof Colors */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#141c27]">
              1. Most Popular Standing Seam Metal Roof Colors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-[#e8e4df] bg-[#FAF8F4]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#18181b] border border-gray-400"></span>
                  <strong className="text-base text-[#141c27]">Black</strong>
                </div>
                <p className="text-xs sm:text-sm text-[#1e293b] leading-relaxed">
                  A black metal roof just makes a house look sharp and modern. It goes really well with white siding, brick, and even wood accents. Matte black is the one everyone is picking right now. It looks especially good on modern homes and modern farmhouses.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#e8e4df] bg-[#FAF8F4]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#3f3f46] border border-gray-400"></span>
                  <strong className="text-base text-[#141c27]">Charcoal Gray</strong>
                </div>
                <p className="text-xs sm:text-sm text-[#1e293b] leading-relaxed">
                  Charcoal gray is a great pick if you want something classy but not too dark like black. It feels a lot softer on the eyes. And the best part is, it matches with almost any house color — white, beige, stone, all of them look good with it.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#e8e4df] bg-[#FAF8F4]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#78350f] border border-gray-400"></span>
                  <strong className="text-base text-[#141c27]">Bronze</strong>
                </div>
                <p className="text-xs sm:text-sm text-[#1e293b] leading-relaxed">
                  Bronze gives a home that warm, cozy feel. It just looks really elegant without trying too hard. It goes perfect with natural stone, cream siding, and wood work. Especially on traditional style homes, it looks amazing.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#e8e4df] bg-[#FAF8F4]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#f8fafc] border border-gray-400"></span>
                  <strong className="text-base text-[#141c27]">White</strong>
                </div>
                <p className="text-xs sm:text-sm text-[#1e293b] leading-relaxed">
                  A white metal roof makes the whole house look clean and fresh. It really brightens everything up. Plus, it reflects the sunlight back, so it doesn't get as hot. That's why you see it a lot on coastal homes, cottages, and modern houses.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#e8e4df] bg-[#FAF8F4] md:col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#14532d] border border-gray-400"></span>
                  <strong className="text-base text-[#141c27]">Dark Green</strong>
                </div>
                <p className="text-xs sm:text-sm text-[#1e293b] leading-relaxed">
                  Dark green looks really natural, like it just belongs there. Especially if your house is around a lot of trees. It looks great with white siding too, and it's a perfect pick for farmhouse style homes.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Popular Metal Roof Finishes */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#141c27]">
              2. Popular Metal Roof Finishes
            </h3>
            <p className="text-xs sm:text-sm text-[#1e293b]">
              Honestly, the finish matters a lot. It changes the whole look of the roof.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="p-3.5 bg-[#FAF8F4] rounded-xl border border-[#e8e4df]">
                <strong className="text-sm text-[#9A3412] block mb-1">Matte Finish</strong>
                <p className="text-xs text-[#1e293b]">
                  No shine at all on this one. It looks flat and clean. Most people use it for modern homes and farmhouses.
                </p>
              </div>
              <div className="p-3.5 bg-[#FAF8F4] rounded-xl border border-[#e8e4df]">
                <strong className="text-sm text-[#9A3412] block mb-1">Satin Finish</strong>
                <p className="text-xs text-[#1e293b]">
                  This one has just a little bit of shine. Not too much. It gives that proper metal roof feeling.
                </p>
              </div>
              <div className="p-3.5 bg-[#FAF8F4] rounded-xl border border-[#e8e4df]">
                <strong className="text-sm text-[#9A3412] block mb-1">Gloss Finish</strong>
                <p className="text-xs text-[#1e293b]">
                  If you like shiny, this is it. Sunlight hits it and it really stands out.
                </p>
              </div>
              <div className="p-3.5 bg-[#FAF8F4] rounded-xl border border-[#e8e4df]">
                <strong className="text-sm text-[#9A3412] block mb-1">Textured Finish</strong>
                <p className="text-xs text-[#1e293b]">
                  This one is good if you are worried about small dents or marks. You can't really see them on this finish.
                </p>
              </div>
              <div className="p-3.5 bg-[#FAF8F4] rounded-xl border border-[#e8e4df]">
                <strong className="text-sm text-[#9A3412] block mb-1">Reflective Finish</strong>
                <p className="text-xs text-[#1e293b]">
                  This one is made for hot weather. It pushes the heat back so the roof stays cooler.
                </p>
              </div>
            </div>
            <p className="text-xs text-[#64748b] italic">
              How long any of these will last? That just depends on the quality you buy and who installs it.
            </p>
          </div>

          {/* 3. Style Matching Table */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#141c27]">
              3. Which Color and Finish Should Homeowners Choose?
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FAF8F4] border-b border-[#e8e4df]">
                    <th className="p-3 font-bold text-[#141c27]">Home Style</th>
                    <th className="p-3 font-bold text-[#9A3412]">Best Color</th>
                    <th className="p-3 font-bold text-[#141c27]">Finish to Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e4df]">
                  <tr>
                    <td className="p-3 font-semibold text-[#141c27]">Modern farmhouse</td>
                    <td className="p-3 font-bold text-[#9A3412]">Black</td>
                    <td className="p-3 text-[#1e293b]">Matte</td>
                  </tr>
                  <tr className="bg-[#FAF8F4]/50">
                    <td className="p-3 font-semibold text-[#141c27]">Traditional home</td>
                    <td className="p-3 font-bold text-[#9A3412]">Bronze</td>
                    <td className="p-3 text-[#1e293b]">Satin</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#141c27]">Coastal home</td>
                    <td className="p-3 font-bold text-[#9A3412]">White</td>
                    <td className="p-3 text-[#1e293b]">Satin</td>
                  </tr>
                  <tr className="bg-[#FAF8F4]/50">
                    <td className="p-3 font-semibold text-[#141c27]">Contemporary Home</td>
                    <td className="p-3 font-bold text-[#9A3412]">Charcoal Gray</td>
                    <td className="p-3 text-[#1e293b]">Matte</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#141c27]">Rustic / Woodland Home</td>
                    <td className="p-3 font-bold text-[#9A3412]">Dark Green</td>
                    <td className="p-3 text-[#1e293b]">Matte</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 7: FINAL THOUGHTS */}
        <section className="bg-[#FAF8F4] rounded-2xl border border-[#e8e4df] p-6 sm:p-10">
          <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider">
            Contractor Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141c27] mt-1 mb-4">
            Final Thoughts
          </h2>
          <div className="text-sm sm:text-base text-[#1e293b] leading-relaxed space-y-3">
            <p>
              So yeah, if you want a safe and modern look, just go with Black or Charcoal Gray. You can't really go wrong with those two. Bronze, White, and Dark Green are also good. It just depends on what style your house is.
            </p>
            <p>
              For people in Cary, North Carolina, my advice is to look at your house first. Check the siding color, the brick, and even the plants around your home before you decide. That makes a big difference.
            </p>
            <p>
              And don't forget the finish and coating. Color is important, but if the coating is bad, the roof won't look good for long.
            </p>
          </div>
        </section>

        {/* SECTION 8: FAQ ACCORDION */}
        <section className="bg-white rounded-2xl border border-[#e8e4df] p-6 sm:p-10 shadow-xs">
          <div className="mb-6">
            <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141c27] mt-1">
              FAQ: How Much Does a Standing Seam Roof Cost Per Square Foot?
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-[#e8e4df] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-[#141c27] hover:text-[#9A3412] cursor-pointer bg-[#FAF8F4]/50"
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <span className="text-lg font-bold text-[#9A3412] shrink-0">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="p-4 sm:p-5 text-xs sm:text-sm text-[#1e293b] leading-relaxed bg-white border-t border-[#e8e4df]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8B: INTERNAL & EXTERNAL SEO LINKING HUBS */}
        <section className="bg-white rounded-2xl border border-[#e8e4df] p-6 sm:p-10 shadow-xs space-y-8">
          <div>
            <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider">
              Explore Our Knowledge Base
            </span>
            <h3 className="text-2xl font-extrabold text-[#141c27] mt-1 mb-2">
              Related Cary, NC Roofing Guides &amp; Turnkey Services
            </h3>
            <p className="text-sm text-[#1e293b]">
              Compare materials, calculate installation costs, and explore municipal building code requirements across Cary, Morrisville, Apex, and Wake County.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              type="button"
              onClick={() => onNavigate('metal-roofing-services-cary-nc-usa.html')}
              className="p-4 rounded-xl border border-[#e8e4df] bg-[#FAF8F4] hover:border-[#9A3412] transition-colors text-left cursor-pointer group"
            >
              <div className="text-xs font-bold text-[#9A3412] uppercase tracking-wide mb-1">Service Guide</div>
              <strong className="text-sm text-[#141c27] group-hover:text-[#9A3412] block">Architectural Metal Roofing →</strong>
              <p className="text-xs text-[#64748b] mt-1">24-gauge Galvalume steel, copper, and custom seam widths.</p>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('roof-replacement-services-cary-nc-usa.html')}
              className="p-4 rounded-xl border border-[#e8e4df] bg-[#FAF8F4] hover:border-[#9A3412] transition-colors text-left cursor-pointer group"
            >
              <div className="text-xs font-bold text-[#9A3412] uppercase tracking-wide mb-1">Turnkey Project</div>
              <strong className="text-sm text-[#141c27] group-hover:text-[#9A3412] block">Roof Replacement in Cary →</strong>
              <p className="text-xs text-[#64748b] mt-1">Complete tear-off, synthetic underlayment, and 50-year warranty.</p>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('cary-nc-roofing-calculator.html')}
              className="p-4 rounded-xl border border-[#e8e4df] bg-[#FAF8F4] hover:border-[#9A3412] transition-colors text-left cursor-pointer group"
            >
              <div className="text-xs font-bold text-[#9A3412] uppercase tracking-wide mb-1">Online Tool</div>
              <strong className="text-sm text-[#141c27] group-hover:text-[#9A3412] block">Roof Cost Calculator →</strong>
              <p className="text-xs text-[#64748b] mt-1">Estimate standing seam vs shingle cost per square foot in seconds.</p>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('storm-emergency-roofing-services-cary-nc-usa.html')}
              className="p-4 rounded-xl border border-[#e8e4df] bg-[#FAF8F4] hover:border-[#9A3412] transition-colors text-left cursor-pointer group"
            >
              <div className="text-xs font-bold text-[#9A3412] uppercase tracking-wide mb-1">Storm Recovery</div>
              <strong className="text-sm text-[#141c27] group-hover:text-[#9A3412] block">Hail &amp; Wind Emergency →</strong>
              <p className="text-xs text-[#64748b] mt-1">Rapid tarping, dent inspection, and Wake County insurance help.</p>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('shingle-tile-slate-roofing-cary-nc-usa.html')}
              className="p-4 rounded-xl border border-[#e8e4df] bg-[#FAF8F4] hover:border-[#9A3412] transition-colors text-left cursor-pointer group"
            >
              <div className="text-xs font-bold text-[#9A3412] uppercase tracking-wide mb-1">Material Comparison</div>
              <strong className="text-sm text-[#141c27] group-hover:text-[#9A3412] block">Shingle, Tile &amp; Slate →</strong>
              <p className="text-xs text-[#64748b] mt-1">Dimensional shingles vs standing seam longevity comparison.</p>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('roof-inspection-services-cary-nc-usa.html')}
              className="p-4 rounded-xl border border-[#e8e4df] bg-[#FAF8F4] hover:border-[#9A3412] transition-colors text-left cursor-pointer group"
            >
              <div className="text-xs font-bold text-[#9A3412] uppercase tracking-wide mb-1">Certified Inspection</div>
              <strong className="text-sm text-[#141c27] group-hover:text-[#9A3412] block">HAAG Drone Roof Inspection →</strong>
              <p className="text-xs text-[#64748b] mt-1">Comprehensive flashing, seam, and ventilation diagnostics.</p>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('our-locations')}
              className="p-4 rounded-xl border border-[#e8e4df] bg-[#FAF8F4] hover:border-[#9A3412] transition-colors text-left cursor-pointer group"
            >
              <div className="text-xs font-bold text-[#9A3412] uppercase tracking-wide mb-1">Local Service Areas</div>
              <strong className="text-sm text-[#141c27] group-hover:text-[#9A3412] block">Cary Zip Coverage Directory →</strong>
              <p className="text-xs text-[#64748b] mt-1">Dispatching to 27511, 27512, 27513, 27518, and 27519.</p>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('about-cary-roofing-contractors.html')}
              className="p-4 rounded-xl border border-[#e8e4df] bg-[#FAF8F4] hover:border-[#9A3412] transition-colors text-left cursor-pointer group"
            >
              <div className="text-xs font-bold text-[#9A3412] uppercase tracking-wide mb-1">Our Credentials</div>
              <strong className="text-sm text-[#141c27] group-hover:text-[#9A3412] block">NC Contractor Licenses →</strong>
              <p className="text-xs text-[#64748b] mt-1">GAF Master Elite certified, $2M liability, and HAAG inspectors.</p>
            </button>
          </div>

          {/* Authoritative External Authority Citations */}
          <div className="p-4 sm:p-5 bg-[#FAF8F4] border border-[#e8e4df] rounded-xl">
            <div className="text-xs font-bold text-[#9A3412] uppercase tracking-wider mb-2">
              Authoritative Industry &amp; Municipal Standards
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#475569]">
              <a 
                href="https://www.carync.gov/services-permits/permits-inspections" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#9A3412] underline font-medium"
              >
                Town of Cary Inspections &amp; Permits Portal ↗
              </a>
              <a 
                href="https://www.metalroofing.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#9A3412] underline font-medium"
              >
                Metal Roofing Alliance (MRA) ↗
              </a>
              <a 
                href="https://www.energystar.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#9A3412] underline font-medium"
              >
                ENERGY STAR® Cool Roof Standards ↗
              </a>
              <a 
                href="https://www.nrca.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#9A3412] underline font-medium"
              >
                National Roofing Contractors Association (NRCA) ↗
              </a>
              <a 
                href="https://www.ncdoi.gov/osfm/engineering-and-codes/nc-state-building-codes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#9A3412] underline font-medium"
              >
                North Carolina State Building Code (NCDOI) ↗
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 9: LOCAL CARY ESTIMATE & BOOKING WIDGET */}
        <section id="quote-section" className="bg-white rounded-2xl border-2 border-[#9A3412] p-6 sm:p-10 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider bg-[#FAF8F4] px-3 py-1 rounded-full">
              Free Roof Inspection &amp; Quote
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141c27] mt-2 mb-3">
              Request Your Standing Seam Metal Roof Estimate in Cary, NC
            </h2>
            <p className="text-sm text-[#1e293b]">
              Connect with our certified master inspectors for on-site panel measuring, pitch calculation, and sample swatches.
            </p>
          </div>

          <BookingForm 
            serviceName="Standing Seam Metal Roof Installation & Replacement" 
          />

          <div className="mt-8 pt-6 border-t border-[#e8e4df] flex flex-wrap items-center justify-between text-xs text-[#64748b] gap-4">
            <div>
              <strong>Dispatch Address:</strong> 580 New Waverly Pl Ste 216, Cary, NC 27518
            </div>
            <div>
              <strong>Direct Phone:</strong> <a href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`} className="text-[#9A3412] font-bold">{COMPANY_DETAILS.mainPhone}</a>
            </div>
            <div>
              <strong>Cary Zip Coverage:</strong> {CARY_ZIP_CODES.map(z => z.zip).join(', ')}
            </div>
          </div>
        </section>

      </main>
    </article>
  );
};
