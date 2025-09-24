"use client";

import { Bar, BarChart, LabelList, XAxis } from "recharts";
import { ChartCard } from "../../../_components/ChartCard";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { CourseQuestionsChartProps } from "./courseQuestionsChart.interface";
import { ChartSelect } from "../../../_components/ChartSelect";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { IncomingCourseComplements } from "@unidash/api/responses/indicators.response";
import { Formatter } from "@unidash/utils/formatter.util";

const questionsLabels: Record<string, string> = {
  knowRelatedCourseDifference: "Sabe a diferença entre cursos correlatos",
  nocturnalPreference: "Preferência pelo noturno",
  readPedagogicalProject: "Leu o PPC",
};

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

export function CourseQuestionsChart({
  studentIncomingByCourseComplements,
}: CourseQuestionsChartProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<IncomingCourseComplements[]>({
    indicators: studentIncomingByCourseComplements,
    initialData: [],
  });

  return (
    <ChartCard
      title="Conhecimento prévio e desejo de curso noturno entre ingressantes"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
      complement={
        <ChartSelect
          options={filterOptions}
          onChange={changeFilterOption}
          value={activeFilterOption}
        />
      }
    >
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={indicatorsData}
          margin={{
            left: 0,
          }}
        >
          <XAxis
            dataKey="question"
            tickMargin={10}
            axisLine={false}
            fontSize={12}
            tickFormatter={(value) =>
              Formatter.getChartLabel(value, questionsLabels)
            }
          />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />

          <ChartLegend content={<ChartLegendContent />} className="text-base" />

          <Bar
            dataKey="yes"
            radius={[0, 0, 5, 5]}
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
            radius={[5, 5, 0, 0]}
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
