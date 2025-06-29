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
  { teacher: "Rodrigo", previousYear: 22, lastYear: 12 },
  { teacher: "Alexandre", previousYear: 4, lastYear: 2 },
  { teacher: "Elisa", previousYear: 5, lastYear: 12 },
  { teacher: "Adler", previousYear: 12, lastYear: 23 },
  { teacher: "Rafael", previousYear: 12, lastYear: 21 },
  { teacher: "Adriana", previousYear: 1, lastYear: 24 },
  { teacher: "Laércio", previousYear: 23, lastYear: 4 },
  { teacher: "Lina", previousYear: 23, lastYear: 4 },
  { teacher: "Pedro", previousYear: 23, lastYear: 4 },
  { teacher: "Vanessa", previousYear: 23, lastYear: 4 },
];

const chartConfig = {
  previousYear: {
    label: "Carga horária",
    color: "var(--chart-1)",
  },
  lastYear: {
    label: "Carga horária",
    color: "var(--chart-9)",
  },
} satisfies ChartConfig;

export function TeacherHoursDistributionChart() {
  return (
    <ChartCard
      title="Distribuição de carga horária didática por docente no ano de 2023"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
      className="col-span-4"
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
            dataKey="teacher"
            tickLine={false}
            tickMargin={20}
            axisLine={false}
            angle={334}
            fontSize={14}
            height={80}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} className="text-base" />

          {/* <Bar
            dataKey="previousYear"
            fill="var(--color-previousYear)"
            radius={[4, 4, 4, 4]}
          >
            <LabelList
              dataKey="previousYear"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar> */}

          <Bar
            dataKey="lastYear"
            fill="var(--color-lastYear)"
            radius={[8, 8, 8, 8]}
          >
            <LabelList
              dataKey="lastYear"
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
