"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, categories } from "@/lib/data";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered =
    activeCategory == null
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <main>
      <div className="three-col">
        {/* LEFT — empty sticky */}
        <div className="col-left" />

        {/* MIDDLE COLUMN */}
        <div className="col-middle" style={{ paddingBottom: "120px" }}>
          {/* Header row: title + filters */}
          <div
            style={{
              position: "sticky",
              top: "0",
              zIndex: 1,
              backgroundColor: "var(--color-white)",
              paddingBottom: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "32px",
                marginBottom: "24px",
              }}
            >
              <h1 className="text-heading1">My Work.</h1>

              {/* Category filters — vertical text list */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "2px",
                  paddingTop: "8px",
                  flexShrink: 0,
                }}
              >
                <button
                  onClick={() => setActiveCategory(null)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: activeCategory === null ? 600 : 400,
                    letterSpacing: "-0.03em",
                    color: activeCategory === null ? "var(--color-black)" : "var(--color-gray)",
                    padding: "2px 0",
                    fontFamily: "inherit",
                  }}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === cat.slug ? null : cat.slug
                      )
                    }
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: activeCategory === cat.slug ? 600 : 400,
                      letterSpacing: "-0.03em",
                      color:
                        activeCategory === cat.slug
                          ? "var(--color-black)"
                          : "var(--color-gray)",
                      padding: "2px 0",
                      fontFamily: "inherit",
                    }}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="divider" />
          </div>

          {/* 2-column grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px 12px",
              paddingTop: "12px",
            }}
          >
            {filtered.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="project-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.previewImage}
                  alt={project.title}
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
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

          {filtered.length === 0 && (
            <p className="text-14" style={{ color: "var(--color-gray)", paddingTop: "40px" }}>
              No projects in this category.
            </p>
          )}
        </div>

        {/* RIGHT — empty sticky */}
        <div className="col-right" />
      </div>
    </main>
  );
}
