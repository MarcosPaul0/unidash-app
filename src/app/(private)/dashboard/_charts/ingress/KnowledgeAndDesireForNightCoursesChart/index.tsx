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
    opinion: "Preferência pelo noturno",
    yes: 12,
    no: 18,
  },
  {
    opinion: "Sabe a diferença entre CCO, SIN e ECO",
    yes: 15,
    no: 8,
  },
  {
    opinion: "Analisou o PPC antes de optar por CCO",
    yes: 13,
    no: 3,
  },
];

const chartConfig = {
  yes: {
    label: "Sim",
    color: "var(--chart-1)",
  },
  no: {
    label: "Não",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function KnowledgeAndDesireForNightCoursesChart() {
  return (
    <ChartCard
      title="Conhecimento prévio e desejo de curso noturno entre ingressantes"
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
            dataKey="opinion"
            type="category"
            tickMargin={10}
            axisLine={false}
            width={130}
            fontSize={14}
          />

          <XAxis dataKey="no" type="number" hide />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />

          <Bar
            dataKey="yes"
            layout="vertical"
            radius={[5, 0, 0, 5]}
            stackId="a"
            fill="var(--color-yes)"
          >
            <LabelList
              dataKey="yes"
              position="center"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="no"
            layout="vertical"
            radius={[0, 5, 5, 0]}
            stackId="a"
            fill="var(--color-no)"
          >
            <LabelList
              dataKey="no"
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
