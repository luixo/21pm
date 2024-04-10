import type { Colors } from "../components/card";
import type { Locale } from "./locale";

type MenuItem = {
  title: Text;
  subtitle: Text;
};
type MenuSection = {
  header?: Text;
  tip?: Text;
  items: MenuItem[];
};
type Text = Record<Locale, string>;
export type MenuCard = {
  title: Text;
  sections: MenuSection[];
  colors: Colors;
};
