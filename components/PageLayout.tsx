import React from "react";

interface PageLayoutProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Shared 3-column layout used on every page.
 * - Left (25vw): fixed, never scrolls, border-right
 * - Middle (50vw): sole scroll region, overflow-y scroll
 * - Right (25vw): fixed, never scrolls, border-left
 * All columns sit in a fixed grid starting at top:nav-h.
 */
export default function PageLayout({ left, right, children }: PageLayoutProps) {
  return (
    <main className="page-layout">
      <div className="col-left">{left ?? null}</div>
      <div className="col-middle">{children}</div>
      <div className="col-right">{right ?? null}</div>
    </main>
  );
}
