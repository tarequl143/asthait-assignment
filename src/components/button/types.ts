import { ReactNode } from "react";

export interface ButtonProps {
  label: string;
  size?: "medium" | "large";
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  onClick?: () => void;
}
