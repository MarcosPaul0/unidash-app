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
import { Bar, BarChart, CartesianGrid, LabelList } from "recharts";
import { DistributionOfTimeSpentCompletingInternshipChartProps } from "./distributionOfTimeSpentCompletingInternshipChart.interface";
import { ChartSelect } from "../../../_components/ChartSelect";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { InternshipByConclusionTime } from "@unidash/api/responses/indicators.response";

const chartConfig = {
  bigger: {
    label: "Maior",
    color: "var(--chart-3)",
  },
  medium: {
    label: "Médio",
    color: "var(--chart-5)",
  },
  smaller: {
    label: "Menor",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function DistributionOfTimeSpentCompletingInternshipChart({
  internshipsByConclusionTime,
}: DistributionOfTimeSpentCompletingInternshipChartProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<InternshipByConclusionTime>({
    indicators: internshipsByConclusionTime,
    initialData: {
      bigger: 0,
      medium: 0,
      smaller: 0,
    },
  });

  return (
    <ChartCard
      title="Número de alunos, por tempo gasto em dias, para conclusão de estágio supervisionado"
      description="Fonte dos dados: registros institucionais da coordenação de estágios do curso. Onde maior corresponde a tempo maior ou igual a 100 dias, médio à 80 dias e menor à 60 dias"
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
          data={[indicatorsData]}
          margin={{
            top: 32,
          }}
        >
          <CartesianGrid vertical={false} />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} className="text-base" />

          <Bar dataKey="bigger" fill="var(--color-bigger)" radius={8}>
            <LabelList
              dataKey="bigger"
              position="top"
              offset={12}
              className="fill-card-foreground text-sm md:text-lg"
              fontWeight={600}
            />
          </Bar>

          <Bar dataKey="medium" fill="var(--color-medium)" radius={8}>
            <LabelList
              dataKey="medium"
              position="top"
              offset={12}
              className="fill-card-foreground text-sm md:text-lg"
              fontWeight={600}
            />
          </Bar>

          <Bar dataKey="smaller" fill="var(--color-smaller)" radius={8}>
            <LabelList
              dataKey="smaller"
              position="top"
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
