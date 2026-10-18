export interface ServiceInfo {
  id: string;
  slug: string;
  title: string;
  navTitle: string;
  category: string;
  shortDesc: string;
  heroKicker: string;
  heroTitle: string;
  heroDesc: string;
  localImage: string;
  imageAlt: string;
  splitImage?: string;
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  gpsCoords?: string;
  elevation?: string;
  benchmarkNote?: string;
  solutions: Array<{
    title: string;
    desc: string;
    iconSvg: string;
  }>;
  methodologyTitle: string;
  methodologySteps: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  faqs: Array<{
    q: string;
    a: string;
    note?: string;
  }>;
}

export interface ZipCoverageInfo {
  zip: string;
  areaName: string;
  phone: string;
  phoneRaw: string;
  coords: string;
  lat: number;
  lng: number;
  desc: string;
  neighborhoods: string[];
  landmarks: string[];
}

export const CARY_ZIP_CODES: ZipCoverageInfo[] = [
  {
    zip: "27511",
    areaName: "Central Cary, NC",
    phone: "(919) 335-9543",
    phoneRaw: "+19193359543",
    coords: "35.7725° N, 78.7812° W",
    lat: 35.7725,
    lng: -78.7812,
    desc: "Providing expert residential and commercial roofing repairs and replacements across Central Cary neighborhoods.",
    neighborhoods: [
      "Downtown Cary Historic District",
      "Kildaire Farms",
      "Executive Park",
      "Fenton",
      "Farmington Woods"
    ],
    landmarks: ["Downtown Cary Park", "Koka Booth Amphitheatre", "Cary Arts Center"]
  },
  {
    zip: "27512",
    areaName: "East Cary, NC",
    phone: "(919) 756-3165",
    phoneRaw: "+19197563165",
    coords: "35.7850° N, 78.7500° W",
    lat: 35.785,
    lng: -78.75,
    desc: "Fast-response roof leak repairs, storm damage restoration, and maintenance for East Cary businesses and homes.",
    neighborhoods: [
      "Walnut Street Commercial Corridor",
      "Crossroads Plaza Area",
      "Buck Jones Belt",
      "Macedonia"
    ],
    landmarks: ["Crossroads Plaza Area", "WakeMed Cary Hospital Hub"]
  },
  {
    zip: "27513",
    areaName: "North Cary, NC",
    phone: "(984) 520-4071",
    phoneRaw: "+19845204071",
    coords: "35.8010° N, 78.8051° W",
    lat: 35.801,
    lng: -78.8051,
    desc: "Full-service roofing inspections, tile, shingle, and metal roofing solutions for North Cary residents.",
    neighborhoods: [
      "Park West Village",
      "Weatherstone",
      "Oakhurst",
      "Black Creek Greenway Area"
    ],
    landmarks: ["North Cary Park", "Fred G. Bond Metro Park (North)", "Weston Pkwy"]
  },
  {
    zip: "27518",
    areaName: "South Cary, NC",
    phone: "(919) 973-7931",
    phoneRaw: "+19199737931",
    coords: "35.7368° N, 78.7832° W",
    lat: 35.7368,
    lng: -78.7832,
    desc: "Premium roof replacements, gutter services, and chimney flashing in South Cary communities.",
    neighborhoods: [
      "Waverly Place (580 New Waverly Pl)",
      "Lochmere",
      "Regency",
      "Sherwood Forest"
    ],
    landmarks: ["Hemlock Bluffs Nature Preserve", "Regency Park Area"]
  },
  {
    zip: "27519",
    areaName: "West Cary, NC",
    phone: "(919) 335-9948",
    phoneRaw: "+19193359948",
    coords: "35.8115° N, 78.8890° W",
    lat: 35.8115,
    lng: -78.889,
    desc: "Comprehensive storm damage repair, roof waterproofing, and new roof installations in West Cary.",
    neighborhoods: [
      "Amberly",
      "Carpenter Village",
      "Green Level",
      "Wellsley"
    ],
    landmarks: ["Thomas Brooks Park", "USA Baseball National Training Complex", "Parkside Town Commons"]
  }
];

export const COMPANY_DETAILS = {
  name: "CaryRoofing",
  tagline: "The Trusted Choice for Cary, NC Homeowners",
  mainPhone: "+1 919-335-9543",
  mainPhoneRaw: "+19193359543",
  address: "580 New Waverly Pl Ste 216, Cary, NC 27518",
  city: "Cary",
  state: "NC",
  zip: "27518",
  dispatchHours: "Rapid Local Service (Mon - Sun 7:00 AM - 9:00 PM)",
  email: "caryncroofing@gmail.com",
  license: "Vetted Local Certified Roofing Network",
  insurance: "Verified Local Licensed & Insured Partners ($2M Coverage)"
};

