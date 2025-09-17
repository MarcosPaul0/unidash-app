import { Topic } from "../../../_components/Topic";
import { CitiesWithTheHighestInternshipsChart } from "../CitiesWithTheHighestInternshipsChart";
import { DistributionOfTimeSpentCompletingInternshipChart } from "../DistributionOfTimeSpentCompletingInternshipChart";
import { InternshipsByRoleChart } from "../InternshipsByRoleChart";
import { TotalNumberOfInternshipsByTeacherChart } from "../TotalNumberOfInternshipsByTeacherChart";
import { InternshipIndicatorsProps } from "./internshipIndicators.interface";

export function InternshipIndicators({
  indicators,
}: InternshipIndicatorsProps) {
  return (
    <>
      <Topic title="Indicadores de estágios supervisionados" />

      <div className="grid grid-cols-2 gap-8">
        <CitiesWithTheHighestInternshipsChart
          internshipsByCity={indicators?.internshipsByCity}
        />

        <InternshipsByRoleChart
          internshipsByRole={indicators?.internshipsByRole}
        />
      </div>

      <div className="grid grid-cols-7 gap-8">
        <DistributionOfTimeSpentCompletingInternshipChart
          internshipsByConclusionTime={indicators?.internshipsByConclusionTime}
        />

        <TotalNumberOfInternshipsByTeacherChart
          internshipsByAdvisor={indicators?.internshipsByAdvisor}
        />
      </div>
    </>
  );
}
