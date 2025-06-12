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
import { CitiesWithTheHighestInternshipsChart } from "./_charts/internships/CitiesWithTheHighestInternshipsChart";
import { InternshipsByAreaChart } from "./_charts/internships/InternshipsByAreaChart";
import { PerformanceInDefensesChart } from "./_charts/courseCompletionWork/PerformanceInDefensesChart";
import { WorkGuidanceByTeacherChart } from "./_charts/courseCompletionWork/WorkGuidanceByTeacherChart";
import { DistributionOfTimeSpentCompletingInternshipChart } from "./_charts/internships/DistributionOfTimeSpentCompletingInternshipChart";
import { TotalNumberOfInternshipsByTeacherChart } from "./_charts/internships/TotalNumberOfInternshipsByTeacherChart";
import { DistributionTechnicalScientificProductionsChart } from "./_charts/technicalScientificProductions/DistributionTechnicalScientificProductionsChart";
import { TechnicalScientificProductionsByTypeAndTeacherChart } from "./_charts/technicalScientificProductions/TechnicalScientificProductionsByTypeAndTeacherChart";
import { ResearchAndExtensionProjectsByTeacherChart } from "./_charts/researchAndExtensionProjects/ResearchAndExtensionProjectsByTeacherChart";
import { LevelOfProficiencyDeclaredByIngressChart } from "./_charts/ingress/LevelOfProficiencyDeclaredByIngressChart";
import { ReasonsGivenForChoosingTheCourseChart } from "./_charts/ingress/ReasonsGivenForChoosingTheCourseChart";
import { KnowledgeDeclaredInTechnologiesChart } from "./_charts/ingress/KnowledgeDeclaredInTechnologiesChart";
import { ReasonsGivenForChoosingUniversityChart } from "./_charts/ingress/ReasonsGivenForChoosingUniversityChart";

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

        <LevelOfProficiencyDeclaredByIngressChart />

        <div className="grid grid-cols-3 gap-8">
          <ReasonsGivenForChoosingTheCourseChart />

          <KnowledgeDeclaredInTechnologiesChart />

          <ReasonsGivenForChoosingUniversityChart />
        </div>
      </TabsContent>

      <TabsContent
        value={CHARTS_CATEGORIES.CONCLUSION}
        className="flex flex-col gap-8"
      >
        <WorkStatusChart />

        <PerformanceInDefensesChart />

        <WorkGuidanceByTeacherChart />
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
          <CitiesWithTheHighestInternshipsChart />

          <InternshipsByAreaChart />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <DistributionOfTimeSpentCompletingInternshipChart />

          <TotalNumberOfInternshipsByTeacherChart />
        </div>
      </TabsContent>

      <TabsContent
        value={CHARTS_CATEGORIES.PRODUCTIONS}
        className="flex flex-col gap-8"
      >
        <DistributionTechnicalScientificProductionsChart />

        <TechnicalScientificProductionsByTypeAndTeacherChart />

        <ResearchAndExtensionProjectsByTeacherChart />
      </TabsContent>
    </Tabs>
  );
}