export const ALL_SERVICES: ServiceInfo[] = [
  {
    id: "installation",
    slug: "roof-installation-services-cary-nc-usa.html",
    title: "Roof Installation Services Cary NC USA",
    navTitle: "Roof Installation Services Cary NC USA",
    category: "Installation & Replacement",
    shortDesc: "Complete new roof installations using architectural shingles, metal, tile, and low-slope flat roofs tailored for Wake County homes.",
    heroKicker: "Wake County Fast Dispatch • Code-Compliant Builds",
    heroTitle: "Roof Installation Services Cary NC USA",
    heroDesc: "Installing a new roof is one of the most critical structural investments for any residential or commercial property in Cary, NC. Built to withstand subtropical storm cycles with North Carolina code compliance.",
    localImage: "/images/split-installation.webp",
    splitImage: "/images/split-installation.webp",
    imageAlt: "Field comparison showing roof installation tear-off versus new architectural shingles in Cary NC",
    beforeImage: "/images/split-installation-before.webp",
    afterImage: "/images/split-installation-after.webp",
    beforeAlt: "Jobsite tear-off of rotting roof decking and old curled shingles on Cary NC home",
    beforeLabel: "Rotted Decking & Old Shingle Tear-Off (Before)",
    afterLabel: "GAF Synthetic Underlayment & New Shingles (After)",
    gpsCoords: "35.7725° N, 78.7812° W",
    elevation: "418 FT",
    solutions: [
      {
        title: "New Roof Installation",
        desc: "Complete build & new roof placement with engineered trusses",
        iconSvg: "home"
      },
      {
        title: "Residential Roofing",
        desc: "Home protection & aesthetic upgrades for Cary subdivisions",
        iconSvg: "layers"
      },
      {
        title: "Commercial Roofing",
        desc: "Heavy-duty systems for RTP and Crossroads business properties",
        iconSvg: "building"
      },
      {
        title: "Tile Roofing Installation",
        desc: "Clay & concrete slate tiles engineered for steep-pitch homes",
        iconSvg: "grid"
      },
      {
        title: "Flat Roofing Systems",
        desc: "Low-slope & waterproof flat decks using heat-welded TPO",
        iconSvg: "square"
      },
      {
        title: "Rubber Roofing (EPDM)",
        desc: "Durable, leak-proof membrane solutions with vulcanized seams",
        iconSvg: "shield"
      },
      {
        title: "Green Roofing",
        desc: "Eco-friendly vegetation roof systems with root barrier membranes",
        iconSvg: "leaf"
      }
    ],
    methodologyTitle: "Step-by-Step Roof Installation Methodology",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Property Protection & Old Roof Tear-Off",
        desc: "Before installation begins, we protect your landscaping, gutters, and surrounding property with protective tarping. Our team completely strips away old shingle layers down to the bare wooden roof decking to inspect for hidden rot, water damage, or structural weakness caused by Wake County's seasonal humidity."
      },
      {
        step: "Step 2",
        title: "Decking Inspection & Plywood Repair",
        desc: "During the decking inspection and plywood replacement process, old materials including every part of each sheet are carefully inspected. Any faulty, spongy, or bent sheets are swapped out for APA-rated 1/2-inch CDX exterior plywood."
      },
      {
        step: "Step 3",
        title: "Synthetic Underlayment & Ice/Water Shield Installation",
        desc: "We install heavy-duty synthetic underlayment across the entire roof surface for high-performance moisture protection. For maximum leak protection during severe Wake County rainstorms, high-temperature Ice & Water Shield membranes are applied along roof valleys, eaves, chimneys, and pipe vents."
      },
      {
        step: "Step 4",
        title: "Drip Edge, Flashing & Starter Strip Placement",
        desc: "Our team applies metal drip edges along roof perimeter edges for extra protection to prevent rainwater from curling behind gutters into fascia boards. Metal step and counter-flashing are installed around chimneys and sidewalls. Starter shingles are adhered along roof edges to withstand 130 MPH thunderstorms."
      },
      {
        step: "Step 5",
        title: "Architectural Shingle / Material Application",
        desc: "Under the supervision of our master roofers, we install asphalt shingles, metal roofing panels, or flat roof materials according to manufacturer specifications. Shingles are secured with a strict 6-nail pneumatic pattern along the reinforced nail strip."
      },
      {
        step: "Step 6",
        title: "Attic Ventilation, Site Cleanup & Final Quality Check",
        desc: "Proper airflow is critical during the humid summer season. We install continuous ridge vents for optimal attic ventilation. Finally, we triple-sweep the property with magnetic rollers and conduct a thorough quality inspection."
      }
    ],
    faqs: [
      {
        q: "1. How much does a roof replacement cost in Cary, North Carolina?",
        a: "The cost of a residential roof installation in Cary, NC depends on several property factors, including total square footage, roof pitch, chosen material (architectural shingles, tile, metal, or flat roofing), and underlying structural needs. Typical costs range between $7,500 and $15,500 for a 2,200 to 2,800 sq ft home.",
        note: "Important Note: Total pricing varies for every home. An accurate and exact cost is determined after a detailed on-site roof inspection by our local Cary team."
      },
      {
        q: "2. How do local roofing contractors estimate the cost of a new roof installation?",
        a: "Professional roofing contractors in Cary, NC evaluate costs based on core project metrics: Total size and layout complexity of the roof surface, roof slope steepness, material selection (asphalt shingles, standing seam metal, tile, flat membrane), and the degree of old material tear-off and plywood decking repairs.",
        note: "Important Note: Because hidden structural damages vary, an exact written estimate is provided after a full roofing inspection."
      },
      {
        q: "3. Why are roof replacement costs changing, and what is the most expensive part of installation?",
        a: "Roof replacement costs depend on high-quality weather-resistant materials, specialized safety requirements, and expert engineering labor. The primary expense is usually the roofing materials, followed by labor for complete tear-off and leak-prevention flashing."
      },
      {
        q: "4. How long do metal roofs last in North Carolina's climate?",
        a: "A professionally executed metal roof installation in Cary, NC offers long-term durability against subtropical weather, heavy spring rainstorms, seasonal hail, and humid summers. Metal roofing systems easily last 50 to 70+ years when properly maintained."
      },
      {
        q: "5. Does a 50-year asphalt shingle roof last the full 50 years in Cary, NC?",
        a: "A '50-year' rating refers to standard manufacturer material coverage under ideal conditions. Due to Cary's humid subtropical climate and intense summer heat, real-world lifespan is typically 25 to 35 years. High-quality attic ventilation and periodic roof inspections ensure your shingles achieve maximum performance."
      },
      {
        q: "6. Should a 20-year-old roof be replaced?",
        a: "Yes. If your roof is approaching or past 20 years, key components like underlayment and flashings may be wearing out. Scheduling a professional roof replacement inspection helps detect hidden moisture or decking rot before major leaks affect your home."
      },
      {
        q: "7. What time of year is best to schedule a roof replacement in Cary, NC?",
        a: "Late winter and early spring are excellent times for a new roof installation in Cary, NC. Scheduling before peak summer heat or heavy storm seasons allows for greater timeline flexibility and seamless installation service."
      },
      {
        q: "8. Which company is the best for roof installation in Cary, NC?",
        a: "The best roofing company in Cary, NC is one that is local, fully licensed, insured, and deeply experienced with Wake County building codes. Look for contractors who offer structured installation processes, written warranties, and thorough preliminary roofing inspections."
      }
    ]
  },
  {
    id: "repair",
    slug: "roof-repair-services-cary-nc-usa.html",
    title: "Roof Repair Services Cary NC USA",
    navTitle: "Roof Repair Services Cary NC USA",
    category: "Repairs & Leaks",
    shortDesc: "Comprehensive roof repair services in Cary, NC. Specialized diagnostics for roof leak repair, emergency storm fixes, shingle, metal, flashing, and structural restoration.",
    heroKicker: "Wake County Fast Dispatch • 24/7 Emergency Response",
    heroTitle: "Roof Repair Services Cary NC USA",
    heroDesc: "Don't let a minor leak compromise your home's structural framing. Our certified local Cary roof repair technicians provide rapid on-site diagnostics, emergency tarping, and permanent leak fixes across all Wake County zip codes.",
    localImage: "/images/split-repair.webp",
    splitImage: "/images/split-repair.webp",
    imageAlt: "Side by side roof leak repair in Cary NC with new Owens Corning architectural shingles",
    beforeImage: "/images/split-repair-before.webp",
    afterImage: "/images/split-repair-after.webp",
    beforeAlt: "Water damaged cracked shingles leaking in Cary NC subdivision before repair",
    beforeLabel: "Cracked Leaking Shingles & Rot (Before)",
    afterLabel: "Seamless Architectural Shingle Replacement (After)",
    gpsCoords: "35.7915° N, 78.7811° W",
    elevation: "435 FT",
    solutions: [
      {
        title: "Roof Leak Repair",
        desc: "Precision moisture tracing, attic leak diagnostic, and interior water damage prevention.",
        iconSvg: "droplet"
      },
      {
        title: "Emergency Roof Repair",
        desc: "24/7 immediate dispatch, emergency waterproof tarping, and storm stabilization.",
        iconSvg: "alert"
      },
      {
        title: "Storm Damage Roof Repair",
        desc: "Restoring roofs compromised by severe North Carolina thunderstorms and microbursts.",
        iconSvg: "storm"
      },
      {
        title: "Wind Damage Roof Repair",
        desc: "Replacing blown-off shingles, torn starter strips, and re-securing uplifted ridge lines.",
        iconSvg: "wind"
      },
      {
        title: "Hail Damage Roof Repair",
        desc: "Fixing bruised shingle mats, cracked ceramic tiles, and dented metal panels.",
        iconSvg: "shield"
      },
      {
        title: "Rain Damage Roof Repair",
        desc: "Eliminating ceiling discoloration, sheetrock water pockets, and moisture seepage.",
        iconSvg: "cloud-rain"
      },
      {
        title: "Shingle Roof Repair",
        desc: "Matching architectural & 3-tab shingles with exact color blends and 130 MPH wind sealants.",
        iconSvg: "layers"
      },
      {
        title: "Metal Roof Repair",
        desc: "Tightening loose neoprene screw gaskets, re-seaming standing panels, and sealing rust.",
        iconSvg: "shield"
      },
      {
        title: "Flat Roof Repair",
        desc: "Hot-air seam patching, blister repairs, and drain clearing on TPO, EPDM, and modified bitumen.",
        iconSvg: "square"
      },
      {
        title: "Tile Roof Repair",
        desc: "Swapping fractured Spanish barrel, clay, and concrete tiles with authentic mortar fits.",
        iconSvg: "grid"
      },
      {
        title: "Slate Roof Repair",
        desc: "Custom copper bibbing and slate tile replacement preserving historic Cary home integrity.",
        iconSvg: "layers"
      },
      {
        title: "Roof Flashing Repair",
        desc: "Counter-flashing renewal around chimneys, walls, dormers, and parapet transitions.",
        iconSvg: "square"
      },
      {
        title: "Roof Valley Repair",
        desc: "Re-lining critical convergence valleys with self-adhering ice-and-water barrier membranes.",
        iconSvg: "droplet"
      },
      {
        title: "Roof Ridge Repair",
        desc: "Restoring blown-away ridge caps and reinforcing continuous attic ventilation caps.",
        iconSvg: "home"
      },
      {
        title: "Roof Puncture Repair",
        desc: "Fixing fallen pine tree limb punctures, HVAC punctures, and satellite dish holes.",
        iconSvg: "alert"
      },
      {
        title: "Roof Crack Repair",
        desc: "Sealing hairline deck fissures, drying shingle cracks, and thermal expansion joints.",
        iconSvg: "tool"
      },
      {
        title: "Roof Sagging Repair",
        desc: "Re-leveling bowed roof planes, jack-bracing dipped rafters, and reinforcing ridge beams.",
        iconSvg: "building"
      },
      {
        title: "Roof Structural Repair",
        desc: "Replacing rotted wood trusses, sistering damaged rafters, and rebuilding deteriorated fascia.",
        iconSvg: "wrench"
      },
      {
        title: "Roof Drainage Repair",
        desc: "Re-pitching scuppers, eliminating standing ponding water, and clearing drain aprons.",
        iconSvg: "cloud-rain"
      },
      {
        title: "Roof Fastener Repair",
        desc: "Extracting backed-out roofing nails, replacing deteriorated washers, and screw re-anchoring.",
        iconSvg: "tool"
      }
    ],
    methodologyTitle: "Step-by-Step Roof Repair & Diagnostic Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Attic Cavity & Thermal Moisture Probe",
        desc: "Before stepping on the roof, our Cary technicians enter your attic to trace active moisture tracks, damp insulation, and rafter stains using calibrated digital moisture meters and infrared thermal imaging."
      },
      {
        step: "Step 2",
        title: "Exterior Penetration & Valley Failure Mapping",
        desc: "We inspect all potential water entry points: step flashings, chimney saddles, rubber plumbing vent boots, roof valley seams, and hail-bruised shingle mats throughout the roof slope."
      },
      {
        step: "Step 3",
        title: "Damaged Material Extraction & Decking Inspection",
        desc: "Defective shingles, rotted wood decking, or failed sealants are carefully removed down to sound sub-layers without damaging surrounding healthy roof materials."
      },
      {
        step: "Step 4",
        title: "Sub-Surface Waterproof Barrier Installation",
        desc: "We apply heavy-duty, high-temperature Ice & Water Shield self-adhering membranes over vulnerable decking areas, creating an impenetrable secondary moisture barrier."
      },
      {
        step: "Step 5",
        title: "Precision Material Application & Fastener Anchoring",
        desc: "Matching shingles, metal panels, or flat roof membranes are installed with galvanized ring-shank nails or specialized fasteners according to North Carolina State Building Code specifications."
      },
      {
        step: "Step 6",
        title: "Perimeter Sealing & High-Volume Water Testing",
        desc: "All seams and counter-flashings are double-sealed with industrial polyurethane. We conduct a simulated high-volume water test to guarantee 100% leak-proof performance before site cleanup."
      }
    ],
    faqs: [
      {
        q: "1. How quickly can your team arrive for an Emergency Roof Repair or active Roof Leak Repair in Cary, NC?",
        a: "We offer 24/7 priority emergency dispatch across all Cary zip codes (27511, 27512, 27513, 27518, 27519). For urgent active leaks, fallen tree impacts, or storm punctures, our local roofers arrive within 1 to 2 hours with commercial-grade waterproof tarps, sandbags, and emergency sealing gear to prevent interior water damage.",
        note: "Important Note: Call our direct dispatch line immediately at (919) 335-9543 if you notice water dripping through ceilings or near light fixtures."
      },
      {
        q: "2. What are the most common signs of Storm Damage, Wind Damage, and Hail Damage Roof Repair in Wake County?",
        a: "In Cary, NC, severe spring thunderstorms and coastal weather systems cause wind-lifted shingles, torn starter strips, and hail impact bruising. Look for granule piles in your gutters, dark round dings on shingles, curled edges, or missing shingle tabs.",
        note: "Important Note: We provide certified photographic inspection reports for your homeowner insurance adjuster."
      },
      {
        q: "3. What is the difference between Roof Flashing Repair, Roof Valley Repair, and Roof Ridge Repair?",
        a: "Roof flashing protects joints where the roof meets vertical surfaces (chimneys, walls, dormers). Roof valleys are the low troughs where two roof planes meet, carrying the heaviest volume of stormwater. Roof ridges are the highest peaks requiring specialized ventilated caps. Over 85% of roof leaks in Cary occur at failed flashing or cracked valley underlayment rather than in the field of shingles."
      },
      {
        q: "4. How do you handle Roof Sagging Repair and Roof Structural Repair?",
        a: "A sagging roof indicates compromised structural load support usually due to prolonged water rot, broken rafters, or insufficient truss bracing from the 1990s building boom. Our licensed carpenters perform rafter sistering, install Simpson Strong-Tie hurricane brackets, level dipped ridge beams, and replace deteriorated CDX plywood sheets."
      },
      {
        q: "5. Can you perform repairs on Shingle, Metal, Flat, Tile, and Slate Roofs in Cary, NC?",
        a: "Yes. Our crew is HAAG-certified and trained across all roofing materials: architectural and 3-tab asphalt shingles, 24-gauge standing seam metal roofs, low-slope commercial TPO/EPDM flat membranes, Spanish barrel tile, and natural Vermont slate."
      },
      {
        q: "6. Why are Roof Drainage Repair and Roof Fastener Repair critical for flat and low-slope roofs?",
        a: "Flat and low-slope roofs in Cary often suffer from ponding water if drainage scuppers or internal downspouts are clogged with pine needles. Over time, standing water degrades seams and causes roof fastener corrosion. We re-pitch low spots, install auxiliary overflow scuppers, and replace rusted screws."
      },
      {
        q: "7. How much does professional roof repair cost in Cary, North Carolina?",
        a: "Minor roof repairs (such as replacing a pipe boot, fixing a few missing shingles, or minor flashing resealing) generally range from $250 to $650. Moderate storm repairs, valley replacements, or localized decking repairs typically range from $650 to $1,800. Major structural repairs depend on square footage."
      },
      {
        q: "8. Will homeowners insurance cover my Storm Damage Roof Repair in Cary, NC?",
        a: "Yes, standard homeowner insurance policies generally cover storm damage caused by sudden wind, hail, or falling trees. We assist Cary homeowners by documenting damage with high-resolution drone photography and meeting directly with your insurance adjuster on-site."
      }
    ]
  },
  {
    id: "replacement",
    slug: "roof-replacement-services-cary-nc-usa.html",
    title: "Roof Replacement Services Cary NC USA",
    navTitle: "Roof Replacement Services Cary NC USA",
    category: "Installation & Replacement",
    shortDesc: "Complete and partial roof replacement in Cary, NC. Expert tear-offs, architectural shingles, metal, flat, and storm damage replacements built for Wake County homes.",
    heroKicker: "Wake County Fast Dispatch • Code-Compliant Tear-Offs",
    heroTitle: "Roof Replacement Services Cary NC USA",
    heroDesc: "If your roof is over 20 years old, leaking after summer downpours, or showing heavy granule loss in gutters, a replacement protects your biggest investment. Our local Cary crews handle full tear-offs, plywood inspections, and high-wind shingle installations across Wake County.",
    localImage: "/images/split-replacement.webp",
    splitImage: "/images/split-replacement.webp",
    imageAlt: "Jobsite transformation of Cary NC two-story home roof replacement with charcoal dimensional shingles",
    beforeImage: "/images/split-replacement-before.webp",
    afterImage: "/images/split-replacement-after.webp",
    beforeAlt: "Weather-beaten hail damaged roof before complete replacement in Cary NC",
    beforeLabel: "Severe Hail Damage & Granule Loss (Before)",
    afterLabel: "Complete Dimensional Shingle Reroof (After)",
    gpsCoords: "35.8010° N, 78.8051° W",
    elevation: "422 FT",
    solutions: [
      {
        title: "Complete Roof Replacement",
        desc: "Total stripping of old roofing materials down to bare plywood decking, inspecting every rafter, and building a brand-new multi-layer roofing system from the wood up.",
        iconSvg: "home"
      },
      {
        title: "Partial Roof Replacement",
        desc: "Replacing a single damaged slope, rear addition, or storm-hit exposure while seamlessly matching existing shingle lines and maintaining roofline waterproofing.",
        iconSvg: "layers"
      },
      {
        title: "Residential Roof Replacement",
        desc: "Tailored replacements for Cary suburban homes, townhouses, and estates. We manage HOA color approvals, protect garden shrubs, and finish in 1 to 2 days.",
        iconSvg: "home"
      },
      {
        title: "Commercial Roof Replacement",
        desc: "Heavy-duty commercial re-roofing for Cary retail hubs, offices, and warehouses using high-efficiency TPO, PVC, and standing seam systems with zero business downtime.",
        iconSvg: "building"
      },
      {
        title: "Flat Roof Replacement",
        desc: "Replacing ponding, cracked flat decks with heat-welded 60-mil TPO or thick EPDM synthetic rubber membranes engineered with proper drain slope tapers.",
        iconSvg: "square"
      },
      {
        title: "Metal Roof Replacement",
        desc: "Upgrading brittle asphalt to 24-gauge standing seam metal panels with hidden clips. Delivers 50+ years of maintenance-free defense against Carolina storm cycles.",
        iconSvg: "shield"
      },
      {
        title: "Shingle Roof Replacement",
        desc: "Installing heavy-duty architectural fiberglass shingles rated for 130 MPH winds, featuring Class A fire ratings and algae-resistant granules for humid Cary summers.",
        iconSvg: "layers"
      },
      {
        title: "Tile Roof Replacement",
        desc: "Structural engineering re-evaluation, reinforced underlayment, and installation of durable concrete or Spanish clay tiles that last 70+ years with timeless aesthetics.",
        iconSvg: "grid"
      },
      {
        title: "Slate Roof Replacement",
        desc: "Authentic natural Vermont slate replacement and custom copper flashing designed for historic Cary estates and high-end architectural homes requiring century-long life.",
        iconSvg: "layers"
      },
      {
        title: "Asphalt Roof Replacement",
        desc: "Affordable, reliable replacement using modern dimensional asphalt shingles with reinforced nail strips that drastically outperform 1990s 3-tab builder shingles.",
        iconSvg: "home"
      },
      {
        title: "Old Roof Replacement",
        desc: "Replacing 20-to-25-year-old original roofs installed during Cary's 1990s housing boom before decayed underlayment leads to widespread ceiling water damage.",
        iconSvg: "alert"
      },
      {
        title: "Damaged Roof Replacement",
        desc: "Full structural restoration for roofs suffering from rotted plywood decking, dipped ridgelines, moldy insulation, or chronic leaks that simple repairs cannot resolve.",
        iconSvg: "wrench"
      },
      {
        title: "Storm-Damaged Roof Replacement",
        desc: "Insurance-approved replacements following severe Wake County hail storms and gale-force wind events. Includes drone documentation and adjuster coordination.",
        iconSvg: "storm"
      },
      {
        title: "Roof Tear-Off and Replacement",
        desc: "The contractor gold standard: complete removal of old layers, thorough magnetic sweeps for nails, plywood re-fastening, and installation of synthetic underlayment.",
        iconSvg: "tool"
      },
      {
        title: "Overlay Roofing",
        desc: "Installing a new shingle layer over existing shingles where local NC code permits (maximum 2 layers). A cost-conscious option for sound decking, though tear-offs are superior.",
        iconSvg: "layers"
      }
    ],
    methodologyTitle: "Our 6-Step Roof Replacement Working Method",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Property & Landscape Shielding",
        desc: "Before a single shingle is pulled, we tarp your siding, cover air conditioning compressors, protect delicate landscaping with plywood shields, and stage catch tarps around the perimeter to collect debris."
      },
      {
        step: "Step 2",
        title: "Clean Tear-Off Down to Decking",
        desc: "We strip off all old shingles, brittle felt paper, rusted drip edges, and failed valley liners down to the bare wooden decking. This allows us to spot hidden moisture rot that overlays would cover up."
      },
      {
        step: "Step 3",
        title: "Decking Examination & Plywood Re-Nailing",
        desc: "Our carpenters walk every inch of the deck. Any soft, warped, or rotted plywood sheets are replaced with APA-rated 1/2-inch CDX plywood. Existing sound sheets are re-nailed to rafter trusses using ring-shank nails to meet NC wind uplift codes."
      },
      {
        step: "Step 4",
        title: "Heavy-Duty Synthetic Underlayment & Valley Shields",
        desc: "We never use cheap 15lb organic felt. We install commercial-grade woven synthetic underlayment across the entire roof surface, plus self-adhering Ice & Water Shield in all valleys, along eaves, and around chimney flashing points."
      },
      {
        step: "Step 5",
        title: "Precision Material Fastening (6-Nail High-Wind Pattern)",
        desc: "Architectural shingles, metal panels, or tiles are installed under continuous supervisor oversight. Shingles are secured using a strict 6-nail pattern placed directly through the manufacturer nail-zone for maximum 130 MPH hurricane resistance."
      },
      {
        step: "Step 6",
        title: "Balanced Ridge Ventilation, Magnetic Sweep & Inspection",
        desc: "We cut and install continuous ridge vents along the roof crest to exhaust summer attic heat. Finally, we run commercial magnetic rollers across your lawn and driveway 3 separate times to collect every stray nail, followed by a final walkthrough."
      }
    ],
    faqs: [
      {
        q: "1. How do I know whether my roof needs replacement?",
        a: "If it keeps leaking again and again, that's a clear sign. Or the shingles are deteriorating everywhere, not just in one small spot. Old roofs naturally reach an age where patch repair doesn't make financial sense anymore. The best first step is getting an on-site inspection done—we will inspect the decking and flashing and tell you straight whether repairs are still practical or replacement will provide better long-term value.",
        note: "Important Note: We offer 100% free on-site roof diagnostic inspections across all 5 Cary ZIP codes."
      },
      {
        q: "2. Is partial roof replacement cheaper than complete replacement?",
        a: "At first, a partial replacement looks cheaper upfront, especially if only one slope or storm-hit exposure is damaged. But whether it's truly cost-effective depends on the age and condition of the remaining roof, whether new materials will match seamlessly, and whether you'll just need another repair in a year. Our inspection assesses the entire roofing system so you can decide with full clarity."
      },
      {
        q: "3. How long does a roof replacement take on a Cary home?",
        a: "There is no single fixed duration for every building. It depends on your home's square footage, chosen roofing material, architectural complexity (dormers, valleys, steepness), and weather conditions. If our crew opens the roof and finds rotted decking underneath, replacing those sheets takes extra time. For most standard residential homes in Cary, asphalt shingle replacements are completed in just 1 to 2 days."
      },
      {
        q: "4. How much does a roof replacement cost in Cary, North Carolina in 2026?",
        a: "For an average Cary home (between 1,700 and 3,000 square feet), a complete architectural shingle roof replacement typically ranges from $8,500 to $15,500. Factors that influence cost include roof pitch steepness, the number of rotted plywood decking sheets that need replacement, architectural complexity (dormers and valleys), and material selection.",
        note: "Important Note: We provide a free, zero-obligation on-site roof inspection where we measure your roof and hand you a transparent, line-item written estimate."
      },
      {
        q: "5. What is the difference between a Roof Tear-Off and Overlay Roofing, and which is better?",
        a: "A Roof Tear-Off completely removes all existing shingle layers down to the bare plywood, allowing us to inspect the wood deck, replace rotted framing, and install brand-new synthetic underlayment and ice/water shield. Overlay Roofing (nailing a new layer of shingles directly on top of the old layer) saves on labor and disposal fees, but it traps heat, adds thousands of pounds of dead weight, hides underlying wood rot, and generally voids manufacturer lifetime warranties.",
        note: "Important Note: North Carolina State Building Code strictly forbids overlays if a roof already has two layers installed."
      },
      {
        q: "6. Do I need HOA approval for a roof replacement in Cary, NC?",
        a: "In most master-planned Cary subdivisions (such as Amberly, Carpenter Village, Lochmere, and Preston), HOAs have specific guidelines regarding shingle color, profile, and architectural grade. We provide homeowners with official manufacturer color sample boards and technical specification sheets to streamline HOA approval."
      },
      {
        q: "7. How do I know if my roof replacement will be covered by homeowners insurance?",
        a: "If your roof sustained sudden, direct damage from a documented hail storm, tornado, high-wind microburst, or fallen tree limb, your homeowner insurance policy typically covers replacement (minus your deductible). We provide detailed photographic reports to support your insurance claim."
      },
      {
        q: "8. What roofing materials are best for the climate in Cary and Wake County?",
        a: "Architectural dimensional shingles (such as CertainTeed Landmark or GAF Timberline HDZ) are the top choice for Cary homes because they handle 130 MPH winds, resist algae stains from summer humidity, and offer a 30-to-50 year expected life."
      }
    ]
  },
  {
    id: "inspection",
    slug: "roof-inspection-services-cary-nc-usa.html",
    title: "Roof Inspection Services Cary NC USA",
    navTitle: "Roof Inspection Services Cary NC USA",
    category: "Assessment & Maintenance",
    shortDesc: "Certified 21-point roof inspection services in Cary, NC. Professional drone imaging, pre-purchase assessments, storm damage audits, and thermal attic scans across Wake County.",
    heroKicker: "Certified 21-Point Visual & Attic Diagnostic Audit",
    heroTitle: "Roof Inspection Services Cary NC USA",
    heroDesc: "Whether you're buying a home in Preston, preparing to sell in Lochmere, or concerned about hail after a Wake County thunderstorm, guessing your roof's condition is risky. Our certified Cary roof inspectors provide thorough, unbiased 21-point assessments combining 4K drone photography, hands-on roof walks, and attic thermal moisture probing.",
    localImage: "/images/split-inspection.webp",
    splitImage: "/images/split-inspection.webp",
    imageAlt: "Certified roofing inspection in Cary NC showing chalked hail impact diagnostics and technician digital review",
    beforeImage: "/images/split-inspection-before.webp",
    afterImage: "/images/split-inspection-after.webp",
    beforeAlt: "Chalk-marked hail bruise and shingle wind fracture during Cary NC roof inspection",
    beforeLabel: "Hidden Wind Crease & Hail Bruise (Diagnostic)",
    afterLabel: "Certified On-Site Diagnostic Complete (Verified)",
    gpsCoords: "35.7368° N, 78.7832° W",
    elevation: "450 FT",
    solutions: [
      {
        title: "General Roof Inspection",
        desc: "A complete top-to-bottom health checkup covering shingle surfaces, flashing seals, gutter lines, attic ventilation, and structural roof deck integrity.",
        iconSvg: "home"
      },
      {
        title: "Residential Roof Inspection",
        desc: "Tailored inspections for single-family homes and townhouses in Cary subdivisions. We assess aging shingles, valley wear, and provide documentation for HOA or refinancing.",
        iconSvg: "home"
      },
      {
        title: "Commercial Roof Inspection",
        desc: "Specialized evaluations for flat TPO, PVC, EPDM, and metal commercial buildings in Crossroads, Fenton, and RTP. Includes core cuts to test for wet sub-insulation.",
        iconSvg: "building"
      },
      {
        title: "Annual Roof Inspection",
        desc: "Preventative checkups recommended once a year in North Carolina to catch minor caulking splits, fastener back-outs, and pine needle blockages before expensive leaks develop.",
        iconSvg: "shield"
      },
      {
        title: "Pre-Purchase Roof Inspection",
        desc: "Crucial due-diligence for Triangle home buyers. We reveal true remaining shingle lifespan, past unpermitted repairs, and hidden rot so you can negotiate seller credits before closing.",
        iconSvg: "building"
      },
      {
        title: "Pre-Sale Roof Inspection",
        desc: "Proactive inspections for Cary homeowners planning to list their property. Identify and fix minor red flags before a buyer's inspector turns them into deal-breakers.",
        iconSvg: "home"
      },
      {
        title: "Storm Damage Inspection",
        desc: "Rapid-response assessments following high-wind fronts and severe thunderstorms. We document torn shingles, missing ridge caps, and impact points with timestamped photos.",
        iconSvg: "storm"
      },
      {
        title: "Hail Damage Inspection",
        desc: "HAAG-certified testing identifying subtle hail bruising, shattered shingle fiberglass mats, and dented soft metals (gutters, downspouts, roof vents) that adjusters look for.",
        iconSvg: "shield"
      },
      {
        title: "Wind Damage Inspection",
        desc: "Checking for wind uplift along eaves, broken sealant adhesive strips, and creased shingles where strong gusts have compromised weather resistance.",
        iconSvg: "wind"
      },
      {
        title: "Roof Leak Inspection",
        desc: "Tracing mysterious ceiling stains and drywall bubbles to their true exterior origin point using digital pinless moisture meters and attic rafter line tracing.",
        iconSvg: "droplet"
      },
      {
        title: "Flat Roof Inspection",
        desc: "Checking commercial and residential low-slope decks for standing ponding water, seam separations, punctured membranes, and blocked drainage scuppers.",
        iconSvg: "square"
      },
      {
        title: "Metal Roof Inspection",
        desc: "Detailed audit of screw gasket deterioration, thermal movement scratches, panel seaming, and protective Kynar paint wear on standing seam or corrugated metal roofs.",
        iconSvg: "shield"
      },
      {
        title: "Drone Roof Inspection",
        desc: "FAA-licensed 4K high-resolution drone flights that safely capture ultra-detailed close-ups of steep pitches (10:12+), multi-story turrets, and fragile slate/tile roofs.",
        iconSvg: "home"
      },
      {
        title: "Roof Condition Assessment",
        desc: "Comprehensive engineering report estimating remaining functional roof life (years), maintenance recommendations, and projected replacement cost estimates.",
        iconSvg: "wrench"
      },
      {
        title: "Roof Maintenance Inspection",
        desc: "Routine seasonal audit inspecting valley silt accumulation, tree branch overhang clearance, pipe boot rubber elasticity, and ridge vent screen integrity.",
        iconSvg: "tool"
      }
    ],
    methodologyTitle: "Our 6-Step Certified Roof Inspection Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Perimeter Ground & Gutter Apron Evaluation",
        desc: "We start from the ground up, inspecting drip edges, fascia boards, siding junctions, and gutter downspouts for shingle granules or aluminum hail dents."
      },
      {
        step: "Step 2",
        title: "High-Resolution 4K Drone Aerial Imaging",
        desc: "Our FAA-certified drone captures crisp, high-angle aerial photographs of steep ridges, chimneys, and inaccessible roof planes without risking shingle damage from foot traffic."
      },
      {
        step: "Step 3",
        title: "Hands-On Rooftop Walk & Granule Depletion Audit",
        desc: "On walkable slopes, our inspector physically examines shingle flexibility, checks for curling edges, feels for soft decking spots, and tests shingle bond adhesion."
      },
      {
        step: "Step 4",
        title: "Flashing, Valley & Penetration Stress Testing",
        desc: "We scrutinize the most vulnerable leak points: chimney step flashings, valley convergence liners, plumbing neoprene vent boots, and skylight perimeter curb seals."
      },
      {
        step: "Step 5",
        title: "Attic Cavity Moisture Probe & Thermal Scan",
        desc: "We enter your attic crawl space to inspect the underside of the roof decking for water stains, mold mildew, rusty nails, sagging rafters, and proper intake/exhaust airflow."
      },
      {
        step: "Step 6",
        title: "Certified Digital Photographic Report & Action Plan",
        desc: "You receive an itemized digital report complete with high-resolution photos, condition grade, remaining expected lifespan, and honest recommendations with zero sales pressure."
      }
    ],
    faqs: [
      {
        q: "1. How much does a professional roof inspection cost in Cary, North Carolina?",
        a: "We offer 100% free on-site roof inspections for homeowners within our active Cary zip codes (27511, 27512, 27513, 27518, 27519) who suspect storm damage, leaks, or aging shingles.",
        note: "Important Note: Free visual and storm inspections come with zero obligation and include a transparent written summary."
      },
      {
        q: "2. What is included in your 21-Point Cary Roof Inspection checklist?",
        a: "Our comprehensive 21-point audit evaluates three distinct zones: Exterior Roofing Surface (shingle granule loss, hail bruising, wind creasing), Critical Penetrations & Water Paths (chimney counter-flashing, valley liners, plumbing pipe boots), and Internal Attic Cavity (decking rot, dark water mold stains, rafter truss alignment, thermal insulation depth)."
      },
      {
        q: "3. Why is a Pre-Purchase Roof Inspection crucial for Cary homebuyers during due diligence?",
        a: "Standard North Carolina home inspectors only view the roof from a ladder at the gutter line or through binoculars from the lawn. A dedicated Pre-Purchase inspection gives Triangle buyers exact remaining roof lifespan data and an accurate replacement estimate to negotiate seller credits before closing."
      },
      {
        q: "4. How does a Drone Roof Inspection compare to a physical rooftop walk?",
        a: "Both methods have distinct strengths, and we combine them. Drones safely photograph 10:12 steep pitches and fragile tile roofs that would crack under footsteps, while physical walks test shingle adhesion."
      },
      {
        q: "5. What is the difference between subtle Hail Damage and ordinary shingle aging?",
        a: "Aging causes widespread, uniform granule erosion. Hail damage produces isolated, concentrated impact bruises where the asphalt mat is crushed, displacing protective granules."
      },
      {
        q: "6. How often should Wake County homeowners have an Annual Roof Inspection?",
        a: "We recommend scheduling an inspection once a year, preferably in late autumn after hurricane season or in early spring before intense summer heat sets in."
      },
      {
        q: "7. Can your roof condition report be used directly for homeowners insurance claims?",
        a: "Yes. Our storm and hail damage reports are compiled according to industry-standard insurance guidelines, complete with date/time stamped photos, aerial roof geometry diagrams, and line-item scopes of damage."
      },
      {
        q: "8. How do you perform a Commercial Flat Roof Inspection?",
        a: "Commercial flat roofs require seam probing, checking perimeter coping caps, examining HVAC curb flashings, and non-destructive thermal imaging to ensure sub-insulation is dry."
      }
    ]
  },
  {
    id: "storm-emergency",
    slug: "storm-emergency-roofing-services-cary-nc-usa.html",
    title: "Storm & Emergency Roofing Services Cary NC USA",
    navTitle: "Storm & Emergency Roofing Services Cary NC USA",
    category: "Repairs & Leaks",
    shortDesc: "24/7 emergency roof repairs, storm damage restoration, temporary tarping, fallen tree puncture repairs, and direct insurance claim assistance in Cary, NC.",
    heroKicker: "24/7 Wake County Emergency Dispatch Within 60-90 Minutes",
    heroTitle: "Storm & Emergency Roofing Services Cary NC USA",
    heroDesc: "When violent severe thunderstorms, hurricane-force winds, hail strikes, or fallen oak trees compromise your roof in Cary, NC, every minute counts. Water rushing through cracked rafters, compromised decking, and torn shingles can destroy drywall, hardwood floors, and electrical systems in hours.",
    localImage: "/images/split-storm-emergency.webp",
    splitImage: "/images/split-storm-emergency.webp",
    imageAlt: "Emergency storm damage roof repair in Cary NC showing tree puncture damage versus restored watertight roof",
    beforeImage: "/images/split-storm-emergency-before.webp",
    afterImage: "/images/split-storm-emergency-after.webp",
    beforeAlt: "Emergency storm tree impact penetrating roof rafter in Cary NC before restoration",
    beforeLabel: "Fallen Tree Puncture & Rafter Damage (Before)",
    afterLabel: "Structural Rafter Rebuild & Watertight Reroof (After)",
    gpsCoords: "35.7850° N, 78.7500° W",
    elevation: "398 FT",
    solutions: [
      {
        title: "24/7 Emergency Roofing",
        desc: "Around-the-clock on-call roofing crews ready to mobilize in fully stocked emergency response trucks across Cary and Wake County within 60 to 90 minutes.",
        iconSvg: "alert"
      },
      {
        title: "Emergency Leak Repair",
        desc: "Rapid pinpoint diagnostics during active rainfall, applying wet-surface polymer sealants, rubber chimney bibs, and puncture plugs to stop active interior water intrusion immediately.",
        iconSvg: "droplet"
      },
      {
        title: "Storm Damage Restoration",
        desc: "Comprehensive turnkey rebuilding for roofs battered by severe Carolina summer squalls, microbursts, and tropical storm wind shear.",
        iconSvg: "cloud-rain"
      },
      {
        title: "Wind Damage Restoration",
        desc: "Replacing torn, creased, and uplifted shingle courses, reseating displaced ridge caps, and reinforcing starter edges with high-wind adhesive seals.",
        iconSvg: "wind"
      },
      {
        title: "Hail Damage Restoration",
        desc: "HAAG-certified storm damage assessments identifying hidden fiberglass mat fractures, granule displacement, and bruised underlayment caused by 1\"+ hail.",
        iconSvg: "shield"
      },
      {
        title: "Fallen Tree Roof Damage Repair",
        desc: "Emergency tree removal coordination, timber bucking, rafter shoring, structural framing rebuilds, and decking plywood replacement after heavy pine or oak limb strikes.",
        iconSvg: "home"
      },
      {
        title: "Heavy Rain Roof Damage Repair",
        desc: "Fixing overflowing valleys, backed-up scupper drains, clogged gutters, and failed step flashings overwhelmed by torrential subtropical downpours.",
        iconSvg: "cloud-rain"
      },
      {
        title: "Temporary Roof Tarping",
        desc: "Installing heavy-duty UV-stabilized 10-mil waterproof poly tarps secured with 2x4 furring strips and sandbag ballasts without puncturing undamaged shingle areas.",
        iconSvg: "shield"
      },
      {
        title: "Emergency Roof Covering",
        desc: "Full-surface shrink-wrap membranes and peel-and-stick emergency waterproof underlayments applied over exposed roof decks while insurance claims process.",
        iconSvg: "layers"
      },
      {
        title: "Emergency Roof Replacement",
        desc: "Fast-tracked total roof replacement permits and same-week material delivery for catastrophically compromised residential or commercial properties.",
        iconSvg: "home"
      },
      {
        title: "Structural Roof Damage Repair",
        desc: "Repairing broken trusses, sistering snapped 2x6/2x8 rafters, rebuilding load-bearing knee walls, and installing structural bracing certified by NC licensed engineers.",
        iconSvg: "wrench"
      },
      {
        title: "Insurance Claim Assistance",
        desc: "Providing detailed Xactimate line-item estimates, high-resolution aerial drone photography, and meeting insurance adjusters on-site to ensure fair claim settlements.",
        iconSvg: "tool"
      },
      {
        title: "Post-Storm Roof Inspection",
        desc: "Detailed 21-point safety and moisture scan after major weather events, inspecting attic decking, flashing collars, pipe boots, and shingle seal strips.",
        iconSvg: "shield"
      }
    ],
    methodologyTitle: "Our 6-Step 24/7 Storm & Emergency Response Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Immediate Triage & Rapid On-Site Mobilization",
        desc: "When severe weather strikes, our emergency dispatcher immediately routes an on-call crew equipped with heavy tarps, generator lighting, wet-seal mastics, and structural lumber arriving within 60 to 90 minutes across Wake County."
      },
      {
        step: "Step 2",
        title: "Hazard Containment & Weatherproof Tarping / Dry-In",
        desc: "Our technicians safely access the roof to halt active leaks using 10-mil UV-stabilized poly tarps secured with wood furring strips and sandbag ballasts. We never drive nails through sound shingles, ensuring zero secondary damage."
      },
      {
        step: "Step 3",
        title: "Structural Framing Assessment & Safety Shoring",
        desc: "If heavy limbs or fallen trees have crushed roof trusses or rafters, we install heavy-duty temporary screw jacks and support beams to stabilize the ceiling structure and protect indoor occupants."
      },
      {
        step: "Step 4",
        title: "Comprehensive Digital Insurance Adjuster Package",
        desc: "Before any temporary changes are made, we compile high-resolution 4K drone aerial imagery, timestamped close-up hail impact photos, moisture meter readings, and an itemized Xactimate loss report."
      },
      {
        step: "Step 5",
        title: "On-Site Insurance Adjuster Meeting & Scope Negotiation",
        desc: "We physically walk the roof alongside your insurance carrier's field adjuster. We present our documentation, demonstrate hidden shingle mat creasing and flashing tears, and ensure the adjuster writes an accurate estimate for full code-compliant replacement."
      },
      {
        step: "Step 6",
        title: "Turnkey Permanent Structural Rebuild & Clean-Site Delivery",
        desc: "Once permits and claims are approved, our master craftsmen rebuild broken rafters, replace rotten plywood decking, install high-temp synthetic underlayment, and lay high-wind impact-resistant shingles, followed by triple magnetic sweeps of your grounds."
      }
    ],
    faqs: [
      {
        q: "1. How fast can your emergency roofing crew arrive at my Cary home during a storm?",
        a: "Our dedicated 24/7 emergency dispatch units operate around the clock with rapid response times of 60 to 90 minutes across all Cary zip codes (27511, 27512, 27513, 27518, 27519) and surrounding Wake County areas.",
        note: "Important Note: In active extreme severe weather events with widespread regional tree falls, calls are triaged based on safety hazards and active interior flooding."
      },
      {
        q: "2. Will homeowners insurance reimburse me for emergency roof tarping and temporary dry-in services?",
        a: "Yes! In fact, virtually every standard North Carolina homeowner insurance policy contains an explicit 'Duty to Mitigate' clause. This clause requires the homeowner to take reasonable emergency measures to prevent secondary water damage."
      },
      {
        q: "3. What should I do inside my house immediately if my roof starts leaking during heavy rain?",
        a: "First, place buckets directly beneath the drip. If your drywall ceiling is sagging, carefully poke a small hole in the center with a screwdriver to relieve the weight and let water drain into a bucket. Call our 24/7 emergency dispatch line immediately."
      },
      {
        q: "4. How do I know if hail damaged my roof if I don't see any leaks inside my house?",
        a: "Hail damage rarely causes immediate ceiling leaks because the underlying waterproof underlayment and plywood decking initially hold back the water. However, hail strikes crush and fracture the protective outer fiberglass mat of your shingles, knocking away ceramic mineral granules."
      },
      {
        q: "5. What happens if a large oak or pine tree falls through my roof?",
        a: "If a tree penetrates your roof, your immediate priority is personal safety: evacuate the impacted section of your home and turn off the main electrical breaker. Call our emergency response team. We dispatch our emergency roofers while coordinating with licensed crane and tree-removal services."
      },
      {
        q: "6. Can a roof leak be temporarily stopped while it is actively raining outside?",
        a: "Yes. Our emergency technicians utilize specialized wet-surface elastomeric sealants, rubber pipe boot wraps, and weighted reinforced poly tarps designed specifically to adhere and seal in driving rain."
      },
      {
        q: "7. How do your specialists help with the insurance claim process for storm damage in Cary?",
        a: "Our estimators are HAAG certified in damage assessment and use Xactimate — the exact same estimating software used by major insurance carriers (State Farm, Allstate, USAA, Nationwide, etc.)."
      },
      {
        q: "8. What is the deadline for filing a storm or wind damage roof insurance claim in North Carolina?",
        a: "Most North Carolina homeowner insurance policies require policyholders to file a claim within one (1) year from the date of the storm loss, although some policies allow up to two (2) years."
      }
    ]
  },
  {
    id: "metal-roofing",
    slug: "metal-roofing-services-cary-nc-usa.html",
    title: "Metal Roofing Services Cary NC USA",
    navTitle: "Metal Roofing Services Cary NC USA",
    category: "Specialty Materials",
    shortDesc: "Standing seam, corrugated, steel, aluminum, and zinc metal roofing services in Cary, NC. Lifetime 50+ year durability, rust treatment, panel replacement, and cool metal coatings.",
    heroKicker: "50+ Year Lifetime Durability • Standing Seam Engineering",
    heroTitle: "Metal Roofing Services Cary NC USA",
    heroDesc: "When you want a roof that will truly outlast your mortgage and withstand North Carolina's severe thunderstorms, hail events, and hurricane-season winds, metal is the gold standard. In Cary, homeowners are replacing aging asphalt with architectural 24-gauge standing seam and commercial corrugated systems.",
    localImage: "/images/split-metal-roofing.webp",
    splitImage: "/images/split-metal-roofing.webp",
    imageAlt: "Architectural metal roof installation in Cary NC showing weathered tin panels replaced with matte standing-seam steel",
    beforeImage: "/images/split-metal-roofing-before.webp",
    afterImage: "/images/split-metal-roofing-after.webp",
    beforeAlt: "Rusted peeling corrugated roof sheets on Cary NC residential building before replacement",
    beforeLabel: "Rusted Corrugated Metal Sheets (Before)",
    afterLabel: "Standing Seam Matte Charcoal Metal (After)",
    gpsCoords: "35.8115° N, 78.8890° W",
    elevation: "462 FT",
    solutions: [
      {
        title: "Metal Roof Installation",
        desc: "Precision engineering and placement of standing seam or corrugated metal panels using concealed expansion clips and high-temperature waterproof underlayment.",
        iconSvg: "shield"
      },
      {
        title: "Metal Roof Repair",
        desc: "Diagnosing and fixing fastener leaks, replacing degraded EPDM neoprene screw washers, re-sealing flashing transitions, and repairing loose ridge caps.",
        iconSvg: "tool"
      },
      {
        title: "Metal Roof Replacement",
        desc: "Tearing off failing asphalt shingles or rusted tin roofs, reinforcing decking, and upgrading to a permanent 50+ year architectural standing seam system.",
        iconSvg: "home"
      },
      {
        title: "Standing Seam Metal Roofing",
        desc: "The contractor gold standard: 1.5-inch or 2-inch raised vertical seams with hidden internal clips that allow thermal expansion without a single exposed screw hole.",
        iconSvg: "layers"
      },
      {
        title: "Corrugated Metal Roofing",
        desc: "Durable, cost-effective structural ribbed and wavy steel panels ideal for commercial buildings, modern farmhouse accents, outbuildings, and porches.",
        iconSvg: "square"
      },
      {
        title: "Steel Roofing",
        desc: "Heavy-duty 24-gauge and 26-gauge Galvalume steel (55% aluminum / 45% zinc alloy substrate) delivering maximum tensile strength and impact resistance.",
        iconSvg: "shield"
      },
      {
        title: "Aluminum Roofing",
        desc: "Ultra-lightweight, high-strength metal that is 100% naturally impervious to rust, making it the top choice for properties near lakes, ponds, or high-humidity zones.",
        iconSvg: "layers"
      },
      {
        title: "Zinc Roofing",
        desc: "Prestigious European architectural metal that forms a continuous self-healing zinc carbonate patina, boasting an astonishing 80 to 100+ year operational life.",
        iconSvg: "building"
      },
      {
        title: "Metal Roof Coating",
        desc: "Applying fluid-applied elastomeric or silicone restorative coatings that seal aging metal roof seams, eliminate hairline leaks, and restore high solar reflectivity.",
        iconSvg: "cloud-rain"
      },
      {
        title: "Metal Roof Painting",
        desc: "Specialized spray application of industrial fluoropolymer (Kynar 500 / PVDF) finishes that refresh faded colors, resist UV chalking, and match HOA standards.",
        iconSvg: "home"
      },
      {
        title: "Metal Roof Leak Repair",
        desc: "Pinpoint diagnostics around pipe boots, chimney flashings, valley troughs, and screw fasteners using UV-stable polyurethane and butyl tape seals.",
        iconSvg: "droplet"
      },
      {
        title: "Metal Roof Rust Treatment",
        desc: "Wire-wheel mechanical removal of surface corrosion, chemical rust-converter neutralizers, and heavy-duty zinc chromate inhibitive primer application.",
        iconSvg: "wrench"
      },
      {
        title: "Metal Roof Restoration",
        desc: "Complete revitalization of commercial and agricultural metal roofs: re-torquing 1,000s of fasteners, seam stitching, and multi-ply waterproofing coats.",
        iconSvg: "shield"
      },
      {
        title: "Metal roof panel replacement",
        desc: "Carefully unlocking mechanical standing seams to extract and replace individual hail-dented or tree-punctured panels without disturbing the surrounding roof.",
        iconSvg: "tool"
      }
    ],
    methodologyTitle: "Our 6-Step Precision Metal Roofing Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Decking Load & Framing Alignment Check",
        desc: "We verify that roof truss framing is plumb and decking plywood is solid, replacing any rotted sheets and re-fastening deck boards to ensure a perfectly level plane."
      },
      {
        step: "Step 2",
        title: "High-Temperature (260°F) Synthetic Underlayment",
        desc: "Metal absorbs and transfers intense heat. We install specialized high-temperature peel-and-stick membrane underlayment rated to withstand 260°F without degradation."
      },
      {
        step: "Step 3",
        title: "On-Site Roll-Forming & Custom Length Profiling",
        desc: "Panels are roll-formed from master steel coils to the exact eave-to-ridge length of your Cary home, eliminating horizontal lap seams where wind-driven rain could enter."
      },
      {
        step: "Step 4",
        title: "Concealed Expansion Clip Fastening",
        desc: "On standing seam systems, hidden stainless steel clips are screwed into the roof deck every 18 inches. The clips hold panels firmly while letting them expand and contract smoothly in Carolina heat."
      },
      {
        step: "Step 5",
        title: "Mechanical Double-Lock Seaming & Vented Ridge Trim",
        desc: "Panels are mechanically locked together with motorized or manual seaming tools. We install custom-bent vented ridge caps and z-closures that allow attic heat to escape."
      },
      {
        step: "Step 6",
        title: "Gasket Torque Verification & Final Sweep",
        desc: "All transitions around chimneys, valleys, and vent boots are double-checked for watertight butyl seals. We conduct a magnetic sweep to leave your yard 100% screw-free."
      }
    ],
    faqs: [
      {
        q: "1. Are metal roofs loud or noisy during heavy North Carolina rainstorms?",
        a: "No! This is the most common misconception about residential metal roofing. In modern homes, metal roofs are installed over solid 1/2-inch plywood decking, heavy-duty synthetic underlayment, and deep attic insulation.",
        note: "Important Note: We demonstrate noise dampening with real sample mockups during our free Cary on-site consultations."
      },
      {
        q: "2. How much does a standing seam metal roof cost in Cary, NC compared to asphalt shingles?",
        a: "A standing seam metal roof in Cary typically costs between $12.00 and $18.50 per square foot installed (approx. $16,000 to $34,000 for an average 2,000 to 2,800 sq ft home). While this is roughly 2 to 2.5 times the upfront cost of basic architectural shingles, a metal roof lasts 50 to 70+ years."
      },
      {
        q: "3. Do metal roofs attract lightning strikes during summer thunderstorms?",
        a: "No. Metal conducts electricity, but it does NOT attract lightning. Lightning strikes the highest geographical point regardless of material. In fact, a metal roof is completely non-combustible (Class A fire rated)."
      },
      {
        q: "4. What is the difference between Standing Seam (Concealed) and Corrugated (Exposed Fastener) metal roofs?",
        a: "Standing seam roofs feature raised interlocking seams (1.5 to 2 inches high) secured with hidden internal clips. Because there are zero exposed screws on the roof surface, there are no rubber washers to degrade under the sun."
      },
      {
        q: "5. Can a metal roof be installed directly over existing asphalt shingles in Cary, NC?",
        a: "In certain situations where local North Carolina building codes permit (only 1 existing layer of shingles and sound wood decking), a metal roof can be installed over shingles using 1x4 wood furring strips or high-temp synthetic slip sheets."
      },
      {
        q: "6. How long does a metal roof actually last in Cary and Wake County?",
        a: "A professionally installed 24-gauge Galvalume steel or aluminum standing seam metal roof easily lasts 50 to 70+ years in North Carolina with minimal maintenance."
      },
      {
        q: "7. Do metal roofs lower summer air conditioning cooling bills?",
        a: "Yes! Metal roofs with factory Kynar 500 cool-roof pigments reflect up to 70% of solar radiation and quickly re-emit absorbed heat back into the sky."
      },
      {
        q: "8. How do you repair leaks or replace a single damaged panel on a standing seam metal roof?",
        a: "Because standing seam panels interlock, replacing a damaged panel requires specialized de-seaming tools. Our technicians carefully unlock the mechanical seams above and below the damaged section, remove the hidden clips, and slide in an exact-match replacement panel."
      }
    ]
  },
  {
    id: "flat-roofing",
    slug: "flat-roofing-services-cary-nc-usa.html",
    title: "Flat Roofing Services Cary NC USA",
    navTitle: "Flat Roofing Services Cary NC USA",
    category: "Specialty Materials",
    shortDesc: "Commercial and residential flat roofing services in Cary, NC. Certified TPO, EPDM, PVC, modified bitumen, ponding water repair, and tapered insulation systems across Wake County.",
    heroKicker: "Commercial & Residential Low-Slope Single-Ply Engineering",
    heroTitle: "Flat Roofing Services Cary NC USA",
    heroDesc: "Whether protecting a commercial retail center in Crossroads, an RTP office flex building, or a low-slope residential addition and master balcony in Cary, flat roofs demand meticulous craftsmanship. Without proper positive slope and welded seams, Wake County's 48+ inches of annual rain creates heavy ponding water.",
    localImage: "/images/split-flat-roofing.webp",
    splitImage: "/images/split-flat-roofing.webp",
    imageAlt: "Commercial flat roof transformation in Cary NC showing ponding water failure converted to heat-welded white TPO",
    beforeImage: "/images/split-flat-roofing-before.webp",
    afterImage: "/images/split-flat-roofing-after.webp",
    beforeAlt: "Ponding water and deteriorated built-up tar flat roof in Cary NC commercial park",
    beforeLabel: "Ponding Stagnant Water & Tar Blisters (Before)",
    afterLabel: "Bright White Heat-Welded TPO Membrane (After)",
    gpsCoords: "35.7592° N, 78.7940° W",
    elevation: "410 FT",
    solutions: [
      {
        title: "Flat Roof Installation",
        desc: "Complete low-slope builds utilizing robotic hot-air welded TPO, thick EPDM rubber, or multi-ply modified bitumen systems with positive drainage sloping.",
        iconSvg: "square"
      },
      {
        title: "Flat Roof Repair",
        desc: "Precision diagnostics and repairs for hidden punctures, separated field seams, perimeter flashing splits, and water blisters on commercial flat decks.",
        iconSvg: "tool"
      },
      {
        title: "Flat Roof Replacement",
        desc: "Tearing off saturated, moisture-trapped insulation, repairing structural steel or wood decking, and installing brand-new high-performance single-ply roofs.",
        iconSvg: "home"
      },
      {
        title: "Flat Roof Waterproofing",
        desc: "Applying seamless elastomeric liquid rubber and high-solids silicone barriers that permanently seal complex parapet walls, skylight curbs, and HVAC units.",
        iconSvg: "shield"
      },
      {
        title: "Flat Roof Coating",
        desc: "Restorative bright-white 100% silicone coatings that reflect 85% of solar heat, slash cooling costs, and provide watertight performance over standing ponding water.",
        iconSvg: "cloud-rain"
      },
      {
        title: "Flat Roof Restoration",
        desc: "Reconditioning aging commercial flat roofs at roughly half the cost of full replacement by re-seaming joints and applying fluid-applied protective membranes.",
        iconSvg: "layers"
      },
      {
        title: "Flat Roof Drainage Installation",
        desc: "Installing wide-mouth internal roof drains, heavy-gauge perimeter scupper boxes, downspout collector heads, and tapered cricket insulation slopes.",
        iconSvg: "droplet"
      },
      {
        title: "Flat Roof Drain Repair",
        desc: "Replacing corroded cast-iron drain clamping rings, clearing blocked leader bowls, and installing leaf strainers to prevent catastrophic water backups.",
        iconSvg: "wrench"
      },
      {
        title: "EPDM Roofing",
        desc: "Time-tested 60-mil synthetic vulcanized black rubber roofing offering superior UV resilience, extreme freeze-thaw elasticity, and puncture resistance.",
        iconSvg: "shield"
      },
      {
        title: "TPO Roofing",
        desc: "Energy Star certified bright-white thermoplastic polyolefin heat-welded at 1,000°F, creating monolithic seams 3-4x stronger than conventional glued sheets.",
        iconSvg: "square"
      },
      {
        title: "PVC Membrane Roofing",
        desc: "Premium thermoplastic roofing engineered for restaurants and industrial facilities, completely impervious to rooftop grease, animal fats, and harsh chemicals.",
        iconSvg: "building"
      },
      {
        title: "Modified Bitumen Roofing",
        desc: "Tough multi-ply polymer-modified asphalt sheets installed via heat-welded torch or cold-applied adhesive, built for heavy pedestrian maintenance traffic.",
        iconSvg: "layers"
      },
      {
        title: "Built-Up Flat Roofing",
        desc: "Traditional multi-ply asphalt and gravel tar roofing systems delivering proven multi-layer redundancy and heavy impact defense for industrial plants.",
        iconSvg: "home"
      },
      {
        title: "Ponding Water Repair",
        desc: "Eliminating dangerous standing water pools by installing tapered polyisocyanurate foam crickets, building up low spots, and adding overflow scuppers.",
        iconSvg: "droplet"
      },
      {
        title: "Flat Roof Insulation",
        desc: "Mechanically fastening rigid polyisocyanurate (polyiso) insulation boards to achieve code-compliant R-30+ thermal performance and reduce building HVAC bills.",
        iconSvg: "shield"
      }
    ],
    methodologyTitle: "Our 6-Step Commercial & Residential Flat Roofing Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Decking Structural Audit & Thermal Moisture Core Scans",
        desc: "We perform non-destructive infrared scans and test core cuts to identify saturated sub-insulation, verifying steel pan or wooden tongue-and-groove deck integrity."
      },
      {
        step: "Step 2",
        title: "Tapered Polyiso Insulation & Drainage Cricket Layout",
        desc: "To eliminate ponding water, we design and install tapered polyisocyanurate insulation boards engineered with a 1/4-inch per foot slope guiding water toward drains."
      },
      {
        step: "Step 3",
        title: "High-Strength Cover Board & Mechanical Plate Fastening",
        desc: "High-density gypsum or polyiso cover boards are secured with heavy-duty stress plates and coated screws engineered to withstand North Carolina hurricane wind uplift."
      },
      {
        step: "Step 4",
        title: "Automated Robotic 1,000°F Hot-Air Seam Welding",
        desc: "On TPO and PVC systems, our robotic hot-air welders fuse membrane overlaps at 1,000°F with consistent speed and pressure, creating permanent molecularly fused watertight seams."
      },
      {
        step: "Step 5",
        title: "Parapet Wall Encapsulation, HVAC Curbs & Scupper Detailing",
        desc: "Membranes are wrapped up and over parapet walls, reinforced with termination bars, and capped with metal coping. Plumbing boots and HVAC curbs receive welded boots."
      },
      {
        step: "Step 6",
        title: "100% Seam Probe Audit & 48-Hour Static Flood Verification",
        desc: "Every inch of welded seam is physically tested with a blunt steel probe to verify weld integrity, followed by drain plugging and static water testing before warranty sign-off."
      }
    ],
    faqs: [
      {
        q: "1. How long does a commercial or residential flat roof last in Cary, NC?",
        a: "A professionally installed 60-mil TPO or PVC flat roof typically lasts 25 to 30 years in North Carolina. EPDM rubber systems average 22 to 28 years, while multi-ply modified bitumen roofs last 20 to 25 years.",
        note: "Important Note: We offer multi-year manufacturer NDL (No Dollar Limit) warranties on commercial flat roof installations."
      },
      {
        q: "2. What is the difference between TPO, EPDM, and PVC flat roofing systems?",
        a: "TPO (white thermoplastic) is the most popular flat roof in Wake County because its heat-welded seams are exceptionally strong and its bright-white surface reflects summer sun, lowering cooling costs. EPDM is a black synthetic rubber that excels in freeze-thaw elasticity. PVC is chemically impervious to animal fats and grease vents."
      },
      {
        q: "3. Why is ponding water dangerous on flat roofs, and how does tapered insulation fix it?",
        a: "Ponding water (water remaining on a flat roof 48 hours after rain) weighs approximately 5.2 lbs per square foot per inch of depth. We solve ponding water by installing custom tapered polyisocyanurate insulation crickets."
      },
      {
        q: "4. How much does flat roof replacement or installation cost per square foot in Cary, NC?",
        a: "Flat roof installation in Cary typically ranges from $5.50 to $11.00 per square foot for single-ply systems (TPO, EPDM, PVC) and modified bitumen, depending on project scale, accessibility, and insulation thickness."
      },
      {
        q: "5. Can you apply a silicone roof coating over an existing flat roof without tear-off?",
        a: "Yes! If the underlying insulation is dry and structurally sound (verified by our infrared moisture scan), fluid-applied 100% silicone or elastomeric roof coatings can be applied directly."
      },
      {
        q: "6. How do you locate and repair hidden leaks on a flat roof?",
        a: "We inspect all pipe curbs, parapet terminations, and field seams using specialized seam probes, vector mapping, and infrared cameras."
      },
      {
        q: "7. What is the best flat roofing material for restaurants or grease-exhaust applications?",
        a: "PVC (polyvinyl chloride) membrane is the only material recommended for restaurants and food processing facilities because it withstands animal fats and oils without softening."
      },
      {
        q: "8. How does flat roof insulation (Polyiso boards) improve commercial energy efficiency in Cary?",
        a: "Continuous polyiso insulation above the structural deck eliminates thermal bridging through steel joists, keeping heated air inside during winter and blocking radiant sun heat in summer."
      }
    ]
  },
  {
    id: "gutter",
    slug: "gutter-services-cary-nc-usa.html",
    title: "Gutter Services Cary NC USA",
    navTitle: "Gutter Services Cary NC USA",
    category: "Drainage & Perimeters",
    shortDesc: "Custom seamless gutter installation, gutter repair, micro-mesh leaf guards, downspout replacement, and rainwater drainage in Cary, NC.",
    heroKicker: "Custom Seamless Extrusion & Foundation Drainage Defense",
    heroTitle: "Gutter Services Cary NC USA",
    heroDesc: "When a sudden summer thunderstorm hits Wake County, thousands of gallons of rainwater rush off your roof in minutes. Undersized or clogged 5-inch gutters overflow, rotting fascia boards and eroding foundations.",
    localImage: "/images/split-gutter.webp",
    splitImage: "/images/split-gutter.webp",
    imageAlt: "Cary NC gutter replacement showing clogged overflowing aluminum gutters upgraded to seamless white K-style gutters with guard",
    beforeImage: "/images/split-gutter-before.webp",
    afterImage: "/images/split-gutter-after.webp",
    beforeAlt: "Sagging rusted gutter pulling away from rotten fascia board in Cary NC",
    beforeLabel: "Sagging Clogged Rusted Gutters (Before)",
    afterLabel: "Seamless K-Style Gutters with Micro-Mesh (After)",
    gpsCoords: "35.7667° N, 78.8234° W",
    elevation: "425 FT",
    solutions: [
      {
        title: "Gutter Installation",
        desc: "Complete perimeter water management engineered with laser slope calculations to safely channel roof runoff away from your home's foundation.",
        iconSvg: "square"
      },
      {
        title: "Gutter Repair",
        desc: "Re-pitching sagging troughs, replacing rotted fascia backing boards, and re-attaching pulling gutters with heavy-duty structural timber screws.",
        iconSvg: "wrench"
      },
      {
        title: "Gutter Replacement",
        desc: "Tearing down dented, rusted sectional gutters with leaky seam joints and replacing them with custom-extruded continuous seamless systems.",
        iconSvg: "home"
      },
      {
        title: "Gutter Cleaning",
        desc: "Hand-clearing heavy pine straw and decaying leaves, flushing downspouts to bare metal, and hauling away all debris from your Cary property.",
        iconSvg: "leaf"
      },
      {
        title: "Gutter Maintenance",
        desc: "Bi-annual seasonal tuning: testing slope pitch, re-tooling miter joint sealants, tightening loose hangers, and inspecting downspout splash blocks.",
        iconSvg: "tool"
      },
      {
        title: "Seamless Gutter Installation",
        desc: "Custom roll-formed on-site from our mobile factory truck in unbroken, continuous single runs up to 100+ feet with zero leak-prone seams.",
        iconSvg: "square"
      },
      {
        title: "Aluminum Gutter Installation",
        desc: "Crafted from heavy-duty .032-inch commercial aluminum that will never rust, available in over 25 baked-on factory colors to match your home's trim.",
        iconSvg: "shield"
      },
      {
        title: "Steel Gutter Installation",
        desc: "High-strength 26-gauge galvanized and galvalume steel gutters designed to endure heavy pine tree branch strikes and extreme thermal expansion.",
        iconSvg: "shield"
      },
      {
        title: "Copper Gutter Installation",
        desc: "Architectural 16-oz half-round and K-style luxury copper systems featuring hand-soldered seams that age into an elegant green verdigris patina.",
        iconSvg: "layers"
      },
      {
        title: "Downspout Installation",
        desc: "Installing oversized 3x4 inch commercial downspouts that discharge 40% more water volume than standard builder-grade 2x3 downspouts.",
        iconSvg: "cloud-rain"
      },
      {
        title: "Downspout Repair",
        desc: "Re-connecting separated elbows, replacing crushed ground extensions, and securing loose wall straps against brick or vinyl siding.",
        iconSvg: "tool"
      },
      {
        title: "Downspout Replacement",
        desc: "Upgrading clogged or undersized leaders with high-flow corrugated aluminum pipes and cleanout access ports for effortless maintenance.",
        iconSvg: "wrench"
      },
      {
        title: "Gutter Guard Installation",
        desc: "Surgical-grade stainless steel micro-mesh guards with aluminum frames that block tiny pine needles, pollen, and shingle grit while taking torrential rain.",
        iconSvg: "shield"
      },
      {
        title: "Gutter Leak Repair",
        desc: "Scraping failed silicone and tooling in high-solids vulcanized rubber tri-polymer sealant at corner miters, end caps, and drop outlets.",
        iconSvg: "droplet"
      },
      {
        title: "Gutter Unclogging",
        desc: "High-pressure water snaking and mechanical clearing of stubborn underground leader pipes, dry wells, and blocked catch basins.",
        iconSvg: "cloud-rain"
      },
      {
        title: "Rainwater Drainage Solutions",
        desc: "Burying solid PVC drain pipes to discharge roof stormwater 10+ feet away from foundations into lawn pop-up emitters or rain gardens.",
        iconSvg: "home"
      }
    ],
    methodologyTitle: "Our 6-Step Seamless Gutter & Drainage Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Laser Slope & Roof Drainage Area Calculation",
        desc: "We calculate your roof's total square footage and slope pitch to determine proper trough capacity (5-inch vs 6-inch) and establish a precise 1/4-inch slope per 10 feet toward downspouts."
      },
      {
        step: "Step 2",
        title: "Fascia Board Integrity & Rafter Tail Inspection",
        desc: "Before hanging new troughs, we inspect every linear foot of wooden fascia. Any soft or water-rotted cedar or pine boards are replaced with primed, rot-resistant wood."
      },
      {
        step: "Step 3",
        title: "Custom On-Site Mobile Seamless Extrusion",
        desc: "Our mobile roll-forming machine extrudes seamless .032-gauge aluminum gutters to the exact millimeter of your roofline right in your driveway, eliminating leak-prone mid-run seams."
      },
      {
        step: "Step 4",
        title: "Heavy-Duty Hidden Hanger Screw Fastening",
        desc: "We never use cheap spikes that pull loose. We drive heavy-gauge zinc-coated structural screws through hidden internal hangers directly into rafter tails every 24 inches."
      },
      {
        step: "Step 5",
        title: "Oversized Downspout & Micro-Mesh Guard Integration",
        desc: "Wide-mouth 3x4 downspouts are riveted securely to outlets. If requested, stainless steel micro-mesh guards are screwed under the drip edge to block pine needles permanently."
      },
      {
        step: "Step 6",
        title: "High-Volume Water Flow Test & Site Cleanup",
        desc: "We flush hundreds of gallons of water through the completed system to verify rapid drainage without pooling, test all corners for leaks, and run magnetic sweepers around the perimeter."
      }
    ],
    faqs: [
      {
        q: "1. How much does seamless gutter installation cost in Cary, NC?",
        a: "In Cary, standard 6-inch seamless aluminum gutters typically range from $6.50 to $12.50 per linear foot installed, including hidden screw hangers, end caps, and custom miters.",
        note: "Important Note: We provide transparent on-site quotes with laser measurements and zero hidden fees."
      },
      {
        q: "2. Why should Cary homeowners choose 6-inch gutters over builder-grade 5-inch gutters?",
        a: "A 6-inch gutter holds 40% more water volume than a 5-inch gutter and pairs with larger 3x4 downspouts. This extra capacity prevents torrential rainwater from overflowing the trough edge."
      },
      {
        q: "3. Do micro-mesh gutter guards actually work against Carolina pine needles?",
        a: "Yes, but ONLY surgical-grade stainless steel micro-mesh. Cheap plastic slotted covers fail quickly because thin loblolly pine needles pierce straight through the slots."
      },
      {
        q: "4. How often should gutters be cleaned in wooded Cary neighborhoods like Lochmere or Preston?",
        a: "Homes under mature pine and oak trees require cleaning at least 2 to 3 times per year. If you have installed our micro-mesh gutter guards, routine interior gutter cleanouts are eliminated entirely."
      },
      {
        q: "5. What is the difference between Seamless Gutters and store-bought Sectional Gutters?",
        a: "Sectional gutters have seams every 10 feet joined by caulk that breaks down over time. Seamless gutters are custom roll-formed in single, continuous runs with zero seams along straightaways."
      },
      {
        q: "6. Can overflowing gutters really cause foundation cracks and crawl space water damage?",
        a: "Absolutely. When gutters overflow, thousands of gallons of rainwater drop directly along your home's foundation line, saturating clay soil and creating foundation cracks."
      },
      {
        q: "7. How do you handle underground drainage and downspout extensions?",
        a: "We trench and bury smooth-wall PVC drainage pipes that carry stormwater 10 to 20 feet away into lawn pop-up discharge emitters or dry wells."
      },
      {
        q: "8. Which gutter material is best: Aluminum, Steel, or Copper?",
        a: "Seamless Aluminum (.032 gauge) is the #1 choice for 90% of Cary homes because it never rusts, is lightweight, cost-effective, and comes in 25+ colors to match your trim."
      }
    ]
  },
  {
    id: "waterproofing",
    slug: "roof-waterproofing-services-cary-nc-usa.html",
    title: "Roof Waterproofing Services Cary NC USA",
    navTitle: "Roof Waterproofing Services Cary NC USA",
    category: "Waterproofing & Protection",
    shortDesc: "Commercial and residential roof waterproofing services in Cary, NC. Specialized liquid applied membranes, flat roof coatings, terrace sealing, and foundation moisture defense.",
    heroKicker: "Commercial & Residential Hydrophobic Moisture Defense",
    heroTitle: "Roof Waterproofing Services Cary NC USA",
    heroDesc: "With Cary receiving over 48 inches of rainfall each year and enduring intense subtropical storms, flat roof decks, concrete terraces, and foundations face continuous hydrostatic pressure.",
    localImage: "/images/split-waterproofing.webp",
    splitImage: "/images/split-waterproofing.webp",
    imageAlt: "Roof waterproofing in Cary NC showing rotted valley leak protection upgraded with heavy-duty blue ice and water barrier",
    beforeImage: "/images/split-waterproofing-before.webp",
    afterImage: "/images/split-waterproofing-after.webp",
    beforeAlt: "Severe water infiltration and rotting wood valley on Cary NC home before waterproofing",
    beforeLabel: "Water Soaked Valley Rot & Moss (Before)",
    afterLabel: "Self-Adhered Ice & Water Shield Barrier (After)",
    gpsCoords: "35.7480° N, 78.7710° W",
    elevation: "430 FT",
    solutions: [
      {
        title: "Roof Waterproofing",
        desc: "Holistic moisture-barrier engineering protecting sloped, flat, and low-slope residential and commercial properties against driven rain and standing water.",
        iconSvg: "shield"
      },
      {
        title: "Flat Roof Waterproofing",
        desc: "Heat-welded 60-mil TPO, cold-applied elastomeric rubber, and heavy-duty EPDM single-ply installations engineered to resist continuous ponding water.",
        iconSvg: "square"
      },
      {
        title: "Terrace Waterproofing",
        desc: "Multi-layer polyurethane traffic coatings designed for outdoor balconies, rooftop patios, and living decks beneath concrete pavers or exterior tile.",
        iconSvg: "home"
      },
      {
        title: "Concrete Roof Waterproofing",
        desc: "Penetrating crystalline treatments and crack-bridging elastomeric membranes that seal concrete pores against water absorption and steel rebar corrosion.",
        iconSvg: "building"
      },
      {
        title: "Liquid Roof Waterproofing",
        desc: "Cold-applied high-solids silicone and liquid polyurethane that cure into a seamless, monolithic rubber blanket without a single failure-prone seam.",
        iconSvg: "droplet"
      },
      {
        title: "Waterproof Roof Coating",
        desc: "Bright-white 100% silicone restoration coatings that reflect 85% of solar UV radiation while permanently sealing aged flat roofs against water intrusion.",
        iconSvg: "cloud-rain"
      }
    ],
    methodologyTitle: "Our 6-Step Waterproofing Application Process",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Substrate Mechanical Cleaning & Moisture Testing",
        desc: "We power-wash and mechanically scrape the surface down to solid substrate, removing dirt, laitance, oil, and failed coatings."
      },
      {
        step: "Step 2",
        title: "Crack V-Grooving & Expansion Joint Pre-Treatment",
        desc: "All structural fissures and expansion seams are opened with diamond blades, cleaned, and packed with backer rods and polyurethane mastic."
      },
      {
        step: "Step 3",
        title: "Penetrating Epoxy / Hydrophobic Primer Coat",
        desc: "We roll a high-tack primer across the deck to promote permanent chemical adhesion between the roof deck and the waterproofing membrane."
      },
      {
        step: "Step 4",
        title: "Polyester Scrim Fabric Embedding at Critical Junctions",
        desc: "Woven polyester reinforcement fabric is fully embedded into wet basecoats around all 90-degree parapet transitions, HVAC curbs, and scuppers."
      },
      {
        step: "Step 5",
        title: "Primary Elastomeric / Membrane Application (Multi-Pass)",
        desc: "We apply the primary waterproofing system in two cross-hatched coats to achieve specified dry-film thickness (minimum 30 to 45 mils)."
      },
      {
        step: "Step 6",
        title: "48-Hour Electronic Leak Detection or Static Water Flood Test",
        desc: "On flat roofs and terraces, drains are temporarily plugged and the surface is flooded with 2 inches of water for 48 hours to physically verify zero moisture penetration."
      }
    ],
    faqs: [
      {
        q: "1. How much does professional roof waterproofing cost in Cary, NC?",
        a: "Roof waterproofing in Cary typically costs between $2.50 and $6.50 per square foot for liquid-applied elastomeric or silicone roof coatings, and between $5.00 and $11.00 per square foot for heavy-duty multi-layer sheet membranes.",
        note: "Important Note: Waterproofing an existing flat roof can save up to 60% compared to the cost of a full roof tear-off."
      },
      {
        q: "2. What is the difference between Liquid Roof Waterproofing and Sheet Membrane Waterproofing?",
        a: "Liquid waterproofing cures into a monolithic, seamless rubber skin that has zero seams — ideal for roofs with dozens of pipes and HVAC units. Sheet membrane waterproofing comes in prefabricated rolls."
      },
      {
        q: "3. How long do waterproof roof coatings and polyurethane membranes last in North Carolina?",
        a: "High-solids silicone and polyurethane waterproofing systems installed to manufacturer thickness typically last 15 to 20 years in Wake County."
      },
      {
        q: "4. Can you waterproof a concrete terrace or outdoor balcony without tearing up existing tiles?",
        a: "In many cases, yes. If the existing tile and mortar substrate is structurally sound, we can apply transparent or tinted aliphatic polyurethane liquid membranes directly over the tiles."
      },
      {
        q: "5. Why is ponding water so dangerous for flat roofs, and how does waterproofing solve it?",
        a: "Ponding water exerts tremendous weight on roof trusses. Modern 100% silicone waterproofing coatings are completely chemically impervious to ponding water."
      },
      {
        q: "6. Can a waterproof reflective roof coating lower summer energy bills in Cary, NC?",
        a: "Yes! Bright white 'Cool Roof' silicone coatings reflect up to 85% of solar heat back into the atmosphere, lowering air conditioning cooling expenses by 15% to 25%."
      },
      {
        q: "7. How do you seal active roof leaks and expansion joints during heavy rain?",
        a: "During severe rainstorms, our emergency technicians use moisture-curing hydrophilic polyurethane mastics that react chemically with water to form an instant seal."
      },
      {
        q: "8. Is roof waterproofing covered by manufacturer warranties in Cary, NC?",
        a: "Yes, our commercial and residential roof waterproofing installations come with 10, 15, and 20-year leak-free material and workmanship warranties."
      }
    ]
  },
  {
    id: "flashing-ventilation",
    slug: "roof-flashing-ventilation-services-cary-nc-usa.html",
    title: "Roof Flashing & Ventilation Services Cary NC USA",
    navTitle: "Roof Flashing & Ventilation Services Cary NC USA",
    category: "Drainage & Perimeters",
    shortDesc: "Expert roof flashing repair, chimney counter-flashing, continuous ridge vent installation, and balanced attic ventilation in Cary, NC.",
    heroKicker: "Precision Leak Prevention & Balanced Attic Climate Engineering",
    heroTitle: "Roof Flashing & Ventilation Services Cary NC USA",
    heroDesc: "Over 80% of roof leaks in Wake County do not originate in the middle of shingles they occur at failed flashing junctions around chimneys, sidewalls, dormers, and valleys.",
    localImage: "/images/split-flashing-ventilation.webp",
    splitImage: "/images/split-flashing-ventilation.webp",
    imageAlt: "Cary NC chimney flashing and ridge ventilation field photo showing rusted apron flashing replaced with bronze counter-flashing",
    beforeImage: "/images/split-flashing-ventilation-before.webp",
    afterImage: "/images/split-flashing-ventilation-after.webp",
    beforeAlt: "Rusted loose chimney flashing causing attic moisture leaks in Cary NC",
    beforeLabel: "Rusted Chimney Step Flashing (Before)",
    afterLabel: "Custom-Bent Counter Flashing & Ridge Vent (After)",
    gpsCoords: "35.7950° N, 78.7620° W",
    elevation: "415 FT",
    solutions: [
      {
        title: "Roof Flashing Installation",
        desc: "Custom-brake fabrication and installation of corrosion-resistant aluminum, copper, and galvanized steel transitions at every roof-to-wall intersection.",
        iconSvg: "square"
      },
      {
        title: "Roof Flashing Repair",
        desc: "Scraping away brittle caulking, re-anchoring loose step cards, and tooling in high-grade polyurethane sealant to halt active junction leaks.",
        iconSvg: "wrench"
      },
      {
        title: "Chimney Flashing Repair",
        desc: "Saw-cutting a 1-inch deep reglet groove into chimney mortar joints, anchoring custom lead or aluminum counter-flashing with lead wedges.",
        iconSvg: "building"
      },
      {
        title: "Ridge Vent Installation",
        desc: "Precision saw-cutting a continuous 2-inch slot along the roof ridge beam, installing external baffled shingle-over ridge vents for passive heat exhaust.",
        iconSvg: "building"
      },
      {
        title: "Soffit Vent Installation",
        desc: "Cutting and installing perforated intake vents under roof eaves, combined with attic rafter baffles so insulation never chokes incoming airflow.",
        iconSvg: "home"
      },
      {
        title: "Attic Ventilation",
        desc: "Performing engineering calculations to balance intake and exhaust airflow according to the international 1/300 Net Free Ventilating Area (NFVA) standard.",
        iconSvg: "shield"
      }
    ],
    methodologyTitle: "Our 6-Step Flashing & Ventilation Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Attic Thermal & Airflow Diagnostics (NFVA Calculation)",
        desc: "We measure your attic square footage and calculate the exact Net Free Ventilating Area (NFVA) needed, testing temperature differentials."
      },
      {
        step: "Step 2",
        title: "Siding Detachment & Flashing Substrate Inspection",
        desc: "Along dormers, walls, and chimneys, we gently lift siding or mortar joints to inspect underlying wood framing for rot or hidden moisture."
      },
      {
        step: "Step 3",
        title: "Custom On-Site Sheet Metal Brake Fabrication",
        desc: "Using heavy-gauge aluminum or architectural copper, our technicians bend step flashings, chimney crickets, and counter-flashings to exact roof slope angles."
      },
      {
        step: "Step 4",
        title: "Step-by-Step Interleaving & Mechanical Masonry Anchoring",
        desc: "Each step flashing card is installed with a single shingle course. Counter-flashing is wedged into mortar reglet joints and sealed with polyurethane."
      },
      {
        step: "Step 5",
        title: "Continuous Ridge Vent Slot Cutting & Baffle Clearing",
        desc: "We saw-cut a uniform exhaust slot along the ridge line and verify foam baffles at every rafter bay to guarantee unobstructed airflow."
      },
      {
        step: "Step 6",
        title: "Water Testing & Convective Airflow Verification",
        desc: "We verify convective airflow using smoke pen diagnostics and conduct water testing on all flashed joints to guarantee 100% leak-proof performance."
      }
    ],
    faqs: [
      {
        q: "1. How do you know if your roof flashing is leaking or needs replacement?",
        a: "Common warning signs include water stains on ceilings directly beneath chimneys or sidewalls, damp drywall around skylights, and dried caulk along brick mortar lines.",
        note: "Important Note: We provide free on-site flashing inspections with detailed photos showing the condition behind siding and mortar joints."
      },
      {
        q: "2. Why does poor attic ventilation cause shingles to blister and curl in North Carolina?",
        a: "During Cary's humid summers, attic temperatures easily soar past 140°F without balanced continuous ventilation. This heat bakes shingles from below, boiling out asphalt oils and curling edges."
      },
      {
        q: "3. Can bad chimney flashing cause toxic black mold inside ceilings and walls?",
        a: "Yes. When chimney counter-flashing pulls away from brick mortar, rainwater trickles down the backside of the chimney into attic insulation and wall cavities, fostering mold growth."
      },
      {
        q: "4. What is the difference between Step Flashing and Continuous Flashing on sidewalls?",
        a: "Step flashing consists of individual 7x10 inch L-shaped metal cards interleaved with each shingle row along sloped walls. Continuous flashing is used only on horizontal wall transitions."
      },
      {
        q: "5. How does the 1/300 attic ventilation rule work with soffit intake and ridge vents?",
        a: "Building codes require 1 sq ft of Net Free Vent Area for every 300 sq ft of attic floor space, split 50/50 between soffit intake and ridge exhaust."
      },
      {
        q: "6. Why is there condensation dripping from nails in my attic during winter?",
        a: "Warm moist interior air rises into unvented attics in winter and condenses on cold roof decking and nails, creating 'attic rain' that rusts fasteners and dampens insulation."
      },
      {
        q: "7. Do solar-powered attic fans lower electric bills?",
        a: "Yes, solar attic fans can reduce attic heat by 20°F to 30°F, provided they are balanced with adequate soffit intake vents."
      },
      {
        q: "8. Can roof flashing be repaired without replacing the whole roof?",
        a: "Yes! Compromised chimney flashing, valley flashing, and pipe boots can be independently replaced without stripping the entire field of shingles."
      }
    ]
  },
  {
    id: "insulation",
    slug: "roof-insulation-services-cary-nc-usa.html",
    title: "Roof Insulation Services Cary NC USA",
    navTitle: "Roof Insulation Services Cary NC USA",
    category: "Energy & Comfort",
    shortDesc: "High-performance attic insulation, spray foam, blown-in fiberglass, and cool roof heat-reduction services in Cary, NC. Built to North Carolina R-38 / R-49 energy standards.",
    heroKicker: "Climate Zone 4A Thermal Envelope & Energy Optimization",
    heroTitle: "Roof Insulation Services Cary NC USA",
    heroDesc: "In Cary, summer heat turns unfinished attics into 140°F ovens that radiate downward into upper-floor bedrooms, forcing air conditioning systems into continuous overdrive and driving up Duke Energy electric bills.",
    localImage: "/images/split-insulation.webp",
    splitImage: "/images/split-insulation.webp",
    imageAlt: "Attic roof insulation upgrade in Cary NC showing old deteriorated fiberglass replaced with thick R-38 blown cellulose and rafter baffles",
    beforeImage: "/images/split-insulation-before.webp",
    afterImage: "/images/split-insulation-after.webp",
    beforeAlt: "Compacted dirty fiberglass batt insulation in Cary NC attic with thermal gaps",
    beforeLabel: "Damp Moldy Compacted Insulation (Before)",
    afterLabel: "R-38 Blown-In Cellulose with Air Baffles (After)",
    gpsCoords: "35.7790° N, 78.8120° W",
    elevation: "440 FT",
    solutions: [
      {
        title: "Roof Insulation Installation",
        desc: "Complete thermal envelope build to R-38 / R-49 North Carolina building code standards, paired with air-tight top-plate sealing to eliminate energy loss.",
        iconSvg: "home"
      },
      {
        title: "Roof Insulation Replacement",
        desc: "Safe vacuum extraction of compressed, rodent-contaminated, or water-damaged fiberglass, followed by attic deck sanitization and brand-new virgin fill.",
        iconSvg: "wrench"
      },
      {
        title: "Attic Insulation",
        desc: "High-density blown-in virgin fiberglass or stabilized cellulose providing a continuous, seamless thermal blanket across all ceiling joist cavities.",
        iconSvg: "shield"
      },
      {
        title: "Spray Foam Roof Insulation",
        desc: "Applying high-R closed-cell or open-cell polyurethane foam directly to the underside of roof rafters, converting hot attics into conditioned storage spaces.",
        iconSvg: "droplet"
      },
      {
        title: "Cool Roof Installation",
        desc: "Installing high-SRI (Solar Reflectance Index) architectural shingles and bright-white membranes that reflect solar heat back into the atmosphere.",
        iconSvg: "cloud-rain"
      },
      {
        title: "Roof Insulation Repair",
        desc: "Patching localized insulation voids around recessed can lights, bathroom exhaust ducts, and installing R-50 insulated zipper tents over attic access stairs.",
        iconSvg: "tool"
      }
    ],
    methodologyTitle: "Our 6-Step Energy-Efficiency Insulation Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Pre-Insulation Energy Audit & Thermal Infrared Scan",
        desc: "We scan ceiling planes with infrared thermal imaging cameras to pinpoint exact heat-leak zones, measuring current insulation depth."
      },
      {
        step: "Step 2",
        title: "Comprehensive Air-Sealing (Top Plates & Chases)",
        desc: "Before blowing new insulation, expanding polyurethane foam seals all wire penetrations, plumbing vent chases, recessed can lights, and top plates."
      },
      {
        step: "Step 3",
        title: "Soffit Baffle Installation at Every Rafter Bay",
        desc: "Rigid foam vent chutes are stapled into every eave rafter bay so blown insulation never blocks incoming convective airflow."
      },
      {
        step: "Step 4",
        title: "Old Contaminated Insulation Extraction (If Required)",
        desc: "Commercial negative-pressure vacuums safely remove wet, animal-damaged, or compressed insulation directly into outdoor disposal bags."
      },
      {
        step: "Step 5",
        title: "Pneumatic High-Density Blowing to Code Depth (R-49)",
        desc: "Using calibrated depth markers, we blow virgin fiberglass or cellulose to an exact depth of 14 to 18 inches for uniform R-value coverage."
      },
      {
        step: "Step 6",
        title: "Insulated Attic Hatch Box & Final Thermal Camera Sign-Off",
        desc: "We install an R-50 insulated zipper tent over attic access stairs and verify complete thermal coverage with infrared imaging."
      }
    ],
    faqs: [
      {
        q: "1. How much attic insulation do I need for a home in Cary, North Carolina (R-38 vs R-49)?",
        a: "Under the North Carolina State Building Energy Conservation Code (IECC Climate Zone 4A), residential attics require a minimum of R-38 (approx 12-14 inches), with R-49 (approx 16-18 inches) strongly recommended for optimal savings.",
        note: "Important Note: We provide free attic depth measurements and thermal energy audits across all Cary zip codes."
      },
      {
        q: "2. How much can new roof and attic insulation lower my Duke Energy electricity bill in summer?",
        a: "Proper air-sealing paired with R-49 insulation routinely reduces monthly Duke Energy air conditioning bills by $40 to $90+ per month during peak summer months."
      },
      {
        q: "3. What is the difference between blown-in fiberglass, cellulose, and spray foam insulation?",
        a: "Fiberglass is fireproof and does not settle; cellulose offers high R-value from recycled fibers; spray foam creates an airtight vapor seal directly against rafters."
      },
      {
        q: "4. Can you install spray foam insulation directly to the underside of roof sheathing?",
        a: "Yes. Applying spray foam directly to roof rafters creates an unvented conditioned attic, ideal for homes with HVAC ductwork located in the attic."
      },
      {
        q: "5. Why is air sealing top plates more important than simply blowing in more inches of insulation?",
        a: "Insulation slows conductive heat transfer, but moving air leaks through unsealed ceiling gaps. Sealing bypasses with foam stops the 'stack effect'."
      },
      {
        q: "6. What are the signs of old, compressed attic insulation that needs replacement?",
        a: "Warning signs include hot upstairs bedrooms, visible depth under 6 inches, dark dust filtration near eave vents, and rodent nesting odor."
      },
      {
        q: "7. What is a Cool Roof in Wake County?",
        a: "A Cool Roof uses reflective shingles or white membranes that reflect up to 85% of solar heat, lowering attic temperatures and extending shingle life."
      },
      {
        q: "8. Does new roof insulation qualify for federal energy tax credits (Section 25C)?",
        a: "Yes! Cary homeowners can claim a federal tax credit of 30% of insulation material costs (up to $1,200 per year) under the Inflation Reduction Act."
      }
    ]
  },
  {
    id: "shingle-tile-slate",
    slug: "shingle-tile-slate-roofing-cary-nc-usa.html",
    title: "Shingle, Tile & Slate Roofing Services Cary NC USA",
    navTitle: "Shingle, Tile & Slate Roofing Services Cary NC USA",
    category: "Specialty Materials",
    shortDesc: "Architectural shingle installation, Spanish clay tile, concrete tile, and natural Vermont slate roofing in Cary, NC. Expert repairs, tile repointing, and missing shingle replacement.",
    heroKicker: "Wake County Craftsmanship & Architectural Heritage",
    heroTitle: "Shingle, Tile & Slate Roofing Services Cary NC USA",
    heroDesc: "From prestigious estate residences in Preston, MacGregor Downs, and Lochmere to classic family homes in Central Cary and Amberly, steep-slope roofing defines your property's character, weather resilience, and market appraisal.",
    localImage: "/images/split-shingle-tile-slate.webp",
    splitImage: "/images/split-shingle-tile-slate.webp",
    imageAlt: "Clay tile and slate roofing project in Cary NC showing broken cracked tiles replaced with interlocking terracotta and copper flashing",
    beforeImage: "/images/split-shingle-tile-slate-before.webp",
    afterImage: "/images/split-shingle-tile-slate-after.webp",
    beforeAlt: "Cracked Spanish clay roof tiles with water pooling in Cary NC before restoration",
    beforeLabel: "Broken Displaced Terracotta Tiles (Before)",
    afterLabel: "Precision Interlocking Clay Tiles & Copper Valley (After)",
    gpsCoords: "35.7890° N, 78.8340° W",
    elevation: "455 FT",
    solutions: [
      {
        title: "Asphalt Shingle Installation",
        desc: "Precision installation of heavyweight fiberglass-asphalt composite shingles utilizing a 6-nail pneumatic fastening pattern and self-sealing DuraLock thermal adhesive strips.",
        iconSvg: "layers"
      },
      {
        title: "Architectural Shingle Roofing",
        desc: "Dimensional multi-layer laminate shingles engineered with 130 MPH wind uplift resistance, shadow-band aesthetics, and algae-resistant copper granules suited for Cary humidity.",
        iconSvg: "home"
      },
      {
        title: "Clay Tile Roofing",
        desc: "Authentic kiln-fired Spanish, French, and Mission terracotta clay tiles delivering timeless Mediterranean aesthetics, Class A fire resistance, and 80+ year longevity.",
        iconSvg: "grid"
      },
      {
        title: "Concrete Tile Roofing",
        desc: "Ultra-dense dyed concrete interlocking tiles engineered to withstand heavy hail impacts, high thermal cycles, and severe Carolina rain without fading or warping.",
        iconSvg: "building"
      },
      {
        title: "Slate Roof Installation",
        desc: "Quarried natural Vermont or Virginia roofing slate hand-sorted by thickness, laid with 3-inch headlaps, and fastened with solid copper roofing nails for a century-long roof.",
        iconSvg: "shield"
      },
      {
        title: "Roof Tile Repointing",
        desc: "Chiseling away crumbling or eroded cement mortar along hip and ridge courses and repointing with polymer-modified, flexible fiber-reinforced pointing mortar.",
        iconSvg: "shield"
      }
    ],
    methodologyTitle: "Our 6-Step Master Craftsmanship Shingle, Tile & Slate Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Structural Rafter Capacity & Dead-Load Engineering Audit",
        desc: "Because clay tiles and natural Vermont slate exert 800 to 1,500 lbs of dead load per 100 sq ft, our engineers calculate existing truss sizing and collar tie reinforcement."
      },
      {
        step: "Step 2",
        title: "Substrate Re-Sheathing & High-Temp Ice/Water Membrane",
        desc: "We install minimum 5/8-inch CDX plywood decking and roll out high-temperature self-adhering modified bitumen underlayment rated to withstand 260°F."
      },
      {
        step: "Step 3",
        title: "Rot-Proof Pressure-Treated Batten Grid & Ventilation Eaves",
        desc: "For concrete and clay tile assemblies, we fasten horizontal counter-battens with corrosion-resistant screws to ensure natural sub-tile ventilation."
      },
      {
        step: "Step 4",
        title: "Heavy-Gauge 16-oz Copper Valleys & Soldered Flashing",
        desc: "We fabricate custom 16-ounce solid cold-rolled copper open valley troughs, stepped sidewall tin flashings, and lead chimney aprons hand-soldered for lifetime watertightness."
      },
      {
        step: "Step 5",
        title: "Hand-Nailed Solid Copper Fastening & Precision Lapping",
        desc: "Natural slates are fastened by hand using 10-gauge solid copper smooth-shank roofing nails driven flush without puncturing the stone countersunk holes."
      },
      {
        step: "Step 6",
        title: "Polymer Ridge Mortar Repointing & Magnetic Grounds Sweep",
        desc: "All hip, ridge, and apex caps are bedded in specialized polymer-modified flexible mortar color-tinted to match the tile body, followed by triple magnetic lawn sweeps."
      }
    ],
    faqs: [
      {
        q: "1. How much does a shingle, tile, or slate roof cost in Cary, NC?",
        a: "Architectural shingles typically cost $4.50 to $7.80 per sq ft ($9,500 to $19,000 for an average home). Tile ranges from $13.50 to $22.00 per sq ft, and natural Vermont slate ranges from $24.00 to $38.00+ per sq ft.",
        note: "Important Note: Exact pricing depends on your roof's pitch, rafter reinforcement needs, and architectural details."
      },
      {
        q: "2. Can my existing Cary home support the weight of heavy clay tile or natural slate?",
        a: "Standard shingles weigh ~260 lbs per square, while tile and slate weigh 800 to 1,500 lbs per square. If needed, our team coordinates a structural framing audit to sister rafters and add collar ties."
      },
      {
        q: "3. What is the difference between architectural shingles and traditional 3-tab shingles in Wake County?",
        a: "Architectural shingles feature multi-layer laminated fiberglass rated for 130 MPH winds and last 25 to 35 years. 3-tab shingles are rated for only 60 MPH and last 15 to 20 years."
      },
      {
        q: "4. How do roofers replace a single broken slate tile without damaging adjacent stones?",
        a: "Our craftsmen work from hook ladders and use a slate ripper to hook and shear the concealed copper nails, sliding out broken slate and securing new stone with copper bib clips."
      },
      {
        q: "5. What is roof tile repointing, and why does ridge mortar crack in North Carolina?",
        a: "Thermal expansion cycles cause traditional mortar on ridge caps to fracture. Repointing involves chiseling out failing mortar and applying flexible polymer-modified mortar."
      },
      {
        q: "6. Can missing shingles blown off in a storm simply be glued back down?",
        a: "No. When severe winds rip shingles, nail holes tear and tar strips get contaminated. We unseal overlapping courses, install brand-new shingles, and hand-seal tabs with asphalt cement."
      },
      {
        q: "7. How long do natural slate, clay tile, and architectural shingles actually last in Cary, NC?",
        a: "Vermont slate lasts 100 to 150+ years; Spanish clay tile lasts 60 to 80+ years; architectural shingles last 22 to 30 years in Cary's climate."
      },
      {
        q: "8. Does homeowners insurance cover hail and wind damage on tile or slate roofs?",
        a: "Yes. Homeowners insurance policies generally cover sudden weather damage. We provide Xactimate estimates and meet adjusters on-site to ensure full replacement is approved."
      }
    ]
  },
  {
    id: "coating-restoration",
    slug: "roof-coating-restoration-cary-nc-usa.html",
    title: "Roof Coating & Restoration Services Cary NC USA",
    navTitle: "Roof Coating & Restoration Services Cary NC USA",
    category: "Waterproofing & Protection",
    shortDesc: "Commercial and residential fluid-applied roof coating and restoration in Cary, NC. High-solids silicone, elastomeric acrylic, cool roof coatings, and metal rust treatments.",
    heroKicker: "Save Up to 50% vs Tear-Off • 100% Tax Deductible (Section 179)",
    heroTitle: "Roof Coating & Restoration Services Cary NC USA",
    heroDesc: "Replacing a commercial flat deck or aging metal roof in Cary, NC often costs tens of thousands of dollars and disrupts daily operations. Fluid-applied roof coating and restoration systems deliver a monolithic, fully adhered, waterproof rubber membrane over your existing roof stopping leaks without a disruptive tear-off.",
    localImage: "/images/split-coating-restoration.webp",
    splitImage: "/images/split-coating-restoration.webp",
    imageAlt: "Roof coating restoration in Cary NC showing aged cracked commercial roof coated with reflective high-solids white silicone elastomer",
    beforeImage: "/images/split-coating-restoration-before.webp",
    afterImage: "/images/split-coating-restoration-after.webp",
    beforeAlt: "Oxidized micro-cracked commercial roof membrane in Cary NC industrial corridor",
    beforeLabel: "Weathered Oxidized Alligatoring Surface (Before)",
    afterLabel: "High-Solids Cool White Silicone Coating (After)",
    gpsCoords: "35.7620° N, 78.7550° W",
    elevation: "392 FT",
    solutions: [
      {
        title: "Roof Coating Application",
        desc: "High-pressure airless spray and roller application of industrial fluid-applied membranes, creating a continuous, seam-free waterproof barrier across low-slope and metal roofs.",
        iconSvg: "layers"
      },
      {
        title: "Silicone Roof Coating",
        desc: "95%+ high-solids moisture-curing silicone that withstands permanent ponding water without softening or peeling, ideal for flat commercial roofs with slow-draining areas.",
        iconSvg: "shield"
      },
      {
        title: "Acrylic Roof Coating",
        desc: "100% water-based elastomeric acrylic polymers providing exceptional tensile strength, breathability, and high UV reflectivity on sloped roofs with positive drainage.",
        iconSvg: "cloud-rain"
      },
      {
        title: "Metal Roof Coating",
        desc: "Complete restoration for commercial and agricultural standing seam or corrugated metal, encapsulating fasteners, sealing lap seams, and eliminating rust corrosion.",
        iconSvg: "building"
      },
      {
        title: "Flat Roof Coating",
        desc: "Seamless fluid-applied membrane resurfacing over weathered TPO, EPDM, PVC, and smooth modified bitumen, eliminating edge splits and parapet leaks.",
        iconSvg: "square"
      },
      {
        title: "Roof Restoration",
        desc: "A sustainable full-roof renewal system saving up to 50% compared to a reroof, qualifying as a 100% first-year tax deductible maintenance expense under IRS Section 179.",
        iconSvg: "wrench"
      }
    ],
    methodologyTitle: "Our 6-Step Fluid-Applied Roof Coating & Restoration Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Infrared Thermal Moisture Audit & Substrate Testing",
        desc: "We perform nighttime infrared thermography and electronic moisture probe scans to locate wet or saturated insulation boards. Damaged sections are cut out and replaced."
      },
      {
        step: "Step 2",
        title: "3,500 PSI Industrial Rotating-Tip Hydro-Cleaning",
        desc: "We power-wash the entire roof using eco-friendly biodegradable degreasers and 3,500 PSI turbo nozzles to strip away grease, dirt, algae, and oxidation."
      },
      {
        step: "Step 3",
        title: "Fastener Encapsulation & Heavy-Duty Seam Stitching",
        desc: "Every fastener is inspected, re-torqued, and capped with elastomeric mastic. All horizontal laps and seams are reinforced with embedded polyester scrim fabric."
      },
      {
        step: "Step 4",
        title: "Substrate-Specific Adhesion Primer & Rust Neutralizer",
        desc: "On rusted metal, we apply a zinc-rich rust-converting primer. On weathered EPDM or TPO, specialized epoxy wash primers create maximum chemical adhesion."
      },
      {
        step: "Step 5",
        title: "Dual-Pass Airless Spray Coating to Certified Mil Thickness",
        desc: "Using heavy-duty commercial airless spray rigs, our certified technicians apply base and topcoats to a specified 25 to 35 wet mil thickness."
      },
      {
        step: "Step 6",
        title: "Mil Gauge Thickness Verification & 10-20 Year Warranty",
        desc: "Quality assurance inspectors verify dry-film thickness with ultrasound and magnetic mil gauges across every 500 sq ft, followed by issuing 10 to 20-year renewable warranties."
      }
    ],
    faqs: [
      {
        q: "1. How much does commercial roof coating and restoration cost in Cary, NC?",
        a: "A professional fluid-applied roof coating system in Cary typically costs between $3.00 and $6.50 per square foot installed, compared to $8.00 to $16.00+ for a tear-off.",
        note: "Important Note: An on-site infrared inspection is performed first to verify that your existing roof is structurally eligible for coating."
      },
      {
        q: "2. What is the difference between Silicone and Acrylic roof coatings?",
        a: "Silicone will NOT break down under permanent ponding water, making it ideal for flat roofs. Acrylic offers high UV reflectivity but requires positive drainage."
      },
      {
        q: "3. Can a roof coating be applied over standing ponding water or slow-draining flat roofs?",
        a: "High-solids silicone roof coatings are specifically formulated to withstand continuous ponding water without losing adhesion or blistering."
      },
      {
        q: "4. Can roof coating and restoration be written off as a 100% tax deduction under IRS Section 179?",
        a: "Yes! A fluid-applied roof restoration is classified as a maintenance/repair expense, allowing property owners to deduct 100% of the total cost in year one."
      },
      {
        q: "5. How much can a reflective cool roof coating lower summer cooling bills in Wake County?",
        a: "A bright-white reflective roof coating reflects solar heat, lowering roof surface temperatures by up to 70°F and reducing cooling expenses by 15% to 30%."
      },
      {
        q: "6. Can you coat over a rusted metal roof?",
        a: "Yes! We grind away loose scale, treat rust with chemical converters and zinc-rich primers, replace fasteners, and apply an elastomeric barrier."
      },
      {
        q: "7. How long does a fluid-applied silicone or elastomeric roof coating last?",
        a: "Properly installed coatings last 10 to 20 years and can be re-coated at the end of the warranty period for another 10 to 15 years of leak-free life."
      },
      {
        q: "8. What roof types are eligible for commercial restoration in Cary?",
        a: "Aged TPO, EPDM black rubber, PVC membranes, standing seam and corrugated metal, and modified bitumen can all be successfully restored."
      }
    ]
  },
  {
    id: "skylight-window",
    slug: "skylight-roof-window-services-cary-nc-usa.html",
    title: "Skylight & Roof Window Services Cary NC USA",
    navTitle: "Skylight & Roof Window Services Cary NC USA",
    category: "Specialty Materials",
    shortDesc: "Certified Velux skylight installation, leak repairs, solar-powered venting roof windows, tubular sun tunnels, and waterproof flashing replacements in Cary, NC.",
    heroKicker: "Certified 10-Year No-Leak Warranty • 30% Federal Solar Tax Credit",
    heroTitle: "Skylight & Roof Window Services Cary NC USA",
    heroDesc: "Natural sunlight transforms living spaces, but aging or poorly flashed skylights are one of the most common leak sources in Cary homes. As certified 5-Star Velux installation specialists in Wake County, we install energy-efficient deck-mounted and curb-mounted 'No Leak' glass skylights and solar venting roof windows.",
    localImage: "/images/split-skylight-window.webp",
    splitImage: "/images/split-skylight-window.webp",
    imageAlt: "Skylight replacement in Cary NC showing clouded leaking plastic dome replaced with argon-filled low-E Velux skylight and curb flashing",
    beforeImage: "/images/split-skylight-window-before.webp",
    afterImage: "/images/split-skylight-window-after.webp",
    beforeAlt: "Yellowed leaking bubble skylight with cracked perimeter tar in Cary NC",
    beforeLabel: "Fogged Leaking Acrylic Bubble Skylight (Before)",
    afterLabel: "Velux Low-E Glass Deck-Mounted Skylight (After)",
    gpsCoords: "35.8080° N, 78.7920° W",
    elevation: "438 FT",
    solutions: [
      {
        title: "Skylight Installation",
        desc: "Cutting precision roof deck openings, framing structural double-headers, and installing energy-efficient Velux deck-mounted or curb-mounted architectural skylights.",
        iconSvg: "square"
      },
      {
        title: "Skylight Repair",
        desc: "Replacing cracked acrylic or glass panes, re-seating warped aluminum cladding, replacing decayed condensation gaskets, and testing mechanical solar chain drives.",
        iconSvg: "tool"
      },
      {
        title: "Skylight Replacement",
        desc: "Upgrading old leaky bubble domes or cloudy single-pane units to advanced Low-E3 argon-filled laminated Clean, Quiet & Safe glass that cuts heat gain and outside noise.",
        iconSvg: "home"
      },
      {
        title: "Skylight Leak Repair",
        desc: "Targeted diagnostics to pinpoint whether leaks stem from failed glass seals, perimeter corner welds, rotted wood curbs, or compromised shingle underlayment transitions.",
        iconSvg: "droplet"
      },
      {
        title: "Roof Window Installation",
        desc: "Installing top-hung and center-pivot operable roof windows that open wide to provide attic bonus rooms and lofts with panoramic outdoor views and emergency egress.",
        iconSvg: "layers"
      },
      {
        title: "Sun Tunnel Installation",
        desc: "Installing 10-inch and 14-inch rigid or flexible reflective tubular skylights that channel brilliant natural daylight into windowless hallways, closets, and baths.",
        iconSvg: "grid"
      }
    ],
    methodologyTitle: "Our 6-Step Certified Skylight & Roof Window Installation Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Interior Dust Containment & Structural Rafter Framing",
        desc: "We drape protective plastic sheeting below the opening. If rafter cuts are required, we frame structural double-headers above and below."
      },
      {
        step: "Step 2",
        title: "Curb Fabrication & 360° Ice/Water Shield Waterproofing",
        desc: "We wrap the curb with continuous high-temperature self-adhering Ice & Water Shield membrane extending 12 inches outward onto the roof plywood decking."
      },
      {
        step: "Step 3",
        title: "Precision Unit Placement & Thermal Alignment",
        desc: "The skylight is mounted using heavy-gauge corrosion-resistant brackets with verified square and level alignment."
      },
      {
        step: "Step 4",
        title: "Interwoven Step Flashing & Shingle Integration",
        desc: "Each individual aluminum step flashing piece is layered in sequence with overlapping shingle courses along the sides."
      },
      {
        step: "Step 5",
        title: "Top Head Saddle Flashing & Bottom Sill Drainage Apron",
        desc: "We install an engineered top saddle flashing that splits oncoming water around the skylight corners, paired with a custom bottom apron."
      },
      {
        step: "Step 6",
        title: "Water Spray Testing & Light Shaft Trim Completion",
        desc: "We conduct an intensive pressurized water spray test from all angles to guarantee watertight seal integrity before completing interior drywall."
      }
    ],
    faqs: [
      {
        q: "1. How much does skylight replacement or new skylight installation cost in Cary, NC?",
        a: "Replacing an existing skylight in Cary typically costs between $1,200 and $2,400 per unit including flashing. A brand-new skylight installation ranges from $2,800 to $4,500+.",
        note: "Important Note: We provide exact fixed-price quotes after inspecting your roof pitch and interior ceiling height."
      },
      {
        q: "2. Why do old skylights leak, and can a leaking skylight be resealed?",
        a: "Over 80% of skylight leaks are caused by degraded step flashing or aged rubber frame gaskets. Applying caulk or tar is only a temporary fix; unit replacement with a modern Velux 'No Leak' system is the permanent solution."
      },
      {
        q: "3. Does a solar-powered venting skylight qualify for the 30% Federal Solar Tax Credit?",
        a: "Yes! Solar-powered venting skylights and solar blinds qualify for a 30% federal tax credit on both product AND installation labor costs under the Inflation Reduction Act."
      },
      {
        q: "4. Should I replace my skylights when replacing my roof shingles?",
        a: "Yes, absolutely. Replacing skylights during a roof replacement eliminates duplicate labor costs and prevents older skylights from leaking on a brand-new roof."
      },
      {
        q: "5. What is the difference between a traditional skylight and a Sun Tunnel tubular skylight?",
        a: "A traditional skylight is a large rectangular window in the ceiling, while a Sun Tunnel reflects sunlight through a highly polished tube into a ceiling lens at roughly half the cost."
      },
      {
        q: "6. Do modern glass skylights make rooms too hot during Cary, NC summers?",
        a: "Modern Velux glass skylights feature Low-E3 double-pane glass filled with argon gas that blocks 95% of UV rays and reflects 75% of solar heat gain."
      },
      {
        q: "7. How do solar-powered venting skylights automatically close when it rains?",
        a: "They feature an integrated acoustic rain sensor mounted on the exterior frame that detects rain and automatically closes the window."
      },
      {
        q: "8. What is the difference between Deck-Mounted and Curb-Mounted skylights?",
        a: "Deck-mounted skylights nail directly to the roof deck for a low profile, while curb-mounted units sit on a raised wooden box, ideal for low-slope roofs."
      }
    ]
  },
  {
    id: "chimney-edge",
    slug: "chimney-roof-edge-services-cary-nc-usa.html",
    title: "Chimney & Roof Edge Services Cary NC USA",
    navTitle: "Chimney & Roof Edge Services Cary NC USA",
    category: "Drainage & Perimeters",
    shortDesc: "Expert chimney step and counter-flashing repair, stainless steel chimney caps, masonry tuckpointing, and rot-proof fascia/soffit carpentry across Cary, NC.",
    heroKicker: "Wake County Roof Perimeter & Critical Flashing Specialists",
    heroTitle: "Chimney & Roof Edge Services Cary NC USA",
    heroDesc: "Over 70% of elusive, damaging roof leaks in Cary homes don't happen in the middle of shingles they occur at critical roof junctions where brick chimneys penetrate the roof deck or along perimeter eaves, fascia boards, and soffits.",
    localImage: "/images/split-chimney-edge.webp",
    splitImage: "/images/split-chimney-edge.webp",
    imageAlt: "Chimney and roof edge repair in Cary NC showing deteriorating masonry restored with tuckpointing and copper step flashing",
    beforeImage: "/images/split-chimney-edge-before.webp",
    afterImage: "/images/split-chimney-edge-after.webp",
    beforeAlt: "Crumbling chimney brickwork and corroded drip edge in Cary NC home before masonry repair",
    beforeLabel: "Crumbling Mortar & Rusted Drip Edge (Before)",
    afterLabel: "Tuckpointed Brick with Copper Flashing (After)",
    gpsCoords: "35.7410° N, 78.7780° W",
    elevation: "445 FT",
    solutions: [
      {
        title: "Chimney Flashing Repair",
        desc: "Surgical removal of dried tar patches, grinding new reglet mortar joints, and installing interlocking aluminum or copper step flashing paired with counter-flashing.",
        iconSvg: "wrench"
      },
      {
        title: "Chimney Cap Installation",
        desc: "Mounting custom 100% stainless steel or solid copper chimney chase caps with spark arrestors, keeping driving Carolina rain, raccoons, bats, and sparks out.",
        iconSvg: "shield"
      },
      {
        title: "Chimney Waterproofing",
        desc: "Applying vapor-permeable, siloxane-based masonry water repellents that penetrate brick pores to stop wind-driven rain while letting trapped internal moisture escape.",
        iconSvg: "shield"
      },
      {
        title: "Fascia Board Replacement",
        desc: "Dismounting gutters to completely remove rotten, termite-damaged wood fascia and replacing it with rot-proof cellular PVC or aluminum-wrapped primed cedar.",
        iconSvg: "home"
      },
      {
        title: "Soffit Installation",
        desc: "Installing vented vinyl, aluminum, or fiber-cement soffit panels underneath roof overhangs to balance attic intake airflow and block pest intrusion.",
        iconSvg: "grid"
      },
      {
        title: "Drip Edge Installation",
        desc: "Installing code-mandated F-style and T-style corrosion-resistant metal drip edges along eaves and rake boards, directing water straight into gutters.",
        iconSvg: "shield"
      }
    ],
    methodologyTitle: "Our 6-Step Chimney & Roof Edge Waterproofing Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Perimeter Diagnostics & Rotted Wood Probing",
        desc: "We probe fascia boards and soffits behind gutters with awls to detect hidden soft rot, while inspecting chimney mortar lines and crown wash condition."
      },
      {
        step: "Step 2",
        title: "Masonry Reglet Joint Grinding & Mortar Tuckpointing",
        desc: "Using diamond-blade tuckpoint grinders, we cut a clean, consistent 1-inch deep horizontal reglet groove into the chimney mortar joint."
      },
      {
        step: "Step 3",
        title: "Two-Piece Step & Counter-Flashing Fabrication",
        desc: "We fabricate 26-gauge aluminum or solid copper L-shaped step flashing tins woven under each individual shingle course, overlapped by counter-flashing."
      },
      {
        step: "Step 4",
        title: "Lead Wedge Anchoring & Polyurethane Mortar Caulking",
        desc: "Counter-flashing is mechanically locked into the brick groove using hammered lead expansion wedges every 8 inches, then permanently sealed with non-sag polyurethane."
      },
      {
        step: "Step 5",
        title: "Fascia Deck Rebuilding & Rot-Proof PVC Carpentry",
        desc: "Rotten wooden fascia boards and soft rafter tails are excised down to sound framing. We sister treated framing lumber and install rot-proof cellular PVC boards."
      },
      {
        step: "Step 6",
        title: "Code-Compliant Drip Edge Placement & Water Runoff Audit",
        desc: "We install heavy-gauge metal drip edge with a kick-out flange directly into gutter lines, followed by a pressurized water hose audit."
      }
    ],
    faqs: [
      {
        q: "1. Why does my chimney leak when it rains in Cary, NC, even if my roof shingles are brand new?",
        a: "Over 75% of post-reroof chimney leaks occur because previous roofers used 'face-mounted' flashing smeared with tar instead of cutting a proper reglet groove into the brick mortar joints. A two-piece step-and-counter flashing system mechanically anchored into mortar is required.",
        note: "Important Note: We never use roofing tar as a substitute for true metal masonry counter-flashing."
      },
      {
        q: "2. What is the difference between Chimney Step Flashing and Counter-Flashing?",
        a: "Step flashing is installed under each shingle course moving with the roof deck; counter-flashing is embedded into brick mortar joints moving with the chimney."
      },
      {
        q: "3. What causes fascia board rot, and do gutters need to be taken down to replace fascia?",
        a: "Fascia rot is caused by missing drip edges or overflowing gutters spilling water behind the trough. Replacing fascia requires temporarily unmounting gutters."
      },
      {
        q: "4. What is a Chimney Cricket (Saddle) and is it required by North Carolina building code?",
        a: "A chimney cricket is a peaked structure built behind a chimney to divert water and debris. Under NC code (Section R903.2.2), it is legally required for chimneys wider than 30 inches."
      },
      {
        q: "5. Why is metal Drip Edge mandatory by building code on both eaves and rakes in Wake County?",
        a: "Eave drip edge prevents water from curling under shingles into fascia boards, and rake drip edge protects gable sheathing from wind-driven rain shear."
      },
      {
        q: "6. Can rotted wood fascia be replaced with cellular PVC that never rots?",
        a: "Yes! Cellular PVC is 100% impervious to moisture, will never rot or warp, and does not attract carpenter bees or termites."
      },
      {
        q: "7. Why do my soffits have mold or peeling paint?",
        a: "Peeling paint on soffits indicates trapped hot humid attic air condensing against unvented eaves. Continuous vented soffit panels solve this problem."
      },
      {
        q: "8. How much does chimney flashing repair and fascia replacement cost in Cary, NC?",
        a: "Full custom chimney re-flashing ranges from $750 to $1,800, while fascia board replacement costs between $22 and $38 per linear foot."
      }
    ]
  },
  {
    id: "structure-carpentry",
    slug: "roof-structure-carpentry-cary-nc-usa.html",
    title: "Roof Structure & Carpentry Services Cary NC USA",
    navTitle: "Roof Structure & Carpentry Services Cary NC USA",
    category: "Installation & Replacement",
    shortDesc: "Structural roof framing, truss repairs, sagging ridge beam leveling, rafter sistering, and rotten CDX plywood decking replacement in Cary, NC.",
    heroKicker: "Licensed Framing Carpenters & Structural Engineering Precision",
    heroTitle: "Roof Structure & Carpentry Services Cary NC USA",
    heroDesc: "A roof's exterior shingles, metal panels, or tiles are only as strong and watertight as the wooden framework beneath them. In Cary and Wake County, persistent humidity, hidden roof leaks, and fallen tree limbs frequently rot plywood decking, crack rafters, and cause visible roof dips.",
    localImage: "/images/split-structure-carpentry.webp",
    splitImage: "/images/split-structure-carpentry.webp",
    imageAlt: "Roof carpentry framing in Cary NC showing rotten collapsed roof rafters rebuilt with sistered Douglas fir and APA-rated CDX decking",
    beforeImage: "/images/split-structure-carpentry-before.webp",
    afterImage: "/images/split-structure-carpentry-after.webp",
    beforeAlt: "Severe wood rot on roof trusses and decayed plywood sheathing in Cary NC",
    beforeLabel: "Sagging Rotted Rafters & Spongy Plywood (Before)",
    afterLabel: "Engineered Sistered Rafters & CDX Plywood (After)",
    gpsCoords: "35.7680° N, 78.8410° W",
    elevation: "460 FT",
    solutions: [
      {
        title: "Roof Framing",
        desc: "Stick-framing custom hip, valley, and gable roof architectures using #2 Southern Yellow Pine lumber engineered to carry severe wind, rain, and live dead-loads.",
        iconSvg: "home"
      },
      {
        title: "Roof Truss Repair",
        desc: "Fixing cracked top or bottom truss chords, snapped webs, and displaced gang-nail connector plates using PE-engineered plywood gussets and structural lag screws.",
        iconSvg: "tool"
      },
      {
        title: "Roof Decking Replacement",
        desc: "Tearing out water-delaminated, spongy, or sagged sheathing down to rafters and installing premium 1/2-inch or 5/8-inch 4-ply exterior-rated CDX plywood.",
        iconSvg: "layers"
      },
      {
        title: "Rafter Repair & Sistering",
        desc: "Sistering cracked or split 2x6/2x8 rafters with full-length dimensionally matched framing lumber bolted with structural TimberLOK fasteners.",
        iconSvg: "tool"
      },
      {
        title: "Roof Structural Reinforcement",
        desc: "Installing collar ties, purlin braces, and rafter ties to prevent outward wall push and reinforce roof systems when upgrading to heavy slate or concrete tile.",
        iconSvg: "shield"
      },
      {
        title: "Roof Ridge Beam Repair",
        desc: "Hydraulically jacking sagging roof peak lines back to level laser-straight alignment, sistering ridge boards, and installing heavy vertical post supports.",
        iconSvg: "tool"
      }
    ],
    methodologyTitle: "Our 6-Step Structural Roof Carpentry Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Laser Level Audit & Attic Framing Diagnostic",
        desc: "We perform an extensive attic structural survey using precision optical laser levels, electronic wood moisture meters, and load-path audits to identify broken trusses."
      },
      {
        step: "Step 2",
        title: "Temporary Heavy-Duty Hydraulic Shoring & Jacking",
        desc: "Before cutting or sistering load-bearing timbers, our carpenters erect temporary shoring posts with hydraulic screw jacks to relieve dead load weight."
      },
      {
        step: "Step 3",
        title: "Framing Sistering & Simpson Strong-Tie Hardware",
        desc: "Damaged rafters are flanked with full-length dimensionally matched framing members, glued with polyurethane adhesives, and secured with Simpson hurricane anchors."
      },
      {
        step: "Step 4",
        title: "Rotten Wood Excavation & Truss Gusset Reinforcement",
        desc: "All moisture-softened wood is excised. Cracked engineered truss chords receive dual-sided exterior plywood or 14-gauge steel gusset plates engineered to code."
      },
      {
        step: "Step 5",
        title: "Exterior CDX Plywood Re-Sheathing & H-Clip Placement",
        desc: "Sub-decking is replaced with minimum 1/2-inch or 5/8-inch 4-ply CDX exterior plywood, secured with galvanized ring-shank nails every 6 inches and steel H-clips."
      },
      {
        step: "Step 6",
        title: "Deck Planarity & Deflection Quality Verification",
        desc: "We conduct a stringent straight-edge planarity test across all roof slopes and valleys to ensure an ultra-flat foundation before underlayment is rolled out."
      }
    ],
    faqs: [
      {
        q: "1. Why is my roof sagging in the middle or dipping along the ridge in Cary, NC?",
        a: "Roof sagging typically results from water-saturated plywood decking delaminating, undersized rafters spanning too wide, or severe dead-load stress bowing ridge beams.",
        note: "Important Note: Never nail new shingles over a sagging roof deck without leveling the structural rafters beneath."
      },
      {
        q: "2. What is the difference between CDX Plywood and OSB for roof decking?",
        a: "CDX plywood consists of cross-laminated sheets of real wood veneer bonded with exterior glue. It holds nails 30% tighter and dries quickly without swelling compared to OSB."
      },
      {
        q: "3. What is rafter sistering and when can a damaged rafter be repaired without tearing off the roof?",
        a: "Rafter sistering positions a new full-length piece of lumber alongside a damaged rafter, bonded with structural adhesive and bolts to transfer roof loads safely."
      },
      {
        q: "4. Can broken engineered roof trusses be repaired legally in North Carolina?",
        a: "Yes, but NC building codes require a certified engineering repair plan. Our team works with licensed NC structural engineers to install PE-stamped gusset plates."
      },
      {
        q: "5. How do roofers know if plywood decking is rotted before stripping off shingles?",
        a: "Experienced roofers detect rotted sheathing through spongy spots underfoot, attic underside moisture inspections, and optical surface dips."
      },
      {
        q: "6. What is the cost of replacing rotted plywood decking sheets during a roof replacement in Cary?",
        a: "Replacing rotted decking in Cary typically costs between $65 and $95 per 4ft x 8ft sheet of CDX exterior plywood, including tear-out, disposal, and ring-shank nailing."
      },
      {
        q: "7. What causes roof wood rot in Wake County attics even if shingles don't have holes?",
        a: "Poor attic ventilation is the #1 cause: warm rising indoor moisture condenses on the cold underside of decking, causing fungal dry rot over time."
      },
      {
        q: "8. How do structural reinforcements allow older Cary homes to support heavy tile or slate?",
        a: "Our carpenters sister rafters with engineered LVL timbers, install heavy horizontal collar ties to prevent wall spread, and add vertical purlin struts."
      }
    ]
  },
  {
    id: "commercial-industrial",
    slug: "commercial-industrial-roofing-cary-nc-usa.html",
    title: "Commercial & Industrial Roofing Services Cary NC USA",
    navTitle: "Commercial & Industrial Roofing Services Cary NC USA",
    category: "Commercial & Industrial",
    shortDesc: "Commercial TPO, PVC, EPDM, standing seam metal retrofits, industrial waterproofing, preventative maintenance, and large-scale roof replacements in Cary and the Research Triangle.",
    heroKicker: "Certified Master Commercial Contractors • Zero-Downtime Facility Solutions",
    heroTitle: "Commercial & Industrial Roofing Services Cary NC USA",
    heroDesc: "Commercial and industrial facilities throughout Cary, NC and the broader Research Triangle Park (RTP) region require specialized low-slope roofing systems engineered to withstand intense solar UV exposure, severe summer thunderstorms, and heavy mechanical HVAC traffic.",
    localImage: "/images/split-commercial-industrial.webp",
    splitImage: "/images/split-commercial-industrial.webp",
    imageAlt: "Commercial industrial roofing project in Cary NC showing failed asphalt roof replaced with robotic hot-air welded 60-mil white TPO membrane",
    beforeImage: "/images/split-commercial-industrial-before.webp",
    afterImage: "/images/split-commercial-industrial-after.webp",
    beforeAlt: "Commercial roof seam failure and water puddling on Cary NC industrial facility",
    beforeLabel: "Failing Built-Up Asphalt with Seam Separation (Before)",
    afterLabel: "Mechanically Fastened 60-Mil TPO with Welded Curbs (After)",
    gpsCoords: "35.7530° N, 78.7480° W",
    elevation: "385 FT",
    solutions: [
      {
        title: "Commercial Roof Installation",
        desc: "Turnkey specification and certified installation of advanced low-slope single-ply TPO, PVC, and EPDM roofing systems or architectural standing seam metal for new commercial constructions, corporate expansions, and medical facilities across Cary and RTP.",
        iconSvg: "building"
      },
      {
        title: "Commercial Roof Repair",
        desc: "Rapid-dispatch commercial technicians diagnosing and fixing punctures, failing HVAC curb flashings, open membrane lap seams, rusted metal panels, clogged internal drains, and storm wind uplifts with heavy-duty commercial heat-welded patches.",
        iconSvg: "tool"
      },
      {
        title: "Commercial Roof Replacement",
        desc: "Comprehensive tear-offs down to structural steel, precast concrete, or wood decking, upgrading thermal insulation with multi-layered staggered Polyiso (R-30+ code compliance) and installing high-tensile reinforced 60-mil or 80-mil roofing membranes.",
        iconSvg: "layers"
      },
      {
        title: "Industrial Roof Installation",
        desc: "Heavy-duty industrial roofing engineered to endure high-volume mechanical exhaust, chemical exposure, vibration stress, and extreme thermal movement over manufacturing plants, pharmaceutical labs, and production complexes.",
        iconSvg: "building"
      },
      {
        title: "Warehouse Roofing",
        desc: "Expansive, highly efficient low-slope roofing systems optimized for vast square-footage logistics hubs and distribution centers, incorporating solar-reflective cool roof technology to dramatically reduce internal cooling costs.",
        iconSvg: "home"
      },
      {
        title: "Office Building Roofing",
        desc: "Zero-downtime, low-noise reroofing and repairs for multi-story corporate headquarters, tech campuses, and medical offices along Weston Pkwy, Regency Park, and Highwoods, executing crane logistics during off-hours to eliminate tenant disruption.",
        iconSvg: "building"
      }
    ],
    methodologyTitle: "Our 6-Step Commercial & Industrial Roofing Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Infrared Thermal Drone Audit & Substrate Core Sampling",
        desc: "We deploy FLIR thermal radiometric drones at dusk to detect trapped sub-surface moisture within existing insulation boards. Precision core test cuts verify deck thickness."
      },
      {
        step: "Step 2",
        title: "OSHA Staging, Perimeter Safety Rigging & Crane Logistics",
        desc: "Prior to mobilizing materials, our safety officers erect OSHA-mandated perimeter warning line flags and anchor points. Crane hoisting is scheduled during off-peak hours."
      },
      {
        step: "Step 3",
        title: "Controlled Tear-Off & Substrate Deck Remediation",
        desc: "Aged wet insulation and saturated membranes are removed in strict daily phases, exposing the structural deck. Deteriorated steel decking is rust-treated or replaced."
      },
      {
        step: "Step 4",
        title: "Staggered Polyiso Thermal Insulation & Tapered Drainage Sloping",
        desc: "We mechanically fasten or foam-adhere two staggered layers of closed-cell polyiso board to achieve R-30+ thermal rating with 1/4\" per foot tapered slope crickets."
      },
      {
        step: "Step 5",
        title: "Automated Robotic Hot-Air Welding & Penetration Detailing",
        desc: "Premium 60-mil or 80-mil membranes are fused together using automated robotic hot-air welders at 1,000°F, creating a molecular seam weld stronger than the membrane itself."
      },
      {
        step: "Step 6",
        title: "Electronic Vector Leak Testing & Manufacturer NDL Warranty Certification",
        desc: "We perform an electronic vector leak test across 100% of the completed surface and coordinate field audits from Carlisle, GAF, or Elevate for 20-to-30 Year NDL warranties."
      }
    ],
    faqs: [
      {
        q: "1. Can you repair or replace our commercial roof without disrupting our business operations?",
        a: "Yes! Over 95% of our commercial and industrial roofing projects in Cary and RTP are completed while businesses operate at 100% capacity.",
        note: "Important Note: We establish dedicated perimeter debris chutes and interior containment barriers to ensure zero dust or vibration interferes with daily commercial operations."
      },
      {
        q: "2. Which flat commercial roofing membrane is best for Cary businesses: TPO, PVC, or EPDM?",
        a: "TPO is most popular and cost-effective for general offices and warehouses; PVC is mandatory for restaurants and food processing due to grease resistance; EPDM excels in hail resilience."
      },
      {
        q: "3. What is a No Dollar Limit (NDL) warranty, and why is it vital for commercial properties in Cary?",
        a: "An NDL warranty covers 100% of both material and labor costs to repair any roof leak caused by manufacturer defect or workmanship for 15 to 30 years without any financial cap."
      },
      {
        q: "4. What are the tax benefits of commercial roof restoration vs. complete replacement under IRS Section 179?",
        a: "Under Section 179, a fluid-applied roof restoration qualifies as a maintenance repair, allowing 100% of the cost to be deducted in year one rather than depreciated over 39 years."
      },
      {
        q: "5. How do you eliminate ponding water on existing flat commercial roofs in Cary?",
        a: "We resolve ponding water by installing engineered tapered polyisocyanurate insulation packages with a precision 1/4\" per foot slope toward drainage outlets and adding overflow scuppers."
      },
      {
        q: "6. How often should Cary commercial and warehouse properties schedule preventative roof maintenance?",
        a: "Commercial roofs should be professionally inspected at least twice per year: once in spring following winter freezes and once in autumn ahead of winter storms."
      },
      {
        q: "7. How do your emergency commercial crews handle sudden roof leaks during severe thunderstorms?",
        a: "We maintain 24/7 dedicated commercial emergency dispatch teams equipped with water-extraction equipment, temporary diverters, and commercial storm patches."
      },
      {
        q: "8. What commercial building codes and wind uplift ratings apply to commercial roofs in Cary, NC?",
        a: "Commercial roofing must comply with NC Commercial Building Code (IBC) and ASCE 7-16 wind design provisions, withstanding winds of 115+ mph and meeting R-30 insulation standards."
      }
    ]
  },
  {
    id: "additional",
    slug: "additional-roofing-services-cary-nc-usa.html",
    title: "Additional Roofing Services Cary NC USA",
    navTitle: "Additional Roofing Services Cary NC USA",
    category: "Specialty & Ancillary",
    shortDesc: "Specialized roof decks, green living roofs, solar panel roof prep & reinstallation, internal roof drainage, snow/ice dam mitigation, OSHA safety systems, and Cary building permit assistance.",
    heroKicker: "Specialty Rooftop Solutions • Engineering, Drainage, Solar & Safety Systems",
    heroTitle: "Additional Roofing Services Cary NC USA",
    heroDesc: "Beyond standard shingle and flat roof systems, modern residential residences, commercial facilities, and mixed-use developments throughout Cary, NC require specialized ancillary roofing solutions.",
    localImage: "/images/split-additional.webp",
    splitImage: "/images/split-additional.webp",
    imageAlt: "Soffit and fascia repair in Cary NC showing rotted wooden trim clad with custom heavy-duty white aluminum and vented soffit panels",
    beforeImage: "/images/split-additional-before.webp",
    afterImage: "/images/split-additional-after.webp",
    beforeAlt: "Rotted wooden fascia board falling off roof eaves in Cary NC neighborhood",
    beforeLabel: "Peeling Rotten Wood Fascia & Termite Gaps (Before)",
    afterLabel: "Aluminum-Wrapped Fascia & Vented Vinyl Soffit (After)",
    gpsCoords: "35.7820° N, 78.8010° W",
    elevation: "428 FT",
    solutions: [
      {
        title: "Roof Deck Installation",
        desc: "Turnkey engineering and architectural construction of rooftop terrace decks, composite rooftop patios, and pedestal paver systems over flat roofs in Cary.",
        iconSvg: "square"
      },
      {
        title: "Green Roof Installation",
        desc: "Complete installation of extensive and intensive vegetative green roof assemblies in Wake County, featuring root barrier membranes and sedum plantings.",
        iconSvg: "leaf"
      },
      {
        title: "Solar Panel Removal and Reinstallation",
        desc: "White-glove solar panel detachment, secure on-site crating, full roof tear-off and replacement, followed by precision re-mounting and micro-inverter reconnect.",
        iconSvg: "wrench"
      },
      {
        title: "Roof Snow Removal",
        desc: "Safe, manual roof snow evacuation using non-abrasive poly blades and thermal melting equipment to prevent catastrophic live-load roof collapses.",
        iconSvg: "cloud-rain"
      },
      {
        title: "Ice Dam Removal",
        desc: "Gentle low-pressure high-temperature steam ice dam eradication along eaves, gutters, and valleys, paired with diagnostic attic heat-loss bypass sealing.",
        iconSvg: "droplet"
      },
      {
        title: "Roof Safety System Installation",
        desc: "Turnkey installation and annual recertification of OSHA-compliant engineered horizontal lifeline systems, permanent stainless steel tie-off roof anchors, and perimeter railings.",
        iconSvg: "shield"
      }
    ],
    methodologyTitle: "Our 6-Step Engineered Additional Roofing Protocol",
    methodologySteps: [
      {
        step: "Step 1",
        title: "Structural Engineering Load Assessment & Feasibility Study",
        desc: "Our structural engineering partners evaluate existing ceiling joists, load-bearing walls, and roof trusses using dead-load and live-load calculations."
      },
      {
        step: "Step 2",
        title: "Town of Cary Permit Submission & HOA Architectural Approval",
        desc: "We assemble comprehensive architectural blueprints and structural calculations to file with the Town of Cary Inspections & Permits Department."
      },
      {
        step: "Step 3",
        title: "Substrate Fortification & High-Performance Waterproofing Underlayment",
        desc: "Prior to mounting any ancillary rooftop systems, our certified roofers reinforce decking with structural blocking and install heavy-duty anti-puncture membranes."
      },
      {
        step: "Step 4",
        title: "Precision Mechanical Anchoring, Solar Stanchions & Curbs",
        desc: "All structural penetrating elements including solar lag stanchions and OSHA anchor points are bolted directly into underlying structural framing with polyurea pitch pockets."
      },
      {
        step: "Step 5",
        title: "Drainage Dynamics, Sump Integration & Rainwater Diversion",
        desc: "We calibrate surface drainage slopes using tapered insulation crickets, installing heavy-gauge cast-iron roof drain bowls and secondary overflow scuppers."
      },
      {
        step: "Step 6",
        title: "Vector Moisture Integrity Testing & Municipal Building Final Inspection",
        desc: "We perform electronic high-voltage vector leak detection across 100% of the waterproof membrane surface before pavers or sedum trays are installed."
      }
    ],
    faqs: [
      {
        q: "1. What additional and specialty roofing services do you provide in Cary, NC?",
        a: "caryncroofing offers a full spectrum of advanced specialty and ancillary roofing solutions: rooftop deck patio construction, vegetative green roofs, solar panel detachment and reinstallation, winter ice dam steam removal, internal drains, OSHA safety anchors, and Cary permit assistance."
      },
      {
        q: "2. How does the solar panel removal and reinstallation (R&R) process work when replacing a roof?",
        a: "We document system electrical output, power down inverters, safely disconnect and crate panels, replace the roof with high-tensile underlayment, remount and torque panels to manufacturer specs, and recommission the array."
      },
      {
        q: "3. Do I need a building permit from the Town of Cary for rooftop decks or solar additions?",
        a: "Yes. Any project that involves structural modifications, load-bearing joist reinforcement, rooftop deck additions, or solar arrays requires a permit from the Town of Cary Inspections & Permits Department. We handle the entire permit process.",
        note: "Important Note: caryncroofing manages all municipal permit filings, structural calculations, and Town of Cary inspector walk-throughs on your behalf, guaranteeing 100% code compliance."
      },
      {
        q: "4. What structural considerations are required when installing a rooftop deck or green vegetative roof?",
        a: "A walkable rooftop deck requires a minimum 40-50 lbs/sq.ft. live load capacity, plus dead load for composite decking and furniture. Saturated green roofs add 15 to 30+ lbs/sq.ft. Our structural engineers verify rafter capacity."
      },
      {
        q: "5. How do you prevent and safely eliminate ice dams and heavy snow loads on Cary homes?",
        a: "We safely melt channels through ice dams using low-pressure high-temperature steam without damaging shingles, paired with attic air-sealing and self-regulating heat cable installations."
      },
      {
        q: "6. Why is internal roof drain installation and secondary overflow scupper sizing vital for flat roofs?",
        a: "Standing water weighs 5.2 lbs per square foot per inch. Sumped cast-iron drains and secondary emergency overflow scuppers prevent hazardous water weight accumulation during flash storms."
      },
      {
        q: "7. What rooftop safety systems and walkway pads does OSHA require for commercial properties in Cary?",
        a: "Under OSHA standard 29 CFR 1910.28, building owners must protect maintenance personnel working within 6 to 15 feet of an unprotected edge with tie-off anchors (5,000 lbs pull rating) or perimeter railings."
      },
      {
        q: "8. How do your roofing consultations and itemized cost estimations work before starting a project?",
        a: "Our consultations begin with an on-site physical and drone inspection, generating an itemized digital cost estimate detailing square footage, tear-off scope, decking repair allowances, and warranty tiers.",
        note: "Important Note: We provide free on-site consultations and itemized cost estimates for all Cary residential and commercial property owners with same-day digital delivery."
      }
    ]
  }
];

