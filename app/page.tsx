"use client";

import Link from "next/link";
import { projects } from "@/lib/data";

const services = [
  "UI/UX Design",
  "Brand Identity",
  "Event Design",
  "Product Design",
];

export default function HomePage() {
  return (
    <main style={{ paddingTop: "44px" }}>
      <div className="three-col">
        {/* ── LEFT COLUMN ── */}
        <div className="col-left">
          {/* Top: Name */}
          <h1 className="text-heading1">Hello! I&apos;m Magdalena.</h1>

          {/* Middle: Social icons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <a
              href="https://www.linkedin.com/in/magdalenakruk/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", width: 18, height: 18 }}
              aria-label="LinkedIn"
            >
              {/* LinkedIn icon */}
              <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="17" height="17" rx="1.5" stroke="rgb(18,18,18)" />
                <path d="M5 7.5H6.5V13H5V7.5ZM5.75 6.5C5.33579 6.5 5 6.16421 5 5.75C5 5.33579 5.33579 5 5.75 5C6.16421 5 6.5 5.33579 6.5 5.75C6.5 6.16421 6.16421 6.5 5.75 6.5Z" fill="rgb(18,18,18)" />
                <path d="M8 7.5H9.5V8.25C9.75 7.75 10.5 7.5 11 7.5C12.5 7.5 13 8.5 13 9.5V13H11.5V10C11.5 9.17157 11.3284 8.5 10.5 8.5C9.67157 8.5 9.5 9.17157 9.5 10V13H8V7.5Z" fill="rgb(18,18,18)" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/mad_cor_beau/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", width: 18, height: 18 }}
              aria-label="Instagram"
            >
              {/* Instagram icon */}
              <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="17" height="17" rx="1.5" stroke="rgb(18,18,18)" />
                <circle cx="9" cy="9" r="2.5" stroke="rgb(18,18,18)" />
                <circle cx="12.5" cy="5.5" r="0.5" fill="rgb(18,18,18)" />
              </svg>
            </a>
          </div>

          {/* Bottom: Services */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {services.map((s) => (
              <div key={s} className="service-tag">
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* ── MIDDLE COLUMN ── */}
        <div className="col-middle">
          {/* Sticky description */}
          <div
            style={{
              position: "sticky",
              top: "44px",
              zIndex: 1,
              backgroundColor: "var(--color-white)",
              paddingBottom: "8px",
            }}
          >
            {/* Two-toned description */}
            <p className="text-16" style={{ maxWidth: "600px" }}>
              <span>
                Senior UX/UI &amp; Brand Designer blending strategy, story, and
                systems into brands and digital products{" "}
              </span>
              <span style={{ color: "var(--color-gray)" }}>
                that are clear, memorable, and built to last.
              </span>
            </p>

            {/* Selected work header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginTop: "30vh",
                paddingBottom: "8px",
              }}
            >
              <span className="text-14" style={{ color: "var(--color-gray)" }}>
                Selected work
              </span>
              <span className="text-14" style={{ color: "var(--color-gray)" }}>
                ({projects.length})
              </span>
            </div>
          </div>

          {/* Project cards — full-width images */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              paddingBottom: "200px",
            }}
          >
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="project-card"
                style={{ marginBottom: "12px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.previewImage}
                  alt={project.title}
                  style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block" }}
                  loading="lazy"
                />
                <div className="project-card-meta">
                  <span className="text-14">
                    <strong style={{ fontWeight: 500 }}>{project.title}</strong>
                    <span style={{ color: "var(--color-gray)" }}> • {project.description}</span>
                  </span>
                  <span className="text-12" style={{ color: "var(--color-gray)", whiteSpace: "nowrap" }}>
                    {project.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="col-right">
          {/* Top: Available + Photo + Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div className="available-dot">Available for work</div>
            <div style={{ marginTop: "8px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/kvZUjM81xHq7MPsioY0TAcK0ipU.jpg"
                alt="Magdalena Kruk"
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "4px" }}>
              <span className="text-14">Senior Brand &amp; Product Designer</span>
              <span className="text-14" style={{ color: "var(--color-gray)" }}>
                Based in Wrocław, Poland
              </span>
            </div>
          </div>

          {/* Bottom: Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <a
              href="mailto:magdalena.kruk.design@gmail.com"
              className="text-14"
              style={{ textDecoration: "none", color: "var(--color-black)" }}
            >
              magdalena.kruk.design@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/magdalenakruk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-14"
              style={{ textDecoration: "none", color: "var(--color-gray)" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
