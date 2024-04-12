import type { Config } from "tailwindcss";
import { colors } from "./src/utils/colors";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,astro}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      header: ['"DrukWideCy"', "mono"],
      body: ['"GraphikMedium"', "sans"],
      subheader: ['"QuirohHeavy"', "sans"],
    },
    colors,
    screens: {
      sm: "320px",
      md: "480px",
      lg: "640px",
      xl: "768px",
    },
  },
  plugins: [],
};

export default config;
