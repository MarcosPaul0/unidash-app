"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import { ChartCard } from "../../../_components/ChartCard";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { ReasonsGivenForChoosingTheCourseChartProps } from "./reasonsGivenForChoosingTheCourseChart.interface";
import { ChartSelect } from "../../../_components/ChartSelect";
import { IncomingCourseChoiceReason } from "@unidash/api/responses/indicators.response";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { COURSE_CHOICE_REASON } from "@unidash/api/dtos/studentIncomingData.dto";

const chartConfig = {
  count: {
    label: "Motivo",
  },
  [COURSE_CHOICE_REASON.hobbyRelation]: {
    label: "Relação com hobby",
  },
  [COURSE_CHOICE_REASON.financialReasons]: {
    label: "Financeiros",
  },
  [COURSE_CHOICE_REASON.courseQuality]: {
    label: "Qualidade do curso",
  },
  [COURSE_CHOICE_REASON.sisuPreference]: {
    label: "Interessante SISU",
  },
  [COURSE_CHOICE_REASON.notFirstChoice]: {
    label: "Não prioritária",
  },
  [COURSE_CHOICE_REASON.higherEducationDesire]: {
    label: "Desejo de graduação",
  },
  [COURSE_CHOICE_REASON.professionalUpdate]: {
    label: "Atualização profissional",
  },
  [COURSE_CHOICE_REASON.other]: {
    label: "Outro",
  },
} satisfies ChartConfig;

export function ReasonsGivenForChoosingTheCourseChart({
  studentIncomingByCourseChoiceReason,
}: ReasonsGivenForChoosingTheCourseChartProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<IncomingCourseChoiceReason[]>({
    indicators: studentIncomingByCourseChoiceReason,
    initialData: [],
  });

  return (
    <ChartCard
      title="Motivos declarados pelos ingressantes para escolha do curso por ano"
      description="Fonte dos dados: registros institucionais da coordenação do curso"
      complement={
        <ChartSelect
          options={filterOptions}
          onChange={changeFilterOption}
          value={activeFilterOption}
        />
      }
    >
      <ChartContainer config={chartConfig} className="min-h-[440px] w-full">
        <BarChart
          accessibilityLayer
          data={indicatorsData}
          layout="vertical"
          margin={{
            left: 0,
          }}
        >
          <YAxis
            dataKey="choiceReason"
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

          <Bar
            dataKey="count"
            layout="vertical"
            radius={8}
            fill="var(--chart-8)"
          >
            <LabelList
              dataKey="count"
              position="center"
              offset={12}
              className="fill-card-foreground text-sm md:text-lg"
              fontWeight={600}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
