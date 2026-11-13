/**
 * English catalog text – the client's own English copy with light grammar fixes (incoming/scrape/catalog*.txt|html).
 * Shared data (slugs, SKUs, images, models) and the getters are in catalog.ts.
 */
import type { CatalogText, SpecGroup } from "./catalog";

const HOSE_REEL = "With a valve and pressure gauge, plus 60 m of ultra-lightweight hose";
const NOZZLES = '1/4" 25° 030–045, 1/4" 40° 030';

const X1_SHORT =
  "As standard, the system is based on the latest DJI Matrice 400 / M350 RTK platform, ensuring stable and safe operation at working heights of up to 120 metres.";

const X1_DESCRIPTION = [
  "Drone platform: as standard, the system is based on the latest platform – DJI Matrice 400 / M350 RTK. This solution ensures stable and safe operation at working heights of up to 120 metres.",
  "DCS is also developing the next generation of AeroCleaning systems, including autonomous cleaning drones designed to perform tasks without operator involvement.",
  "DCS Mobile Operational Module: the professional service module has been designed for maximum efficiency and ease of use. The operator can control key system functions directly from the drone controller, significantly streamlining on-site operations.",
  "Covered by a 24-month warranty.",
  "DCS Drone Cleaning Solutions – we are setting the AeroCleaning standard for the modern façade-cleaning industry.",
];

const X1_FEATURES = {
  title: "System features",
  items: [
    "Automatic dosing and mixing of cleaning agents",
    "Active foam application",
    "Water heating up to 120°C, controlled via a touchscreen",
    "Real-time monitoring of operating parameters",
    "Water demineralization system",
    "Integrated service drawer for the drone and accessories",
    "Automatic reel for the 220-bar working hose",
    "Full integration with the DJI ecosystem through our application",
  ],
};

const X1_WHY_ITEMS = [
  "Ready-to-use business model",
  "Complete operational system",
  "Reduced costs of working at height",
  "High job execution efficiency",
  "Integration with the latest DJI platform",
  "Rapid business scalability",
];

const ROTOR_GUARD_SHORT =
  "The construction combines carbon fibre with PA components, delivering low weight, high rigidity and durability for everyday operation.";

const MOSTFOAM_DESCRIPTION = [
  "DCS MOSTFOAM ZERO ONE KILLER is a high-performance, low-foaming alkaline concentrate designed for professional cleaning of surfaces resistant to alkaline agents. It has been developed to remove stubborn dirt from roof coverings, fences, and other durable exterior surfaces.",
  "Its pH 14 formula supports the effective removal of operational dirt, atmospheric deposits, and organic contamination. The low-foaming formulation makes it suitable for use with cleaning equipment and professional application systems.",
  "Use the product in accordance with the instructions on the label and the Safety Data Sheet. The product is corrosive – appropriate personal protective equipment must be used.",
];

const mostfoamFeatures = (volume: string) => ({
  title: "Key features",
  items: [
    `${volume} concentrate for professional use`,
    "Low-foaming alkaline formula",
    "Effective against stubborn soiling",
    "Intended for surfaces resistant to alkaline agents",
    "Recommended working dilution: 1–3%",
    "Polish-made product",
  ],
});

const mostfoamSpecs = (volume: string): SpecGroup[] => [
  {
    title: "Product data",
    rows: [
      { label: "Volume", value: volume },
      { label: "Formula", value: "Low-foaming alkaline concentrate" },
      { label: "pH", value: "14" },
      { label: "Recommended working dilution", value: "1–3%" },
      { label: "Origin", value: "Polish-made product" },
    ],
  },
];

const COURSES_FOR =
  "Our courses are designed for individuals, companies, and teams looking to enter advanced drone applications – from delivering commercial services and technical operations to implementing modern processes using unmanned aircraft systems.";

