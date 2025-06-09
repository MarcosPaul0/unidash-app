"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { ChartCard } from "../../../_components/ChartCard";

const chartData = [
  { type: "Concluído", firstSemester: 186, secondSemester: 80 },
  { type: "Prazo máximo", firstSemester: 305, secondSemester: 200 },
  { type: "Abandono", firstSemester: 237, secondSemester: 120 },
  { type: "Transferência de IES", firstSemester: 73, secondSemester: 190 },
  { type: "Desistência", firstSemester: 209, secondSemester: 130 },
  { type: "Excluído", firstSemester: 214, secondSemester: 140 },
  { type: "Novo vestibular", firstSemester: 214, secondSemester: 140 },
];

const chartConfig = {
  firstSemester: {
    label: "Primeiro semestre",
    color: "var(--chart-6)",
  },
  secondSemester: {
    label: "Segundo semestre",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function DistributionStudentsExitChart() {
  return (
    <ChartCard
      title="Distribuição de alunos por tipo de saída e semestre do curso"
      description="Teste de descrição"
    >
      <ChartContainer
        config={chartConfig}
        className="max-h-[440px] min-h-[150px] w-full"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="type"
            tickLine={false}
            tickMargin={20}
            axisLine={false}
            angle={330}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} />

          <Bar
            dataKey="firstSemester"
            stackId="a"
            fill="var(--color-firstSemester)"
            radius={[0, 0, 4, 4]}
          >
            <LabelList
              dataKey="firstSemester"
              position="inside"
              accumulate="none"
              offset={12}
              className="fill-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="secondSemester"
            stackId="a"
            fill="var(--color-secondSemester)"
            radius={[4, 4, 0, 0]}
          >
            <LabelList
              dataKey="secondSemester"
              position="inside"
              accumulate="none"
              offset={12}
              className="fill-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
