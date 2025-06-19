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
  {
    teacher: "Adriana",
    researchProjects: 18,
    extensionProjects: 8,
  },
  {
    teacher: "Rodrigo",
    researchProjects: 30,
    extensionProjects: 20,
  },
  {
    teacher: "Alexandre",
    researchProjects: 27,
    extensionProjects: 12,
  },
  {
    teacher: "Minoru",
    researchProjects: 7,
    extensionProjects: 19,
  },
  {
    teacher: "Pedro",
    researchProjects: 29,
    extensionProjects: 13,
  },
  {
    teacher: "Rafael",
    researchProjects: 21,
    extensionProjects: 14,
  },
  {
    teacher: "Luiz",
    researchProjects: 14,
    extensionProjects: 14,
  },
  {
    teacher: "Adler",
    researchProjects: 14,
    extensionProjects: 10,
  },
  {
    teacher: "Vanessa",
    researchProjects: 24,
    extensionProjects: 14,
  },
  {
    teacher: "Bruno",
    researchProjects: 14,
    extensionProjects: 10,
  },
  {
    teacher: "Melise",
    researchProjects: 14,
    extensionProjects: 10,
  },
];

const chartConfig = {
  researchProjects: {
    label: "Projetos de pesquisa",
    color: "var(--chart-7)",
  },
  extensionProjects: {
    label: "Projetos de extensão",
    color: "var(--chart-10)",
  },
} satisfies ChartConfig;

export function ResearchAndExtensionProjectsByTeacherChart() {
  return (
    <ChartCard
      title="Projetos de pesquisa e extensão realizadas pelos professores"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
    >
      <ChartContainer
        config={chartConfig}
        className="max-h-[440px] min-h-[150px] w-full"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="teacher"
            tickLine={false}
            tickMargin={20}
            axisLine={false}
            angle={330}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} />

          <Bar
            dataKey="researchProjects"
            stackId="a"
            fill="var(--color-researchProjects)"
            radius={[0, 0, 4, 4]}
          >
            <LabelList
              dataKey="researchProjects"
              position="inside"
              accumulate="none"
              offset={12}
              className="fill-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="extensionProjects"
            stackId="a"
            fill="var(--color-extensionProjects)"
            radius={[4, 4, 0, 0]}
          >
            <LabelList
              dataKey="extensionProjects"
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
