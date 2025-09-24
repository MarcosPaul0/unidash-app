import { StudentIcon } from "@phosphor-icons/react/dist/ssr";
import { IndicatorCard } from "../../../_components/IndicatorCard";
import { IndicatorBuilder } from "@unidash/utils/indicatorBuilder/indicatorBuilder.util";
import { SuccessRateIndicatorProps } from "./successRateIndicator.interface";
import { Formatter } from "@unidash/utils/formatter.util";

export function SuccessRateIndicator({
  currentSuccessRate,
  previousSuccessRate,
}: SuccessRateIndicatorProps) {
  const percentageObservation = IndicatorBuilder.buildPercentageFromPercentages(
    {
      currentValue: currentSuccessRate,
      previousValue: previousSuccessRate,
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
      title="Taxa de sucesso"
      value={Formatter.toPercentage(currentSuccessRate)}
      variant="blue"
    />
  );
}
