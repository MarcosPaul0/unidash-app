import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { ActiveStudentsOverTimeChart } from "../../_charts/course/ActiveStudentsOverTimeChart";
import { DistributionStudentsExitChart } from "../../_charts/course/DistributionStudentsExitChart";
import { EnrollmentSuspensionsChart } from "../../_charts/course/EnrollmentSuspensionsChart ";
import { TeacherHoursDistributionChart } from "../../_charts/course/TeacherHoursDistributionChart";
import { Topic } from "../../_components/Topic";

export function CourseContent() {
  return (
    <TabsContent
      value={CHARTS_CATEGORIES.COURSE}
      className="flex flex-col gap-8"
    >
      <Topic title="Indicadores do curso" />

      <div className="grid grid-cols-2 gap-8">
        <ActiveStudentsOverTimeChart />

        <DistributionStudentsExitChart />
      </div>

      <EnrollmentSuspensionsChart />

      <TeacherHoursDistributionChart />
    </TabsContent>
  );
}
