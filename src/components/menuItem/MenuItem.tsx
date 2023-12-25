import Image from "next/image";
import Link from "next/link";
import { MenuItemProps } from "./types";
const downAngel = "/assets/down-angel.svg";

export const MenuItem = ({
  label,
  hasSubMenu = false,
  url = "#",
  isNew,
  icon,
  ...props
}: MenuItemProps) => {
  return (
    <Link
      href={url}
      {...props}
      className={`inline-flex items-center leading-6 text-white relative`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}{" "}
      {hasSubMenu && (
        <Image
          className="ml-2 translate-y-[2px]"
          src={downAngel}
          width={24}
          height={24}
          alt="Down Angle"
        />
      )}
      {isNew && (
        <span className="absolute left-full ml-1 bg-[rgba(255, 255, 255, 0.10)] text-[12px] leading-[18px] text-white font-medium py-0.5 px-2 border border-[rgba(255, 255, 255, 0.30)] rounded-2xl">
          New
        </span>
      )}
    </Link>
  );
};
