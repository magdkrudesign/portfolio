"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, categories, getCategoryLabel } from "@/lib/data";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered =
    activeCategory == null
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <main style={{ paddingTop: "60px" }}>
      <div className="three-col">
        {/* LEFT — empty sticky column */}
        <div className="col-left" />

        {/* MIDDLE COLUMN */}
        <div className="col-middle" style={{ paddingBottom: "100px" }}>
          {/* Sticky header */}
          <div
            style={{
              position: "sticky",
              top: "60px",
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
                gap: "24px",
                marginBottom: "24px",
              }}
            >
              <h1 className="text-heading1">My Work.</h1>
              {/* Category filters */}
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  paddingTop: "8px",
                }}
              >
                <button
                  className={`category-pill ${activeCategory === null ? "active" : ""}`}
                  onClick={() => setActiveCategory(null)}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    className={`category-pill ${activeCategory === cat.slug ? "active" : ""}`}
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === cat.slug ? null : cat.slug
                      )
                    }
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="divider" />
          </div>

          {/* Projects grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px",
              paddingTop: "12px",
            }}
          >
            {filtered.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="project-card"
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    backgroundColor: "var(--color-light-gray)",
                  }}
                >
                  <Image
                    src={project.previewImage}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "8px",
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
                <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-12"
                      style={{
                        padding: "2px 8px",
                        border: "1px solid var(--color-light-gray)",
                        color: "var(--color-gray)",
                      }}
                    >
                      {getCategoryLabel(cat)}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p
              className="text-14"
              style={{ color: "var(--color-gray)", paddingTop: "40px" }}
            >
              No projects in this category yet.
            </p>
          )}
        </div>

        {/* RIGHT — empty sticky column */}
        <div className="col-right" />
      </div>
    </main>
  );
}
