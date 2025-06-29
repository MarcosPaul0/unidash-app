import { TabsList, TabsTrigger } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "./chartsTabsList.constant";

export function ChartTabsList() {
  return (
    <TabsList>
      <TabsTrigger value={CHARTS_CATEGORIES.COURSE}>Curso</TabsTrigger>

      <TabsTrigger value={CHARTS_CATEGORIES.COORDINATION}>
        Coordenação
      </TabsTrigger>

      <TabsTrigger value={CHARTS_CATEGORIES.INGRESS}>Ingresso</TabsTrigger>

      <TabsTrigger value={CHARTS_CATEGORIES.CONCLUSION}>Conclusão</TabsTrigger>

      <TabsTrigger value={CHARTS_CATEGORIES.ACTIVITIES}>Atividades</TabsTrigger>

      <TabsTrigger value={CHARTS_CATEGORIES.INTERNSHIPS}>Estágios</TabsTrigger>

      <TabsTrigger value={CHARTS_CATEGORIES.PRODUCTIONS}>Produções</TabsTrigger>
    </TabsList>
  );
}
