export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  year: string;
  client: string;
  service: string;
  overview: string;
  previewImage: string;
  buttonText: string;
  previewLink: string;
  categories: string[];
  title1: string;
  paragraph1: string;
  title2: string;
  paragraph2: string;
  gallery: string[];
  featuredIn?: {
    description: string;
    links: { icon: string; label: string; url: string }[];
  }[];
};

export type Category = {
  id: string;
  slug: string;
  title: string;
};

export const categories: Category[] = [
  { id: "u8ZW6mU5n", slug: "brand-identity", title: "Brand Identity" },
  { id: "oJAGeLpEw", slug: "web-design", title: "Web Design" },
  { id: "kz6xg1uha", slug: "event-design", title: "Event Design" },
  { id: "KRWDcqhjA", slug: "mobile", title: "Product Design" },
];

export const projects: Project[] = [
  {
    id: "JeojFISzl",
    slug: "callstack",
    title: "Callstack",
    description: "Brand & Web Design",
    year: "'23–'24",
    client: "Callstack",
    service: "Brand Design, UI/UX, Web Design",
    overview:
      "Visual identity and website design for a leading React & React Native consultancy — a Meta Partner with 300+ enterprise clients worldwide.",
    previewImage:
      "https://framerusercontent.com/images/V5AGETgPEqrLlnrMpQeYUGlBPBA.png",
    buttonText: "Live website",
    previewLink: "https://www.callstack.com/",
    categories: ["brand-identity", "web-design"],
    title1: "My Role",
    paragraph1:
      "End-to-end ownership of Callstack's visual identity — brandbook, logo, typography, color system, and UI styling. Responsible for all brand touchpoints: website, social media, presentations, and marketing materials.",
    title2: "Outcome",
    paragraph2:
      "Collaborated closely with the development team and external Webflow agency to ensure design system consistency from Figma handoff to live implementation. Delivered a cohesive brand that scaled across digital and print.",
    gallery: [
      "https://framerusercontent.com/images/LYjPMGCeUFPb5mSE23UQuv8rBo.webp",
      "https://framerusercontent.com/images/iG5PUN3ni4gO6Q2hjfKcEQn91xk.webp",
      "https://framerusercontent.com/images/CKnUeanHdZ7kmQvqQtDpNOTAy8.webp",
    ],
    featuredIn: [
      {
        description: "I joined the B2B Besties podcast to talk through the Callstack rebrand — design process, brand strategy, and building a cohesive visual identity.",
        links: [
          { icon: "▶", label: "Watch on YouTube", url: "https://youtu.be/Yuq0j_saaEs?si=9ZsoQBn4fgZbC1Ji" },
          { icon: "🎧", label: "Listen on Spotify", url: "https://open.spotify.com/episode/5QkHTKmkEuhVDrSRaDI5Xh?si=2f3cc74ecd4b4b36" },
        ],
      },
    ],
  },
  {
    id: "DVeNbxMAn",
    slug: "react-universe-summit",
    title: "React Universe Summit",
    description: "Brand Identity",
    year: "'25",
    client: "Callstack",
    service: "Brand Identity, Event Design",
    overview:
      "Brand identity for React Universe Summit — a new format within the React Universe event family, designed from scratch with a distinct visual language while staying coherent with the wider brand.",
    previewImage:
      "https://framerusercontent.com/images/a4FEzpeEC6nVylLdT3HxICHJf4Q.jpg",
    buttonText: "Live website",
    previewLink: "https://www.reactuniverseconf.com/",
    categories: ["event-design", "brand-identity", "web-design"],
    title1: "My Role",
    paragraph1:
      "Designed the brand from scratch: visual language, logo, color palette, typography, and web presence. Ensured coherence with the React Universe Conf family while establishing a distinct identity for the summit format.",
    title2: "Outcome",
    paragraph2:
      "A standalone brand that feels like a natural extension of the React Universe family — recognisable yet unique, ready for launch.",
    gallery: [
      "https://framerusercontent.com/images/F8Vg4LEoPSzFyXrLmeeHzQWFnDQ.jpg",
      "https://framerusercontent.com/images/KuIUJrlUtaiqJTZzx2EadRhSAs.jpg",
      "https://framerusercontent.com/images/3rQcjElJGRfwnNrYojJmAVbqp9o.jpg",
    ],
  },
  {
    id: "nwW4ea89t",
    slug: "naturaily",
    title: "Naturaily",
    description: "Brand Direction & Web Redesign",
    year: "'26",
    client: "Naturaily",
    service: "Brand Direction, Web Design",
    overview:
      "Full brand direction exploration and website redesign for Naturaily — a Ruby on Rails & React software house. From brand keywords and visual mood to hi-fi web design in Figma.",
    previewImage:
      "https://framerusercontent.com/images/Pkt6hUNTK1cnvtcu7uisWDJN24.jpg",
    buttonText: "View in Figma",
    previewLink:
      "https://www.figma.com/design/rCTTAd3w7vZguisny674WC/Naturaily-%7C-Web-Design--Copy-?node-id=13985-55815&t=ojCkpkpzLuKDLXBE-1",
    categories: ["brand-identity", "web-design"],
    title1: "My Role",
    paragraph1:
      "Led the brand direction phase: defined keywords (fluid, precision, organic intelligence), explored two visual directions — Amberglass and Vibrant Jelly — and developed 3D visual language with custom assets. Delivered complete hi-fi web designs across all key pages.",
    title2: "Outcome",
    paragraph2:
      "A bold new visual identity that breaks away from generic software house aesthetics — organic, fluid, and precise. Full Figma design system ready for development handoff.",
    gallery: [
      "https://framerusercontent.com/images/cKZ6hto6mI3HT6KR9aq0SadjA.jpg",
      "https://framerusercontent.com/images/ATSfDhGC2MiaQrb6Tp4rnTctro.jpg",
      "https://framerusercontent.com/images/D05SiKJXEkDF30e2ii28bQKtNM.jpg",
      "https://framerusercontent.com/images/gxDINwEx9dNWlCzlRLH0c3o8k.jpg",
    ],
  },
  {
    id: "LfwbF_XNs",
    slug: "react-universe-app",
    title: "React Universe App",
    description: "iOS & Android App Design",
    year: "'25",
    client: "Callstack",
    service: "UI/UX Design, Mobile, Product Design",
    overview:
      "Designed a networking-first experience for React Universe attendees — from customizable digital badges to QR contact exchange. Shipped Apple's Liquid Glass under conference deadline pressure. Validated through Maze usability testing before launch.",
    previewImage:
      "https://framerusercontent.com/images/Cn4f5JN2XgHbmNNB0aqizTNedc.jpg",
    buttonText: "Case study",
    previewLink:
      "https://www.callstack.com/case-studies/react-universe-app-networking-evolved-with-liquid-glass",
    categories: ["mobile", "event-design", "brand-identity"],
    title1: "My Role",
    paragraph1:
      "Designed the full mobile experience: onboarding flow, schedule browser, attendee profiles, and digital badge feature. Built a component-based design system in Figma aligned with the React Universe brand. Event app that people actually used. 63% adoption, 67% connected via QR badges, 45% created personalized profiles. Built on React Native with Liquid Glass — designed to scale beyond a single event.",
    title2: "Outcome",
    paragraph2:
      "Worked closely with React Native developers during handoff and QA to ensure pixel-perfect implementation. App launched on the App Store and Google Store ahead of the conference.",
    gallery: [
      "https://framerusercontent.com/images/vhfcjlAYB4rxeJhCpYPLoUjkg.jpg",
      "https://framerusercontent.com/images/jIndSIT6P0wmUR954Nq0Y4VHOQk.jpg",
      "https://framerusercontent.com/images/PXGxmc9goaOIMG9cdmeiZKnlJI.jpg",
      "https://framerusercontent.com/images/9y1WV2AvFwyZG6vY2iT9RZDzcE.jpg",
    ],
  },
  {
    id: "UfabXVdwG",
    slug: "griefbox",
    title: "GriefBox",
    description: "iOS & Android App Design",
    year: "'25",
    client: "GriefBox",
    service: "UI/UX Design, Mobile, Product Design",
    overview:
      "Mobile app design for GriefBox — a nonprofit platform that acts as a witness to sorrow and supports healing after loss. Emotional design at the core, currently in pre-development stage.",
    previewImage:
      "https://framerusercontent.com/images/sYS6aGYVZorA59BY6plLX1lYTm4.jpg",
    buttonText: "View in Figma",
    previewLink:
      "https://www.figma.com/design/m7qG6o7pAW6IK2iRht9nQH/UI-Design--Griefbox-copy-?node-id=22949-19919&t=Vm8tbCSLKZOranHQ-1",
    categories: ["mobile", "brand-identity"],
    title1: "My Role",
    paragraph1:
      "End-to-end UI/UX design for a safe, calming mobile experience where people can write about grief and loss. Designed with emotional sensitivity at the core: gentle visual language, minimal friction, and calm micro-interactions.",
    title2: "Outcome",
    paragraph2:
      "A complete hi-fi design system in Figma — ready for handoff. The app addresses a deeply human need with care and intentionality, making it one of the most emotionally considered projects in the portfolio.",
    gallery: [
      "https://framerusercontent.com/images/wVsPt0xQ7r4gAJkFfAt0pgAyQ.jpg",
      "https://framerusercontent.com/images/vM3n6k6GlOYNsCCDX6faUhMCk.jpg",
      "https://framerusercontent.com/images/V1xYwYWHzZOI8Kcx9nMHkErBu9s.jpg",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCategoryLabel(slug: string): string {
  return categories.find((c) => c.slug === slug)?.title ?? slug;
}
