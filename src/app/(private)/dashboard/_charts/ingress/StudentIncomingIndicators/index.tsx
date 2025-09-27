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
