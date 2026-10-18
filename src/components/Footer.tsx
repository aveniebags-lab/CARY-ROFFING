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
            />
            Cary<span className="text-[#F07020]">Roofing</span>
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
          <h4>Popular Roofing Services</h4>
          <div className="footer-links">
            {ALL_SERVICES.map((s) => (
              <button 
                key={s.slug}
                type="button"
                onClick={() => onNavigate(s.slug)}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Service Areas (Wake County)</h4>
          <div className="footer-links text-xs">
            <span>Central Cary (27511) – Downtown &amp; Kildaire</span>
            <span>East Cary (27512) – Crossroads &amp; Walnut St</span>
            <span>North Cary (27513) – Park West &amp; Weston</span>
            <span>South Cary (27518) – Waverly Pl &amp; Lochmere</span>
            <span>West Cary (27519) – Amberly &amp; Carpenter</span>
            <div className="pt-2">
              <button 
                type="button"
                onClick={() => onNavigate('our-locations')}
                className="text-[#F07020] font-bold hover:underline"
              >
                View Full Location &amp; Map Directory →
              </button>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <div className="footer-links">
            <a href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`} className="font-bold text-white hover:text-[#F07020]">
              📞 Main Hotline: {COMPANY_DETAILS.mainPhone}
            </a>
            <span>📍 Hub Address: {COMPANY_DETAILS.address}</span>
            <span>🕒 Hours: {COMPANY_DETAILS.dispatchHours}</span>
            <button 
              type="button"
              onClick={() => onNavigate('cary-nc-roofing-calculator.html')}
              className="text-[#FB923C] hover:underline text-left text-xs font-bold mt-1"
            >
              🧮 Cary NC Roofing Calculator
            </button>
            <button 
              type="button"
              onClick={() => onNavigate('our-locations')}
              className="text-white hover:text-[#FB923C] text-left text-xs font-semibold"
            >
              🗺️ View All Cary Service Locations
            </button>
            <button 
              type="button"
              onClick={() => onNavigate('privacy-policy')}
              className="text-white hover:text-[#FB923C] text-left text-xs font-semibold"
            >
              🔒 Privacy Policy &amp; Terms
            </button>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 CaryRoofing. All rights reserved.</p>
        <p>Cary, NC Roofing Experts • Connecting Homeowners With Top-Rated Local Contractors</p>
      </div>
    </footer>
  );
};
