import React, { useState, useEffect } from 'react';
import { COMPANY_DETAILS } from '../data/roofingData';

export interface LocalProject {
  id: string;
  title: string;
  neighborhood: string;
  zip: string;
  projectType: string;
  materials: string;
  duration: string;
  permitNumber: string;
  dateCompleted: string;
  image: string;
  alt: string;
  description: string;
  highlights: string[];
}

interface RecentProjectsCarouselProps {
  onNavigate?: (path: string) => void;
}

export const RecentProjectsCarousel: React.FC<RecentProjectsCarouselProps> = ({ onNavigate }) => {
  const projects: LocalProject[] = [
    {
      id: 'lochmere',
      title: 'Architectural Shingle Replacement in Lochmere',
      neighborhood: 'Lochmere (South Cary)',
      zip: '27518',
      projectType: 'Lakeside Residential Roof Replacement',
      materials: 'GAF Timberline HDZ (Charcoal) • Custom Copper Valleys • Tiger Paw Underlayment',
      duration: '2 Days (Complete Tear-Off & Magnetic Clean)',
      permitNumber: 'Town of Cary Permit #CR-88412',
      dateCompleted: 'Recently Completed',
      image: '/images/project-lochmere.webp',
      alt: 'Architectural Shingle Replacement in Lochmere Cary NC lakeside home with copper flashing',
      description: 'Complete replacement of a 22-year-old failing roof on an upscale lakeside property in Lochmere. Replaced 6 soft decking boards damaged by shade moisture, installed GAF WeatherWatch ice-and-water barrier along eaves and valleys, and upgraded with custom copper flashing details.',
      highlights: [
        '50-Year GAF Golden Pledge System Warranty',
        'Enhanced Copper Valleys & Counter-Flashing',
        'Town of Cary Final Code Inspection Passed'
      ]
    },
    {
      id: 'preston',
      title: 'Designer Shingle Installation in Preston',
      neighborhood: 'Prestonwood Country Club & Preston',
      zip: '27513',
      projectType: 'Executive Estate Steep-Pitch Roof Replacement',
      materials: 'CertainTeed Landmark Pro (Max Def Moire Black) • Continuous Cobra Ridge Vents',
      duration: '2.5 Days (Multi-Gable & Dormer Detailing)',
      permitNumber: 'Town of Cary Permit #CR-89025',
      dateCompleted: 'Recently Completed',
      image: '/images/project-preston.webp',
      alt: 'Designer Shingle Installation in Preston Cary NC two-story executive brick estate',
      description: 'Architectural Committee / HOA-approved luxury roof replacement on a multi-gable 3,800 sq ft residence in Preston. Managed steep 10/12 pitch hoisting, high-definition dimensional shingles, and balanced attic ventilation baffles for maximum energy efficiency.',
      highlights: [
        'Preston HOA Architectural Review Board Compliant',
        '130 MPH Wind Warranty with 6-Nail Fastening',
        'Complete Magnetic Lawn & Flowerbed Nail Sweep'
      ]
    },
    {
      id: 'amberly',
      title: 'High-Wind Rated Roof in Amberly Village',
      neighborhood: 'Amberly Village & Carpenter',
      zip: '27519',
      projectType: 'Modern Craftsman Roof & Gutter Upgrade',
      materials: 'GAF Timberline HDZ (Pewter Gray) • 6" Seamless Bronze K-Style Gutters',
      duration: '1.5 Days (Fast-Track Turnaround)',
      permitNumber: 'Town of Cary Permit #CR-90114',
      dateCompleted: 'Recently Completed',
      image: '/images/project-amberly.webp',
      alt: 'High-Wind Rated Roof in Amberly Village Cary NC modern craftsman home with seamless gutters',
      description: 'Turnkey storm-resistant roof installation on a modern two-story craftsman residence in West Cary. Designed specifically to withstand open Triangle storm winds, paired with oversized 6-inch seamless aluminum gutters and leaf relief gutter guards.',
      highlights: [
        'Wind-Resistant LayerLock™ Technology Installation',
        'Heavy-Duty Aluminum Gutter & Downspout System',
        'Free 10-Year Workmanship Guarantee'
      ]
    },
    {
      id: 'downtown',
      title: 'Historic Bungalow Decking & Shingle Restoration',
      neighborhood: 'Downtown Cary Historic District',
      zip: '27511',
      projectType: 'Structural Decking Repair & Shingle Restoration',
      materials: 'Owens Corning TruDefinition Duration • 5/8" CDX Plywood Decking',
      duration: '2 Days (Decking Rebuild & Installation)',
      permitNumber: 'Town of Cary Permit #CR-90432',
      dateCompleted: 'Recently Completed',
      image: '/images/project-downtown.webp',
      alt: 'Historic Bungalow Decking and Shingle Restoration in Downtown Cary NC craftsman home',
      description: 'Detailed restoration for a historic craftsman bungalow near Downtown Cary Park. Stripped three layers of brittle original asphalt, replaced 14 rotted structural plywood sheets, and installed modern SureNail® technology shingles in compliance with historic neighborhood aesthetics.',
      highlights: [
        'Complete Rotted Rafter & Fascia Board Repair',
        'Synthetic Breathable Decking Underlayment',
        'Preserved Historic Neighborhood Architecture'
      ]
    },
    {
      id: 'crossroads',
      title: 'Commercial TPO Flat Roof Installation at Crossroads',
      neighborhood: 'Crossroads Commercial Corridor',
      zip: '27512',
      projectType: 'Commercial Flat Roof Heat-Welded Membrane',
      materials: 'Carlisle 60-Mil Energy-Efficient White TPO • Polyiso R-30 Rigid Board',
      duration: '3 Days (Zero-Disruption Commercial Build)',
      permitNumber: 'Town of Cary Permit #CR-91280',
      dateCompleted: 'Recently Completed',
      image: '/images/project-crossroads.webp',
      alt: 'Commercial TPO Flat Roof Installation at Crossroads Cary NC retail rooftop',
      description: 'Commercial flat roof replacement on a multi-tenant retail property along Walnut Street near Crossroads Plaza. Installed high-R thermal insulation and robotic hot-air welded TPO membrane with certified parapet edge termination to eliminate ponding water.',
      highlights: [
        '20-Year No Dollar Limit (NDL) Commercial Warranty',
        'Reflective Cool Roof Energy Star Certified',
        'Commercial Scuppers & Internal Overflow Drains'
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const currentProject = projects[currentIndex];

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handleSelect = (idx: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(idx);
  };

  return (
    <section 
      id="recent-projects" 
      className="py-14 md:py-20 bg-[#FAF8F4] border-b border-[#e8e4df]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="kicker">LOCAL NEIGHBORHOOD SHOWCASE</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
              Recent Local Roofing Projects in <span className="font-serif-accent">Cary, NC</span>
            </h2>
            <p className="text-sm md:text-base text-black/80 font-medium max-w-2xl mt-2 leading-relaxed">
              Explore real roof replacements and restoration jobs completed right in your neighborhood. From lakeside estates in Lochmere to custom builds in Amberly and historic renovations in Downtown Cary.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Project"
              className="w-11 h-11 rounded-full bg-white border border-[#e8e4df] hover:border-[#F07020] hover:text-[#F07020] text-black font-extrabold text-lg flex items-center justify-center transition-all shadow-xs cursor-pointer"
            >
              ←
            </button>
            <div className="text-xs font-bold text-black/70 px-2 font-mono">
              {currentIndex + 1} / {projects.length}
            </div>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Project"
              className="w-11 h-11 rounded-full bg-white border border-[#e8e4df] hover:border-[#F07020] hover:text-[#F07020] text-black font-extrabold text-lg flex items-center justify-center transition-all shadow-xs cursor-pointer"
            >
              →
            </button>
          </div>
        </div>

        {/* Quick Project Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto pb-1">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                currentIndex === idx
                  ? 'bg-[#1e2a3a] text-white shadow-md'
                  : 'bg-white text-black border border-[#e8e4df] hover:border-[#C2410C]'
              }`}
            >
              <span>📍</span>
              <span>{proj.neighborhood.split('(')[0].trim()}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                currentIndex === idx ? 'bg-[#C2410C] text-white font-bold' : 'bg-[#FAF8F4] text-black font-bold'
              }`}>
                {proj.zip}
              </span>
            </button>
          ))}
        </div>

        {/* Active Featured Project Card */}
        <div className="bg-white border-2 border-[#e8e4df] rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all">
          {/* Project Image Column (7 Cols) */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] bg-slate-900 overflow-hidden group">
            <img
              src={currentProject.image}
              alt={currentProject.alt}
              className="w-full h-full object-cover min-h-[300px] sm:min-h-[420px] transition-transform duration-700 group-hover:scale-105"
              width={720}
              height={420}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Top Overlay Badge */}
            <div className="absolute top-4 left-4 bg-[#1e2a3a] px-3.5 py-1.5 rounded-xl text-white text-xs font-bold flex items-center gap-2 shadow-lg border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
              <span className="text-white font-bold">{currentProject.neighborhood}</span>
              <span className="text-[#FDBA74]">|</span>
              <span className="text-[#FDBA74] font-extrabold">ZIP {currentProject.zip}</span>
            </div>

            {/* Bottom Overlay Info Tag */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3 rounded-xl text-white text-xs flex flex-wrap items-center justify-between gap-2 border border-white/20">
              <span className="font-semibold text-white">
                🔍 {currentProject.projectType}
              </span>
              <span className="font-mono text-[11px] text-[#38bdf8] font-bold">
                {currentProject.permitNumber}
              </span>
            </div>
          </div>

          {/* Project Details Column (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-[#e8e4df]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#B43B06]">
                  {currentProject.dateCompleted}
                </span>
                <span className="px-2.5 py-1 bg-[#E8F8F1] text-[#0d684d] text-[11px] font-extrabold rounded-md border border-[#0d684d]/30">
                  ✓ Verified Project
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-black tracking-tight leading-snug">
                  {currentProject.title}
                </h3>
                <p className="text-xs font-bold text-black mt-1">
                  📍 Verified Cary Location: {currentProject.neighborhood} • ZIP {currentProject.zip}
                </p>
              </div>

              <p className="text-sm text-black leading-relaxed font-normal">
                {currentProject.description}
              </p>

              {/* Specs Grid */}
              <div className="bg-[#FAF8F4] p-4 rounded-2xl border border-[#e8e4df] space-y-2 text-xs">
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#e8e4df] pb-2">
                  <span className="font-bold text-black">Installed System:</span>
                  <span className="font-bold text-black text-right">{currentProject.materials.split('•')[0]}</span>
                </div>
                <div className="flex justify-between border-b border-[#e8e4df] pb-2">
                  <span className="font-bold text-black">Project Timeline:</span>
                  <span className="font-bold text-black">{currentProject.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-black">Permit &amp; Code:</span>
                  <span className="font-bold text-[#0d684d]">{currentProject.permitNumber}</span>
                </div>
              </div>

              {/* Key Project Highlights */}
              <div className="space-y-1.5 pt-1">
                {currentProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-black font-semibold">
                    <span className="text-[#B43B06] font-bold">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-[#e8e4df] mt-6 space-y-2.5">
              <a
                href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`}
                className="w-full btn btn-primary !py-3 !text-sm font-extrabold !text-white flex items-center justify-center gap-2 shadow-md"
              >
                <span>📞 Call Hotline for {currentProject.neighborhood.split('(')[0].trim()}: {COMPANY_DETAILS.mainPhone}</span>
              </a>
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('book');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="py-2.5 px-3 bg-[#FAF8F4] hover:bg-slate-100 text-black font-bold rounded-xl border border-[#e8e4df] transition-colors cursor-pointer"
                >
                  Request Similar Quote →
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigate) onNavigate('calculator');
                  }}
                  className="py-2.5 px-3 bg-[#FAF8F4] hover:bg-slate-100 text-[#B43B06] font-extrabold rounded-xl border border-[#e8e4df] transition-colors cursor-pointer"
                >
                  Estimate ZIP {currentProject.zip} Cost ↗
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(idx)}
              aria-label={`Go to project ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-[#D9531E]' : 'w-2.5 bg-[#e8e4df] hover:bg-black/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
