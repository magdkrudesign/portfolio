import Link from "next/link";

// Each instance at 80px Geist is ~1800px wide — 4 per half fills any viewport
const SEGMENT = "Let's work together. ◆ ";
const HALF = SEGMENT.repeat(4);

export default function PageFooter() {
  return (
    <div style={{ marginTop: 80 }}>
      {/* ── Marquee ── 80px Geist 500, white bg, black text, loops left ── */}
      <Link href="/contact" style={{ display: "block", textDecoration: "none" }}>
        <div className="marquee-outer" style={{ paddingBottom: 8 }}>
          <div className="marquee-track">
            <span
              style={{
                fontSize: 80,
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: "1em",
                color: "rgb(18,18,18)",
                fontFamily: "inherit",
              }}
            >
              {HALF}
            </span>
            <span
              style={{
                fontSize: 80,
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: "1em",
                color: "rgb(18,18,18)",
                fontFamily: "inherit",
              }}
            >
              {HALF}
            </span>
          </div>
        </div>
      </Link>

      {/* ── Footer row ── immediately below marquee, no spacer ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          padding: "16px 0 40px",
          borderTop: "1px solid rgb(230,230,230)",
        }}
      >
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
