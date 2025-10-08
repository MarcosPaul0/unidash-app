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

  const years = Object.keys(complements).reverse();

  if (years.length === 0) {
    return null;
  }

  const currentYear = years[0];
  const previousYear = years?.[1];

  const currentApplicantsToSeatRatio =
    complements[currentYear].applicantsToSeatRatio;
  const previousApplicantsToSeatRatio = previousYear
    ? complements[previousYear].applicantsToSeatRatio
    : undefined;
  const currentDropoutRate = complements[currentYear]?.dropoutRate;
  const previousDropoutRate = complements[previousYear]?.dropoutRate;
  const currentOccupancyRate = complements[currentYear].occupancyRate;
  const previousOccupancyRate = complements[previousYear].occupancyRate;
  const currentSuccessRate = complements[currentYear].successRate;
  const previousSuccessRate = complements[previousYear].successRate;

  return (
    <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-8">
      <ApplicantsToSeatRatioIndicator
        currentApplicantsToSeatRatio={currentApplicantsToSeatRatio}
        previousApplicantsToSeatRatio={previousApplicantsToSeatRatio}
        currentYear={currentYear}
      />

      <OccupancyRateIndicator
        currentOccupancyRate={currentOccupancyRate}
        currentYear={currentYear}
        previousOccupancyRate={previousOccupancyRate}
      />

      <DropoutRateIndicator
        currentDropoutRate={currentDropoutRate}
        currentYear={currentYear}
        previousDropoutRate={previousDropoutRate}
      />

      <SuccessRateIndicator
        currentSuccessRate={currentSuccessRate}
        currentYear={currentYear}
        previousSuccessRate={previousSuccessRate}
      />
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
