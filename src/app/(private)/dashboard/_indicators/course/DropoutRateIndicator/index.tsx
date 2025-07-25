import { StudentIcon } from "@phosphor-icons/react/dist/ssr";
import { IndicatorCard } from "../../../_components/IndicatorCard";
import { IndicatorBuilder } from "@unidash/utils/indicatorBuilder/indicatorBuilder.util";

export function DropoutRateIndicator() {
  const currentStudentsActive = 40;
  const previousStudentsActive = 40;

  const percentageObservation = IndicatorBuilder.buildPercentageFromPercentages(
    {
      currentValue: currentStudentsActive,
      previousValue: previousStudentsActive,
      observations: {
        increase: "mais alunos ativos em relação ao ano de 2024",
        indifferent: "Permaneceu o mesmo em relação ao ano de 2024",
        regress: "menos alunos ativos em relação ao ano de 2024",
      },
    }
  );

  return (
    <IndicatorCard
      icon={<StudentIcon />}
      observation={percentageObservation.observation}
      situation={percentageObservation.situation}
      title="Taxa de evasão em 2025"
      value={currentStudentsActive}
      variant="blue"
    />
  );
}
