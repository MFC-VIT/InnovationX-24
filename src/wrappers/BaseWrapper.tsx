import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const BaseWrapper = ({ children }: Props) => {
  return <div className="w-full min-h-fit h-screen">{children}</div>;
};

export default BaseWrapper;
