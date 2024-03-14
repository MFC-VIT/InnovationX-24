import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const NavWrapper = ({ children }: Props) => {
  return <div className="w-full h-[12%] bg-white">{children}</div>;
};

export default NavWrapper;
