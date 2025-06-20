"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { ChartCard } from "@unidash/app/(private)/dashboard/_components/ChartCard";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const chartData = [
  { option: "CLT", count: 22 },
  { option: "Não sabe", count: 4 },
  { option: "PJ", count: 5 },
  { option: "Área acadêmica", count: 12 },
  { option: "Empresa pública", count: 12 },
];

const chartConfig = {
  count: {
    label: "Opção",
    color: "var(--chart-11)",
  },
} satisfies ChartConfig;

export function DistributionIngressByExpectedProfessionalPerformanceChart() {
  return (
    <ChartCard
      title="Distribuição dos ingressantes por expectativa de atuação profissional"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
    >
      <ChartContainer
        config={chartConfig}
        className="min-h-[150px] h-full w-full"
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
            dataKey="option"
            tickLine={false}
            tickMargin={20}
            axisLine={false}
            angle={338}
            height={70}
            fontSize={14}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

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
