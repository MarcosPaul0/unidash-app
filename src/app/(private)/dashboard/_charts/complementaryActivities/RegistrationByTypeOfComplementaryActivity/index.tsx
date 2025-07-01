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
    label: "Atividades registradas",
    color: "var(--chart-9)",
  },
} satisfies ChartConfig;

export function RegistrationByTypeOfComplementaryActivity() {
  return (
    <ChartCard
      title="Cadastros de atividades complementares por tipo de atividade no ano de 2023"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
    >
      <ChartContainer
        config={chartConfig}
        className="min-h-[440px] max-h-[440px] w-full"
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

          <ChartLegend content={<ChartLegendContent />} className="text-base" />

          <Bar dataKey="count" fill="var(--color-count)" radius={[8, 8, 8, 8]}>
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
