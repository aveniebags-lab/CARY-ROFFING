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
      <div className="container nav-container">
        <a 
          href="index.html" 
          className="logo"
          onClick={(e) => handleLinkClick(e, 'home')}
          title="Best Roofing Services, Cary NC, | CaryRoofing"
        >
          <img 
            src="/favicon.svg" 
            alt="CaryRoofing - Premier Roofing Services in Cary NC" 
            className="w-8 h-8 mr-2 inline-block rounded-lg shadow-xs" 
          />
          Cary<span className="text-[#F07020]">Roofing</span>
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
                  className={`text-left ${currentPath === service.slug ? 'font-bold text-[#F07020]' : ''}`}
                >
                  {service.navTitle}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => handleLinkClick(e, 'cary-nc-roofing-calculator.html')}
            className={`cursor-pointer ${currentPath === 'cary-nc-roofing-calculator.html' ? 'font-bold text-[#F07020]' : ''}`}
          >
            Roofing Calculator
          </button>

          <button
            type="button"
            onClick={(e) => handleLinkClick(e, 'our-locations')}
            className={`cursor-pointer ${currentPath === 'our-locations' ? 'font-bold text-[#F07020]' : ''}`}
          >
            Our Locations
          </button>

          <a 
            href="#recent-projects"
            onClick={(e) => scrollToSection(e, 'recent-projects')}
          >
            Recent Projects
          </a>

          <a 
            href="#why-us"
            onClick={(e) => scrollToSection(e, 'why-us')}
          >
            Why Work With Us
          </a>

          <button
            type="button"
            onClick={(e) => handleLinkClick(e, 'privacy-policy')}
            className={`cursor-pointer ${currentPath === 'privacy-policy' ? 'font-bold text-[#F07020]' : ''}`}
          >
            Privacy Policy
          </button>

          <a 
            href="#book"
            onClick={(e) => scrollToSection(e, 'book')}
          >
            Contact Us
          </a>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            onClick={(e) => scrollToSection(e, 'book')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-extrabold rounded-full bg-[#E8F8F1] text-[#0d684d] border border-[#0d684d]/30 hover:bg-[#0d684d] hover:text-white transition-all cursor-pointer shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#0d684d]"></span>
            Free Inspection
          </button>

          <a href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`} className="btn btn-primary !text-white font-extrabold">
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
