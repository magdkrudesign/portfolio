import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "rgb(255, 255, 255)",
        black: "rgb(18, 18, 18)",
        "light-gray": "rgb(227, 227, 227)",
        gray: "rgb(117, 117, 117)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "12": ["12px", { lineHeight: "1.4em", letterSpacing: "-0.03em" }],
        "14": ["14px", { lineHeight: "1.4em", letterSpacing: "-0.03em" }],
        "16": ["16px", { lineHeight: "1.4em", letterSpacing: "-0.03em" }],
        "18": ["18px", { lineHeight: "1.4em", letterSpacing: "-0.03em" }],
        "26": ["26px", { lineHeight: "1.1em", letterSpacing: "-0.04em" }],
        "56": ["56px", { lineHeight: "1em", letterSpacing: "-0.05em" }],
        "80": ["80px", { lineHeight: "1em", letterSpacing: "-0.04em" }],
      },
    },
  },
  plugins: [],
};

export default config;
