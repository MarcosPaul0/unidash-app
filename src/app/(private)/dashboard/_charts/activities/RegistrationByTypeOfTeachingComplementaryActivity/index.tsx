"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";
import { ChartCard } from "@unidash/app/(private)/dashboard/_components/ChartCard";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { RegistrationByTypeOfTeachingComplementaryActivityProps } from "./registrationByTypeOfTeachingComplementaryActivity.interface";
import { SemestersIndicators } from "@unidash/api/responses/indicators.response";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { ChartSelect } from "../../../_components/ChartSelect";
import { Formatter } from "@unidash/utils/formatter.util";

export const TEACHING_COMPLEMENTARY_ACTIVITIES_LABELS: Record<string, string> =
  {
    subjectMonitoring: "Monitoria de disciplinas",
    sponsorshipOfNewStudents: "Apadrinhamento",
    providingTraining: "Treinamentos",
    coursesInTheArea: "Cursos na área do curso",
    coursesOutsideTheArea: "Cursos não relacionados ao curso",
    electivesDisciplines: "Disciplinas eletivas",
    complementaryCoursesInTheArea: "Cursos complementares ao curso",
    preparationForTest: "Preparação ENADE",
  };

const chartConfig = {
  firstSemester: {
    label: "Primeiro semestre",
  },
  secondSemester: {
    label: "Segundo semestre",
  },
  total: {
    label: "Total de atividades",
    color: "var(--chart-12)",
  },
} satisfies ChartConfig;

export function RegistrationByTypeOfTeachingComplementaryActivity({
  teachingComplementaryActivities,
}: RegistrationByTypeOfTeachingComplementaryActivityProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<SemestersIndicators>({
    indicators: teachingComplementaryActivities,
    initialData: {
      hasDataInFirstSemester: false,
      hasDataInSecondSemester: false,
      data: [],
    },
  });

  return (
    <ChartCard
      title="Número de atividades complementares na dimenção ensino por tipo de atividade no ano"
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
              Formatter.getChartLabel(
                value,
                TEACHING_COMPLEMENTARY_ACTIVITIES_LABELS
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
