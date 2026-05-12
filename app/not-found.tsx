import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        paddingTop: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "24px",
        textAlign: "center",
        padding: "60px 20px 20px",
      }}
    >
      <h1 className="text-heading2-l" style={{ color: "var(--color-light-gray)" }}>
        404
      </h1>
      <p className="text-16" style={{ color: "var(--color-gray)" }}>
        This page doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-primary">
        Back to home
      </Link>
    </main>
  );
}
