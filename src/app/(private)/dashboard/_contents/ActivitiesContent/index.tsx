"use client";

import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { IndicatorsCSService } from "@unidash/services/indicators/indicators.cs.service";
import { useFetchIndicators } from "@unidash/hooks/useFetchIndicators";
import { ActivitiesSkeletons } from "../../_charts/activities/ActiviteiesSkeletons";
import { ActivitiesIndicators } from "../../_charts/activities/ActivitiesIndicators";

export function ActivitiesContent() {
  const { indicators, isFetching } = useFetchIndicators({
    fetchIndicators: IndicatorsCSService.getActivitiesIndicators,
  });

  return (
    <TabsContent
      value={CHARTS_CATEGORIES.ACTIVITIES}
      className="flex flex-col gap-8"
    >
      {isFetching ? (
        <ActivitiesSkeletons />
      ) : (
        <ActivitiesIndicators indicators={indicators} />
      )}
    </TabsContent>
  );
}
