"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { ChartCard } from "../../../_components/ChartCard";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
import { ActiveStudentsOverTimeChartProps } from "./activeStudentsOverTimeChart.interface";

const chartConfig = {
  actives: {
    label: "Alunos ativos",
    color: "var(--chart-7)",
  },
} satisfies ChartConfig;

export function ActiveStudentsOverTimeChart({
  students,
}: ActiveStudentsOverTimeChartProps) {
  return (
    <ChartCard
      title="Alunos ativos do curso no período"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
      className="col-span-3"
    >
      <ChartContainer config={chartConfig} className="min-h-[440px] w-full">
        <LineChart
          accessibilityLayer
          data={students}
          margin={{
            left: 30,
            right: 30,
            top: 60,
          }}
        >
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={14}
          />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />

          <Line
            dataKey="actives"
            type="linear"
            stroke="var(--color-actives)"
            strokeWidth={2}
            dot={{
              fill: "var(--color-actives)",
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Line>
        </LineChart>
      </ChartContainer>
    </ChartCard>
  );
}
