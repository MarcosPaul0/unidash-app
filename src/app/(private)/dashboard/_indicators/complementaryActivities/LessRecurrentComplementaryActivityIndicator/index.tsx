import { StudentIcon } from "@phosphor-icons/react/dist/ssr";
import { IndicatorCard } from "../../../_components/IndicatorCard";

export function LessRecurrentComplementaryActivityIndicator() {
  return (
    <IndicatorCard
      icon={<StudentIcon />}
      title="Atividade menos recorrente"
      value="Iniciação científica"
      variant="blue"
      size="md"
    />
  );
}
