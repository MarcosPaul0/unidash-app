import { Topic } from "../../../_components/Topic";
import { ExtensionActivitiesTable } from "../ExtensionActivitiesTable";
import { ExtensionComplementaryActivitiesTable } from "../ExtensionComplementaryActivitiesTable";
import { RegistrationByTypeOfExtensionActivity } from "../RegistrationByTypeOfExtensionActivity";
import { RegistrationByTypeOfExtensionComplementaryActivity } from "../RegistrationByTypeOfExtensionComplementaryActivity";
import { RegistrationByTypeOfSearchComplementaryActivity } from "../RegistrationByTypeOfSearchComplementaryActivity";
import { RegistrationByTypeOfTeachingComplementaryActivity } from "../RegistrationByTypeOfTeachingComplementaryActivity";
import { SearchComplementaryActivitiesTable } from "../SearchComplementaryActivitiesTable";
import { TeachingComplementaryActivitiesTable } from "../TeachingComplementaryActivitiesTable";
import { ActivitiesIndicatorsProps } from "./activitiesIndicators.interface";

export function ActivitiesIndicators({
  indicators,
}: ActivitiesIndicatorsProps) {
  return (
    <>
      <Topic title="Indicadores de Atividades Complementares" />

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
        <ExtensionComplementaryActivitiesTable
          extensionComplementaryActivities={
            indicators?.extensionComplementaryActivities
          }
        />

        <RegistrationByTypeOfExtensionComplementaryActivity
          extensionComplementaryActivities={
            indicators?.extensionComplementaryActivities
          }
        />
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
        <TeachingComplementaryActivitiesTable
          teachingComplementaryActivities={
            indicators?.teachingComplementaryActivities
          }
        />
        <RegistrationByTypeOfTeachingComplementaryActivity
          teachingComplementaryActivities={
            indicators?.teachingComplementaryActivities
          }
        />
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
        <SearchComplementaryActivitiesTable
          searchComplementaryActivities={
            indicators?.searchComplementaryActivities
          }
        />

        <RegistrationByTypeOfSearchComplementaryActivity
          searchComplementaryActivities={
            indicators?.searchComplementaryActivities
          }
        />
      </div>

      <Topic title="Indicadores de Atividades de Extensão" />

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
        <ExtensionActivitiesTable
          extensionActivities={indicators?.extensionActivities}
        />

        <RegistrationByTypeOfExtensionActivity
          extensionActivities={indicators?.extensionActivities}
        />
      </div>
    </>
  );
}
