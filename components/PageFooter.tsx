import Link from "next/link";

// Each instance at 80px Geist is ~1800px wide — 4 per half fills any viewport
const SEGMENT = "Let's work together. ◆ ";
const HALF = SEGMENT.repeat(4);

export default function PageFooter() {
  return (
    <div>
      {/* 10vh before marquee */}
      <div style={{ height: "10vh" }} />

      {/* ── Marquee ── 80px Geist 500, white bg, black text, loops left ── */}
      <Link href="/contact" style={{ display: "block", textDecoration: "none" }}>
        <div className="marquee-outer" style={{ paddingBottom: 8, width: "100%" }}>
          <div className="marquee-track">
            <span className="marquee-text">
              {HALF}
            </span>
            <span className="marquee-text">
              {HALF}
            </span>
          </div>
        </div>
      </Link>

      {/* 10vh after marquee, before footer */}
      <div style={{ height: "10vh" }} />

      {/* ── Footer row ── */}
      <div className="footer-bar">
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span className="text-14">Magdalena Kruk</span>
          <a
            href="https://www.linkedin.com/in/magdalenakruk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-14"
            style={{ color: "var(--color-gray)", textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </div>
        <span className="text-12" style={{ color: "var(--color-gray)" }}>
          © 2026 Magdalena Kruk. All rights reserved.
        </span>
      </div>
    </div>
  );
}
