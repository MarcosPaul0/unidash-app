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
import { ActionPlansChartProps } from "./actionPlansChart.interface";
import { Formatter } from "@unidash/utils/formatter.util";

const chartConfig = {
  academicActionPlans: {
    label: "Plano de ações acadẽmicos",
    color: "var(--chart-9)",
  },
  administrativeActionPlans: {
    label: "Plano de ações administrativos",
    color: "var(--chart-12)",
  },
} satisfies ChartConfig;

export function ActionPlansChart({
  actionPlans,
  yearFrom,
  yearTo,
}: ActionPlansChartProps) {
  const period = Formatter.getIndicatorsPeriod(yearFrom, yearTo);

  return (
    <ChartCard
      title="Número de plano de ações realizados ao longo dos anos"
      description={`Fonte dos dados: registros institucionais da coordenação do curso ${period}`}
    >
      <ChartContainer
        config={chartConfig}
        className="min-h-[440px] max-h-[440px] w-full"
      >
        <BarChart
          accessibilityLayer
          data={actionPlans}
          margin={{
            top: 32,
          }}
        >
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            fontSize={14}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} />

          <Bar
            dataKey="academicActionPlans"
            fill="var(--color-academicActionPlans)"
            radius={[8, 8, 8, 8]}
          >
            <LabelList
              dataKey="academicActionPlans"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="administrativeActionPlans"
            fill="var(--color-administrativeActionPlans)"
            radius={[8, 8, 8, 8]}
          >
            <LabelList
              dataKey="administrativeActionPlans"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          {/* <Bar
            dataKey="resolution"
            fill="var(--color-resolution)"
            radius={[8, 8, 8, 8]}
          >
            <LabelList
              dataKey="resolution"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar> */}
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
