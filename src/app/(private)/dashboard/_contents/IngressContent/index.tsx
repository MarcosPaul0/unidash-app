"use client";

import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { TrainingProfileIngressChart } from "../../_charts/ingress/TrainingProfileIngressChart";
import { EnglishProficiencyLevelIngressChart } from "../../_charts/ingress/EnglishProficiencyLevelIngressChart";
import { LevelOfProficiencyDeclaredByIngressChart } from "../../_charts/ingress/LevelOfProficiencyDeclaredByIngressChart";
import { ReasonsGivenForChoosingTheCourseChart } from "../../_charts/ingress/ReasonsGivenForChoosingTheCourseChart";
import { KnowledgeDeclaredInTechnologiesChart } from "../../_charts/ingress/KnowledgeDeclaredInTechnologiesChart";
import { ReasonsGivenForChoosingUniversityChart } from "../../_charts/ingress/ReasonsGivenForChoosingUniversityChart";
import { AssetsDeclaredByIngressChart } from "../../_charts/ingress/AssetsDeclaredByIngressChart";
import { HabitsAndHobbiesDeclaredByIngressChart } from "../../_charts/ingress/HabitsAndHobbiesDeclaredByIngressChart";
import { KnowledgeAndDesireForNightCoursesChart } from "../../_charts/ingress/KnowledgeAndDesireForNightCoursesChart";
import { DistributionIngressByExpectedProfessionalPerformanceChart } from "../../_charts/ingress/DistributionIngressByExpectedProfessionalPerformanceChart";
import { Topic } from "../../_components/Topic";
import { IndicatorsCSService } from "@unidash/services/indicators/indicators.cs.service";
import { useFetchIndicators } from "@unidash/hooks/useFetchIndicators";

export function IngressContent() {
  const { indicators, isFetching } = useFetchIndicators({
    fetchIndicators: IndicatorsCSService.getStudentIncomingIndicators,
  });

  return (
    <TabsContent
      value={CHARTS_CATEGORIES.INGRESS}
      className="flex flex-col gap-8"
    >
      <Topic title="Indicadores de ingresso" />

      <div className="grid grid-cols-7 gap-8">
        <TrainingProfileIngressChart
          studentIncomingByCurrentEducation={
            indicators?.studentIncomingByCurrentEducation
          }
        />

        <EnglishProficiencyLevelIngressChart
          studentIncomingByEnglishProficiencyLevel={
            indicators?.studentIncomingByEnglishProficiencyLevel
          }
        />
      </div>

      <LevelOfProficiencyDeclaredByIngressChart
        studentIncomingByAffinityByDiscipline={
          indicators?.studentIncomingByAffinityByDiscipline
        }
      />

      <div className="grid grid-cols-3 gap-8">
        <ReasonsGivenForChoosingTheCourseChart
          studentIncomingByCourseChoiceReason={
            indicators?.studentIncomingByCourseChoiceReason
          }
        />

        <KnowledgeDeclaredInTechnologiesChart
          studentIncomingByTechnology={indicators?.studentIncomingByTechnology}
        />

        <ReasonsGivenForChoosingUniversityChart
          studentIncomingByUniversityChoiceReason={
            indicators?.studentIncomingByUniversityChoiceReason
          }
        />
      </div>

      <div className="grid grid-cols-2 gap-8">
        <AssetsDeclaredByIngressChart
          studentIncomingByAsset={indicators?.studentIncomingByAsset}
        />

        <HabitsAndHobbiesDeclaredByIngressChart
          studentIncomingByHobbyOrHabit={
            indicators?.studentIncomingByHobbyOrHabit
          }
        />
      </div>

      <div className="grid grid-cols-2 gap-8">
        <KnowledgeAndDesireForNightCoursesChart
          studentIncomingByCourseComplements={
            indicators?.studentIncomingByCourseComplements
          }
        />

        <DistributionIngressByExpectedProfessionalPerformanceChart
          studentIncomingByWorkExpectation={
            indicators?.studentIncomingByWorkExpectation
          }
        />
      </div>
    </TabsContent>
  );
}
