"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import { ChartCard } from "../../../_components/ChartCard";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { KnowledgeDeclaredInTechnologiesChartProps } from "./knowledgeDeclaredInTechnologiesChart.interface";
import { ChartSelect } from "../../../_components/ChartSelect";
import { IncomingTechnology } from "@unidash/api/responses/indicators.response";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { TECHNOLOGY } from "@unidash/api/dtos/studentIncomingData.dto";

const chartConfig = {
  count: {
    label: "Motivo",
  },
  [TECHNOLOGY.internetNavigation]: {
    label: "Navegação",
  },
  [TECHNOLOGY.softwareInstallation]: {
    label: "Instalação de softwares",
  },
  [TECHNOLOGY.programmingAndLanguages]: {
    label: "Programas e linguagens",
  },
  [TECHNOLOGY.spreadsheets]: {
    label: "Planilhas",
  },
  [TECHNOLOGY.operatingSystemSetup]: {
    label: "Instalação de SO",
  },
} satisfies ChartConfig;

export function KnowledgeDeclaredInTechnologiesChart({
  studentIncomingByTechnology,
}: KnowledgeDeclaredInTechnologiesChartProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<IncomingTechnology[]>({
    indicators: studentIncomingByTechnology,
    initialData: [],
  });

  return (
    <ChartCard
      title="Conhecimentos declarados em tecnologias pelos ingressantes no ano"
      description="Fonte dos dados: registros institucionais da coordenação do curso"
      complement={
        <ChartSelect
          options={filterOptions}
          onChange={changeFilterOption}
          value={activeFilterOption}
        />
      }
    >
      <ChartContainer className="max-h-[430px] h-full" config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={indicatorsData}
          layout="vertical"
          margin={{
            left: 0,
          }}
        >
          <YAxis
            dataKey="technology"
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
            fill="var(--chart-10)"
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
