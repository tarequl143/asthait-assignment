import { CounterProps } from "./types";

export const Counter = ({ label, count }: CounterProps) => {
  return (
    <div className="inline-flex items-center">
      <span className="text-[36px] font-medium text-white leading-[62px]">
        {count}
      </span>
      <span className="text-[13px] font-normal text-white ml-2.5 w-[70px] inline-flex leading-5 capitalize">
        {label}
      </span>
    </div>
  );
};
