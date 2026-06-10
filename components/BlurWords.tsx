"use client";

import React from "react";

interface BlurWordsProps {
  text: string;
  /** Base delay before first word (ms) */
  delay?: number;
  /** Stagger between each word (ms) */
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "p" | "span";
}

/**
 * Splits text into words, each word fades in with blur + translateY stagger.
 * Matches the Framer animation on magdalenakruk.pl
 */
export default function BlurWords({
  text,
  delay = 0,
  stagger = 65,
  className,
  style,
  as: Tag = "span",
}: BlurWordsProps) {
  const words = text.split(" ").filter(Boolean);

  return (
    <Tag className={className} style={style}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: 0,
            filter: "blur(10px)",
            transform: "translateY(8px)",
            willChange: "transform",
            animation: `blurWordIn 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`,
            animationDelay: `${delay + i * stagger}ms`,
            marginRight: i < words.length - 1 ? "0.25em" : 0,
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}
