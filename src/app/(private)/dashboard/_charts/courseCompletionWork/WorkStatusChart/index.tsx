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
      title="Atendimentos realizados pela coordenação por tipo de canal e ano"
      description="Teste de descrição"
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

          <XAxis dataKey="semester" tickLine={false} axisLine={false} />

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
