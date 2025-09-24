import { StudentIcon } from "@phosphor-icons/react/dist/ssr";
import { IndicatorCard } from "../../../_components/IndicatorCard";
import { IndicatorBuilder } from "@unidash/utils/indicatorBuilder/indicatorBuilder.util";
import { DropoutRateIndicatorProps } from "./dropoutRateIndicator.interface";
import { Formatter } from "@unidash/utils/formatter.util";

export function DropoutRateIndicator({
  currentDropoutRate,
  previousDropoutRate,
}: DropoutRateIndicatorProps) {
  const percentageObservation = IndicatorBuilder.buildPercentageFromPercentages(
    {
      currentValue: currentDropoutRate,
      previousValue: previousDropoutRate,
      observations: {
        increase: "mais alunos ativos em relação ao ano de 2024",
        indifferent: "Permaneceu o mesmo em relação ao ano de 2024",
        regress: "menos alunos ativos em relação ao ano de 2024",
        onlyCurrent: "",
      },
    }
  );

  return (
    <IndicatorCard
      icon={<StudentIcon />}
      observation={percentageObservation.observation}
      situation={percentageObservation.situation}
      title="Taxa de evasão"
      value={Formatter.toPercentage(currentDropoutRate)}
      variant="blue"
    />
  );
}
