import { SquaresFourIcon } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@unidash/assets/svgs/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@unidash/components/Sidebar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { SidebarLink } from "../SidebarLink";
import { SidebarSignOutButton } from "../SidebarSignOutButton";

export function SidebarSession() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="gap-3">
          <SidebarLink
            text="Dashboard"
            href={APP_ROUTES.private.dashboard}
            icon={<SquaresFourIcon size={24} />}
          />
          <SidebarLink
            text="Cursos"
            href={APP_ROUTES.private.courses}
            icon={<SquaresFourIcon size={24} />}
          />
          <SidebarLink
            text="Cursos"
            href={APP_ROUTES.private.courses}
            icon={<SquaresFourIcon size={24} />}
          />
          <SidebarLink
            text="Cursos"
            href={APP_ROUTES.private.courses}
            icon={<SquaresFourIcon size={24} />}
          />
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarSignOutButton />
      </SidebarFooter>
    </Sidebar>
  );
}
