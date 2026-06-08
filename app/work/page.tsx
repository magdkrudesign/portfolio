"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, categories } from "@/lib/data";
import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory == null
    ? projects
    : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <PageLayout>
      {/* ── Header row: "My Work." left + filters right ── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "var(--color-white)",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 32,
          paddingBottom: 16,
        }}
      >
        <h1 className="text-heading1">My Work.</h1>

        {/* Filter list — small 12px, right-aligned, active has border */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, paddingTop: 8, flexShrink: 0 }}>
          <button
            onClick={() => setActiveCategory(null)}
            style={{
              background: "none",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              fontFamily: "inherit",
              color: "var(--color-black)",
              padding: "2px 6px",
              border: activeCategory === null ? "1px solid rgb(18,18,18)" : "1px solid transparent",
              lineHeight: "1.4em",
            }}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(activeCategory === cat.slug ? null : cat.slug)}
              style={{
                background: "none",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "-0.03em",
                fontFamily: "inherit",
                color: activeCategory === cat.slug ? "var(--color-black)" : "var(--color-gray)",
                padding: "2px 6px",
                border: activeCategory === cat.slug ? "1px solid rgb(18,18,18)" : "1px solid transparent",
                lineHeight: "1.4em",
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      <div className="divider" style={{ marginBottom: 16 }} />

      {/* 2-column grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px", paddingBottom: 80 }}>
        {filtered.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className="project-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.previewImage}
              alt={project.title}
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
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

      {filtered.length === 0 && (
        <p className="text-14" style={{ color: "var(--color-gray)", paddingTop: 40 }}>
          No projects in this category.
        </p>
      )}
    </PageLayout>
  );
}
