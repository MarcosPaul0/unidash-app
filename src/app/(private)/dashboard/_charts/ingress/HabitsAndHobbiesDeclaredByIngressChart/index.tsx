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
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { IncomingHobbyOrHabit } from "@unidash/api/responses/indicators.response";
import { HabitsAndHobbiesDeclaredByIngressChartProps } from "./habitsAndHobbiesDeclaredByIngressChart.interface";
import { HOBBY_OR_HABIT } from "@unidash/api/dtos/studentIncomingData.dto";

const chartConfig = {
  count: {
    label: "Hábito e hobbies",
  },
  [HOBBY_OR_HABIT.videoGames]: {
    label: "Jogos eletrônicos",
  },
  [HOBBY_OR_HABIT.physicalActivity]: {
    label: "Ativideades físicas",
  },
  [HOBBY_OR_HABIT.listeningMusic]: {
    label: "Ouvir música",
  },
  [HOBBY_OR_HABIT.teamSports]: {
    label: "Esportes em grupo",
  },
  [HOBBY_OR_HABIT.moviesOrSeries]: {
    label: "Filmes e séries",
  },
  [HOBBY_OR_HABIT.reading]: {
    label: "Leitura",
  },
  [HOBBY_OR_HABIT.internetBrowsing]: {
    label: "Navegar na internet",
  },
  [HOBBY_OR_HABIT.playingInstrument]: {
    label: "Instrumentos musicais",
  },
  [HOBBY_OR_HABIT.socialMedia]: {
    label: "Redes sociais",
  },
  [HOBBY_OR_HABIT.traveling]: {
    label: "Viajar",
  },
  [HOBBY_OR_HABIT.individualSports]: {
    label: "Esportes individuais",
  },
  [HOBBY_OR_HABIT.handcrafting]: {
    label: "Trabalhos manuais",
  },
  [HOBBY_OR_HABIT.other]: {
    label: "Outros",
  },
} satisfies ChartConfig;

export function HabitsAndHobbiesDeclaredByIngressChart({
  studentIncomingByHobbyOrHabit,
}: HabitsAndHobbiesDeclaredByIngressChartProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<IncomingHobbyOrHabit[]>({
    indicators: studentIncomingByHobbyOrHabit,
    initialData: [],
  });

  return (
    <ChartCard
      title="Hábitos e hobbies declarados pelos alunos ingressantes no ano de 2023"
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
            dataKey="hobbyOrHabit"
            type="category"
            axisLine={false}
            tickMargin={0}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label
            }
            width={180}
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
            radius={5}
            fill="var(--chart-7)"
          >
            <LabelList
              dataKey="count"
              position="center"
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
