"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { ChartCard } from "../../../_components/ChartCard";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

const chartData = [
  { year: "2020", activeStudents: 186 },
  { year: "2021", activeStudents: 305 },
  { year: "2022", activeStudents: 237 },
  { year: "2023", activeStudents: 73 },
  { year: "2024", activeStudents: 209 },
  { year: "2025", activeStudents: 214 },
];

const chartConfig = {
  activeStudents: {
    label: "Alunos ativos",
    color: "var(--chart-7)",
  },
} satisfies ChartConfig;

export function ActiveStudentsOverTimeChart() {
  return (
    <ChartCard
      title="Alunos ativos ao longo do tempo no curso"
      description="Teste de descrição"
    >
      <ChartContainer
        config={chartConfig}
        className="max-h-[440px] min-h-[150px] w-full"
      >
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 16,
            right: 16,
            top: 10,
          }}
        >
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />

          <Line
            dataKey="activeStudents"
            type="linear"
            stroke="var(--color-activeStudents)"
            strokeWidth={2}
            dot={{
              fill: "var(--color-activeStudents)",
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
