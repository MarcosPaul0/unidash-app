import { ApplicantsToSeatRatioIndicator } from "../../../_indicators/course/ApplicantsToSeatRatioIndicator";
import { DropoutRateIndicator } from "../../../_indicators/course/DropoutRateIndicator";
import { OccupancyRateIndicator } from "../../../_indicators/course/OccupancyRateIndicator";
import { SuccessRateIndicator } from "../../../_indicators/course/SuccessRateIndicator";
import { ActiveStudentsOverTimeChart } from "../ActiveStudentsOverTimeChart";
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
    <div className="grid grid-cols-4 gap-8">
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
      <IndicatorsCards complements={indicators?.complements} />

      <div className="grid grid-cols-7 gap-8">
        <ActiveStudentsOverTimeChart students={indicators?.students ?? []} />

        <DistributionStudentsExitChart departures={indicators?.departures} />
      </div>

      <div className="grid grid-cols-7 gap-8">
        <RegistrationLocksChart
          registrationLocks={indicators?.registrationLocks}
        />

        <TeacherHoursDistributionChart
          teachersWorkload={indicators?.teachersWorkload}
        />
      </div>
    </>
  );
}
