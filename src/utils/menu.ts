import type { Colors } from "../components/card";

type MenuItem = {
  name: string;
  price: number;
};
type MenuSection = {
  header?: string;
  tip?: string;
  items: MenuItem[];
};
export type MenuCard = {
  title: string;
  sections: MenuSection[];
  colors: Colors;
};
