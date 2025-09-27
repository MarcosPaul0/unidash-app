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
import { ChartSelect } from "../../../_components/ChartSelect";
import { DistributionStudentsExitChartProps } from "./distributionStudentsExitChart.interface";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { useSemestersChartConfiguration } from "@unidash/hooks/useSemestersChartConfiguration";
import { SemestersIndicators } from "@unidash/api/responses/indicators.response";
import { Formatter } from "@unidash/utils/formatter.util";

const typeLabels: Record<string, string> = {
  completed: "Completo",
  maximumDuration: "Tempo máximo",
  dropouts: "Abandonos",
  transfers: "Transferências",
  withdrawals: "Desistências",
  removals: "Removidos",
  newExams: "Novo vestibular",
  deaths: "Falecimento",
};

const chartConfig = {
  firstSemester: {
    label: "Primeiro semestre",
    color: "var(--chart-6)",
  },
  secondSemester: {
    label: "Segundo semestre",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function DistributionStudentsExitChart({
  departures,
}: DistributionStudentsExitChartProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<SemestersIndicators>({
    indicators: departures,
    initialData: {
      hasDataInFirstSemester: false,
      hasDataInSecondSemester: false,
      data: [],
    },
  });

  const { firstSemesterRadius, secondSemesterRadius } =
    useSemestersChartConfiguration({ indicatorsData });

  return (
    <ChartCard
      title="Distribuição de alunos por tipo de saída e semestre"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
      className="col-span-4"
      complement={
        <ChartSelect
          options={filterOptions}
          onChange={changeFilterOption}
          value={activeFilterOption}
        />
      }
    >
      <ChartContainer config={chartConfig} className="min-h-[440px] w-full">
        <BarChart accessibilityLayer data={indicatorsData.data}>
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="type"
            tickLine={false}
            tickMargin={30}
            axisLine={false}
            angle={340}
            height={100}
            fontSize={14}
            tickFormatter={(value) =>
              Formatter.getChartLabel(value, typeLabels)
            }
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} className="text-base" />

          {indicatorsData.hasDataInFirstSemester && (
            <Bar
              dataKey="firstSemester"
              stackId="a"
              fill="var(--color-firstSemester)"
              radius={firstSemesterRadius}
              height={440}
            >
              <LabelList
                dataKey="firstSemester"
                position="inside"
                accumulate="none"
                offset={12}
                className="fill-foreground"
                fontSize={18}
                fontWeight={600}
              />
            </Bar>
          )}

          {indicatorsData.hasDataInSecondSemester && (
            <Bar
              dataKey="secondSemester"
              stackId="a"
              fill="var(--color-secondSemester)"
              radius={secondSemesterRadius}
              height={440}
            >
              <LabelList
                dataKey="secondSemester"
                position="inside"
                accumulate="none"
                offset={12}
                className="fill-foreground"
                fontSize={18}
                fontWeight={600}
              />
            </Bar>
          )}
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
