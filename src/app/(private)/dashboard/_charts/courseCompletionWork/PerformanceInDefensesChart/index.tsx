"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { ChartCard } from "../../../_components/ChartCard";

const chartData = [
  { teacher: "Adriana", approved: 186, reproved: 80 },
  { teacher: "Rodrigo", approved: 305, reproved: 200 },
  { teacher: "Alexandre", approved: 237, reproved: 120 },
  { teacher: "Minoru", approved: 73, reproved: 190 },
  { teacher: "Pedro", approved: 209, reproved: 130 },
  { teacher: "Rafael", approved: 214, reproved: 140 },
  { teacher: "Luiz", approved: 214, reproved: 140 },
  { teacher: "Adler", approved: 214, reproved: 140 },
  { teacher: "Vanessa", approved: 214, reproved: 140 },
  { teacher: "Bruno", approved: 214, reproved: 140 },
  { teacher: "Melise", approved: 214, reproved: 140 },
];

const chartConfig = {
  approved: {
    label: "Aprovadas",
    color: "var(--chart-1)",
  },
  reproved: {
    label: "Reprovadas",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function PerformanceInDefensesChart() {
  return (
    <ChartCard
      title="Desempenho nas defesas de TCC por docente"
      description="Teste de descrição"
    >
      <ChartContainer
        config={chartConfig}
        className="max-h-[440px] min-h-[150px] w-full"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="teacher"
            tickLine={false}
            tickMargin={20}
            axisLine={false}
            angle={330}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} />

          <Bar
            dataKey="approved"
            stackId="a"
            fill="var(--color-approved)"
            radius={[0, 0, 4, 4]}
          >
            <LabelList
              dataKey="approved"
              position="inside"
              accumulate="none"
              offset={12}
              className="fill-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="reproved"
            stackId="a"
            fill="var(--color-reproved)"
            radius={[4, 4, 0, 0]}
          >
            <LabelList
              dataKey="reproved"
              position="inside"
              accumulate="none"
              offset={12}
              className="fill-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
