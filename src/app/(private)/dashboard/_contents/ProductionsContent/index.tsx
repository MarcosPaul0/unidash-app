import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { DistributionTechnicalScientificProductionsChart } from "../../_charts/technicalScientificProductions/DistributionTechnicalScientificProductionsChart";
import { TechnicalScientificProductionsByTypeAndTeacherChart } from "../../_charts/technicalScientificProductions/TechnicalScientificProductionsByTypeAndTeacherChart";
import { ResearchAndExtensionProjectsByTeacherChart } from "../../_charts/researchAndExtensionProjects/ResearchAndExtensionProjectsByTeacherChart";

export function ProductionsContent() {
  return (
    <TabsContent
      value={CHARTS_CATEGORIES.PRODUCTIONS}
      className="flex flex-col gap-8"
    >
      <DistributionTechnicalScientificProductionsChart />

      <TechnicalScientificProductionsByTypeAndTeacherChart />

      <ResearchAndExtensionProjectsByTeacherChart />
    </TabsContent>
  );
}
