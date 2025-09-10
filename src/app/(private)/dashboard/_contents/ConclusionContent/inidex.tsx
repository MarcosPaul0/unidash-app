"use client";

import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { WorkStatusChart } from "../../_charts/courseCompletionWork/WorkStatusChart";
import { PerformanceInDefensesChart } from "../../_charts/courseCompletionWork/PerformanceInDefensesChart";
import { Topic } from "../../_components/Topic";
import { useFetchIndicators } from "@unidash/hooks/useFetchIndicators";
import { IndicatorsCSService } from "@unidash/services/indicators/indicators.cs.service";

export function ConclusionContent() {
  const { indicators, isFetching } = useFetchIndicators({
    fetchIndicators: IndicatorsCSService.getCompletionWorkIndicators,
  });

  return (
    <TabsContent
      value={CHARTS_CATEGORIES.CONCLUSION}
      className="flex flex-col gap-8"
    >
      <Topic title="Indicadores de tabalho de conclusão do curso" />

      <div className="grid grid-cols-7 gap-8">
        <WorkStatusChart worksStatus={indicators?.worksStatus} />

        <PerformanceInDefensesChart
          orientationsByTeacher={indicators?.orientationsByTeacher}
        />
      </div>

      {/* <WorkGuidanceByTeacherChart /> */}
    </TabsContent>
  );
}
