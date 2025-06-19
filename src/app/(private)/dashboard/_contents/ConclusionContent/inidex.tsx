import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { WorkStatusChart } from "../../_charts/courseCompletionWork/WorkStatusChart";
import { PerformanceInDefensesChart } from "../../_charts/courseCompletionWork/PerformanceInDefensesChart";
import { WorkGuidanceByTeacherChart } from "../../_charts/courseCompletionWork/WorkGuidanceByTeacherChart";

export function ConclusionContent() {
  return (
    <TabsContent
      value={CHARTS_CATEGORIES.CONCLUSION}
      className="flex flex-col gap-8"
    >
      <WorkStatusChart />

      <PerformanceInDefensesChart />

      <WorkGuidanceByTeacherChart />
    </TabsContent>
  );
}
