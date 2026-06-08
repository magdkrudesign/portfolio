"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Info" },
  { href: "/work", label: "Work" },
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
        height: "var(--nav-h)",
        zIndex: 100,
        backgroundColor: "var(--color-white)",
        borderBottom: "1px solid rgb(230,230,230)",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      {/* Logo — 25% width matching left column */}
      <div style={{ width: "25%", flexShrink: 0 }}>
        <Link href="/" style={{ display: "inline-block" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://framerusercontent.com/images/2Q3brUlFCqNHgf1ZgYPX2jE1Q.svg"
            alt="Magdalena Kruk"
            style={{ height: "16px", display: "block" }}
          />
        </Link>
      </div>

      {/* Nav links — centered */}
      <div
        style={{
          flex: 1,
          display: "flex",
          gap: "4px",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: "16px",
        }}
      >
        {navLinks.map((link, i) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          const isLast = i === navLinks.length - 1;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: isActive ? 600 : 400,
                letterSpacing: "-0.03em",
                color: isActive ? "var(--color-black)" : "var(--color-gray)",
              }}
            >
              {link.label}{isLast ? "" : ","}
            </Link>
          );
        })}
      </div>

      {/* Get in touch — 25% width matching right column */}
      <div
        style={{
          width: "25%",
          flexShrink: 0,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <a
          href="mailto:magdalena.kruk.design@gmail.com"
          style={{
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            color: "var(--color-black)",
          }}
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
