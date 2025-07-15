import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@unidash/components/Collapsible";
import { SidebarLink } from "../SidebarLink";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CaretDownIcon, ChartLineUpIcon } from "@phosphor-icons/react/dist/ssr";

export function SidebarIndicatorsCollapsible() {
  return (
    <Collapsible>
      <CollapsibleTrigger className="w-full">
        <span
          aria-label="button"
          className={`
              py-2 px-4 rounded-lg w-full text-button-foreground flex items-center
              gap-2 hover:bg-primary
            `}
        >
          <i className="text-2xl">
            <ChartLineUpIcon />
          </i>
          Indicadores
          <i className="text-sm ml-auto">
            <CaretDownIcon />
          </i>
        </span>
      </CollapsibleTrigger>

      <CollapsibleContent className="ml-4 mt-2 flex flex-col gap-1">
        <SidebarLink
          text="Curso"
          href={APP_ROUTES.private.courseIndicator}
          size="sm"
        />
        <SidebarLink
          text="Coordenação"
          href={APP_ROUTES.private.courseCoordinationIndicator}
          size="sm"
        />
        <SidebarLink
          text="TCC"
          href={APP_ROUTES.private.courseCompletionWorkIndicator}
          size="sm"
        />
        <SidebarLink
          text="Atv. complementar"
          href={APP_ROUTES.private.courseComplementaryActivities}
          size="sm"
        />
        <SidebarLink
          text="Atv. de extensão"
          href={APP_ROUTES.private.courseExtensionActivitiesIndicator}
          size="sm"
        />
        <SidebarLink
          text="Estágio"
          href={APP_ROUTES.private.courseInternshipIndicator}
          size="sm"
        />
        <SidebarLink
          text="Ingressantes"
          href={APP_ROUTES.private.studentIngressIndicator}
          size="sm"
        />
      </CollapsibleContent>
    </Collapsible>
  );
}
