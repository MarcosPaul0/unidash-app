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
    periodical: 18,
    congress: 8,
    abstract: 10,
    bookChapter: 3,
    program: 2,
  },
  {
    teacher: "Rodrigo",
    periodical: 30,
    congress: 20,
    abstract: 10,
    bookChapter: 9,
    program: 3,
  },
  {
    teacher: "Alexandre",
    periodical: 27,
    congress: 12,
    abstract: 10,
    bookChapter: 6,
    program: 8,
  },
  {
    teacher: "Minoru",
    periodical: 7,
    congress: 19,
    abstract: 10,
    bookChapter: 3,
    program: 12,
  },
  {
    teacher: "Pedro",
    periodical: 29,
    congress: 13,
    abstract: 10,
    bookChapter: 6,
    program: 10,
  },
  {
    teacher: "Rafael",
    periodical: 21,
    congress: 14,
    abstract: 10,
    bookChapter: 5,
    program: 10,
  },
  {
    teacher: "Luiz",
    periodical: 14,
    congress: 14,
    abstract: 3,
    bookChapter: 1,
    program: 10,
  },
  {
    teacher: "Adler",
    periodical: 14,
    congress: 10,
    abstract: 9,
    bookChapter: 7,
    program: 10,
  },
  {
    teacher: "Vanessa",
    periodical: 24,
    congress: 14,
    abstract: 10,
    bookChapter: 5,
    program: 8,
  },
  {
    teacher: "Bruno",
    periodical: 14,
    congress: 10,
    abstract: 4,
    bookChapter: 5,
    program: 10,
  },
  {
    teacher: "Melise",
    periodical: 14,
    congress: 10,
    abstract: 8,
    bookChapter: 9,
    program: 10,
  },
];

const chartConfig = {
  periodical: {
    label: "Periódicos",
    color: "var(--chart-11)",
  },
  congress: {
    label: "Congressos",
    color: "var(--chart-8)",
  },
  abstract: {
    label: "Resumos",
    color: "var(--chart-7)",
  },
  bookChapter: {
    label: "Capítulo de livros",
    color: "var(--chart-6)",
  },
  program: {
    label: "Programas",
    color: "var(--chart-9)",
  },
} satisfies ChartConfig;

export function TechnicalScientificProductionsByTypeAndTeacherChart() {
  return (
    <ChartCard
      title="Produções técnico-científicas por tipo e professor"
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
            fontSize={14}
            height={80}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} />

          <Bar
            dataKey="periodical"
            stackId="a"
            fill="var(--color-periodical)"
            radius={[0, 0, 4, 4]}
          >
            <LabelList
              dataKey="periodical"
              position="inside"
              accumulate="none"
              offset={12}
              className="fill-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar dataKey="congress" stackId="a" fill="var(--color-congress)">
            <LabelList
              dataKey="congress"
              position="inside"
              accumulate="none"
              offset={12}
              className="fill-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar dataKey="abstract" stackId="a" fill="var(--color-abstract)">
            <LabelList
              dataKey="abstract"
              position="inside"
              accumulate="none"
              offset={12}
              className="fill-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="bookChapter"
            stackId="a"
            fill="var(--color-bookChapter)"
          >
            <LabelList
              dataKey="bookChapter"
              position="inside"
              accumulate="none"
              offset={12}
              className="fill-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="program"
            stackId="a"
            fill="var(--color-program)"
            radius={[4, 4, 0, 0]}
          >
            <LabelList
              dataKey="program"
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
