import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { DistributionTechnicalScientificProductionsChart } from "../../_charts/technicalScientificProductions/DistributionTechnicalScientificProductionsChart";
import { TechnicalScientificProductionsByTypeAndTeacherChart } from "../../_charts/technicalScientificProductions/TechnicalScientificProductionsByTypeAndTeacherChart";
import { ResearchAndExtensionProjectsByTeacherChart } from "../../_charts/researchAndExtensionProjects/ResearchAndExtensionProjectsByTeacherChart";
import { Topic } from "../../_components/Topic";

export function ProductionsContent() {
  return (
    <TabsContent
      value={CHARTS_CATEGORIES.PRODUCTIONS}
      className="flex flex-col gap-8"
    >
      <Topic title="Indicadores de produções técnico-científicas" />

      <DistributionTechnicalScientificProductionsChart />

      <TechnicalScientificProductionsByTypeAndTeacherChart />

      <Topic title="Indicadores de projetos de pesquisa e de extensão" />

      <ResearchAndExtensionProjectsByTeacherChart />
    </TabsContent>
  );
}
