import { ReactNode } from "react";

export interface MenuItemProps {
  label: string;
  hasSubMenu?: boolean;
  url: string;
  isNew?: boolean;
  icon?: ReactNode;
}
