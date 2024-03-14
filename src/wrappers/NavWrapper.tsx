import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const NavWrapper = ({ children }: Props) => {
  return <div className="w-full h-[8%]">{children}</div>;
};

export default NavWrapper;
