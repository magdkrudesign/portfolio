import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug, getCategoryLabel } from "@/lib/data";
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
    <main style={{ paddingTop: "44px" }}>
      <div className="three-col">

        {/* ── LEFT COLUMN ── title + thumbnail + meta */}
        <div className="col-left">
          {/* Project title */}
          <h1 className="text-heading1" style={{ lineHeight: "1em" }}>
            {project.title}
          </h1>

          {/* Thumbnail + description tag */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.previewImage}
              alt={project.title}
              style={{ width: "60%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
            />
            <span className="text-12" style={{ color: "var(--color-gray)" }}>
              {project.description}
            </span>
          </div>

          {/* Metadata */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="meta-row">
              <span className="meta-label">Year</span>
              <span className="meta-value">{project.year}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Client</span>
              <span className="meta-value">{project.client}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Service</span>
              <span className="meta-value" style={{ maxWidth: "140px" }}>{project.service}</span>
            </div>
          </div>
        </div>

        {/* ── MIDDLE COLUMN ── overview + gallery */}
        <div className="col-middle" style={{ paddingBottom: "120px" }}>
          {/* Overview */}
          <p
            className="text-heading2"
            style={{ marginBottom: "60px", maxWidth: "580px" }}
          >
            {project.overview}
          </p>

          {/* Preview link row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
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

          {/* Gallery */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Hero preview image first */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.previewImage}
              alt={project.title}
              style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block" }}
            />
            {project.gallery.map((img, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={img}
                alt={`${project.title} — ${i + 1}`}
                style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block" }}
                loading="lazy"
              />
            ))}
          </div>

          {/* Next project */}
          <div
            style={{
              marginTop: "80px",
              paddingTop: "24px",
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
        </div>

        {/* ── RIGHT COLUMN ── My Role + Outcome */}
        <div className="col-right">
          {/* My Role */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h2 className="text-heading3">{project.title1}</h2>
            <p
              className="text-14"
              style={{ color: "var(--color-gray)", lineHeight: "1.6em" }}
              dangerouslySetInnerHTML={{ __html: project.paragraph1 }}
            />
          </div>

          {/* Outcome */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h2 className="text-heading3">{project.title2}</h2>
            <p
              className="text-14"
              style={{ color: "var(--color-gray)", lineHeight: "1.6em" }}
              dangerouslySetInnerHTML={{ __html: project.paragraph2 }}
            />
          </div>

          {/* Categories */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {project.categories.map((cat) => (
              <span key={cat} className="text-12" style={{ color: "var(--color-gray)" }}>
                {getCategoryLabel(cat)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
