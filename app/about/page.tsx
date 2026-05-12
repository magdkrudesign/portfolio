import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Magdalena Kruk",
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

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "60px" }}>
      <div className="three-col">
        {/* LEFT COLUMN */}
        <div className="col-left">
          {/* Top: Photo */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                position: "relative",
                width: "55%",
                aspectRatio: "0.751",
                overflow: "hidden",
                backgroundColor: "var(--color-light-gray)",
              }}
            >
              <Image
                src="https://framerusercontent.com/images/ML35xR4TDNdu1vOfg8Wm81Uq9I.jpg"
                alt="Magdalena Kruk"
                fill
                style={{ objectFit: "cover" }}
                sizes="15vw"
              />
            </div>
            <span className="text-12" style={{ color: "var(--color-gray)" }}>
              © 2026
            </span>
          </div>

          {/* Bottom: Title */}
          <div>
            <h1 className="text-heading1">About Me.</h1>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="col-middle" style={{ paddingBottom: "120px" }}>
          {/* Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginBottom: "120px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h2
                className="text-heading2"
                style={{ maxWidth: "600px", marginBottom: 0 }}
              >
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
          </div>

          {/* Services */}
          <section style={{ marginBottom: "80px" }}>
            <div style={{ marginBottom: "24px" }}>
              <h2 className="text-heading2" style={{ marginBottom: "16px" }}>
                Services
              </h2>
              <div className="divider" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
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
            </div>
          </section>

          {/* Software Stack */}
          <section style={{ marginBottom: "80px" }}>
            <h2 className="text-heading2" style={{ marginBottom: "16px" }}>
              Software Stack
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                gap: "8px",
              }}
            >
              {tools.map((tool) => (
                <div key={tool.name} className="tool-item">
                  <span className="text-14" style={{ fontWeight: 500 }}>
                    {tool.name}
                  </span>
                  <span className="text-12" style={{ color: "var(--color-gray)" }}>
                    {tool.description}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <div style={{ marginBottom: "24px" }}>
              <h2 className="text-heading2" style={{ marginBottom: "16px" }}>
                Experience
              </h2>
              <div className="divider" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {experience.map((job) => (
                <div key={job.title} className="experience-card">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <div>
                      <h3 className="text-heading3">{job.title}</h3>
                      <span className="text-14" style={{ color: "var(--color-gray)" }}>
                        {job.company}
                      </span>
                    </div>
                    <span
                      className="text-12"
                      style={{ color: "var(--color-gray)", whiteSpace: "nowrap" }}
                    >
                      {job.period}
                    </span>
                  </div>
                  <p className="text-14" style={{ color: "var(--color-gray)", maxWidth: "520px" }}>
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-right">
          {/* Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="text-12" style={{ color: "var(--color-gray)" }}>
                  {stat.label}
                </span>
                <span className="text-14" style={{ fontWeight: 500 }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Notable Projects */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>
              <span className="text-12" style={{ color: "var(--color-gray)" }}>
                Projects
              </span>
              <div className="divider" style={{ marginTop: "8px" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {notableProjects.map((project) => (
                <div
                  key={project.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "6px 0",
                    gap: "8px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span className="text-12" style={{ fontWeight: 500 }}>
                      {project.name}
                    </span>
                    <span className="text-12" style={{ color: "var(--color-gray)" }}>
                      {project.detail}
                    </span>
                  </div>
                  <span className="text-12" style={{ color: "var(--color-gray)", whiteSpace: "nowrap" }}>
                    {project.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
