"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { ChartCard } from "@unidash/app/(private)/dashboard/_components/ChartCard";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const chartData = [
  { activity: "Projetos especiais", count: 22 },
  { activity: "Competições", count: 4 },
  { activity: "Projetos de cultura", count: 5 },
  { activity: "Estágio externo", count: 12 },
  { activity: "Empresa juniores", count: 12 },
  { activity: "Empreendedorismos", count: 1 },
];

const chartConfig = {
  count: {
    label: "2022",
    color: "var(--chart-10)",
  },
} satisfies ChartConfig;

export function RegistrationByTypeOfExtensionActivity() {
  return (
    <ChartCard
      title="Cadastros em atividades de extensão por tipo de atividade"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
    >
      <ChartContainer
        config={chartConfig}
        className="max-h-[440px] min-h-[150px] w-full"
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 32,
          }}
        >
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="activity"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            fontSize={14}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} />

          <Bar dataKey="count" fill="var(--color-count)" radius={[4, 4, 4, 4]}>
            <LabelList
              dataKey="count"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
