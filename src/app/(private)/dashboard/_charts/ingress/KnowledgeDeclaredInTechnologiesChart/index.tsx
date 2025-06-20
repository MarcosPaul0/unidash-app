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
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
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
