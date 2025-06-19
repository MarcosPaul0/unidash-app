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
  {
    level: "techniqueInTheArea",
    students: 275,
    fill: "var(--color-techniqueInTheArea)",
  },
  {
    level: "techniqueOutTheArea",
    students: 200,
    fill: "var(--color-techniqueOutTheArea)",
  },
  {
    level: "higherInTheArea",
    students: 187,
    fill: "var(--color-higherInTheArea)",
  },
  {
    level: "higherOutTheArea",
    students: 173,
    fill: "var(--color-higherOutTheArea)",
  },
  { level: "none", students: 90, fill: "var(--color-none)" },
];

const chartConfig = {
  students: {
    label: "Ingressantes",
  },
  techniqueInTheArea: {
    label: "Formação técnica em tecnologia",
    color: "var(--chart-1)",
  },
  techniqueOutTheArea: {
    label: "Formação técnica não tecnologica",
    color: "var(--chart-3)",
  },
  higherInTheArea: {
    label: "Formação superior em tecnologia",
    color: "var(--chart-5)",
  },
  higherOutTheArea: {
    label: "Formação superior não tecnologica",
    color: "var(--chart-6)",
  },
  none: {
    label: "Não possui",
    color: "var(--chart-7)",
  },
} satisfies ChartConfig;

export function TrainingProfileIngressChart() {
  return (
    <ChartCard
      title="Perfil de formação dos ingressantes por tipo e área de conhecimento"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
      className="col-span-4"
    >
      <ChartContainer
        config={chartConfig}
        className="[&_.recharts-pie-label-text]:fill-foreground max-h-[330px] w-full max-w-[720px]"
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
            className="flex-col items-start"
          />
        </PieChart>
      </ChartContainer>
    </ChartCard>
  );
}
