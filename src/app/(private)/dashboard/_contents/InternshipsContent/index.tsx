"use client";

import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { IndicatorsCSService } from "@unidash/services/indicators/indicators.cs.service";
import { useFetchIndicators } from "@unidash/hooks/useFetchIndicators";
import { InternshipSkeletons } from "../../_charts/internships/InternshipSkeletons";
import { InternshipIndicators } from "../../_charts/internships/InternshipIndicators";

export function InternshipsContent() {
  const { indicators, isFetching } = useFetchIndicators({
    fetchIndicators: IndicatorsCSService.getInternshipIndicators,
  });

  return (
    <TabsContent
      value={CHARTS_CATEGORIES.INTERNSHIPS}
      className="flex flex-col gap-8"
    >
      {isFetching ? (
        <InternshipSkeletons />
      ) : (
        <InternshipIndicators indicators={indicators} />
      )}
    </TabsContent>
  );
}
