"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { ChartCard } from "@unidash/app/(private)/dashboard/_components/ChartCard";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { RegistrationByTypeOfExtensionComplementaryActivityProps } from "./registrationByTypeOfExtensionComplementaryActivity.interface";
import { SemestersIndicators } from "@unidash/api/responses/indicators.response";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { ChartSelect } from "../../../_components/ChartSelect";
import { Formatter } from "@unidash/utils/formatter.util";

export const EXTENSION_COMPLEMENTARY_ACTIVITIES_LABELS: Record<string, string> =
  {
    culturalActivities: "Atividades culturais",
    sportsCompetitions: "Competições esportivas",
    awardsAtEvents: "Premiação em eventos",
    studentRepresentation: "Representação estudantil",
    participationInCollegiateBodies: "Participação em órgãos colegiados",
  };

const chartConfig = {
  firstSemester: {
    label: "Primeiro semestre",
    color: "var(--chart-9)",
  },
  secondSemester: {
    label: "Segundo semestre",
    color: "var(--chart-9)",
  },
  total: {
    label: "Total de atividades",
    color: "var(--chart-9)",
  },
} satisfies ChartConfig;

export function RegistrationByTypeOfExtensionComplementaryActivity({
  extensionComplementaryActivities,
}: RegistrationByTypeOfExtensionComplementaryActivityProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<SemestersIndicators>({
    indicators: extensionComplementaryActivities,
    initialData: {
      hasDataInFirstSemester: false,
      hasDataInSecondSemester: false,
      data: [],
    },
  });

  return (
    <ChartCard
      title="Número de atividades complementares na dimenção extensão por tipo de atividade no ano"
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
            tickFormatter={(value) =>
              Formatter.getChartLabel(
                value,
                EXTENSION_COMPLEMENTARY_ACTIVITIES_LABELS
              )
            }
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />

          <Bar dataKey="total" stackId="a" fill="var(--color-total)" radius={8}>
            <LabelList
              dataKey="total"
              position="inside"
              offset={12}
              className="fill-card text-sm md:text-lg"
              fontWeight={600}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
