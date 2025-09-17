import { Topic } from "../../../_components/Topic";
import { DistributionCoordinationMeetingsChart } from "../DistributionCoordinationMeetingsChart";
import { ServicesProvidedByCoordinationChart } from "../ServicesProvidedByCoordinationChart";
import { CoordinationIndicatorsProps } from "./coordinationIndicators.interface";

export function CoordinationIndicators({
  indicators,
}: CoordinationIndicatorsProps) {
  const yearFromIndicators = indicators?.period?.[0] ?? null;
  const yearToIndicators =
    indicators?.period && indicators.period.length > 1
      ? indicators.period[indicators.period.length - 1]
      : null;

  return (
    <>
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
    </>
  );
}
