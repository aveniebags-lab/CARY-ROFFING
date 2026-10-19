import React, { useState } from 'react';
import { ALL_SERVICES, COMPANY_DETAILS } from '../data/roofingData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSeoDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenSeoDrawer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    if (currentPath !== 'home' && currentPath !== 'index.html') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <a 
          href="/" 
          className="logo flex-shrink-0 mr-4 xl:mr-8"
          onClick={(e) => handleLinkClick(e, 'home')}
          title="Best Roofing Services, Cary NC | CaryRoofing"
        >
          <img 
            src="/favicon.svg" 
            alt="CaryRoofing - Premier Roofing Services in Cary NC" 
            className="w-8 h-8 mr-2.5 inline-block rounded-lg shadow-xs flex-shrink-0" 
            width={32}
            height={32}
          />
          <span className="whitespace-nowrap font-extrabold text-xl tracking-tight">
            Cary<span className="text-[#C2410C]">Roofing</span>
          </span>
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="navLinks">
          {/* DROPDOWN FOR OUR SERVICES */}
          <div 
            className={`dropdown ${dropdownOpen ? 'active' : ''}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              type="button" 
              className="dropdown-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              Our Services ▾
            </button>
            <div className="dropdown-menu">
              {ALL_SERVICES.map((service) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={(e) => handleLinkClick(e, service.slug)}
                  className={`text-left ${currentPath === service.slug ? 'font-bold text-[#D9531E]' : ''}`}
                >
                  {service.navTitle}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => handleLinkClick(e, 'cary-nc-roofing-calculator.html')}
            className={`cursor-pointer ${currentPath === 'cary-nc-roofing-calculator.html' ? 'font-bold text-[#D9531E]' : ''}`}
          >
            Roofing Calculator
          </button>

          <button
            type="button"
            onClick={(e) => handleLinkClick(e, 'our-locations')}
            className={`cursor-pointer ${currentPath === 'our-locations' ? 'font-bold text-[#D9531E]' : ''}`}
          >
            Our Locations
          </button>

          <button 
            type="button" 
            onClick={(e) => scrollToSection(e, 'recent-projects')}
            className="cursor-pointer hidden lg:inline-flex"
          >
            Recent Projects
          </button>

          <button 
            type="button" 
            onClick={(e) => scrollToSection(e, 'why-us')}
            className="cursor-pointer hidden xl:inline-flex"
          >
            Why Us
          </button>

          <button
            type="button"
            onClick={(e) => handleLinkClick(e, 'privacy-policy')}
            className={`cursor-pointer ${mobileMenuOpen ? 'inline-flex' : 'hidden 2xl:inline-flex'} ${currentPath === 'privacy-policy' ? 'font-bold text-[#D9531E]' : ''}`}
          >
            Privacy Policy
          </button>

          <button 
            type="button" 
            onClick={(e) => scrollToSection(e, 'book')}
            className="cursor-pointer"
          >
            Contact
          </button>
        </nav>

        <div className="nav-actions flex-shrink-0">
          <button
            type="button"
            onClick={(e) => scrollToSection(e, 'book')}
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-extrabold rounded-full bg-[#E8F8F1] text-[#0d684d] border border-[#0d684d]/30 hover:bg-[#0d684d] hover:text-white transition-all cursor-pointer shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#0d684d]"></span>
            Free Inspection
          </button>

          <a href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`} className="btn btn-primary !text-white font-extrabold shadow-sm">
            Call Us Now
          </a>

          <button 
            className="mobile-toggle" 
            id="mobileToggle" 
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
