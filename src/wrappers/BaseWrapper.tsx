import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const BaseWrapper = ({ children }: Props) => {
  return (
    <div className="w-full bg-back flex flex-col overflow-x-hidden">
      {children}
    </div>
  );
};

export default BaseWrapper;
