import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  plugins: [require("daisyui")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        white: `var(${"--white"})`,
        black: `var(${"--black"})`,
        green: `var(${"--green"})`,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        white: `var(${"--white"})`,
        background: `var(${"--background"})`,
        green: `var(${"--green"})`,
      },
      colors: {
        white: `var(${"--white"})`,
        black: `var(${"--black"})`,
        background: `var(${"--background"})`,
        green: `var(${"--green"})`,
      },
      borderRadius: {
        header: "0 0 12px 12px",
        bubbleLeft: "22px 22px 22px 0px",
        bubbleRight: "22px 22px 22px 0px",
      },
      boxShadow: {
        general: `var(${"--shadow"})`,
        generalReverse: `var(${"--shadow-reverse"})`,
      },
      clipPath: {
        bubbleLeft: "0px 4px 8px 0px rgba(44, 44, 44, 0.10)",
      },
    },
  },
};
export default config;
