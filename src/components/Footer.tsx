import React from 'react';
import { COMPANY_DETAILS, ALL_SERVICES } from '../data/roofingData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenSeoDrawer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSeoDrawer }) => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <div 
            className="logo logo-white cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img 
              src="/favicon.svg" 
              alt="CaryRoofing - Premier Roofing Network in Cary NC" 
              className="w-7 h-7 mr-2 inline-block rounded-md shadow-xs" 
              width={28}
              height={28}
            />
            Cary<span className="text-[#FB923C]">Roofing</span>
          </div>
          <p className="footer-desc mt-2">
            Premier local roofing network connecting homeowners in Cary, NC and Wake County with pre-screened, insured roofing professionals for high-standard craftsmanship and lifetime protection.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-white font-medium">
            <span>Verified Local Pro Network</span>
            <span>•</span>
            <span>Pre-Screened &amp; Insured Roofers</span>
            <span>•</span>
            <span>580 New Waverly Pl, Cary, NC 27518</span>
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={onOpenSeoDrawer}
              className="text-xs text-[#FB923C] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              ⚙ CaryRoofing Technical Specifications &amp; Cost Estimator
            </button>
          </div>
        </div>

        <div className="footer-col">
          <h3>Popular Roofing Services</h3>
          <div className="footer-links">
            {ALL_SERVICES.map((s) => (
              <a 
                key={s.slug}
                href={`/${s.slug}`}
                onClick={(e) => { e.preventDefault(); onNavigate(s.slug); }}
                className="text-white/90 hover:text-[#FB923C] text-left text-xs"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h3>Service Areas (Wake County)</h3>
          <div className="footer-links text-xs">
            <span>Central Cary (27511) – Downtown &amp; Kildaire</span>
            <span>East Cary (27512) – Crossroads &amp; Walnut St</span>
            <span>North Cary (27513) – Park West &amp; Weston</span>
            <span>South Cary (27518) – Waverly Pl &amp; Lochmere</span>
            <span>West Cary (27519) – Amberly &amp; Carpenter</span>
            <div className="pt-2">
              <a 
                href="/our-locations.html"
                onClick={(e) => { e.preventDefault(); onNavigate('our-locations'); }}
                className="text-[#FB923C] font-bold hover:underline"
              >
                View Full Location &amp; Map Directory →
              </a>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h3>Company, Trust &amp; Contact</h3>
          <div className="footer-links">
            <a href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`} className="font-bold text-white hover:text-[#FB923C]">
              📞 Main Hotline: {COMPANY_DETAILS.mainPhone}
            </a>
            <span>📍 Headquarters: {COMPANY_DETAILS.address}</span>
            <span>🕒 Hours: {COMPANY_DETAILS.dispatchHours}</span>
            <a 
              href="/about-cary-roofing-contractors.html"
              onClick={(e) => { e.preventDefault(); onNavigate('about-cary-roofing-contractors.html'); }}
              className="text-white hover:text-[#FB923C] text-left text-xs font-semibold"
            >
              🏢 About Us &amp; Technical Byline
            </a>
            <a 
              href="/contact-cary-roofing.html"
              onClick={(e) => { e.preventDefault(); onNavigate('contact-cary-roofing.html'); }}
              className="text-white hover:text-[#FB923C] text-left text-xs font-semibold"
            >
              ✉️ Contact Us &amp; Emergency Dispatch
            </a>
            <a 
              href="/cary-nc-roofing-calculator.html"
              onClick={(e) => { e.preventDefault(); onNavigate('cary-nc-roofing-calculator.html'); }}
              className="text-[#FB923C] hover:underline text-left text-xs font-bold"
            >
              🧮 Cary NC Roofing Calculator
            </a>
            <a 
              href="/privacy-policy.html"
              onClick={(e) => { e.preventDefault(); onNavigate('privacy-policy'); }}
              className="text-white hover:text-[#FB923C] text-left text-xs font-semibold"
            >
              🔒 Privacy Policy
            </a>
            <a 
              href="/terms-of-service.html"
              onClick={(e) => { e.preventDefault(); onNavigate('terms-of-service.html'); }}
              className="text-white hover:text-[#FB923C] text-left text-xs font-semibold"
            >
              📄 Terms of Service
            </a>
            <div className="pt-2 text-[11px] text-white/80 border-t border-white/10 space-y-1">
              <div>Author &amp; Inspector: <strong>Marcus Vance</strong> (NC Licensed)</div>
              <div>
                Official Codes: <a href="https://www.carync.gov/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Town of Cary</a> • <a href="https://codes.iccsafe.org/content/NCRC2018/chapter-9-roof-assemblies" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">NCRC Chapter 9</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 CaryRoofing. All rights reserved. Registered North Carolina Roofing Contractors Network.</p>
        <p>Cary, NC Roofing Experts • 580 New Waverly Pl Ste 216, Cary, NC 27518 • (919) 335-9543</p>
      </div>
    </footer>
  );
};
