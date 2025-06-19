"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ChartCard } from "../../../_components/ChartCard";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@unidash/components/Chart";

const chartData = [
  {
    habitsAndHobbies: "games",
    count: 275,
    fill: "var(--color-games)",
  },
  {
    habitsAndHobbies: "physicalActivity",
    count: 200,
    fill: "var(--color-physicalActivity)",
  },
  {
    habitsAndHobbies: "listenMusic",
    count: 187,
    fill: "var(--color-listenMusic)",
  },
  {
    habitsAndHobbies: "teamSports",
    count: 173,
    fill: "var(--color-teamSports)",
  },
  {
    habitsAndHobbies: "moviesAndSeries",
    count: 90,
    fill: "var(--color-moviesAndSeries)",
  },
  {
    habitsAndHobbies: "reading",
    count: 90,
    fill: "var(--color-reading)",
  },
  {
    habitsAndHobbies: "surfTheInternet",
    count: 90,
    fill: "var(--color-surfTheInternet)",
  },
  {
    habitsAndHobbies: "playMusicalInstrument",
    count: 90,
    fill: "var(--color-playMusicalInstrument)",
  },
  {
    habitsAndHobbies: "socialMedia",
    count: 90,
    fill: "var(--color-socialMedia)",
  },
  {
    habitsAndHobbies: "travel",
    count: 90,
    fill: "var(--color-travel)",
  },
  {
    habitsAndHobbies: "individualSports",
    count: 90,
    fill: "var(--color-individualSports)",
  },
  {
    habitsAndHobbies: "handwork",
    count: 90,
    fill: "var(--color-handwork)",
  },
  {
    habitsAndHobbies: "other",
    count: 90,
    fill: "var(--color-other)",
  },
];

const chartConfig = {
  count: {
    label: "Hábito e hobbies",
  },
  games: {
    label: "Jogos eletrônicos",
    color: "var(--chart-7)",
  },
  physicalActivity: {
    label: "Ativideades físicas",
    color: "var(--chart-7)",
  },
  listenMusic: {
    label: "Ouvir música",
    color: "var(--chart-7)",
  },
  teamSports: {
    label: "Esportes em grupo",
    color: "var(--chart-7)",
  },
  moviesAndSeries: {
    label: "Filmes e séries",
    color: "var(--chart-7)",
  },
  reading: {
    label: "Leitura",
    color: "var(--chart-7)",
  },
  surfTheInternet: {
    label: "Navegar na internet",
    color: "var(--chart-7)",
  },
  playMusicalInstrument: {
    label: "Instrumentos musicais",
    color: "var(--chart-7)",
  },
  socialMedia: {
    label: "Redes sociais",
    color: "var(--chart-7)",
  },
  travel: {
    label: "Viajar",
    color: "var(--chart-7)",
  },
  individualSports: {
    label: "Esportes individuais",
    color: "var(--chart-7)",
  },
  handwork: {
    label: "Trabalhos manuais",
    color: "var(--chart-7)",
  },
  other: {
    label: "Outros",
    color: "var(--chart-7)",
  },
} satisfies ChartConfig;

export function HabitsAndHobbiesDeclaredByIngressChart() {
  return (
    <ChartCard
      title="Hábitos e hobbies declarados pelos alunos ingressantes"
      description="Fonte dos dados: registros institucionais da coordenação do curso (2018–2024)"
    >
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="vertical"
          margin={{
            left: 0,
          }}
        >
          <YAxis
            dataKey="habitsAndHobbies"
            type="category"
            tickLine={false}
            tickMargin={0}
            axisLine={false}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label
            }
            width={100}
          />

          <XAxis dataKey="count" type="number" hide />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />

          <Bar dataKey="count" layout="vertical" radius={5} />
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
