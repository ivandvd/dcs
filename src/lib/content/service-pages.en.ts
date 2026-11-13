import { contacts } from "@/lib/site";
import type { ServicePage } from "./service-pages";

/**
 * English service pages – the source of truth for structure, order, slugs, images, icons and hrefs.
 * service-pages.pl.ts mirrors this file; only human-readable text differs.
 */
export const servicePagesEn: ServicePage[] = [
  {
    slug: "cleaning",
    metaTitle: "Drone Cleaning",
    metaDescription:
      "Professional facade, roof and building surface cleaning using advanced drone technology. Safe, fast, efficient.",
    eyebrow: "Drone cleaning",
    title: "Revolutionary cleaning without scaffolding.",
    lede: "Professional facade, roof and building surface cleaning using advanced drone technology. Safe, fast, efficient.",
    image: "/images/heroes/cleaning.jpg",
    alt: "DCS drone rinsing a foamed facade",
    actions: [
      { label: "Get a Quote", href: "/contact", variant: "lime" },
      { label: "See the technology", href: "/technology", variant: "white" },
    ],
    features: {
      eyebrow: "Why drone cleaning?",
      title: "The benefits of drone cleaning for your building.",
      lede: "Everything a traditional access method does, without the scaffolding, the risk and the weeks of disruption.",
      items: [
        {
          icon: "zap",
          title: "Speed",
          body: "The drone reaches the work area in minutes. No scaffolding to erect, no lift to position, no rope team to rig: the crew starts washing the facade the same day it arrives.",
          detail: "Same-day start",
        },
        {
          icon: "award",
          title: "Guarantee",
          body: "We inspect every surface after the job and document it. If a section does not meet the agreed standard, we come back and redo it at no cost.",
          detail: "100% satisfaction guaranteed",
        },
        {
          icon: "sparkles",
          title: "Efficiency",
          body: "Purified water, regulated pressure and a remotely steered nozzle give an even, streak-free result on glass, composite panels and mineral facades alike.",
          detail: "Streak-free finish",
        },
        {
          icon: "users",
          title: "Expert team",
          body: "Specialists who have washed real facades, not just flown drones. They read the building, the wind and the surface before the first litre is sprayed.",
          detail: "Facade experience",
        },
        {
          icon: "badgeCheck",
          title: "Professionalism",
          body: "Certified operators, flight planning, geofenced zones and a documented procedure for every site, in line with EU regulations.",
          detail: "STS-01 / STS-02 operators",
        },
        {
          icon: "shield",
          title: "Safety",
          body: "Nobody works at height. The drone does the climbing while the team stays on the ground with full visual control of the whole process.",
          detail: "Zero work at height",
        },
      ],
    },
    list: {
      eyebrow: "Applications",
      title: "Drone cleaning for every type of facility.",
      lede: "From glass towers to heritage facades, the configuration adapts to the surface.",
      items: [
        { title: "Office buildings", body: "Cleaning high-rise glass and metal facades." },
        { title: "Shopping centres", body: "Facade care and large-surface maintenance." },
        { title: "Industrial facilities", body: "Preparation for inspections and maintenance." },
        { title: "Power plants", body: "Panel and high-voltage structure cleaning." },
        { title: "Historical buildings", body: "Gentle cleaning of heritage facades." },
        { title: "Infrastructure", body: "Bridges, viaducts and transport facilities." },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "Four steps to a perfectly clean building.",
      steps: [
        { title: "Site analysis", body: "Surface condition assessment and scope planning." },
        { title: "Preparation", body: "Drone setup and optimal parameter selection." },
        { title: "Cleaning", body: "Professional cleaning with millimetre precision." },
        { title: "Quality control", body: "Results inspection and documentation." },
      ],
    },
  },
  {
    slug: "disinfection",
    metaTitle: "Drone Disinfection",
    metaDescription:
      "Safe and effective disinfection of large spaces using advanced aerosol technology. Ideal for offices, hospitals, schools and factories.",
    eyebrow: "Drone disinfection",
    title: "Professional disinfection by drone.",
    lede: "Safe and effective disinfection of large spaces using advanced aerosol technology. Ideal for offices, hospitals, schools and factories.",
    image: "/images/heroes/disinfection-v2.jpg",
    alt: "DCS drone disinfecting the exterior of a hospital",
    actions: [
      { label: "Get a Quote", href: "/contact", variant: "lime" },
      { label: "All solutions", href: "/solutions", variant: "white" },
    ],
    features: {
      eyebrow: "Benefits",
      title: "The most effective method for health protection.",
      lede: "An airborne agent treats whole facilities evenly and quickly, with the operators outside the treated zone.",
      items: [
        {
          icon: "droplet",
          title: "Pathogen elimination",
          body: "The aerosol settles as a fine, even layer, so the disinfectant reaches surfaces manual wiping misses: fittings, edges, textured materials.",
          detail: "99.9% effectiveness",
        },
        {
          icon: "clock",
          title: "Speed",
          body: "Large halls, car parks and whole facades are treated in a single session instead of days of manual work.",
          detail: "Hours, not days",
        },
        {
          icon: "layers",
          title: "Penetration",
          body: "Because the agent is airborne it covers high ceilings, hard-to-reach corners and outdoor structures with the same consistency.",
          detail: "Every surface",
        },
        {
          icon: "award",
          title: "Certification",
          body: "Agents and procedures compliant with European standards. We document what was applied, where and when.",
          detail: "EU standards",
        },
        {
          icon: "shield",
          title: "Safety",
          body: "Operators stay outside the treated zone and the space is released only after the specified contact time has passed.",
          detail: "Controlled zone",
        },
        {
          icon: "target",
          title: "Accuracy",
          body: "Dosing, flow and coverage are monitored during the operation and recorded in the final report.",
          detail: "Documented coverage",
        },
      ],
    },
    list: {
      eyebrow: "Applications",
      title: "Disinfection for every sector.",
      items: [
        { title: "Offices & shopping centres", body: "Disinfection of public and common areas." },
        { title: "Hospitals & clinics", body: "Sterilisation of hospital surfaces." },
        { title: "Schools & universities", body: "Health protection for students and staff." },
        { title: "Hotels & restaurants", body: "Guest and staff safety." },
        { title: "Factories & warehouses", body: "Product and worker protection." },
        { title: "Transportation", body: "Vehicle and station disinfection." },
      ],
    },
  },
  {
    slug: "inspection",
    metaTitle: "Drone Inspection",
    metaDescription:
      "Advanced visual and thermal inspection for buildings, infrastructure and installations. Full documentation and expert report.",
    eyebrow: "Drone inspection",
    title: "Professional inspection by drone.",
    lede: "Advanced visual and thermal inspection for buildings, infrastructure and installations. Full documentation and an expert report.",
    image: "/images/heroes/inspection.jpg",
    alt: "DCS drone inspecting a facade next to a window",
    actions: [
      { label: "Book an inspection", href: "/contact", variant: "lime" },
      { label: "All solutions", href: "/solutions", variant: "white" },
    ],
    features: {
      eyebrow: "Benefits",
      title: "The most effective method for building diagnostics.",
      lede: "See the condition of a facade, roof or structure in hours, with evidence you can act on.",
      items: [
        {
          icon: "camera",
          title: "HD precision",
          body: "4K cameras and thermal imaging reveal micro-cracks, moisture, loose fixings and heat loss long before they turn into repairs.",
          detail: "4K + thermal imaging",
        },
        {
          icon: "clock",
          title: "Speed",
          body: "A complete facade or roof is surveyed in hours, without closing the building or renting access equipment.",
          detail: "Hours, not weeks",
        },
        {
          icon: "shield",
          title: "Safety",
          body: "No one climbs and no one hangs from a rope. The inspector works from the ground with a live video feed.",
          detail: "Ground-based survey",
        },
        {
          icon: "fileText",
          title: "Documentation",
          body: "You receive photos, inspection video and a structured report you can hand to insurers, boards or contractors.",
          detail: "Report + video",
        },
        {
          icon: "chart",
          title: "Analysis",
          body: "Our specialists assess the technical condition and prioritise the findings, so you know what to fix first.",
          detail: "Expert assessment",
        },
        {
          icon: "award",
          title: "Certification",
          body: "Flights and data handling compliant with European regulations.",
          detail: "EU compliant",
        },
      ],
    },
    list: {
      eyebrow: "Inspection types",
      title: "Comprehensive surveillance for every facility.",
      items: [
        { title: "Facade inspection", body: "Examining facade condition and micro-cracks." },
        { title: "Roof survey", body: "Roof covering and structure inspection." },
        { title: "Construction monitoring", body: "Monitoring construction progress." },
        { title: "Power lines", body: "Cable and pole inspection." },
        { title: "Bridges & viaducts", body: "Assessment of connections and damage." },
        { title: "Solar panels", body: "Efficiency and damage inspection." },
      ],
    },
  },
  {
    slug: "training",
    metaTitle: "Drone Training Courses STS-01 / STS-02",
    metaDescription:
      "Professional preparation for drone operations in standard scenarios STS-01 and STS-02, run by certified pilots with operational experience.",
    eyebrow: "Drone training",
    title: "Training courses STS-01 / STS-02.",
    lede: "Professional preparation for drone operations in standard scenarios. Gain the competencies needed for conscious and responsible use of drones in professional work.",
    image: "/images/heroes/training.jpg",
    alt: "DCS drone pilot preparing a drone for flight",
    actions: [
      { label: "Enrol in training", href: "/contact", variant: "lime" },
      { label: "View course offerings", href: "#programs", variant: "white" },
    ],
    intro: {
      eyebrow: "Our approach",
      title: "Developing drone pilot competencies.",
      body: [
        "At DCS Drone Cleaning Solutions we develop not only the AeroCleaning technology but also the competencies of the pilots who want to professionally and legally conduct drone operations in business, industrial and service environments.",
      ],
    },
    features: {
      eyebrow: "Why train with DCS",
      title: "Experience from the field, not just the classroom.",
      items: [
        {
          icon: "graduation",
          title: "Experienced instructors",
          body: "Lessons come from certified pilots with years of operational flying, including commercial cleaning and inspection missions.",
          detail: "Operational pilots",
        },
        {
          icon: "shield",
          title: "Safety first",
          body: "Safety procedures, process control and regulatory compliance are built into every module, not added at the end.",
          detail: "Procedures first",
        },
        {
          icon: "compass",
          title: "Practical approach",
          body: "From theory, through practical flights, to field implementation: you leave able to run a real operation.",
          detail: "Theory to field",
        },
        {
          icon: "book",
          title: "Up-to-date knowledge",
          body: "Materials aligned with the latest EU regulations and industry best practice, updated as the rules change.",
          detail: "Current EU rules",
        },
        {
          icon: "award",
          title: "Recognised certificates",
          body: "Certificates authorising legal drone operations throughout the European Union.",
          detail: "Valid EU-wide",
        },
        {
          icon: "lifebuoy",
          title: "Post-training support",
          body: "Consultations and support after the course, when the first real missions raise real questions.",
          detail: "After-course support",
        },
      ],
    },
    programs: {
      eyebrow: "Our training programs",
      title: "Two scenarios, one professional standard.",
      lede: "We offer comprehensive courses preparing for operations in STS-01 and STS-02 scenarios.",
      items: [
        {
          code: "STS-01",
          name: "Visual Line of Sight",
          subtitle: "VLOS",
          body: "Training for drone operations within visual line of sight. Ideal for beginner pilots and those starting their journey in professional drone operations.",
          program: [
            "VLOS flight theory",
            "EU regulations and compliance",
            "Mission planning",
            "Safety procedures",
            "Practical flight exercises",
            "Theoretical and practical exam",
          ],
        },
        {
          code: "STS-02",
          name: "Beyond Visual Line of Sight",
          subtitle: "BVLOS",
          body: "Advanced training for operators seeking to perform flights beyond visual line of sight. The knowledge and skills required for complex industrial and commercial operations.",
          program: [
            "BVLOS flight theory",
            "Advanced mission planning",
            "Risk management systems",
            "Air traffic communication",
            "Emergency procedures",
            "BVLOS certification",
          ],
        },
      ],
    },
    audience: {
      eyebrow: "Who it is for",
      title: "Who are our courses for?",
      body: "Our courses are designed for individuals, companies and teams who want to enter advanced drone applications: from commercial services, through technical operations, to implementing modern processes using unmanned aerial vehicles.",
      items: [
        "Individuals starting a career in the drone industry",
        "Companies implementing drone technologies",
        "Technical and operational teams",
        "Construction and industrial specialists",
        "Photographers and video operators",
        "Inspectors and surveyors",
      ],
      quote:
        "DCS Drone is a practical approach to drone technology: from training, through operations, to implementing solutions in the field.",
    },
    closing: {
      eyebrow: "Ready to start training?",
      title: "Talk to our examiner.",
      lede: "Detailed information about courses, schedules and pricing. Call or send an SMS and we will respond as quickly as possible.",
      cta: { label: "Send a message online", href: "/contact" },
      person: contacts.examiner,
    },
  },
  {
    slug: "franchise",
    metaTitle: "Franchise Program",
    metaDescription:
      "Join the DCS franchise network offering innovative drone cleaning services. Equipment, training and ongoing support to launch in your market.",
    eyebrow: "Franchise program",
    title: "Become a DCS partner.",
    lede: "Join the advanced franchise network offering innovative drone cleaning services. Together we develop the future of the industry.",
    image: "/images/heroes/franchise.jpg",
    alt: "DCS drone presented at a trade fair stand",
    actions: [
      { label: "Contact the franchise team", href: "/contact", variant: "lime" },
      { label: "View systems", href: "/catalog", variant: "white" },
    ],
    features: {
      eyebrow: "Why DCS franchise?",
      title: "A proven business model with growth potential.",
      lede: "You bring the market. We bring the system, the training and the people who have done it before.",
      items: [
        {
          icon: "trendingUp",
          title: "Growth market",
          body: "Building owners are moving away from scaffolding and rope access. Drone cleaning is a young, dynamically developing category.",
          detail: "Growing demand",
        },
        {
          icon: "award",
          title: "Certification",
          body: "Full training and operational support: your team is certified and ready before the first paid job.",
          detail: "Certified from day one",
        },
        {
          icon: "coins",
          title: "Profitability",
          body: "Low logistics overhead and short project times translate into high margins per job.",
          detail: "High margins",
        },
        {
          icon: "lifebuoy",
          title: "Complete support",
          body: "Marketing, equipment and training in one package, with a partner that has launched the service before.",
          detail: "Marketing, equipment, training",
        },
        {
          icon: "users",
          title: "Team",
          body: "Access to an experienced team of operators and engineers for consultations and demanding projects.",
          detail: "Experienced team",
        },
        {
          icon: "badgeCheck",
          title: "Proven model",
          body: "A business model tested in real operations, with processes you can replicate in your own market.",
          detail: "Field-tested",
        },
      ],
    },
    requirements: {
      eyebrow: "Requirements",
      title: "What you need to start a franchise.",
      lede: "The conditions needed to launch DCS drone cleaning in your market.",
      items: [
        { title: "Initial capital", body: "€50,000 – €100,000 for equipment and operations" },
        { title: "Training", body: "1 day of operational training" },
        { title: "Support", body: "24/7 technical support from DCS" },
        { title: "Certification", body: "Obtaining a drone licence in your country" },
        { title: "References", body: "Business references from third parties" },
      ],
    },
  },
];
