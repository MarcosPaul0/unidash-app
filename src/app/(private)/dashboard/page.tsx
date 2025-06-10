import { Tabs, TabsContent } from "@unidash/components/Tabs";
import { Toolbar } from "../_components/Toolbar";
import { CHARTS_CATEGORIES } from "./_components/ChartTabsList/chartsTabsList.constant";
import { ActiveStudentsOverTimeChart } from "./_charts/course/ActiveStudentsOverTimeChart";
import { DistributionStudentsExitChart } from "./_charts/course/DistributionStudentsExitChart";
import { EnrollmentSuspensionsChart } from "./_charts/course/EnrollmentSuspensionsChart ";
import { TeacherHoursDistributionChart } from "./_charts/course/TeacherHoursDistributionChart";
import { DistributionCoordinationMeetingsChart } from "./_charts/coordination/DistributionCoordinationMeetingsChart";
import { ServicesProvidedByCoordinationChart } from "./_charts/coordination/ServicesProvidedByCoordinationChart";
import { EnglishProficiencyLevelIngressChart } from "./_charts/ingress/EnglishProficiencyLevelIngressChart";
import { TrainingProfileIngressChart } from "./_charts/ingress/TrainingProfileIngressChart";
import { WorkStatusChart } from "./_charts/courseCompletionWork/WorkStatusChart";
import { RegistrationByTypeOfComplementaryActivity } from "./_charts/complementaryActivities/RegistrationByTypeOfComplementaryActivity";
import { RegistrationByTypeOfExtensionActivity } from "./_charts/extensionActivities/RegistrationByTypeOfExtensionActivity";
import { CitiesWithTheHighestInternships } from "./_charts/internships/CitiesWithTheHighestInternships";
import { InternshipsByAreaChart } from "./_charts/internships/InternshipsByAreaChart";

export default function DashboardPage() {
  return (
    <Tabs>
      <Toolbar />

      <TabsContent
        value={CHARTS_CATEGORIES.COURSE}
        className="flex flex-col gap-8"
      >
        <div className="grid grid-cols-2 gap-8">
          <ActiveStudentsOverTimeChart />

          <DistributionStudentsExitChart />
        </div>

        <EnrollmentSuspensionsChart />

        <TeacherHoursDistributionChart />
      </TabsContent>

      <TabsContent
        value={CHARTS_CATEGORIES.COORDINATION}
        className="flex flex-col gap-8"
      >
        <div className="grid grid-cols-2 gap-8">
          <DistributionCoordinationMeetingsChart />

          <ServicesProvidedByCoordinationChart />
        </div>
      </TabsContent>

      <TabsContent
        value={CHARTS_CATEGORIES.INGRESS}
        className="flex flex-col gap-8"
      >
        <div className="grid grid-cols-7 gap-8">
          <TrainingProfileIngressChart />

          <EnglishProficiencyLevelIngressChart />
        </div>
      </TabsContent>

      <TabsContent
        value={CHARTS_CATEGORIES.CONCLUSION}
        className="flex flex-col gap-8"
      >
        <WorkStatusChart />
      </TabsContent>

      <TabsContent
        value={CHARTS_CATEGORIES.ACTIVITIES}
        className="flex flex-col gap-8"
      >
        <RegistrationByTypeOfComplementaryActivity />
      </TabsContent>

      <TabsContent
        value={CHARTS_CATEGORIES.EXTENSION}
        className="flex flex-col gap-8"
      >
        <RegistrationByTypeOfExtensionActivity />
      </TabsContent>

      <TabsContent
        value={CHARTS_CATEGORIES.INTERNSHIPS}
        className="flex flex-col gap-8"
      >
        <div className="grid grid-cols-2 gap-8">
          <CitiesWithTheHighestInternships />

          <InternshipsByAreaChart />
        </div>
      </TabsContent>
    </Tabs>
  );
}
