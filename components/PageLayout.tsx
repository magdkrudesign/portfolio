import React from "react";

interface PageLayoutProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  /** Case study pages: mobile order left → right → middle */
  caseStudy?: boolean;
}

export default function PageLayout({ left, right, children, footer, caseStudy }: PageLayoutProps) {
  return (
    <>
      <main className={`page-layout${caseStudy ? " page-layout--case" : ""}`}>
        <div className="col-left">{left ?? null}</div>
        <div className="col-middle">
          {children}
          {/* Desktop: footer stays inside scrollable col-middle */}
          <div className="footer-in-col">{footer}</div>
        </div>
        <div className="col-right">{right ?? null}</div>
      </main>
      {/* Mobile: footer renders AFTER all columns (below the grid) */}
      <div className="footer-below-grid">{footer}</div>
    </>
  );
}
