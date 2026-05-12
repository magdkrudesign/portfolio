"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

const services = ["UI/UX Design", "Brand Identity", "Event Design", "Product Design"];

const featuredProjects = projects.slice(0, 5);

export default function HomePage() {
  return (
    <main style={{ paddingTop: "60px" }}>
      <div className="three-col">
        {/* LEFT COLUMN */}
        <div className="col-left">
          {/* Top: Name */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h1 className="text-heading1">Hello! I&apos;m Magdalena.</h1>
          </div>

          {/* Middle: Socials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href="https://www.linkedin.com/in/magdalenakruk/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-14"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.instagram.com/mad_cor_beau/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-14"
            >
              Instagram ↗
            </a>
          </div>

          {/* Bottom: Services */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {services.map((s) => (
              <div key={s} className="service-tag">
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="col-middle">
          {/* Sticky description */}
          <div
            style={{
              position: "sticky",
              top: "60px",
              zIndex: 1,
              backgroundColor: "var(--color-white)",
              paddingBottom: "8px",
            }}
          >
            <p
              className="text-16"
              style={{ maxWidth: "600px", marginBottom: "16px" }}
            >
              Senior UX/UI &amp; Brand Designer blending strategy, story, and
              systems into brands and digital products that are clear,
              memorable, and built to last.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                paddingTop: "16px",
              }}
            >
              <span className="text-14" style={{ color: "var(--color-gray)" }}>
                Selected work
              </span>
              <span className="text-14" style={{ color: "var(--color-gray)" }}>
                ({featuredProjects.length})
              </span>
            </div>
          </div>

          {/* Projects list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              paddingTop: "12px",
              paddingBottom: "200px",
            }}
          >
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--color-light-gray)",
                    gap: "16px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <span className="text-14" style={{ fontWeight: 500 }}>
                      {project.title}
                    </span>
                    <span
                      className="text-12"
                      style={{ color: "var(--color-gray)" }}
                    >
                      {project.description}
                    </span>
                  </div>
                  <span
                    className="text-12"
                    style={{
                      color: "var(--color-gray)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {project.year}
                  </span>
                </div>
              </Link>
            ))}

            {/* View all link */}
            <div style={{ paddingTop: "24px" }}>
              <Link href="/work" className="btn-secondary">
                View all work →
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-right">
          {/* Top: Profile card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div className="available-dot">Available for work</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "0.758",
                  overflow: "hidden",
                  backgroundColor: "var(--color-light-gray)",
                }}
              >
                <Image
                  src="https://framerusercontent.com/images/kvZUjM81xHq7MPsioY0TAcK0ipU.jpg"
                  alt="Magdalena Kruk"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="25vw"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span className="text-14">Senior Brand &amp; Product Designer</span>
                <span className="text-14" style={{ color: "var(--color-gray)" }}>
                  Based in Wrocław, Poland
                </span>
              </div>
            </div>
          </div>

          {/* Bottom: Contact buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <a
              href="mailto:magdalena.kruk.design@gmail.com"
              className="btn-primary"
            >
              magdalena.kruk.design@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/magdalenakruk/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
