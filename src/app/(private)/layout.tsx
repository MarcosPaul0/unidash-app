import { ReactNode } from "react";
import { SidebarProvider } from "@unidash/components/Sidebar/sidebar.context";
import { SidebarSession } from "./_components/SidebarSession";
import { HeaderSession } from "./_components/HeaderSession";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarSession />

      <main className="w-[calc(100svw-320px)] ml-[320px] flex flex-col gap-8 p-8">
        <HeaderSession />

        {children}
      </main>
    </SidebarProvider>
  );
}
