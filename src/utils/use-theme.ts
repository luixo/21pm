import React from "react";
import { atom } from "nanostores";
import { useStore } from "@nanostores/react";

const KEY = "theme";

export const themeAtom = atom<"light" | "dark">("light");

export const useTheme = () => {
  const theme = useStore(themeAtom);

  const switchTheme = React.useCallback(
    () => themeAtom.set(theme === "light" ? "dark" : "light"),
    [theme],
  );

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(KEY, theme);
  }, [theme]);

  return [theme, switchTheme] as const;
};
