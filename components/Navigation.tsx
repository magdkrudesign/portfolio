"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Info" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
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
        {/* Logo */}
        <div style={{ width: "25%", flexShrink: 0 }}>
          <Link href="/" style={{ display: "inline-block" }} onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/2Q3brUlFCqNHgf1ZgYPX2jE1Q.svg"
              alt="Magdalena Kruk"
              style={{ height: "16px", display: "block" }}
            />
          </Link>
        </div>

        {/* Desktop nav links — hidden below md (768px) */}
        <div className="hidden md:flex" style={{ flex: 1, gap: "4px", alignItems: "center", paddingLeft: "16px" }}>
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
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
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA — hidden below md */}
        <div className="hidden md:flex" style={{ width: "25%", flexShrink: 0, justifyContent: "flex-end" }}>
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

        {/* Hamburger — visible only below md */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            color: "var(--color-black)",
            lineHeight: 1,
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {open ? "✕" : "+"}
        </button>
      </nav>

      {/* Mobile overlay — only rendered when open, shown via inline style */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: "var(--nav-h)",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            backgroundColor: "var(--color-white)",
            borderTop: "1px solid rgb(230,230,230)",
            display: "flex",
            flexDirection: "column",
            padding: "24px 20px",
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  textDecoration: "none",
                  fontSize: "32px",
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: "-0.04em",
                  color: isActive ? "var(--color-black)" : "var(--color-gray)",
                  padding: "14px 0",
                  borderBottom: "1px solid rgb(230,230,230)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:magdalena.kruk.design@gmail.com"
            style={{
              marginTop: "auto",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              color: "var(--color-gray)",
            }}
          >
            magdalena.kruk.design@gmail.com
          </a>
        </div>
      )}
    </>
  );
}
