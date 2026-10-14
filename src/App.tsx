import { useState, useEffect } from 'react';
import { ALL_SERVICES, COMPANY_DETAILS, ServiceInfo } from './data/roofingData';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { ServicePage } from './components/ServicePage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { OurLocationsPage } from './components/OurLocationsPage';
import { Footer } from './components/Footer';
import { RankAndRentSeoDrawer } from './components/RankAndRentSeoDrawer';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [seoDrawerOpen, setSeoDrawerOpen] = useState<boolean>(false);

  // Sync with window.location.hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ALL_SERVICES.some(s => s.slug === hash)) {
        setCurrentPath(hash);
      } else if (hash === 'privacy-policy' || hash === 'privacy' || hash === 'privacy-policy.html') {
        setCurrentPath('privacy-policy');
      } else if (hash === 'our-locations' || hash === 'locations' || hash === 'service-areas' || hash === 'our-locations.html') {
        setCurrentPath('our-locations');
      } else if (hash === 'additional' || hash === 'additional-roofing' || hash === 'specialty' || hash === 'ancillary-roofing') {
        setCurrentPath('additional-roofing-services-cary-nc-usa.html');
      } else if (hash === 'commercial-industrial' || hash === 'commercial' || hash === 'commercial-roofing' || hash === 'industrial-roofing') {
        setCurrentPath('commercial-industrial-roofing-cary-nc-usa.html');
      } else if (hash === 'structure-carpentry' || hash === 'roof-carpentry' || hash === 'roof-structure' || hash === 'carpentry') {
        setCurrentPath('roof-structure-carpentry-cary-nc-usa.html');
      } else if (hash === 'chimney-edge' || hash === 'chimney' || hash === 'fascia-soffit' || hash === 'roof-edge') {
        setCurrentPath('chimney-roof-edge-services-cary-nc-usa.html');
      } else if (hash === 'skylight-window' || hash === 'skylight' || hash === 'skylights' || hash === 'roof-window') {
        setCurrentPath('skylight-roof-window-services-cary-nc-usa.html');
      } else if (hash === 'storm-emergency' || hash === 'emergency-roofing' || hash === 'storm-roofing' || hash === 'storm-damage') {
        setCurrentPath('storm-emergency-roofing-services-cary-nc-usa.html');
      } else if (hash === 'coating-restoration' || hash === 'roof-coating' || hash === 'coating' || hash === 'restoration') {
        setCurrentPath('roof-coating-restoration-cary-nc-usa.html');
      } else if (hash === 'shingle-tile-slate' || hash === 'shingle-roofing' || hash === 'slate-roofing' || hash === 'tile-roofing') {
        setCurrentPath('shingle-tile-slate-roofing-cary-nc-usa.html');
      } else if (hash === 'flat-roofing' || hash === 'flat-roof') {
        setCurrentPath('flat-roofing-services-cary-nc-usa.html');
      } else if (hash === 'metal-roofing' || hash === 'metal-roof') {
        setCurrentPath('metal-roofing-services-cary-nc-usa.html');
      } else if (hash === 'insulation' || hash === 'roof-insulation') {
        setCurrentPath('roof-insulation-services-cary-nc-usa.html');
      } else if (hash === 'flashing-ventilation' || hash === 'roof-flashing-ventilation') {
        setCurrentPath('roof-flashing-ventilation-services-cary-nc-usa.html');
      } else if (hash === 'gutter' || hash === 'gutter-services') {
        setCurrentPath('gutter-services-cary-nc-usa.html');
      } else if (hash === 'waterproofing' || hash === 'roof-waterproofing') {
        setCurrentPath('roof-waterproofing-services-cary-nc-usa.html');
      } else if (hash === 'maintenance' || hash === 'roof-maintenance') {
        setCurrentPath('roof-maintenance-services-cary-nc-usa.html');
      } else if (hash === 'inspection' || hash === 'roof-inspection') {
        setCurrentPath('roof-inspection-services-cary-nc-usa.html');
      } else if (hash === 'replacement' || hash === 'roof-replacement') {
        setCurrentPath('roof-replacement-services-cary-nc-usa.html');
      } else if (hash === 'repair' || hash === 'roof-repair') {
        setCurrentPath('roof-repair-services-cary-nc-usa.html');
      } else if (hash === 'installation' || hash === 'roof-installation') {
        setCurrentPath('roof-installation-services-cary-nc-usa.html');
      } else if (hash === 'home' || hash === 'index.html' || !hash) {
        setCurrentPath('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update document title dynamically based on active page
  useEffect(() => {
    if (currentPath === 'home' || currentPath === 'index.html') {
      document.title = 'Best Roofing Services, Cary NC, | caryncroofing.com';
    } else if (currentPath === 'privacy-policy') {
      document.title = 'Privacy Policy | caryncroofing.com - Cary, NC';
    } else if (currentPath === 'our-locations') {
      document.title = 'Roofing Service Locations in Cary, NC & Triangle | caryncroofing.com';
    } else {
      const activeService = ALL_SERVICES.find(s => s.slug === currentPath);
      if (activeService) {
        document.title = `${activeService.title} | caryncroofing.com`;
      }
    }
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.location.hash = path === 'home' ? '' : path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeService: ServiceInfo | undefined = ALL_SERVICES.find(
    (s) => s.slug === currentPath
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-black">
      {/* Main Sticky Navbar */}
      <Navbar 
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenSeoDrawer={() => setSeoDrawerOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPath === 'privacy-policy' ? (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        ) : currentPath === 'our-locations' ? (
          <OurLocationsPage onNavigate={handleNavigate} />
        ) : currentPath === 'home' || !activeService ? (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenEstimator={() => setSeoDrawerOpen(true)}
          />
        ) : (
          <ServicePage 
            service={activeService} 
            onNavigate={handleNavigate}
            onOpenEstimator={() => setSeoDrawerOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenSeoDrawer={() => setSeoDrawerOpen(true)}
      />

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1e2a3a]/95 backdrop-blur-md border-t border-white/10 p-3 flex sm:hidden items-center justify-between gap-2 shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#F07020]">
            Emergency Dispatch
          </span>
          <span className="text-xs font-bold text-white">
            Wake County Local
          </span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              const bookEl = document.getElementById('book');
              if (bookEl) bookEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3 py-2 text-xs font-bold rounded-full bg-white/15 text-white border border-white/20"
          >
            Inspection
          </button>
          <a
            href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`}
            className="btn btn-primary !py-2 !px-4 !text-xs font-bold shadow-md"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Specifications & Dispatch Drawer */}
      <RankAndRentSeoDrawer 
        isOpen={seoDrawerOpen}
        onClose={() => setSeoDrawerOpen(false)}
        currentPageTitle={activeService ? activeService.title : 'Home Page'}
      />
    </div>
  );
}
