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
  { activity: "Treinamentos", count: 22 },
  { activity: "Cursos na área", count: 4 },
  { activity: "Cursos complementares", count: 5 },
  { activity: "Cursos não relacionados", count: 12 },
  { activity: "Iniciação científica", count: 12 },
  { activity: "Atividades culturais", count: 1 },
];

const chartConfig = {
  count: {
    label: "2022",
    color: "var(--chart-9)",
  },
} satisfies ChartConfig;

export function RegistrationByTypeOfComplementaryActivity() {
  return (
    <ChartCard
      title="Cadastros de atividades complementares por tipo de atividade"
      description="Teste de descrição"
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
            tickMargin={20}
            axisLine={false}
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
