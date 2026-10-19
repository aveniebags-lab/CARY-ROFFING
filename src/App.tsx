import { useState, useEffect, lazy, Suspense } from 'react';
import { ALL_SERVICES, COMPANY_DETAILS, ServiceInfo } from './data/roofingData';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';

const ServicePage = lazy(() => import('./components/ServicePage').then(m => ({ default: m.ServicePage })));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const OurLocationsPage = lazy(() => import('./components/OurLocationsPage').then(m => ({ default: m.OurLocationsPage })));
const CalculatorPage = lazy(() => import('./components/CalculatorPage').then(m => ({ default: m.CalculatorPage })));
const TechnicalPortalDrawer = lazy(() => import('./components/TechnicalPortalDrawer').then(m => ({ default: m.TechnicalPortalDrawer })));

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [seoDrawerOpen, setSeoDrawerOpen] = useState<boolean>(false);

  // Clean URL handling without '#' sign using HTML5 History API
  useEffect(() => {
    const resolvePath = () => {
      let rawHash = '';
      // If legacy '#' sign is present in URL, strip it immediately from the address bar
      if (window.location.hash) {
        rawHash = window.location.hash.replace(/^#\/?/, '').trim();
        const cleanTarget = rawHash && rawHash !== 'home' && rawHash !== 'index.html'
          ? `/${rawHash}`
          : '/';
        window.history.replaceState({ path: rawHash }, '', cleanTarget);
      }

      // Extract clean pathname (e.g. /roof-installation-services-cary-nc-usa.html -> roof-installation-services-cary-nc-usa.html)
      const pathname = window.location.pathname.replace(/^\//, '').trim();
      const path = pathname || rawHash;

      if (!path || path === 'home' || path === 'index.html') {
        setCurrentPath('home');
      } else if (ALL_SERVICES.some(s => s.slug === path)) {
        setCurrentPath(path);
      } else if (path === 'calculator' || path === 'cary-nc-roofing-calculator.html' || path === 'roofing-calculator' || path === 'roofing-calculator.html') {
        setCurrentPath('cary-nc-roofing-calculator.html');
      } else if (path === 'privacy-policy' || path === 'privacy' || path === 'privacy-policy.html') {
        setCurrentPath('privacy-policy');
      } else if (path === 'our-locations' || path === 'locations' || path === 'service-areas' || path === 'our-locations.html') {
        setCurrentPath('our-locations');
      } else if (path === 'additional' || path === 'additional-roofing' || path === 'specialty' || path === 'ancillary-roofing') {
        setCurrentPath('additional-roofing-services-cary-nc-usa.html');
      } else if (path === 'commercial-industrial' || path === 'commercial' || path === 'commercial-roofing' || path === 'industrial-roofing') {
        setCurrentPath('commercial-industrial-roofing-cary-nc-usa.html');
      } else if (path === 'structure-carpentry' || path === 'roof-carpentry' || path === 'roof-structure' || path === 'carpentry') {
        setCurrentPath('roof-structure-carpentry-cary-nc-usa.html');
      } else if (path === 'chimney-edge' || path === 'chimney' || path === 'fascia-soffit' || path === 'roof-edge') {
        setCurrentPath('chimney-roof-edge-services-cary-nc-usa.html');
      } else if (path === 'skylight-window' || path === 'skylight' || path === 'skylights' || path === 'roof-window') {
        setCurrentPath('skylight-roof-window-services-cary-nc-usa.html');
      } else if (path === 'storm-emergency' || path === 'emergency-roofing' || path === 'storm-roofing' || path === 'storm-damage') {
        setCurrentPath('storm-emergency-roofing-services-cary-nc-usa.html');
      } else if (path === 'coating-restoration' || path === 'roof-coating' || path === 'coating' || path === 'restoration') {
        setCurrentPath('roof-coating-restoration-cary-nc-usa.html');
      } else if (path === 'shingle-tile-slate' || path === 'shingle-roofing' || path === 'slate-roofing' || path === 'tile-roofing') {
        setCurrentPath('shingle-tile-slate-roofing-cary-nc-usa.html');
      } else if (path === 'flat-roofing' || path === 'flat-roof') {
        setCurrentPath('flat-roofing-services-cary-nc-usa.html');
      } else if (path === 'metal-roofing' || path === 'metal-roof') {
        setCurrentPath('metal-roofing-services-cary-nc-usa.html');
      } else if (path === 'insulation' || path === 'roof-insulation') {
        setCurrentPath('roof-insulation-services-cary-nc-usa.html');
      } else if (path === 'flashing-ventilation' || path === 'roof-flashing-ventilation') {
        setCurrentPath('roof-flashing-ventilation-services-cary-nc-usa.html');
      } else if (path === 'gutter' || path === 'gutter-services') {
        setCurrentPath('gutter-services-cary-nc-usa.html');
      } else if (path === 'waterproofing' || path === 'roof-waterproofing') {
        setCurrentPath('roof-waterproofing-services-cary-nc-usa.html');
      } else if (path === 'maintenance' || path === 'roof-maintenance') {
        setCurrentPath('roof-maintenance-services-cary-nc-usa.html');
      } else if (path === 'inspection' || path === 'roof-inspection') {
        setCurrentPath('roof-inspection-services-cary-nc-usa.html');
      } else if (path === 'replacement' || path === 'roof-replacement') {
        setCurrentPath('roof-replacement-services-cary-nc-usa.html');
      } else if (path === 'repair' || path === 'roof-repair') {
        setCurrentPath('roof-repair-services-cary-nc-usa.html');
      } else if (path === 'installation' || path === 'roof-installation') {
        setCurrentPath('roof-installation-services-cary-nc-usa.html');
      } else {
        const matched = ALL_SERVICES.find(s => s.slug === path || s.id === path);
        if (matched) {
          setCurrentPath(matched.slug);
        } else {
          setCurrentPath('home');
        }
      }
    };

    resolvePath();

    // Prevent any '#' from appearing when external or internal hash event fires
    const handleHashChange = () => {
      if (window.location.hash) {
        const hashVal = window.location.hash.replace(/^#\/?/, '').trim();
        const cleanTarget = window.location.pathname || '/';
        window.history.replaceState(null, '', cleanTarget);
        if (hashVal) {
          const el = document.getElementById(hashVal);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('popstate', resolvePath);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', resolvePath);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Update document title dynamically based on active page
  useEffect(() => {
    if (currentPath === 'home' || currentPath === 'index.html') {
      document.title = 'Best Roofing Services, Cary NC, | caryncroofing.com';
    } else if (currentPath === 'cary-nc-roofing-calculator.html' || currentPath === 'calculator') {
      document.title = 'Cary NC Roofing Calculator | Roof Replacement Cost Guide';
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

  // Navigate using clean HTML5 pushState with NO '#' hash
  const handleNavigate = (path: string) => {
    const cleanPath = path.replace(/^\//, '').replace(/^#/, '').trim();
    const resolvedPath = cleanPath || 'home';
    setCurrentPath(resolvedPath);

    const targetUrl = resolvedPath === 'home' || resolvedPath === 'index.html'
      ? '/'
      : `/${resolvedPath}`;

    if (window.location.pathname !== targetUrl || window.location.hash) {
      window.history.pushState({ path: resolvedPath }, '', targetUrl);
    }
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
        <Suspense fallback={<div className="min-h-screen py-20 text-center text-sm font-bold text-black/60">Loading...</div>}>
          {currentPath === 'cary-nc-roofing-calculator.html' || currentPath === 'calculator' ? (
            <CalculatorPage onNavigate={handleNavigate} />
          ) : currentPath === 'privacy-policy' ? (
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
        </Suspense>
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenSeoDrawer={() => setSeoDrawerOpen(true)}
      />

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1e2a3a] border-t border-white/20 p-3 flex sm:hidden items-center justify-between gap-2 shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#FB923C]">
            Emergency Dispatch
          </span>
          <span className="text-xs font-bold text-white truncate max-w-[150px]">
            580 New Waverly Pl, Cary
          </span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              const bookEl = document.getElementById('book');
              if (bookEl) bookEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3 py-2 text-xs font-bold rounded-full bg-white/15 text-white border border-white/30"
          >
            Inspection
          </button>
          <a
            href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`}
            className="btn btn-primary !py-2 !px-4 !text-xs font-extrabold !text-white shadow-md"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Specifications & Dispatch Drawer */}
      {seoDrawerOpen && (
        <Suspense fallback={null}>
          <TechnicalPortalDrawer 
            isOpen={seoDrawerOpen}
            onClose={() => setSeoDrawerOpen(false)}
            currentPageTitle={activeService ? activeService.title : 'Home Page'}
          />
        </Suspense>
      )}
    </div>
  );
}
