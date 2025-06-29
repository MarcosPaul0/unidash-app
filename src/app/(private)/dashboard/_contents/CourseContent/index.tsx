import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { ActiveStudentsOverTimeChart } from "../../_charts/course/ActiveStudentsOverTimeChart";
import { DistributionStudentsExitChart } from "../../_charts/course/DistributionStudentsExitChart";
import { EnrollmentSuspensionsChart } from "../../_charts/course/EnrollmentSuspensionsChart ";
import { TeacherHoursDistributionChart } from "../../_charts/course/TeacherHoursDistributionChart";
import { Topic } from "../../_components/Topic";
import { StudentsActiveIndicator } from "../../_indicators/course/StudentsActiveIndicator";
import { OccupancyRateIndicator } from "../../_indicators/course/OccupancyRateIndicator";
import { DropoutRateIndicator } from "../../_indicators/course/DropoutRateIndicator";
import { SuccessRateIndicator } from "../../_indicators/course/SuccessRateIndicator";

export function CourseContent() {
  return (
    <TabsContent
      value={CHARTS_CATEGORIES.COURSE}
      className="flex flex-col gap-8"
    >
      <Topic title="Indicadores do curso" />

      <div className="grid grid-cols-4 gap-8">
        <StudentsActiveIndicator />

        <OccupancyRateIndicator />

        <DropoutRateIndicator />

        <SuccessRateIndicator />
      </div>

      <div className="grid grid-cols-7 gap-8">
        <ActiveStudentsOverTimeChart />

        <DistributionStudentsExitChart />
      </div>

      <div className="grid grid-cols-7 gap-8">
        <EnrollmentSuspensionsChart />

        <TeacherHoursDistributionChart />
      </div>
    </TabsContent>
  );
}
