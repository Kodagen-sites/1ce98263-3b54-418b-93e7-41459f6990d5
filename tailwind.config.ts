import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pearl & Platinum — light theme
        bg: "#FBFBFA",
        surface: "#EAEAEA",
        primary: "#3A3D45", // dark slate ink — buttons, emphasis
        accent: "#9CA0A8", // platinum gray
        ink: "#3A3D45",
        "bg-contrast": "#3A3D45",
      },
      fontFamily: {
        display: ["var(--font-display)", "Bricolage Grotesque", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