export const SEO_AEO_GUIDE = {
  niche: "Roofing Contractor",
  location: "Cary, NC (Wake County)",
  serviceAreaCount: 5,
  zipCodes: ["27511", "27512", "27513", "27518", "27519"],
  keyHubAddress: "580 New Waverly Pl Ste 216, Cary, NC 27518",
  mainKeywords: [
    "Best Roofing Services Cary NC",
    "Roofing contractors Cary NC",
    "Roof repair Cary NC",
    "Roof replacement Cary NC",
    "Roof installation Cary NC",
    "Emergency roof repair Cary NC",
    "Commercial roofing Cary NC",
    "Metal roofing Cary NC"
  ],
  aeoSnippets: [
    {
      query: "Looking for the best roofing services in Cary, NC?",
      directAnswer: "As premier local roofing contractors in Cary, NC, CaryRoofing provides certified roof repair, architectural shingle replacement, leak diagnostics, and emergency storm damage restoration across all Wake County zip codes (27511, 27512, 27513, 27518, 27519). Call us today at (919) 335-9543 for a free on-site roof inspection.",
      targetEntity: "Best Roofing Services Cary NC, Contact, Prompt Dispatch"
    },
    {
      query: "How much does a roof replacement cost in Cary, NC?",
      directAnswer: "A residential roof replacement in Cary, NC typically costs between $7,500 and $15,500 for a standard 2,000 to 2,800 square foot home using high-grade architectural shingles. Standing seam metal roofs range from $16,000 to $32,000 depending on pitch and warranty tiers.",
      targetEntity: "Cost range, square footage, Wake County local building code"
    },
    {
      query: "Who is the best local roofing contractor in Cary, NC?",
      directAnswer: "CaryRoofing is the trusted choice for Cary, NC homeowners, centered around 580 New Waverly Pl Ste 216, Cary, NC 27518. We provide certified roofers, HAAG-certified damage assessment, APA-rated decking replacement, and prompt Wake County service.",
      targetEntity: "Local Authority, Hub address, Zip coverage"
    },
    {
      query: "How do I know if my roof needs repair or complete replacement after a storm?",
      directAnswer: "If wind or hail damage is isolated to fewer than 20% of your shingles or confined to chimney flashing, a localized repair is recommended. However, if granule loss is widespread, multiple active ceiling leaks exist, or shingles are older than 18-20 years, a full architectural replacement offers superior long-term warranty protection.",
      targetEntity: "Storm damage diagnostics, hail impact evaluation, shingle age threshold"
    },
    {
      query: "Does homeowner insurance cover roof damage in Cary, North Carolina?",
      directAnswer: "Yes, sudden storm events including severe hail, fallen tree branches, and hurricane-force wind gusts are covered under standard North Carolina homeowner insurance policies. CaryRoofing assists homeowners with comprehensive photo documentation and insurance adjustor walkthroughs.",
      targetEntity: "Insurance claims, storm damage documentation, adjuster walk-through"
    },
    {
      query: "How long does a residential roof replacement take in Wake County?",
      directAnswer: "Most residential roof replacements in Cary, NC are completed in just 1 to 2 days under favorable weather conditions. Our certified crews handle complete tear-off, decking rot repair, synthetic underlayment installation, shingle nailing, and magnetic sweep cleanup within this timeframe.",
      targetEntity: "Roofing project timeline, single-day installation, site cleanup"
    },
    {
      query: "What roofing material is most durable for North Carolina weather?",
      directAnswer: "Architectural asphalt shingles rated for 130 MPH winds (such as GAF Timberline HDZ and Owens Corning Duration) and 24-gauge standing seam metal panels perform best against Wake County's intense summer humidity, thunderstorms, and sporadic winter ice.",
      targetEntity: "Material durability, wind rating, North Carolina climate resilience"
    },
    {
      query: "Do you offer emergency roof leak repair and tarping in Cary?",
      directAnswer: "Yes, we maintain an active local dispatch hotline (+1 919-335-9543) for emergency tarping, severe storm tree damage stabilization, and rapid leak mitigation across all Cary neighborhoods including Preston, Lochmere, Kildaire Farms, and Amberly.",
      targetEntity: "Emergency roof tarping, active leak mitigation, 24/7 hotline"
    }
  ]
};
