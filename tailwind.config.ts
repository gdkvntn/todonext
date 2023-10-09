import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        cabin: ["Cabin Condensed", " sans-serif"],
      },
      colors: {
        background: "#212832",
        yellow: "#FED36A",
        white: "#FFFFFF",
        gray: {
          100: "#8CAAB9",
          200: "#6F8793",
          300: "#455A64",
          400: "#617D8A",
        },
        black: {
          100: "#263238",
          200: "#000000",
        },
      },
      animation: {
        "spin-slow": "rotate 2s ease-in-out infinite",
      },
      keyframes: {
        rotate: {
          "0%, 100%": { transform: "rotate(-30deg)" },
          "50%": { transform: "rotate(30deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
