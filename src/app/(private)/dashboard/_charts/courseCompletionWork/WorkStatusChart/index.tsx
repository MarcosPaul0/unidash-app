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
    semester: "Primeiro semestre",
    email: 22,
    system: 12,
    resolution: 13,
  },
  {
    semester: "Segundo semestre",
    email: 4,
    system: 2,
    resolution: 3,
  },
];

const chartConfig = {
  email: {
    label: "Matrículas",
    color: "var(--chart-5)",
  },
  system: {
    label: "Defesas",
    color: "var(--chart-1)",
  },
  resolution: {
    label: "Abandono",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function WorkStatusChart() {
  return (
    <ChartCard
      title="Situação de TCCs: matrículas, defesas e abandonos por semestre no ano de 2023"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
      className="col-span-3"
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
            dataKey="semester"
            tickLine={false}
            axisLine={false}
            fontSize={14}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} className="text-base" />

          <Bar dataKey="email" fill="var(--color-email)" radius={[8, 8, 8, 8]}>
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
            radius={[8, 8, 8, 8]}
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
          </Bar>
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
