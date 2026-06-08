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
          {/* Top: heading, width 290px matches Framer */}
          <h1 className="text-heading1" style={{ maxWidth: 290 }}>
            Hello! I&apos;m Magdalena.
          </h1>

          {/* Middle: social icons 18×18 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {/* LinkedIn */}
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
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@magdalenakruk"
              target="_blank" rel="noopener noreferrer"
              aria-label="YouTube"
              style={{ display: "inline-block", width: 18, height: 18 }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x=".5" y=".5" width="17" height="17" rx="1.5" stroke="rgb(18,18,18)"/>
                <path d="M13.47 6.37a1.43 1.43 0 0 0-1.01-1.01C11.58 5.1 9 5.1 9 5.1s-2.58 0-3.46.26A1.43 1.43 0 0 0 4.53 6.37C4.27 7.25 4.27 9 4.27 9s0 1.75.26 2.63a1.43 1.43 0 0 0 1.01 1.01C6.42 12.9 9 12.9 9 12.9s2.58 0 3.46-.26a1.43 1.43 0 0 0 1.01-1.01C13.73 10.75 13.73 9 13.73 9s0-1.75-.26-2.63ZM7.82 10.73V7.27L10.91 9l-3.09 1.73Z" fill="rgb(18,18,18)"/>
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

          {/* Subtitle — 26px / 29px line-height / Geist 500, matches magdalenakruk.pl */}
          <p
            style={{
              fontSize: 26,
              lineHeight: "29px",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              maxWidth: 600,
              marginBottom: 24,
              color: "rgb(18,18,18)",
            }}
          >
            Senior UX/UI &amp; Brand Designer blending strategy, story, and
            systems into brands and digital products{" "}
            <span style={{ color: "rgb(153,153,153)" }}>
              that are clear, memorable, and built to last.
            </span>
          </p>

          {/* ~30vh spacer — pushes "Selected work" below the initial viewport,
              matching the Framer layout where it scrolls into view */}
          <div style={{ height: "30vh", flexShrink: 0 }} />

          {/* Selected work header + thin separator */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              paddingBottom: 8,
              borderBottom: "1px solid rgb(230,230,230)",
              marginBottom: 12,
            }}
          >
            <span className="text-14" style={{ color: "var(--color-gray)" }}>Selected work</span>
            <span className="text-14" style={{ color: "var(--color-gray)" }}>({projects.length})</span>
          </div>

          {/* Project cards — full-width, 20px gap */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
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

          {/* Marquee — very bottom of the middle column scroll content */}
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
