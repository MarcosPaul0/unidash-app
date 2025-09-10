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
import { RegistrationLocksChartProps } from "./registrationLocksChart.interface";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { ChartSelect } from "../../../_components/ChartSelect";
import { useSemestersChartConfiguration } from "@unidash/hooks/useSemestersChartConfiguration";
import { SemestersIndicators } from "@unidash/api/responses/indicators.response";

const chartConfig = {
  firstSemester: {
    label: "Primeiro semestre",
    color: "var(--chart-4)",
  },
  secondSemester: {
    label: "Segundo semestre",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function RegistrationLocksChart({
  registrationLocks,
}: RegistrationLocksChartProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<SemestersIndicators>({
    indicators: registrationLocks,
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
      title="Trancamentos de matrícula por semestre e motivo declarado"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
      className="col-span-3"
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
            height={80}
            fontSize={14}
            angle={-25}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} className="text-base" />

          {indicatorsData.hasDataInFirstSemester && (
            <Bar
              dataKey="firstSemester"
              stackId="a"
              fill="var(--color-firstSemester)"
              radius={firstSemesterRadius}
            >
              <LabelList
                dataKey="firstSemester"
                position="inside"
                accumulate="none"
                offset={12}
                className="fill-card"
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
            >
              <LabelList
                dataKey="secondSemester"
                position="inside"
                accumulate="none"
                offset={12}
                className="fill-card"
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
