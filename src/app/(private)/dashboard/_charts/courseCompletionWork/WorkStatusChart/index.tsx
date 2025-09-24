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
import { WorkStatusChartProps } from "./workStatusChart.interface";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { WorkStatus } from "@unidash/api/responses/indicators.response";
import { ChartSelect } from "../../../_components/ChartSelect";
import { SEMESTER } from "@unidash/api/dtos/courseStudentsData.dto";
import { Formatter } from "@unidash/utils/formatter.util";

const semesterLabels: Record<string, string> = {
  [SEMESTER.first]: "Primeiro semestre",
  [SEMESTER.second]: "Segundo semestre",
};

const chartConfig = {
  enrollments: {
    label: "Matrículas",
    color: "var(--chart-5)",
  },
  defenses: {
    label: "Defesas",
    color: "var(--chart-1)",
  },
  abandonments: {
    label: "Abandono",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function WorkStatusChart({ worksStatus }: WorkStatusChartProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<WorkStatus[]>({
    indicators: worksStatus,
    initialData: [],
  });

  return (
    <ChartCard
      title="Situação de TCCs: matrículas, defesas e abandonos por semestre"
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
        <BarChart
          accessibilityLayer
          data={indicatorsData}
          margin={{
            top: 32,
          }}
        >
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="semester"
            tickLine={false}
            axisLine={false}
            fontSize={14}
            tickFormatter={(value) =>
              Formatter.getChartLabel(value, semesterLabels)
            }
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} className="text-base" />

          <Bar
            dataKey="enrollments"
            fill="var(--color-enrollments)"
            radius={[8, 8, 8, 8]}
          >
            <LabelList
              dataKey="enrollments"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="defenses"
            fill="var(--color-defenses)"
            radius={[8, 8, 8, 8]}
          >
            <LabelList
              dataKey="defenses"
              position="top"
              offset={12}
              className="fill-card-foreground"
              fontSize={18}
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="abandonments"
            fill="var(--color-abandonments)"
            radius={[8, 8, 8, 8]}
          >
            <LabelList
              dataKey="abandonments"
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
