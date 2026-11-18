import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF9F5",
        sand: "#F0EBDD",
        sage: "#A6B59A",
        forest: "#244C3A",
        ink: "#26332B",
        apricot: "#D99452",
        muted: "#6B7A70",
        line: "#E4E0D4",
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "sans-serif"],
        serif: ["Noto Serif SC", "Songti SC", "Source Han Serif SC", "Georgia", "serif"],
      },
      borderRadius: {
        card: "14px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(38,51,43,.04), 0 12px 32px -20px rgba(36,76,58,.28)",
        lift: "0 18px 50px -28px rgba(36,76,58,.45)",
      },
      maxWidth: {
        prose: "68ch",
        page: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up .6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
