"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ChartCard } from "../../../_components/ChartCard";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";

const chartData = [
  {
    reason: "computerAsHobby",
    count: 275,
    fill: "var(--color-computerAsHobby)",
  },
  {
    reason: "financialReasons",
    count: 200,
    fill: "var(--color-financialReasons)",
  },
  {
    reason: "courseQuality",
    count: 187,
    fill: "var(--color-courseQuality)",
  },
  {
    reason: "moreInterestingBySISU",
    count: 173,
    fill: "var(--color-moreInterestingBySISU)",
  },
  {
    reason: "notFirstChoice",
    count: 90,
    fill: "var(--color-notFirstChoice)",
  },
  {
    reason: "desireHigherEducation",
    count: 90,
    fill: "var(--color-desireHigherEducation)",
  },
  {
    reason: "professionalUpdate",
    count: 90,
    fill: "var(--color-professionalUpdate)",
  },
];

const chartConfig = {
  count: {
    label: "Motivo",
  },
  computerAsHobby: {
    label: "Computador como hobby",
    color: "var(--chart-8)",
  },
  financialReasons: {
    label: "Motivos financeiros",
    color: "var(--chart-8)",
  },
  courseQuality: {
    label: "Qualidade do curso",
    color: "var(--chart-8)",
  },
  moreInterestingBySISU: {
    label: "Mais interessante pelo SISU",
    color: "var(--chart-8)",
  },
  notFirstChoice: {
    label: "Não foi a primeiraopção",
    color: "var(--chart-8)",
  },
  desireHigherEducation: {
    label: "Desejo de formação superior",
    color: "var(--chart-8)",
  },
  professionalUpdate: {
    label: "Atualização profissional",
    color: "var(--chart-8)",
  },
} satisfies ChartConfig;

export function ReasonsGivenForChoosingTheCourseChart() {
  return (
    <ChartCard
      title="Motivos declarados pelos ingressantes para escolha do curso"
      description="Teste de descrição"
    >
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="vertical"
          margin={{
            left: 0,
          }}
        >
          <YAxis
            dataKey="reason"
            type="category"
            tickLine={false}
            tickMargin={0}
            axisLine={false}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label
            }
            width={100}
          />

          <XAxis dataKey="count" type="number" hide />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />

          <Bar dataKey="count" layout="vertical" radius={5} />
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
