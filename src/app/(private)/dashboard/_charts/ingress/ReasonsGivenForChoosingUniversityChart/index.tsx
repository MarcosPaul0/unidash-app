"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import { ChartCard } from "../../../_components/ChartCard";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { ReasonsGivenForChoosingUniversityChartProps } from "./reasonsGivenForChoosingUniversityChart.interface";
import { ChartSelect } from "../../../_components/ChartSelect";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { IncomingUniversityChoiceReason } from "@unidash/api/responses/indicators.response";
import { UNIVERSITY_CHOICE_REASON } from "@unidash/api/dtos/studentIncomingData.dto";

const chartConfig = {
  count: {
    label: "Motivo",
  },
  [UNIVERSITY_CHOICE_REASON.reputation]: {
    label: "Renome da UNIFEI",
  },
  [UNIVERSITY_CHOICE_REASON.closePeople]: {
    label: "Pessoas próximas",
  },
  [UNIVERSITY_CHOICE_REASON.publicEducation]: {
    label: "Ensino público",
  },
  [UNIVERSITY_CHOICE_REASON.professionalReasons]: {
    label: "Motivos profissionais",
  },
  [UNIVERSITY_CHOICE_REASON.financialReasons]: {
    label: "Motivos financeiros",
  },
  [UNIVERSITY_CHOICE_REASON.notFirstChoice]: {
    label: "Não foi primeira escolha",
  },
  [UNIVERSITY_CHOICE_REASON.closeOriginCity]: {
    label: "Próximo a cidade de origem",
  },
  [UNIVERSITY_CHOICE_REASON.other]: {
    label: "Outras",
  },
} satisfies ChartConfig;

export function ReasonsGivenForChoosingUniversityChart({
  studentIncomingByUniversityChoiceReason,
}: ReasonsGivenForChoosingUniversityChartProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<IncomingUniversityChoiceReason[]>({
    indicators: studentIncomingByUniversityChoiceReason,
    initialData: [],
  });

  return (
    <ChartCard
      title="Motivos declarados pelos ingressantes para escolha da universidade no ano"
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
          barGap={100}
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
            fill="var(--chart-7)"
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
