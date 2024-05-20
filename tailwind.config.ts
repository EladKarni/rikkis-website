import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ECA214",
          "secondary": "#F33378",
          "accent": "#6533F3",
          "neutral": "#828282",
          "base-100": "#FFFFF1",
          "info": "#0083ba",
          "success": "#16ECAC",
          "warning": "#ffb700",
          "error": "#ff5b6e",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
