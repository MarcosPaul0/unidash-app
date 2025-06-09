import { TabsContent } from "@unidash/components/Tabs";
import { ChartTabsList } from "../../dashboard/_components/ChartTabsList";
import { CHARTS_CATEGORIES } from "../../dashboard/_components/ChartTabsList/chartsTabsList.constant";
import { FilterForm } from "../FilterForm";

export function Toolbar() {
  return (
    <>
      <div className="flex items-center justify-between border-b-2 border-muted">
        <ChartTabsList />

        <FilterForm />
      </div>

      <TabsContent value={CHARTS_CATEGORIES.COORDINATION}>
        Coordenação
      </TabsContent>

      <TabsContent value={CHARTS_CATEGORIES.INGRESS}>Ingresso</TabsContent>

      <TabsContent value={CHARTS_CATEGORIES.CONCLUSION}>Conclusão</TabsContent>

      <TabsContent value={CHARTS_CATEGORIES.ACTIVITIES}>Atividades</TabsContent>

      <TabsContent value={CHARTS_CATEGORIES.EXTENSION}>Extensão</TabsContent>

      <TabsContent value={CHARTS_CATEGORIES.INTERNSHIPS}>Estágios</TabsContent>

      <TabsContent value={CHARTS_CATEGORIES.PRODUCTIONS}>Produções</TabsContent>
    </>
  );
}
