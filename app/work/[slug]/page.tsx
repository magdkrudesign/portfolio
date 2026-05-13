import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/lib/data";
import PageFooter from "@/components/PageFooter";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Magdalena Kruk`,
    description: project.overview,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main>
      <div className="three-col">

        {/* ── LEFT COLUMN ── title · meta · thumbnail */}
        <div className="col-left">

          {/* Top: project title */}
          <h1 className="text-heading1">{project.title}</h1>

          {/* Middle: Year / Client / Service — value LEFT (16px) · label RIGHT (14px gray) */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { label: "Year",    value: project.year },
              { label: "Client",  value: project.client },
              { label: "Service", value: project.service },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  gap: 8,
                  padding: "8px 0",
                  borderBottom: "1px solid var(--color-light-gray)",
                  borderTop: i === 0 ? "1px solid var(--color-light-gray)" : undefined,
                }}
              >
                {/* value: left, 16px */}
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    lineHeight: "1.4em",
                    flex: 1,
                  }}
                >
                  {value}
                </span>
                {/* label: right, 14px gray */}
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    lineHeight: "1.4em",
                    color: "var(--color-gray)",
                    flexShrink: 0,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom: thumbnail + category label */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.previewImage}
              alt={project.title}
              style={{
                width: "60%",
                aspectRatio: "4/3",
                objectFit: "cover",
                display: "block",
              }}
            />
            <span className="text-12" style={{ color: "var(--color-gray)" }}>
              {project.description}
            </span>
          </div>
        </div>

        {/* ── MIDDLE COLUMN ── description · gallery · nav · marquee */}
        <div className="col-middle">

          {/* Sticky project description — Heading 2 (26px / 1.1em / -0.04em / 500) */}
          <div
            style={{
              position: "sticky",
              top: "var(--col-pad-top)",
              zIndex: 1,
              backgroundColor: "var(--color-white)",
              paddingBottom: 8,
            }}
          >
            <p className="text-heading2" style={{ maxWidth: 600, marginBottom: 8 }}>
              {project.overview}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-14"
                style={{ color: "var(--color-gray)", textDecoration: "none" }}
              >
                {project.buttonText} ↗
              </a>
              <span className="text-12" style={{ color: "var(--color-gray)" }}>
                © {project.client}
              </span>
            </div>
          </div>

          {/* Image gallery — 12px gap, matches Framer ImageGallery */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              paddingTop: 12,
            }}
          >
            {/* Hero image first */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.previewImage}
              alt={project.title}
              style={{
                width: "100%",
                aspectRatio: "16/10",
                objectFit: "cover",
                display: "block",
              }}
            />
            {project.gallery.map((img, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={img}
                alt={`${project.title} — ${i + 1}`}
                style={{
                  width: "100%",
                  aspectRatio: "16/10",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
            ))}
          </div>

          {/* Prev / next navigation */}
          <div
            style={{
              marginTop: 80,
              paddingTop: 24,
              borderTop: "1px solid var(--color-light-gray)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              href="/work"
              className="text-14"
              style={{ color: "var(--color-gray)", textDecoration: "none" }}
            >
              ← All work
            </Link>
            <Link
              href={`/work/${next.slug}`}
              className="text-14"
              style={{ color: "var(--color-black)", textDecoration: "none" }}
            >
              {next.title} →
            </Link>
          </div>

          {/* "Let's work together" marquee — sits inside the scrollable middle column */}
          <PageFooter />
        </div>

        {/* ── RIGHT COLUMN ── My Role · Outcome stacked vertically */}
        <div className="col-right">

          {/* Top: My Role + Outcome with 40px gap — matches Framer Details gap="40px" */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h2 className="text-heading3">{project.title1}</h2>
              <p
                className="text-14"
                style={{ color: "var(--color-gray)", lineHeight: "1.6em" }}
                dangerouslySetInnerHTML={{ __html: project.paragraph1 }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h2 className="text-heading3">{project.title2}</h2>
              <p
                className="text-14"
                style={{ color: "var(--color-gray)", lineHeight: "1.6em" }}
                dangerouslySetInnerHTML={{ __html: project.paragraph2 }}
              />
            </div>
          </div>

          {/* Spacer — pushes content to top in space-between layout */}
          <div />
        </div>

      </div>
    </main>
  );
}
