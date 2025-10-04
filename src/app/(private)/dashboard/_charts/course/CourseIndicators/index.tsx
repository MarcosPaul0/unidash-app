import { Topic } from "../../../_components/Topic";
import { ApplicantsToSeatRatioIndicator } from "../../../_indicators/course/ApplicantsToSeatRatioIndicator";
import { DropoutRateIndicator } from "../../../_indicators/course/DropoutRateIndicator";
import { OccupancyRateIndicator } from "../../../_indicators/course/OccupancyRateIndicator";
import { SuccessRateIndicator } from "../../../_indicators/course/SuccessRateIndicator";
import { ActiveStudentsChart } from "../ActiveStudentsChart";
import { DistributionStudentsExitChart } from "../DistributionStudentsExitChart";
import { RegistrationLocksChart } from "../RegistrationLocksChart ";
import { TeacherHoursDistributionChart } from "../TeacherHoursDistributionChart";
import {
  CourseIndicatorsProps,
  IndicatorsCardsProps,
} from "./courseIndicators.interface";

export function IndicatorsCards({ complements }: IndicatorsCardsProps) {
  if (!complements) {
    return null;
  }

  const years = Object.keys(complements);

  if (years.length === 0) {
    return null;
  }

  const lastYear = years[0];

  const lastApplicantsToSeatRatio = complements[lastYear].applicantsToSeatRatio;
  const lastDropoutRate = complements[lastYear].dropoutRate;
  const lastOccupancyRate = complements[lastYear].occupancyRate;
  const lastSuccessRate = complements[lastYear].successRate;

  return (
    <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-8">
      <ApplicantsToSeatRatioIndicator
        currentApplicantsToSeatRatio={lastApplicantsToSeatRatio}
      />

      <OccupancyRateIndicator currentOccupancyRate={lastOccupancyRate} />

      <DropoutRateIndicator currentDropoutRate={lastDropoutRate} />

      <SuccessRateIndicator currentSuccessRate={lastSuccessRate} />
    </div>
  );
}

export function CourseIndicators({ indicators }: CourseIndicatorsProps) {
  return (
    <>
      <Topic title="Indicadores do Curso" />

      <IndicatorsCards complements={indicators?.complements} />

      <div className="flex flex-col md:grid md:grid-cols-7 gap-4 md:gap-8">
        <ActiveStudentsChart activeStudents={indicators?.activeStudents} />

        <RegistrationLocksChart
          registrationLocks={indicators?.registrationLocks}
        />
      </div>

      <DistributionStudentsExitChart departures={indicators?.departures} />

      <TeacherHoursDistributionChart
        teachersWorkload={indicators?.teachersWorkload}
      />
    </>
  );
}
