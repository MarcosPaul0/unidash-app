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
import { RegistrationByTypeOfExtensionActivityProps } from "./registrationByTypeOfExtensionActivity.interface";
import { useSemestersChartConfiguration } from "@unidash/hooks/useSemestersChartConfiguration";
import { SemestersIndicators } from "@unidash/api/responses/indicators.response";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { ChartSelect } from "../../../_components/ChartSelect";
import { Formatter } from "@unidash/utils/formatter.util";

const typeLabels: Record<string, string> = {
  specialProjects: "Projetos especiais",
  participationInCompetitions: "Participação em competições",
  entrepreneurshipAndInnovation: "Empreendedorismo e inovação",
  eventOrganization: "Organização de eventos",
  externalInternship: "Estágios externos",
  cultureAndExtensionProjects: "Projetos de cultura e extensão",
  semiannualProjects: "Projeto semestral",
  workNonGovernmentalOrganization: "Organização não governamental",
  juniorCompanies: "Empresas juniores",
  provisionOfServicesWithSelfEmployedWorkers: "Serviços com autônomo",
};

const chartConfig = {
  firstSemester: {
    label: "Atividades registradas",
    color: "var(--chart-10)",
  },
  secondSemester: {
    label: "Segundo semestre",
    color: "var(--chart-10)",
  },
} satisfies ChartConfig;

export function RegistrationByTypeOfExtensionActivity({
  extensionActivities,
}: RegistrationByTypeOfExtensionActivityProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<SemestersIndicators>({
    indicators: extensionActivities,
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
      title="Cadastros em atividades de extensão por tipo de atividade"
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
        <BarChart
          accessibilityLayer
          data={indicatorsData.data}
          margin={{
            top: 32,
          }}
        >
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="type"
            tickLine={false}
            tickMargin={30}
            axisLine={false}
            height={80}
            fontSize={14}
            angle={-25}
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
            >
              <LabelList
                dataKey="firstSemester"
                position="inside"
                accumulate="sum"
                offset={12}
                className="fill-card-foreground"
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
                accumulate="sum"
                offset={12}
                className="fill-card-foreground"
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
