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
  { type: "Dificuldades", firstSemester: 186, secondSemester: 80 },
  { type: "Carga horária", firstSemester: 305, secondSemester: 200 },
  { type: "Metodologia do professor", firstSemester: 237, secondSemester: 120 },
  { type: "Trabalho", firstSemester: 73, secondSemester: 190 },
  { type: "Perda de interesse", firstSemester: 209, secondSemester: 130 },
  { type: "Excluído", firstSemester: 214, secondSemester: 140 },
  { type: "Outro", firstSemester: 214, secondSemester: 140 },
];

const chartConfig = {
  firstSemester: {
    label: "Primeiro semestre",
    color: "var(--chart-4)",
  },
  secondSemester: {
    label: "Segundo semestre",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function EnrollmentSuspensionsChart() {
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
            radius={[0, 0, 8, 8]}
          >
            <LabelList
              dataKey="firstSemester"
              position="inside"
              accumulate="none"
              offset={12}
              className="fill-card"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="secondSemester"
            stackId="a"
            fill="var(--color-secondSemester)"
            radius={[8, 8, 0, 0]}
          >
            <LabelList
              dataKey="secondSemester"
              position="inside"
              accumulate="none"
              offset={12}
              className="fill-card"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
