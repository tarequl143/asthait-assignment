import { useCallback } from "react";
import { HeadingProps } from "./types";

export const Heading = ({ level, title, color = "dark" }: HeadingProps) => {
  const getHeading = useCallback(() => {
    let heading;
    switch (level) {
      case 6:
        heading = (
          <h6
            className={`text-[18px] font-semibold leading-[26px] group-hover:text-white ${
              color === "light" ? "text-white" : "text-[#111928]"
            }`}
          >
            {title}
          </h6>
        );
        break;

      case 5:
        heading = (
          <h5
            className={`text-[20px] font-semibold leading-[28px] group-hover:text-white ${
              color === "light" ? "text-white" : "text-[#111928]"
            }`}
          >
            {title}
          </h5>
        );
        break;
      case 4:
        heading = (
          <h4
            className={`text-[25px] font-semibold leading-[35px] group-hover:text-white ${
              color === "light" ? "text-white" : "text-[#111928]"
            }`}
          >
            {title}
          </h4>
        );
        break;
      case 3:
        heading = (
          <h3
            className={`text-[35px] font-semibold leading-[45px] group-hover:text-white ${
              color === "light" ? "text-white" : "text-[#111928]"
            }`}
          >
            {title}
          </h3>
        );
        break;
      case 2:
        heading = (
          <h2
            className={`text-[28px] md:text-[45px] font-semibold leading-[40px] md:leading-[55px] group-hover:text-white ${
              color === "light" ? "text-white" : "text-[#111928]"
            }`}
          >
            {title}
          </h2>
        );
        break;
      default:
        heading = (
          <h1
            className={`text-[32px] md:text-[55px] font-semibold leading-[48px] md:leading-[68px] group-hover:text-white ${
              color === "light" ? "text-white" : "text-[#111928]"
            }`}
          >
            {title}
          </h1>
        );
        break;
    }
    return heading;
  }, [color, level, title]);

  return getHeading();
};
