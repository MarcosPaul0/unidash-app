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
import { PerformanceInDefensesChartProps } from "./performanceInDefensesChart.interface";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { OrientationsByTeacher } from "@unidash/api/responses/indicators.response";
import { ChartSelect } from "../../../_components/ChartSelect";

const chartConfig = {
  approved: {
    label: "Aprovadas",
    color: "var(--chart-1)",
  },
  failed: {
    label: "Reprovadas",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function PerformanceInDefensesChart({
  orientationsByTeacher,
}: PerformanceInDefensesChartProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<OrientationsByTeacher[]>({
    indicators: orientationsByTeacher,
    initialData: [],
  });

  return (
    <ChartCard
      title="Desempenho nas defesas de TCC por docente"
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
        <BarChart accessibilityLayer data={indicatorsData}>
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="teacher"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            fontSize={14}
            height={50}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} className="text-base" />

          <Bar
            dataKey="approved"
            stackId="a"
            fill="var(--color-approved)"
            radius={[0, 0, 4, 4]}
          >
            <LabelList
              dataKey="approved"
              position="inside"
              accumulate="none"
              offset={12}
              className="fill-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="failed"
            stackId="a"
            fill="var(--color-failed)"
            radius={[4, 4, 0, 0]}
          >
            <LabelList
              dataKey="failed"
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
