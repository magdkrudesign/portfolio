import Link from "next/link";

export default function PageFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-light-gray)",
        padding: "80px 0 32px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p className="text-heading2" style={{ marginBottom: "24px" }}>
          Let&apos;s work together.
        </p>
        <Link href="/contact" className="btn-primary">
          Get in touch →
        </Link>
      </div>

      <div className="divider" />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span className="text-14">Magdalena Kruk</span>
          <a
            href="https://www.linkedin.com/in/magdalenakruk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-14"
            style={{ color: "var(--color-gray)", textDecoration: "none" }}
          >
            LinkedIn ↗
          </a>
        </div>
        <span className="text-14" style={{ color: "var(--color-gray)" }}>
          © 2026 Magdalena Kruk. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
