import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { TrainingProfileIngressChart } from "../../_charts/ingress/TrainingProfileIngressChart";
import { EnglishProficiencyLevelIngressChart } from "../../_charts/ingress/EnglishProficiencyLevelIngressChart";
import { LevelOfProficiencyDeclaredByIngressChart } from "../../_charts/ingress/LevelOfProficiencyDeclaredByIngressChart";
import { ReasonsGivenForChoosingTheCourseChart } from "../../_charts/ingress/ReasonsGivenForChoosingTheCourseChart";
import { KnowledgeDeclaredInTechnologiesChart } from "../../_charts/ingress/KnowledgeDeclaredInTechnologiesChart";
import { ReasonsGivenForChoosingUniversityChart } from "../../_charts/ingress/ReasonsGivenForChoosingUniversityChart";
import { PersonalGoodsDeclaredByIngressChart } from "../../_charts/ingress/PersonalGoodsDeclaredByIngressChart";
import { HabitsAndHobbiesDeclaredByIngressChart } from "../../_charts/ingress/HabitsAndHobbiesDeclaredByIngressChart";
import { KnowledgeAndDesireForNightCoursesChart } from "../../_charts/ingress/KnowledgeAndDesireForNightCoursesChart";
import { DistributionIngressByExpectedProfessionalPerformanceChart } from "../../_charts/ingress/DistributionIngressByExpectedProfessionalPerformanceChart";

export function IngressContent() {
  return (
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

      <div className="grid grid-cols-2 gap-8">
        <PersonalGoodsDeclaredByIngressChart />

        <HabitsAndHobbiesDeclaredByIngressChart />
      </div>

      <div className="grid grid-cols-2 gap-8">
        <KnowledgeAndDesireForNightCoursesChart />

        <DistributionIngressByExpectedProfessionalPerformanceChart />
      </div>
    </TabsContent>
  );
}
