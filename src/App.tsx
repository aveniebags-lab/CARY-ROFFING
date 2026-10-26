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

function normalizeRouteSlug(rawInput: string): string {
  const cleaned = rawInput.replace(/^#\/?/, '').replace(/^\/+|\/+$/g, '').trim();
  if (!cleaned || cleaned === 'home' || cleaned === 'index.html') {
    return 'home';
  }

  let decodedPath = '';
  try {
    decodedPath = decodeURIComponent(cleaned).toLowerCase();
  } catch (_) {
    decodedPath = cleaned.toLowerCase();
  }

  const directMatch = ALL_SERVICES.find(
    (s) => s.slug.toLowerCase() === decodedPath || s.slug.replace(/\.html$/i, '').toLowerCase() === decodedPath || s.id.toLowerCase() === decodedPath
  );
  if (directMatch) {
    return directMatch.slug;
  }

  if (
    cleaned === 'Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof' ||
    cleaned === 'Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof.html' ||
    decodedPath === 'standing-seam-metal-roof' ||
    decodedPath === 'standing-seam-metal-roof.html' ||
    decodedPath === 'standing-seam' ||
    decodedPath.includes('why-more-homeowners-are-choosing-standing-seam-metal-roof') ||
    decodedPath.includes('why more homeowners are choosing standing seam metal roof') ||
    decodedPath.includes('standing-seam')
  ) {
    return 'Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof';
  }
  if (
    decodedPath === 'calculator' ||
    decodedPath === 'cary-nc-roofing-calculator' ||
    decodedPath === 'cary-nc-roofing-calculator.html' ||
    decodedPath === 'roofing-calculator' ||
    decodedPath === 'roofing-calculator.html'
  ) {
    return 'cary-nc-roofing-calculator.html';
  }
  if (decodedPath === 'privacy-policy' || decodedPath === 'privacy' || decodedPath === 'privacy-policy.html') {
    return 'privacy-policy.html';
  }
  if (decodedPath === 'terms-of-service' || decodedPath === 'terms' || decodedPath === 'terms-of-service.html') {
    return 'terms-of-service.html';
  }
  if (
    decodedPath === 'about-us' ||
    decodedPath === 'about' ||
    decodedPath === 'about.html' ||
    decodedPath === 'about-cary-roofing-contractors' ||
    decodedPath === 'about-cary-roofing-contractors.html'
  ) {
    return 'about-cary-roofing-contractors.html';
  }
  if (
    decodedPath === 'contact' ||
    decodedPath === 'contact-us' ||
    decodedPath === 'contact.html' ||
    decodedPath === 'contact-cary-roofing' ||
    decodedPath === 'contact-cary-roofing.html'
  ) {
    return 'contact-cary-roofing.html';
  }
  if (
    decodedPath === 'our-locations' ||
    decodedPath === 'locations' ||
    decodedPath === 'service-areas' ||
    decodedPath === 'our-locations.html'
  ) {
    return 'our-locations.html';
  }
  if (decodedPath === 'additional' || decodedPath === 'additional-roofing' || decodedPath === 'specialty' || decodedPath === 'ancillary-roofing') {
    return 'additional-roofing-services-cary-nc-usa.html';
  }
  if (decodedPath === 'commercial-industrial' || decodedPath === 'commercial' || decodedPath === 'commercial-roofing' || decodedPath === 'industrial-roofing') {
    return 'commercial-industrial-roofing-cary-nc-usa.html';
  }
  if (decodedPath === 'structure-carpentry' || decodedPath === 'roof-carpentry' || decodedPath === 'roof-structure' || decodedPath === 'carpentry') {
    return 'roof-structure-carpentry-cary-nc-usa.html';
  }
  if (decodedPath === 'chimney-edge' || decodedPath === 'chimney' || decodedPath === 'fascia-soffit' || decodedPath === 'roof-edge') {
    return 'chimney-roof-edge-services-cary-nc-usa.html';
  }
  if (decodedPath === 'skylight-window' || decodedPath === 'skylight' || decodedPath === 'skylights' || decodedPath === 'roof-window') {
    return 'skylight-roof-window-services-cary-nc-usa.html';
  }
  if (decodedPath === 'storm-emergency' || decodedPath === 'emergency-roofing' || decodedPath === 'storm-roofing' || decodedPath === 'storm-damage') {
    return 'storm-emergency-roofing-services-cary-nc-usa.html';
  }
  if (decodedPath === 'coating-restoration' || decodedPath === 'roof-coating' || decodedPath === 'coating' || decodedPath === 'restoration') {
    return 'roof-coating-restoration-cary-nc-usa.html';
  }
  if (decodedPath === 'shingle-tile-slate' || decodedPath === 'shingle-roofing' || decodedPath === 'slate-roofing' || decodedPath === 'tile-roofing') {
    return 'shingle-tile-slate-roofing-cary-nc-usa.html';
  }
  if (decodedPath === 'flat-roofing' || decodedPath === 'flat-roof') {
    return 'flat-roofing-services-cary-nc-usa.html';
  }
  if (decodedPath === 'metal-roofing' || decodedPath === 'metal-roof') {
    return 'metal-roofing-services-cary-nc-usa.html';
  }
  if (decodedPath === 'insulation' || decodedPath === 'roof-insulation') {
    return 'roof-insulation-services-cary-nc-usa.html';
  }
  if (decodedPath === 'flashing-ventilation' || decodedPath === 'roof-flashing-ventilation') {
    return 'roof-flashing-ventilation-services-cary-nc-usa.html';
  }
  if (decodedPath === 'gutter' || decodedPath === 'gutter-services') {
    return 'gutter-services-cary-nc-usa.html';
  }
  if (decodedPath === 'waterproofing' || decodedPath === 'roof-waterproofing') {
    return 'roof-waterproofing-services-cary-nc-usa.html';
  }
  if (
    decodedPath === 'maintenance' ||
    decodedPath === 'roof-maintenance' ||
    decodedPath === 'roof-maintenance-services-cary-nc-usa' ||
    decodedPath === 'roof-maintenance-services-cary-nc-usa.html'
  ) {
    return 'roof-inspection-services-cary-nc-usa.html';
  }
  if (decodedPath === 'inspection' || decodedPath === 'roof-inspection') {
    return 'roof-inspection-services-cary-nc-usa.html';
  }
  if (decodedPath === 'replacement' || decodedPath === 'roof-replacement') {
    return 'roof-replacement-services-cary-nc-usa.html';
  }
  if (decodedPath === 'repair' || decodedPath === 'roof-repair') {
    return 'roof-repair-services-cary-nc-usa.html';
  }
  if (decodedPath === 'installation' || decodedPath === 'roof-installation') {
    return 'roof-installation-services-cary-nc-usa.html';
  }

  return 'home';
}

function getInitialBrowserRoute(): string {
  if (typeof window === 'undefined') return 'home';
  const rawPathname = window.location.pathname.replace(/^\/+|\/+$/g, '').trim();
  const pathname = rawPathname === 'index.html' ? '' : rawPathname;
  const rawHash = window.location.hash ? window.location.hash.replace(/^#\/?/, '').trim() : '';
  return normalizeRouteSlug(pathname || rawHash);
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => getInitialBrowserRoute());
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

      const rawPathname = window.location.pathname.replace(/^\/+|\/+$/g, '').trim();
      if (window.location.pathname === '/index.html') {
        try {
          window.history.replaceState({ path: 'home' }, '', '/');
        } catch (_) {}
      }
      const pathname = rawPathname === 'index.html' ? '' : rawPathname;
      const resolved = normalizeRouteSlug(pathname || rawHash);
      setCurrentPath(resolved);
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
      currentPath === 'Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof' ||
      currentPath === 'standing-seam-metal-roof' || 
      currentPath === 'standing-seam-metal-roof.html' ||
      currentPath.includes('Standing-Seam') ||
      currentPath.includes('Standing Seam') ||
      currentPath.includes('standing-seam')
    ) {
      document.title = 'Why More Homeowners Are Choosing Standing Seam Metal Roof Cary NC USA | CaryRoofing';
    } else if (currentPath === 'cary-nc-roofing-calculator.html' || currentPath === 'calculator') {
      document.title = 'Cary NC Roofing Calculator | Roof Replacement Cost Guide';
    } else if (currentPath === 'privacy-policy.html' || currentPath === 'privacy-policy') {
      document.title = 'Privacy Policy & Data Protection | caryncroofing.com - Cary, NC';
    } else if (currentPath === 'terms-of-service.html') {
      document.title = 'Terms of Service & Warranty Conditions | caryncroofing.com - Cary, NC';
    } else if (currentPath === 'about' || currentPath === 'about-cary-roofing-contractors.html') {
      document.title = 'About Us & Technical Credentials | Cary Roofing Contractors LLC';
    } else if (currentPath === 'contact' || currentPath === 'contact-cary-roofing.html') {
      document.title = 'Contact Us & Emergency Roof Dispatch | Cary Roofing Contractors LLC';
    } else if (currentPath === 'our-locations.html' || currentPath === 'our-locations') {
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
    const resolvedPath = normalizeRouteSlug(path);
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
          {currentPath === 'Why-More-Homeowners-Are-Choosing-Standing-Seam-Metal-Roof' ||
           currentPath === 'standing-seam-metal-roof' || 
           currentPath === 'standing-seam-metal-roof.html' || 
           currentPath.includes('Standing-Seam') ||
           currentPath.includes('Standing Seam') || 
           currentPath.includes('standing-seam') ? (
            <StandingSeamMetalRoofPage onNavigate={handleNavigate} />
          ) : currentPath === 'cary-nc-roofing-calculator.html' || currentPath === 'calculator' ? (
            <CalculatorPage onNavigate={handleNavigate} />
          ) : currentPath === 'privacy-policy.html' || currentPath === 'privacy-policy' ? (
            <PrivacyPolicyPage onNavigate={handleNavigate} />
          ) : currentPath === 'terms-of-service.html' ? (
            <TermsOfServicePage onNavigate={handleNavigate} />
          ) : currentPath === 'about-cary-roofing-contractors.html' || currentPath === 'about' || currentPath === 'about-us' ? (
            <AboutUsPage onNavigate={handleNavigate} />
          ) : currentPath === 'contact-cary-roofing.html' || currentPath === 'contact' || currentPath === 'contact-us' ? (
            <ContactUsPage onNavigate={handleNavigate} />
          ) : currentPath === 'our-locations.html' || currentPath === 'our-locations' ? (
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
