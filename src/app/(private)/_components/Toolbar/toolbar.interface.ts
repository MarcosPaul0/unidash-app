import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

export interface ToolbarProps {
  breadcrumbItems?: {
    label: string;
    link: string | Url;
  }[];
  breadcrumbPage?: string;

  addLink?: {
    label: string;
    link: string | Url;
  };
  children?: ReactNode;
}
