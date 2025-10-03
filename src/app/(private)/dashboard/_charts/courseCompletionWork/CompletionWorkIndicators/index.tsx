import { Topic } from "../../../_components/Topic";
import { PerformanceInDefensesChart } from "../PerformanceInDefensesChart";
import { WorkStatusChart } from "../WorkStatusChart";
import { CompletionWorkIndicatorsProps } from "./completionWorkIndicators.interface";

export function CompletionWorkIndicators({
  indicators,
}: CompletionWorkIndicatorsProps) {
  return (
    <>
      <Topic title="Indicadores de Trabalhos de Conclusão de Curso" />

      <PerformanceInDefensesChart
        orientationsByTeacher={indicators?.orientationsByTeacher}
      />

      <div className="flex flex-col gap-4 md:grid md:grid-cols-7 md:gap-8">
        <WorkStatusChart worksStatus={indicators?.worksStatus} />
      </div>
    </>
  );
}
