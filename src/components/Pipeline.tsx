import { ReactNode } from "react";
import Marquee from "react-fast-marquee";
interface Props {
  children: ReactNode;
  shift?: boolean;
  label?: string;
  small?: boolean;
  color?: string;
}
const Pipeline = ({ children, shift, label, small, color }: Props) => {
  return (
    <div
      className={`${small ? "p-1 w-[25%]" : "p-4"} border-[2px] ${
        color ? `border-[${color}]` : "border-secondary"
      } relative`}
    >
      <div
        className={`w-full h-full ${
          small ? "border-[1px]" : "border-2"
        } border-lightblue absolute top-0 left-0 blur-xl`}
      ></div>
      {label && (
        <span
          className={`${
            small ? "px-2 py-1" : "h-6 px-4"
          }  flex items-center font-grotesk text-sm text-white bg-secondary absolute ${
            shift ? "-top-6 right-0" : "-top-6 left-0"
          }`}
        >
          {label ?? "For Community"}
        </span>
      )}
      <Marquee>
        <div className={`${small ? "" : "p-2"} overflow-hidden`}>
          {children}
        </div>
      </Marquee>
    </div>
  );
};

export default Pipeline;
