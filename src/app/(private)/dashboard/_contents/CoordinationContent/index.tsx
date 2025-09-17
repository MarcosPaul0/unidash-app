"use client";

import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { IndicatorsCSService } from "@unidash/services/indicators/indicators.cs.service";
import { useFetchIndicators } from "@unidash/hooks/useFetchIndicators";
import { CoordinationSkeletons } from "../../_charts/coordination/CoordinationSkeletons";
import { CoordinationIndicators } from "../../_charts/coordination/CoordinationIndicators";

export function CoordinationContent() {
  const { indicators, isFetching } = useFetchIndicators({
    fetchIndicators: IndicatorsCSService.getCoordinationIndicators,
  });

  return (
    <TabsContent
      value={CHARTS_CATEGORIES.COORDINATION}
      className="flex flex-col gap-8"
    >
      {isFetching ? (
        <CoordinationSkeletons />
      ) : (
        <CoordinationIndicators indicators={indicators} />
      )}
    </TabsContent>
  );
}
