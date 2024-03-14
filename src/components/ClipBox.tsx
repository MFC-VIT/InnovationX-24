import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ClipBox = ({ children }: Props) => {
  return (
    <div className="w-fit p-4 border-[1px] border-bright relative">
      <>{children}</>
      <div className="--box w-2 aspect-square bg-bright absolute -bottom-1 -right-1"></div>
      <div className="--box w-2 aspect-square bg-bright absolute -bottom-1 -left-1"></div>
      <div className="--box w-2 aspect-square bg-bright absolute -top-1 -left-1"></div>
      <div className="--box w-2 aspect-square bg-bright absolute -top-1 -right-1"></div>
    </div>
  );
};

export default ClipBox;
