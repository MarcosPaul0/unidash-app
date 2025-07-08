"use client";

import Link from "next/link";
import { SidebarLinkProps } from "./sidebarLinkProps.interface";
import { cn } from "@unidash/lib/cn";
import { usePathname } from "next/navigation";

export function SidebarLink({
  icon,
  text,
  className,
  ...linkProps
}: SidebarLinkProps) {
  const pathname = usePathname();

  const masterArgument = linkProps.href.toString().split("/")[1];

  const isSelected = pathname.split("/").includes(masterArgument);

  return (
    <Link
      {...linkProps}
      className={cn(
        `
          p-4 rounded-2xl w-full text-button-foreground flex items-center
          gap-2 hover:bg-primary 
        `,
        isSelected ? "bg-primary" : "bg-transparent",
        className
      )}
    >
      <i className="text-2xl">{icon}</i>
      {text}
    </Link>
  );
}
