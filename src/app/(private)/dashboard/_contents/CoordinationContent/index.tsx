"use client";

import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { DistributionCoordinationMeetingsChart } from "../../_charts/coordination/DistributionCoordinationMeetingsChart";
import { ServicesProvidedByCoordinationChart } from "../../_charts/coordination/ServicesProvidedByCoordinationChart";
import { Topic } from "../../_components/Topic";
import { IndicatorsCSService } from "@unidash/services/indicators/indicators.cs.service";
import { useFetchIndicators } from "@unidash/hooks/useFetchIndicators";

export function CoordinationContent() {
  const { indicators } = useFetchIndicators({
    fetchIndicators: IndicatorsCSService.getCoordinationIndicators,
  });

  const yearFromIndicators = indicators?.period?.[0] ?? null;
  const yearToIndicators =
    indicators?.period && indicators.period.length > 1
      ? indicators.period[indicators.period.length - 1]
      : null;

  return (
    <TabsContent
      value={CHARTS_CATEGORIES.COORDINATION}
      className="flex flex-col gap-8"
    >
      <Topic title="Indicadores da coordenação do curso" />

      <div className="grid grid-cols-2 gap-8">
        <DistributionCoordinationMeetingsChart
          meetings={indicators?.meetings ?? []}
          yearFrom={yearFromIndicators}
          yearTo={yearToIndicators}
        />

        <ServicesProvidedByCoordinationChart
          services={indicators?.services ?? []}
          yearFrom={yearFromIndicators}
          yearTo={yearToIndicators}
        />
      </div>
    </TabsContent>
  );
}
