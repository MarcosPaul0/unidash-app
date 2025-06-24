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
import { Bar, BarChart, CartesianGrid, LabelList } from "recharts";

const chartData = [
  {
    bigger: 22,
    medium: 12,
    smaller: 13,
  },
];

const chartConfig = {
  bigger: {
    label: "Maior",
    color: "var(--chart-3)",
  },
  medium: {
    label: "Médio",
    color: "var(--chart-5)",
  },
  smaller: {
    label: "Menor",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function DistributionOfTimeSpentCompletingInternshipChart() {
  return (
    <ChartCard
      title="Distribuição do tempo gasto para conclusão de estágios supervisionados no ano de 2023"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024). Onde maior corresponde a tempo maior ou igual a 100 horas, médio à 80 horas e menor à 60 horas"
      className="col-span-3"
    >
      <ChartContainer config={chartConfig} className="min-h-[440px] w-full">
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 32,
          }}
        >
          <CartesianGrid vertical={false} />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} className="text-base" />

          <Bar
            dataKey="bigger"
            fill="var(--color-bigger)"
            radius={[4, 4, 4, 4]}
          >
            <LabelList
              dataKey="bigger"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="medium"
            fill="var(--color-medium)"
            radius={[4, 4, 4, 4]}
          >
            <LabelList
              dataKey="medium"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="smaller"
            fill="var(--color-smaller)"
            radius={[4, 4, 4, 4]}
          >
            <LabelList
              dataKey="smaller"
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
