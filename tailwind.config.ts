import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        fadeInAnimation:{
          "0%": {opacity: "0.6", filter: "blur(0.5px)"},
          "100%": {opacity: "1", filter: "blur(0px)"}
        },
        moveDownAnimation:{
          "0%": {opacity: "0.6", filter: "blur(0.2px)", transform: "translateY(-4px)" },
          "100%": {opacity: "1", filter: "blur(0px)", transform: "translateY(0px)" }
        },
        jump: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },  // Start and end at the same place
          '50%': { transform: 'translateY(-6px) scale(1.02)',boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)' },    // Jump up at 50%
        },
      },
      animation:{
        fadeInAnimation: "fadeInAnimation 800ms ease-in-out",
        moveDownAnimation: "moveDownAnimation 1600ms ease-in-out",
        jump: 'jump 3200ms ease-in-out infinite'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
