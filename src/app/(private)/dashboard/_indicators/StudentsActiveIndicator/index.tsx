import { StudentIcon } from "@phosphor-icons/react/dist/ssr";
import { IndicatorCard } from "../../_components/IndicatorCard";
import { IndicatorBuilder } from "@unidash/utils/indicatorBuilder/indicatorBuilder.util";

export function StudentsActiveIndicator() {
  const currentStudentsActive = 40;
  const previousStudentsActive = 30;

  const percentageObservation = IndicatorBuilder.percentageBuild({
    currentValue: currentStudentsActive,
    previousValue: previousStudentsActive,
    observations: {
      increase: "mais alunos ativos em relação ao ano de 2024",
      indifferent: "Permaneceu o mesmo em relação ao ano de 2024",
      regress: "menos alunos ativos em relação ao ano de 2024",
    },
  });

  return (
    <IndicatorCard
      icon={<StudentIcon />}
      observation={percentageObservation.observation}
      situation={percentageObservation.situation}
      title="Alunos ativos em 2025"
      value={currentStudentsActive}
      variant="blue"
    />
  );
}
