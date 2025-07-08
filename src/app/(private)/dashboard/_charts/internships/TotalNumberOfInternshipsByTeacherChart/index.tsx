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
  { teacher: "Minoru", orientations: 22 },
  { teacher: "Isabela", orientations: 4 },
  { teacher: "Bruno", orientations: 5 },
  { teacher: "Laércio", orientations: 12 },
  { teacher: "Phyllipe", orientations: 12 },
  { teacher: "Claudino", orientations: 1 },
  { teacher: "Vanessa", orientations: 2 },
  { teacher: "Lina", orientations: 6 },
  { teacher: "Rafael", orientations: 3 },
  { teacher: "Adler", orientations: 1 },
  { teacher: "Pedro", orientations: 17 },
  { teacher: "Rodrigo", orientations: 11 },
];

const chartConfig = {
  orientations: {
    label: "Orientações realizadas",
    color: "var(--chart-7)",
  },
} satisfies ChartConfig;

export function TotalNumberOfInternshipsByTeacherChart() {
  return (
    <ChartCard
      title="Total de orientações de estágio supervisionado por professor no ano de 2023"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
      className="col-span-4"
    >
      <ChartContainer
        config={chartConfig}
        className="min-h-[440px] h-full w-full"
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
            dataKey="teacher"
            tickLine={false}
            tickMargin={20}
            axisLine={false}
            angle={330}
            height={50}
            fontSize={14}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} className="text-base" />

          <Bar
            dataKey="orientations"
            fill="var(--color-orientations)"
            radius={[8, 8, 8, 8]}
          >
            <LabelList
              dataKey="orientations"
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
