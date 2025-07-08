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
  {
    year: "2025",
    undergraduateChamber: 22,
    boardOfDirectors: 12,
    courseBoard: 13,
  },
  {
    year: "2024",
    undergraduateChamber: 4,
    boardOfDirectors: 2,
    courseBoard: 3,
  },
  {
    year: "2023",
    undergraduateChamber: 5,
    boardOfDirectors: 12,
    courseBoard: 9,
  },
  {
    year: "2022",
    undergraduateChamber: 12,
    boardOfDirectors: 23,
    courseBoard: 18,
  },
  {
    year: "2021",
    undergraduateChamber: 12,
    boardOfDirectors: 21,
    courseBoard: 15,
  },
  {
    year: "2020",
    undergraduateChamber: 1,
    boardOfDirectors: 24,
    courseBoard: 20,
  },
  {
    year: "2019",
    undergraduateChamber: 23,
    boardOfDirectors: 4,
    courseBoard: 13,
  },
];

const chartConfig = {
  undergraduateChamber: {
    label: "Câmara de graduação",
    color: "var(--chart-8)",
  },
  boardOfDirectors: {
    label: "Conselho diretor",
    color: "var(--chart-1)",
  },
  courseBoard: {
    label: "Colegiado de curso",
    color: "var(--chart-10)",
  },
} satisfies ChartConfig;

export function DistributionCoordinationMeetingsChart() {
  return (
    <ChartCard
      title="Distribuição de reuniões da coordenação por tipo de instância e ano no ano de 2023"
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
            dataKey="year"
            tickLine={false}
            axisLine={false}
            fontSize={14}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} />

          <Bar
            dataKey="undergraduateChamber"
            fill="var(--color-undergraduateChamber)"
            radius={[8, 8, 8, 8]}
          >
            <LabelList
              dataKey="undergraduateChamber"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="boardOfDirectors"
            fill="var(--color-boardOfDirectors)"
            radius={[8, 8, 8, 8]}
          >
            <LabelList
              dataKey="boardOfDirectors"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="courseBoard"
            fill="var(--color-courseBoard)"
            radius={[8, 8, 8, 8]}
          >
            <LabelList
              dataKey="courseBoard"
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
