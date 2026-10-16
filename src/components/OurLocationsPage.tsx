import React, { useState } from 'react';
import { COMPANY_DETAILS, ALL_SERVICES } from '../data/roofingData';
import { BookingForm } from './BookingForm';
import { SeoSchema } from './SeoSchema';
import { GoogleServiceAreaMap } from './GoogleServiceAreaMap';

interface OurLocationsPageProps {
  onNavigate: (path: string) => void;
}

export const OurLocationsPage: React.FC<OurLocationsPageProps> = ({ onNavigate }) => {
  const [selectedZip, setSelectedZip] = useState<string>('all');

  const locationData = [
    {
      zip: '27511',
      name: 'Central & Downtown Cary',
      kicker: 'Historic & Established Neighborhoods',
      pinAddress: 'Downtown Cary Park & Academy St Corridor, Cary, NC 27511',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Downtown+Cary+Park+Cary+NC+27511',
      phone: '(919) 335-9543',
      phoneRaw: '+19193359543',
      landmarks: ['Downtown Cary Park', 'Kildaire Farm Rd Corridor', 'Academy & Chatham St Historic District', 'Maynard Loop'],
      housingType: 'Charming historic bungalows, mid-century brick ranches, and renovated modern homes.',
      roofNeeds: [
        'Chimney flashing and masonry waterproofing',
        'Fascia board and soffit repair from mature pine moisture',
        'Architectural shingle replacement (GAF Timberline HDZ / CertainTeed)',
        'Drip edge and valley leak repair'
      ],
      dispatchTime: 'Same-Day Local Service (30-45 Min)',
      coords: '35.7915° N, -78.7811° W'
    },
    {
      zip: '27513',
      name: 'North Cary & Preston',
      kicker: 'Golf Course Estates & Executive Residences',
      pinAddress: 'Prestonwood Country Club & Park West Village, Cary, NC 27513',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Prestonwood+Country+Club+Cary+NC+27513',
      phone: '(984) 520-4071',
      phoneRaw: '+19845204071',
      landmarks: ['Prestonwood Country Club', 'Fred G. Bond Metro Park', 'Highcroft & Park West Village', 'Cary Parkway NW'],
      housingType: 'Expansive multi-story executive residences with steep pitches, complex hip & valley architectures.',
      roofNeeds: [
        'Multi-gable synthetic slate and architectural shingle replacements',
        'Skylight and roof window flashings',
        'Rafter and truss structural reinforcements',
        'Attic ventilation balancing and baffles'
      ],
      dispatchTime: 'Prompt Wake County Response (45 Min)',
      coords: '35.8122° N, -78.8041° W'
    },
    {
      zip: '27518',
      name: 'South Cary & Lochmere / Waverly Place',
      kicker: 'Lakeside Living & Headquarters Dispatch Hub',
      pinAddress: '580 New Waverly Pl Ste 216, Cary, NC 27518 (Headquarters Hub)',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=580+New+Waverly+Pl+Cary+NC+27518',
      phone: '(919) 973-7931',
      phoneRaw: '+19199737931',
      landmarks: ['Lochmere Lake & Golf Club', 'Regency Park & Amphitheatre', 'Waverly Place Center', 'Tryon Road Corridor'],
      housingType: 'Wooded waterfront properties, custom craftsman homes, and upscale suburban estates.',
      roofNeeds: [
        'Algae and moss mitigation from dense hardwood shade',
        'Seamless gutter guard and downspout drainage upgrades',
        'Underlayment ice-and-water barrier installations',
        'Roof leak diagnostics and emergency limb strike repairs'
      ],
      dispatchTime: 'Immediate Headquarters Dispatch (20-30 Min)',
      coords: '35.7351° N, -78.7884° W'
    },
    {
      zip: '27519',
      name: 'West Cary, Amberly & Carpenter',
      kicker: 'Modern Master-Planned Communities',
      pinAddress: 'Amberly Village Center & Green Level Church Rd, Cary, NC 27519',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Amberly+Village+Center+Cary+NC+27519',
      phone: '(919) 335-9948',
      phoneRaw: '+19193359948',
      landmarks: ['Amberly Village Center', 'Historic Carpenter District', 'Green Level Church Road', 'NC-55 Technology Corridor'],
      housingType: 'Fast-growing master-planned communities, open-concept designs, and HOA-governed neighborhoods.',
      roofNeeds: [
        'High-wind rated shingle installations (130 MPH rating)',
        'Ridge vent and continuous soffit airflow optimization',
        'HOA architectural review board color and material compliance',
        'Solar panel roof preparation and detachment/reinstallation'
      ],
      dispatchTime: 'Rapid Neighborhood Scheduling (35-50 Min)',
      coords: '35.8367° N, -78.8789° W'
    },
    {
      zip: '27512',
      name: 'East Cary & Crossroads Commercial Center',
      kicker: 'Commercial Hubs & Multi-Family Facilities',
      pinAddress: 'Crossroads Plaza & Walnut St Commercial Corridor, Cary, NC 27512',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Crossroads+Plaza+Cary+NC+27512',
      phone: '(919) 756-3165',
      phoneRaw: '+19197563165',
      landmarks: ['Crossroads Plaza', 'Walnut Street Shopping Corridor', 'US-1 / I-40 Interchange', 'Corporate Office Parks'],
      housingType: 'Commercial flat roofing, retail centers, apartment complexes, and suburban townhome clusters.',
      roofNeeds: [
        'Commercial flat roofing: TPO, EPDM, and PVC heat-welded membranes',
        'Parapet wall waterproofing and commercial scuppers/downspouts',
        'Commercial roof coatings (elastomeric and silicone restoration)',
        'Scheduled preventive maintenance and warranty inspections'
      ],
      dispatchTime: 'Priority Commercial & Multi-Family Service',
      coords: '35.7725° N, -78.7512° W'
    }
  ];

  const filteredLocations = selectedZip === 'all' 
    ? locationData 
    : locationData.filter(loc => loc.zip === selectedZip);

  return (
    <article className="bg-[#FFFDF9] min-h-screen text-black">
      {/* Comprehensive Schema.org Structured Data (LocalBusiness + FAQPage + WebPage + BreadcrumbList) */}
      <SeoSchema
        pageType="location"
        faqs={[
          {
            question: "Which zip codes does CaryRoofing serve in Cary, NC?",
            answer: "We provide comprehensive residential and commercial roofing coverage across all 5 official Cary zip codes: 27511 (Central & Downtown Cary), 27512 (East Cary & Crossroads), 27513 (North Cary & Preston), 27518 (South Cary & Lochmere / Waverly Place), and 27519 (West Cary & Amberly), plus adjacent Triangle towns like Apex, Morrisville, and Holly Springs."
          },
          {
            question: "How fast is emergency roof dispatch in Cary, NC?",
            answer: "Our mobile roofing crews are stationed locally in Cary and dispatch within 60 to 90 minutes across Wake County for emergency roof tarping, storm damage, tree impacts, and active ceiling leaks."
          },
          {
            question: "Are on-site roof inspections free across all Cary neighborhoods?",
            answer: "Yes, 100% free on-site roof inspections are provided for all Cary homeowners and business owners with full drone aerial diagnostics, HAAG-certified photo reports, and transparent repair or replacement estimates."
          },
          {
            question: "Do you handle Town of Cary roofing permits and building code compliance?",
            answer: "Yes, our team manages all Town of Cary Inspections & Permits filings, ensuring complete compliance with North Carolina Residential Building Code High-Wind (130 MPH) requirements."
          }
        ]}
        pageTitle="Roofing Service Locations in Cary, NC & Triangle | caryncroofing.com"
        pageDescription="Local roofing coverage for all Cary, NC zip codes (27511, 27512, 27513, 27518, 27519). Same-day dispatch and free on-site roof inspections."
        canonicalUrl="https://caryncroofing.com/our-locations"
        image="https://caryncroofing.com/images/cary-service-map.svg"
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
          <span className="text-[#F07020] font-bold">Our Locations</span>
        </div>
      </nav>

      {/* Hero Header with Exactly ONE H1 */}
      <section className="py-12 md:py-16 bg-[#FFFDF9] border-b border-[#e8e4df]">
        <div className="container container-medium">
          <div className="kicker">CARY &amp; SURROUNDING TRIANGLE SERVICE COVERAGE</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
            Roofing Service Locations in <span className="font-serif-accent">Cary, NC &amp; Triangle</span>
          </h1>
          <p className="text-base md:text-lg text-black font-medium max-w-3xl leading-relaxed">
            With fully stocked mobile dispatch units based at our Cary headquarters, our certified roofing crews deliver fast, dependable residential and commercial roofing services across every neighborhood and zip code in Cary, NC and surrounding Triangle communities.
          </p>

          {/* Dynamic Google Map Component for Local SEO & Service Radius Trust */}
          <GoogleServiceAreaMap />

          <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-semibold text-black">
            <span className="px-3.5 py-2 bg-white border border-[#e8e4df] rounded-xl shadow-xs">
              📍 <strong>Official Address:</strong> 580 New Waverly Pl Ste 216, Cary, NC 27518
            </span>
            <span className="px-3.5 py-2 bg-[#E8F8F1] text-[#1D9E75] border border-[#1D9E75]/30 rounded-xl font-bold">
              ⚡ Free Prompt On-Site Assessment
            </span>
            <a 
              href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`}
              className="px-3.5 py-2 bg-[#FAF8F4] border border-[#e8e4df] hover:border-[#F07020] rounded-xl font-bold transition-colors"
            >
              📞 Direct Dispatch: {COMPANY_DETAILS.mainPhone}
            </a>
          </div>

          {/* Quick Zip Code Jump Selector */}
          <div className="mt-8 pt-6 border-t border-[#e8e4df]">
            <span className="text-xs font-bold uppercase tracking-wider text-black block mb-3">
              Filter By Cary Zip Code:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedZip('all')}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  selectedZip === 'all'
                    ? 'bg-[#F07020] text-white shadow-xs'
                    : 'bg-[#FAF8F4] text-black border border-[#e8e4df] hover:border-[#F07020]'
                }`}
              >
                All Cary Locations ({locationData.length})
              </button>
              {locationData.map((loc) => (
                <button
                  key={loc.zip}
                  type="button"
                  onClick={() => setSelectedZip(loc.zip)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    selectedZip === loc.zip
                      ? 'bg-[#F07020] text-white shadow-xs'
                      : 'bg-[#FAF8F4] text-black border border-[#e8e4df] hover:border-[#F07020]'
                  }`}
                >
                  Zip {loc.zip} – {loc.name.split('&')[0].trim()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Cards with Structured H2, H3, H4, H5, H6 */}
      <section className="py-12 md:py-16 bg-[#FAF8F4]">
        <div className="container">
          {/* Custom Pin Notice */}
          <div className="mb-8 p-5 bg-[#FFF8F2] border-2 border-[#F07020]/30 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-black shadow-xs">
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5">📍</span>
              <div>
                <strong className="text-black font-bold text-sm block mb-1">
                  Custom Property Pins &amp; Specific Neighborhood Addresses:
                </strong>
                <p className="text-black font-medium leading-relaxed">
                  Have a specific residential address, commercial facility, or custom neighborhood pin in mind? You can provide any street address or landmark across Wake County, and our local team will pin and dispatch direct on-site inspection crews!
                </p>
              </div>
            </div>
            <a 
              href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`}
              className="btn btn-primary !py-2.5 !px-5 !text-xs whitespace-nowrap self-start sm:self-auto shrink-0 font-bold"
            >
              📞 Pin Your Address: {COMPANY_DETAILS.mainPhone}
            </a>
          </div>

          <div className="space-y-8">
            {filteredLocations.map((loc) => (
              <div 
                key={loc.zip}
                className="bg-white border border-[#e8e4df] rounded-2xl p-6 md:p-8 shadow-xs hover:border-[#F07020]/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#e8e4df]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 text-xs font-extrabold bg-[#F07020] text-white rounded-md">
                        ZIP {loc.zip}
                      </span>
                      <span className="text-xs font-bold text-black uppercase tracking-wider">
                        {loc.kicker}
                      </span>
                    </div>
                    {/* H2 for each major location zone */}
                    <h2 className="text-2xl md:text-3xl font-extrabold text-black">
                      {loc.name}
                    </h2>
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-black font-bold">
                      <span className="text-[#F07020]">📍 Pinned Hub:</span>
                      <span>{loc.pinAddress}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="text-left md:text-right">
                      <span className="text-[11px] uppercase tracking-wider text-black block font-bold">
                        Average Response Time
                      </span>
                      <span className="text-sm font-extrabold text-[#1D9E75]">
                        ⚡ {loc.dispatchTime}
                      </span>
                    </div>
                    <a
                      href={`tel:${loc.phoneRaw}`}
                      className="btn btn-primary !py-2.5 !px-5 !text-sm font-bold flex items-center gap-1.5"
                    >
                      <span>📞</span>
                      <span>Call {loc.phone}</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  {/* Column 1: Profile & Landmarks */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-black text-sm uppercase tracking-wide">
                      Neighborhood Profile
                    </h3>
                    <p className="text-sm text-black leading-relaxed">
                      {loc.housingType}
                    </p>
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-black block mb-1.5">
                        Key Landmarks &amp; Corridors:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {loc.landmarks.map((landmark, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-[#FAF8F4] border border-[#e8e4df] px-2.5 py-1 rounded-md text-black font-medium"
                          >
                            📍 {landmark}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Specialized Roofing Solutions */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-black text-sm uppercase tracking-wide">
                      High-Demand Roofing Services
                    </h3>
                    <ul className="space-y-2 text-sm text-black">
                      {loc.roofNeeds.map((need, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#1D9E75] font-bold">✓</span>
                          <span>{need}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-[#F07020] uppercase mb-1">
                        Frequently Requested Services
                      </h4>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <button
                          type="button"
                          onClick={() => onNavigate('roof-repair-services-cary-nc-usa.html')}
                          className="text-[#F07020] font-semibold hover:underline"
                        >
                          Roof Repair
                        </button>
                        <span>•</span>
                        <button
                          type="button"
                          onClick={() => onNavigate('roof-replacement-services-cary-nc-usa.html')}
                          className="text-[#F07020] font-semibold hover:underline"
                        >
                          Roof Replacement
                        </button>
                        <span>•</span>
                        <button
                          type="button"
                          onClick={() => onNavigate('gutter-services-cary-nc-usa.html')}
                          className="text-[#F07020] font-semibold hover:underline"
                        >
                          Seamless Gutters
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Local Dispatch, Pinned Map & CTA */}
                  <div className="bg-[#FAF8F4] p-5 rounded-xl border border-[#e8e4df] space-y-3 flex flex-col justify-between">
                    <div className="space-y-2 text-xs text-black">
                      <h3 className="font-bold text-black text-sm uppercase tracking-wide mb-2">
                        Town of Cary Pin &amp; Map Data
                      </h3>
                      <p><strong>Coordinates:</strong> {loc.coords}</p>
                      <h4 className="text-xs font-normal">
                        <strong>Permit Authority:</strong> Town of Cary Inspections &amp; Permits
                      </h4>
                      <h5 className="text-xs font-normal">
                        <strong>Building Code:</strong> NC Residential Code (Zone 4A)
                      </h5>
                      <h6 className="text-xs font-normal">
                        <strong>Certification:</strong> HAAG Certified Master Inspector
                      </h6>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-[#e8e4df]">
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 bg-white border border-[#e8e4df] hover:border-[#F07020] hover:text-[#F07020] text-black font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                      >
                        <span>🗺️ Open Pin in Google Maps ↗</span>
                      </a>
                      <a
                        href={`tel:${loc.phoneRaw}`}
                        className="w-full py-2 bg-[#F07020] text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 hover:bg-[#d65f17] shadow-2xs"
                      >
                        <span>📞 Dial {loc.phone}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          const bookEl = document.getElementById('book');
                          if (bookEl) bookEl.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full py-2 bg-[#FAF8F4] border border-[#e8e4df] hover:border-[#1D9E75] text-[#1D9E75] font-bold text-xs rounded-lg transition-colors cursor-pointer text-center"
                      >
                        Free On-Site Inspection in {loc.zip}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Regional Triangle Coverage */}
          <div className="mt-12 p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
            <div className="kicker">REGIONAL COVERAGE</div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Surrounding Triangle Communities We Serve
            </h2>
            <p className="text-black mb-6 leading-relaxed">
              In addition to all 5 Cary zip codes, our mobile roofing teams routinely serve homeowners, HOA communities, and commercial property managers throughout Wake, Durham, and Chatham Counties:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#e8e4df]">
                <h3 className="font-bold text-black text-base mb-1">Apex, NC</h3>
                <p className="text-xs text-black">Downtown Apex, Peakway corridor, Bella Casa, and Salem Street communities.</p>
              </div>
              <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#e8e4df]">
                <h3 className="font-bold text-black text-base mb-1">Morrisville, NC</h3>
                <p className="text-xs text-black">Davis Drive, Park West, Perimeter Park, and RTP adjacent developments.</p>
              </div>
              <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#e8e4df]">
                <h3 className="font-bold text-black text-base mb-1">Holly Springs, NC</h3>
                <p className="text-xs text-black">Sunset Ridge, Holly Springs Rd corridor, 12 Oaks, and Ting Park area.</p>
              </div>
              <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#e8e4df]">
                <h3 className="font-bold text-black text-base mb-1">West Raleigh &amp; RTP</h3>
                <p className="text-xs text-black">Wade Avenue, Blue Ridge, Crabtree Valley, and corporate commercial roofs in RTP.</p>
              </div>
            </div>
          </div>

          {/* All 12 Services Quick Interlinking Grid */}
          <div className="mt-8 p-8 bg-white border border-[#e8e4df] rounded-2xl shadow-xs">
            <h2 className="text-xl font-bold text-black mb-4">
              Explore Cary NC Roofing Services Across All Locations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {ALL_SERVICES.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => onNavigate(s.slug)}
                  className="text-left p-3 rounded-lg bg-[#FAF8F4] border border-[#e8e4df] hover:border-[#F07020] text-xs font-semibold text-black hover:text-[#F07020] transition-colors cursor-pointer"
                >
                  → {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Booking & Consultation Section */}
      <BookingForm serviceName="Local Cary On-Site Inspection" />
    </article>
  );
};
