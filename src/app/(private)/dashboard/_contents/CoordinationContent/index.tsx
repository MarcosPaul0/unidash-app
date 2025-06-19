import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { DistributionCoordinationMeetingsChart } from "../../_charts/coordination/DistributionCoordinationMeetingsChart";
import { ServicesProvidedByCoordinationChart } from "../../_charts/coordination/ServicesProvidedByCoordinationChart";

export function CoordinationContent() {
  return (
    <TabsContent
      value={CHARTS_CATEGORIES.COORDINATION}
      className="flex flex-col gap-8"
    >
      <div className="grid grid-cols-2 gap-8">
        <DistributionCoordinationMeetingsChart />

        <ServicesProvidedByCoordinationChart />
      </div>
    </TabsContent>
  );
}
