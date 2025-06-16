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
    property: "car",
    count: 275,
    fill: "var(--color-car)",
  },
  {
    property: "motorcycle",
    count: 200,
    fill: "var(--color-motorcycle)",
  },
  {
    property: "virtualAssistant",
    count: 187,
    fill: "var(--color-virtualAssistant)",
  },
  {
    property: "payTv",
    count: 173,
    fill: "var(--color-payTv)",
  },
  {
    property: "printer",
    count: 90,
    fill: "var(--color-printer)",
  },
  {
    property: "internet",
    count: 90,
    fill: "var(--color-internet)",
  },
  {
    property: "tablet",
    count: 90,
    fill: "var(--color-tablet)",
  },
  {
    property: "desktop",
    count: 90,
    fill: "var(--color-desktop)",
  },
  {
    property: "notebook",
    count: 90,
    fill: "var(--color-notebook)",
  },
  {
    property: "smartphone",
    count: 90,
    fill: "var(--color-smartphone)",
  },
];

const chartConfig = {
  count: {
    label: "Bens",
  },
  car: {
    label: "Carro",
    color: "var(--chart-9)",
  },
  motorcycle: {
    label: "Moto",
    color: "var(--chart-9)",
  },
  virtualAssistant: {
    label: "Assitente virtual",
    color: "var(--chart-9)",
  },
  payTv: {
    label: "TV por assinatura",
    color: "var(--chart-9)",
  },
  printer: {
    label: "Impressora",
    color: "var(--chart-9)",
  },
  internet: {
    label: "Internet",
    color: "var(--chart-9)",
  },
  tablet: {
    label: "Tablet",
    color: "var(--chart-9)",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-9)",
  },
  notebook: {
    label: "Notebook",
    color: "var(--chart-9)",
  },
  smartphone: {
    label: "Smartphone",
    color: "var(--chart-9)",
  },
} satisfies ChartConfig;

export function PersonalGoodsDeclaredByIngressChart() {
  return (
    <ChartCard
      title="Bens de uso pessoal declarados pelos alunos ingressantes"
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
            dataKey="property"
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
