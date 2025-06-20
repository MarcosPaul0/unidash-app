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
    reason: "universityRenown",
    count: 275,
    fill: "var(--color-universityRenown)",
  },
  {
    reason: "peopleNearby",
    count: 200,
    fill: "var(--color-peopleNearby)",
  },
  {
    reason: "publicEducation",
    count: 187,
    fill: "var(--color-publicEducation)",
  },
  {
    reason: "professionalReasons",
    count: 173,
    fill: "var(--color-professionalReasons)",
  },
  {
    reason: "financialReasons",
    count: 90,
    fill: "var(--color-financialReasons)",
  },
  {
    reason: "notFirstChoice",
    count: 90,
    fill: "var(--color-notFirstChoice)",
  },
  {
    reason: "other",
    count: 90,
    fill: "var(--color-other)",
  },
];

const chartConfig = {
  count: {
    label: "Motivo",
  },
  universityRenown: {
    label: "Renome da UNIFEI",
    color: "var(--chart-7)",
  },
  peopleNearby: {
    label: "Pessoas próximas",
    color: "var(--chart-7)",
  },
  publicEducation: {
    label: "Ensino público",
    color: "var(--chart-7)",
  },
  professionalReasons: {
    label: "Motivos profissionais",
    color: "var(--chart-7)",
  },
  financialReasons: {
    label: "Motivos financeiros",
    color: "var(--chart-7)",
  },
  notFirstChoice: {
    label: "Não foi primeira escolha",
    color: "var(--chart-7)",
  },
  other: {
    label: "Outras",
    color: "var(--chart-7)",
  },
} satisfies ChartConfig;

export function ReasonsGivenForChoosingUniversityChart() {
  return (
    <ChartCard
      title="Motivos declarados pelos ingressantes para escolha da universidade"
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
          barGap={100}
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
