import {
  BookBookmarkIcon,
  ChalkboardTeacherIcon,
  SquaresFourIcon,
  StudentIcon,
} from "@phosphor-icons/react/dist/ssr";
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
import { SidebarIndicatorsCollapsible } from "../SidebarIndicatorsCollapsible";

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
            icon={<SquaresFourIcon />}
          />
          <SidebarLink
            text="Cursos"
            href={APP_ROUTES.private.course}
            icon={<BookBookmarkIcon />}
          />
          <SidebarLink
            text="Alunos"
            href={APP_ROUTES.private.student}
            icon={<StudentIcon />}
          />
          <SidebarLink
            text="Docentes"
            href={APP_ROUTES.private.teacher}
            icon={<ChalkboardTeacherIcon />}
          />

          <SidebarIndicatorsCollapsible />
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarSignOutButton />
      </SidebarFooter>
    </Sidebar>
  );
}
