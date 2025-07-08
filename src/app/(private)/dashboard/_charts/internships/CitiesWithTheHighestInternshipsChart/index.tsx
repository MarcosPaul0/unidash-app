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
  { city: "Itajubá", count: 22 },
  { city: "São Paulo", count: 12 },
  { city: "Campinas", count: 12 },
  { city: "São João Del Rei", count: 8 },
  { city: "São José dos Campos", count: 4 },
];

const chartConfig = {
  count: {
    label: "Quantidade de estágios realizadoss",
    color: "var(--chart-9)",
  },
} satisfies ChartConfig;

export function CitiesWithTheHighestInternshipsChart() {
  return (
    <ChartCard
      title="Cidades com maior número de estágios supervisionados cadastrados no ano de 2023"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
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

          <XAxis
            dataKey="city"
            tickLine={false}
            tickMargin={20}
            axisLine={false}
            angle={-18}
            fontSize={14}
            height={60}
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
