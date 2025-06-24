"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
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
    label: "Computador hobby",
    color: "var(--chart-8)",
  },
  financialReasons: {
    label: "Financeiros",
    color: "var(--chart-8)",
  },
  courseQuality: {
    label: "Qualidade do curso",
    color: "var(--chart-8)",
  },
  moreInterestingBySISU: {
    label: "Interessante SISU",
    color: "var(--chart-8)",
  },
  notFirstChoice: {
    label: "Não prioritária",
    color: "var(--chart-8)",
  },
  desireHigherEducation: {
    label: "Desejo de graduação",
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
      title="Motivos declarados pelos ingressantes para escolha do curso no ano de 2023"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
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
            axisLine={false}
            tickMargin={0}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label
            }
            width={190}
            fontSize={14}
          />

          <XAxis dataKey="count" type="number" hide />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />

          <Bar dataKey="count" layout="vertical" radius={5}>
            <LabelList
              dataKey="count"
              position="center"
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
