"use client";

import { ActionPlansChartProps } from "./actionPlansChart.interface";
import { ChartSelect } from "../../../_components/ChartSelect";
import { useChartFilter } from "@unidash/hooks/useChartFilter";
import { ActionPlans } from "@unidash/api/responses/indicators.response";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@unidash/components/Card";
import { ChecksIcon, SparkleIcon } from "@phosphor-icons/react/dist/ssr";

export function ActionPlansChart({ actionPlans }: ActionPlansChartProps) {
  const {
    changeFilterOption,
    indicatorsData,
    filterOptions,
    activeFilterOption,
  } = useChartFilter<ActionPlans>({
    indicators: actionPlans,
    initialData: {},
  });

  const hasFirstDescription = Boolean(indicatorsData?.first);
  const hasSecondDescription = Boolean(indicatorsData?.second);

  if (!hasFirstDescription && !hasSecondDescription) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <SparkleIcon size={24} weight="fill" /> Plano de Ação executado
        </CardTitle>

        <ChartSelect
          options={filterOptions}
          onChange={changeFilterOption}
          value={activeFilterOption}
        />
      </CardHeader>

      <CardContent>
        {hasFirstDescription && (
          <p className="flex flex-col gap-2 p-2 rounded-xl max-w-xl">
            <strong className="flex items-center gap-2">
              <ChecksIcon size={24} />
              Descrição das ações no primeiro semestre:
            </strong>
            <span>{indicatorsData.first?.academicActionPlans}</span>
            <span>{indicatorsData.first?.administrativeActionPlans}</span>
          </p>
        )}

        {hasSecondDescription && (
          <p className="flex flex-col gap-2 p-2 rounded-xl max-w-xl">
            <strong className="flex items-center gap-2">
              <ChecksIcon size={24} />
              Descrição das ações no segundo semestre:
            </strong>
            <span>{indicatorsData.second?.academicActionPlans}</span>
            <span>{indicatorsData.second?.administrativeActionPlans}</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}
