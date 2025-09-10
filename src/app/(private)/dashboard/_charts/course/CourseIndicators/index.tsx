import { DropoutRateIndicator } from "../../../_indicators/course/DropoutRateIndicator";
import { OccupancyRateIndicator } from "../../../_indicators/course/OccupancyRateIndicator";
import { StudentsActiveIndicator } from "../../../_indicators/course/StudentsActiveIndicator";
import { SuccessRateIndicator } from "../../../_indicators/course/SuccessRateIndicator";
import { ActiveStudentsOverTimeChart } from "../ActiveStudentsOverTimeChart";
import { DistributionStudentsExitChart } from "../DistributionStudentsExitChart";
import { RegistrationLocksChart } from "../RegistrationLocksChart ";
import { TeacherHoursDistributionChart } from "../TeacherHoursDistributionChart";
import { CourseIndicatorsProps } from "./courseIndicators.interface";

export function IndicatorsCards() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <StudentsActiveIndicator />

      <OccupancyRateIndicator />

      <DropoutRateIndicator />

      <SuccessRateIndicator />
    </div>
  );
}

export function CourseIndicators({ indicators }: CourseIndicatorsProps) {
  return (
    <>
      <IndicatorsCards />

      <div className="grid grid-cols-7 gap-8">
        <ActiveStudentsOverTimeChart students={indicators?.students ?? []} />

        <DistributionStudentsExitChart departures={indicators?.departures} />
      </div>

      <div className="grid grid-cols-7 gap-8">
        <RegistrationLocksChart
          registrationLocks={indicators?.registrationLocks}
        />

        <TeacherHoursDistributionChart />
      </div>
    </>
  );
}
