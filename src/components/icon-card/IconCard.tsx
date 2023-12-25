import Image from "next/image";
import { Heading } from "../heading/Heading";
import { Paragraph } from "../paragraph/Paragraph";
import { IconCardProps } from "./types";

export const IconCard = ({
  icon = "/assets/share.svg",
  text,
  title,
}: IconCardProps) => {
  return (
    <div
      className={`inline-flex w-full relative z-10 md:max-w-[320px] min-w-[300px] py-8 px-5 rounded-2xl flex-col bg-white overflow-hidden group hover:bg-gradient-to-r hover:from-[#3F68FF] hover:to-[#CD63FF]`}
    >
      <Image
        src="/assets/home-grid-bg-2.png"
        width={722}
        height={470}
        alt="Share"
        className="absolute z-20 -bottom-[100px] left-0 group-hover:hidden"
      />
      <Image
        src="/assets/home-grid-bg-2-hover.png"
        width={722}
        height={470}
        alt="Share"
        className="absolute z-20 -bottom-[100px] left-0 hidden group-hover:inline-flex"
      />
      <span className="inline-flex items-center justify-center bg-[#F0F2FF] w-[54px] h-[54px] rounded-full mb-8 group-hover:bg-white">
        <Image src={icon} width={32} height={32} alt="Share" />
      </span>
      <Heading title={title} level={5} color="dark" />
      <div className="flex w-full h-3"></div>
      <Paragraph content={text} color="gray" />
    </div>
  );
};
