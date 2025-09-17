import { Topic } from "../../../_components/Topic";
import { DistributionTechnicalScientificProductionsChart } from "../DistributionTechnicalScientificProductionsChart";
import { ResearchAndExtensionProjectsByTeacherChart } from "../ResearchAndExtensionProjectsByTeacherChart";
import { TechnicalScientificProductionsByTypeAndTeacherChart } from "../TechnicalScientificProductionsByTypeAndTeacherChart";
import { TeacherProductionsIndicatorsProps } from "./teacherProductionsIndicators.interface";

export function TeacherProductionsIndicators({
  indicators,
}: TeacherProductionsIndicatorsProps) {
  return (
    <>
      <Topic title="Indicadores de produções técnico-científicas" />

      <DistributionTechnicalScientificProductionsChart
        technicalScientificProductionsByType={
          indicators?.technicalScientificProductionsByType
        }
      />

      <TechnicalScientificProductionsByTypeAndTeacherChart
        technicalScientificProductionsByTeacher={
          indicators?.technicalScientificProductionsByTeacher
        }
      />

      <Topic title="Indicadores de projetos de pesquisa e de extensão" />

      <ResearchAndExtensionProjectsByTeacherChart
        researchAndExtensionProjectsByTeacher={
          indicators?.researchAndExtensionProjectsByTeacher
        }
      />
    </>
  );
}
