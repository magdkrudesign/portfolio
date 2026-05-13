"use client";

import Link from "next/link";
import { projects } from "@/lib/data";
import PageFooter from "@/components/PageFooter";

const services = ["UI/UX Design", "Brand Identity", "Event Design", "Product Design"];

export default function HomePage() {
  return (
    <main>
      <div className="three-col">

        {/* ── LEFT ── name · socials · services */}
        <div className="col-left">
          {/* Top: heading — Framer fixes this at 290px wide */}
          <h1 className="text-heading1" style={{ maxWidth: 290 }}>
            Hello! I&apos;m Magdalena.
          </h1>

          {/* Middle: social icons 18×18 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <a
              href="https://www.linkedin.com/in/magdalenakruk/"
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ display: "inline-block", width: 18, height: 18 }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x=".5" y=".5" width="17" height="17" rx="1.5" stroke="rgb(18,18,18)"/>
                <path d="M5 7.5h1.5V13H5V7.5Zm.75-2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" fill="rgb(18,18,18)"/>
                <path d="M8 7.5h1.4v.76c.28-.5.95-.76 1.6-.76 1.5 0 2 .9 2 2V13h-1.5v-3c0-.83-.17-1.5-1-1.5s-1 .67-1 1.5v3H8V7.5Z" fill="rgb(18,18,18)"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/mad_cor_beau/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ display: "inline-block", width: 18, height: 18 }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x=".5" y=".5" width="17" height="17" rx="1.5" stroke="rgb(18,18,18)"/>
                <circle cx="9" cy="9" r="2.5" stroke="rgb(18,18,18)"/>
                <circle cx="12.5" cy="5.5" r=".5" fill="rgb(18,18,18)"/>
              </svg>
            </a>
          </div>

          {/* Bottom: service tags with dividers */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {services.map((s) => (
              <div key={s} className="service-tag">{s}</div>
            ))}
          </div>
        </div>

        {/* ── MIDDLE ── scrolls independently */}
        <div className="col-middle">

          {/* Sticky description — top: var(--col-pad-top) so it locks at 140px from viewport */}
          <div style={{
            position: "sticky",
            top: "var(--col-pad-top)",
            zIndex: 1,
            backgroundColor: "var(--color-white)",
            paddingBottom: 8,
          }}>
            <p className="text-16" style={{ maxWidth: 600 }}>
              Senior UX/UI &amp; Brand Designer blending strategy, story, and
              systems into brands and digital products{" "}
              <span style={{ color: "var(--color-gray)" }}>
                that are clear, memorable, and built to last.
              </span>
            </p>
          </div>

          {/* 30 vh spacer (matches Framer's invisible spacer) */}
          <div style={{ height: "30vh", flexShrink: 0 }} />

          {/* Selected work header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            paddingBottom: 8,
          }}>
            <span className="text-14" style={{ color: "var(--color-gray)" }}>Selected work</span>
            <span className="text-14" style={{ color: "var(--color-gray)" }}>({projects.length})</span>
          </div>

          {/* Project cards — full-width, stacked, 20 px gap (matches Framer Works gap) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingBottom: 200 }}>
            {projects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="project-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.previewImage}
                  alt={project.title}
                  style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block" }}
                  loading="lazy"
                />
                <div className="project-card-meta">
                  <span className="text-14">
                    {project.title}
                    <span style={{ color: "var(--color-gray)" }}> • {project.description}</span>
                  </span>
                  <span className="text-12" style={{ color: "var(--color-gray)", whiteSpace: "nowrap" }}>
                    {project.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <PageFooter />
        </div>

        {/* ── RIGHT ── available + photo (horizontal) · contact */}
        <div className="col-right">

          {/* Top: horizontal — Available (left 1fr) | Profile (right 1fr) */}
          <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            {/* Available indicator */}
            <div style={{ flex: 1 }}>
              <div className="available-dot">Available for work</div>
            </div>
            {/* Profile: photo + name/location */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
              {/* aspectRatio 0.758 = portrait — matches Framer Image node exactly */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/kvZUjM81xHq7MPsioY0TAcK0ipU.jpg"
                alt="Magdalena Kruk"
                style={{
                  width: "100%",
                  aspectRatio: "0.758",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span className="text-14">Senior Brand &amp; Product Designer</span>
                <span className="text-14" style={{ color: "var(--color-gray)" }}>
                  Based in Wrocław, Poland
                </span>
              </div>
            </div>
          </div>

          {/* Bottom: contact links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <a
              href="mailto:magdalena.kruk.design@gmail.com"
              className="text-14"
              style={{ textDecoration: "none", color: "var(--color-black)" }}
            >
              magdalena.kruk.design@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/magdalenakruk/"
              target="_blank" rel="noopener noreferrer"
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
