import { notFound } from "next/navigation";
import Image from "next/image";
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

  return (
    <main style={{ paddingTop: "60px" }}>
      <div className="three-col">
        {/* LEFT COLUMN */}
        <div className="col-left">
          {/* Back link */}
          <div>
            <Link
              href="/work"
              className="text-14"
              style={{
                color: "var(--color-gray)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                transition: "color 0.15s ease",
              }}
            >
              ← All work
            </Link>
          </div>

          {/* Project meta */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <div className="stat-item">
              <span className="text-12" style={{ color: "var(--color-gray)" }}>
                Year
              </span>
              <span className="text-12">{project.year}</span>
            </div>
            <div className="stat-item">
              <span className="text-12" style={{ color: "var(--color-gray)" }}>
                Client
              </span>
              <span className="text-12">{project.client}</span>
            </div>
            <div className="stat-item">
              <span className="text-12" style={{ color: "var(--color-gray)" }}>
                Services
              </span>
              <span
                className="text-12"
                style={{ textAlign: "right", maxWidth: "120px" }}
              >
                {project.service}
              </span>
            </div>
          </div>

          {/* Bottom: CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {project.buttonText} ↗
            </a>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="col-middle" style={{ paddingBottom: "120px" }}>
          {/* Project title */}
          <div style={{ marginBottom: "40px" }}>
            <h1 className="text-heading1" style={{ marginBottom: "12px" }}>
              {project.title}
            </h1>
            <p className="text-16" style={{ color: "var(--color-gray)" }}>
              {project.description}
            </p>
          </div>

          {/* Hero image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/10",
              overflow: "hidden",
              backgroundColor: "var(--color-light-gray)",
              marginBottom: "40px",
            }}
          >
            <Image
              src={project.previewImage}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="50vw"
              priority
            />
          </div>

          {/* Overview */}
          <p
            className="text-16"
            style={{
              maxWidth: "560px",
              marginBottom: "60px",
              lineHeight: "1.6em",
            }}
          >
            {project.overview}
          </p>

          <div className="divider" style={{ marginBottom: "40px" }} />

          {/* My Role */}
          <div style={{ marginBottom: "40px" }}>
            <h2 className="text-heading3" style={{ marginBottom: "12px" }}>
              {project.title1}
            </h2>
            <p
              className="text-14"
              style={{
                color: "var(--color-gray)",
                maxWidth: "520px",
                lineHeight: "1.6em",
              }}
              dangerouslySetInnerHTML={{ __html: project.paragraph1 }}
            />
          </div>

          {/* Outcome */}
          <div style={{ marginBottom: "60px" }}>
            <h2 className="text-heading3" style={{ marginBottom: "12px" }}>
              {project.title2}
            </h2>
            <p
              className="text-14"
              style={{
                color: "var(--color-gray)",
                maxWidth: "520px",
                lineHeight: "1.6em",
              }}
              dangerouslySetInnerHTML={{ __html: project.paragraph2 }}
            />
          </div>

          <div className="divider" style={{ marginBottom: "40px" }} />

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h2
                className="text-14"
                style={{ color: "var(--color-gray)", marginBottom: "4px" }}
              >
                Gallery
              </h2>
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16/10",
                    overflow: "hidden",
                    backgroundColor: "var(--color-light-gray)",
                  }}
                >
                  <Image
                    src={img}
                    alt={`${project.title} — image ${i + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="50vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-right">
          {/* Categories */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span className="text-12" style={{ color: "var(--color-gray)" }}>
              Categories
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {project.categories.map((cat) => (
                <span key={cat} className="service-tag">
                  {getCategoryLabel(cat)}
                </span>
              ))}
            </div>
          </div>

          {/* Next project */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span className="text-12" style={{ color: "var(--color-gray)" }}>
              Next project
            </span>
            {(() => {
              const idx = projects.findIndex((p) => p.slug === project.slug);
              const next = projects[(idx + 1) % projects.length];
              return (
                <Link
                  href={`/work/${next.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <span className="text-14" style={{ fontWeight: 500 }}>
                      {next.title} →
                    </span>
                    <span
                      className="text-12"
                      style={{ color: "var(--color-gray)" }}
                    >
                      {next.description}
                    </span>
                  </div>
                </Link>
              );
            })()}
          </div>
        </div>
      </div>
    </main>
  );
}
