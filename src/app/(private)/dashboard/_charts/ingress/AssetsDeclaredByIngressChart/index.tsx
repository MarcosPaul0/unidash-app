"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import { ChartCard } from "../../../_components/ChartCard";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { ChartSelect } from "../../../_components/ChartSelect";
import { AssetsDeclaredByIngressChartProps } from "./assetsDeclaredByIngressChart.interface";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { IncomingAsset } from "@unidash/api/responses/indicators.response";
import { ASSET } from "@unidash/api/dtos/studentIncomingData.dto";

const chartConfig = {
  count: {
    label: "Bens",
  },
  [ASSET.car]: {
    label: "Carro",
  },
  [ASSET.motorcycle]: {
    label: "Moto",
  },
  [ASSET.virtualAssistant]: {
    label: "Assitente virtual",
  },
  [ASSET.payTv]: {
    label: "TV por assinatura",
  },
  [ASSET.printer]: {
    label: "Impressora",
  },
  [ASSET.internet]: {
    label: "Internet",
  },
  [ASSET.tablet]: {
    label: "Tablet",
  },
  [ASSET.desktopComputer]: {
    label: "Desktop",
  },
  [ASSET.laptop]: {
    label: "Notebook",
  },
  [ASSET.smartTv]: {
    label: "Smart TV",
  },
  [ASSET.smartphone]: {
    label: "Smartphone",
  },
} satisfies ChartConfig;

export function AssetsDeclaredByIngressChart({
  studentIncomingByAsset,
}: AssetsDeclaredByIngressChartProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<IncomingAsset[]>({
    indicators: studentIncomingByAsset,
    initialData: [],
  });

  return (
    <ChartCard
      title="Bens de uso pessoal declarados pelos alunos ingressantes por ano"
      description="Fonte dos dados: registros institucionais da coordenação do curso"
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
          layout="vertical"
          margin={{
            left: 0,
          }}
        >
          <YAxis
            dataKey="asset"
            type="category"
            axisLine={false}
            tickMargin={0}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label
            }
            width={130}
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
            fill="var(--chart-9)"
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
