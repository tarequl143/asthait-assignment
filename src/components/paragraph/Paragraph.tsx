import { ParagraphProps } from "./types";
const colors = {
  white: "text-white",
  dark: "text-dark-600",
  gray: "text-main-paragraph",
  lightGray: "text-gray-200",
};

const sizes = {
  sm: "16px",
  md: "18px",
  lg: "20px",
};

export const Paragraph = ({
  content,
  color = "dark",
  size = "md",
}: ParagraphProps) => {
  return (
    <p
      className={`font-normal group-hover:text-white ${colors[color]} text-[${sizes[size]}]`}
    >
      {content}
    </p>
  );
};
