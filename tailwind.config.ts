import type {Config} from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        globalBg: `var(${"--global-bg"})`,
        globalBgInvert: `var(${"--global-bg-invert"})`,
      },
      colors: {
        globalBgInvert: `var(${"--global-bg-invert"})`,
      },
      borderColor: {
        badgesPurpleBorder: `var(${"--badges-purple-border"})`,
      },
    },
  },
  plugins: [],
};
export default config;
