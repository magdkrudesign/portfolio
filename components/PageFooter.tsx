"use client";

import { useRouter } from "next/navigation";

const SEGMENT = "Let's work together · ";
// Repeat enough times to fill any screen width reliably
const HALF = SEGMENT.repeat(18);

export default function PageFooter() {
  const router = useRouter();

  return (
    <div
      className="marquee-outer"
      style={{ backgroundColor: "var(--color-black)", marginTop: 40 }}
      onClick={() => router.push("/contact")}
      role="link"
      aria-label="Let's work together — contact page"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && router.push("/contact")}
    >
      <div style={{ padding: "20px 0" }}>
        <div className="marquee-track">
          {/* Two identical halves — animation moves exactly one half = seamless loop */}
          <span
            style={{
              color: "var(--color-white)",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "-0.03em",
            }}
          >
            {HALF}
          </span>
          <span
            style={{
              color: "var(--color-white)",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "-0.03em",
            }}
          >
            {HALF}
          </span>
        </div>
      </div>
    </div>
  );
}
