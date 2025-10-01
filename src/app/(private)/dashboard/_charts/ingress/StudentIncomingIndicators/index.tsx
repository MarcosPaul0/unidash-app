import { Topic } from "../../../_components/Topic";
import { AssetsDeclaredByIngressChart } from "../AssetsDeclaredByIngressChart";
import { CourseQuestionsChart } from "../CourseQuestionsChart";
import { DistributionIngressByExpectedProfessionalPerformanceChart } from "../DistributionIngressByExpectedProfessionalPerformanceChart";
import { EnglishProficiencyLevelIngressChart } from "../EnglishProficiencyLevelIngressChart";
import { HabitsAndHobbiesDeclaredByIngressChart } from "../HabitsAndHobbiesDeclaredByIngressChart";
import { KnowledgeDeclaredInTechnologiesChart } from "../KnowledgeDeclaredInTechnologiesChart";
import { LevelOfProficiencyDeclaredByIngressChart } from "../LevelOfProficiencyDeclaredByIngressChart";
import { ReasonsGivenForChoosingTheCourseChart } from "../ReasonsGivenForChoosingTheCourseChart";
import { ReasonsGivenForChoosingUniversityChart } from "../ReasonsGivenForChoosingUniversityChart";
import { TrainingProfileIngressChart } from "../TrainingProfileIngressChart";
import { StudentIncomingIndicatorsProps } from "./incomingIndicators.interface";

export function StudentIncomingIndicators({
  indicators,
}: StudentIncomingIndicatorsProps) {
  return (
    <>
      <Topic title="Indicadores de Ingresso" />

      <div className="flex flex-col gap-4 md:grid md:grid-cols-7 md:gap-8">
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

      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-8">
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

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
        <AssetsDeclaredByIngressChart
          studentIncomingByAsset={indicators?.studentIncomingByAsset}
        />

        <HabitsAndHobbiesDeclaredByIngressChart
          studentIncomingByHobbyOrHabit={
            indicators?.studentIncomingByHobbyOrHabit
          }
        />
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
        <CourseQuestionsChart
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
    </>
  );
}
