import { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface SidebarLinkProps extends LinkProps {
  text: string;
  icon: ReactNode;
  className?: string;
}
