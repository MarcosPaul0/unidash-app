"use client";

import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { useFetchIndicators } from "@unidash/hooks/useFetchIndicators";
import { IndicatorsCSService } from "@unidash/services/indicators/indicators.cs.service";
import { CompletionWorkSkeletons } from "../../_charts/courseCompletionWork/CompletionWorkSkeletons";
import { CompletionWorkIndicators } from "../../_charts/courseCompletionWork/CompletionWorkIndicators";

export function ConclusionContent() {
  const { indicators, isFetching } = useFetchIndicators({
    fetchIndicators: IndicatorsCSService.getCompletionWorkIndicators,
  });

  return (
    <TabsContent
      value={CHARTS_CATEGORIES.CONCLUSION}
      className="flex flex-col gap-8"
    >
      {isFetching ? (
        <CompletionWorkSkeletons />
      ) : (
        <CompletionWorkIndicators indicators={indicators} />
      )}
    </TabsContent>
  );
}
