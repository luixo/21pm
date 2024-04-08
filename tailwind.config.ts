import type { Config } from "tailwindcss";
import type { Color } from "./src/utils/colors";

const colors: Record<Color | "transparent", string> = {
  yellow: "#F9B61A",
  white: "#FFF",
  black: "#000",
  green: "#0E9C49",
  peach: "#ED9C61",
  transparent: "rgba(0,0,0,0)",
};

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
  },
  plugins: [],
};

export default config;
