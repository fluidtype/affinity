import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        border: "var(--border)",
        red: {
          DEFAULT: "var(--red)",
          dim: "var(--red-dim)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(-10%, -10%) scale(1)" },
          "50%": { transform: "translate(10%, 10%) scale(1.1)" },
        },
      },
      animation: {
        blob: "blob 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
