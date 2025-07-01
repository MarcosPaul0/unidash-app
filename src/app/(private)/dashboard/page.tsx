import { Tabs } from "@unidash/components/Tabs";
import { Toolbar } from "../_components/Toolbar";
import { CourseContent } from "./_contents/CourseContent";
import { IngressContent } from "./_contents/IngressContent";
import { CoordinationContent } from "./_contents/CoordinationContent";
import { ConclusionContent } from "./_contents/ConclusionContent/inidex";
import { ActivitiesContent } from "./_contents/ActivitiesContent";
import { InternshipsContent } from "./_contents/InternshipsContent";
import { ProductionsContent } from "./_contents/ProductionsContent";
import { ChartTabsList } from "./_components/ChartTabsList";

export default function DashboardPage() {
  return (
    <Tabs>
      <Toolbar>
        <ChartTabsList />
      </Toolbar>

      <CourseContent />

      <CoordinationContent />

      <IngressContent />

      <ConclusionContent />

      <ActivitiesContent />

      <InternshipsContent />

      <ProductionsContent />
    </Tabs>
  );
}
