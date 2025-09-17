"use client";

import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { useFetchIndicators } from "@unidash/hooks/useFetchIndicators";
import { IndicatorsCSService } from "@unidash/services/indicators/indicators.cs.service";
import { TeacherProductionsSkeletons } from "../../_charts/teachersProductions/TeacherProductionsSkeleton";
import { TeacherProductionsIndicators } from "../../_charts/teachersProductions/TeacherProductionsIndicators";

export function ProductionsContent() {
  const { indicators, isFetching } = useFetchIndicators({
    fetchIndicators: IndicatorsCSService.getTeacherProductionsIndicators,
  });

  return (
    <TabsContent
      value={CHARTS_CATEGORIES.PRODUCTIONS}
      className="flex flex-col gap-8"
    >
      {isFetching ? (
        <TeacherProductionsSkeletons />
      ) : (
        <TeacherProductionsIndicators indicators={indicators} />
      )}
    </TabsContent>
  );
}
