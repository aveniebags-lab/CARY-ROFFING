import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  splitSrc?: string;
  beforeSrc: string;
  beforeAlt: string;
  beforeLabel?: string;
  afterSrc: string;
  afterAlt: string;
  afterLabel?: string;
  gpsCoords?: string;
  elevation?: string;
  serviceTitle: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  splitSrc,
  beforeSrc,
  beforeAlt,
  beforeLabel = 'Damaged / Weathered Condition',
  afterSrc,
  afterAlt,
  afterLabel = 'Repaired & Completed Installation',
  gpsCoords = '35.7725° N, 78.7812° W',
  elevation = '418 FT',
  serviceTitle,
  className = ''
}) => {
  // Default mode is 'split' as requested: one unified image with two portions (left damage, right repair)
  const [viewMode, setViewMode] = useState<'split' | 'slider' | 'before' | 'after'>('split');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const effectiveSplitSrc = splitSrc || afterSrc;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && viewMode === 'slider') {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0 && viewMode === 'slider') {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className={`before-after-component ${className}`}>
      {/* View Switcher Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs">
        <div className="flex flex-wrap items-center gap-1.5 bg-[#FAF8F4] p-1 rounded-xl border border-[#e8e4df]">
          <button
            type="button"
            onClick={() => setViewMode('split')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              viewMode === 'split'
                ? 'bg-[#9A3412] text-white shadow-xs'
                : 'text-black/80 hover:text-black hover:bg-black/5'
            }`}
            title="Unified 2-portion realistic field jobsite photo"
          >
            📷 Split Field Photo
          </button>
          <button
            type="button"
            onClick={() => setViewMode('slider')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              viewMode === 'slider'
                ? 'bg-[#141c27] text-white shadow-xs'
                : 'text-black/80 hover:text-black hover:bg-black/5'
            }`}
          >
            ↔ Interactive Slider
          </button>
          <button
            type="button"
            onClick={() => setViewMode('before')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              viewMode === 'before'
                ? 'bg-[#b91c1c] text-white shadow-xs'
                : 'text-black/80 hover:text-black hover:bg-black/5'
            }`}
          >
            Before Work
          </button>
          <button
            type="button"
            onClick={() => setViewMode('after')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              viewMode === 'after'
                ? 'bg-[#0d684d] text-white shadow-xs'
                : 'text-black/80 hover:text-black hover:bg-black/5'
            }`}
          >
            After Completion
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsZoomOpen(true)}
          className="px-3.5 py-1.5 rounded-xl bg-white border border-[#e8e4df] text-black font-bold hover:border-[#F07020] hover:text-[#F07020] transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
          title="Inspect high-resolution jobsite craftsmanship close-up"
        >
          <span>🔍</span>
          <span>Inspect Close-Up</span>
        </button>
      </div>

      {/* Main Visual Display Frame */}
      <div 
        ref={containerRef}
        className={`relative overflow-hidden rounded-2xl border border-[#e8e4df] shadow-md bg-[#141c27] select-none group min-h-[260px] md:min-h-[420px] ${
          viewMode === 'slider' ? 'cursor-ew-resize' : 'cursor-pointer'
        }`}
        onClick={() => {
          if (viewMode !== 'slider') setIsZoomOpen(true);
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={() => {
          if (viewMode === 'slider') setIsDragging(true);
        }}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* MODE 1: SPLIT 2-PORTION UNIFIED PHOTO (DEFAULT) */}
        {viewMode === 'split' && (
          <div className="w-full h-full relative">
            <img
              src={effectiveSplitSrc}
              alt={afterAlt || `${serviceTitle} in Cary NC - Before Damage and After Completion`}
              className="w-full h-[280px] sm:h-[380px] md:h-[440px] object-cover"
              width={720}
              height={405}
              loading="eager"
              fetchPriority="high"
              referrerPolicy="no-referrer"
            />

            {/* Split Overlay Badges */}
            <div className="absolute top-3 left-3 z-10 pointer-events-none bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white border border-white/20 shadow-md flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse"></span>
              <span>BEFORE: {beforeLabel}</span>
            </div>

            <div className="absolute top-3 right-3 z-10 pointer-events-none bg-[#0d684d]/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white border border-white/20 shadow-md flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span>AFTER: {afterLabel}</span>
            </div>

            {/* Center Split Seam Divider Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none hidden sm:flex items-center justify-center">
              <span className="px-3 py-1 bg-black/75 backdrop-blur-md text-white text-[11px] font-mono tracking-wider uppercase border border-white/30 rounded-full shadow-lg">
                ⚡ Jobsite Split Comparison
              </span>
            </div>
          </div>
        )}

        {/* MODE 2: INTERACTIVE SLIDER */}
        {viewMode === 'slider' && (
          <>
            {/* AFTER IMAGE (Base Layer) */}
            <div className="w-full h-full">
              <img
                src={afterSrc}
                alt={afterAlt}
                className="w-full h-[280px] sm:h-[380px] md:h-[440px] object-cover pointer-events-none"
                width={780}
                height={440}
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* BEFORE IMAGE (Clipped Layer) */}
            <div
              className="absolute top-0 left-0 bottom-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={beforeSrc}
                alt={beforeAlt}
                className="absolute top-0 left-0 w-full max-w-none h-[280px] sm:h-[380px] md:h-[440px] object-cover pointer-events-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%'
                }}
                width={780}
                height={440}
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-r from-transparent to-black/30"></div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_12px_rgba(0,0,0,0.6)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#141c27] border-2 border-[#C2410C] flex items-center justify-center font-bold text-xs shadow-lg transform transition-transform group-hover:scale-110">
                ↔
              </div>
            </div>

            {/* Floating Labels */}
            <div className="absolute top-3 left-3 z-10 pointer-events-none bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-white border border-white/20 shadow-md">
              ← {beforeLabel}
            </div>
            <div className="absolute top-3 right-3 z-10 pointer-events-none bg-[#0d684d]/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-white border border-white/20 shadow-md">
              {afterLabel} →
            </div>

            <div className="absolute bottom-3 left-3 z-10 pointer-events-none bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono text-white hidden sm:block">
              Drag slider left/right to compare
            </div>
          </>
        )}

        {/* MODE 3: PURE BEFORE VIEW */}
        {viewMode === 'before' && (
          <div className="w-full h-full relative">
            <img
              src={beforeSrc}
              alt={beforeAlt}
              className="w-full h-[280px] sm:h-[380px] md:h-[440px] object-cover"
              width={780}
              height={440}
              loading="eager"
            />
            <div className="absolute top-3 left-3 z-10 pointer-events-none bg-[#b91c1c]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white border border-white/20 shadow-md">
              ● Initial Condition: {beforeLabel}
            </div>
          </div>
        )}

        {/* MODE 4: PURE AFTER VIEW */}
        {viewMode === 'after' && (
          <div className="w-full h-full relative">
            <img
              src={afterSrc}
              alt={afterAlt}
              className="w-full h-[280px] sm:h-[380px] md:h-[440px] object-cover"
              width={780}
              height={440}
              loading="eager"
            />
            <div className="absolute top-3 right-3 z-10 pointer-events-none bg-[#0d684d]/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white border border-white/20 shadow-md">
              ✓ Finished Result: {afterLabel}
            </div>
          </div>
        )}

        {/* Camera HUD Overlay Stamp in Bottom Corner */}
        <div className="absolute bottom-3 right-3 z-10 pointer-events-none bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-[10px] sm:text-[11px] font-mono text-white flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse"></span>
          <span>CAM LOG: {gpsCoords}</span>
        </div>

        {/* Click to zoom prompt */}
        {viewMode !== 'slider' && (
          <div className="absolute bottom-3 left-3 z-10 pointer-events-none bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono text-white/85 hidden sm:block">
            🔍 Click image for high-resolution zoom
          </div>
        )}
      </div>

      {/* Geotag Telemetry & Field Verification Banner */}
      <div className="bg-[#0f172a] text-white px-4 py-2.5 rounded-b-2xl flex flex-wrap items-center justify-between gap-2 text-xs border-t border-[#9A3412]/40 text-left mt-[-2px]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-bold text-amber-400">Field Work Transformation:</span>
          <span className="text-white font-medium">{serviceTitle} • Cary, NC</span>
        </div>
        <div className="font-mono text-[11px] text-[#38bdf8] flex items-center gap-2">
          <span>GPS: {gpsCoords}</span>
          <span>•</span>
          <span>ELEV: {elevation}</span>
          <span>•</span>
          <span className="text-emerald-400 font-bold">WAKE COUNTY VERIFIED</span>
        </div>
      </div>

      {/* Close-Up Inspection Zoom Modal */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsZoomOpen(false)}
        >
          <div 
            className="bg-[#141c27] text-white rounded-2xl max-w-4xl w-full border border-white/20 overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-white text-base md:text-lg font-bold">
                  High-Resolution Field Inspection: {serviceTitle}
                </h3>
                <p className="text-xs text-white font-medium">
                  Cary NC Jobsite Telemetry: {gpsCoords} • Authentic Macro Craftsmanship
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Comparison Image Grid */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
              <div>
                <div className="text-xs font-bold text-[#f87171] mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#f87171]"></span>
                  Initial Condition ({beforeLabel})
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
                  <img
                    src={beforeSrc}
                    alt={beforeAlt}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in"
                  />
                </div>
                <p className="text-[11px] text-white mt-1.5 font-medium">
                  Field diagnostic snapshot highlighting weathering and leak vulnerabilities before intervention.
                </p>
              </div>

              <div>
                <div className="text-xs font-bold text-[#4ade80] mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4ade80]"></span>
                  Completed Installation ({afterLabel})
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
                  <img
                    src={afterSrc}
                    alt={afterAlt}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in"
                  />
                </div>
                <p className="text-[11px] text-white mt-1.5 font-medium">
                  Finished execution compliant with North Carolina High-Wind 130 MPH code and warranty standards.
                </p>
              </div>
            </div>

            {/* Full Split Image In Modal */}
            <div className="px-4 pb-4">
              <div className="text-xs font-bold text-[#38bdf8] mb-1.5 flex items-center gap-1.5">
                <span>📷 Full Split Field Work View</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={effectiveSplitSrc}
                  alt={afterAlt}
                  className="w-full max-h-80 object-cover"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-white/10 bg-black/40 flex flex-wrap items-center justify-between text-xs text-white">
              <span className="font-medium">📍 Town of Cary, Wake County, NC Service Area</span>
              <button
                type="button"
                onClick={() => setIsZoomOpen(false)}
                className="px-4 py-1.5 bg-[#9A3412] hover:bg-[#7C2D12] text-white rounded-lg font-extrabold cursor-pointer !text-white shadow-xs"
              >
                Close Inspection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
