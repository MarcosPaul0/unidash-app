"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { Pie, PieChart } from "recharts";
import { ChartCard } from "../../../_components/ChartCard";

const chartData = [
  { level: "fluent", students: 275, fill: "var(--color-fluent)" },
  { level: "intermediary", students: 200, fill: "var(--color-intermediary)" },
  { level: "low", students: 187, fill: "var(--color-low)" },
];

const chartConfig = {
  students: {
    label: "Ingressantes",
  },
  fluent: {
    label: "Fluente",
    color: "var(--chart-1)",
  },
  intermediary: {
    label: "Intermediário",
    color: "var(--chart-5)",
  },
  low: {
    label: "Baixo",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function EnglishProficiencyLevelIngressChart() {
  return (
    <ChartCard
      title="Nível de proficiência em inglês dos alunos ingressantes no ano de 2023"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
      className="col-span-3"
    >
      <ChartContainer
        config={chartConfig}
        className="[&_.recharts-pie-label-text]:fill-foreground mx-auto max-h-[330px] pb-0"
      >
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <Pie
            data={chartData}
            dataKey="students"
            label
            nameKey="level"
            fontSize={18}
            fontWeight={600}
          />

          <ChartLegend
            content={<ChartLegendContent nameKey="level" />}
            layout="vertical"
            align="right"
            verticalAlign="middle"
            className="flex-col items-start text-base"
          />
        </PieChart>
      </ChartContainer>
    </ChartCard>
  );
}
