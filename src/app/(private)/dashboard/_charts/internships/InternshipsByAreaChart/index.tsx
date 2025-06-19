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
  { activity: "Desenvolvimento web", count: 22 },
  { activity: "Desenvolvimento mobile", count: 4 },
  { activity: "Desenvolvedor de software", count: 5 },
  { activity: "Desenvolvimento de jogos", count: 12 },
  { activity: "Automação industrial", count: 12 },
  { activity: "Cibersegurança", count: 1 },
];

const chartConfig = {
  count: {
    label: "2022",
    color: "var(--chart-8)",
  },
} satisfies ChartConfig;

export function InternshipsByAreaChart() {
  return (
    <ChartCard
      title="Estágios supervisionados por área de atuação profissional"
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
            tickMargin={40}
            axisLine={false}
            height={80}
            fontSize={14}
            angle={340}
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
