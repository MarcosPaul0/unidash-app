import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { RegistrationByTypeOfComplementaryActivity } from "../../_charts/complementaryActivities/RegistrationByTypeOfComplementaryActivity";
import { Topic } from "../../_components/Topic";

export function ActivitiesContent() {
  return (
    <TabsContent
      value={CHARTS_CATEGORIES.ACTIVITIES}
      className="flex flex-col gap-8"
    >
      <Topic title="Indicadores de atividades complementares" />

      <RegistrationByTypeOfComplementaryActivity />
    </TabsContent>
  );
}
