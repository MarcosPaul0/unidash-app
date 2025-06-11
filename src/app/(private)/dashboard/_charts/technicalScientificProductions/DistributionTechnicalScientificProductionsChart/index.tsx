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
  { productions: "Periódicos", count: 22 },
  { productions: "Congresso", count: 4 },
  { productions: "Resumo", count: 5 },
  { productions: "Capítulo de livro", count: 12 },
  { productions: "Programas", count: 12 },
];

const chartConfig = {
  count: {
    label: "2022",
    color: "var(--chart-8)",
  },
} satisfies ChartConfig;

export function DistributionTechnicalScientificProductionsChart() {
  return (
    <ChartCard
      title="Distribuição de produções técnico-científicas por tipo"
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
            dataKey="productions"
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
