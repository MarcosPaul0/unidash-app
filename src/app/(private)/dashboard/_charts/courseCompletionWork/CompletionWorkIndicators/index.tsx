import { Topic } from "../../../_components/Topic";
import { PerformanceInDefensesChart } from "../PerformanceInDefensesChart";
import { WorkStatusChart } from "../WorkStatusChart";
import { CompletionWorkIndicatorsProps } from "./completionWorkIndicators.interface";

export function CompletionWorkIndicators({
  indicators,
}: CompletionWorkIndicatorsProps) {
  return (
    <>
      <Topic title="Indicadores de tabalho de conclusão do curso" />

      <div className="grid grid-cols-7 gap-8">
        <WorkStatusChart worksStatus={indicators?.worksStatus} />

        <PerformanceInDefensesChart
          orientationsByTeacher={indicators?.orientationsByTeacher}
        />
      </div>
    </>
  );
}
