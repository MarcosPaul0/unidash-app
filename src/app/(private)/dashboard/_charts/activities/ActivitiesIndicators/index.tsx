import { Topic } from "../../../_components/Topic";
import { RegistrationByTypeOfExtensionActivity } from "../RegistrationByTypeOfExtensionActivity";
import { RegistrationByTypeOfExtensionComplementaryActivity } from "../RegistrationByTypeOfExtensionComplementaryActivity";
import { RegistrationByTypeOfSearchComplementaryActivity } from "../RegistrationByTypeOfSearchComplementaryActivity";
import { RegistrationByTypeOfTeachingComplementaryActivity } from "../RegistrationByTypeOfTeachingComplementaryActivity";
import { ActivitiesIndicatorsProps } from "./activitiesIndicators.interface";

export function ActivitiesIndicators({
  indicators,
}: ActivitiesIndicatorsProps) {
  return (
    <>
      <Topic title="Indicadores de Atividades Complementares" />

      {/* <div className="grid grid-cols-3 gap-8">
        <ExtensionActivitiesTotalIndicator />

        <MostRecurrentExtensionActivityIndicator />

        <LessRecurrentExtensionActivityIndicator />
      </div> */}

      <RegistrationByTypeOfExtensionComplementaryActivity
        extensionComplementaryActivities={
          indicators?.extensionComplementaryActivities
        }
      />

      <RegistrationByTypeOfTeachingComplementaryActivity
        teachingComplementaryActivities={
          indicators?.teachingComplementaryActivities
        }
      />

      <RegistrationByTypeOfSearchComplementaryActivity
        searchComplementaryActivities={
          indicators?.searchComplementaryActivities
        }
      />

      <Topic title="Indicadores de Atividades de Extensão" />
      {/* 
      <div className="grid grid-cols-3 gap-8">
        <ComplementaryActivitiesTotalIndicator />

        <MostRecurrentComplementaryActivityIndicator />

        <LessRecurrentComplementaryActivityIndicator />
      </div> */}

      <RegistrationByTypeOfExtensionActivity
        extensionActivities={indicators?.extensionActivities}
      />
    </>
  );
}
