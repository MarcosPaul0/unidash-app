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
import { ActionPlansChartProps } from "./actionPlansChart.interface";
import { ActionPlansTooltip } from "../ActionPlansTooltip";
import { ChartSelect } from "../../../_components/ChartSelect";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { ActionPlans } from "@unidash/api/responses/indicators.response";

const chartConfig = {
  academicActionPlans: {
    label: "Plano de ações acadẽmicos",
    color: "var(--chart-13)",
  },
  administrativeActionPlans: {
    label: "Plano de ações administrativos",
    color: "var(--chart-12)",
  },
} satisfies ChartConfig;

export function ActionPlansChart({ actionPlans }: ActionPlansChartProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<ActionPlans>({
    indicators: actionPlans,
    initialData: {
      academicActionPlans: 0,
      administrativeActionPlans: 0,
      actionPlansDescriptions: {
        first: "",
        second: "",
      },
    },
  });

  return (
    <ChartCard
      title="Número de plano de ações realizados ao longo dos anos"
      description={`Fonte dos dados: registros institucionais da coordenação do curso`}
      complement={
        <>
          <ChartSelect
            options={filterOptions}
            onChange={changeFilterOption}
            value={activeFilterOption}
          />

          <ActionPlansTooltip
            descriptions={indicatorsData.actionPlansDescriptions}
          />
        </>
      }
    >
      <ChartContainer
        config={chartConfig}
        className="min-h-[440px] max-h-[440px] w-full"
      >
        <BarChart
          accessibilityLayer
          data={[indicatorsData]}
          margin={{
            top: 32,
          }}
        >
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            fontSize={14}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend content={<ChartLegendContent />} />

          <Bar
            dataKey="academicActionPlans"
            fill="var(--color-academicActionPlans)"
            radius={8}
          >
            <LabelList
              dataKey="academicActionPlans"
              position="top"
              offset={12}
              className="fill-card-foreground text-sm md:text-lg"
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="administrativeActionPlans"
            fill="var(--color-administrativeActionPlans)"
            radius={8}
          >
            <LabelList
              dataKey="administrativeActionPlans"
              position="top"
              offset={12}
              className="fill-card-foreground text-sm md:text-lg"
              fontWeight={600}
            />
          </Bar>

          {/* <Bar
            dataKey="resolution"
            fill="var(--color-resolution)"
            radius={8}
          >
            <LabelList
              dataKey="resolution"
              position="top"
              offset={12}
              className="fill-card-foreground text-sm md:text-lg"
              fontWeight={600}
            />
          </Bar> */}
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
