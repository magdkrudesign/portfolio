import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "32px",
        padding: "0 20px",
        width: "100%",
      }}
    >
      {/* Left spacer */}
      <div style={{ width: "25%", flexShrink: 0 }} />

      {/* Center — CTA box */}
      <div
        style={{
          flex: 1,
          border: "1px solid var(--color-light-gray)",
          borderBottom: "none",
          padding: "80px 16px 32px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p className="text-heading2" style={{ marginBottom: "24px", textAlign: "center" }}>
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
      </div>

      {/* Right spacer */}
      <div style={{ width: "25%", flexShrink: 0 }} />
    </footer>
  );
}
