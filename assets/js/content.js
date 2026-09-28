/*
 * Editable content.
 * Swap the arrays below with your real skills and case studies —
 * the markup and styling will pick up any changes automatically.
 */

const SKILLS = [
  "Product Strategy", "End-to-End Product Design", "User Research", "Usability Testing",
  "Interaction & UI Design", "Information Architecture", "Design Systems", "Rapid Prototyping",
  "Product Analytics", "AI Experience Design", "Accessibility", "Cross-functional Collaboration",
  "Workshop Facilitation", "Figma", "Mixpanel"
];

/*
 * Each project also feeds its own case-study page (project.html?slug=...).
 * "View case study" links are generated automatically from `slug` —
 * add a new project here and its detail page works immediately.
 */
const PROJECTS = [
  {
    slug: "settly",
    tag: "UX/UI · Product Design",
    title: "Settly — Relocation Platform",
    role: "Senior UX Designer",
    company: "Settly",
    period: "2024 — Now",
    description:
      "Led end-to-end design across web and mobile for a B2B2C relocation platform, lifting mobile adoption from 31% to 81% and cutting vendor response times by 50%.",
    challenge:
      "Settly's relocation platform serves three very different audiences through one product — HR teams managing relocations, internal operations teams delivering services, and relocating employees trying to get through a stressful move. The experience needed to feel simple for each of them without fragmenting into three separate products.",
    approach: [
      "Led end-to-end design across all three audiences — discovery, research, prototyping, testing and delivery.",
      "Redesigned key mobile and web journeys to lift adoption and reduce drop-off.",
      "Designed a centralised vendor communication platform to speed up response times.",
      "Designed AI-assisted messaging and policy management experiences to reduce manual effort.",
      "Led user research and usability testing, using qualitative insights and Mixpanel data to validate decisions."
    ],
    results: [
      { value: "31→81%", label: "Mobile adoption" },
      { value: "50%", label: "Faster vendor response (34 to 17 hrs)" },
      { value: "40%", label: "Higher user retention" },
      { value: "30%", label: "Manual effort cut via AI" }
    ],
    accent: "violet",
    kind: "browser"
  },
  {
    slug: "bank-windhoek",
    tag: "Product Design · Design Systems",
    title: "Bank Windhoek — Digital Banking & Onboarding",
    role: "Senior Product Designer",
    company: "Capricorn Group — Bank Windhoek",
    period: "2021 — 2024",
    description:
      "Streamlined the end-to-end digital onboarding journey and built a scalable Figma design system, reducing onboarding time by 30%.",
    challenge:
      "Bank Windhoek's onboarding and banking experience spanned web, mobile, in-branch and self-service channels, each built and maintained differently. Customers and frontline staff needed a faster, more consistent way to get set up and served across every channel.",
    approach: [
      "Streamlined the end-to-end digital onboarding journey across channels.",
      "Built and documented a scalable Figma design system to unify web, mobile, in-branch and self-service.",
      "Designed intuitive customer and employee experiences across all banking channels.",
      "Collaborated in cross-functional agile teams, owning design from discovery through delivery."
    ],
    results: [
      { value: "30%", label: "Faster customer onboarding" },
      { value: "4", label: "Channels unified under one design system" }
    ],
    accent: "cyan",
    kind: "phone"
  },
  {
    slug: "discovery-vitality",
    tag: "UX/UI · Mobile",
    title: "Discovery Vitality — Health & Wellness Rewards",
    role: "UX/UI Designer",
    company: "Discovery Limited — Discovery Vitality ZA",
    period: "2019 — 2021",
    description:
      "Designed gamified mobile experiences that grew app engagement by 20%, using usability testing and behavioural insight to guide the roadmap.",
    challenge:
      "Vitality's rewards programme needed to keep members engaged long-term — turning healthy habits into an ongoing, gamified experience rather than a one-time sign-up, across a large and diverse member base.",
    approach: [
      "Designed gamified health and rewards experiences that encouraged continued participation.",
      "Identified user pain points through usability testing, behavioural insight and competitor research.",
      "Mentored designers on UX best practice and shared Figma libraries.",
      "Led end-to-end design and launch of new mobile functionality with product and engineering.",
      "Used A/B testing to evaluate and optimise product experiences."
    ],
    results: [
      { value: "20%", label: "Increase in mobile-app engagement" }
    ],
    accent: "amber",
    kind: "phone"
  },
  {
    slug: "vitality-group-international",
    tag: "UX Research · Product Design",
    title: "Vitality Group International — Global Wellness Platform",
    role: "UX/UI Designer",
    company: "Discovery Limited — Vitality Group International",
    period: "2017 — 2018",
    description:
      "Adapted a configurable wellness platform for international insurance partners, lifting retention by 25% and cutting support enquiries by 15%.",
    challenge:
      "The same wellness platform needed to work for insurance partners and their members across multiple international markets, each with different cultural expectations and business rules — without rebuilding it from scratch for every partner.",
    approach: [
      "Improved the mobile experience and accessibility for international markets.",
      "Used research and user data to adapt experiences to different cultural and behavioural needs.",
      "Designed configurable functionality that was efficiently reused across partner-market applications.",
      "Created end-to-end user journeys and interactive prototypes, validated through in-person and remote usability testing."
    ],
    results: [
      { value: "25%", label: "Increase in user retention" },
      { value: "15%", label: "Decrease in support enquiries" }
    ],
    accent: "rose",
    kind: "browser"
  }
];

