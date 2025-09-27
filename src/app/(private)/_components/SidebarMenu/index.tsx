"use client";

import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@unidash/components/Button";
import { useSidebar } from "@unidash/components/Sidebar";

export function SidebarMenu() {
  const { isMobile, setOpenMobile } = useSidebar();

  if (!isMobile) {
    return null;
  }

  return (
    <Button type="button" variant="ghost" onClick={() => setOpenMobile(true)}>
      <ListIcon />
    </Button>
  );
}
