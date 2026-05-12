import Link from "next/link";
import Image from "next/image";
import { Project, getCategoryLabel } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="project-card">
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/10",
          overflow: "hidden",
          backgroundColor: "var(--color-light-gray)",
        }}
      >
        <Image
          src={project.previewImage}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <span className="text-14" style={{ fontWeight: 500 }}>
            {project.title}
          </span>
          <span className="text-12" style={{ color: "var(--color-gray)" }}>
            {project.description}
          </span>
        </div>
        <span
          className="text-12"
          style={{ color: "var(--color-gray)", whiteSpace: "nowrap" }}
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
  );
}
