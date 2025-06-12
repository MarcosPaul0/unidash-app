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
    reason: "navigation",
    count: 275,
    fill: "var(--color-navigation)",
  },
  {
    reason: "softwareInstallation",
    count: 200,
    fill: "var(--color-softwareInstallation)",
  },
  {
    reason: "programsAndLanguages",
    count: 187,
    fill: "var(--color-programsAndLanguages)",
  },
  {
    reason: "spreadsheets",
    count: 173,
    fill: "var(--color-spreadsheets)",
  },
  {
    reason: "OSInstallation",
    count: 90,
    fill: "var(--color-OSInstallation)",
  },
];

const chartConfig = {
  count: {
    label: "Motivo",
  },
  navigation: {
    label: "Navegação",
    color: "var(--chart-10)",
  },
  softwareInstallation: {
    label: "Instalação de softwares",
    color: "var(--chart-10)",
  },
  programsAndLanguages: {
    label: "Programas e linguagens",
    color: "var(--chart-10)",
  },
  spreadsheets: {
    label: "Planilhas",
    color: "var(--chart-10)",
  },
  OSInstallation: {
    label: "Instalação de SO",
    color: "var(--chart-10)",
  },
} satisfies ChartConfig;

export function KnowledgeDeclaredInTechnologiesChart() {
  return (
    <ChartCard
      title="Conhecimentos declarados em tecnologias pelos ingressantes"
      description="Teste de descrição"
    >
      <ChartContainer className="max-h-[430px] h-full" config={chartConfig}>
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
