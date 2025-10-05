"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { ChartCard } from "@unidash/app/(private)/dashboard/_components/ChartCard";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { RegistrationByTypeOfExtensionActivityProps } from "./registrationByTypeOfExtensionActivity.interface";
import { SemestersIndicators } from "@unidash/api/responses/indicators.response";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { ChartSelect } from "../../../_components/ChartSelect";
import { Formatter } from "@unidash/utils/formatter.util";

export const EXTENSION_ACTIVITIES_LABELS: Record<string, string> = {
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
    label: "Primeiro semestre",
    color: "var(--chart-10)",
  },
  secondSemester: {
    label: "Segundo semestre",
    color: "var(--chart-10)",
  },
  total: {
    label: "Total de atividades",
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

  return (
    <ChartCard
      title="Número de atividades de extensão por tipo de atividade no ano"
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
            angle={-15}
            tickFormatter={(value) =>
              Formatter.getChartLabel(value, EXTENSION_ACTIVITIES_LABELS)
            }
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <Bar dataKey="total" stackId="a" fill="var(--color-total)" radius={8}>
            <LabelList
              dataKey="total"
              position="inside"
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