/*
 * Real LinkedIn recommendations. Full text of each is longer —
 * trimmed here to the strongest 2-3 sentences for card readability.
 */
const TESTIMONIALS = [
  {
    quote:
      "Kiara has a rare combination of skills: sharp creative instinct paired with genuine proactivity. She didn't wait to be told what needed solving — she talked to clients, spotted friction points before anyone else did, and came back with original, well-considered solutions. I would rehire her without a second thought.",
    name: "Kimo Paula",
    role: "Settly",
    initials: "KP"
  },
  {
    quote:
      "She's a talented designer who consistently impressed me with her attention to detail, consideration of user experience and adherence to principles and guidelines. Beyond her technical skills, Kiara is a wonderful teammate with great mentoring and leadership skills.",
    name: "Marianka Cilliers",
    role: "Head of Design, Platform45",
    initials: "MC"
  },
  {
    quote:
      "Kiara's passion for creating seamless user experiences was evident in every project. She meticulously analyzed user journeys, ensuring our Vitality Rewards Programme was intuitive and engaging. I wholeheartedly recommend her for any role where creativity, collaboration and user-centric design are essential.",
    name: "Dee Louw",
    role: "Divisional Manager & Head of UX for Vitality, Discovery Limited",
    initials: "DL"
  },
  {
    quote:
      "Kiara demonstrated exceptional skill and professionalism. She effectively translated stakeholder requirements into outstanding user journeys — many of her interface designs were actually developed and became key customer journeys in the Discovery mobile app.",
    name: "Shaylen Hira",
    role: "Senior Manager, Data Science & AI, Discovery",
    initials: "SH"
  },
  {
    quote:
      "Kiara is an excellent person to have on your team. She has a passion for producing work of the highest quality and detail, brings a sense of calmness to the team, and has an amazing work ethic.",
    name: "Alvina Ward-Apolles",
    role: "Business Systems Analyst, CBAP",
    initials: "AW"
  }
];

/*
 * Personal — edit freely. Shown in the About Me section.
 */
const EDUCATION = [
  {
    period: "2014 — 2017",
    title: "Bachelor's Degree in Interaction Design",
    place: "The Open Window Institute, Pretoria"
  }
];

const INTERESTS = [
  "Photography", "Cycling", "Ceramics", "Travel",
  "Specialty coffee", "Sketching", "Vinyl records", "Yoga"
];
