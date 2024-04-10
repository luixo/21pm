import React from "react";
import cn from "classnames";

import type { Color } from "../utils/colors";
import { useStore } from "@nanostores/react";
import { themeAtom } from "../utils/use-theme";

export type Colors = {
  light: {
    background: Color;
    text: Color;
  };
  dark: {
    background: Color;
    text: Color;
  };
};

type Props = React.PropsWithChildren<{
  className?: string | undefined;
  colors: Colors;
  style?: React.CSSProperties | undefined;
}>;

const getBackgroundColor = (color: Color): string => {
  switch (color) {
    case "black":
      return "bg-black";
    case "yellow":
      return "bg-yellow";
    case "white":
      return "bg-white";
    case "green":
      return "bg-green";
    case "peach":
      return "bg-peach";
  }
};

const getTextColor = (color: Color): string => {
  switch (color) {
    case "black":
      return "text-black";
    case "yellow":
      return "text-yellow";
    case "white":
      return "text-white";
    case "green":
      return "text-green";
    case "peach":
      return "text-peach";
  }
};

export const Card: React.FC<Props> = ({
  children,
  className,
  style,
  colors,
}) => {
  const theme = useStore(themeAtom);
  return (
    <div
      className={cn(
        "p-4 transition-all",
        getBackgroundColor(colors[theme].background),
        getTextColor(colors[theme].text),
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};
