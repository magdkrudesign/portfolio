"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "var(--color-white)",
        borderBottom: "1px solid var(--color-light-gray)",
        height: "60px",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        justifyContent: "space-between",
      }}
    >
      {/* Logo / Name */}
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "var(--color-black)",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "-0.03em",
        }}
      >
        Magdalena Kruk
      </Link>

      {/* Nav links */}
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                color: isActive
                  ? "var(--color-black)"
                  : "var(--color-gray)",
                transition: "color 0.15s ease",
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <a
        href="mailto:magdalena.kruk.design@gmail.com"
        className="btn-primary"
        style={{ fontSize: "13px", padding: "6px 12px" }}
      >
        Get in touch
      </a>
    </nav>
  );
}
