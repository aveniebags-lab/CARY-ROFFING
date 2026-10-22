import { useState, useEffect, lazy, Suspense } from 'react';
import { ALL_SERVICES, COMPANY_DETAILS, ServiceInfo } from './data/roofingData';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';

const ServicePage = lazy(() => import('./components/ServicePage').then(m => ({ default: m.ServicePage })));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./components/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));
const AboutUsPage = lazy(() => import('./components/AboutUsPage').then(m => ({ default: m.AboutUsPage })));
const ContactUsPage = lazy(() => import('./components/ContactUsPage').then(m => ({ default: m.ContactUsPage })));
const OurLocationsPage = lazy(() => import('./components/OurLocationsPage').then(m => ({ default: m.OurLocationsPage })));
const CalculatorPage = lazy(() => import('./components/CalculatorPage').then(m => ({ default: m.CalculatorPage })));
const StandingSeamMetalRoofPage = lazy(() => import('./components/StandingSeamMetalRoofPage').then(m => ({ default: m.StandingSeamMetalRoofPage })));
const TechnicalPortalDrawer = lazy(() => import('./components/TechnicalPortalDrawer').then(m => ({ default: m.TechnicalPortalDrawer })));

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [seoDrawerOpen, setSeoDrawerOpen] = useState<boolean>(false);

  // Clean URL handling without '#' sign using HTML5 History API
  useEffect(() => {
    const resolvePath = () => {
      let rawHash = '';
      // If legacy '#' sign is present in URL, strip it safely from the address bar
      if (window.location.hash) {
        rawHash = window.location.hash.replace(/^#\/?/, '').trim();
        const cleanTarget = rawHash && rawHash !== 'home' && rawHash !== 'index.html'
          ? `/${rawHash}`
          : '/';
        try {
          window.history.replaceState({ path: rawHash }, '', cleanTarget);
        } catch (_) {}
      }

      // Detect and eliminate legacy WordPress query parameter ?page_id=14 safely
      if (window.location.search && window.location.search.includes('page_id=')) {
        const cleanTarget = window.location.pathname === '/index.html' || !window.location.pathname ? '/' : window.location.pathname;
        try {
          window.history.replaceState({ path: 'home' }, '', cleanTarget);
        } catch (_) {}
      }

      // Extract clean pathname (e.g. /roof-installation-services-cary-nc-usa.html -> roof-installation-services-cary-nc-usa.html)
      const rawPathname = window.location.pathname.replace(/^\//, '').trim();
      const pathname = rawPathname === 'index.html' ? '' : rawPathname;
      const path = pathname || rawHash;

      let decodedPath = '';
      try {
        decodedPath = decodeURIComponent(path).toLowerCase();
      } catch (_) {
        decodedPath = path.toLowerCase();
      }

      if (!path || path === 'home' || path === 'index.html') {
        if (window.location.pathname === '/index.html') {
          try {
            window.history.replaceState({ path: 'home' }, '', '/');
          } catch (_) {}
        }
        setCurrentPath('home');
      } else if (ALL_SERVICES.some(s => s.slug === path)) {
        setCurrentPath(path);
      } else if (
        path === 'standing-seam-metal-roof' || 
        path === 'standing-seam-metal-roof.html' || 
        path === 'standing-seam' || 
        decodedPath.includes('why more homeowners are choosing standing seam metal roof') ||
        decodedPath.includes('why-more-homeowners-are-choosing-standing-seam-metal-roof') ||
        decodedPath.includes('standing-seam')
      ) {
        setCurrentPath('Why More Homeowners Are Choosing Standing Seam Metal Roof.html');
      } else if (path === 'calculator' || path === 'cary-nc-roofing-calculator.html' || path === 'roofing-calculator' || path === 'roofing-calculator.html') {
        setCurrentPath('cary-nc-roofing-calculator.html');
      } else if (path === 'privacy-policy' || path === 'privacy' || path === 'privacy-policy.html') {
        setCurrentPath('privacy-policy');
      } else if (path === 'terms-of-service' || path === 'terms' || path === 'terms-of-service.html') {
        setCurrentPath('terms-of-service.html');
      } else if (path === 'about-us' || path === 'about' || path === 'about.html' || path === 'about-cary-roofing-contractors.html') {
        setCurrentPath('about-cary-roofing-contractors.html');
      } else if (path === 'contact' || path === 'contact-us' || path === 'contact.html' || path === 'contact-cary-roofing.html') {
        setCurrentPath('contact-cary-roofing.html');
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
        try {
          window.history.replaceState(null, '', cleanTarget);
        } catch (_) {}
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
    } else if (
      currentPath === 'standing-seam-metal-roof' || 
      currentPath === 'standing-seam-metal-roof.html' ||
      currentPath.includes('Standing Seam') ||
      currentPath.includes('standing-seam')
    ) {
      document.title = 'Why More Homeowners Are Choosing Standing Seam Metal Roof Cary NC USA | CaryRoofing';
    } else if (currentPath === 'cary-nc-roofing-calculator.html' || currentPath === 'calculator') {
      document.title = 'Cary NC Roofing Calculator | Roof Replacement Cost Guide';
    } else if (currentPath === 'privacy-policy') {
      document.title = 'Privacy Policy | caryncroofing.com - Cary, NC';
    } else if (currentPath === 'terms-of-service.html') {
      document.title = 'Terms of Service & Warranty Conditions | caryncroofing.com';
    } else if (currentPath === 'about' || currentPath === 'about-cary-roofing-contractors.html') {
      document.title = 'About Us & Technical Credentials | Cary Roofing Contractors LLC';
    } else if (currentPath === 'contact' || currentPath === 'contact-cary-roofing.html') {
      document.title = 'Contact Us & Emergency Roof Dispatch | Cary, NC';
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
      : resolvedPath.includes(' ')
        ? `/${encodeURIComponent(resolvedPath)}`
        : `/${resolvedPath}`;

    if (window.location.pathname !== targetUrl && decodeURIComponent(window.location.pathname) !== `/${resolvedPath}`) {
      try {
        window.history.pushState({ path: resolvedPath }, '', targetUrl);
      } catch (_) {}
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
          {currentPath === 'standing-seam-metal-roof' || 
           currentPath === 'standing-seam-metal-roof.html' || 
           currentPath.includes('Standing Seam') || 
           currentPath.includes('standing-seam') ? (
            <StandingSeamMetalRoofPage onNavigate={handleNavigate} />
          ) : currentPath === 'cary-nc-roofing-calculator.html' || currentPath === 'calculator' ? (
            <CalculatorPage onNavigate={handleNavigate} />
          ) : currentPath === 'privacy-policy' ? (
            <PrivacyPolicyPage onNavigate={handleNavigate} />
          ) : currentPath === 'terms-of-service.html' ? (
            <TermsOfServicePage onNavigate={handleNavigate} />
          ) : currentPath === 'about-cary-roofing-contractors.html' || currentPath === 'about' || currentPath === 'about-us' ? (
            <AboutUsPage onNavigate={handleNavigate} />
          ) : currentPath === 'contact-cary-roofing.html' || currentPath === 'contact' || currentPath === 'contact-us' ? (
            <ContactUsPage onNavigate={handleNavigate} />
          ) : currentPath === 'our-locations' || currentPath === 'our-locations.html' ? (
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
            className="px-3 py-2 text-xs font-extrabold rounded-full bg-[#9A3412] hover:bg-[#7C2D12] text-white border border-white/20 shadow-xs"
          >
            Inspection
          </button>
          <a
            href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`}
            className="btn btn-primary !bg-[#9A3412] hover:!bg-[#7C2D12] !py-2 !px-4 !text-xs font-extrabold !text-white shadow-md"
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
