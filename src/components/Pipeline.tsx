import { ReactNode } from "react";
import Marquee from "react-fast-marquee";
interface Props {
  children: ReactNode;
  shift?: boolean;
  label?: string;
}
const Pipeline = ({ children, shift, label }: Props) => {
  return (
    <div className="p-4 border-[2px] border-secondary relative">
      <div className="w-full h-full border-2 border-lightblue absolute top-0 left-0 blur-xl"></div>
      <span
        className={`h-6 px-4 flex items-center font-grotesk text-sm text-white bg-secondary absolute ${
          shift ? "-top-6 right-0" : "-top-6 left-0"
        }`}
      >
        {label ?? "For Community"}
      </span>
      <Marquee>
        <div className="p-2 overflow-hidden">{children}</div>
      </Marquee>
    </div>
  );
};

export default Pipeline;
