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
    email: 22,
    system: 12,
    resolution: 13,
  },
  {
    year: "2024",
    email: 4,
    system: 2,
    resolution: 3,
  },
  {
    year: "2023",
    email: 5,
    system: 12,
    resolution: 9,
  },
  {
    year: "2022",
    email: 12,
    system: 23,
    resolution: 18,
  },
  {
    year: "2021",
    email: 12,
    system: 21,
    resolution: 15,
  },
  {
    year: "2020",
    email: 1,
    system: 24,
    resolution: 20,
  },
  {
    year: "2019",
    email: 23,
    system: 4,
    resolution: 13,
  },
];

const chartConfig = {
  email: {
    label: "Email",
    color: "var(--chart-8)",
  },
  system: {
    label: "SIGAA",
    color: "var(--chart-1)",
  },
  resolution: {
    label: "Resoluções",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig;

export function ServicesProvidedByCoordinationChart() {
  return (
    <ChartCard
      title="Atendimentos realizados pela coordenação por tipo de canal e ano"
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
            dataKey="year"
            tickLine={false}
            axisLine={false}
            fontSize={14}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} />

          <Bar dataKey="email" fill="var(--color-email)" radius={[4, 4, 4, 4]}>
            <LabelList
              dataKey="email"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="system"
            fill="var(--color-system)"
            radius={[4, 4, 4, 4]}
          >
            <LabelList
              dataKey="system"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="resolution"
            fill="var(--color-resolution)"
            radius={[4, 4, 4, 4]}
          >
            <LabelList
              dataKey="resolution"
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
