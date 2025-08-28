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
        muted: "var(--muted)",
        border: "var(--border)",
        red: {
          DEFAULT: "var(--red)",
          dim: "var(--red-dim)",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-roboto)", "sans-serif"],
        sans: ["var(--font-roboto)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(-10%, -10%) scale(1)" },
          "50%": { transform: "translate(10%, 10%) scale(1.1)" },
        },
        "icon-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" },
        },
      },
      animation: {
        blob: "blob 20s ease-in-out infinite",
        "icon-bounce": "icon-bounce 15s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
