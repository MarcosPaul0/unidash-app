import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { WorkStatusChart } from "../../_charts/courseCompletionWork/WorkStatusChart";
import { PerformanceInDefensesChart } from "../../_charts/courseCompletionWork/PerformanceInDefensesChart";
import { WorkGuidanceByTeacherChart } from "../../_charts/courseCompletionWork/WorkGuidanceByTeacherChart";
import { Topic } from "../../_components/Topic";

export function ConclusionContent() {
  return (
    <TabsContent
      value={CHARTS_CATEGORIES.CONCLUSION}
      className="flex flex-col gap-8"
    >
      <Topic title="Indicadores de tabalho de conclusão do curso" />

      <WorkStatusChart />

      <PerformanceInDefensesChart />

      <WorkGuidanceByTeacherChart />
    </TabsContent>
  );
}
