import type React from "react";

import { useTheme } from "../utils/use-theme";
import { Switch } from "./switch";

export const ThemeSwitch: React.FC = () => {
  const [theme, switchTheme] = useTheme();
  return <Switch onCheckedChange={switchTheme} checked={theme === "dark"} />;
};
