import { ButtonProps } from "./types";

export const Button = ({
  label,
  size = "medium",
  variant = "primary",
  icon,
  ...props
}: ButtonProps) => {
  const buttonSize = size === "large" ? "text-[18px]" : "text-base";
  const buttonVarient =
    variant === "primary"
      ? "bg-primary-100 text-white"
      : "border border-main-text text-main-text";

  return (
    <button
      type="button"
      className={`inline-flex items-center p-4 leading-6 rounded-[10px] font-semibold ${[
        buttonSize,
        buttonVarient,
      ].join(" ")}`}
      {...props}
    >
      {label || "Button"}
      {icon && <span className="ml-2.5">{icon}</span>}
    </button>
  );
};