export const catalogEn: CatalogText = {
  categories: {
    sets: "Sets / Stations",
    drones: "Drones",
    accessories: "Accessories",
    chemicals: "Chemicals",
    training: "Training",
  },

  tiers: {
    mini: {
      alt: "DCS X1 MINI AeroCleaning lance",
      rows: [
        { label: "Water tank", value: false },
        { label: "Control via flight controller", value: true },
        { label: "Hose reel", value: HOSE_REEL },
        { label: "Demineralization", value: false },
      ],
    },
    pro: {
      badge: "Most popular",
      alt: "DCS X1 PRO mobile operational module",
      rows: [
        { label: "Water tank", value: "450 L" },
        { label: "Control via flight controller", value: true },
        { label: "Hose reel", value: HOSE_REEL },
        { label: "Demineralization", value: true },
      ],
    },
    maxi: {
      alt: "DCS X1 MAXI mobile pressure station",
      rows: [
        { label: "Water tank", value: "300 L" },
        { label: "Control via flight controller", value: true },
        { label: "Hose reel", value: HOSE_REEL },
        { label: "Demineralization", value: false },
      ],
    },
  },

  products: {
    // ---------------------------------------------------------------- Sets / Stations
    "dcs-x1-mini": {
      name: "DCS X1 MINI",
      short:
        "The AeroCleaning system is equipped with a movable cleaning lance fully compatible with the DJI Matrice 350 RTK (M350 RTK) and DJI Matrice 400 (M400) platforms.",
      description: [
        "The AeroCleaning system is equipped with a movable cleaning lance fully compatible with the DJI Matrice 350 RTK (M350 RTK) and DJI Matrice 400 (M400) platforms. The solution is fully integrated with the DJI controller, enabling the operator to control the lance functions and the cleaning system directly from the remote-control interface.",
        "The system is compatible with high-pressure washers delivering a water flow rate of at least 6 L/min, enabling effective cleaning operations while maintaining optimal operating parameters.",
      ],
      highlights: ["Facade cleaning", "Building facades", "Solar panels", "Surface disinfection"],
      specGroups: [
        {
          title: "Critical specs",
          critical: true,
          rows: [
            { label: "Glass surfaces", value: "to 3500 m² daily" },
            { label: "Mineral facades", value: "to 3500 m² daily" },
            { label: "Reel", value: HOSE_REEL },
            { label: "Foam nozzle", value: "Yes" },
            { label: "Control via flight controller", value: "Yes" },
            { label: "Complete set of working nozzles", value: NOZZLES },
          ],
        },
        {
          title: "Performance & coverage",
          rows: [
            { label: "Glass surfaces", value: "to 3500 m² daily" },
            { label: "Mineral facades", value: "to 3500 m² daily" },
          ],
        },
        {
          title: "Spray system",
          rows: [
            { label: "Reel", value: HOSE_REEL },
            { label: "Foam nozzle", value: "Yes" },
            { label: "Complete set of working nozzles", value: NOZZLES },
            { label: "Ceramic rotary wide-angle nozzle", value: "Yes" },
            { label: "Carbon-fiber lance with a movable head", value: "Yes, ±50°" },
          ],
        },
        {
          title: "Drone & control",
          rows: [
            { label: "Control via flight controller", value: "Yes" },
            { label: "Front rotor guards for the drone", value: "Yes" },
          ],
        },
      ],
      alt: "DCS X1 MINI AeroCleaning lance with a movable spray head",
    },
    "dcs-x1-pro": {
      name: "DCS X1 PRO",
      short: X1_SHORT,
      description: X1_DESCRIPTION,
      lists: [X1_FEATURES, { title: "Why DCS X1 PRO?", items: X1_WHY_ITEMS }],
      highlights: [
        "Building facades",
        "Facade cleaning",
        "Solar panels",
        "Surface disinfection",
        "Inspection & surveys",
        "Operator training",
      ],
      specGroups: [
        {
          title: "Critical specs",
          critical: true,
          rows: [
            { label: "Glass surfaces", value: "to 3500 m² daily" },
            { label: "Mineral facades", value: "to 1000 m² daily" },
            { label: "Operating pressure", value: "30–220 bar" },
            { label: "Pump power", value: "4 kW" },
            { label: "Water tank", value: "450 L" },
            { label: "DJI Matrice", value: "400" },
          ],
        },
        {
          title: "Performance & coverage",
          rows: [
            { label: "Glass surfaces", value: "to 3500 m² daily" },
            { label: "Mineral facades", value: "to 1000 m² daily" },
          ],
        },
        {
          title: "Spray system",
          rows: [
            { label: "Reel", value: HOSE_REEL },
            { label: "Water tank", value: "450 L" },
            { label: "Foam nozzle", value: "Yes" },
            { label: "Detergent tank", value: "60 L" },
            { label: "Operating pressure", value: "30–220 bar" },
            { label: "Water heating up to", value: "120°C" },
            { label: "Water level control", value: "Yes" },
            { label: "Hose reels with hoses", value: "20 m and 60 m" },
            { label: "Complete set of working nozzles", value: NOZZLES },
            { label: "Ceramic rotary wide-angle nozzle", value: "Yes" },
            { label: "Carbon-fiber lance with a movable head", value: "±50°" },
            { label: "Automatic mixing of water and detergent", value: "Yes" },
          ],
        },
        {
          title: "Power & pump",
          rows: [
            { label: "Pump power", value: "4 kW" },
            { label: "Power supply", value: "400 V" },
            { label: "Ceramic pistons for extended service life", value: "Yes" },
          ],
        },
        {
          title: "Drone & control",
          rows: [
            { label: "Battery", value: "2 x TB100" },
            { label: "DJI Matrice", value: "400" },
            { label: "DJI Care package", value: "Yes" },
            { label: "Charging station", value: "BS100" },
            { label: "Control via flight controller", value: "Yes" },
            { label: "Front rotor guards for the drone", value: "M350 RTK / Matrice 400" },
            { label: "Flight controller (remote controller)", value: "RC Plus 2 Enterprise" },
            { label: "Thermal protection safeguards the system", value: "Yes" },
          ],
        },
        {
          title: "Operational equipment",
          rows: [
            { label: "Service drawer", value: "Yes" },
            { label: "Water demineralization capacity", value: "10 000 L" },
            { label: "Suitable for continuous operation", value: "Yes" },
            { label: "Filtration and demineralization system", value: "Yes" },
          ],
        },
        {
          title: "Deployment requirements",
          rows: [
            { label: "Noise level", value: "78 dB" },
            { label: "Average cost of cleaning agents", value: "0.17 EUR/m²" },
            { label: "Demineralization – cost of a new resin cartridge", value: "~200 EUR" },
          ],
        },
      ],
      alt: "DCS X1 PRO mobile operational module with hose reel",
    },
    "dcs-x1-maxi": {
      name: "DCS X1 MAXI",
      short: X1_SHORT,
      description: X1_DESCRIPTION,
      lists: [X1_FEATURES, { title: "Why DCS X1?", items: X1_WHY_ITEMS }],
      highlights: ["Facade cleaning", "Building facades", "Solar panels", "Surface disinfection", "Operator training"],
      specGroups: [
        {
          title: "Critical specs",
          critical: true,
          rows: [
            { label: "Glass surfaces", value: "to 3500 m² daily" },
            { label: "Mineral facades", value: "to 1000 m² daily" },
            { label: "Water tank", value: "300 L" },
            { label: "DJI Matrice", value: "400" },
            { label: "Power supply", value: "400 V" },
            { label: "Reel", value: HOSE_REEL },
          ],
        },
        {
          title: "Performance & coverage",
          rows: [
            { label: "Glass surfaces", value: "to 3500 m² daily" },
            { label: "Mineral facades", value: "to 1000 m² daily" },
          ],
        },
        {
          title: "Spray system",
          rows: [
            { label: "Reel", value: HOSE_REEL },
            { label: "Water tank", value: "300 L" },
            { label: "Foam nozzle", value: "Yes" },
            { label: "Detergent tank", value: "60 L" },
            { label: "Water heating up to", value: "120°C" },
            { label: "Hose reels with hoses", value: "20 m and 60 m" },
            { label: "Complete set of working nozzles", value: NOZZLES },
            { label: "Ceramic rotary wide-angle nozzle", value: "Yes" },
            { label: "Carbon-fiber lance with a movable head", value: "±50°" },
            { label: "Automatic mixing of water and detergent", value: "Yes" },
          ],
        },
        {
          title: "Power & pump",
          rows: [{ label: "Power supply", value: "400 V" }],
        },
        {
          title: "Drone & control",
          rows: [
            { label: "Battery", value: "2 x TB100" },
            { label: "DJI Matrice", value: "400" },
            { label: "DJI Care package", value: "Yes" },
            { label: "Charging station", value: "BS100" },
            { label: "Control via flight controller", value: "Yes" },
            { label: "Front rotor guards for the drone", value: "M350 RTK / Matrice 400" },
            { label: "Flight controller (remote controller)", value: "RC Plus 2 Enterprise" },
          ],
        },
        {
          title: "Deployment requirements",
          rows: [{ label: "Average cost of cleaning agents", value: "0.17 EUR/m²" }],
        },
      ],
      alt: "DCS X1 MAXI mobile pressure station",
    },

    // ---------------------------------------------------------------- Drones
    "dji-matrice-350-rtk": {
      name: "DJI Matrice 350 RTK",
      short:
        "An advanced enterprise drone platform designed for demanding professional operations: up to 55 minutes of flight time, RTK positioning and six-directional obstacle sensing.",
      description: [
        "DJI Matrice 350 RTK is an advanced enterprise drone platform designed for demanding professional operations. It offers up to 55 minutes of flight time, RTK positioning, DJI O3 Enterprise transmission, and a six-directional obstacle sensing system to support safe and reliable missions.",
        "Its IP55-rated construction enables operation in demanding field conditions. The Matrice 350 RTK supports a wide range of cameras, sensors, and specialised payloads, making it well suited to inspections, surveying, mapping, public-safety missions, and industrial operations.",
      ],
      specGroups: [],
      alt: "DJI Matrice 350 RTK enterprise drone",
    },
    "dji-matrice-400": {
      name: "DJI Matrice 400",
      short:
        "DJI's flagship enterprise drone platform, engineered for the most demanding professional operations: up to 59 minutes of flight time, a payload capacity of up to 6 kg and an IP55-rated design.",
      description: [
        "DJI Matrice 400 is DJI's flagship enterprise drone platform, engineered for the most demanding professional operations. It offers up to 59 minutes of flight time, a payload capacity of up to 6 kg, and an IP55-rated design for reliable operation in challenging environments.",
        "Its advanced obstacle-sensing system, combining rotating LiDAR and mmWave radar, enhances mission safety. The platform supports DJI O4 Enterprise Enhanced video transmission and a broad range of cameras, sensors, and specialised payloads, making it well suited to inspections, mapping, public-safety missions, construction, and industrial operations.",
      ],
      highlights: [
        "Inspection & surveys",
        "Operator training",
        "Surface disinfection",
        "Solar panels",
        "Building facades",
        "Facade cleaning",
      ],
      specGroups: [
        {
          title: "Critical specs",
          critical: true,
          rows: [
            { label: "Type", value: "Professional drone" },
            { label: "Brand", value: "DJI" },
            { label: "Model", value: "Matrice 400" },
          ],
        },
      ],
      alt: "DJI Matrice 400 enterprise drone",
    },

    // ---------------------------------------------------------------- Accessories
    "front-rotor-guards-dji-matrice-350-rtk": {
      name: "Front Rotor Guards for DJI Matrice 350 RTK",
      short: ROTOR_GUARD_SHORT,
      description: [
        "We offer two front rotor guard models designed for DJI Matrice 350 RTK drones. The construction combines carbon fibre with PA components, delivering low weight, high rigidity, and durability for everyday operation.",
        "The guards protect the front rotors while also acting as a bumper, taking the first contact with an obstacle. This helps reduce the risk of damage to propellers, arms, and attached equipment when operating in demanding environments, manoeuvring in confined spaces, or during transport.",
        "Lightweight and rigid, the guard is tailored to the DJI 350 platform and protects the front rotors without placing unnecessary load on the aircraft. Maximum span: 600 mm.",
        "A practical solution for operators, service providers, and companies seeking to improve the operational safety of DJI Matrice 350 RTK and DJI Matrice 400 drones.",
      ],
      specGroups: [
        {
          title: "Critical specs",
          critical: true,
          rows: [
            { label: "Material", value: "Carbon + PA + PPGB" },
            { label: "Dedicated to", value: "DJI Matrice 350 RTK" },
            { label: "Fender function", value: "Yes" },
            { label: "Security for front rotors", value: "Yes" },
          ],
        },
      ],
      alt: "DCS carbon-fibre front rotor guards for DJI Matrice 350 RTK",
    },
    "front-rotor-guards-dji-matrice-400": {
      name: "Front Rotor Guards for DJI Matrice 400",
      short: ROTOR_GUARD_SHORT,
      description: [
        "We offer two front rotor guard models designed for DJI Matrice 350 RTK and DJI Matrice 400 drones. The construction combines carbon fibre with PA components, delivering low weight, high rigidity, and durability for everyday operation.",
        "The guards protect the front rotors while also acting as a bumper, taking the first contact with an obstacle. This helps reduce the risk of damage to propellers, arms, and attached equipment when operating in demanding environments, manoeuvring in confined spaces, or during transport.",
        "A practical solution for operators, service providers, and companies seeking to improve the operational safety of DJI Matrice 350 RTK and DJI Matrice 400 drones.",
      ],
      specGroups: [
        {
          title: "Critical specs",
          critical: true,
          rows: [
            { label: "Material", value: "Carbon + PA + PPGB" },
            { label: "Dedicated to", value: "DJI Matrice 400" },
            { label: "Fender function", value: "Yes" },
            { label: "Security for front rotors", value: "Yes" },
          ],
        },
      ],
      alt: "DCS carbon-fibre front rotor guards for DJI Matrice 400",
    },
    "battery-tb65-dji-matrice-350-rtk": {
      name: "Battery TB65 for DJI Matrice 350 RTK",
      short: "High-performance lithium-polymer battery.",
      description: [],
      specGroups: [],
      alt: "DJI TB65 intelligent flight battery",
    },
    "battery-tb100-dji-matrice-400": {
      name: "Battery Pro TB100 for DJI Matrice 400",
      short: "High-performance lithium-polymer battery providing up to 50 minutes of flight time.",
      description: [],
      specGroups: [],
      alt: "DJI TB100 intelligent flight battery",
    },
    "tank-450l": {
      name: "450 L Tank",
      short: "The 450 L tank provides a reliable on-board water supply for professional AeroCleaning operations.",
      description: [
        "The 450 L tank provides a reliable on-board water supply for professional AeroCleaning operations. Its durable, compact design supports efficient storage and convenient access to working water during façade, industrial, and photovoltaic cleaning projects.",
        "Its 450-litre capacity reduces technical downtime associated with refilling, supporting uninterrupted operation and higher efficiency during on-site projects. The tank is well suited as part of a mobile operational module, service vehicle equipment, or a support station for drone-based cleaning systems.",
        "Its robust construction ensures stability during transport and operation, while the straightforward design allows easy integration with hydraulic installations, pumps, filtration systems, and chemical dosing equipment. The tank has been developed to provide convenient handling, quick access to the stored medium, and easy cleaning and maintenance.",
        "This is a practical solution for companies delivering professional AeroCleaning services that require a reliable supply of working media and efficiently organised technical infrastructure.",
      ],
      specGroups: [],
      alt: "450 L water tank",
    },
    "tank-60l": {
      name: "60 L Tank",
      short:
        "The 60 L tank is a practical and versatile solution designed for applications where reliable storage of liquids and ease of use are essential.",
      description: [
        "The 60 L tank is a practical and versatile solution designed for applications where reliable storage of liquids and ease of use are essential. Its compact design facilitates installation and space organisation, while its 60-litre capacity makes it well suited to both domestic and technical applications.",
        "The product has been designed with functionality, durability, and safe operation in mind. Its carefully engineered form supports stable operation and convenient handling, while its straightforward construction makes the tank easy to keep clean. It is a practical choice wherever a robust, high-capacity tank with versatile applications is required.",
        "Thanks to its versatility, the 60 L tank can be a convenient addition to equipment used across a wide range of applications. It is an ideal solution for users looking for a simple, functional product with an appropriate capacity for everyday use.",
      ],
      specGroups: [],
      alt: "60 L tank",
    },
    "hose-reel-60m": {
      name: "60 m hose reel",
      short: "A practical and convenient solution for orderly storage and efficient hose deployment during operation.",
      description: [
        "A 60 meter hose reel is a practical and convenient solution for orderly storage and efficient hose deployment during operation. It simplifies daily use, helps keep the work area organised, and provides quick access to the hose whenever needed.",
        "Its robust construction supports safe operation, while the purpose-designed retraction mechanism improves handling comfort and reduces hose tangling.",
        "The 60 meter hose reel has been tested by our R&D team for AeroCleaning applications. We evaluate its functionality, ease of operation, and reliability when used with drone-based cleaning systems, ensuring that we offer practical solutions ready for demanding working conditions.",
      ],
      specGroups: [],
      alt: "60 m hose reel with valve and pressure gauge",
    },
    "hose-reel-120m": {
      name: "120 m hose reel",
      short: "A practical and convenient solution for orderly storage and efficient hose deployment during operation.",
      description: [
        "A 120 meter hose reel is a practical and convenient solution for orderly storage and efficient hose deployment during operation. It simplifies daily use, helps keep the work area organised, and provides quick access to the hose whenever needed. Its robust construction supports safe operation, while the purpose-designed retraction mechanism improves handling comfort and reduces hose tangling.",
        "The 120 meter hose reel has been tested by our R&D team for AeroCleaning applications. We evaluate its functionality, ease of operation, and reliability when used with drone-based cleaning systems, ensuring that we offer practical solutions ready for demanding working conditions.",
      ],
      specGroups: [],
      alt: "120 m hose reel with valve and pressure gauge",
    },
    "nozzle-set": {
      name: "Set of working nozzles",
      short:
        "A practical set of working nozzles designed to support efficient cleaning and spraying tasks in everyday and professional use.",
      description: [
        "This practical set of working nozzles is designed to support efficient cleaning and spraying tasks in everyday and professional use. The assortment includes different nozzle types and spray angles, allowing you to adapt the water stream to the surface and level of dirt.",
        'The 1/4" nozzles with 25° and 40° spray patterns provide versatile cleaning performance, while the foaming nozzle helps apply cleaning agents evenly for improved coverage. The ceramic wide-angle rotary nozzle is built for durability and reliable operation, making the set a convenient solution for users who need flexible and effective nozzle options in one package.',
      ],
      lists: [
        {
          title: "Included nozzles",
          items: ['1/4" 25° 030–045', '1/4" 40° 030', "Foaming nozzle", "Ceramic wide-angle rotary nozzle"],
        },
      ],
      specGroups: [],
      alt: "DCS set of working nozzles",
    },

    // ---------------------------------------------------------------- Chemicals
    "mostfoam-zero-one-killer-10l": {
      name: "DCS MOSTFOAM ZERO ONE KILLER 10L",
      short:
        "Professional concentrate for tough soiling: a high-performance, low-foaming alkaline concentrate designed for professional cleaning of surfaces resistant to alkaline agents.",
      description: MOSTFOAM_DESCRIPTION,
      lists: [mostfoamFeatures("10 L")],
      specGroups: mostfoamSpecs("10 L"),
      alt: "DCS MOSTFOAM ZERO ONE KILLER 10 L canister",
    },
    "mostfoam-zero-one-killer-25l": {
      name: "DCS MOSTFOAM ZERO ONE KILLER 25L",
      short:
        "Professional concentrate for tough soiling: a high-performance, low-foaming alkaline concentrate designed for professional cleaning of surfaces resistant to alkaline agents.",
      description: MOSTFOAM_DESCRIPTION,
      lists: [mostfoamFeatures("25 L")],
      specGroups: mostfoamSpecs("25 L"),
      alt: "DCS MOSTFOAM ZERO ONE KILLER 25 L canister",
    },

    // ---------------------------------------------------------------- Training
    "sts-01-training": {
      name: "STS-01 Training",
      short:
        "Training for beginner pilots: preparation for visual line-of-sight (VLOS) drone operations and a strong starting point for professional drone applications.",
      description: [
        "Training designed to prepare beginner pilots for visual line-of-sight (VLOS) drone operations. A strong starting point for professional drone applications.",
        COURSES_FOR,
      ],
      lists: [
        {
          title: "Training program",
          items: [
            "VLOS flight theory",
            "EU regulations and legal requirements",
            "Mission planning",
            "Safety procedures",
            "Practical flight exercises",
            "Theoretical and practical examination",
          ],
        },
      ],
      specGroups: [
        {
          title: "Course data",
          rows: [
            { label: "Scenario", value: "STS-01" },
            { label: "Type of operations", value: "Visual line of sight (VLOS)" },
            { label: "Intended for", value: "Beginner pilots" },
          ],
        },
      ],
      alt: "STS-01 training badge",
    },
    "sts-02-training": {
      name: "STS-02 Training",
      short:
        "Advanced training for operators who want to conduct flights beyond visual line of sight (BVLOS), with the knowledge and practical skills required for complex industrial and commercial operations.",
      description: [
        "Advanced training for operators who want to conduct flights beyond visual line of sight. It provides the knowledge and practical skills required for complex industrial and commercial operations.",
        COURSES_FOR,
      ],
      lists: [
        {
          title: "Training program",
          items: [
            "BVLOS flight theory",
            "Advanced mission planning",
            "Risk management systems",
            "Communication with air traffic control",
            "Emergency procedures",
            "BVLOS certification",
          ],
        },
      ],
      specGroups: [
        {
          title: "Course data",
          rows: [
            { label: "Scenario", value: "STS-02" },
            { label: "Type of operations", value: "Beyond visual line of sight (BVLOS)" },
            { label: "Level", value: "Advanced" },
          ],
        },
      ],
      alt: "STS-02 training badge",
    },
  },

  showcase: {
    m350: {
      kicker: "Matrice 350",
      title: "Matrice 350 with DCS shields and AeroCleaning system",
      body: "The drone is equipped with our front rotor guards, made from carbon fiber and carbon-fiber-reinforced 3D-printed components. They help protect key parts of the platform when operating in confined or demanding environments. The integrated cleaning lance with a movable, remotely controlled spray head enables precise direction of the water stream directly from the operator’s controller.",
    },
    m400: {
      kicker: "Matrice 400",
      title: "Matrice 400 with DCS shields and AeroCleaning system",
      body: "The same protection and lance on DJI’s flagship enterprise platform. Front rotor guards in carbon fiber and reinforced 3D-printed components, plus the remotely steered spray head. This solution improves the efficiency of vertical-surface cleaning, reduces the risks associated with working at height, and increases overall productivity on site.",
    },
    lance: {
      kicker: "System AeroCleaning",
      title: "System AeroCleaning – Lance",
      body: "The integrated cleaning lance with a movable, remotely controlled spray head enables precise direction of the water stream directly from the operator’s controller. It improves the efficiency of vertical-surface cleaning, reduces the risks associated with working at height, and increases overall productivity on site.",
    },
  },

  copy: {
    title: "Systems Catalog",
    hero: {
      eyebrow: "DCS Drone Cleaning System",
      title: "Complete aerial cleaning system.",
      lede: "DCS is not a single product – it is a complete setup: spray station, drone, accessories and chemicals. Choose your system level and we will help you configure a set for your target projects.",
      alt: "DCS X1 PRO spray station with hose reels and control panel, installed in a service van",
    },
    intro: {
      eyebrow: "The DCS system",
      title: "Not a single product – a complete setup.",
      body: [
        "The drone is equipped with our front rotor guards, made from carbon fiber and carbon-fiber-reinforced 3D-printed components. They help protect key parts of the platform when operating in confined or demanding environments.",
        "The integrated cleaning lance with a movable, remotely controlled spray head enables precise direction of the water stream directly from the operator’s controller. This solution improves the efficiency of vertical-surface cleaning, reduces the risks associated with working at height, and increases overall productivity on site.",
      ],
      checklist: [
        "100% compatible, system-matched components",
        "B2B quotes and support for companies and operators",
        "Training: onboarding and team readiness for operations",
      ],
    },
    showcase: {
      eyebrow: "Interactive 3D preview",
      title: "See DCS drones in three dimensions.",
      lede: "Rotate the model, zoom in on guard and lance details.",
    },
    tiers: {
      eyebrow: "Choose your system tier",
      title: "Three configurations matched to your business scale.",
      lede: "From entry services to industrial projects.",
    },
    products: {
      eyebrow: "Full catalog",
      title: "Stations, drones, accessories and chemicals.",
      lede: "Filter by category and explore product details.",
    },
    configurator: {
      eyebrow: "Configurator",
      title: "Configure your system and request a quote.",
      lede: "Answer a few questions and we will prepare a proposal matched to your project type.",
    },
    contact: {
      eyebrow: "Prefer to talk?",
      title: "Call us and we will configure it together.",
      lede: "Office and sales are available Monday to Friday, 8:00 to 18:00.",
      cta: "Contact Us",
    },
    product: {
      configure: "Not sure what to choose? We will ask a few questions and select a complete system for your building.",
      compare: {
        eyebrow: "Model selection",
        title: "Compare X1 models.",
        lede: "See the differences in one place – no need to go back to the catalog.",
      },
      deployment: {
        eyebrow: "Deployment",
        title: "You’re not just buying a device, you’re buying operational readiness.",
        lede: "We guide you from configuration selection, through team training, to full operational readiness.",
        steps: [
          {
            title: "Selection & audit",
            body: "We analyze the surface type, height and access to the building, then tailor the system configuration to real jobs.",
          },
          {
            title: "Operator training",
            body: "We prepare your team for safe and efficient work: drone operation, the spray module and safety procedures at height.",
          },
          {
            title: "Operational readiness",
            body: "We hand over a complete, ready-to-work system together with service support and access to consumables.",
          },
        ],
      },
      related: {
        eyebrow: "Compatibility & selection",
        title: "Components that form a complete, working system.",
      },
      contact: {
        eyebrow: "Configuration on request",
        title: "Configure your system and request a quote.",
        lede: "Answer a few questions in the configurator and we will prepare a proposal matched to your project type.",
        cta: "Open the configurator",
      },
    },
  },
};
