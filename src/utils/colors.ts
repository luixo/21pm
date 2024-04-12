export type Color = "white" | "yellow" | "black" | "green" | "peach";

export const colors: Record<Color | "transparent", string> = {
  yellow: "#F9B61A",
  white: "#FFF",
  black: "#000",
  green: "#0E9C49",
  peach: "#ED9C61",
  transparent: "rgba(0,0,0,0)",
};
