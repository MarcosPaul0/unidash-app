import { StudentIcon } from "@phosphor-icons/react/dist/ssr";
import { IndicatorCard } from "../../../_components/IndicatorCard";
import { IndicatorBuilder } from "@unidash/utils/indicatorBuilder/indicatorBuilder.util";
import { ApplicantsToSeatRatioIndicatorProps } from "./applicantsToSeatRatioIndicator.interface";
import { Formatter } from "@unidash/utils/formatter.util";

export function ApplicantsToSeatRatioIndicator({
  currentApplicantsToSeatRatio,
  previousApplicantsToSeatRatio,
}: ApplicantsToSeatRatioIndicatorProps) {
  const percentageObservation = IndicatorBuilder.buildPercentageFromValues({
    currentValue: currentApplicantsToSeatRatio,
    previousValue: previousApplicantsToSeatRatio,
    observations: {
      increase: "mais alunos ativos em relação ao ano de 2024",
      indifferent: "Permaneceu o mesmo em relação ao ano de 2024",
      regress: "menos alunos ativos em relação ao ano de 2024",
      onlyCurrent: "",
    },
  });

  return (
    <IndicatorCard
      icon={<StudentIcon />}
      observation={percentageObservation.observation}
      situation={percentageObservation.situation}
      title="Relação candidato vaga"
      value={Formatter.toDecimal(currentApplicantsToSeatRatio)}
      variant="blue"
    />
  );
}
