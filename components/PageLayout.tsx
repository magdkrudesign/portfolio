import React from "react";

interface PageLayoutProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
  /** Case study pages: mobile order left → right → middle */
  caseStudy?: boolean;
}

export default function PageLayout({ left, right, children, caseStudy }: PageLayoutProps) {
  return (
    <main className={`page-layout${caseStudy ? " page-layout--case" : ""}`}>
      <div className="col-left">{left ?? null}</div>
      <div className="col-middle">{children}</div>
      <div className="col-right">{right ?? null}</div>
    </main>
  );
}
