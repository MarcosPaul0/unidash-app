"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { ChartCard } from "@unidash/app/(private)/dashboard/_components/ChartCard";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const chartData = [
  {
    discipline: "História",
    little: 2,
    average: 7,
    many: 4,
  },
  {
    discipline: "Geografia",
    little: 4,
    average: 9,
    many: 3,
  },
  {
    discipline: "Biologia",
    little: 4,
    average: 2,
    many: 6,
  },
  {
    discipline: "Química",
    little: 3,
    average: 2,
    many: 3,
  },
  {
    discipline: "Português",
    little: 4,
    average: 8,
    many: 3,
  },
  {
    discipline: "Matemática",
    little: 4,
    average: 2,
    many: 1,
  },
  {
    discipline: "Física",
    little: 4,
    average: 5,
    many: 9,
  },
  {
    discipline: "Inglês",
    little: 2,
    average: 2,
    many: 8,
  },
  {
    discipline: "Tecnologia",
    little: 8,
    average: 6,
    many: 2,
  },
];

const chartConfig = {
  little: {
    label: "Baixa",
    color: "var(--chart-3)",
  },
  average: {
    label: "Média",
    color: "var(--chart-5)",
  },
  many: {
    label: "Muita",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function LevelOfProficiencyDeclaredByIngressChart() {
  return (
    <ChartCard
      title="Nível de proficiência  declarada pelos ingressantes com disciplinas do ensino médio no ano de 2023"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
    >
      <ChartContainer
        config={chartConfig}
        className="max-h-[440px] min-h-[440px] w-full"
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 32,
          }}
        >
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="discipline"
            tickLine={false}
            axisLine={false}
            fontSize={14}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} className="text-base" />

          <Bar
            dataKey="little"
            fill="var(--color-little)"
            radius={[4, 4, 4, 4]}
          >
            <LabelList
              dataKey="little"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="average"
            fill="var(--color-average)"
            radius={[4, 4, 4, 4]}
          >
            <LabelList
              dataKey="average"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar dataKey="many" fill="var(--color-many)" radius={[4, 4, 4, 4]}>
            <LabelList
              dataKey="many"
              position="top"
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
