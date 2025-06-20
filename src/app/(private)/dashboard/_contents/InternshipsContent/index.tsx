import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { CitiesWithTheHighestInternshipsChart } from "../../_charts/internships/CitiesWithTheHighestInternshipsChart";
import { InternshipsByAreaChart } from "../../_charts/internships/InternshipsByAreaChart";
import { DistributionOfTimeSpentCompletingInternshipChart } from "../../_charts/internships/DistributionOfTimeSpentCompletingInternshipChart";
import { TotalNumberOfInternshipsByTeacherChart } from "../../_charts/internships/TotalNumberOfInternshipsByTeacherChart";
import { Topic } from "../../_components/Topic";

export function InternshipsContent() {
  return (
    <TabsContent
      value={CHARTS_CATEGORIES.INTERNSHIPS}
      className="flex flex-col gap-8"
    >
      <Topic title="Indicadores de estágios supervisionados" />

      <div className="grid grid-cols-2 gap-8">
        <CitiesWithTheHighestInternshipsChart />

        <InternshipsByAreaChart />
      </div>

      <div className="grid grid-cols-7 gap-8">
        <DistributionOfTimeSpentCompletingInternshipChart />

        <TotalNumberOfInternshipsByTeacherChart />
      </div>
    </TabsContent>
  );
}
