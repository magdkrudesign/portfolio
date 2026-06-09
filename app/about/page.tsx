import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Info — Magdalena Kruk",
  description:
    "Senior Brand & Product Designer based in Wrocław, Poland. Working at the intersection of brand and product.",
};

const services = [
  {
    title: "1. Brand Design & Visual Identity",
    description:
      "Building and evolving brand systems — logo, typography, color, and visual language. From initial concept to full brandbook, I ensure every touchpoint feels consistent and intentional.",
  },
  {
    title: "2. UI/UX Design",
    description:
      "Full end-to-end product design: from user research and lo-fi wireframes to hi-fi interfaces and interactive prototypes. I design with clarity and usability at the core.",
  },
  {
    title: "3. Product Design",
    description:
      "Designing digital products end-to-end — from research and lo-fi wireframes to hi-fi interfaces and prototypes. I focus on usability, clarity, and making things that actually work for people.",
  },
  {
    title: "4. Event & Marketing Design",
    description:
      "Full visual identity for conferences and events — stage design, printed materials, social media templates, speaker assets, and web presence.",
  },
];

const tools = [
  { name: "Figma", description: "Design & prototyping" },
  { name: "Webflow", description: "No-code web design" },
  { name: "Illustrator", description: "Vector & graphic design" },
  { name: "Photoshop", description: "Image editing & DTP" },
  { name: "Framer", description: "Web design & portfolio" },
  { name: "AI Tools", description: "Workflow optimisation" },
];

const experience = [
  {
    title: "Senior Brand & Product Designer",
    company: "Callstack, Wrocław",
    period: "Nov '20 – present",
    description:
      "Leading brand and product design at a top React & React Native consultancy. Responsible for visual identity, UI/UX of digital products, and full event branding for React Universe Conf — Europe's largest React & React Native conference.",
  },
  {
    title: "Freelance Brand & Product Designer",
    company: "Independent",
    period: "'18 – present",
    description:
      "Working with clients on brand identity, visual direction, and product design. Projects include website redesigns, mobile app UI/UX, event branding, and marketing design — from early concept to final delivery.",
  },
];

const stats = [
  { label: "Years of experience", value: "6+" },
  { label: "Products designed", value: "10+" },
  { label: "Events branded", value: "10+" },
];

const notableProjects = [
  { name: "React Universe Conf", detail: "Full Event Identity, 600+ attendees", year: "'25" },
  { name: "React Universe App", detail: "iOS App — App Store", year: "'25" },
  { name: "GriefBox", detail: "Nonprofit Mobile App Design", year: "'25" },
  { name: "Callstack Brandbook", detail: "Visual Identity System", year: "'24" },
];

const leftCol = (
  <>
    <h1 className="text-heading1">About Me.</h1>
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://framerusercontent.com/images/kvZUjM81xHq7MPsioY0TAcK0ipU.jpg"
        alt="Magdalena Kruk"
        style={{ width: "60%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", display: "block" }} />
    </div>
  </>
);

const rightCol = (
  <>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {stats.map((stat) => (
        <div key={stat.label} className="meta-row">
          <span className="meta-label">{stat.label}</span>
          <span className="meta-value" style={{ textAlign: "right" }}>{stat.value}</span>
        </div>
      ))}
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <span className="text-12" style={{ color: "var(--color-gray)" }}>Projects</span>
      <div className="divider" />
      {notableProjects.map((p) => (
        <div key={p.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span className="text-12" style={{ fontWeight: 500 }}>{p.name}</span>
            <span className="text-12" style={{ color: "var(--color-gray)" }}>{p.detail}</span>
          </div>
          <span className="text-12" style={{ color: "var(--color-gray)", whiteSpace: "nowrap" }}>{p.year}</span>
        </div>
      ))}
    </div>
  </>
);

export default function AboutPage() {
  return (
    <PageLayout left={leftCol} right={rightCol}>
      <div style={{ paddingBottom: 120 }}>

          {/* Bio */}
          <div style={{ marginBottom: "80px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2 className="text-heading2" style={{ maxWidth: "600px" }}>
              I&apos;m Magdalena — a Senior Brand &amp; Product Designer based
              in Wrocław, Poland. I work at the intersection of brand and
              product, creating visual identities, digital experiences, and
              products that are intentional and coherent.
            </h2>
            <p className="text-16" style={{ maxWidth: "520px", color: "var(--color-gray)" }}>
              Currently at Callstack, where I lead design for brand, product,
              and events — from brandbook to mobile app, from conference
              identity to design system. I work end-to-end: strategy, UI/UX,
              handoff, and everything in between.
            </p>
          </div>

          {/* Services */}
          <section style={{ marginBottom: "80px" }}>
            <h2 className="text-heading2" style={{ marginBottom: "16px" }}>Services</h2>
            <div className="divider" />
            {services.map((service) => (
              <div
                key={service.title}
                style={{
                  padding: "20px 0",
                  borderBottom: "1px solid var(--color-light-gray)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <h3 className="text-heading3">{service.title}</h3>
                <p className="text-14" style={{ color: "var(--color-gray)", maxWidth: "520px" }}>
                  {service.description}
                </p>
              </div>
            ))}
          </section>

          {/* Software Stack */}
          <section style={{ marginBottom: "80px" }}>
            <h2 className="text-heading2" style={{ marginBottom: "16px" }}>Software Stack</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                gap: "8px",
              }}
            >
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  style={{
                    padding: "16px",
                    border: "1px solid var(--color-light-gray)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <span className="text-14">{tool.name}</span>
                  <span className="text-12" style={{ color: "var(--color-gray)" }}>{tool.description}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-heading2" style={{ marginBottom: "16px" }}>Experience</h2>
            <div className="divider" />
            {experience.map((job) => (
              <div key={job.title} style={{ padding: "20px 0", borderBottom: "1px solid var(--color-light-gray)", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
                  <div>
                    <h3 className="text-heading3">{job.title}</h3>
                    <span className="text-14" style={{ color: "var(--color-gray)" }}>{job.company}</span>
                  </div>
                  <span className="text-12" style={{ color: "var(--color-gray)", whiteSpace: "nowrap" }}>{job.period}</span>
                </div>
                <p className="text-14" style={{ color: "var(--color-gray)", maxWidth: "520px" }}>{job.description}</p>
              </div>
            ))}
          </section>
        </div>
    </PageLayout>
  );
}
