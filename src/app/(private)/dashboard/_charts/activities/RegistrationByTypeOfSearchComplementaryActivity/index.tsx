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
import { RegistrationByTypeOfSearchComplementaryActivityProps } from "./registrationByTypeOfSearchComplementaryActivity.interface";
import { useSemestersChartConfiguration } from "@unidash/hooks/useSemestersChartConfiguration";
import { SemestersIndicators } from "@unidash/api/responses/indicators.response";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { ChartSelect } from "../../../_components/ChartSelect";
import { Formatter } from "@unidash/utils/formatter.util";

const typeLabels: Record<string, string> = {
  scientificInitiation: "Iniciações científica",
  developmentInitiation: "Iniciações em desenvolvimento",
  publishedArticles: "Artigos publicados",
  fullPublishedArticles: "Artigos completos publicados",
  publishedAbstracts: "Resumos publicados",
  presentationOfWork: "Apresentações de trabalhos",
  participationInEvents: "Participações em eventos",
};

const chartConfig = {
  firstSemester: {
    label: "Primeiro semestre",
    color: "var(--chart-3)",
  },
  secondSemester: {
    label: "Segundo semestre",
    color: "var(--chart-7)",
  },
} satisfies ChartConfig;

export function RegistrationByTypeOfSearchComplementaryActivity({
  searchComplementaryActivities,
}: RegistrationByTypeOfSearchComplementaryActivityProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<SemestersIndicators>({
    indicators: searchComplementaryActivities,
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
      title="Número de atividades complementares na dimenção pesquisa por tipo de atividade no ano"
      description="Fonte dos dados: registros institucionais da coordenação do curso"
      complement={
        <ChartSelect
          options={filterOptions}
          onChange={changeFilterOption}
          value={activeFilterOption}
        />
      }
    >
      <ChartContainer
        config={chartConfig}
        className="min-h-[440px] max-h-[440px] w-full"
      >
        <BarChart accessibilityLayer data={indicatorsData.data}>
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="type"
            tickLine={false}
            tickMargin={30}
            axisLine={false}
            height={80}
            fontSize={14}
            angle={-15}
            tickFormatter={(value) =>
              Formatter.getChartLabel(value, typeLabels)
            }
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <ChartLegend
            content={<ChartLegendContent />}
            className="text-base "
          />

          <Bar
            dataKey="firstSemester"
            fill="var(--color-firstSemester)"
            radius={firstSemesterRadius}
          >
            <LabelList
              dataKey="firstSemester"
              position="inside"
              accumulate="sum"
              offset={12}
              className="fill-foreground text-sm md:text-lg"
              fontWeight={600}
            />
          </Bar>

          <Bar
            dataKey="secondSemester"
            fill="var(--color-secondSemester)"
            radius={secondSemesterRadius}
          >
            <LabelList
              dataKey="secondSemester"
              position="inside"
              accumulate="sum"
              offset={12}
              className="fill-foreground text-sm md:text-lg"
              fontWeight={600}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
