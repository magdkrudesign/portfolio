"use client";

import { useState } from "react";
import type { Metadata } from "next";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <div className="three-col">
        {/* LEFT — empty */}
        <div className="col-left" />

        {/* MIDDLE COLUMN */}
        <div
          className="col-middle"
          style={{ paddingBottom: "120px", minHeight: "100vh" }}
        >
          {/* Title */}
          <div style={{ marginBottom: "40px" }}>
            <h1
              className="text-heading1"
              style={{ marginBottom: "16px" }}
            >
              Reach out.
            </h1>
            <p
              className="text-16"
              style={{ maxWidth: "520px", color: "var(--color-gray)" }}
            >
              I&apos;d love to hear from you — whether you&apos;re looking to
              collaborate on a project, talk about brand or product design, or
              simply say hello.
            </p>
          </div>

          {/* Quick links */}
          <div
            style={{
              display: "flex",
              gap: "4px",
              marginBottom: "40px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:magdalena.kruk.design@gmail.com"
              className="btn-primary"
            >
              magdalena.kruk.design@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/magdalenakruk/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="divider" style={{ marginBottom: "40px" }} />

          {/* Form */}
          {status === "sent" ? (
            <div
              style={{
                padding: "40px 0",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <h2 className="text-heading3">Message sent ✓</h2>
              <p className="text-14" style={{ color: "var(--color-gray)" }}>
                Thank you! I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                maxWidth: "560px",
              }}
            >
              <div className="form-field">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="form-input"
                  style={{ resize: "vertical" }}
                />
              </div>

              {status === "error" && (
                <p className="text-12" style={{ color: "rgb(200, 50, 50)" }}>
                  Something went wrong. Please email me directly.
                </p>
              )}

              <div>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === "sending"}
                  style={{ opacity: status === "sending" ? 0.6 : 1 }}
                >
                  {status === "sending" ? "Sending…" : "Send message →"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* RIGHT — empty */}
        <div className="col-right" />
      </div>
    </main>
  );
}
