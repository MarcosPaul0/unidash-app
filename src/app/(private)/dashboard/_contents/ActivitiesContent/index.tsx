import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { RegistrationByTypeOfComplementaryActivity } from "../../_charts/complementaryActivities/RegistrationByTypeOfComplementaryActivity";
import { Topic } from "../../_components/Topic";
import { RegistrationByTypeOfExtensionActivity } from "../../_charts/extensionActivities/RegistrationByTypeOfExtensionActivity";
import { ExtensionActivitiesTotalIndicator } from "../../_indicators/extensionActivities/ExtensionActivitiesTotalIndicator";
import { MostRecurrentExtensionActivityIndicator } from "../../_indicators/extensionActivities/MostRecurrentExtensionActivityIndicator";
import { LessRecurrentExtensionActivityIndicator } from "../../_indicators/extensionActivities/LessRecurrentExtensionActivityIndicator";
import { ComplementaryActivitiesTotalIndicator } from "../../_indicators/complementaryActivities/ComplementaryActivitiesTotalIndicator";
import { MostRecurrentComplementaryActivityIndicator } from "../../_indicators/complementaryActivities/MostRecurrentComplementaryActivityIndicator";
import { LessRecurrentComplementaryActivityIndicator } from "../../_indicators/complementaryActivities/LessRecurrentComplementaryActivityIndicator";

export function ActivitiesContent() {
  return (
    <TabsContent
      value={CHARTS_CATEGORIES.ACTIVITIES}
      className="flex flex-col gap-8"
    >
      <Topic title="Indicadores de atividades complementares" />

      <div className="grid grid-cols-3 gap-8">
        <ExtensionActivitiesTotalIndicator />

        <MostRecurrentExtensionActivityIndicator />

        <LessRecurrentExtensionActivityIndicator />
      </div>

      <RegistrationByTypeOfComplementaryActivity />

      <Topic title="Indicadores de atividades de extensão" />

      <div className="grid grid-cols-3 gap-8">
        <ComplementaryActivitiesTotalIndicator />

        <MostRecurrentComplementaryActivityIndicator />

        <LessRecurrentComplementaryActivityIndicator />
      </div>

      <RegistrationByTypeOfExtensionActivity />
    </TabsContent>
  );
}
