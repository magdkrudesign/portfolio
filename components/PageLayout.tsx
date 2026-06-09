import React from "react";

interface PageLayoutProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
}

export default function PageLayout({ left, right, children }: PageLayoutProps) {
  return (
    <main className="page-layout">
      <div className="col-left">{left ?? null}</div>
      <div className="col-middle">{children}</div>
      <div className="col-right">{right ?? null}</div>
    </main>
  );
}
