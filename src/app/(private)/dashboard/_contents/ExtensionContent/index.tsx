import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { RegistrationByTypeOfExtensionActivity } from "../../_charts/extensionActivities/RegistrationByTypeOfExtensionActivity";

export function ExtensionContent() {
  return (
    <TabsContent
      value={CHARTS_CATEGORIES.EXTENSION}
      className="flex flex-col gap-8"
    >
      <RegistrationByTypeOfExtensionActivity />
    </TabsContent>
  );
}
